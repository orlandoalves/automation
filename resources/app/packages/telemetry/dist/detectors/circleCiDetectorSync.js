"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.circleCiDetectorSync = void 0;
const resources_1 = require("@opentelemetry/resources");
/**
 * CircleCiDetectorSync can be used to detect the presence of and create a Resource
 * from circle ci env variables.
 */
class CircleCiDetectorSync {
    /**
     * Returns a {@link Resource} populated with attributes from the
     * circle ci environment variable.
     *
     * @param config The resource detection config -- ignored
     */
    detect() {
        const attributes = {};
        const { CIRCLECI, CIRCLE_BRANCH, CIRCLE_JOB, CIRCLE_NODE_INDEX, CIRCLE_BUILD_URL, CIRCLE_BUILD_NUM, CIRCLE_SHA1, CIRCLE_PR_NUMBER } = process.env;
        if (CIRCLECI) {
            attributes['ci.circle'] = CIRCLECI;
            attributes['ci.branch'] = CIRCLE_BRANCH;
            attributes['ci.job'] = CIRCLE_JOB;
            attributes['ci.node'] = CIRCLE_NODE_INDEX;
            attributes['ci.build-url'] = CIRCLE_BUILD_URL;
            attributes['ci.build-number'] = CIRCLE_BUILD_NUM;
            attributes['SHA1'] = CIRCLE_SHA1;
            attributes['ci.pr-number'] = CIRCLE_PR_NUMBER;
        }
        return new resources_1.Resource(attributes);
    }
}
exports.circleCiDetectorSync = new CircleCiDetectorSync();
