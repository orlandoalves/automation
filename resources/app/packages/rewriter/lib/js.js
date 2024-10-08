"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rewriteJs = exports._rewriteJsUnsafe = exports.rewriteJsSourceMap = void 0;
const tslib_1 = require("tslib");
const astTypes = tslib_1.__importStar(require("ast-types"));
const debug_1 = tslib_1.__importDefault(require("debug"));
const js_rules_1 = require("./js-rules");
const recast = tslib_1.__importStar(require("recast"));
const sourceMaps = tslib_1.__importStar(require("./util/source-maps"));
const debug = (0, debug_1.default)('cypress:rewriter:js');
const defaultPrintOpts = {
    // will only affect reprinted quotes
    quote: 'single',
};
function _generateDriverError(url, err) {
    const args = JSON.stringify({
        errMessage: err.message,
        errStack: err.stack,
        url,
    });
    return `window.top.Cypress.utils.throwErrByPath('proxy.js_rewriting_failed', { args: ${args} })`;
}
function rewriteJsSourceMap(url, js, inputSourceMap) {
    try {
        const { sourceFileName, sourceMapName, sourceRoot } = sourceMaps.getPaths(url);
        const ast = recast.parse(js, { sourceFileName });
        const visitor = astTypes.PathVisitor.fromMethodsObject(js_rules_1.jsRules);
        visitor.visit(ast);
        if (!visitor.wasChangeReported() && inputSourceMap) {
            return inputSourceMap;
        }
        return recast.print(ast, {
            inputSourceMap,
            sourceMapName,
            sourceRoot,
            ...defaultPrintOpts,
        }).map;
    }
    catch (err) {
        debug('error while parsing JS %o', { err, js: js.slice ? js.slice(0, 500) : js });
        return { err };
    }
}
exports.rewriteJsSourceMap = rewriteJsSourceMap;
function _rewriteJsUnsafe(url, js, deferSourceMapRewrite) {
    const ast = recast.parse(js);
    let didRewrite;
    try {
        const visitor = astTypes.PathVisitor.fromMethodsObject(js_rules_1.jsRules);
        visitor.visit(ast);
        didRewrite = visitor.wasChangeReported();
    }
    catch (err) {
        // if visiting fails, it points to a bug in our rewriting logic, so raise the error to the driver
        return _generateDriverError(url, err);
    }
    let rewritten;
    if (didRewrite) {
        const { code } = recast.print(ast, defaultPrintOpts);
        rewritten = code;
    }
    else {
        rewritten = js;
    }
    if (!deferSourceMapRewrite) {
        // no sourcemaps
        return sourceMaps.stripMappingUrl(rewritten);
    }
    // get an ID that can be used to lazy-generate the source map later
    const sourceMapId = deferSourceMapRewrite({ url, js });
    return sourceMaps.urlFormatter(
    // using a relative URL ensures that required cookies + other headers are sent along
    // and can be reused if the user's sourcemap requires an HTTP request to be made
    `/__cypress/source-maps/${sourceMapId}.map`, rewritten);
}
exports._rewriteJsUnsafe = _rewriteJsUnsafe;
function rewriteJs(url, js, deferSourceMapRewrite) {
    try {
        // rewriting can throw on invalid JS or if there are bugs in the js-rules, so always wrap it
        return _rewriteJsUnsafe(url, js, deferSourceMapRewrite);
    }
    catch (err) {
        debug('error while parsing JS %o', { err, js: js.slice ? js.slice(0, 500) : js });
        return js;
    }
}
exports.rewriteJs = rewriteJs;
