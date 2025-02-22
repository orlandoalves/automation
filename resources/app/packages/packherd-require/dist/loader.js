"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackherdModuleLoader = void 0;
const tslib_1 = require("tslib");
const debug_1 = tslib_1.__importDefault(require("debug"));
const module_1 = tslib_1.__importDefault(require("module"));
const path_1 = tslib_1.__importDefault(require("path"));
const assert_1 = require("assert");
const logDebug = (0, debug_1.default)('cypress-verbose:packherd:debug');
const logTrace = (0, debug_1.default)('cypress-verbose:packherd:trace');
// Very simple implementation of obtaining a module key by just prefixing the relative path with `./`
const defaultGetModuleKey = ({ moduleUri, baseDir }) => {
    const moduleRelativePath = path_1.default.relative(baseDir, moduleUri);
    return { moduleKey: `./${moduleRelativePath}`, moduleRelativePath };
};
/**
 * This keeps track of which modules are being loaded currently and is used to handle circular imports properly.
 *
 * @category Loader
 */
class LoadingModules {
    constructor() {
        this.currentlyLoading = new Map();
    }
    start(id, mod) {
        if (this.currentlyLoading.has(id)) {
            throw new Error(`Already loading ${id}\nstack: ${this.stack()}`);
        }
        this.currentlyLoading.set(id, mod);
    }
    retrieve(id) {
        return this.currentlyLoading.get(id);
    }
    finish(id) {
        this.currentlyLoading.delete(id);
    }
    stack() {
        return Array.from(this.currentlyLoading.keys());
    }
}
function defaultModuleNeedsReload(moduleId, loadedModules, moduleCache) {
    return loadedModules.has(moduleId) && moduleCache == null;
}
/**
 * Tracks loaded modules and is used to determine if a module needs to be reloaded or if it could be retrieved from a
 * cache.
 * Basically we register all loaded modules here and when loading a module we compare our record with the
 * {@see * _moduleCache}. If we have it, but the `_moduleCache` doesn't this means that it was deleted from the latter.
 * In that case we need to reload it fresh instead of pulling from any cache, including our {@link _moduleExports} in
 * order to replicate the behavior that Node.js has by default.
 *
 * @category Loader
 */
class CacheTracker {
    /**
     * Creates {@link CacheTracker} instance.
     *
     * @param _moduleCache the Node.js module cache, aka `Module._cache` and `require.cache` which are the same object
     * @param _moduleExports the module exports provided to packherd, i.e. could be pre-initialized modules snapshotted
     * into the app. Any loaded module not yet found inside this map is added there. However it is **NOT** part of the
     * decision if a module should be reloaded or not.
     * @param _moduleNeedsReload the function to determine if a module needs to be reloaded even if it was found inside
     * the {@link _moduleCache} or {@link _moduleExports}.
     */
    constructor(_moduleCache, _moduleExports, _moduleNeedsReload) {
        this._moduleCache = _moduleCache;
        this._moduleExports = _moduleExports;
        this._moduleNeedsReload = _moduleNeedsReload;
        this._loadedModules = new Set();
    }
    /**
     * Registers a module load for the given id.
     */
    addLoadedById(id) {
        this._loadedModules.add(id);
    }
    /**
     * Registers a module as loaded providing added information about how it was loaded.
     *
     * @param mod the module that was loaded
     * @param resolved the strategy as to how the module was resolved
     * @param origin the origin of the module, i.e. did it come from a cache, _moduleExports or similar
     * @param moduleKey the derived key of the module if it was obtained
     */
    addLoaded(mod, resolved, origin, moduleKey) {
        (0, assert_1.strict)(mod.id != null, `Should have module id when loading by ${resolved} via ${origin} succeeded`);
        // Add the module to the Node.js module cache
        this._moduleCache[mod.id] = mod;
        // Add it to the `_moduleExports` as well in order to shortcut loading it from inside the snapshot
        if (moduleKey != null) {
            this._moduleExports[moduleKey] = mod;
        }
        // Register the module as loaded
        this._loadedModules.add(mod.id);
        if (logTrace.enabled) {
            logTrace('Loaded "%s" (%s | %s) -> moduleCache: %d, exportsCache: %d, loaded: %d', mod.id, resolved, origin, Object.keys(this._moduleCache).length, Object.keys(this._moduleExports).length, this._loadedModules.size);
        }
    }
    /**
     * Determines if a module needs to be loaded fresh or if it can either be loaded from the {@link _moduleCache} or
     * {@link _moduleExports}.
     */
    moduleNeedsReload(mod) {
        // We update our exports cache when loading a module, thus if it came from there
        // and doesn't have one yet that means that it was never loaded before
        if (mod.id == null)
            return false;
        return this._moduleNeedsReload(mod.id, this._loadedModules, this._moduleCache);
    }
}
function needsFullPathResolve(p) {
    return !path_1.default.isAbsolute(p) && p.startsWith('./');
}
/**
 * The PackherdModuleLoader is responsible for resolving required/imported modules.
 * To do that in an efficient manner it first looks inside the Node.js Module cache and then tries to load a module
 * either from the provided `moduleExports` then the `moduleDefinitions` and only then from the file system via the
 * Node.js module loading mechanism.
 */
class PackherdModuleLoader {
    /**
     * Creates a {@link PackherdModuleLoader} instance.
     *
     * @param Module the global Node.js Module
     * @param origLoad the original `Module._load` function (i.e. the unpatched version)
     * @param projectBaseDir the root of the app whose module we're loading
     * @param opts configuring this loader and includes `moduleExports` and `moduleDefinitions`
     */
    constructor(Module, origLoad, projectBaseDir, opts) {
        var _a, _b, _c;
        this.Module = Module;
        this.origLoad = origLoad;
        this.projectBaseDir = projectBaseDir;
        this.exportHits = new Set();
        this.definitionHits = new Set();
        this.misses = new Set();
        this.diagnosticsEnabled = !!opts.diagnosticsEnabled;
        this._dumpedInfo = { exportHits: 0, definitionHits: 0, misses: 0 };
        this.getModuleKey = opts.getModuleKey || defaultGetModuleKey;
        (0, assert_1.strict)(opts.moduleExports != null || opts.moduleDefinitions != null, 'need to provide moduleDefinitions, moduleDefinitions or both');
        this.moduleExports = (_a = opts.moduleExports) !== null && _a !== void 0 ? _a : {};
        this.moduleDefinitions = (_b = opts.moduleDefinitions) !== null && _b !== void 0 ? _b : {};
        this.loading = new LoadingModules();
        this.cacheTracker = new CacheTracker(this.Module._cache, this.moduleExports, (_c = opts.moduleNeedsReload) !== null && _c !== void 0 ? _c : defaultModuleNeedsReload);
    }
    // -----------------
    // Loading within Exports Cache
    // -----------------
    /**
     * Predicate to determine if a module can be loaded from a cache or not.
     * This is called when a module is resolvable directly from a snapshot to determine if that instance can be used or
     * not.
     */
    shouldBypassCache(mod) {
        this._ensureFullPathExportsModule(mod);
        return this.cacheTracker.moduleNeedsReload(mod);
    }
    /**
     * Registers a module as loaded.
     * This is required to respect changes to the Node.js module cache, {@link CacheTracker}.
     *
     * It also registers diagnostics data and logs it when desired.
     */
    registerModuleLoad(mod, loadedFrom) {
        this._ensureFullPathExportsModule(mod);
        this.cacheTracker.addLoaded(mod, 'cache', loadedFrom);
        switch (loadedFrom) {
            case 'exports':
                this.exportHits.add(mod.id);
                break;
            case 'definitions':
                this.definitionHits.add(mod.id);
                break;
            case 'Node.js require':
                this.misses.add(mod.id);
                break;
            default:
                // not counting loads from Node.js cache or the ones already counted via tryLoad
                break;
        }
        this._dumpInfo();
    }
    // -----------------
    // Cache Direct
    // -----------------
    /**
     * Tries to obtain the exports of a module directly from the `moduleExports` or returns one of the `moduleDefinitions`
     * which when called returns the module exports.
     * Thus the returned value includes either `moduleExports` or `definition` or none if it wasn't found anywhere.
     *
     * @param fullPath path to the module on Disk
     * @param moduleKey key of the module which is used to resolve it from either `moduleExports` or `moduleDefinitions`
     * @private
     */
    _tryCacheDirect(fullPath, moduleKey) {
        if (moduleKey == null)
            return {};
        // 1. Try already instantiated exports
        const mod = this.moduleExports[moduleKey];
        if (mod != null) {
            // Fill in module properties as best we can
            mod.filename = fullPath;
            mod.id = fullPath;
            mod.path = path_1.default.dirname(fullPath);
            if (mod.parent != null) {
                this._ensureFullPathExportsModule(mod.parent);
            }
            // Ensure that we are actually OK returning the already instantiated version
            // If not we need to run the module initialization code again either by executing the `definition` or loading it
            // via Node.js from the file system
            if (!this.cacheTracker.moduleNeedsReload(mod)) {
                const moduleExport = mod.exports;
                return {
                    moduleExports: moduleExport,
                };
            }
        }
        // 2. Not found in exports or needs reload, let's try to find a definition
        const definition = this.moduleDefinitions[moduleKey];
        return {
            definition,
        };
    }
    /**
     * Attempts to load a module either from the provided `moduleExports` or by calling the appropriate
     * `moduleDefinition`.
     * If it fails to find either it returns `undefined`.
     *
     * @param moduleUri the uri as specified in the `require` or `import` statement used for diagnostics
     * @param moduleKey the key under which it could be stored inside the `moduleExports` or `moduleDefinitions`
     * @param fullPath path to the module on Disk
     * @param parent the `module.parent`
     * @private
     */
    _loadCacheDirect(moduleUri, moduleKey, fullPath, parent) {
        // We need a parent to init the module properly and fill in its properties
        // We need a moduleKey to be able to look it up in the exports or definitions
        if (parent == null || moduleKey == null) {
            return undefined;
        }
        (0, assert_1.strict)(fullPath != null, 'fullPath should be set when moduleKey was provided');
        const direct = this._tryCacheDirect(fullPath, moduleKey);
        // 1. Best case scenario, we were able to load the already instantiated exports
        if ((direct === null || direct === void 0 ? void 0 : direct.moduleExports) != null) {
            const { mod, origin } = this._initModuleFromExport(moduleKey, direct.moduleExports, parent, fullPath);
            return {
                resolved: 'cache:direct',
                origin,
                exports: mod.exports,
                mod,
                fullPath: mod.path,
            };
        }
        // 2. Second best, we need to do some work and run the module initialization code
        if ((direct === null || direct === void 0 ? void 0 : direct.definition) != null) {
            const { mod, origin } = this._initModuleFromDefinition(moduleUri, direct.definition, parent, fullPath);
            if (mod != null) {
                return {
                    resolved: 'cache:direct',
                    origin,
                    exports: mod.exports,
                    mod,
                    fullPath: mod.path,
                };
            }
        }
        // 3. Worst case we couldn't directly load this and have to fall back to load via Node.js from the file system
        return undefined;
    }
    /**
     * Given the `moduleUri` it attempts to resolve the full path to the module.
     * The idea here is to only fall back to Node.js resolution which requires access to the file system when all other
     * attempts fail.
     *
     * To that end we try the following in the given order:
     *
     * 1. resolve via `this.getModuleKey` given it returns a `moduleKey` that is a full path
     * 2. expand the path to a full path using `path.resolve` (still no I/O required)
     * 3. fall back to Node.js resolution mechanism (this requires I/O)
     *
     * @param moduleUri the uri as specified in the `require` or `import` statement used for diagnostics
     * @param opts control how the module key is obtained
     */
    tryResolve(moduleUri, opts) {
        // 1. Resolve via module key
        let { moduleKey, moduleRelativePath } = this.getModuleKey({
            moduleUri,
            baseDir: this.projectBaseDir,
            opts,
        });
        if (moduleKey != null && path_1.default.isAbsolute(moduleKey)) {
            return { fullPath: moduleKey, resolved: 'module-key:node' };
        }
        // 2. Try to obtain a full path via the resolved relative path
        let fullPath = this._tryResolveFullPath(moduleUri, moduleRelativePath, opts);
        if (fullPath != null) {
            return { fullPath, resolved: 'module-fullpath:node' };
        }
        // 3. Lastly try to resolve the module via Node.js resolution
        if (opts != null) {
            this._ensureParentPaths(opts);
        }
        if (!path_1.default.isAbsolute(moduleUri) &&
            (opts == null || opts.id == null)) {
            const msg = `Cannot resolve module '${moduleUri}'.` +
                `Need a parent to resolve via Node.js when relative path is provided.`;
            throw moduleNotFoundError(msg, moduleUri);
        }
        const directFullPath = fullPath;
        let resolved;
        ({ resolved, fullPath } = this._resolvePaths(moduleUri, opts, false, directFullPath));
        return { fullPath, resolved };
    }
    /**
     * Here we try to load the module for the given URI as efficiently as possible.
     * Thus we attempt the below steps in the given order:
     *
     * 1. Load directly from the Node.js module cache providing the `moduleUri` (this is what Node.js would do as well)
     * 2. Attempt to resolve the module key
     * 3. If we found a module key that is a full path try to load from the Node.js cache again, this time using the
     *    that full path
     * 4. Try to resolve the module's full path via `path.resolve`
     * 5. Try the Node.js cache again with that full path
     *
     * At this point we give up trying to find this module in the Node.js cache some how ..
     *
     * 6. Try to load the module either from `moduleExports` or instantiate it from one of the `moduleDefinitions`
     * 7. Resolve the module via the Node.js resolution mechanism (requires I/O)
     * 8. Derive another moduleKey from the resolved path and try `moduleExports` or `moduleDefinitions` again in order to
     *    at least avoid having to read the module content from the file system and ideally also the module
     *    initialization overhead
     * 9. We failed miserable and have to call the original Node.js module loader which requires I/O and has the maximum
     *    overhead
     *
     * NOTE: that we track the module load in each case.
     *
     * @param moduleUri the uri as specified in the `require` or `import` statement used for diagnostics
     * @param parent the `module.parent`
     * @param isMain if `true` this is the app entrypoint, i.e was launched via `node|electron entrypoint`
     *
     * @return info regarding how the module was resolved, the origin from which it was loaded, it's `exports` and the
     * fullPath` resolved for it
     */
    tryLoad(moduleUri, parent, isMain) {
        var _a;
        // 1. Try to find moduleUri directly in Node.js module cache
        if (path_1.default.isAbsolute(moduleUri)) {
            const moduleCached = this.Module._cache[moduleUri];
            if (moduleCached != null && moduleCached.loaded) {
                const fullPath = moduleUri;
                const resolved = 'module-uri:node';
                return {
                    resolved,
                    origin: 'Module._cache',
                    exports: moduleCached.exports,
                    fullPath,
                };
            }
        }
        let moduleKey;
        let moduleRelativePath;
        // 2. Try to obtain a module key, this could be from a map or the relative path
        if (parent != null) {
            ({ moduleKey, moduleRelativePath } = this.getModuleKey({
                moduleUri,
                baseDir: this.projectBaseDir,
                opts: parent,
            }));
        }
        // 3. Try to see if the moduleKey was correct and can be loaded from the Node.js cache
        if (moduleKey != null && path_1.default.isAbsolute(moduleKey)) {
            const moduleCached = this.Module._cache[moduleKey];
            if (moduleCached != null) {
                const fullPath = moduleKey;
                const resolved = 'module-key:node';
                const origin = 'Module._cache';
                this.cacheTracker.addLoaded(moduleCached, resolved, origin, moduleKey);
                return {
                    resolved,
                    origin,
                    exports: moduleCached.exports,
                    fullPath,
                };
            }
        }
        let fullPath;
        if (parent != null) {
            // 4. Try to obtain a full path
            this._ensureParentPaths(parent);
            fullPath =
                (_a = this._tryResolveFullPath(moduleUri, moduleRelativePath, parent)) !== null && _a !== void 0 ? _a : moduleUri;
            // 5. Try again in the Node.js module cache
            if (fullPath != null && fullPath !== moduleUri) {
                const moduleCached = this.Module._cache[fullPath];
                if (moduleCached != null) {
                    const resolved = 'module-fullpath:node';
                    const origin = 'Module._cache';
                    this.cacheTracker.addLoaded(moduleCached, resolved, origin, moduleKey);
                    return {
                        resolved,
                        origin,
                        exports: moduleCached.exports,
                        fullPath,
                    };
                }
            }
            // 6. Try to locate this module inside the cache, either export or definition
            let loadedModule = this._loadCacheDirect(moduleUri, moduleKey, fullPath, parent);
            if (loadedModule != null) {
                this._dumpInfo();
                this.cacheTracker.addLoaded(loadedModule.mod, loadedModule.resolved, loadedModule.origin, moduleKey);
                return loadedModule;
            }
        }
        // 7. Lastly try to resolve the module via Node.js resolution which requires expensive I/O and may fail
        //    in which case it throws an error
        const directFullPath = fullPath !== null && fullPath !== void 0 ? fullPath : moduleUri;
        let resolved;
        ({ resolved, fullPath } = this._resolvePaths(moduleUri, parent, isMain, directFullPath));
        // 8. Something like './foo' might now have been resolved to './foo.js' and
        // thus we may find it inside our cache that way
        const derivedModuleKey = `./${path_1.default.relative(this.projectBaseDir, fullPath).split(path_1.default.sep).join(path_1.default.posix.sep)}`;
        const loadedModule = this._loadCacheDirect(moduleUri, derivedModuleKey, fullPath, parent);
        if (loadedModule != null) {
            this._dumpInfo();
            loadedModule.resolved = 'cache:node';
            this.cacheTracker.addLoaded(loadedModule.mod, loadedModule.resolved, loadedModule.origin, moduleKey);
            return loadedModule;
        }
        const exports = this.origLoad(fullPath, parent, isMain);
        // Node.js load only returns the `exports` object thus we need to get the
        // module itself from the cache to which it was added during load
        const nodeModule = this.Module._cache[fullPath];
        this._dumpInfo();
        const origin = 'Module._load';
        if (nodeModule != null) {
            this.misses.add(nodeModule.id);
            this.cacheTracker.addLoaded(nodeModule, resolved, origin, moduleKey);
        }
        else {
            this.misses.add(fullPath);
            this.cacheTracker.addLoadedById(fullPath);
        }
        return {
            resolved,
            origin,
            exports,
            fullPath,
        };
    }
    /**
     * Logs information about the following:
     *
     * - exportHits: how many modules did we load directly from `moduleExports`
     * - definitionHits: how many modules did we instantiate from `moduleDefinitions`
     * - misses: how many modules did we have to load via Node.js from the file system
     *
     * @private
     */
    _dumpInfo() {
        if (this.diagnosticsEnabled && logDebug.enabled) {
            const { exportHits: prevExportHits, definitionHits: prevDefinitionHits, misses: prevMisses, } = this._dumpedInfo;
            const exportHits = this.exportHits.size;
            const definitionHits = this.definitionHits.size;
            const misses = this.misses.size;
            if (prevExportHits !== exportHits ||
                prevDefinitionHits !== definitionHits ||
                prevMisses !== misses) {
                this._dumpedInfo = {
                    exportHits,
                    definitionHits,
                    misses,
                };
                logDebug(this._dumpedInfo);
            }
        }
    }
    /**
     * Resolves the path for the given URI and throws an errors if all options to do so failed.
     *
     * @param moduleUri the uri as specified in the `require` or `import` statement used for diagnostics
     * @param parent the `module.parent` which is required by the Node.js module resolve mechanism
     * @param isMain if `true` this is the app entrypoint, i.e was launched via `node|electron entrypoint`
     * @param directFullPath the _preliminary_ full path that we obtained via our resolve logic (could be incomplete)
     * @private
     */
    _resolvePaths(moduleUri, parent, isMain, directFullPath) {
        const resolved = 'module:node';
        const fullPath = this._tryResolveFilename(moduleUri, directFullPath, parent, isMain);
        return { resolved, fullPath };
    }
    // -----------------
    // Module Initialization
    // -----------------
    /**
     * Creates a Node.js module, similarly to how Node.js would do it.
     * The `require` function provided to the module is wrapped when `this.diagnosticsEnabled` is enabled in order to intercept
     * and track require calls.
     *
     * @param fullPath fully resolved module path
     * @param parent module parent
     * @param moduleUri the uri as specified in the `require` or `import` statement used for diagnostics
     * @private
     */
    _createModule(fullPath, parent, moduleUri) {
        var _a;
        const require = this.diagnosticsEnabled
            ? this._interceptedRequire(fullPath, moduleUri, parent)
            : this._createRequire(fullPath, moduleUri, parent);
        return {
            isPreloading: false,
            children: [],
            exports: {},
            filename: fullPath,
            id: fullPath,
            loaded: false,
            parent,
            path: fullPath,
            // NOTE: not entirely correct if parent is nested deeper or higher in the directory tree
            // and could cause an edge case for module name clashes when looking up modules via Node.js resolver.
            // However this case hasn't been observed so far.
            paths: (_a = parent === null || parent === void 0 ? void 0 : parent.paths) !== null && _a !== void 0 ? _a : [],
            require,
        };
    }
    /**
     * Given an `module.export` object it creates a NodeModule matching as much as possible what Node.js would create.
     *
     * @param moduleUri the uri as specified in the `require` or `import` statement used for diagnostics
     * @param moduleExports the `module.exports`
     * @param parent the `module.parent`
     * @param fullPath fully resolved module path
     *
     * @return module itself as well as the load origin set to `packherd:export`
     * @private
     */
    _initModuleFromExport(moduleUri, moduleExports, parent, fullPath) {
        const mod = this._createModule(fullPath, parent, moduleUri);
        mod.exports = moduleExports;
        mod.loaded = true;
        const origin = 'packherd:export';
        this.exportHits.add(mod.id);
        return { mod, origin };
    }
    /**
     * Given a function (`moduleDefinition`) it invokes it to obtain the `module.export` object and then creates a
     * NodeModule matching as much as possible what Node.js would create.
     *
     * When invoking the definition we ensure to register that via `loading.start` in order to avoid getting into an
     * endless loop for circular dependencies, i.e. _foo loads bar_ and _bar loads foo_ and so on.
     * Once the module is instantiated we register that via `loading.finish`.
     *
     * @param moduleUri the uri as specified in the `require` or `import` statement used for diagnostics
     * @param moduleDefinition the function to invoke in order to obtain the `module.exports`
     * @param parent the `module.parent`
     * @param fullPath fully resolved module path
     * @private
     */
    _initModuleFromDefinition(moduleUri, moduleDefinition, parent, fullPath) {
        const origin = 'packherd:definition';
        const loading = this.loading.retrieve(fullPath);
        if (loading != null)
            return { mod: loading, origin };
        const mod = this._createModule(fullPath, parent, moduleUri);
        try {
            this.loading.start(fullPath, mod);
            moduleDefinition(mod.exports, mod, fullPath, path_1.default.dirname(fullPath), mod.require);
            mod.loaded = true;
            this.definitionHits.add(mod.id);
            return { mod, origin };
        }
        finally {
            this.loading.finish(fullPath);
        }
    }
    /**
     * Creates a Node.js `require` function for the provided module parameters.
     *
     * @param fullPath full path to the module
     * @param moduleUri the uri as specified in the `require` or `import` statement used for diagnostics
     * @param parent the `module.parent`
     * @private
     */
    _createRequire(fullPath, moduleUri, parent) {
        const require = this.Module.createRequire(fullPath);
        if (parent == null) {
            parent = this._createModule(fullPath, parent, moduleUri);
        }
        const originalRequireResolve = require.resolve;
        require.resolve = Object.assign((moduleUri, options) => {
            // Handle the case where options populated. The module is expected to be outside of the cypress snapshot so use the original require.resolve.
            if (options && options.paths) {
                return originalRequireResolve(moduleUri, options);
            }
            return this.tryResolve(moduleUri, parent).fullPath;
        }, {
            paths(request) {
                var _a;
                if (module_1.default.builtinModules.includes(request))
                    return null;
                return (_a = parent === null || parent === void 0 ? void 0 : parent.paths) !== null && _a !== void 0 ? _a : null;
            },
        });
        return require;
    }
    /**
     * Creates a Node.js `require` function for the provided module parameters that intercepts each `require` call and
     * logs something similar to `'Module "/foo.js" is requiring "/bar.js"'` on the _trace_ level.
     *
     * @param fullPath full path to the module
     * @param moduleUri the uri as specified in the `require` or `import` statement used for diagnostics
     * @param parent the `module.parent`
     * @private
     */
    _interceptedRequire(fullPath, moduleUri, parent) {
        const require = this._createRequire(fullPath, moduleUri, parent);
        const override = function (id) {
            logTrace('Module "%s" is requiring "%s"', moduleUri, id);
            return require.call(this, id);
        };
        override.main = require.main;
        override.cache = require.cache;
        // @ts-ignore deprecated
        override.extensions = require.extensions;
        override.resolve = require.resolve.bind(require);
        return override;
    }
    // -----------------
    // Helpers
    // -----------------
    /**
     * Uses the Node.js resolution mechanism in order to resolve the full path given a `moduleUri`.
     * If that fails it first resolves via the provided _preliminary_ `fullPath` and then via
     * a full path based on the project root.
     *
     * @param moduleUri the uri as specified in the `require` or `import` statement used for diagnostics
     * @param fullPath the _preliminary_ full path, it could be something like `/foo/bar` and needs to resolve to
     * `/foo/bar.js`
     * @param parent the `module.parent` which is required by the Node.js module resolve mechanism
     * @private
     */
    _tryResolveFilename(moduleUri, fullPath, parent, isMain) {
        try {
            return this.Module._resolveFilename(moduleUri, parent, isMain);
        }
        catch (err) {
            if (fullPath != null) {
                try {
                    // Resolving moduleUri directly didn't work, let's try again with the full path our algorithm figured out
                    const res = this.Module._resolveFilename(fullPath, parent, isMain);
                    return res;
                }
                catch (err2) {
                    // In some cases like native addons which aren't included in the esbuild bundle we need to try to resolve
                    // relative to the project base dir
                    try {
                        const basedOnProjectRoot = path_1.default.resolve(this.projectBaseDir, moduleUri);
                        const res = this.Module._resolveFilename(basedOnProjectRoot, parent, isMain);
                        logTrace('Resolved "%s" based on project root to "%s"', moduleUri, basedOnProjectRoot);
                        return res;
                    }
                    catch (err3) {
                        // Throwing original error on purpose
                        throw err;
                    }
                }
            }
            else {
                throw err;
            }
        }
    }
    /**
     * Tries to resolve a module's full path in either of two ways:
     *
     * 1. if `moduleRelativePath` is known it resolves that relative to the `projectBaseDir`
     * 2. if the parent path is known (`opts.path`) and the moduleUri is a relative path it resolves it relative to that
     *
     * @param moduleUri the uri as specified in the `require` or `import` statement used for diagnostics
     * @param moduleRelativePath the relative path to the module
     * @param opts basically the parent whose `path` is used to resolve the module relative to it
     * @private
     */
    _tryResolveFullPath(moduleUri, moduleRelativePath, opts) {
        if (moduleRelativePath != null) {
            return path_1.default.resolve(this.projectBaseDir, moduleRelativePath);
        }
        if (opts != null && moduleUri.startsWith('.')) {
            return path_1.default.resolve(opts.path, moduleUri);
        }
        return undefined;
    }
    /**
     *
     * @param mod
     * @private
     */
    _ensureFullPathExportsModule(mod) {
        if (mod.id == null)
            mod.id = mod.filename;
        if (mod.id != null && needsFullPathResolve(mod.id)) {
            mod.id = path_1.default.resolve(this.projectBaseDir, mod.id);
        }
        if (mod.filename != null && needsFullPathResolve(mod.filename)) {
            mod.filename = path_1.default.resolve(this.projectBaseDir, mod.filename);
        }
        if (mod.path != null && needsFullPathResolve(mod.path)) {
            mod.path = path_1.default.resolve(this.projectBaseDir, mod.path);
        }
    }
    /**
     * This fills in the `module.paths` property for the given module parent a similar way that Node.js would.
     * The only difference is that it stops at the project root instead of going all the way to the root of the file
     * system.
     *
     * A sample result would be:
     *
     * ```
     *  '/path/to/app-root/perf-tr1/packherd/repl/node_modules',
     *  '/path/to/app-root/perf-tr1/packherd/node_modules',
     *  '/path/to/app-root/perf-tr1/node_modules',
     *  '/path/to/app-root/node_modules',
     * ```
     *
     * @param parent the module whose `paths` property we will modify
     * @private
     */
    _ensureParentPaths(parent) {
        if (parent.paths == null ||
            (parent.paths.length === 0 && parent.path != null)) {
            let dir = path_1.default.resolve(this.projectBaseDir, parent.path);
            parent.paths = [];
            while (dir.length > this.projectBaseDir.length) {
                parent.paths.push(path_1.default.join(dir, 'node_modules'));
                dir = path_1.default.dirname(dir);
            }
            parent.paths.push(path_1.default.join(dir, 'node_modules'));
        }
    }
}
exports.PackherdModuleLoader = PackherdModuleLoader;
/**
 * Mimics a Node.js` MODULE_NOT_FOUND` error in order to not break apps that depend on the `err.code` exactly.
 * @private
 */
function moduleNotFoundError(msg, moduleUri) {
    // https://github.com/nodejs/node/blob/da0ede1ad55a502a25b4139f58aab3fb1ee3bf3f/lib/internal/modules/cjs/loader.js#L353-L359
    const err = new Error(msg);
    // @ts-ignore replicating Node.js module not found error
    err.code = 'MODULE_NOT_FOUND';
    // @ts-ignore replicating Node.js module not found error
    err.path = moduleUri;
    // @ts-ignore replicating Node.js module not found error
    err.requestPath = moduleUri;
    return err;
}
