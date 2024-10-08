import { d as defineComponent, J as gql, g as useI18n, l as computed, aj as useMutation, b as unref, o as openBlock, c as createBlock, w as withCtx, V as createTextVNode, t as toDisplayString, Y as _sfc_main$v, j as createCommentVNode, _ as _export_sfc, aE as useUserProjectStatusStore, a as createBaseVNode, f as createVNode, aF as ConnectIcon, aG as BannerIds, aD as useQuery, aH as getUrlWithParams, aI as OrganizationIcon, aJ as _sfc_main$x, i as createElementBlock, aK as createStaticVNode, ab as _sfc_main$y, aL as UseCohorts_DetermineCohortDocument, h as ref, a8 as useRoute, A as watch, aM as usePromptManager, aN as reactive, r as resolveComponent, aO as WarningIcon, ac as _sfc_main$A, a2 as RefreshIcon, E as resolveDynamicComponent, aP as __unplugin_components_0$1, n as normalizeClass, I as IconMagnifyingGlass, au as Input, k as __unplugin_components_0$2, G as mergeProps, F as Fragment, B as renderList, aQ as useTimeout, m as renderSlot, e as withModifiers, p as __unplugin_components_0$4, aR as StandardModalFooter, at as _sfc_main$I, aS as useDebounce, u as useI18n$1, z as onMounted, aT as nextTick, D as withKeys, C as normalizeStyle, an as useWindowSize, aU as h, a9 as watchEffect, aV as nanoid, aW as useOnline, aX as useResizeObserver, aY as toRef, K as isRef, W as withDirectives, al as vShow, aZ as __unplugin_components_1, a_ as useSubscription$1, aC as lodashExports } from "./index-BVZ6TAOi.js";
import { S as SendIcon, _ as _sfc_main$w, a as _sfc_main$B } from "./TrackedBanner.vue_vue_type_script_setup_true_lang-BdguHMdN.js";
import { R as RecordIcon, k as _sfc_main$z, I as IconFolder, b as _sfc_main$F, d as deriveIndexes, a as __unplugin_components_0$5, h as useCachedSpecs, g as useSpecFilter, m as makeFuzzyFoundSpec, i as fuzzySortSpecs, c as useCollapsibleTree, e as buildSpecTree, f as useVirtualList, u as useRunAllSpecsStore, l as _sfc_main$M, n as getFilteredGeneratorList, o as _sfc_main$N, j as _sfc_main$O } from "./InlineCodeFragment.vue_vue_type_script_setup_true_lang-BA0tIU0J.js";
import { c as RequestAccessButton_RequestAccessDocument, C as CreateOrganizationBannerDocument, d as SwitchToComponentTestingDocument, e as ComponentTestingAvailable_RecordEventDocument, f as SpecsListBanners_CheckCloudOrgMembershipDocument, _ as _sfc_main$C, L as L$1, g as CloudData_RefetchDocument, q, w as wo, h as Co, Q, U as UseTestingType_TestingTypeDocument, i as UseTestingType_ActivateTestingTypeDocument, j as TestingTypePromo_RecordEventDocument, x as x1, k as SpecsList_GitInfoUpdatedDocument, l as SpecsListRunWatcherDocument, m as SpecsPageContainerDocument, n as SpecsPageContainer_SpecsChangeDocument } from "./Tooltip.vue_vue_type_style_index_0_lang-Bd9NYZxG.js";
import { j } from "./index.es-BsVuF2bS.js";
import { u as useSubscription } from "./graphql-XibiI9-P.js";
import { C as CommitIcon, _ as _sfc_main$D, a as __unplugin_components_0$3 } from "./SpecNameDisplay.vue_vue_type_script_setup_true_lang-DAuv_zBL.js";
import { _ as _sfc_main$E, a as _sfc_main$J, b as _sfc_main$K, c as _sfc_main$L } from "./PromoHeader.vue_vue_type_script_setup_true_lang-DTNv-Vxo.js";
import { _ as _sfc_main$G, a as _sfc_main$H } from "./SpecPatterns.vue_vue_type_script_setup_true_lang-oZxpftyj.js";
import { p as posixify } from "./box-open_x48-D3WqLTcA.js";
import { S as SettingsIcon } from "./settings_x16-DXpuBQx9.js";
import { u as useRelevantRun } from "./useRelevantRun-4sQamk5Z.js";
import { b as block0 } from "./route-block-mFfs_uHM.js";
import "./chevron-right-small_x16-DZIVjQm5.js";
import "./document-text_x16-GW-sh3Xt.js";
import "./OpenFileInIDE.vue_vue_type_script_setup_true_lang-BXMxX5y6.js";
const _sfc_main$u = /* @__PURE__ */ defineComponent({
  __name: "RequestAccessButton",
  props: {
    gql: null
  },
  setup(__props) {
    const props = __props;
    gql`
fragment RequestAccessButton on Query {
  currentProject {
    id
    projectId
    cloudProject {
      __typename
      ... on CloudProjectUnauthorized {
        message
        hasRequestedAccess
      }
      ... on CloudProject {
        id
      }
    }
  }
}
`;
    gql`
mutation RequestAccessButton_RequestAccess( $projectId: String! ) {
  cloudProjectRequestAccess(projectSlug: $projectId) {
    __typename
    ... on CloudProjectUnauthorized {
      message
      hasRequestedAccess
    }
  }
}
`;
    const { t } = useI18n();
    const hasRequestedAccess = computed(() => {
      var _a, _b, _c, _d;
      return ((_b = (_a = props.gql.currentProject) == null ? void 0 : _a.cloudProject) == null ? void 0 : _b.__typename) === "CloudProjectUnauthorized" && ((_d = (_c = props.gql.currentProject) == null ? void 0 : _c.cloudProject) == null ? void 0 : _d.hasRequestedAccess);
    });
    const projectConnectionStatus = computed(() => {
      if (hasRequestedAccess.value) {
        return "ACCESS_REQUESTED";
      }
      return "UNAUTHORIZED";
    });
    const requestAccessMutation = useMutation(RequestAccessButton_RequestAccessDocument);
    async function requestAccess() {
      var _a;
      const projectId = (_a = props.gql.currentProject) == null ? void 0 : _a.projectId;
      if (projectId) {
        await requestAccessMutation.executeMutation({ projectId });
      }
    }
    return (_ctx, _cache) => {
      return unref(projectConnectionStatus) === "UNAUTHORIZED" ? (openBlock(), createBlock(_sfc_main$v, {
        key: 0,
        "prefix-icon": unref(SendIcon),
        "prefix-icon-class": "icon-dark-white icon-light-transparent",
        "data-cy": "request-access-button",
        onClick: requestAccess
      }, {
        default: withCtx(() => [
          createTextVNode(toDisplayString(unref(t)("specPage.requestAccessButton")), 1)
        ]),
        _: 1
      }, 8, ["prefix-icon"])) : unref(projectConnectionStatus) === "ACCESS_REQUESTED" ? (openBlock(), createBlock(_sfc_main$v, {
        key: 1,
        "prefix-icon": unref(SendIcon),
        "prefix-icon-class": "icon-dark-white icon-light-transparent",
        "data-cy": "access-requested-button",
        class: "btn-disabled",
        disabled: ""
      }, {
        default: withCtx(() => [
          createTextVNode(toDisplayString(unref(t)("specPage.requestSentButton")), 1)
        ]),
        _: 1
      }, 8, ["prefix-icon"])) : createCommentVNode("", true);
    };
  }
});
const RequestAccessButton = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["__scopeId", "data-v-8756dde8"]]);
const _hoisted_1$K = { class: "mb-[24px]" };
const _sfc_main$t = /* @__PURE__ */ defineComponent({
  __name: "LoginBanner",
  props: {
    hasBannerBeenShown: { type: Boolean },
    cohortOption: null
  },
  setup(__props) {
    const { openLoginConnectModal } = useUserProjectStatusStore();
    const { t } = useI18n();
    const bannerId = BannerIds.ACI_082022_LOGIN;
    return (_ctx, _cache) => {
      return __props.cohortOption ? (openBlock(), createBlock(_sfc_main$w, {
        key: 0,
        "banner-id": unref(bannerId),
        "data-cy": "login-banner",
        status: "info",
        title: unref(t)("specPage.banners.login.title"),
        class: "mb-[16px]",
        icon: unref(ConnectIcon),
        dismissible: "",
        "has-banner-been-shown": __props.hasBannerBeenShown,
        "event-data": {
          campaign: "Log In",
          medium: "Specs Login Banner",
          cohort: __props.cohortOption.cohort
        }
      }, {
        default: withCtx(() => [
          createBaseVNode("p", _hoisted_1$K, toDisplayString(__props.cohortOption.value), 1),
          createVNode(_sfc_main$v, {
            "prefix-icon": unref(ConnectIcon),
            class: "mt-[24px]",
            "data-cy": "login-button",
            onClick: _cache[0] || (_cache[0] = ($event) => unref(openLoginConnectModal)({ utmMedium: "Specs Login Banner" }))
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(t)("specPage.banners.login.buttonLabel")), 1)
            ]),
            _: 1
          }, 8, ["prefix-icon"])
        ]),
        _: 1
      }, 8, ["banner-id", "title", "icon", "has-banner-been-shown", "event-data"])) : createCommentVNode("", true);
    };
  }
});
const _hoisted_1$J = { class: "mb-[24px]" };
const _sfc_main$s = /* @__PURE__ */ defineComponent({
  __name: "CreateOrganizationBanner",
  props: {
    hasBannerBeenShown: { type: Boolean },
    cohortOption: null
  },
  setup(__props) {
    const props = __props;
    gql`
query CreateOrganizationBanner {
  cloudViewer {
    id
    createCloudOrganizationUrl
  }
}
`;
    const { t } = useI18n();
    const bannerId = BannerIds.ACI_082022_CREATE_ORG;
    const query = useQuery({ query: CreateOrganizationBannerDocument });
    const createOrganizationUrl = computed(() => {
      var _a, _b, _c, _d;
      const baseUrl = (_c = (_b = (_a = query.data) == null ? void 0 : _a.value) == null ? void 0 : _b.cloudViewer) == null ? void 0 : _c.createCloudOrganizationUrl;
      if (!baseUrl) {
        return "";
      }
      return getUrlWithParams({
        url: baseUrl,
        params: {
          utm_medium: "Specs Create Organization Banner",
          utm_campaign: "Set up your organization",
          utm_content: (_d = props.cohortOption.value) == null ? void 0 : _d.cohort
        }
      });
    });
    return (_ctx, _cache) => {
      return __props.cohortOption ? (openBlock(), createBlock(_sfc_main$w, {
        key: 0,
        "banner-id": unref(bannerId),
        "data-cy": "create-organization-banner",
        status: "info",
        title: __props.cohortOption.value,
        class: "mb-[16px]",
        icon: unref(OrganizationIcon),
        dismissible: "",
        "has-banner-been-shown": __props.hasBannerBeenShown,
        "event-data": {
          campaign: "Set up your organization",
          medium: "Specs Create Organization Banner",
          cohort: __props.cohortOption.cohort
        }
      }, {
        default: withCtx(() => [
          createBaseVNode("p", _hoisted_1$J, toDisplayString(unref(t)("specPage.banners.createOrganization.content")), 1),
          createVNode(_sfc_main$v, {
            href: unref(createOrganizationUrl),
            "include-graphql-port": true,
            "data-cy": "create-organization-button",
            "prefix-icon": unref(OrganizationIcon),
            "prefix-icon-class": "icon-dark-white icon-light-indigo-500"
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(t)("specPage.banners.createOrganization.buttonLabel")), 1)
            ]),
            _: 1
          }, 8, ["href", "prefix-icon"])
        ]),
        _: 1
      }, 8, ["banner-id", "title", "icon", "has-banner-been-shown", "event-data"])) : createCommentVNode("", true);
    };
  }
});
const _hoisted_1$I = { class: "mb-[24px]" };
const _sfc_main$r = /* @__PURE__ */ defineComponent({
  __name: "ConnectProjectBanner",
  props: {
    hasBannerBeenShown: { type: Boolean },
    cohortOption: null
  },
  setup(__props) {
    const { openLoginConnectModal } = useUserProjectStatusStore();
    const { t } = useI18n();
    const bannerId = BannerIds.ACI_082022_CONNECT_PROJECT;
    return (_ctx, _cache) => {
      return __props.cohortOption ? (openBlock(), createBlock(_sfc_main$w, {
        key: 0,
        "banner-id": unref(bannerId),
        "data-cy": "connect-project-banner",
        status: "info",
        title: unref(t)("specPage.banners.connectProject.title"),
        class: "mb-[16px]",
        icon: unref(ConnectIcon),
        dismissible: "",
        "has-banner-been-shown": __props.hasBannerBeenShown,
        "event-data": {
          campaign: "Create project",
          medium: "Specs Create Project Banner",
          cohort: __props.cohortOption.cohort
        }
      }, {
        default: withCtx(() => [
          createBaseVNode("p", _hoisted_1$I, toDisplayString(__props.cohortOption.value), 1),
          createVNode(_sfc_main$v, {
            "prefix-icon": unref(ConnectIcon),
            class: "mt-[24px]",
            "data-cy": "connect-project-button",
            onClick: _cache[0] || (_cache[0] = ($event) => unref(openLoginConnectModal)({ utmMedium: "Specs Create Project Banner" }))
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(t)("specPage.banners.connectProject.buttonLabel")), 1)
            ]),
            _: 1
          }, 8, ["prefix-icon"])
        ]),
        _: 1
      }, 8, ["banner-id", "title", "icon", "has-banner-been-shown", "event-data"])) : createCommentVNode("", true);
    };
  }
});
const _hoisted_1$H = { class: "mb-[24px]" };
const _sfc_main$q = /* @__PURE__ */ defineComponent({
  __name: "RecordBanner",
  props: {
    hasBannerBeenShown: { type: Boolean }
  },
  setup(__props) {
    const { t } = useI18n();
    const bannerId = BannerIds.ACI_082022_RECORD;
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$w, {
        "banner-id": unref(bannerId),
        "data-cy": "record-banner",
        status: "info",
        title: unref(t)("specPage.banners.record.title"),
        class: "mb-[16px]",
        icon: unref(RecordIcon),
        dismissible: "",
        "has-banner-been-shown": __props.hasBannerBeenShown,
        "event-data": {
          campaign: "Record Runs",
          medium: "Specs Record Runs Banner",
          cohort: "n/a"
        }
      }, {
        default: withCtx(() => [
          createBaseVNode("p", _hoisted_1$H, toDisplayString(unref(t)("specPage.banners.record.content")), 1),
          createVNode(_sfc_main$x)
        ]),
        _: 1
      }, 8, ["banner-id", "title", "icon", "has-banner-been-shown"]);
    };
  }
});
const _hoisted_1$G = {
  xmlns: "http://www.w3.org/2000/svg",
  "data-cy": "webpack-logo",
  viewBox: "0 0 774 875.7"
};
const _hoisted_2$D = /* @__PURE__ */ createBaseVNode("path", {
  fill: "#FFF",
  d: "m387 0 387 218.9v437.9L387 875.7 0 656.8V218.9z"
}, null, -1);
const _hoisted_3$x = /* @__PURE__ */ createBaseVNode("path", {
  fill: "#8ed6fb",
  d: "M704.9 641.7 399.8 814.3V679.9l190.1-104.6 115 66.4zm20.9-18.9V261.9l-111.6 64.5v232l111.6 64.4zM67.9 641.7 373 814.3V679.9L182.8 575.3 67.9 641.7zM47 622.8V261.9l111.6 64.5v232L47 622.8zm13.1-384.3L373 61.5v129.9L172.5 301.7l-1.6.9-110.8-64.1zm652.6 0-312.9-177v129.9l200.5 110.2 1.6.9 110.8-64z"
}, null, -1);
const _hoisted_4$p = /* @__PURE__ */ createBaseVNode("path", {
  fill: "#1c78c0",
  d: "M373 649.3 185.4 546.1V341.8L373 450.1v199.2zm26.8 0 187.6-103.1V341.8L399.8 450.1v199.2zm-13.4-207zM198.1 318.2l188.3-103.5 188.3 103.5-188.3 108.7-188.3-108.7z"
}, null, -1);
const _hoisted_5$e = [
  _hoisted_2$D,
  _hoisted_3$x,
  _hoisted_4$p
];
function render$l(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$G, _hoisted_5$e);
}
const LogoWebpack = { render: render$l };
const _hoisted_1$F = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  "data-cy": "vite-logo",
  viewBox: "0 0 410 404"
};
const _hoisted_2$C = /* @__PURE__ */ createStaticVNode('<path fill="url(#a)" d="m399.641 59.525-183.998 329.02c-3.799 6.793-13.559 6.833-17.415.073L10.582 59.556C6.38 52.19 12.68 43.266 21.028 44.76l184.195 32.923c1.175.21 2.378.208 3.553-.006l180.343-32.87c8.32-1.517 14.649 7.337 10.522 14.719Z"></path><path fill="url(#b)" d="M292.965 1.574 156.801 28.255a5 5 0 0 0-4.03 4.611l-8.376 141.464c-.197 3.332 2.863 5.918 6.115 5.168l37.91-8.749c3.547-.818 6.752 2.306 6.023 5.873l-11.263 55.153c-.758 3.712 2.727 6.886 6.352 5.785l23.415-7.114c3.63-1.102 7.118 2.081 6.35 5.796l-17.899 86.633c-1.12 5.419 6.088 8.374 9.094 3.728l2.008-3.103 110.954-221.428c1.858-3.707-1.346-7.935-5.418-7.15l-39.022 7.532c-3.667.707-6.787-2.708-5.752-6.296l25.469-88.291c1.036-3.594-2.095-7.012-5.766-6.293Z"></path><defs><linearGradient id="a" x1="6" x2="235" y1="33" y2="344" gradientUnits="userSpaceOnUse"><stop stop-color="#41D1FF"></stop><stop offset="1" stop-color="#BD34FE"></stop></linearGradient><linearGradient id="b" x1="194.651" x2="236.076" y1="8.818" y2="292.989" gradientUnits="userSpaceOnUse"><stop stop-color="#FFEA83"></stop><stop offset=".083" stop-color="#FFDD35"></stop><stop offset="1" stop-color="#FFA800"></stop></linearGradient></defs>', 3);
const _hoisted_5$d = [
  _hoisted_2$C
];
function render$k(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$F, _hoisted_5$d);
}
const LogoVite = { render: render$k };
const _hoisted_1$E = {
  xmlns: "http://www.w3.org/2000/svg",
  "data-cy": "nextjs-logo",
  viewBox: "0 0 512 512"
};
const _hoisted_2$B = /* @__PURE__ */ createBaseVNode("path", {
  d: "M386.399 35.508C217.06-64.061 1.885 57.55.012 253.882c-1.828 191.716 201.063 315.545 370.02 231.163L185.56 213.636v167.997c0 18.614-35.619 18.614-35.619 0V156.421c0-14.776 27.448-15.989 35.226-3.145L395.43 470.572c157.95-101.737 155.817-338.136-9.031-435.064zm-23.756 317.939L326.91 298.87V149.458c0-13.932 35.732-13.932 35.732 0v203.989z",
  class: "icon-dark"
}, null, -1);
const _hoisted_3$w = [
  _hoisted_2$B
];
function render$j(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$E, _hoisted_3$w);
}
const LogoNext = { render: render$j };
const _hoisted_1$D = {
  xmlns: "http://www.w3.org/2000/svg",
  "data-cy": "nuxtjs-logo",
  viewBox: "0 0 400 400"
};
const _hoisted_2$A = /* @__PURE__ */ createBaseVNode("g", { fill: "none" }, [
  /* @__PURE__ */ createBaseVNode("path", {
    fill: "#00C58E",
    d: "m227.921 133.451-13.689 24.102-46.815-82.447L23.704 328.17h97.303c0 13.31 10.613 24.1 23.704 24.1H23.704c-8.468 0-16.292-4.595-20.525-12.052a24.452 24.452 0 0 1 .001-24.1L146.894 63.056c4.234-7.457 12.06-12.051 20.528-12.051 8.469 0 16.294 4.594 20.529 12.05l39.97 70.397z"
  }),
  /* @__PURE__ */ createBaseVNode("path", {
    fill: "#2F495E",
    d: "M331.664 316.12 241.61 157.553 227.92 133.45l-13.689 24.102-90.044 158.567a24.452 24.452 0 0 0-.001 24.1c4.233 7.456 12.056 12.052 20.524 12.052h166.4c8.47 0 16.297-4.591 20.532-12.048a24.452 24.452 0 0 0 .001-24.104h.02zm-186.953 12.05 83.21-146.516 83.19 146.517h-166.4z"
  }),
  /* @__PURE__ */ createBaseVNode("path", {
    fill: "#108775",
    d: "M396.05 340.221c-4.234 7.456-12.057 12.05-20.524 12.05H311.11c13.091 0 23.704-10.79 23.704-24.1h40.662L260.099 124.986l-18.49 32.567-13.688-24.102 11.654-20.516c4.234-7.458 12.06-12.052 20.529-12.052s16.294 4.594 20.528 12.052L396.05 316.12a24.452 24.452 0 0 1 0 24.101z"
  })
], -1);
const _hoisted_3$v = [
  _hoisted_2$A
];
function render$i(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$D, _hoisted_3$v);
}
const LogoNuxt = { render: render$i };
const _hoisted_1$C = {
  xmlns: "http://www.w3.org/2000/svg",
  "data-cy": "vue-logo",
  viewBox: "0 0 261.76 226.69"
};
const _hoisted_2$z = /* @__PURE__ */ createBaseVNode("path", {
  fill: "#41b883",
  d: "m161.096.001-30.224 52.35L100.647.002H-.005L130.872 226.69 261.749 0z"
}, null, -1);
const _hoisted_3$u = /* @__PURE__ */ createBaseVNode("path", {
  fill: "#34495e",
  d: "m161.096.001-30.224 52.35L100.647.002H52.346l78.526 136.01L209.398.001z"
}, null, -1);
const _hoisted_4$o = [
  _hoisted_2$z,
  _hoisted_3$u
];
function render$h(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$C, _hoisted_4$o);
}
const LogoVue = { render: render$h };
const _hoisted_1$B = {
  xmlns: "http://www.w3.org/2000/svg",
  "data-cy": "react-logo",
  viewBox: "0 0 500 500"
};
const _hoisted_2$y = /* @__PURE__ */ createBaseVNode("g", { fill: "#3077c6" }, [
  /* @__PURE__ */ createBaseVNode("path", { d: "M495.3 248.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9V30c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6V30.5c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1C45.2 185.4 4.7 216.1 4.7 248.5c0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3Zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9Zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9Zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1ZM250.2 382c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32Zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24 4.7 8 9.5 15.8 14.4 23.4ZM249.7 115c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32Zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9ZM85.2 299.1c-35.4-15.1-58.3-34.9-58.3-50.6 0-15.7 22.9-35.6 58.3-50.6 8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2ZM139 442c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7Zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1Zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6Z" }),
  /* @__PURE__ */ createBaseVNode("path", { d: "M295.6 248.5c0 25.239-20.461 45.7-45.7 45.7-25.239 0-45.7-20.461-45.7-45.7 0-25.239 20.461-45.7 45.7-45.7 25.239 0 45.7 20.461 45.7 45.7Z" })
], -1);
const _hoisted_3$t = [
  _hoisted_2$y
];
function render$g(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$B, _hoisted_3$t);
}
const LogoReact = { render: render$g };
const _hoisted_1$A = {
  xmlns: "http://www.w3.org/2000/svg",
  "xml:space": "preserve",
  style: { "enable-background": "new 0 0 250 250" },
  viewBox: "0 0 250 250"
};
const _hoisted_2$x = /* @__PURE__ */ createBaseVNode("path", {
  d: "M125 30 31.9 63.2l14.2 123.1L125 230l78.9-43.7 14.2-123.1z",
  style: { "fill": "#dd0031" }
}, null, -1);
const _hoisted_3$s = /* @__PURE__ */ createBaseVNode("path", {
  d: "M125 30v22.2-.1V230l78.9-43.7 14.2-123.1L125 30z",
  style: { "fill": "#c3002f" }
}, null, -1);
const _hoisted_4$n = /* @__PURE__ */ createBaseVNode("path", {
  d: "M125 52.1 66.8 182.6h21.7l11.7-29.2h49.4l11.7 29.2H183L125 52.1zm17 83.3h-34l17-40.9 17 40.9z",
  style: { "fill": "#fff" }
}, null, -1);
const _hoisted_5$c = [
  _hoisted_2$x,
  _hoisted_3$s,
  _hoisted_4$n
];
function render$f(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$A, _hoisted_5$c);
}
const LogoAngular = { render: render$f };
const _hoisted_1$z = {
  xmlns: "http://www.w3.org/2000/svg",
  width: ".84em",
  height: "1em",
  "aria-hidden": "true",
  viewBox: "0 0 256 308"
};
const _hoisted_2$w = /* @__PURE__ */ createBaseVNode("path", {
  fill: "#FF3E00",
  d: "M239.682 40.707C211.113-.182 154.69-12.301 113.895 13.69L42.247 59.356a82.198 82.198 0 0 0-37.135 55.056 86.566 86.566 0 0 0 8.536 55.576 82.425 82.425 0 0 0-12.296 30.719 87.596 87.596 0 0 0 14.964 66.244c28.574 40.893 84.997 53.007 125.787 27.016l71.648-45.664a82.182 82.182 0 0 0 37.135-55.057 86.601 86.601 0 0 0-8.53-55.577 82.409 82.409 0 0 0 12.29-30.718 87.573 87.573 0 0 0-14.963-66.244"
}, null, -1);
const _hoisted_3$r = /* @__PURE__ */ createBaseVNode("path", {
  fill: "#FFF",
  d: "M106.889 270.841c-23.102 6.007-47.497-3.036-61.103-22.648a52.685 52.685 0 0 1-9.003-39.85 49.978 49.978 0 0 1 1.713-6.693l1.35-4.115 3.671 2.697a92.447 92.447 0 0 0 28.036 14.007l2.663.808-.245 2.659a16.067 16.067 0 0 0 2.89 10.656 17.143 17.143 0 0 0 18.397 6.828 15.786 15.786 0 0 0 4.403-1.935l71.67-45.672a14.922 14.922 0 0 0 6.734-9.977 15.923 15.923 0 0 0-2.713-12.011 17.156 17.156 0 0 0-18.404-6.832 15.78 15.78 0 0 0-4.396 1.933l-27.35 17.434a52.298 52.298 0 0 1-14.553 6.391c-23.101 6.007-47.497-3.036-61.101-22.649a52.681 52.681 0 0 1-9.004-39.849 49.428 49.428 0 0 1 22.34-33.114l71.664-45.677a52.218 52.218 0 0 1 14.563-6.398c23.101-6.007 47.497 3.036 61.101 22.648a52.685 52.685 0 0 1 9.004 39.85 50.559 50.559 0 0 1-1.713 6.692l-1.35 4.116-3.67-2.693a92.373 92.373 0 0 0-28.037-14.013l-2.664-.809.246-2.658a16.099 16.099 0 0 0-2.89-10.656 17.143 17.143 0 0 0-18.398-6.828 15.786 15.786 0 0 0-4.402 1.935l-71.67 45.674a14.898 14.898 0 0 0-6.73 9.975 15.9 15.9 0 0 0 2.709 12.012 17.156 17.156 0 0 0 18.404 6.832 15.841 15.841 0 0 0 4.402-1.935l27.345-17.427a52.147 52.147 0 0 1 14.552-6.397c23.101-6.006 47.497 3.037 61.102 22.65a52.681 52.681 0 0 1 9.003 39.848 49.453 49.453 0 0 1-22.34 33.12l-71.664 45.673a52.218 52.218 0 0 1-14.563 6.398"
}, null, -1);
const _hoisted_4$m = [
  _hoisted_2$w,
  _hoisted_3$r
];
function render$e(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$z, _hoisted_4$m);
}
const LogoSvelte = { render: render$e };
const FrameworkBundlerLogos = {
  webpack: LogoWebpack,
  vite: LogoVite,
  vue2: LogoVue,
  vue3: LogoVue,
  vueclivue2: LogoVue,
  vueclivue3: LogoVue,
  nextjs: LogoNext,
  nuxtjs: LogoNuxt,
  react: LogoReact,
  reactscripts: LogoReact,
  angular: LogoAngular,
  svelte: LogoSvelte
};
const _hoisted_1$y = { class: "pb-[16px] text-gray-700" };
const _hoisted_2$v = { class: "flex flex-row items-center text-sm border-t border-gray-100 pt-[8px] -mb-[8px] -mx-[16px] px-[16px]" };
const _hoisted_3$q = { class: "font-medium" };
const _hoisted_4$l = /* @__PURE__ */ createBaseVNode("span", { class: "flex-grow" }, null, -1);
const _hoisted_5$b = { class: "font-medium" };
const _sfc_main$p = /* @__PURE__ */ defineComponent({
  __name: "ComponentTestingAvailableBanner",
  props: {
    hasBannerBeenShown: { type: Boolean },
    framework: null,
    bundler: null,
    machineId: null
  },
  setup(__props) {
    const props = __props;
    gql`
mutation SwitchToComponentTesting {
  switchTestingTypeAndRelaunch(testingType: component)
}
`;
    gql`
mutation ComponentTestingAvailable_RecordEvent($campaign: String!, $messageId: String!, $payload: String!) {
  recordEvent(campaign: $campaign, medium: "CT Available Banner", messageId: $messageId, includeMachineId: true, payload: $payload)
}
`;
    const switchToCtAndRelaunch = useMutation(SwitchToComponentTestingDocument);
    const recordEvent = useMutation(ComponentTestingAvailable_RecordEventDocument);
    const { t } = useI18n();
    const bannerId = BannerIds.CT_052023_AVAILABLE;
    const title = computed(() => {
      var _a;
      return t("specPage.banners.ct.title", [(_a = props.framework) == null ? void 0 : _a.name]);
    });
    const iconFromType = computed(() => {
      var _a;
      return FrameworkBundlerLogos[(_a = props.framework) == null ? void 0 : _a.type];
    });
    const handlePrimary = async (bannerInstanceId) => {
      await recordCampaignEvent(bannerInstanceId, "Quick setup");
      await switchToCtAndRelaunch.executeMutation({});
    };
    const handleDocsClick = async (bannerInstanceId) => {
      await recordCampaignEvent(bannerInstanceId, "Read our guide");
    };
    const handleSurveyClick = async (bannerInstanceId, dismiss) => {
      await recordCampaignEvent(bannerInstanceId, "Give feedback");
      await dismiss();
    };
    const recordCampaignEvent = async (bannerInstanceId, campaign) => {
      await recordEvent.executeMutation({
        campaign,
        messageId: bannerInstanceId,
        payload: JSON.stringify({
          framework: props.framework.name,
          bundler: props.bundler
        })
      });
    };
    const docsLink = computed(() => {
      return getUrlWithParams({
        url: "https://on.cypress.io/component",
        params: {
          utm_medium: "CT Available Banner",
          utm_campaign: "Read the Docs",
          utm_content: [props.framework.name, props.bundler].filter((val) => !!val).join("-")
        }
      });
    });
    const surveyLink = computed(() => {
      return getUrlWithParams({
        url: "https://on.cypress.io/component-survey-q2-23",
        params: {
          utm_medium: "CT Available Banner",
          utm_campaign: "Give feedback",
          utm_content: [props.framework.name, props.bundler].filter((val) => !!val).join("-"),
          machine_id: props.machineId ?? ""
        }
      });
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$w, {
        "banner-id": unref(bannerId),
        "data-cy": "component-testing-banner",
        status: "promo",
        title: unref(title),
        class: "mb-[16px]",
        dismissible: "",
        icon: unref(iconFromType),
        "has-banner-been-shown": __props.hasBannerBeenShown,
        "event-data": {
          campaign: "CT Available",
          medium: "Specs CT Available Banner",
          cohort: ""
        }
      }, {
        default: withCtx(({ dismiss, bannerInstanceId }) => [
          createBaseVNode("p", _hoisted_1$y, toDisplayString(unref(t)("specPage.banners.ct.content")), 1),
          createBaseVNode("div", _hoisted_2$v, [
            createVNode(unref(j), {
              "data-cy": "setup-button",
              variant: "outline-indigo",
              size: "32",
              class: "mr-[16px]",
              onClick: ($event) => handlePrimary(bannerInstanceId)
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(t)("specPage.banners.ct.primaryAction")), 1)
              ]),
              _: 2
            }, 1032, ["onClick"]),
            createVNode(_sfc_main$y, {
              "data-cy": "docs-link",
              href: unref(docsLink),
              onClick: ($event) => handleDocsClick(bannerInstanceId)
            }, {
              default: withCtx(() => [
                createBaseVNode("span", _hoisted_3$q, toDisplayString(unref(t)("specPage.banners.ct.secondaryAction")), 1)
              ]),
              _: 2
            }, 1032, ["href", "onClick"]),
            _hoisted_4$l,
            createVNode(_sfc_main$y, {
              "data-cy": "survey-link",
              href: unref(surveyLink),
              onClick: ($event) => handleSurveyClick(bannerInstanceId, dismiss)
            }, {
              default: withCtx(() => [
                createBaseVNode("span", _hoisted_5$b, toDisplayString(unref(t)("specPage.banners.ct.dismissAction")), 1)
              ]),
              _: 2
            }, 1032, ["href", "onClick"])
          ])
        ]),
        _: 1
      }, 8, ["banner-id", "title", "icon", "has-banner-been-shown"]);
    };
  }
});
gql`
mutation UseCohorts_DetermineCohort ($name: String!, $cohorts: [String!]!) {
  determineCohort(cohortConfig: { name: $name, cohorts: $cohorts } ) {
    __typename
    name
    cohort
  }
}`;
const useCohorts = () => {
  const determineCohortMutation = useMutation(UseCohorts_DetermineCohortDocument);
  const determineCohort = async (name, cohorts) => {
    return await determineCohortMutation.executeMutation({
      name,
      cohorts
    });
  };
  const getCohort = (config) => {
    const cohortOptionSelected = ref();
    const { name, options } = config;
    if (!options || options.length <= 1) {
      cohortOptionSelected.value = options == null ? void 0 : options[0];
    } else {
      const cohortIds = options.map((option) => option.cohort);
      const fetchCohort = async () => {
        const cohortSelected = await determineCohort(name, cohortIds);
        cohortOptionSelected.value = options.find((option) => {
          var _a, _b;
          return option.cohort === ((_b = (_a = cohortSelected.data) == null ? void 0 : _a.determineCohort) == null ? void 0 : _b.cohort);
        });
      };
      fetchCohort();
    }
    return cohortOptionSelected;
  };
  return {
    getCohort
  };
};
const _hoisted_1$x = { class: "mb-[24px]" };
const _hoisted_2$u = { class: "mb-[24px]" };
const _hoisted_3$p = { class: "mb-[24px]" };
const _hoisted_4$k = { class: "mb-[24px]" };
const _sfc_main$o = /* @__PURE__ */ defineComponent({
  __name: "SpecsListBanners",
  props: {
    gql: null,
    hasRequestedAccess: { type: Boolean },
    isSpecNotFound: { type: Boolean, default: void 0 },
    isOffline: { type: Boolean, default: void 0 },
    isFetchError: { type: Boolean, default: void 0 },
    isProjectNotFound: { type: Boolean, default: void 0 },
    isProjectUnauthorized: { type: Boolean, default: void 0 }
  },
  emits: ["refetchFailedCloudData"],
  setup(__props, { emit }) {
    const props = __props;
    const route = useRoute();
    const { t } = useI18n();
    const userProjectStatusStore = useUserProjectStatusStore();
    gql`
fragment SpecsListBanners on Query {
  ...RequestAccessButton
  cloudViewer {
    id
    firstOrganization: organizations(first: 1) {
      nodes {
        id
      }
    }
  }
  cachedUser {
    id
  }
  currentProject {
    id
    projectId
    savedState
    currentTestingType
    config
  }
  machineId
  wizard {
    framework {
      id
      name
      icon
      type
    }
    bundler {
      id
      name
    }
  }
}
`;
    gql`
subscription SpecsListBanners_CheckCloudOrgMembership {
  cloudViewerChange {
    ...SpecsListBanners
  }
}
`;
    useSubscription({ query: SpecsListBanners_CheckCloudOrgMembershipDocument });
    const showSpecNotFound = ref(props.isSpecNotFound);
    const showOffline = ref(props.isOffline);
    const showFetchError = ref(props.isFetchError);
    const showProjectNotFound = ref(props.isProjectNotFound);
    const showProjectRequestAccess = ref(props.isProjectUnauthorized);
    const bannerIds = {
      isLoggedOut: BannerIds.ACI_082022_LOGIN,
      needsOrgConnect: BannerIds.ACI_082022_CREATE_ORG,
      needsProjectConnect: BannerIds.ACI_082022_CONNECT_PROJECT,
      needsRecordedRun: BannerIds.ACI_082022_RECORD,
      isComponentTestingCandidate: BannerIds.CT_052023_AVAILABLE
    };
    watch(
      () => [props.isSpecNotFound, props.isOffline, props.isFetchError, props.isProjectNotFound, props.isProjectUnauthorized],
      () => {
        showSpecNotFound.value = props.isSpecNotFound;
        showOffline.value = props.isOffline;
        showFetchError.value = props.isFetchError;
        showProjectNotFound.value = props.isProjectNotFound;
        showProjectRequestAccess.value = props.isProjectUnauthorized;
      }
    );
    const { getEffectiveBannerState } = usePromptManager();
    const bannerComponentToShow = computed(() => {
      const componentsByStatus = {
        isLoggedOut: _sfc_main$t,
        needsOrgConnect: _sfc_main$s,
        needsProjectConnect: _sfc_main$r,
        needsRecordedRun: _sfc_main$q,
        isComponentTestingCandidate: _sfc_main$p
      };
      const bannerStateToShow = getEffectiveBannerState("specsListBanner");
      return bannerStateToShow ? componentsByStatus[bannerStateToShow] : null;
    });
    const hasCurrentBannerBeenShown = computed(() => {
      var _a, _b, _c;
      const bannerStateToShow = getEffectiveBannerState("specsListBanner");
      const bannersState = (_b = (_a = props.gql.currentProject) == null ? void 0 : _a.savedState) == null ? void 0 : _b.banners;
      const bannerId = bannerStateToShow && bannerIds[bannerStateToShow];
      return !!(bannersState == null ? void 0 : bannersState._disabled) || !!bannerId && !!((_c = bannersState == null ? void 0 : bannersState[bannerId]) == null ? void 0 : _c.lastShown);
    });
    const bannerCohortOptions = {
      [BannerIds.ACI_082022_LOGIN]: [
        // Campaign ended in v12.4.0, see GH issue #24472
        { cohort: "", value: t("specPage.banners.login.content") }
      ],
      [BannerIds.ACI_082022_CREATE_ORG]: [
        // Campaign ended in v12.4.0, see GH issue #24472
        { cohort: "", value: t("specPage.banners.createOrganization.title") }
      ],
      [BannerIds.ACI_082022_CONNECT_PROJECT]: [
        // Campaign ended in v12.4.0, see GH issue #24472
        { cohort: "", value: t("specPage.banners.connectProject.content") }
      ]
    };
    const cohortBuilder = useCohorts();
    const getCohortForBanner = (bannerId) => {
      const cohortConfig = {
        name: bannerId,
        options: bannerCohortOptions[bannerId] || []
      };
      return cohortBuilder.getCohort(cohortConfig);
    };
    const currentCohortOption = computed(() => {
      if (!bannerCohortOptions[bannerIds[userProjectStatusStore.cloudStatus]]) {
        return { cohort: null };
      }
      return reactive({ cohort: getCohortForBanner(bannerIds[userProjectStatusStore.cloudStatus]) });
    });
    const ctFramework = computed(() => {
      var _a, _b, _c, _d, _e, _f;
      return {
        name: (_b = (_a = props.gql.wizard) == null ? void 0 : _a.framework) == null ? void 0 : _b.name,
        type: (_d = (_c = props.gql.wizard) == null ? void 0 : _c.framework) == null ? void 0 : _d.type,
        icon: (_f = (_e = props.gql.wizard) == null ? void 0 : _e.framework) == null ? void 0 : _f.icon
      };
    });
    const ctBundler = computed(() => {
      var _a, _b;
      return (_b = (_a = props.gql.wizard) == null ? void 0 : _a.bundler) == null ? void 0 : _b.name;
    });
    return (_ctx, _cache) => {
      const _component_i18n_t = resolveComponent("i18n-t");
      return showSpecNotFound.value ? (openBlock(), createBlock(_sfc_main$A, {
        key: 0,
        modelValue: showSpecNotFound.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => showSpecNotFound.value = $event),
        status: "error",
        title: unref(t)("specPage.noSpecError.title"),
        class: "mb-[16px]",
        icon: unref(WarningIcon),
        dismissible: ""
      }, {
        default: withCtx(() => [
          createBaseVNode("p", _hoisted_1$x, [
            createTextVNode(toDisplayString(unref(t)("specPage.noSpecError.intro")) + " ", 1),
            createVNode(_sfc_main$z, { variant: "error" }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(route).params.unrunnable), 1)
              ]),
              _: 1
            })
          ]),
          createBaseVNode("p", null, toDisplayString(unref(t)("specPage.noSpecError.explainer")), 1)
        ]),
        _: 1
      }, 8, ["modelValue", "title", "icon"])) : showOffline.value ? (openBlock(), createBlock(_sfc_main$A, {
        key: 1,
        modelValue: showOffline.value,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => showOffline.value = $event),
        "data-cy": "offline-alert",
        status: "warning",
        title: unref(t)("specPage.offlineWarning.title"),
        class: "mb-[16px]",
        icon: unref(WarningIcon),
        dismissible: ""
      }, {
        default: withCtx(() => [
          createBaseVNode("p", _hoisted_2$u, toDisplayString(unref(t)("specPage.offlineWarning.explainer")), 1)
        ]),
        _: 1
      }, 8, ["modelValue", "title", "icon"])) : showFetchError.value ? (openBlock(), createBlock(_sfc_main$A, {
        key: 2,
        modelValue: showFetchError.value,
        "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => showFetchError.value = $event),
        status: "warning",
        title: unref(t)("specPage.fetchFailedWarning.title"),
        class: "mb-[16px]",
        icon: unref(WarningIcon),
        dismissible: ""
      }, {
        default: withCtx(() => [
          createBaseVNode("p", null, toDisplayString(unref(t)("specPage.fetchFailedWarning.explainer1")), 1),
          createBaseVNode("p", null, [
            createVNode(_component_i18n_t, {
              scope: "global",
              keypath: "specPage.fetchFailedWarning.explainer2"
            }, {
              default: withCtx(() => [
                createVNode(_sfc_main$y, {
                  href: "https://www.cypressstatus.com",
                  class: "font-medium text-indigo-500 contents group-hocus:text-indigo-600"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Status Page ")
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          createVNode(_sfc_main$v, {
            "prefix-icon": unref(RefreshIcon),
            class: "mt-[24px]",
            "data-cy": "refresh-button",
            onClick: _cache[2] || (_cache[2] = ($event) => emit("refetchFailedCloudData"))
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(t)("specPage.fetchFailedWarning.refreshButton")), 1)
            ]),
            _: 1
          }, 8, ["prefix-icon"])
        ]),
        _: 1
      }, 8, ["modelValue", "title", "icon"])) : showProjectNotFound.value ? (openBlock(), createBlock(_sfc_main$A, {
        key: 3,
        modelValue: showProjectNotFound.value,
        "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => showProjectNotFound.value = $event),
        "data-cy": "project-not-found-alert",
        status: "warning",
        title: unref(t)("runs.errors.notFound.title"),
        class: "mb-[16px]",
        icon: unref(WarningIcon),
        dismissible: ""
      }, {
        default: withCtx(() => [
          createBaseVNode("p", _hoisted_3$p, [
            createVNode(_component_i18n_t, {
              scope: "global",
              keypath: "runs.errors.notFound.description"
            }, {
              default: withCtx(() => [
                createVNode(_sfc_main$B, {
                  bg: "",
                  class: "bg-warning-100"
                }, {
                  default: withCtx(() => {
                    var _a;
                    return [
                      createTextVNode(' projectId: "' + toDisplayString((_a = props.gql.currentProject) == null ? void 0 : _a.projectId) + '" ', 1)
                    ];
                  }),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          createVNode(_sfc_main$v, {
            "prefix-icon": unref(ConnectIcon),
            class: "mt-[24px]",
            "data-cy": "reconnect-button",
            onClick: _cache[4] || (_cache[4] = ($event) => unref(userProjectStatusStore).openLoginConnectModal({ utmMedium: "Tests Tab" }))
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(t)("runs.errors.notFound.button")), 1)
            ]),
            _: 1
          }, 8, ["prefix-icon"])
        ]),
        _: 1
      }, 8, ["modelValue", "title", "icon"])) : showProjectRequestAccess.value ? (openBlock(), createBlock(_sfc_main$A, {
        key: 4,
        modelValue: showProjectRequestAccess.value,
        "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => showProjectRequestAccess.value = $event),
        "data-cy": "project-request-access-alert",
        status: "warning",
        title: unref(t)("specPage.unauthorizedBannerTitle"),
        class: "mb-[16px]",
        icon: unref(WarningIcon),
        dismissible: ""
      }, {
        default: withCtx(() => [
          createBaseVNode("p", _hoisted_4$k, toDisplayString(props.hasRequestedAccess ? unref(t)("runs.errors.unauthorizedRequested.description") : unref(t)("runs.errors.unauthorized.description")), 1),
          createVNode(RequestAccessButton, {
            gql: props.gql
          }, null, 8, ["gql"])
        ]),
        _: 1
      }, 8, ["modelValue", "title", "icon"])) : unref(bannerComponentToShow) ? (openBlock(), createBlock(resolveDynamicComponent(unref(bannerComponentToShow)), {
        key: 5,
        "has-banner-been-shown": unref(hasCurrentBannerBeenShown),
        "cohort-option": unref(currentCohortOption).cohort,
        framework: unref(ctFramework),
        bundler: unref(ctBundler),
        "machine-id": props.gql.machineId
      }, null, 8, ["has-banner-been-shown", "cohort-option", "framework", "bundler", "machine-id"])) : createCommentVNode("", true);
    };
  }
});
const _hoisted_1$w = {
  type: "button",
  class: "cursor-default flex font-medium items-center decoration-dotted underline decoration-gray-300 underline-offset-4",
  "data-cy": "last-updated-header"
};
const _hoisted_2$t = { class: "flex flex-col text-sm text-center max-w-[300px] p-4 items-center" };
const _sfc_main$n = /* @__PURE__ */ defineComponent({
  __name: "LastUpdatedHeader",
  props: {
    isGitAvailable: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const { t } = useI18n();
    const docsUrl = getUrlWithParams({
      url: "https://on.cypress.io/specs-last-updated",
      params: {
        utm_medium: "Specs Last Updated Tooltip",
        utm_campaign: "Last Updated"
      }
    });
    return (_ctx, _cache) => {
      const _component_i_cy_circle_bg_question_mark_x16 = __unplugin_components_0$1;
      const _component_i18n_t = resolveComponent("i18n-t");
      return openBlock(), createBlock(_sfc_main$C, {
        placement: "top",
        "is-interactive": true,
        "show-group": "last-updated-header",
        "show-delay": 250
      }, {
        popper: withCtx(() => [
          createBaseVNode("div", _hoisted_2$t, [
            props.isGitAvailable ? (openBlock(), createBlock(_component_i18n_t, {
              key: 0,
              scope: "global",
              keypath: "specPage.lastUpdated.tooltip.gitInfoAvailable"
            }, {
              default: withCtx(() => [
                createVNode(_sfc_main$y, {
                  href: unref(docsUrl),
                  class: "font-medium text-indigo-500 contents group-hocus:text-indigo-600"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(t)("specPage.lastUpdated.tooltip.gitStatus")), 1)
                  ]),
                  _: 1
                }, 8, ["href"])
              ]),
              _: 1
            })) : (openBlock(), createBlock(_component_i18n_t, {
              key: 1,
              scope: "global",
              keypath: "specPage.lastUpdated.tooltip.gitInfoUnavailable"
            }, {
              default: withCtx(() => [
                createVNode(_sfc_main$y, {
                  href: unref(docsUrl),
                  class: "font-medium text-indigo-500 contents group-hocus:text-indigo-600"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(t)("specPage.lastUpdated.tooltip.gitInfo")), 1)
                  ]),
                  _: 1
                }, 8, ["href"])
              ]),
              _: 1
            }))
          ])
        ]),
        default: withCtx(() => [
          createBaseVNode("button", _hoisted_1$w, [
            createTextVNode(toDisplayString(unref(t)("specPage.lastUpdated.header")) + " ", 1),
            createVNode(_component_i_cy_circle_bg_question_mark_x16, { class: "ml-1 icon-dark-indigo-500 icon-light-indigo-100" })
          ])
        ]),
        _: 1
      });
    };
  }
});
const _hoisted_1$v = {
  style: { "min-width": "16px", "min-height": "16px" },
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$s = /* @__PURE__ */ createBaseVNode("path", {
  d: "M8 1C4.13401 1 1 4.13401 1 8C1 9.95827 1.80412 11.7287 3.10018 12.9992C3.43799 11.3365 4.60091 9.97347 6.14289 9.35625C5.4468 8.80686 5 7.95561 5 7C5 5.34315 6.34315 4 8 4C9.65685 4 11 5.34315 11 7C11 7.95561 10.5532 8.80686 9.85711 9.35625C11.3991 9.97347 12.562 11.3365 12.8998 12.9992C14.1959 11.7287 15 9.95827 15 8C15 4.13401 11.866 1 8 1Z",
  fill: "#D0D2E0",
  class: "icon-light"
}, null, -1);
const _hoisted_3$o = /* @__PURE__ */ createBaseVNode("path", {
  d: "M6.14289 9.35625C6.6537 9.7594 7.29875 10 8 10C8.70125 10 9.3463 9.7594 9.85711 9.35625M6.14289 9.35625C5.4468 8.80686 5 7.95561 5 7C5 5.34315 6.34315 4 8 4C9.65685 4 11 5.34315 11 7C11 7.95561 10.5532 8.80686 9.85711 9.35625M6.14289 9.35625C4.60091 9.97347 3.43799 11.3365 3.10018 12.9992M9.85711 9.35625C11.3991 9.97347 12.562 11.3365 12.8998 12.9992M12.8998 12.9992C14.1959 11.7287 15 9.95827 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 9.95827 1.80412 11.7287 3.10018 12.9992M12.8998 12.9992C11.6372 14.2369 9.90772 15 8 15C6.09228 15 4.36279 14.2369 3.10018 12.9992",
  stroke: "#1B1E2E",
  "stroke-width": "2",
  class: "icon-dark"
}, null, -1);
const _hoisted_4$j = [
  _hoisted_2$s,
  _hoisted_3$o
];
function render$d(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$v, _hoisted_4$j);
}
const UserOutlineIcon = { name: "cy-user-outline_x16", render: render$d };
const _hoisted_1$u = {
  type: "button",
  class: "cursor-default flex font-medium items-center decoration-dotted underline decoration-gray-300 underline-offset-4"
};
const _hoisted_2$r = {
  class: "hidden lg:flex",
  "data-cy": "full-header-text"
};
const _hoisted_3$n = {
  class: "lg:hidden",
  "data-cy": "short-header-text"
};
const _hoisted_4$i = {
  class: "flex flex-col text-sm text-center p-4 items-center",
  "data-cy": "cloud-data-tooltip-content"
};
const _sfc_main$m = /* @__PURE__ */ defineComponent({
  __name: "SpecHeaderCloudDataTooltip",
  props: {
    gql: null,
    mode: null
  },
  emits: ["showLoginConnect"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const { cloudStatusMatches, project } = useUserProjectStatusStore();
    const { t } = useI18n();
    const VALUES = {
      LATEST_RUNS: {
        header: "specPage.latestRuns.header",
        shortHeader: "specPage.latestRuns.headerShort",
        connected: "specPage.latestRuns.tooltip.connected",
        notConnected: "specPage.latestRuns.tooltip.notConnected",
        noAccess: "specPage.latestRuns.tooltip.noAccess",
        docsUrl: getUrlWithParams({
          url: "https://on.cypress.io/specs-latest-runs",
          params: {
            utm_medium: "Specs Latest Runs Tooltip",
            utm_campaign: "Latest Runs"
          }
        }),
        docs: "specPage.latestRuns.tooltip.linkText"
      },
      AVG_DURATION: {
        header: "specPage.averageDuration.header",
        shortHeader: "specPage.averageDuration.headerShort",
        connected: "specPage.averageDuration.tooltip.connected",
        notConnected: "specPage.averageDuration.tooltip.notConnected",
        noAccess: "specPage.averageDuration.tooltip.noAccess",
        docsUrl: getUrlWithParams({
          url: "https://on.cypress.io/specs-average-duration",
          params: {
            utm_medium: "Specs Average Duration Tooltip",
            utm_campaign: "Average Duration"
          }
        }),
        docs: "specPage.averageDuration.tooltip.linkText"
      }
    };
    gql`
fragment SpecHeaderCloudDataTooltip on Query {
  currentProject {
    id
    cloudProject{
      __typename
      ... on CloudProjectUnauthorized {
        hasRequestedAccess
      }
    }
  }
  ...RequestAccessButton
}
`;
    const tooltipTextKey = computed(() => {
      if (project.isProjectConnected) {
        return VALUES[props.mode].connected;
      }
      if (project.isNotAuthorized) {
        return VALUES[props.mode].noAccess;
      }
      return VALUES[props.mode].notConnected;
    });
    return (_ctx, _cache) => {
      const _component_i_cy_circle_bg_question_mark_x16 = __unplugin_components_0$1;
      const _component_i18n_t = resolveComponent("i18n-t");
      return openBlock(), createBlock(_sfc_main$C, {
        placement: "top",
        "is-interactive": true,
        "show-group": VALUES[__props.mode].header,
        "show-delay": 250
      }, {
        popper: withCtx(() => [
          createBaseVNode("div", _hoisted_4$i, [
            createBaseVNode("div", {
              class: normalizeClass([{ "my-2": !unref(project).isProjectConnected }, "max-w-[300px]"])
            }, [
              createVNode(_component_i18n_t, {
                scope: "global",
                keypath: unref(tooltipTextKey)
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$y, {
                    href: VALUES[__props.mode].docsUrl,
                    class: "font-medium text-indigo-500 contents group-hocus:text-indigo-600"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(t)(VALUES[__props.mode].docs)), 1)
                    ]),
                    _: 1
                  }, 8, ["href"])
                ]),
                _: 1
              }, 8, ["keypath"])
            ], 2),
            createBaseVNode("div", null, [
              unref(cloudStatusMatches)("isLoggedOut") ? (openBlock(), createBlock(_sfc_main$v, {
                key: 0,
                "prefix-icon": unref(UserOutlineIcon),
                "prefix-icon-class": "icon-dark-white icon-light-transparent",
                "data-cy": "login-button",
                onClick: _cache[0] || (_cache[0] = ($event) => emits("showLoginConnect"))
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(t)("specPage.cloudLoginButton")), 1)
                ]),
                _: 1
              }, 8, ["prefix-icon"])) : unref(cloudStatusMatches)("needsProjectConnect") ? (openBlock(), createBlock(_sfc_main$v, {
                key: 1,
                "prefix-icon": unref(ConnectIcon),
                "prefix-icon-class": "icon-dark-white icon-light-transparent",
                "data-cy": "connect-button",
                onClick: _cache[1] || (_cache[1] = ($event) => emits("showLoginConnect"))
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(t)("specPage.connectProjectButton")), 1)
                ]),
                _: 1
              }, 8, ["prefix-icon"])) : unref(project).isNotFound ? (openBlock(), createBlock(_sfc_main$v, {
                key: 2,
                "prefix-icon": unref(ConnectIcon),
                "prefix-icon-class": "icon-dark-white icon-light-transparent",
                "data-cy": "reconnect-button",
                onClick: _cache[2] || (_cache[2] = ($event) => emits("showLoginConnect"))
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(t)("specPage.reconnectProjectButton")), 1)
                ]),
                _: 1
              }, 8, ["prefix-icon"])) : unref(project).isNotAuthorized ? (openBlock(), createBlock(RequestAccessButton, {
                key: 3,
                gql: props.gql
              }, null, 8, ["gql"])) : createCommentVNode("", true)
            ])
          ])
        ]),
        default: withCtx(() => [
          createBaseVNode("button", _hoisted_1$u, [
            createBaseVNode("span", _hoisted_2$r, toDisplayString(unref(t)(VALUES[__props.mode].header)), 1),
            createBaseVNode("span", _hoisted_3$n, toDisplayString(unref(t)(VALUES[__props.mode].shortHeader || VALUES[__props.mode].header)), 1),
            createVNode(_component_i_cy_circle_bg_question_mark_x16, { class: "ml-1 icon-dark-indigo-500 icon-light-indigo-100" })
          ])
        ]),
        _: 1
      }, 8, ["show-group"]);
    };
  }
});
const _hoisted_1$t = { class: "flex w-full gap-[16px] relative" };
const _hoisted_2$q = ["aria-label"];
const _hoisted_3$m = { class: "bg-white border-transparent rounded-r flex h-full border-t border-b border-r mr-[1px] px-[16px] transition-all items-center matches-button group-hocus:bg-indigo-50 group-hocus:text-indigo-500" };
const _hoisted_4$h = { key: 0 };
const _hoisted_5$a = { key: 1 };
const _hoisted_6$7 = { class: "sr-only" };
const _hoisted_7$6 = { class: "flex h-[40px] min-w-[127px] gap-[16px]" };
const _sfc_main$l = /* @__PURE__ */ defineComponent({
  __name: "SpecsListHeader",
  props: {
    modelValue: null,
    resultCount: { default: 0 },
    specCount: { default: 0 },
    specsListInputRefFn: { type: Function, default: void 0 }
  },
  emits: ["update:modelValue", "showSpecPatternModal", "showCreateSpecModal"],
  setup(__props, { emit }) {
    const props = __props;
    const { t } = useI18n();
    const onInput = (e) => {
      const value = e.target.value;
      emit("update:modelValue", value);
    };
    const clearInput = (e) => {
      emit("update:modelValue", "");
    };
    return (_ctx, _cache) => {
      const _component_i_cy_delete_x16 = __unplugin_components_0$2;
      return openBlock(), createElementBlock("div", _hoisted_1$t, [
        createVNode(Input, {
          id: "spec-filter",
          "input-ref": props.specsListInputRefFn,
          type: "search",
          class: "grow h-full min-w-[200px]",
          "prefix-icon-classes": "icon-light-gray-50 icon-dark-gray-500",
          "prefix-icon": unref(IconMagnifyingGlass),
          "model-value": props.modelValue,
          placeholder: unref(t)("specPage.searchPlaceholder"),
          "aria-label": unref(t)("specPage.searchPlaceholder"),
          onInput
        }, {
          suffix: withCtx(() => [
            props.modelValue ? (openBlock(), createElementBlock("button", {
              key: 0,
              type: "button",
              "data-cy": "clear-search-button",
              class: "border-transparent rounded-md flex outline-none h-[24px] mr-[16px] w-[24px] duration-300 items-center justify-center group hocus-default hocus:ring-0 hocus:bg-indigo-50",
              "aria-label": unref(t)("specPage.clearSearch"),
              onClick: clearInput
            }, [
              createVNode(_component_i_cy_delete_x16, { class: "icon-light-gray-50 icon-dark-gray-500 group-hocus:icon-dark-indigo-500" })
            ], 8, _hoisted_2$q)) : createCommentVNode("", true),
            createBaseVNode("button", {
              class: "rounded-r-md outline-none h-[38px] mr-[-0.75rem] group relative",
              "aria-live": "polite",
              onClick: _cache[0] || (_cache[0] = ($event) => emit("showSpecPatternModal"))
            }, [
              createBaseVNode("span", _hoisted_3$m, [
                props.modelValue ? (openBlock(), createElementBlock("span", _hoisted_4$h, toDisplayString(unref(t)("components.fileSearch.matchesIndicator", { count: __props.specCount, denominator: __props.specCount, numerator: __props.resultCount })), 1)) : (openBlock(), createElementBlock("span", _hoisted_5$a, toDisplayString(unref(t)("components.fileSearch.matchesIndicatorEmptyFileSearch", { count: __props.specCount, denominator: __props.specCount })), 1)),
                createBaseVNode("span", _hoisted_6$7, toDisplayString(unref(t)(`createSpec.viewSpecPatternButton`)), 1)
              ])
            ])
          ]),
          _: 1
        }, 8, ["input-ref", "prefix-icon", "model-value", "placeholder", "aria-label"]),
        createBaseVNode("div", _hoisted_7$6, [
          createVNode(unref(j), {
            "data-cy": "new-spec-button",
            class: "min-w-[125px]",
            variant: "outline-indigo",
            onClick: _cache[1] || (_cache[1] = ($event) => emit("showCreateSpecModal"))
          }, {
            default: withCtx(() => [
              createVNode(unref(L$1), { class: "mr-[8px]" }),
              createTextVNode(" " + toDisplayString(unref(t)("specPage.newSpecButton")), 1)
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
});
const SpecsListHeader = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["__scopeId", "data-v-a493cfab"]]);
const _hoisted_1$s = {
  style: { "min-width": "16px", "min-height": "16px" },
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$p = /* @__PURE__ */ createBaseVNode("path", {
  d: "M3 15C2.44772 15 2 14.5523 2 14V2C2 1.44772 2.44772 1 3 1H13C13.5523 1 14 1.44772 14 2V14C14 14.5523 13.5523 15 13 15H3Z",
  fill: "#D0D2E0",
  class: "icon-light"
}, null, -1);
const _hoisted_3$l = /* @__PURE__ */ createBaseVNode("path", {
  d: "M6 8H10M8 10V6M13 1H3C2.44772 1 2 1.44772 2 2V14C2 14.5523 2.44772 15 3 15H13C13.5523 15 14 14.5523 14 14V2C14 1.44772 13.5523 1 13 1Z",
  stroke: "#1B1E2E",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "icon-dark"
}, null, -1);
const _hoisted_4$g = [
  _hoisted_2$p,
  _hoisted_3$l
];
function render$c(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$s, _hoisted_4$g);
}
const DocumentIconPlus = { name: "cy-document-plus_x16", render: render$c };
const _hoisted_1$r = {
  style: { "min-width": "16px", "min-height": "16px" },
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$o = /* @__PURE__ */ createBaseVNode("path", {
  d: "M3 15C2.44772 15 2 14.5523 2 14V2C2 1.44772 2.44772 1 3 1L13 1C13.5523 1 14 1.44772 14 2V14C14 14.5523 13.5523 15 13 15H3Z",
  fill: "#D0D2E0",
  class: "icon-light"
}, null, -1);
const _hoisted_3$k = /* @__PURE__ */ createBaseVNode("path", {
  d: "M6 6.5H10M8 8.5V4.5M6 11.5H10M13 1L3 1C2.44772 1 2 1.44772 2 2V14C2 14.5523 2.44772 15 3 15H13C13.5523 15 14 14.5523 14 14V2C14 1.44772 13.5523 1 13 1Z",
  stroke: "#1B1E2E",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "icon-dark"
}, null, -1);
const _hoisted_4$f = [
  _hoisted_2$o,
  _hoisted_3$k
];
function render$b(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$r, _hoisted_4$f);
}
const DocumentIconPlusMinus = { name: "cy-document-plus-minus_x16", render: render$b };
const _hoisted_1$q = {
  class: "h-full grid grid-col-1 git-info-row justify-start items-center",
  "data-cy": "git-info-row"
};
const _hoisted_2$n = { class: "flex h-full w-full gap-[9px] justify-start items-center" };
const _hoisted_3$j = { class: "text-gray-700 overflow-hidden truncate" };
const _hoisted_4$e = { "data-cy": "git-info-tooltip" };
const _hoisted_5$9 = { class: "max-w-sm text-sm truncate overflow-hidden" };
const _hoisted_6$6 = {
  key: 0,
  class: "text-xs"
};
const _hoisted_7$5 = {
  key: 1,
  class: "text-gray-700 overflow-hidden truncate"
};
const _sfc_main$k = /* @__PURE__ */ defineComponent({
  __name: "SpecListGitInfo",
  props: {
    gql: null
  },
  setup(__props) {
    const props = __props;
    const { t } = useI18n();
    gql`
fragment SpecListRow on GitInfo {
  lastModifiedTimestamp
  lastModifiedHumanReadable
  author
  statusType
  shortHash
  subject
}
`;
    const classes = computed(() => {
      var _a;
      return {
        created: {
          icon: DocumentIconPlus,
          iconClasses: "icon-dark-jade-400 icon-light-jade-50",
          testId: "created-icon"
        },
        modified: {
          icon: DocumentIconPlusMinus,
          iconClasses: "icon-dark-orange-400 icon-light-orange-50",
          testId: "modified-icon"
        },
        unmodified: {
          icon: CommitIcon,
          iconClasses: "icon-light-gray-500",
          testId: "unmodified-icon"
        },
        noGitInfo: {}
      }[((_a = props.gql) == null ? void 0 : _a.statusType) || "unmodified"];
    });
    const tooltipMainText = computed(() => {
      var _a, _b;
      switch ((_a = props.gql) == null ? void 0 : _a.statusType) {
        case "unmodified":
          return (_b = props.gql) == null ? void 0 : _b.subject;
        case "created":
          return t("file.git.created");
        case "modified":
          return t("file.git.modified");
        default:
          return null;
      }
    });
    const tooltipSubtext = computed(() => {
      var _a;
      if (((_a = props.gql) == null ? void 0 : _a.statusType) === "unmodified") {
        return t("specPage.rows.gitTooltipSubtext", {
          author: props.gql.author,
          shortHash: props.gql.shortHash
        });
      }
      return "";
    });
    return (_ctx, _cache) => {
      var _a, _b;
      return openBlock(), createElementBlock("div", _hoisted_1$q, [
        unref(classes).icon ? (openBlock(), createBlock(_sfc_main$C, {
          key: ((_a = props.gql) == null ? void 0 : _a.statusType) ?? void 0,
          placement: "top",
          class: "h-full truncate",
          "data-cy": "tooltip"
        }, {
          popper: withCtx(() => [
            createBaseVNode("div", _hoisted_4$e, [
              createBaseVNode("p", _hoisted_5$9, toDisplayString(unref(tooltipMainText)), 1),
              unref(tooltipSubtext) ? (openBlock(), createElementBlock("p", _hoisted_6$6, toDisplayString(unref(tooltipSubtext)), 1)) : createCommentVNode("", true)
            ])
          ]),
          default: withCtx(() => {
            var _a2;
            return [
              createBaseVNode("button", _hoisted_2$n, [
                createBaseVNode("div", null, [
                  (openBlock(), createBlock(resolveDynamicComponent(unref(classes).icon), {
                    class: normalizeClass(unref(classes).iconClasses),
                    "data-cy": unref(classes).testId
                  }, null, 8, ["class", "data-cy"]))
                ]),
                createBaseVNode("div", _hoisted_3$j, toDisplayString(((_a2 = props.gql) == null ? void 0 : _a2.lastModifiedHumanReadable) ?? ""), 1)
              ])
            ];
          }),
          _: 1
        })) : (openBlock(), createElementBlock("div", _hoisted_7$5, toDisplayString(((_b = props.gql) == null ? void 0 : _b.lastModifiedHumanReadable) ?? ""), 1))
      ]);
    };
  }
});
const _hoisted_1$p = {
  style: { "min-width": "16px", "min-height": "16px" },
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$m = /* @__PURE__ */ createBaseVNode("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M1 8C1 11.866 4.13401 15 8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8ZM5 7C4.44772 7 4 7.44772 4 8C4 8.55228 4.44772 9 5 9H11C11.5523 9 12 8.55228 12 8C12 7.44772 11.5523 7 11 7H5Z",
  fill: "#AFB3C7"
}, null, -1);
const _hoisted_3$i = [
  _hoisted_2$m
];
function render$a(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$p, _hoisted_3$i);
}
const CancelledIcon = { name: "cy-cancelled-solid_x16", render: render$a };
const _hoisted_1$o = {
  style: { "min-width": "16px", "min-height": "16px" },
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$l = /* @__PURE__ */ createBaseVNode("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15ZM9 5C9 4.44772 8.55228 4 8 4C7.44772 4 7 4.44772 7 5V8C7 8.55228 7.44772 9 8 9C8.55228 9 9 8.55228 9 8V5ZM8 12C8.55228 12 9 11.5523 9 11C9 10.4477 8.55228 10 8 10C7.44772 10 7 10.4477 7 11C7 11.5523 7.44772 12 8 12Z",
  fill: "#DB7903"
}, null, -1);
const _hoisted_3$h = [
  _hoisted_2$l
];
function render$9(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$o, _hoisted_3$h);
}
const ErroredIcon = { name: "cy-errored-solid_x16", render: render$9 };
const _hoisted_1$n = {
  style: { "min-width": "16px", "min-height": "16px" },
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$k = /* @__PURE__ */ createBaseVNode("circle", {
  cx: "8",
  cy: "8",
  r: "7",
  fill: "#E45770"
}, null, -1);
const _hoisted_3$g = /* @__PURE__ */ createBaseVNode("path", {
  d: "M6.70711 5.29289C6.31658 4.90237 5.68342 4.90237 5.29289 5.29289C4.90237 5.68342 4.90237 6.31658 5.29289 6.70711L6.70711 5.29289ZM9.29289 10.7071C9.68342 11.0976 10.3166 11.0976 10.7071 10.7071C11.0976 10.3166 11.0976 9.68342 10.7071 9.29289L9.29289 10.7071ZM10.7071 6.70711C11.0976 6.31658 11.0976 5.68342 10.7071 5.29289C10.3166 4.90237 9.68342 4.90237 9.29289 5.29289L10.7071 6.70711ZM5.29289 9.29289C4.90237 9.68342 4.90237 10.3166 5.29289 10.7071C5.68342 11.0976 6.31658 11.0976 6.70711 10.7071L5.29289 9.29289ZM5.29289 6.70711L9.29289 10.7071L10.7071 9.29289L6.70711 5.29289L5.29289 6.70711ZM9.29289 5.29289L5.29289 9.29289L6.70711 10.7071L10.7071 6.70711L9.29289 5.29289Z",
  fill: "white"
}, null, -1);
const _hoisted_4$d = [
  _hoisted_2$k,
  _hoisted_3$g
];
function render$8(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$n, _hoisted_4$d);
}
const FailedIcon = { name: "cy-failed-solid_x16", render: render$8 };
const _hoisted_1$m = {
  style: { "min-width": "16px", "min-height": "16px" },
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$j = /* @__PURE__ */ createBaseVNode("circle", {
  cx: "8",
  cy: "8",
  r: "7",
  fill: "#1FA971"
}, null, -1);
const _hoisted_3$f = /* @__PURE__ */ createBaseVNode("path", {
  d: "M10 6L7.5 10L6 8.5",
  stroke: "white",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1);
const _hoisted_4$c = [
  _hoisted_2$j,
  _hoisted_3$f
];
function render$7(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$m, _hoisted_4$c);
}
const PassedIcon = { name: "cy-passed-solid_x16", render: render$7 };
const _hoisted_1$l = {
  style: { "min-width": "16px", "min-height": "16px" },
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$i = /* @__PURE__ */ createBaseVNode("circle", {
  cx: "8",
  cy: "8",
  r: "7",
  fill: "#D0D2E0"
}, null, -1);
const _hoisted_3$e = [
  _hoisted_2$i
];
function render$6(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$l, _hoisted_3$e);
}
const PlaceholderIcon = { name: "cy-placeholder-solid_x16", render: render$6 };
const _hoisted_1$k = {
  style: { "min-width": "16px", "min-height": "16px" },
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$h = /* @__PURE__ */ createBaseVNode("circle", {
  id: "InnerCircle",
  class: "icon-light",
  cx: "8",
  cy: "8",
  r: "6",
  fill: "none"
}, null, -1);
const _hoisted_3$d = /* @__PURE__ */ createBaseVNode("circle", {
  id: "OuterCircle",
  class: "icon-dark",
  cx: "8",
  cy: "8",
  r: "7",
  stroke: "#BFC2D4",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1);
const _hoisted_4$b = [
  _hoisted_2$h,
  _hoisted_3$d
];
function render$5(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$k, _hoisted_4$b);
}
const QueuedIcon = { name: "cy-queued-solid_x16", render: render$5 };
const _hoisted_1$j = {
  style: { "min-width": "16px", "min-height": "16px" },
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$g = /* @__PURE__ */ createBaseVNode("circle", {
  cx: "8",
  cy: "8",
  r: "6",
  stroke: "#E1E3ED",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1);
const _hoisted_3$c = /* @__PURE__ */ createBaseVNode("path", {
  d: "M14 8C14 4.68629 11.3137 2 8 2",
  stroke: "#6470F3",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1);
const _hoisted_4$a = [
  _hoisted_2$g,
  _hoisted_3$c
];
function render$4(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$j, _hoisted_4$a);
}
const RunningIcon = { name: "cy-running-outline_x16", render: render$4 };
const locale = "en";
const long = {
  year: {
    previous: "last year",
    current: "this year",
    next: "next year",
    past: {
      one: "{0} year ago",
      other: "{0} years ago"
    },
    future: {
      one: "in {0} year",
      other: "in {0} years"
    }
  },
  quarter: {
    previous: "last quarter",
    current: "this quarter",
    next: "next quarter",
    past: {
      one: "{0} quarter ago",
      other: "{0} quarters ago"
    },
    future: {
      one: "in {0} quarter",
      other: "in {0} quarters"
    }
  },
  month: {
    previous: "last month",
    current: "this month",
    next: "next month",
    past: {
      one: "{0} month ago",
      other: "{0} months ago"
    },
    future: {
      one: "in {0} month",
      other: "in {0} months"
    }
  },
  week: {
    previous: "last week",
    current: "this week",
    next: "next week",
    past: {
      one: "{0} week ago",
      other: "{0} weeks ago"
    },
    future: {
      one: "in {0} week",
      other: "in {0} weeks"
    }
  },
  day: {
    previous: "yesterday",
    current: "today",
    next: "tomorrow",
    past: {
      one: "{0} day ago",
      other: "{0} days ago"
    },
    future: {
      one: "in {0} day",
      other: "in {0} days"
    }
  },
  hour: {
    current: "this hour",
    past: {
      one: "{0} hour ago",
      other: "{0} hours ago"
    },
    future: {
      one: "in {0} hour",
      other: "in {0} hours"
    }
  },
  minute: {
    current: "this minute",
    past: {
      one: "{0} minute ago",
      other: "{0} minutes ago"
    },
    future: {
      one: "in {0} minute",
      other: "in {0} minutes"
    }
  },
  second: {
    current: "now",
    past: {
      one: "{0} second ago",
      other: "{0} seconds ago"
    },
    future: {
      one: "in {0} second",
      other: "in {0} seconds"
    }
  }
};
const short = {
  year: {
    previous: "last yr.",
    current: "this yr.",
    next: "next yr.",
    past: "{0} yr. ago",
    future: "in {0} yr."
  },
  quarter: {
    previous: "last qtr.",
    current: "this qtr.",
    next: "next qtr.",
    past: {
      one: "{0} qtr. ago",
      other: "{0} qtrs. ago"
    },
    future: {
      one: "in {0} qtr.",
      other: "in {0} qtrs."
    }
  },
  month: {
    previous: "last mo.",
    current: "this mo.",
    next: "next mo.",
    past: "{0} mo. ago",
    future: "in {0} mo."
  },
  week: {
    previous: "last wk.",
    current: "this wk.",
    next: "next wk.",
    past: "{0} wk. ago",
    future: "in {0} wk."
  },
  day: {
    previous: "yesterday",
    current: "today",
    next: "tomorrow",
    past: {
      one: "{0} day ago",
      other: "{0} days ago"
    },
    future: {
      one: "in {0} day",
      other: "in {0} days"
    }
  },
  hour: {
    current: "this hour",
    past: "{0} hr. ago",
    future: "in {0} hr."
  },
  minute: {
    current: "this minute",
    past: "{0} min. ago",
    future: "in {0} min."
  },
  second: {
    current: "now",
    past: "{0} sec. ago",
    future: "in {0} sec."
  }
};
const narrow = {
  year: {
    previous: "last yr.",
    current: "this yr.",
    next: "next yr.",
    past: "{0} yr. ago",
    future: "in {0} yr."
  },
  quarter: {
    previous: "last qtr.",
    current: "this qtr.",
    next: "next qtr.",
    past: {
      one: "{0} qtr. ago",
      other: "{0} qtrs. ago"
    },
    future: {
      one: "in {0} qtr.",
      other: "in {0} qtrs."
    }
  },
  month: {
    previous: "last mo.",
    current: "this mo.",
    next: "next mo.",
    past: "{0} mo. ago",
    future: "in {0} mo."
  },
  week: {
    previous: "last wk.",
    current: "this wk.",
    next: "next wk.",
    past: "{0} wk. ago",
    future: "in {0} wk."
  },
  day: {
    previous: "yesterday",
    current: "today",
    next: "tomorrow",
    past: {
      one: "{0} day ago",
      other: "{0} days ago"
    },
    future: {
      one: "in {0} day",
      other: "in {0} days"
    }
  },
  hour: {
    current: "this hour",
    past: "{0} hr. ago",
    future: "in {0} hr."
  },
  minute: {
    current: "this minute",
    past: "{0} min. ago",
    future: "in {0} min."
  },
  second: {
    current: "now",
    past: "{0} sec. ago",
    future: "in {0} sec."
  }
};
const now = {
  now: {
    current: "now",
    future: "in a moment",
    past: "just now"
  }
};
const mini$1 = {
  year: "{0}yr",
  month: "{0}mo",
  week: "{0}wk",
  day: "{0}d",
  hour: "{0}h",
  minute: "{0}m",
  second: "{0}s",
  now: "now"
};
const enTimeAgo = {
  locale,
  long,
  short,
  narrow,
  now,
  mini: mini$1,
  "short-time": {
    year: "{0} yr.",
    month: "{0} mo.",
    week: "{0} wk.",
    day: {
      one: "{0} day",
      other: "{0} days"
    },
    hour: "{0} hr.",
    minute: "{0} min.",
    second: "{0} sec."
  },
  "long-time": {
    year: {
      one: "{0} year",
      other: "{0} years"
    },
    month: {
      one: "{0} month",
      other: "{0} months"
    },
    week: {
      one: "{0} week",
      other: "{0} weeks"
    },
    day: {
      one: "{0} day",
      other: "{0} days"
    },
    hour: {
      one: "{0} hour",
      other: "{0} hours"
    },
    minute: {
      one: "{0} minute",
      other: "{0} minutes"
    },
    second: {
      one: "{0} second",
      other: "{0} seconds"
    }
  }
};
var defaultLocale$1 = "en";
var localesData$1 = {};
var lowercaseLocaleLookup = {};
function getDefaultLocale() {
  return defaultLocale$1;
}
function setDefaultLocale(locale2) {
  defaultLocale$1 = locale2;
}
function getLocaleData$1(locale2) {
  return localesData$1[locale2];
}
function addLocaleData$1(localeData) {
  if (!localeData) {
    throw new Error("No locale data passed");
  }
  localesData$1[localeData.locale] = localeData;
  lowercaseLocaleLookup[localeData.locale.toLowerCase()] = localeData.locale;
}
function resolveLocale$1(locale2) {
  if (localesData$1[locale2]) {
    return locale2;
  }
  if (lowercaseLocaleLookup[locale2.toLowerCase()]) {
    return lowercaseLocaleLookup[locale2.toLowerCase()];
  }
}
function resolveLocale(locale2) {
  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var localeMatcher = options.localeMatcher || "lookup";
  switch (localeMatcher) {
    case "lookup":
      return resolveLocaleLookup(locale2);
    case "best fit":
      return resolveLocaleLookup(locale2);
    default:
      throw new RangeError('Invalid "localeMatcher" option: '.concat(localeMatcher));
  }
}
function resolveLocaleLookup(locale2) {
  var resolvedLocale = resolveLocale$1(locale2);
  if (resolvedLocale) {
    return resolvedLocale;
  }
  var parts = locale2.split("-");
  while (locale2.length > 1) {
    parts.pop();
    locale2 = parts.join("-");
    var _resolvedLocale = resolveLocale$1(locale2);
    if (_resolvedLocale) {
      return _resolvedLocale;
    }
  }
}
var $ = {
  af: function classify(n) {
    return n == 1 ? "one" : "other";
  },
  am: function classify2(n) {
    return n >= 0 && n <= 1 ? "one" : "other";
  },
  ar: function classify3(n) {
    var s = String(n).split("."), t0 = Number(s[0]) == n, n100 = t0 && s[0].slice(-2);
    return n == 0 ? "zero" : n == 1 ? "one" : n == 2 ? "two" : n100 >= 3 && n100 <= 10 ? "few" : n100 >= 11 && n100 <= 99 ? "many" : "other";
  },
  ast: function classify4(n) {
    var s = String(n).split("."), v0 = !s[1];
    return n == 1 && v0 ? "one" : "other";
  },
  be: function classify5(n) {
    var s = String(n).split("."), t0 = Number(s[0]) == n, n10 = t0 && s[0].slice(-1), n100 = t0 && s[0].slice(-2);
    return n10 == 1 && n100 != 11 ? "one" : n10 >= 2 && n10 <= 4 && (n100 < 12 || n100 > 14) ? "few" : t0 && n10 == 0 || n10 >= 5 && n10 <= 9 || n100 >= 11 && n100 <= 14 ? "many" : "other";
  },
  br: function classify6(n) {
    var s = String(n).split("."), t0 = Number(s[0]) == n, n10 = t0 && s[0].slice(-1), n100 = t0 && s[0].slice(-2), n1000000 = t0 && s[0].slice(-6);
    return n10 == 1 && n100 != 11 && n100 != 71 && n100 != 91 ? "one" : n10 == 2 && n100 != 12 && n100 != 72 && n100 != 92 ? "two" : (n10 == 3 || n10 == 4 || n10 == 9) && (n100 < 10 || n100 > 19) && (n100 < 70 || n100 > 79) && (n100 < 90 || n100 > 99) ? "few" : n != 0 && t0 && n1000000 == 0 ? "many" : "other";
  },
  bs: function classify7(n) {
    var s = String(n).split("."), i = s[0], f = s[1] || "", v0 = !s[1], i10 = i.slice(-1), i100 = i.slice(-2), f10 = f.slice(-1), f100 = f.slice(-2);
    return v0 && i10 == 1 && i100 != 11 || f10 == 1 && f100 != 11 ? "one" : v0 && i10 >= 2 && i10 <= 4 && (i100 < 12 || i100 > 14) || f10 >= 2 && f10 <= 4 && (f100 < 12 || f100 > 14) ? "few" : "other";
  },
  cs: function classify8(n) {
    var s = String(n).split("."), i = s[0], v0 = !s[1];
    return n == 1 && v0 ? "one" : i >= 2 && i <= 4 && v0 ? "few" : !v0 ? "many" : "other";
  },
  cy: function classify9(n) {
    return n == 0 ? "zero" : n == 1 ? "one" : n == 2 ? "two" : n == 3 ? "few" : n == 6 ? "many" : "other";
  },
  da: function classify10(n) {
    var s = String(n).split("."), i = s[0], t0 = Number(s[0]) == n;
    return n == 1 || !t0 && (i == 0 || i == 1) ? "one" : "other";
  },
  dsb: function classify11(n) {
    var s = String(n).split("."), i = s[0], f = s[1] || "", v0 = !s[1], i100 = i.slice(-2), f100 = f.slice(-2);
    return v0 && i100 == 1 || f100 == 1 ? "one" : v0 && i100 == 2 || f100 == 2 ? "two" : v0 && (i100 == 3 || i100 == 4) || f100 == 3 || f100 == 4 ? "few" : "other";
  },
  dz: function classify12(n) {
    return "other";
  },
  fil: function classify13(n) {
    var s = String(n).split("."), i = s[0], f = s[1] || "", v0 = !s[1], i10 = i.slice(-1), f10 = f.slice(-1);
    return v0 && (i == 1 || i == 2 || i == 3) || v0 && i10 != 4 && i10 != 6 && i10 != 9 || !v0 && f10 != 4 && f10 != 6 && f10 != 9 ? "one" : "other";
  },
  fr: function classify14(n) {
    return n >= 0 && n < 2 ? "one" : "other";
  },
  ga: function classify15(n) {
    var s = String(n).split("."), t0 = Number(s[0]) == n;
    return n == 1 ? "one" : n == 2 ? "two" : t0 && n >= 3 && n <= 6 ? "few" : t0 && n >= 7 && n <= 10 ? "many" : "other";
  },
  gd: function classify16(n) {
    var s = String(n).split("."), t0 = Number(s[0]) == n;
    return n == 1 || n == 11 ? "one" : n == 2 || n == 12 ? "two" : t0 && n >= 3 && n <= 10 || t0 && n >= 13 && n <= 19 ? "few" : "other";
  },
  he: function classify17(n) {
    var s = String(n).split("."), i = s[0], v0 = !s[1], t0 = Number(s[0]) == n, n10 = t0 && s[0].slice(-1);
    return n == 1 && v0 ? "one" : i == 2 && v0 ? "two" : v0 && (n < 0 || n > 10) && t0 && n10 == 0 ? "many" : "other";
  },
  is: function classify18(n) {
    var s = String(n).split("."), i = s[0], t0 = Number(s[0]) == n, i10 = i.slice(-1), i100 = i.slice(-2);
    return t0 && i10 == 1 && i100 != 11 || !t0 ? "one" : "other";
  },
  ksh: function classify19(n) {
    return n == 0 ? "zero" : n == 1 ? "one" : "other";
  },
  lt: function classify20(n) {
    var s = String(n).split("."), f = s[1] || "", t0 = Number(s[0]) == n, n10 = t0 && s[0].slice(-1), n100 = t0 && s[0].slice(-2);
    return n10 == 1 && (n100 < 11 || n100 > 19) ? "one" : n10 >= 2 && n10 <= 9 && (n100 < 11 || n100 > 19) ? "few" : f != 0 ? "many" : "other";
  },
  lv: function classify21(n) {
    var s = String(n).split("."), f = s[1] || "", v = f.length, t0 = Number(s[0]) == n, n10 = t0 && s[0].slice(-1), n100 = t0 && s[0].slice(-2), f100 = f.slice(-2), f10 = f.slice(-1);
    return t0 && n10 == 0 || n100 >= 11 && n100 <= 19 || v == 2 && f100 >= 11 && f100 <= 19 ? "zero" : n10 == 1 && n100 != 11 || v == 2 && f10 == 1 && f100 != 11 || v != 2 && f10 == 1 ? "one" : "other";
  },
  mk: function classify22(n) {
    var s = String(n).split("."), i = s[0], f = s[1] || "", v0 = !s[1], i10 = i.slice(-1), i100 = i.slice(-2), f10 = f.slice(-1), f100 = f.slice(-2);
    return v0 && i10 == 1 && i100 != 11 || f10 == 1 && f100 != 11 ? "one" : "other";
  },
  mt: function classify23(n) {
    var s = String(n).split("."), t0 = Number(s[0]) == n, n100 = t0 && s[0].slice(-2);
    return n == 1 ? "one" : n == 0 || n100 >= 2 && n100 <= 10 ? "few" : n100 >= 11 && n100 <= 19 ? "many" : "other";
  },
  pa: function classify24(n) {
    return n == 0 || n == 1 ? "one" : "other";
  },
  pl: function classify25(n) {
    var s = String(n).split("."), i = s[0], v0 = !s[1], i10 = i.slice(-1), i100 = i.slice(-2);
    return n == 1 && v0 ? "one" : v0 && i10 >= 2 && i10 <= 4 && (i100 < 12 || i100 > 14) ? "few" : v0 && i != 1 && (i10 == 0 || i10 == 1) || v0 && i10 >= 5 && i10 <= 9 || v0 && i100 >= 12 && i100 <= 14 ? "many" : "other";
  },
  pt: function classify26(n) {
    var s = String(n).split("."), i = s[0];
    return i == 0 || i == 1 ? "one" : "other";
  },
  ro: function classify27(n) {
    var s = String(n).split("."), v0 = !s[1], t0 = Number(s[0]) == n, n100 = t0 && s[0].slice(-2);
    return n == 1 && v0 ? "one" : !v0 || n == 0 || n != 1 && n100 >= 1 && n100 <= 19 ? "few" : "other";
  },
  ru: function classify28(n) {
    var s = String(n).split("."), i = s[0], v0 = !s[1], i10 = i.slice(-1), i100 = i.slice(-2);
    return v0 && i10 == 1 && i100 != 11 ? "one" : v0 && i10 >= 2 && i10 <= 4 && (i100 < 12 || i100 > 14) ? "few" : v0 && i10 == 0 || v0 && i10 >= 5 && i10 <= 9 || v0 && i100 >= 11 && i100 <= 14 ? "many" : "other";
  },
  se: function classify29(n) {
    return n == 1 ? "one" : n == 2 ? "two" : "other";
  },
  si: function classify30(n) {
    var s = String(n).split("."), i = s[0], f = s[1] || "";
    return n == 0 || n == 1 || i == 0 && f == 1 ? "one" : "other";
  },
  sl: function classify31(n) {
    var s = String(n).split("."), i = s[0], v0 = !s[1], i100 = i.slice(-2);
    return v0 && i100 == 1 ? "one" : v0 && i100 == 2 ? "two" : v0 && (i100 == 3 || i100 == 4) || !v0 ? "few" : "other";
  }
};
$.as = $.am;
$.az = $.af;
$.bg = $.af;
$.bn = $.am;
$.ca = $.ast;
$.ce = $.af;
$.chr = $.af;
$.de = $.ast;
$.ee = $.af;
$.el = $.af;
$.en = $.ast;
$.es = $.af;
$.et = $.ast;
$.eu = $.af;
$.fa = $.am;
$.fi = $.ast;
$.fo = $.af;
$.fur = $.af;
$.fy = $.ast;
$.gl = $.ast;
$.gu = $.am;
$.hi = $.am;
$.hr = $.bs;
$.hsb = $.dsb;
$.hu = $.af;
$.hy = $.fr;
$.ia = $.ast;
$.id = $.dz;
$.it = $.ast;
$.ja = $.dz;
$.jgo = $.af;
$.jv = $.dz;
$.ka = $.af;
$.kea = $.dz;
$.kk = $.af;
$.kl = $.af;
$.km = $.dz;
$.kn = $.am;
$.ko = $.dz;
$.ku = $.af;
$.ky = $.af;
$.lb = $.af;
$.lkt = $.dz;
$.lo = $.dz;
$.ml = $.af;
$.mn = $.af;
$.mr = $.am;
$.ms = $.dz;
$.my = $.dz;
$.nb = $.af;
$.ne = $.af;
$.nl = $.ast;
$.nn = $.af;
$.or = $.af;
$.ps = $.af;
$["pt-PT"] = $.ast;
$.sah = $.dz;
$.sd = $.af;
$.sk = $.cs;
$.so = $.af;
$.sq = $.af;
$.sr = $.bs;
$.sv = $.ast;
$.sw = $.ast;
$.ta = $.af;
$.te = $.af;
$.th = $.dz;
$.ti = $.pa;
$.tk = $.af;
$.to = $.dz;
$.tr = $.af;
$.ug = $.af;
$.uk = $.ru;
$.ur = $.ast;
$.uz = $.af;
$.vi = $.dz;
$.wae = $.af;
$.yi = $.ast;
$.yue = $.dz;
$.zh = $.dz;
$.zu = $.am;
const PluralRuleFunctions = $;
function getPluralRulesLocale(locale2) {
  if (locale2 === "pt-PT") {
    return locale2;
  }
  return getLanguageFromLanguageTag(locale2);
}
var LANGUAGE_REG_EXP = /^([a-z0-9]+)/i;
function getLanguageFromLanguageTag(languageTag) {
  var match = languageTag.match(LANGUAGE_REG_EXP);
  if (!match) {
    throw new TypeError("Invalid locale: ".concat(languageTag));
  }
  return match[1];
}
function _classCallCheck$3(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$3(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass$3(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties$3(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties$3(Constructor, staticProps);
  return Constructor;
}
var PluralRules = /* @__PURE__ */ function() {
  function PluralRules2(locale2, options) {
    _classCallCheck$3(this, PluralRules2);
    var locales = PluralRules2.supportedLocalesOf(locale2);
    if (locales.length === 0) {
      throw new RangeError("Unsupported locale: " + locale2);
    }
    if (options && options.type !== "cardinal") {
      throw new RangeError('Only "cardinal" "type" is supported');
    }
    this.$ = PluralRuleFunctions[getPluralRulesLocale(locales[0])];
  }
  _createClass$3(PluralRules2, [{
    key: "select",
    value: function select(number) {
      return this.$(number);
    }
  }], [{
    key: "supportedLocalesOf",
    value: function supportedLocalesOf(locales) {
      if (typeof locales === "string") {
        locales = [locales];
      }
      return locales.filter(function(locale2) {
        return PluralRuleFunctions[getPluralRulesLocale(locale2)];
      });
    }
  }]);
  return PluralRules2;
}();
function _typeof$4(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof$4 = function _typeof2(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof$4 = function _typeof2(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof$4(obj);
}
function _objectSpread$9(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys.forEach(function(key) {
      _defineProperty$a(target, key, source[key]);
    });
  }
  return target;
}
function _slicedToArray$1(arr, i) {
  return _arrayWithHoles$1(arr) || _iterableToArrayLimit$1(arr, i) || _nonIterableRest$1();
}
function _nonIterableRest$1() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}
function _iterableToArrayLimit$1(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = void 0;
  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles$1(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _classCallCheck$2(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$2(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass$2(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties$2(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties$2(Constructor, staticProps);
  return Constructor;
}
function _defineProperty$a(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var UNITS = ["second", "minute", "hour", "day", "week", "month", "quarter", "year"];
var NUMERIC_VALUES = ["auto", "always"];
var STYLE_VALUES = ["long", "short", "narrow"];
var LOCALE_MATCHER_VALUES = ["lookup", "best fit"];
var RelativeTimeFormat = /* @__PURE__ */ function() {
  function RelativeTimeFormat2() {
    var locales = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    _classCallCheck$2(this, RelativeTimeFormat2);
    _defineProperty$a(this, "numeric", "always");
    _defineProperty$a(this, "style", "long");
    _defineProperty$a(this, "localeMatcher", "lookup");
    var numeric = options.numeric, style = options.style, localeMatcher = options.localeMatcher;
    if (numeric !== void 0) {
      if (NUMERIC_VALUES.indexOf(numeric) < 0) {
        throw new RangeError('Invalid "numeric" option: '.concat(numeric));
      }
      this.numeric = numeric;
    }
    if (style !== void 0) {
      if (STYLE_VALUES.indexOf(style) < 0) {
        throw new RangeError('Invalid "style" option: '.concat(style));
      }
      this.style = style;
    }
    if (localeMatcher !== void 0) {
      if (LOCALE_MATCHER_VALUES.indexOf(localeMatcher) < 0) {
        throw new RangeError('Invalid "localeMatcher" option: '.concat(localeMatcher));
      }
      this.localeMatcher = localeMatcher;
    }
    if (typeof locales === "string") {
      locales = [locales];
    }
    locales.push(getDefaultLocale());
    this.locale = RelativeTimeFormat2.supportedLocalesOf(locales, {
      localeMatcher: this.localeMatcher
    })[0];
    if (!this.locale) {
      throw new Error("No supported locale was found");
    }
    if (PluralRules.supportedLocalesOf(this.locale).length > 0) {
      this.pluralRules = new PluralRules(this.locale);
    } else {
      console.warn('"'.concat(this.locale, '" locale is not supported'));
    }
    if (typeof Intl !== "undefined" && Intl.NumberFormat) {
      this.numberFormat = new Intl.NumberFormat(this.locale);
      this.numberingSystem = this.numberFormat.resolvedOptions().numberingSystem;
    } else {
      this.numberingSystem = "latn";
    }
    this.locale = resolveLocale(this.locale, {
      localeMatcher: this.localeMatcher
    });
  }
  _createClass$2(RelativeTimeFormat2, [{
    key: "format",
    value: function format3() {
      var _parseFormatArgs = parseFormatArgs(arguments), _parseFormatArgs2 = _slicedToArray$1(_parseFormatArgs, 2), number = _parseFormatArgs2[0], unit = _parseFormatArgs2[1];
      return this.getRule(number, unit).replace("{0}", this.formatNumber(Math.abs(number)));
    }
    /**
     * Formats time `number` in `units` (either in past or in future).
     * @param {number} number - Time interval value.
     * @param {string} unit - Time interval measurement unit.
     * @return {Object[]} The parts (`{ type, value }`).
     * @throws {RangeError} If unit is not one of "second", "minute", "hour", "day", "week", "month", "quarter".
     * @example
     * // Version 1.
     * // Returns [
     * //   { type: "literal", value: "in " },
     * //   { type: "day", value: "100" },
     * //   { type: "literal", value: " days" }
     * // ]
     * rtf.formatToParts(100, "day")
     * //
     * // Version 2.
     * // Returns [
     * //   { type: "literal", value: "in " },
     * //   { type: "integer", value: "100", unit: "day" },
     * //   { type: "literal", value: " days" }
     * // ]
     * rtf.formatToParts(100, "day")
     */
  }, {
    key: "formatToParts",
    value: function formatToParts() {
      var _parseFormatArgs3 = parseFormatArgs(arguments), _parseFormatArgs4 = _slicedToArray$1(_parseFormatArgs3, 2), number = _parseFormatArgs4[0], unit = _parseFormatArgs4[1];
      var rule = this.getRule(number, unit);
      var valueIndex = rule.indexOf("{0}");
      if (valueIndex < 0) {
        return [{
          type: "literal",
          value: rule
        }];
      }
      var parts = [];
      if (valueIndex > 0) {
        parts.push({
          type: "literal",
          value: rule.slice(0, valueIndex)
        });
      }
      parts = parts.concat(this.formatNumberToParts(Math.abs(number)).map(function(part) {
        return _objectSpread$9({}, part, {
          unit
        });
      }));
      if (valueIndex + "{0}".length < rule.length - 1) {
        parts.push({
          type: "literal",
          value: rule.slice(valueIndex + "{0}".length)
        });
      }
      return parts;
    }
    /**
     * Returns formatting rule for `value` in `units` (either in past or in future).
     * @param {number} value - Time interval value.
     * @param {string} unit - Time interval measurement unit.
     * @return {string}
     * @throws {RangeError} If unit is not one of "second", "minute", "hour", "day", "week", "month", "quarter".
     * @example
     * // Returns "{0} days ago"
     * getRule(-2, "day")
     */
  }, {
    key: "getRule",
    value: function getRule(value, unit) {
      var unitMessages = getLocaleData$1(this.locale)[this.style][unit];
      if (this.numeric === "auto") {
        if (value === -2 || value === -1) {
          var message = unitMessages["previous".concat(value === -1 ? "" : "-" + Math.abs(value))];
          if (message) {
            return message;
          }
        } else if (value === 1 || value === 2) {
          var _message = unitMessages["next".concat(value === 1 ? "" : "-" + Math.abs(value))];
          if (_message) {
            return _message;
          }
        } else if (value === 0) {
          if (unitMessages.current) {
            return unitMessages.current;
          }
        }
      }
      var pluralizedMessages = unitMessages[isNegative(value) ? "past" : "future"];
      if (typeof pluralizedMessages === "string") {
        return pluralizedMessages;
      }
      var quantifier = this.pluralRules && this.pluralRules.select(Math.abs(value)) || "other";
      return pluralizedMessages[quantifier] || pluralizedMessages.other;
    }
    /**
     * Formats a number into a string.
     * Uses `Intl.NumberFormat` when available.
     * @param  {number} number
     * @return {string}
     */
  }, {
    key: "formatNumber",
    value: function formatNumber(number) {
      return this.numberFormat ? this.numberFormat.format(number) : String(number);
    }
    /**
     * Formats a number into a list of parts.
     * Uses `Intl.NumberFormat` when available.
     * @param  {number} number
     * @return {object[]}
     */
  }, {
    key: "formatNumberToParts",
    value: function formatNumberToParts(number) {
      return this.numberFormat && this.numberFormat.formatToParts ? this.numberFormat.formatToParts(number) : [{
        type: "integer",
        value: this.formatNumber(number)
      }];
    }
    /**
     * Returns a new object with properties reflecting the locale and date and time formatting options computed during initialization of this DateTimeFormat object.
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat/resolvedOptions
     * @return {Object}
     */
  }, {
    key: "resolvedOptions",
    value: function resolvedOptions() {
      return {
        locale: this.locale,
        style: this.style,
        numeric: this.numeric,
        numberingSystem: this.numberingSystem
      };
    }
  }]);
  return RelativeTimeFormat2;
}();
RelativeTimeFormat.supportedLocalesOf = function(locales) {
  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (typeof locales === "string") {
    locales = [locales];
  } else if (!Array.isArray(locales)) {
    throw new TypeError('Invalid "locales" argument');
  }
  return locales.filter(function(locale2) {
    return resolveLocale(locale2, options);
  });
};
RelativeTimeFormat.addLocale = addLocaleData$1;
RelativeTimeFormat.setDefaultLocale = setDefaultLocale;
RelativeTimeFormat.getDefaultLocale = getDefaultLocale;
RelativeTimeFormat.PluralRules = PluralRules;
var UNIT_ERROR = 'Invalid "unit" argument';
function parseUnit(unit) {
  if (_typeof$4(unit) === "symbol") {
    throw new TypeError(UNIT_ERROR);
  }
  if (typeof unit !== "string") {
    throw new RangeError("".concat(UNIT_ERROR, ": ").concat(unit));
  }
  if (unit[unit.length - 1] === "s") {
    unit = unit.slice(0, unit.length - 1);
  }
  if (UNITS.indexOf(unit) < 0) {
    throw new RangeError("".concat(UNIT_ERROR, ": ").concat(unit));
  }
  return unit;
}
var NUMBER_ERROR = 'Invalid "number" argument';
function parseNumber(value) {
  value = Number(value);
  if (Number.isFinite) {
    if (!Number.isFinite(value)) {
      throw new RangeError("".concat(NUMBER_ERROR, ": ").concat(value));
    }
  }
  return value;
}
function isNegativeZero(number) {
  return 1 / number === -Infinity;
}
function isNegative(number) {
  return number < 0 || number === 0 && isNegativeZero(number);
}
function parseFormatArgs(args) {
  if (args.length < 2) {
    throw new TypeError('"unit" argument is required');
  }
  return [parseNumber(args[0]), parseUnit(args[1])];
}
function _typeof$3(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof$3 = function _typeof2(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof$3 = function _typeof2(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof$3(obj);
}
function _classCallCheck$1(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$1(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass$1(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties$1(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties$1(Constructor, staticProps);
  return Constructor;
}
function _defineProperty$9(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var Cache = /* @__PURE__ */ function() {
  function Cache2() {
    _classCallCheck$1(this, Cache2);
    _defineProperty$9(this, "cache", {});
  }
  _createClass$1(Cache2, [{
    key: "get",
    value: function get() {
      var cache = this.cache;
      for (var _len = arguments.length, keys = new Array(_len), _key = 0; _key < _len; _key++) {
        keys[_key] = arguments[_key];
      }
      for (var _i = 0; _i < keys.length; _i++) {
        var key = keys[_i];
        if (_typeof$3(cache) !== "object") {
          return;
        }
        cache = cache[key];
      }
      return cache;
    }
  }, {
    key: "put",
    value: function put() {
      for (var _len2 = arguments.length, keys = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        keys[_key2] = arguments[_key2];
      }
      var value = keys.pop();
      var lastKey = keys.pop();
      var cache = this.cache;
      for (var _i2 = 0; _i2 < keys.length; _i2++) {
        var key = keys[_i2];
        if (_typeof$3(cache[key]) !== "object") {
          cache[key] = {};
        }
        cache = cache[key];
      }
      return cache[lastKey] = value;
    }
  }]);
  return Cache2;
}();
function _typeof$2(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof$2 = function _typeof2(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof$2 = function _typeof2(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof$2(obj);
}
function chooseLocale(locales, isLocaleDataAvailable) {
  for (var _iterator = locales, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator](); ; ) {
    var _ref;
    if (_isArray) {
      if (_i >= _iterator.length)
        break;
      _ref = _iterator[_i++];
    } else {
      _i = _iterator.next();
      if (_i.done)
        break;
      _ref = _i.value;
    }
    var locale2 = _ref;
    if (isLocaleDataAvailable(locale2)) {
      return locale2;
    }
    var parts = locale2.split("-");
    while (parts.length > 1) {
      parts.pop();
      locale2 = parts.join("-");
      if (isLocaleDataAvailable(locale2)) {
        return locale2;
      }
    }
  }
  throw new Error("No locale data has been registered for any of the locales: ".concat(locales.join(", ")));
}
function intlDateTimeFormatSupported() {
  var isIntlAvailable = (typeof Intl === "undefined" ? "undefined" : _typeof$2(Intl)) === "object";
  return isIntlAvailable && typeof Intl.DateTimeFormat === "function";
}
var minute = 60;
var hour = 60 * minute;
var day = 24 * hour;
var week = 7 * day;
var month = 30.44 * day;
var year = 146097 / 400 * day;
function getSecondsInUnit(unit) {
  switch (unit) {
    case "second":
      return 1;
    case "minute":
      return minute;
    case "hour":
      return hour;
    case "day":
      return day;
    case "week":
      return week;
    case "month":
      return month;
    case "year":
      return year;
  }
}
function getStepDenominator(step) {
  if (step.factor !== void 0) {
    return step.factor;
  }
  return getSecondsInUnit(step.unit || step.formatAs) || 1;
}
function getRoundFunction(round2) {
  switch (round2) {
    case "floor":
      return Math.floor;
    default:
      return Math.round;
  }
}
function getDiffRatioToNextRoundedNumber(round2) {
  switch (round2) {
    case "floor":
      return 1;
    default:
      return 0.5;
  }
}
function _typeof$1(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof$1 = function _typeof2(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof$1 = function _typeof2(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof$1(obj);
}
function getStepMinTime(step, _ref) {
  var prevStep = _ref.prevStep, timestamp = _ref.timestamp, now2 = _ref.now, future = _ref.future, round2 = _ref.round;
  var minTime3;
  if (prevStep) {
    if (prevStep.id || prevStep.unit) {
      minTime3 = step["threshold_for_".concat(prevStep.id || prevStep.unit)];
    }
  }
  if (minTime3 === void 0) {
    if (step.threshold !== void 0) {
      minTime3 = step.threshold;
      if (typeof minTime3 === "function") {
        minTime3 = minTime3(now2, future);
      }
    }
  }
  if (minTime3 === void 0) {
    minTime3 = step.minTime;
  }
  if (_typeof$1(minTime3) === "object") {
    if (prevStep && prevStep.id && minTime3[prevStep.id] !== void 0) {
      minTime3 = minTime3[prevStep.id];
    } else {
      minTime3 = minTime3.default;
    }
  }
  if (typeof minTime3 === "function") {
    minTime3 = minTime3(timestamp, {
      future,
      getMinTimeForUnit: function getMinTimeForUnit(toUnit, fromUnit) {
        return _getMinTimeForUnit(toUnit, fromUnit || prevStep && prevStep.formatAs, {
          round: round2
        });
      }
    });
  }
  if (minTime3 === void 0) {
    if (step.test) {
      if (step.test(timestamp, {
        now: now2,
        future
      })) {
        minTime3 = 0;
      } else {
        minTime3 = 9007199254740991;
      }
    }
  }
  if (minTime3 === void 0) {
    if (prevStep) {
      if (step.formatAs && prevStep.formatAs) {
        minTime3 = _getMinTimeForUnit(step.formatAs, prevStep.formatAs, {
          round: round2
        });
      }
    } else {
      minTime3 = 0;
    }
  }
  if (minTime3 === void 0) {
    console.warn("[javascript-time-ago] A step should specify `minTime`:\n" + JSON.stringify(step, null, 2));
  }
  return minTime3;
}
function _getMinTimeForUnit(toUnit, fromUnit, _ref2) {
  var round2 = _ref2.round;
  var toUnitAmount = getSecondsInUnit(toUnit);
  var fromUnitAmount;
  if (fromUnit === "now") {
    fromUnitAmount = getSecondsInUnit(toUnit);
  } else {
    fromUnitAmount = getSecondsInUnit(fromUnit);
  }
  if (toUnitAmount !== void 0 && fromUnitAmount !== void 0) {
    return toUnitAmount - fromUnitAmount * (1 - getDiffRatioToNextRoundedNumber(round2));
  }
}
function _objectSpread$8(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys.forEach(function(key) {
      _defineProperty$8(target, key, source[key]);
    });
  }
  return target;
}
function _defineProperty$8(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function getStep(steps2, secondsPassed, _ref) {
  var now2 = _ref.now, future = _ref.future, round2 = _ref.round, units = _ref.units, getNextStep = _ref.getNextStep;
  steps2 = filterStepsByUnits(steps2, units);
  var step = _getStep(steps2, secondsPassed, {
    now: now2,
    future,
    round: round2
  });
  if (getNextStep) {
    if (step) {
      var prevStep = steps2[steps2.indexOf(step) - 1];
      var nextStep = steps2[steps2.indexOf(step) + 1];
      return [prevStep, step, nextStep];
    }
    return [void 0, void 0, steps2[0]];
  }
  return step;
}
function _getStep(steps2, secondsPassed, _ref2) {
  var now2 = _ref2.now, future = _ref2.future, round2 = _ref2.round;
  if (steps2.length === 0) {
    return;
  }
  var i = getStepIndex(steps2, secondsPassed, {
    now: now2,
    future: future || secondsPassed < 0,
    round: round2
  });
  if (i === -1) {
    return;
  }
  var step = steps2[i];
  if (step.granularity) {
    var secondsPassedGranular = getRoundFunction(round2)(Math.abs(secondsPassed) / getStepDenominator(step) / step.granularity) * step.granularity;
    if (secondsPassedGranular === 0 && i > 0) {
      return steps2[i - 1];
    }
  }
  return step;
}
function getStepIndex(steps2, secondsPassed, options) {
  var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
  var minTime3 = getStepMinTime(steps2[i], _objectSpread$8({
    prevStep: steps2[i - 1],
    timestamp: options.now - secondsPassed * 1e3
  }, options));
  if (minTime3 === void 0) {
    return i - 1;
  }
  if (Math.abs(secondsPassed) < minTime3) {
    return i - 1;
  }
  if (i === steps2.length - 1) {
    return i;
  }
  return getStepIndex(steps2, secondsPassed, options, i + 1);
}
function filterStepsByUnits(steps2, units) {
  return steps2.filter(function(_ref3) {
    var unit = _ref3.unit, formatAs = _ref3.formatAs;
    unit = unit || formatAs;
    if (unit) {
      return units.indexOf(unit) >= 0;
    }
    return true;
  });
}
function getTimeToNextUpdateForUnit(unit, timestamp, _ref) {
  var now2 = _ref.now, round2 = _ref.round;
  if (!getSecondsInUnit(unit)) {
    return;
  }
  var unitDenominator = getSecondsInUnit(unit) * 1e3;
  var future = timestamp > now2;
  var preciseAmount = Math.abs(timestamp - now2);
  var roundedAmount = getRoundFunction(round2)(preciseAmount / unitDenominator) * unitDenominator;
  if (future) {
    if (roundedAmount > 0) {
      return preciseAmount - roundedAmount + getDiffToPreviousRoundedNumber(round2, unitDenominator);
    } else {
      return preciseAmount - roundedAmount + 1;
    }
  }
  return -(preciseAmount - roundedAmount) + getDiffToNextRoundedNumber(round2, unitDenominator);
}
function getDiffToNextRoundedNumber(round2, unitDenominator) {
  return getDiffRatioToNextRoundedNumber(round2) * unitDenominator;
}
function getDiffToPreviousRoundedNumber(round2, unitDenominator) {
  return (1 - getDiffRatioToNextRoundedNumber(round2)) * unitDenominator + 1;
}
var YEAR = 365 * 24 * 60 * 60 * 1e3;
var INFINITY = 1e3 * YEAR;
function getTimeToNextUpdate(date, step, _ref) {
  var prevStep = _ref.prevStep, nextStep = _ref.nextStep, now2 = _ref.now, future = _ref.future, round2 = _ref.round;
  var timestamp = date.getTime ? date.getTime() : date;
  var getTimeToNextUpdateForUnit$1 = function getTimeToNextUpdateForUnit$12(unit2) {
    return getTimeToNextUpdateForUnit(unit2, timestamp, {
      now: now2,
      round: round2
    });
  };
  var timeToStepChange = getTimeToStepChange(future ? step : nextStep, timestamp, {
    future,
    now: now2,
    round: round2,
    prevStep: future ? prevStep : step
    // isFirstStep: future && isFirstStep
  });
  if (timeToStepChange === void 0) {
    return;
  }
  var timeToNextUpdate;
  if (step) {
    if (step.getTimeToNextUpdate) {
      timeToNextUpdate = step.getTimeToNextUpdate(timestamp, {
        getTimeToNextUpdateForUnit: getTimeToNextUpdateForUnit$1,
        getRoundFunction,
        now: now2,
        future,
        round: round2
      });
    }
    if (timeToNextUpdate === void 0) {
      var unit = step.unit || step.formatAs;
      if (unit) {
        timeToNextUpdate = getTimeToNextUpdateForUnit$1(unit);
      }
    }
  }
  if (timeToNextUpdate === void 0) {
    return timeToStepChange;
  }
  return Math.min(timeToNextUpdate, timeToStepChange);
}
function getStepChangesAt(currentOrNextStep, timestamp, _ref2) {
  var now2 = _ref2.now, future = _ref2.future, round2 = _ref2.round, prevStep = _ref2.prevStep;
  var minTime3 = getStepMinTime(currentOrNextStep, {
    timestamp,
    now: now2,
    future,
    round: round2,
    prevStep
  });
  if (minTime3 === void 0) {
    return;
  }
  if (future) {
    return timestamp - minTime3 * 1e3 + 1;
  } else {
    if (minTime3 === 0 && timestamp === now2) {
      return INFINITY;
    }
    return timestamp + minTime3 * 1e3;
  }
}
function getTimeToStepChange(step, timestamp, _ref3) {
  var now2 = _ref3.now, future = _ref3.future, round2 = _ref3.round, prevStep = _ref3.prevStep;
  if (step) {
    var stepChangesAt = getStepChangesAt(step, timestamp, {
      now: now2,
      future,
      round: round2,
      prevStep
    });
    if (stepChangesAt === void 0) {
      return;
    }
    return stepChangesAt - now2;
  } else {
    if (future) {
      return timestamp - now2 + 1;
    } else {
      return INFINITY;
    }
  }
}
var localesData = {};
function getLocaleData(locale2) {
  return localesData[locale2];
}
function addLocaleData(localeData) {
  if (!localeData) {
    throw new Error("[javascript-time-ago] No locale data passed.");
  }
  localesData[localeData.locale] = localeData;
}
const round$1 = [{
  formatAs: "now"
}, {
  formatAs: "second"
}, {
  formatAs: "minute"
}, {
  formatAs: "hour"
}, {
  formatAs: "day"
}, {
  formatAs: "week"
}, {
  formatAs: "month"
}, {
  formatAs: "year"
}];
const round = {
  steps: round$1,
  labels: "long"
};
function _objectSpread$7(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys.forEach(function(key) {
      _defineProperty$7(target, key, source[key]);
    });
  }
  return target;
}
function _defineProperty$7(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
const defaultStyle = _objectSpread$7({}, round, {
  // Skip "seconds".
  steps: round.steps.filter(function(step) {
    return step.formatAs !== "second";
  })
});
const approximate$1 = [{
  // This step returns the amount of seconds
  // by dividing the amount of seconds by `1`.
  factor: 1,
  // "now" labels are used for formatting the output.
  unit: "now"
}, {
  // When the language doesn't support `now` unit,
  // the first step is ignored, and it uses this `second` unit.
  threshold: 1,
  // `threshold_for_now` should be the same as `threshold` on minutes.
  threshold_for_now: 45.5,
  // This step returns the amount of seconds
  // by dividing the amount of seconds by `1`.
  factor: 1,
  // "second" labels are used for formatting the output.
  unit: "second"
}, {
  // `threshold` should be the same as `threshold_for_now` on seconds.
  threshold: 45.5,
  // Return the amount of minutes by dividing the amount
  // of seconds by the amount of seconds in a minute.
  factor: minute,
  // "minute" labels are used for formatting the output.
  unit: "minute"
}, {
  // This step is effective starting from 2.5 minutes.
  threshold: 2.5 * minute,
  // Allow only 5-minute increments of minutes starting from 2.5 minutes.
  // `granularity` — (advanced) Time interval value "granularity".
  // For example, it could be set to `5` for minutes to allow only 5-minute increments
  // when formatting time intervals: `0 minutes`, `5 minutes`, `10 minutes`, etc.
  // Perhaps this feature will be removed because there seem to be no use cases
  // of it in the real world.
  granularity: 5,
  // Return the amount of minutes by dividing the amount
  // of seconds by the amount of seconds in a minute.
  factor: minute,
  // "minute" labels are used for formatting the output.
  unit: "minute"
}, {
  // This step is effective starting from 22.5 minutes.
  threshold: 22.5 * minute,
  // Return the amount of minutes by dividing the amount
  // of seconds by the amount of seconds in  half-an-hour.
  factor: 0.5 * hour,
  // "half-hour" labels are used for formatting the output.
  // (if available, which is no longer the case)
  unit: "half-hour"
}, {
  // This step is effective starting from 42.5 minutes.
  threshold: 42.5 * minute,
  threshold_for_minute: 52.5 * minute,
  // Return the amount of minutes by dividing the amount
  // of seconds by the amount of seconds in an hour.
  factor: hour,
  // "hour" labels are used for formatting the output.
  unit: "hour"
}, {
  // This step is effective starting from 20.5 hours.
  threshold: 20.5 / 24 * day,
  // Return the amount of minutes by dividing the amount
  // of seconds by the amount of seconds in a day.
  factor: day,
  // "day" labels are used for formatting the output.
  unit: "day"
}, {
  // This step is effective starting from 5.5 days.
  threshold: 5.5 * day,
  // Return the amount of minutes by dividing the amount
  // of seconds by the amount of seconds in a week.
  factor: week,
  // "week" labels are used for formatting the output.
  unit: "week"
}, {
  // This step is effective starting from 3.5 weeks.
  threshold: 3.5 * week,
  // Return the amount of minutes by dividing the amount
  // of seconds by the amount of seconds in a month.
  factor: month,
  // "month" labels are used for formatting the output.
  unit: "month"
}, {
  // This step is effective starting from 10.5 months.
  threshold: 10.5 * month,
  // Return the amount of minutes by dividing the amount
  // of seconds by the amount of seconds in a year.
  factor: year,
  // "year" labels are used for formatting the output.
  unit: "year"
}];
const approximate = {
  gradation: approximate$1,
  flavour: "long",
  units: ["now", "minute", "hour", "day", "week", "month", "year"]
};
const approximateTime = {
  gradation: approximate$1,
  flavour: "long-time",
  units: ["now", "minute", "hour", "day", "week", "month", "year"]
};
function getDate(value) {
  return value instanceof Date ? value : new Date(value);
}
var steps = [{
  formatAs: "second"
}, {
  formatAs: "minute"
}, {
  formatAs: "hour"
}];
var formatters = {};
var monthAndDay = {
  minTime: function minTime(timestamp, _ref) {
    _ref.future;
    var getMinTimeForUnit = _ref.getMinTimeForUnit;
    return getMinTimeForUnit("day");
  },
  format: function format(value, locale2) {
    if (!formatters[locale2]) {
      formatters[locale2] = {};
    }
    if (!formatters[locale2].dayMonth) {
      formatters[locale2].dayMonth = new Intl.DateTimeFormat(locale2, {
        month: "short",
        day: "numeric"
      });
    }
    return formatters[locale2].dayMonth.format(getDate(value));
  }
};
var yearMonthAndDay = {
  minTime: function minTime2(timestamp, _ref2) {
    var future = _ref2.future;
    if (future) {
      var maxFittingNow = new Date(new Date(timestamp).getFullYear(), 0).getTime() - 1;
      return (timestamp - maxFittingNow) / 1e3;
    } else {
      var minFittingNow = new Date(new Date(timestamp).getFullYear() + 1, 0).getTime();
      return (minFittingNow - timestamp) / 1e3;
    }
  },
  format: function format2(value, locale2) {
    if (!formatters[locale2]) {
      formatters[locale2] = {};
    }
    if (!formatters[locale2].dayMonthYear) {
      formatters[locale2].dayMonthYear = new Intl.DateTimeFormat(locale2, {
        year: "numeric",
        month: "short",
        day: "numeric"
      });
    }
    return formatters[locale2].dayMonthYear.format(getDate(value));
  }
};
if (intlDateTimeFormatSupported()) {
  steps.push(monthAndDay, yearMonthAndDay);
} else {
  steps.push({
    formatAs: "day"
  }, {
    formatAs: "week"
  }, {
    formatAs: "month"
  }, {
    formatAs: "year"
  });
}
const twitter = {
  steps,
  labels: [
    // "mini" labels are only defined for a few languages.
    "mini",
    // "short-time" labels are only defined for a few languages.
    "short-time",
    // "narrow" and "short" labels are defined for all languages.
    // "narrow" labels can sometimes be weird (like "+5d."),
    // but "short" labels have the " ago" part, so "narrow" seem
    // more appropriate.
    // "short" labels would have been more appropriate if they
    // didn't have the " ago" part, hence the "short-time" above.
    "narrow",
    // Since "narrow" labels are always present, "short" element
    // of this array can be removed.
    "short"
  ]
};
function _objectSpread$6(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys.forEach(function(key) {
      _defineProperty$6(target, key, source[key]);
    });
  }
  return target;
}
function _defineProperty$6(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
const twitterNow = _objectSpread$6({}, twitter, {
  // Add "now".
  steps: [{
    formatAs: "now"
  }].concat(twitter.steps)
});
function _objectSpread$5(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys.forEach(function(key) {
      _defineProperty$5(target, key, source[key]);
    });
  }
  return target;
}
function _defineProperty$5(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
const twitterMinute = _objectSpread$5({}, twitter, {
  // Skip "seconds".
  steps: twitter.steps.filter(function(step) {
    return step.formatAs !== "second";
  })
});
function _objectSpread$4(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys.forEach(function(key) {
      _defineProperty$4(target, key, source[key]);
    });
  }
  return target;
}
function _defineProperty$4(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
const twitterMinuteNow = _objectSpread$4({}, twitterMinute, {
  // Add "now".
  steps: [{
    formatAs: "now"
  }].concat(twitterMinute.steps)
});
function _objectSpread$3(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys.forEach(function(key) {
      _defineProperty$3(target, key, source[key]);
    });
  }
  return target;
}
function _defineProperty$3(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
const twitterFirstMinute = _objectSpread$3({}, twitter, {
  // Skip "seconds".
  steps: twitter.steps.filter(function(step) {
    return step.formatAs !== "second";
  }).map(function(step) {
    return step.formatAs === "minute" ? _objectSpread$3({}, step, {
      minTime: minute
    }) : step;
  })
});
const mini = {
  steps: [{
    formatAs: "second"
  }, {
    formatAs: "minute"
  }, {
    formatAs: "hour"
  }, {
    formatAs: "day"
  }, {
    formatAs: "month"
  }, {
    formatAs: "year"
  }],
  labels: [
    // "mini" labels are only defined for a few languages.
    "mini",
    // "short-time" labels are only defined for a few languages.
    "short-time",
    // "narrow" and "short" labels are defined for all languages.
    // "narrow" labels can sometimes be weird (like "+5d."),
    // but "short" labels have the " ago" part, so "narrow" seem
    // more appropriate.
    // "short" labels would have been more appropriate if they
    // didn't have the " ago" part, hence the "short-time" above.
    "narrow",
    // Since "narrow" labels are always present, "short" element
    // of this array can be removed.
    "short"
  ]
};
function _objectSpread$2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys.forEach(function(key) {
      _defineProperty$2(target, key, source[key]);
    });
  }
  return target;
}
function _defineProperty$2(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
const miniNow = _objectSpread$2({}, mini, {
  // Add "now".
  steps: [{
    formatAs: "now"
  }].concat(mini.steps)
});
function _objectSpread$1(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys.forEach(function(key) {
      _defineProperty$1(target, key, source[key]);
    });
  }
  return target;
}
function _defineProperty$1(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
const miniMinute = _objectSpread$1({}, mini, {
  // Skip "seconds".
  steps: mini.steps.filter(function(step) {
    return step.formatAs !== "second";
  })
});
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys.forEach(function(key) {
      _defineProperty(target, key, source[key]);
    });
  }
  return target;
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
const miniMinuteNow = _objectSpread({}, miniMinute, {
  // Add "now".
  steps: [{
    formatAs: "now"
  }].concat(miniMinute.steps)
});
function getStyleByName(style) {
  switch (style) {
    case "default":
    case "round":
      return round;
    case "round-minute":
      return defaultStyle;
    case "approximate":
      return approximate;
    case "time":
    case "approximate-time":
      return approximateTime;
    case "mini":
      return mini;
    case "mini-now":
      return miniNow;
    case "mini-minute":
      return miniMinute;
    case "mini-minute-now":
      return miniMinuteNow;
    case "twitter":
      return twitter;
    case "twitter-now":
      return twitterNow;
    case "twitter-minute":
      return twitterMinute;
    case "twitter-minute-now":
      return twitterMinuteNow;
    case "twitter-first-minute":
      return twitterFirstMinute;
    default:
      return approximate;
  }
}
function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof2(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof = function _typeof2(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof(obj);
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}
function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = void 0;
  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties(Constructor, staticProps);
  return Constructor;
}
var TimeAgo = /* @__PURE__ */ function() {
  function TimeAgo2() {
    var locales = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    var _ref = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, polyfill = _ref.polyfill;
    _classCallCheck(this, TimeAgo2);
    if (typeof locales === "string") {
      locales = [locales];
    }
    this.locale = chooseLocale(locales.concat(TimeAgo2.getDefaultLocale()), getLocaleData);
    if (typeof Intl !== "undefined") {
      if (Intl.NumberFormat) {
        this.numberFormat = new Intl.NumberFormat(this.locale);
      }
    }
    if (polyfill === false) {
      this.IntlRelativeTimeFormat = Intl.RelativeTimeFormat;
      this.IntlPluralRules = Intl.PluralRules;
    } else {
      this.IntlRelativeTimeFormat = RelativeTimeFormat;
      this.IntlPluralRules = RelativeTimeFormat.PluralRules;
    }
    this.relativeTimeFormatCache = new Cache();
    this.pluralRulesCache = new Cache();
  }
  _createClass(TimeAgo2, [{
    key: "format",
    value: function format3(input, style, options) {
      if (!options) {
        if (style && !isStyle(style)) {
          options = style;
          style = void 0;
        } else {
          options = {};
        }
      }
      if (!style) {
        style = defaultStyle;
      }
      if (typeof style === "string") {
        style = getStyleByName(style);
      }
      var timestamp = getTimestamp(input);
      var _this$getLabels = this.getLabels(style.flavour || style.labels), labels = _this$getLabels.labels, labelsType = _this$getLabels.labelsType;
      var now2;
      if (style.now !== void 0) {
        now2 = style.now;
      }
      if (now2 === void 0 && options.now !== void 0) {
        now2 = options.now;
      }
      if (now2 === void 0) {
        now2 = Date.now();
      }
      var secondsPassed = (now2 - timestamp) / 1e3;
      var future = options.future || secondsPassed < 0;
      var nowLabel = getNowLabel(labels, getLocaleData(this.locale).now, getLocaleData(this.locale).long, future);
      if (style.custom) {
        var custom = style.custom({
          now: now2,
          date: new Date(timestamp),
          time: timestamp,
          elapsed: secondsPassed,
          locale: this.locale
        });
        if (custom !== void 0) {
          return custom;
        }
      }
      var units = getTimeIntervalMeasurementUnits(
        // Controlling `style.steps` through `style.units` seems to be deprecated:
        // create a new custom `style` instead.
        style.units,
        labels,
        nowLabel
      );
      var round2 = options.round || style.round;
      var _getStep2 = getStep(
        // "gradation" is a legacy name for "steps".
        // For historical reasons, "approximate" steps are used by default.
        // In the next major version, there'll be no default for `steps`.
        style.gradation || style.steps || defaultStyle.steps,
        secondsPassed,
        {
          now: now2,
          units,
          round: round2,
          future,
          getNextStep: true
        }
      ), _getStep22 = _slicedToArray(_getStep2, 3), prevStep = _getStep22[0], step = _getStep22[1], nextStep = _getStep22[2];
      var formattedDate = this.formatDateForStep(timestamp, step, secondsPassed, {
        labels,
        labelsType,
        nowLabel,
        now: now2,
        future,
        round: round2
      }) || "";
      if (options.getTimeToNextUpdate) {
        var timeToNextUpdate = getTimeToNextUpdate(timestamp, step, {
          nextStep,
          prevStep,
          now: now2,
          future,
          round: round2
        });
        return [formattedDate, timeToNextUpdate];
      }
      return formattedDate;
    }
  }, {
    key: "formatDateForStep",
    value: function formatDateForStep(timestamp, step, secondsPassed, _ref2) {
      var _this = this;
      var labels = _ref2.labels, labelsType = _ref2.labelsType, nowLabel = _ref2.nowLabel, now2 = _ref2.now, future = _ref2.future, round2 = _ref2.round;
      if (!step) {
        return;
      }
      if (step.format) {
        return step.format(timestamp, this.locale, {
          formatAs: function formatAs(unit2, value) {
            return _this.formatValue(value, unit2, {
              labels,
              future
            });
          },
          now: now2,
          future
        });
      }
      var unit = step.unit || step.formatAs;
      if (!unit) {
        throw new Error("[javascript-time-ago] Each step must define either `formatAs` or `format()`. Step: ".concat(JSON.stringify(step)));
      }
      if (unit === "now") {
        return nowLabel;
      }
      var amount = Math.abs(secondsPassed) / getStepDenominator(step);
      if (step.granularity) {
        amount = getRoundFunction(round2)(amount / step.granularity) * step.granularity;
      }
      var valueForFormatting = -1 * Math.sign(secondsPassed) * getRoundFunction(round2)(amount);
      if (valueForFormatting === 0) {
        if (future) {
          valueForFormatting = 0;
        } else {
          valueForFormatting = -0;
        }
      }
      switch (labelsType) {
        case "long":
        case "short":
        case "narrow":
          return this.getFormatter(labelsType).format(valueForFormatting, unit);
        default:
          return this.formatValue(valueForFormatting, unit, {
            labels,
            future
          });
      }
    }
    /**
     * Mimicks what `Intl.RelativeTimeFormat` does for additional locale styles.
     * @param  {number} value
     * @param  {string} unit
     * @param  {object} options.labels — Relative time labels.
     * @param  {boolean} [options.future] — Tells how to format value `0`: as "future" (`true`) or "past" (`false`). Is `false` by default, but should have been `true` actually.
     * @return {string}
     */
  }, {
    key: "formatValue",
    value: function formatValue(value, unit, _ref3) {
      var labels = _ref3.labels, future = _ref3.future;
      return this.getFormattingRule(labels, unit, value, {
        future
      }).replace("{0}", this.formatNumber(Math.abs(value)));
    }
    /**
     * Returns formatting rule for `value` in `units` (either in past or in future).
     * @param {object} formattingRules — Relative time labels for different units.
     * @param {string} unit - Time interval measurement unit.
     * @param {number} value - Time interval value.
     * @param  {boolean} [options.future] — Tells how to format value `0`: as "future" (`true`) or "past" (`false`). Is `false` by default.
     * @return {string}
     * @example
     * // Returns "{0} days ago"
     * getFormattingRule(en.long, "day", -2, 'en')
     */
  }, {
    key: "getFormattingRule",
    value: function getFormattingRule(formattingRules, unit, value, _ref4) {
      var future = _ref4.future;
      this.locale;
      formattingRules = formattingRules[unit];
      if (typeof formattingRules === "string") {
        return formattingRules;
      }
      var pastOrFuture = value === 0 ? future ? "future" : "past" : value < 0 ? "past" : "future";
      var quantifierRules = formattingRules[pastOrFuture] || formattingRules;
      if (typeof quantifierRules === "string") {
        return quantifierRules;
      }
      var quantifier = this.getPluralRules().select(Math.abs(value));
      return quantifierRules[quantifier] || quantifierRules.other;
    }
    /**
     * Formats a number into a string.
     * Uses `Intl.NumberFormat` when available.
     * @param  {number} number
     * @return {string}
     */
  }, {
    key: "formatNumber",
    value: function formatNumber(number) {
      return this.numberFormat ? this.numberFormat.format(number) : String(number);
    }
    /**
     * Returns an `Intl.RelativeTimeFormat` for a given `labelsType`.
     * @param {string} labelsType
     * @return {object} `Intl.RelativeTimeFormat` instance
     */
  }, {
    key: "getFormatter",
    value: function getFormatter(labelsType) {
      return this.relativeTimeFormatCache.get(this.locale, labelsType) || this.relativeTimeFormatCache.put(this.locale, labelsType, new this.IntlRelativeTimeFormat(this.locale, {
        style: labelsType
      }));
    }
    /**
     * Returns an `Intl.PluralRules` instance.
     * @return {object} `Intl.PluralRules` instance
     */
  }, {
    key: "getPluralRules",
    value: function getPluralRules() {
      return this.pluralRulesCache.get(this.locale) || this.pluralRulesCache.put(this.locale, new this.IntlPluralRules(this.locale));
    }
    /**
     * Gets localized labels for this type of labels.
     *
     * @param {(string|string[])} labelsType - Relative date/time labels type.
     *                                     If it's an array then all label types are tried
     *                                     until a suitable one is found.
     *
     * @returns {Object} Returns an object of shape { labelsType, labels }
     */
  }, {
    key: "getLabels",
    value: function getLabels() {
      var labelsType = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
      if (typeof labelsType === "string") {
        labelsType = [labelsType];
      }
      labelsType = labelsType.map(function(labelsType2) {
        switch (labelsType2) {
          case "tiny":
          case "mini-time":
            return "mini";
          default:
            return labelsType2;
        }
      });
      labelsType = labelsType.concat("long");
      var localeData = getLocaleData(this.locale);
      for (var _iterator = labelsType, _isArray = Array.isArray(_iterator), _i2 = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator](); ; ) {
        var _ref5;
        if (_isArray) {
          if (_i2 >= _iterator.length)
            break;
          _ref5 = _iterator[_i2++];
        } else {
          _i2 = _iterator.next();
          if (_i2.done)
            break;
          _ref5 = _i2.value;
        }
        var _labelsType = _ref5;
        if (localeData[_labelsType]) {
          return {
            labelsType: _labelsType,
            labels: localeData[_labelsType]
          };
        }
      }
    }
  }]);
  return TimeAgo2;
}();
var defaultLocale = "en";
TimeAgo.getDefaultLocale = function() {
  return defaultLocale;
};
TimeAgo.setDefaultLocale = function(locale2) {
  return defaultLocale = locale2;
};
TimeAgo.addDefaultLocale = function(localeData) {
  if (defaultLocaleHasBeenSpecified) {
    return console.error("[javascript-time-ago] `TimeAgo.addDefaultLocale()` can only be called once. To add other locales, use `TimeAgo.addLocale()`.");
  }
  defaultLocaleHasBeenSpecified = true;
  TimeAgo.setDefaultLocale(localeData.locale);
  TimeAgo.addLocale(localeData);
};
var defaultLocaleHasBeenSpecified;
TimeAgo.addLocale = function(localeData) {
  addLocaleData(localeData);
  RelativeTimeFormat.addLocale(localeData);
};
TimeAgo.locale = TimeAgo.addLocale;
TimeAgo.addLabels = function(locale2, name, labels) {
  var localeData = getLocaleData(locale2);
  if (!localeData) {
    addLocaleData({
      locale: locale2
    });
    localeData = getLocaleData(locale2);
  }
  localeData[name] = labels;
};
function getTimestamp(input) {
  if (input.constructor === Date || isMockedDate(input)) {
    return input.getTime();
  }
  if (typeof input === "number") {
    return input;
  }
  throw new Error("Unsupported relative time formatter input: ".concat(_typeof(input), ", ").concat(input));
}
function isMockedDate(object) {
  return _typeof(object) === "object" && typeof object.getTime === "function";
}
function getTimeIntervalMeasurementUnits(allowedUnits, labels, nowLabel) {
  var units = Object.keys(labels);
  if (nowLabel) {
    units.push("now");
  }
  if (allowedUnits) {
    units = allowedUnits.filter(function(unit) {
      return unit === "now" || units.indexOf(unit) >= 0;
    });
  }
  return units;
}
function getNowLabel(labels, nowLabels, longLabels, future) {
  var nowLabel = labels.now || nowLabels && nowLabels.now;
  if (nowLabel) {
    if (typeof nowLabel === "string") {
      return nowLabel;
    }
    if (future) {
      return nowLabel.future;
    } else {
      return nowLabel.past;
    }
  }
  if (longLabels && longLabels.second && longLabels.second.current) {
    return longLabels.second.current;
  }
}
var OBJECT_CONSTRUCTOR = {}.constructor;
function isObject(object) {
  return _typeof(object) !== void 0 && object !== null && object.constructor === OBJECT_CONSTRUCTOR;
}
function isStyle(variable) {
  return typeof variable === "string" || isStyleObject(variable);
}
function isStyleObject(object) {
  return isObject(object) && (Array.isArray(object.steps) || // `gradation` property is deprecated: it has been renamed to `steps`.
  Array.isArray(object.gradation) || // `flavour` property is deprecated: it has been renamed to `labels`.
  Array.isArray(object.flavour) || typeof object.flavour === "string" || Array.isArray(object.labels) || typeof object.labels === "string" || // `units` property is deprecated.
  Array.isArray(object.units) || // `custom` property is deprecated.
  typeof object.custom === "function");
}
TimeAgo.addDefaultLocale(enTimeAgo);
const timeAgo = new TimeAgo("en-US");
function getTimeAgo(iso8601) {
  return timeAgo.format(new Date(iso8601));
}
function getDurationString(totalSeconds) {
  const roundedTotalSeconds = Math.floor(totalSeconds / 1e3);
  const seconds = roundedTotalSeconds % 60;
  const roundedTotalMinutes = Math.floor(roundedTotalSeconds / 60);
  const minutes = roundedTotalMinutes % 60;
  const roundedTotalHours = Math.floor(roundedTotalMinutes / 60);
  const hours = roundedTotalHours % 60;
  if (hours) {
    return `${hours}:${minutes.toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false })}:${seconds.toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false })}`;
  }
  return `${minutes}:${seconds.toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false })}`;
}
const _hoisted_1$i = { class: "flex flex-row text-gray-700 text-[14px] gap-2 items-center" };
const _hoisted_2$f = {
  key: 2,
  "data-cy": "spec-run-time-ago"
};
const _hoisted_3$b = { "data-cy": "spec-run-duration-1" };
const _hoisted_4$9 = {
  key: 3,
  class: "m-[-5px] text-gray-200"
};
const _hoisted_5$8 = {
  key: 4,
  "data-cy": "spec-run-duration-2"
};
const _sfc_main$j = /* @__PURE__ */ defineComponent({
  __name: "SpecRunSummary",
  props: {
    run: null,
    specFileNoExtension: null,
    specFileExtension: null
  },
  setup(__props) {
    const props = __props;
    const getAggregateTestCountString = (agg) => {
      if (agg.min == null)
        return "0";
      if (!agg.max || agg.min === agg.max)
        return agg.min;
      return `${agg.min}-${agg.max}`;
    };
    const durationText1 = computed(() => {
      var _a, _b, _c, _d;
      if (((_b = (_a = props.run) == null ? void 0 : _a.specDuration) == null ? void 0 : _b.min) == null)
        return "--";
      return getDurationString((_d = (_c = props.run) == null ? void 0 : _c.specDuration) == null ? void 0 : _d.min);
    });
    const durationText2 = computed(() => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
      if (((_b = (_a = props.run) == null ? void 0 : _a.specDuration) == null ? void 0 : _b.min) == null)
        return null;
      if (!((_d = (_c = props.run) == null ? void 0 : _c.specDuration) == null ? void 0 : _d.max) || Math.round(((_f = (_e = props.run) == null ? void 0 : _e.specDuration) == null ? void 0 : _f.min) / 1e3) === Math.round(((_h = (_g = props.run) == null ? void 0 : _g.specDuration) == null ? void 0 : _h.max) / 1e3))
        return null;
      return getDurationString((_j = (_i = props.run) == null ? void 0 : _i.specDuration) == null ? void 0 : _j.max);
    });
    const runResults = computed(() => {
      if (!props.run)
        return null;
      return {
        id: props.run.id,
        totalFailed: getAggregateTestCountString(props.run.testsFailed ?? {}),
        totalPassed: getAggregateTestCountString(props.run.testsPassed ?? {}),
        totalPending: getAggregateTestCountString(props.run.testsPending ?? {}),
        totalSkipped: getAggregateTestCountString(props.run.testsSkipped ?? {})
      };
    });
    const statusText = computed(() => {
      var _a;
      if (!((_a = props.run) == null ? void 0 : _a.status))
        return null;
      switch (props.run.status) {
        case "CANCELLED":
          return "Canceled";
        case "ERRORED":
          return "Errored";
        case "FAILED":
          return "Failed";
        case "NOTESTS":
          return "No tests";
        case "PASSED":
          return "Passed";
        case "UNCLAIMED":
          return "Queued";
        case "RUNNING":
          return "Running";
        case "TIMEDOUT":
          return "Timed out";
        default:
          return null;
      }
    });
    const statusColor = computed(() => {
      var _a;
      if (!((_a = props.run) == null ? void 0 : _a.status))
        return "gray";
      switch (props.run.status) {
        case "ERRORED":
        case "TIMEDOUT":
          return "orange";
        case "FAILED":
          return "red";
        case "PASSED":
          return "jade";
        case "RUNNING":
          return "indigo";
        case "CANCELLED":
        case "NOTESTS":
        case "UNCLAIMED":
        default:
          return "gray";
      }
    });
    const highlightColor = computed(() => {
      const color = statusColor.value;
      if (color === "gray")
        return "gray-500";
      return `${color}-400`;
    });
    const statusTextColor = computed(() => {
      const color = statusColor.value;
      if (color === "gray")
        return "gray-700";
      return `${color}-500`;
    });
    return (_ctx, _cache) => {
      const _component_i_cy_dot_solid_x4 = __unplugin_components_0$3;
      return props.run ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(["flex flex-col p-4 gap-2 items-center", unref(highlightColor)]),
        "data-cy": "spec-run-summary"
      }, [
        createVNode(_sfc_main$D, {
          "spec-file-name": props.specFileNoExtension,
          "spec-file-extension": props.specFileExtension
        }, null, 8, ["spec-file-name", "spec-file-extension"]),
        createBaseVNode("div", _hoisted_1$i, [
          unref(statusText) ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(["text-" + unref(statusTextColor), "font-medium"]),
            "data-cy": "spec-run-status"
          }, toDisplayString(unref(statusText)), 3)) : createCommentVNode("", true),
          unref(statusText) ? (openBlock(), createBlock(_component_i_cy_dot_solid_x4, {
            key: 1,
            width: "4px",
            height: "4px",
            class: "icon-light-gray-200"
          })) : createCommentVNode("", true),
          props.run.createdAt ? (openBlock(), createElementBlock("div", _hoisted_2$f, toDisplayString(unref(getTimeAgo)(props.run.createdAt)), 1)) : createCommentVNode("", true),
          createVNode(_component_i_cy_dot_solid_x4, {
            width: "4px",
            height: "4px",
            class: "icon-light-gray-200"
          }),
          createBaseVNode("div", _hoisted_3$b, toDisplayString(unref(durationText1)), 1),
          unref(durationText2) ? (openBlock(), createElementBlock("div", _hoisted_4$9, " - ")) : createCommentVNode("", true),
          unref(durationText2) ? (openBlock(), createElementBlock("div", _hoisted_5$8, toDisplayString(unref(durationText2)), 1)) : createCommentVNode("", true)
        ]),
        unref(runResults) ? (openBlock(), createBlock(_sfc_main$E, mergeProps({ key: 0 }, unref(runResults), {
          class: "my-2",
          "data-cy": "spec-run-result-counts"
        }), null, 16)) : createCommentVNode("", true)
      ], 2)) : createCommentVNode("", true);
    };
  }
});
const SpecRunSummary = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["__scopeId", "data-v-59b4ff47"]]);
const _hoisted_1$h = {
  key: 0,
  class: "flex justify-end items-center",
  "data-cy": "run-status-dots"
};
const _hoisted_2$e = {
  key: 0,
  class: "sr-only"
};
const _hoisted_3$a = {
  key: 1,
  "data-cy": "run-status-empty",
  class: "text-gray-400"
};
const _sfc_main$i = /* @__PURE__ */ defineComponent({
  __name: "RunStatusDots",
  props: {
    gql: null,
    specFileName: null,
    specFileExtension: null
  },
  setup(__props) {
    const props = __props;
    gql`
fragment RunStatusDots on RemoteFetchableCloudProjectSpecResult {
  id
  data {
    __typename
    ... on CloudProjectSpecNotFound {
      retrievedAt
      # We query for message even though we don't use it so GQL can discriminate these two types properly
      message
    }
    ... on CloudProjectSpec {
      id
      retrievedAt
      specRunsForRunIds(cloudRunIds: $runIds) {
        id
        runNumber
        basename
        path
        extension
        testsFailed{
          min
          max
        }
        testsPassed{
          min
          max
        }
        testsPending{
          min
          max
        }
        testsSkipped{
          min
          max
        }
        createdAt
        groupCount
        specDuration{
          min
          max
        }
        status
        url
      }
    }
  }
}
`;
    const runs = computed(() => {
      var _a, _b, _c, _d;
      return ((_b = (_a = props.gql) == null ? void 0 : _a.data) == null ? void 0 : _b.__typename) === "CloudProjectSpec" ? ((_d = (_c = props.gql) == null ? void 0 : _c.data) == null ? void 0 : _d.specRunsForRunIds) ?? [] : [];
    });
    const isRunsLoaded = computed(() => {
      var _a;
      return !!((_a = props.gql) == null ? void 0 : _a.data);
    });
    const dotClasses = computed(() => {
      var _a;
      const statuses = ["placeholder", "placeholder", "placeholder"];
      if (runs.value && runs.value.length > 1) {
        for (let i = 1; i < Math.min(runs.value.length, 4); i++) {
          statuses[i - 1] = ((_a = runs.value[i]) == null ? void 0 : _a.status) ?? "";
        }
      }
      return statuses.reverse().map((s) => {
        switch (s) {
          case "PASSED":
            return "icon-light-jade-400";
          case "RUNNING":
            return "icon-light-indigo-400";
          case "FAILED":
            return "icon-light-red-400";
          case "ERRORED":
          case "TIMEDOUT":
            return "icon-light-orange-400";
          case "NOTESTS":
            return "icon-light-gray-400";
          case "CANCELLED":
          case "UNCLAIMED":
          default:
            return "icon-light-gray-300";
        }
      });
    });
    const latestRun = computed(() => {
      var _a;
      return ((_a = runs.value) == null ? void 0 : _a[0]) ?? null;
    });
    const latestDot = computed(() => {
      var _a;
      const status = (_a = latestRun.value) == null ? void 0 : _a.status;
      switch (status) {
        case "PASSED":
          return { icon: PassedIcon, spin: false, status };
        case "RUNNING":
          return { icon: RunningIcon, spin: true, status };
        case "UNCLAIMED":
          return { icon: QueuedIcon, spin: false, status };
        case "FAILED":
          return { icon: FailedIcon, spin: false, status };
        case "ERRORED":
        case "TIMEDOUT":
          return { icon: ErroredIcon, spin: false, status };
        case "NOTESTS":
        case "CANCELLED":
          return { icon: CancelledIcon, spin: false, status };
        default:
          return { icon: PlaceholderIcon, spin: false, status: "PLACEHOLDER" };
      }
    });
    const cloudUrl = computed(() => {
      var _a;
      if ((_a = latestRun.value) == null ? void 0 : _a.url) {
        return getUrlWithParams({
          url: latestRun.value.url,
          params: {
            utm_medium: "Specs Latest Runs Dots",
            utm_campaign: latestDot.value.status
          }
        });
      }
      return "#";
    });
    return (_ctx, _cache) => {
      var _a;
      const _component_i_cy_dot_solid_x4 = __unplugin_components_0$3;
      return openBlock(), createElementBlock("div", null, [
        unref(isRunsLoaded) ? (openBlock(), createBlock(resolveDynamicComponent(unref(latestRun) ? _sfc_main$C : "div"), {
          key: 0,
          placement: "top",
          "is-interactive": true,
          class: "h-[16px]",
          "hide-delay": 0,
          "show-group": (_a = props.gql) == null ? void 0 : _a.id,
          distance: 7,
          "popper-class": "RunStatusDots_Tooltip"
        }, {
          popper: withCtx(() => [
            unref(latestRun) ? (openBlock(), createBlock(_sfc_main$y, {
              key: 0,
              href: unref(cloudUrl),
              "use-default-hocus": false
            }, {
              default: withCtx(() => [
                createVNode(SpecRunSummary, {
                  run: unref(latestRun),
                  "spec-file-no-extension": props.specFileName,
                  "spec-file-extension": props.specFileExtension
                }, null, 8, ["run", "spec-file-no-extension", "spec-file-extension"])
              ]),
              _: 1
            }, 8, ["href"])) : createCommentVNode("", true)
          ]),
          default: withCtx(() => [
            (openBlock(), createBlock(resolveDynamicComponent(unref(latestRun) ? _sfc_main$y : "div"), { href: unref(cloudUrl) }, {
              default: withCtx(() => [
                unref(isRunsLoaded) ? (openBlock(), createElementBlock("div", _hoisted_1$h, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(unref(dotClasses), (dot, i) => {
                    return openBlock(), createElementBlock("div", {
                      key: i,
                      class: "ml-[4px]"
                    }, [
                      createVNode(_component_i_cy_dot_solid_x4, {
                        width: "4",
                        height: "4",
                        class: normalizeClass(dot),
                        "data-cy": "run-status-dot-" + i
                      }, null, 8, ["class", "data-cy"])
                    ]);
                  }), 128)),
                  createBaseVNode("div", null, [
                    (openBlock(), createBlock(resolveDynamicComponent(unref(latestDot).icon), {
                      width: "16",
                      height: "16",
                      class: normalizeClass([{ "animate-spin": unref(latestDot).spin }, "ml-[4px]"]),
                      "data-cy": "run-status-dot-latest",
                      "data-cy-run-status": unref(latestDot).status
                    }, null, 8, ["class", "data-cy-run-status"]))
                  ]),
                  unref(latestRun) ? (openBlock(), createElementBlock("span", _hoisted_2$e, toDisplayString(props.specFileName) + toDisplayString(props.specFileExtension) + " test results", 1)) : createCommentVNode("", true)
                ])) : createCommentVNode("", true)
              ]),
              _: 1
            }, 8, ["href"]))
          ]),
          _: 1
        }, 8, ["show-group"])) : createCommentVNode("", true),
        !unref(isRunsLoaded) ? (openBlock(), createElementBlock("div", _hoisted_3$a, " -- ")) : createCommentVNode("", true)
      ]);
    };
  }
});
const _hoisted_1$g = {
  key: 0,
  class: "h-full grid text-gray-700 justify-end items-center",
  "data-cy": "average-duration"
};
const _hoisted_2$d = {
  key: 1,
  class: "h-full grid text-gray-400 justify-end items-center"
};
const _sfc_main$h = /* @__PURE__ */ defineComponent({
  __name: "AverageDuration",
  props: {
    gql: null
  },
  setup(__props) {
    const props = __props;
    gql`
fragment AverageDuration on RemoteFetchableCloudProjectSpecResult {
  id
  data {
    ... on CloudProjectSpecNotFound {
      retrievedAt
    }
    ... on CloudProjectSpec {
      id
      retrievedAt
      averageDurationForRunIds(cloudRunIds: $runIds)
    }
  }
}
`;
    return (_ctx, _cache) => {
      var _a, _b, _c, _d;
      return ((_b = (_a = props.gql) == null ? void 0 : _a.data) == null ? void 0 : _b.__typename) === "CloudProjectSpec" && ((_d = (_c = props.gql) == null ? void 0 : _c.data) == null ? void 0 : _d.averageDurationForRunIds) ? (openBlock(), createElementBlock("div", _hoisted_1$g, toDisplayString(unref(getDurationString)(props.gql.data.averageDurationForRunIds)), 1)) : (openBlock(), createElementBlock("div", _hoisted_2$d, " -- "));
    };
  }
});
const _hoisted_1$f = { "data-cy": "specs-list-row" };
const _hoisted_2$c = { "data-cy": "specs-list-row-file" };
const _hoisted_3$9 = {
  "data-cy": "specs-list-row-git-info",
  class: "group"
};
const _hoisted_4$8 = {
  "data-cy": "specs-list-row-latest-runs",
  class: "group"
};
const _hoisted_5$7 = {
  "data-cy": "specs-list-row-average-duration",
  class: "hidden group md:block"
};
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  __name: "SpecsListRowItem",
  props: {
    isLeaf: { type: Boolean },
    route: null,
    isProjectConnected: { type: Boolean },
    gridColumns: null
  },
  emits: ["toggleRow"],
  setup(__props, { emit }) {
    const lazyRender = useTimeout(50);
    function handleCtrlClick() {
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$f, [
        (openBlock(), createBlock(resolveDynamicComponent(__props.isLeaf ? "RouterLink" : "div"), {
          class: normalizeClass(["h-full outline-none ring-inset grid pr-[20px] focus:outline-transparent focus-within:ring-indigo-300 focus-within:ring-1 children:cursor-pointer", __props.gridColumns]),
          to: __props.route,
          "data-cy": __props.isLeaf ? "spec-item-link" : "spec-item-directory",
          onClick: [
            _cache[0] || (_cache[0] = ($event) => emit("toggleRow")),
            withModifiers(handleCtrlClick, ["meta", "prevent"]),
            withModifiers(handleCtrlClick, ["ctrl", "prevent"])
          ]
        }, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_2$c, [
              renderSlot(_ctx.$slots, "file")
            ]),
            unref(lazyRender) && __props.isLeaf ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
              createBaseVNode("div", _hoisted_3$9, [
                renderSlot(_ctx.$slots, "git-info")
              ]),
              createBaseVNode("div", _hoisted_4$8, [
                renderSlot(_ctx.$slots, "latest-runs")
              ]),
              createBaseVNode("div", _hoisted_5$7, [
                renderSlot(_ctx.$slots, "average-duration")
              ])
            ], 64)) : createCommentVNode("", true)
          ]),
          _: 3
        }, 8, ["class", "to", "data-cy", "onClick"]))
      ]);
    };
  }
});
const _hoisted_1$e = { class: "flex h-full items-center" };
const _hoisted_2$b = ["data-cy", "aria-expanded"];
const _hoisted_3$8 = ["title"];
const _hoisted_4$7 = { class: "sr-only" };
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "RowDirectory",
  props: {
    name: { default: "" },
    expanded: { type: Boolean, default: false },
    indexes: { default: () => [] },
    depth: null
  },
  emits: ["toggle"],
  setup(__props, { emit: emits }) {
    return (_ctx, _cache) => {
      const _component_i_cy_chevron_down_small_x16 = __unplugin_components_0$4;
      return openBlock(), createElementBlock("div", _hoisted_1$e, [
        createBaseVNode("button", {
          class: "h-full grid gap-[8px] grid-cols-[14px,16px,auto] items-center group focus:outline-none",
          "data-cy": `row-directory-depth-${__props.depth}`,
          "aria-expanded": __props.expanded,
          onClick: _cache[0] || (_cache[0] = withModifiers(($event) => emits("toggle"), ["stop"]))
        }, [
          createVNode(_component_i_cy_chevron_down_small_x16, {
            class: normalizeClass(["mr-[8px] text-sm icon-dark-gray-300 group-hocus:icon-dark-gray-700", { "transform rotate-270": !__props.expanded }])
          }, null, 8, ["class"]),
          createVNode(unref(IconFolder), { class: "icon-dark-white icon-light-gray-200" }),
          createBaseVNode("div", {
            title: __props.name,
            class: "flex text-gray-600 truncate"
          }, [
            createVNode(_sfc_main$F, {
              text: __props.name,
              indexes: __props.indexes,
              class: "font-medium",
              "highlight-classes": "text-gray-1000"
            }, null, 8, ["text", "indexes"])
          ], 8, _hoisted_3$8),
          createBaseVNode("span", _hoisted_4$7, toDisplayString(__props.expanded ? "collapse" : "expand"), 1)
        ], 8, _hoisted_2$b),
        renderSlot(_ctx.$slots, "default")
      ]);
    };
  }
});
const _hoisted_1$d = {
  class: "h-full grid gap-[8px] group grid-cols-[16px,auto,auto] items-center",
  "data-cy": "spec-item"
};
const _hoisted_2$a = ["title"];
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "SpecItem",
  props: {
    fileName: null,
    extension: null,
    indexes: { default: () => [] }
  },
  setup(__props) {
    const props = __props;
    const split = computed(() => {
      return deriveIndexes(props.fileName, props.indexes);
    });
    return (_ctx, _cache) => {
      const _component_i_cy_document_blank_x16 = __unplugin_components_0$5;
      return openBlock(), createElementBlock("div", _hoisted_1$d, [
        createVNode(_component_i_cy_document_blank_x16, { class: "icon-light-gray-50 icon-dark-gray-200 group-hocus:icon-light-indigo-200 group-hocus:icon-dark-indigo-400" }),
        createBaseVNode("div", {
          title: __props.fileName + __props.extension,
          class: "text-gray-400 truncate group-hocus:text-indigo-600"
        }, [
          createVNode(_sfc_main$F, {
            text: __props.fileName,
            indexes: unref(split).fileNameIndexes,
            class: "font-medium text-indigo-500 group-hocus:text-indigo-700",
            "highlight-classes": "text-gray-1000"
          }, null, 8, ["text", "indexes"]),
          createVNode(_sfc_main$F, {
            text: __props.extension,
            indexes: unref(split).extensionIndexes,
            class: "font-light group-hocus:text-gray-400",
            "highlight-classes": "text-gray-1000"
          }, null, 8, ["text", "indexes"]),
          renderSlot(_ctx.$slots, "default")
        ], 8, _hoisted_2$a)
      ]);
    };
  }
});
const _hoisted_1$c = {
  style: { "min-width": "16px", "min-height": "16px" },
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$9 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M15 3C15 1.89543 14.1046 1 13 1H3C1.89543 1 1 1.89543 1 3V4H15V3Z",
  fill: "#D0D2E0",
  class: "icon-light"
}, null, -1);
const _hoisted_3$7 = /* @__PURE__ */ createBaseVNode("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M15 3C15 1.89543 14.1046 1 13 1H3C1.89543 1 1 1.89543 1 3V4H15V3Z",
  fill: "#D0D2E0",
  class: "icon-light"
}, null, -1);
const _hoisted_4$6 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M1 4V13C1 14.1046 1.89543 15 3 15H13C14.1046 15 15 14.1046 15 13V4M1 4V3C1 1.89543 1.89543 1 3 1H13C14.1046 1 15 1.89543 15 3V4M1 4H15M10 8L11.5 9.5L10 11M6 8L4.5 9.5L6 11",
  stroke: "#1B1E2E",
  class: "icon-dark",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1);
const _hoisted_5$6 = [
  _hoisted_2$9,
  _hoisted_3$7,
  _hoisted_4$6
];
function render$3(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$c, _hoisted_5$6);
}
const __unplugin_components_0 = { name: "cy-code-editor_x16", render: render$3 };
const _hoisted_1$b = { class: "w-full p-[24px] sm:min-w-[640px]" };
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "SpecPatternModal",
  props: {
    gql: null,
    show: { type: Boolean }
  },
  emits: ["close"],
  setup(__props, { emit: emits }) {
    const props = __props;
    gql`
fragment SpecPatternModal on CurrentProject {
  id
  ...SpecPatterns
  ...OpenConfigFileInIDE
}
`;
    const { t } = useI18n();
    return (_ctx, _cache) => {
      const _component_i_cy_code_editor_x16 = __unplugin_components_0;
      return openBlock(), createBlock(_sfc_main$I, {
        class: "transition-all transition duration-200",
        variant: "bare",
        title: unref(t)("components.specPatternModal.title"),
        "model-value": __props.show,
        "data-cy": "spec-pattern-modal",
        "help-link": "https://on.cypress.io/test-type-options",
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => emits("close"))
      }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1$b, [
            createVNode(_sfc_main$G, {
              gql: props.gql,
              class: "border-px rounded border-gray-100"
            }, null, 8, ["gql"])
          ]),
          createVNode(StandardModalFooter, { class: "flex gap-[16px] items-center" }, {
            default: withCtx(() => [
              createVNode(_sfc_main$H, {
                gql: props.gql
              }, {
                default: withCtx(({ onClick }) => [
                  createVNode(_sfc_main$v, {
                    size: "lg",
                    "data-cy": "open-config-file",
                    onClick
                  }, {
                    prefix: withCtx(() => [
                      createVNode(_component_i_cy_code_editor_x16, { class: "icon-dark-white" })
                    ]),
                    default: withCtx(() => [
                      createTextVNode(" " + toDisplayString(unref(t)("createSpec.updateSpecPattern")), 1)
                    ]),
                    _: 2
                  }, 1032, ["onClick"])
                ]),
                _: 1
              }, 8, ["gql"]),
              createVNode(_sfc_main$v, {
                variant: "outline",
                size: "lg",
                onClick: _cache[0] || (_cache[0] = ($event) => emits("close"))
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(t)("components.modal.dismiss")), 1)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["title", "model-value"]);
    };
  }
});
const statusClassesObject = {
  disabled: "bg-gray-50 text-gray-500",
  error: "bg-error-100 text-error-600",
  skipped: "bg-gray-100 text-gray-700",
  success: "bg-success-100 text-success-600",
  warning: "bg-warning-100 text-warning-600"
};
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "Badge",
  props: {
    label: null,
    status: null
  },
  setup(__props) {
    const statusClasses = statusClassesObject;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["rounded mx-1 text-sm px-1 inline-block whitespace-nowrap", unref(statusClasses)[__props.status || ""]])
      }, toDisplayString(__props.label), 3);
    };
  }
});
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "FlakyBadge",
  setup(__props) {
    const { t } = useI18n();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$c, {
        label: unref(t)("specPage.flaky.badgeLabel"),
        status: "warning",
        class: "font-bold uppercase",
        "data-cy": "flaky-badge"
      }, null, 8, ["label"]);
    };
  }
});
const _hoisted_1$a = {
  style: { "min-width": "16px", "min-height": "16px" },
  width: "17",
  height: "16",
  viewBox: "0 0 17 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$8 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M3.00708 13.5001H13.5C14.3284 13.5001 15 12.8286 15 12.0001V3.50536C15 2.66171 14.0197 2.19718 13.3668 2.73142L13.6834 3.11839L13.3668 2.73142L2.37382 11.7262C1.64649 12.3213 2.06732 13.5001 3.00708 13.5001Z",
  stroke: "black",
  "stroke-opacity": "0.2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1);
const _hoisted_3$6 = ["id"];
const _hoisted_4$5 = /* @__PURE__ */ createBaseVNode("rect", {
  fill: "white",
  x: "0.606445",
  y: "7.63281",
  width: "5",
  height: "7"
}, null, -1);
const _hoisted_5$5 = /* @__PURE__ */ createBaseVNode("path", { d: "M2.69045 12.1134L4.5 10.6328V13.0004H3.00708C2.5372 13.0004 2.32679 12.411 2.69045 12.1134Z" }, null, -1);
const _hoisted_6$5 = [
  _hoisted_4$5,
  _hoisted_5$5
];
const _hoisted_7$4 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M2.69045 12.1134L4.5 10.6328V13.0004H3.00708C2.5372 13.0004 2.32679 12.411 2.69045 12.1134Z",
  fill: "#DB7903"
}, null, -1);
const _hoisted_8$3 = ["mask"];
function render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$a, [
    _hoisted_2$8,
    createBaseVNode("mask", {
      id: _ctx.idMap["path-2-outside-1_17851_4400"],
      maskUnits: "userSpaceOnUse",
      x: "0.606445",
      y: "7.63281",
      width: "5",
      height: "7",
      fill: "black"
    }, _hoisted_6$5, 8, _hoisted_3$6),
    _hoisted_7$4,
    createBaseVNode("path", {
      d: "M4.5 10.6328H5.5V8.52249L3.86674 9.85887L4.5 10.6328ZM2.69045 12.1134L3.32371 12.8874L2.69045 12.1134ZM4.5 13.0004V14.0004H5.5V13.0004H4.5ZM3.86674 9.85887L2.05719 11.3395L3.32371 12.8874L5.13326 11.4068L3.86674 9.85887ZM3.00708 14.0004H4.5V12.0004H3.00708V14.0004ZM3.5 10.6328V13.0004H5.5V10.6328H3.5ZM2.05719 11.3395C0.966199 12.2322 1.59743 14.0004 3.00708 14.0004V12.0004C3.47696 12.0004 3.68738 12.5898 3.32371 12.8874L2.05719 11.3395Z",
      fill: "#BD5800",
      mask: "url(#" + _ctx.idMap["path-2-outside-1_17851_4400"] + ")"
    }, null, 8, _hoisted_8$3)
  ]);
}
const LowRateIcon = { name: "cy-rate-low_x16", render: render$2, data() {
  const __randId = () => Math.random().toString(36).substr(2, 10);
  const idMap = { "path-2-outside-1_17851_4400": "uicons-" + __randId() };
  return { idMap };
} };
const _hoisted_1$9 = {
  style: { "min-width": "16px", "min-height": "16px" },
  width: "17",
  height: "16",
  viewBox: "0 0 17 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$7 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M3.00708 13.5001H13.5C14.3284 13.5001 15 12.8286 15 12.0001V3.50536C15 2.66171 14.0197 2.19718 13.3668 2.73142L13.6834 3.11839L13.3668 2.73142L2.37382 11.7262C1.64649 12.3213 2.06732 13.5001 3.00708 13.5001Z",
  stroke: "black",
  "stroke-opacity": "0.2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1);
const _hoisted_3$5 = ["id"];
const _hoisted_4$4 = /* @__PURE__ */ createBaseVNode("rect", {
  fill: "white",
  x: "0.606445",
  y: "4.35938",
  width: "9",
  height: "10"
}, null, -1);
const _hoisted_5$4 = /* @__PURE__ */ createBaseVNode("path", { d: "M2.69045 12.1129L8.5 7.35938V12.9999H3.00708C2.5372 12.9999 2.32679 12.4105 2.69045 12.1129Z" }, null, -1);
const _hoisted_6$4 = [
  _hoisted_4$4,
  _hoisted_5$4
];
const _hoisted_7$3 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M2.69045 12.1129L8.5 7.35938V12.9999H3.00708C2.5372 12.9999 2.32679 12.4105 2.69045 12.1129Z",
  fill: "#BD5800"
}, null, -1);
const _hoisted_8$2 = ["mask"];
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$9, [
    _hoisted_2$7,
    createBaseVNode("mask", {
      id: _ctx.idMap["path-2-outside-1_17851_4763"],
      maskUnits: "userSpaceOnUse",
      x: "0.606445",
      y: "4.35938",
      width: "9",
      height: "10",
      fill: "black"
    }, _hoisted_6$4, 8, _hoisted_3$5),
    _hoisted_7$3,
    createBaseVNode("path", {
      d: "M8.5 7.35938H9.5V5.24905L7.86674 6.58544L8.5 7.35938ZM2.69045 12.1129L3.32371 12.8869H3.32371L2.69045 12.1129ZM8.5 12.9999V13.9999H9.5V12.9999H8.5ZM7.86674 6.58544L2.05719 11.339L3.32371 12.8869L9.13326 8.13331L7.86674 6.58544ZM3.00708 13.9999H8.5V11.9999H3.00708V13.9999ZM7.5 7.35938V12.9999H9.5V7.35938H7.5ZM2.05719 11.339C0.966209 12.2317 1.59742 13.9999 3.00708 13.9999V11.9999C3.47697 11.9999 3.68737 12.5893 3.32371 12.8869L2.05719 11.339Z",
      fill: "#963F00",
      mask: "url(#" + _ctx.idMap["path-2-outside-1_17851_4763"] + ")"
    }, null, 8, _hoisted_8$2)
  ]);
}
const MediumRateIcon = { name: "cy-rate-medium_x16", render: render$1, data() {
  const __randId = () => Math.random().toString(36).substr(2, 10);
  const idMap = { "path-2-outside-1_17851_4763": "uicons-" + __randId() };
  return { idMap };
} };
const _hoisted_1$8 = {
  style: { "min-width": "16px", "min-height": "16px" },
  width: "17",
  height: "16",
  viewBox: "0 0 17 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$6 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M13.3668 2.73142L13.3668 2.73142L2.37382 11.7262C1.64649 12.3213 2.06732 13.5001 3.00708 13.5001H13.5C14.3284 13.5001 15 12.8286 15 12.0001V3.50536C15 2.66171 14.0197 2.19718 13.3668 2.73142Z",
  fill: "#963F00",
  stroke: "#BD5800",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1);
const _hoisted_3$4 = [
  _hoisted_2$6
];
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$8, _hoisted_3$4);
}
const HighRateIcon = { name: "cy-rate-high_x16", render };
const _hoisted_1$7 = /* @__PURE__ */ createBaseVNode("div", {
  class: "bg-gray-50 rounded-[20px] h-[15px] w-full animate-pulse",
  "data-cy": "flaky-specsummary-loading-1"
}, null, -1);
const _hoisted_2$5 = /* @__PURE__ */ createBaseVNode("div", {
  class: "bg-gray-50 rounded-[20px] h-[15px] w-full animate-pulse",
  "data-cy": "flaky-specsummary-loading-2"
}, null, -1);
const _hoisted_3$3 = { class: "flex flex-row w-full text-sm justify-center items-center" };
const _hoisted_4$3 = {
  class: "ml-4 text-gray-800",
  "data-cy": "flaky-rate"
};
const _hoisted_5$3 = { class: "flex flex-row text-gray-700 text-sm items-center" };
const _hoisted_6$3 = { "data-cy": "flaky-runs" };
const _hoisted_7$2 = { "data-cy": "last-flaky" };
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "FlakySpecSummary",
  props: {
    specName: null,
    specExtension: null,
    severity: null,
    totalFlakyRuns: null,
    totalRuns: null,
    runsSinceLastFlake: null
  },
  setup(__props) {
    const props = __props;
    const { t } = useI18n();
    const SEVERITIES = {
      LOADING: {
        accentClass: "border-t-orange-400",
        textClass: null,
        label: null,
        icon: null
      },
      LOW: {
        accentClass: "border-t-orange-400",
        textClass: "text-orange-400",
        label: t("specPage.flaky.severityLow"),
        icon: LowRateIcon
      },
      MEDIUM: {
        accentClass: "border-t-orange-500",
        textClass: "text-orange-500",
        label: t("specPage.flaky.severityMedium"),
        icon: MediumRateIcon
      },
      HIGH: {
        accentClass: "border-t-orange-600",
        textClass: "text-orange-600",
        label: t("specPage.flaky.severityHigh"),
        icon: HighRateIcon
      }
    };
    const flakyRate = computed(() => {
      if (props.totalFlakyRuns <= 0 || props.totalRuns <= 0) {
        return 0;
      }
      const rawRate = props.totalFlakyRuns / props.totalRuns * 100;
      if (rawRate > 99 && rawRate < 100) {
        return 99;
      }
      return Math.ceil(rawRate);
    });
    const severity = computed(() => {
      var _a;
      return SEVERITIES[(_a = props.severity) == null ? void 0 : _a.toUpperCase()] || SEVERITIES.LOADING;
    });
    return (_ctx, _cache) => {
      var _a;
      const _component_i_cy_dot_solid_x4 = __unplugin_components_0$3;
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["border-t-[4px] min-w-[300px] w-full max-w-[400px] grid p-4 gap-3 grid-cols-1 justify-items-center", unref(severity).accentClass]),
        "data-cy": "flaky-spec-summary"
      }, [
        createVNode(_sfc_main$D, {
          "spec-file-name": __props.specName,
          "spec-file-extension": __props.specExtension
        }, null, 8, ["spec-file-name", "spec-file-extension"]),
        unref(severity) === SEVERITIES.LOADING ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          _hoisted_1$7,
          _hoisted_2$5
        ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
          createBaseVNode("div", _hoisted_3$3, [
            (openBlock(), createBlock(resolveDynamicComponent(unref(severity).icon))),
            createBaseVNode("span", {
              class: normalizeClass(["font-medium ml-2", unref(severity).textClass])
            }, toDisplayString((_a = unref(severity)) == null ? void 0 : _a.label), 3),
            createBaseVNode("span", _hoisted_4$3, toDisplayString(unref(t)("specPage.flaky.flakyRate", [unref(flakyRate)])), 1)
          ]),
          createBaseVNode("div", _hoisted_5$3, [
            createBaseVNode("span", _hoisted_6$3, toDisplayString(unref(t)("specPage.flaky.flakyRuns", { count: __props.totalFlakyRuns, flakyRuns: __props.totalFlakyRuns, totalRuns: __props.totalRuns })), 1),
            createVNode(_component_i_cy_dot_solid_x4, {
              width: "4",
              height: "4",
              class: "mx-2 icon-light-gray-200"
            }),
            createBaseVNode("span", _hoisted_7$2, toDisplayString(unref(t)("specPage.flaky.lastFlaky", { count: __props.runsSinceLastFlake, runsSinceLastFlake: __props.runsSinceLastFlake })), 1)
          ])
        ], 64))
      ], 2);
    };
  }
});
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "FlakyInformation",
  props: {
    projectGql: null,
    specGql: null,
    cloudSpecGql: null
  },
  setup(__props) {
    const props = __props;
    gql`
fragment FlakyInformationProject on CurrentProject {
  id
  projectId
  branch
}
`;
    gql`
fragment FlakyInformationSpec on Spec {
  id
  relative
  fileName
  specFileExtension
}
`;
    gql`
fragment FlakyInformationCloudSpec on RemoteFetchableCloudProjectSpecResult {
  id
  data {
    ... on CloudProjectSpec {
      id
      isConsideredFlakyForRunIds(cloudRunIds: $runIds)
      flakyStatusForRunIds(cloudRunIds: $runIds) {
        __typename
        ... on CloudProjectSpecFlakyStatus {
          dashboardUrl
          severity
          flakyRuns
          flakyRunsWindow
          lastFlaky
        }
      }
    }
  }
}
`;
    const cloudSpec = computed(() => {
      var _a, _b;
      return ((_b = (_a = props.cloudSpecGql) == null ? void 0 : _a.data) == null ? void 0 : _b.__typename) === "CloudProjectSpec" ? props.cloudSpecGql.data : null;
    });
    const isFlaky = computed(() => {
      var _a;
      return !!((_a = cloudSpec.value) == null ? void 0 : _a.isConsideredFlakyForRunIds);
    });
    const flakyStatus = computed(() => {
      var _a, _b, _c;
      return ((_b = (_a = cloudSpec.value) == null ? void 0 : _a.flakyStatusForRunIds) == null ? void 0 : _b.__typename) === "CloudProjectSpecFlakyStatus" ? (_c = cloudSpec.value) == null ? void 0 : _c.flakyStatusForRunIds : null;
    });
    const cloudUrl = computed(() => {
      var _a;
      return getUrlWithParams({
        url: ((_a = flakyStatus.value) == null ? void 0 : _a.dashboardUrl) || "#",
        params: {
          utm_medium: "Specs Flake Annotation Badge",
          utm_campaign: "Flaky"
        }
      });
    });
    return (_ctx, _cache) => {
      return unref(isFlaky) ? (openBlock(), createBlock(_sfc_main$C, {
        key: 0,
        placement: "top",
        "is-interactive": true,
        class: "h-[16px]",
        "hide-delay": 0,
        distance: 10,
        style: { "width": "fit-content" }
      }, {
        popper: withCtx(({ shown }) => {
          var _a, _b;
          return [
            shown && ((_a = props.projectGql) == null ? void 0 : _a.projectId) && ((_b = props.specGql) == null ? void 0 : _b.relative) ? (openBlock(), createBlock(_sfc_main$y, {
              key: 0,
              href: unref(cloudUrl),
              class: "hocus:no-underline"
            }, {
              default: withCtx(() => {
                var _a2, _b2, _c, _d, _e, _f;
                return [
                  createVNode(_sfc_main$a, {
                    "spec-name": ((_a2 = props.specGql) == null ? void 0 : _a2.fileName) ?? "",
                    "spec-extension": ((_b2 = props.specGql) == null ? void 0 : _b2.specFileExtension) ?? "",
                    severity: ((_c = unref(flakyStatus)) == null ? void 0 : _c.severity) ?? "NONE",
                    "total-runs": ((_d = unref(flakyStatus)) == null ? void 0 : _d.flakyRunsWindow) ?? 0,
                    "total-flaky-runs": ((_e = unref(flakyStatus)) == null ? void 0 : _e.flakyRuns) ?? 0,
                    "runs-since-last-flake": ((_f = unref(flakyStatus)) == null ? void 0 : _f.lastFlaky) ?? 0
                  }, null, 8, ["spec-name", "spec-extension", "severity", "total-runs", "total-flaky-runs", "runs-since-last-flake"])
                ];
              }),
              _: 1
            }, 8, ["href"])) : createCommentVNode("", true)
          ];
        }),
        default: withCtx(() => [
          createVNode(_sfc_main$y, {
            href: unref(cloudUrl),
            class: "hocus:no-underline"
          }, {
            default: withCtx(() => [
              createVNode(_sfc_main$b)
            ]),
            _: 1
          }, 8, ["href"])
        ]),
        _: 1
      })) : createCommentVNode("", true);
    };
  }
});
gql`
mutation CloudData_Refetch ($ids: [ID!]!) {
  loadRemoteFetchables(ids: $ids){
    id
    fetchingStatus
  }
}
`;
function useCloudSpecData(isProjectDisconnected, isOffline, mostRecentUpdate, displayedSpecs, allSpecs) {
  const refetchMutation = useMutation(CloudData_RefetchDocument);
  const isCloudSpecOlderThan = (item, comparisonDttm) => {
    var _a, _b;
    if (((_a = item.data) == null ? void 0 : _a.__typename) !== "CloudProjectSpec" && ((_b = item.data) == null ? void 0 : _b.__typename) !== "CloudProjectSpecNotFound") {
      return false;
    }
    if (!item.data.retrievedAt || !comparisonDttm) {
      return false;
    }
    return new Date(comparisonDttm).getTime() > new Date(item.data.retrievedAt).getTime();
  };
  const shouldRefetch = (item) => {
    if (isOffline.value) {
      return false;
    }
    if (item.fetchingStatus === "NOT_FETCHED" || item.fetchingStatus === void 0) {
      return true;
    }
    if (isCloudSpecOlderThan(item, mostRecentUpdate.value)) {
      return true;
    }
    return false;
  };
  const fetchDisplayedCloudData = async () => {
    const cloudSpecIdsToRefetch = displayedSpecs.value.map((spec) => spec == null ? void 0 : spec.cloudSpec).filter((cloudSpec) => Boolean(cloudSpec && shouldRefetch(cloudSpec))).map((cloudSpec) => cloudSpec.id) ?? [];
    if (!isProjectDisconnected.value && !refetchMutation.fetching.value && cloudSpecIdsToRefetch.length > 0) {
      await refetchMutation.executeMutation({ ids: cloudSpecIdsToRefetch });
    }
  };
  const refetchFailedCloudData = async () => {
    const latestRunsIds = allSpecs.map((s) => s == null ? void 0 : s.cloudSpec).filter((cloudSpec) => Boolean((cloudSpec == null ? void 0 : cloudSpec.fetchingStatus) === "ERRORED")).map((cloudSpec) => cloudSpec.id) ?? [];
    await refetchMutation.executeMutation({ ids: [...latestRunsIds] });
  };
  const displayedSpecIds = computed(() => displayedSpecs.value.map((v) => {
    var _a;
    return (_a = v == null ? void 0 : v.cloudSpec) == null ? void 0 : _a.id;
  }).filter((id) => !!id).join("|"));
  const debouncedDisplayedSpecIds = useDebounce(displayedSpecIds, 200);
  watch(
    [debouncedDisplayedSpecIds, isOffline, isProjectDisconnected, mostRecentUpdate],
    () => {
      fetchDisplayedCloudData();
    },
    { flush: "post" }
  );
  return {
    fetchDisplayedCloudData,
    refetchFailedCloudData
  };
}
const _hoisted_1$6 = ["data-cy"];
const _hoisted_2$4 = {
  class: "font-normal text-sm",
  "data-cy": "run-all-specs-text"
};
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "SpecsRunAllSpecs",
  props: {
    specNumber: null,
    directory: null
  },
  emits: ["runAllSpecs"],
  setup(__props, { emit: emits }) {
    const { t } = useI18n$1();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        class: "h-full space-x-2 ml-[24px] text-gray-600 group items-center whitespace-nowrap hocus:text-indigo-700",
        "data-cy": `run-all-specs-for-${__props.directory}`,
        onClick: _cache[0] || (_cache[0] = withModifiers(($event) => emits("runAllSpecs"), ["stop"]))
      }, [
        createVNode(unref(q), {
          size: "16",
          "stroke-color": "gray-300",
          "fill-color": "gray-50",
          "hocus-stroke-color": "indigo-500",
          "hocus-fill-color": "indigo-100",
          "interactive-colors-on-group": "",
          class: "align-text-bottom group-hover: inline-flex",
          "data-cy": "play-button"
        }),
        createBaseVNode("span", _hoisted_2$4, toDisplayString(unref(t)("specPage.runSelectedSpecs", __props.specNumber)), 1)
      ], 8, _hoisted_1$6);
    };
  }
});
const u = {
  default: {
    classes: {
      wrapper: "p-[4px] inline-flex gap-[8px] rounded border border-gray-100 bg-white text-gray-700 relative",
      button: "flex items-center px-[12px] h-[24px] leading-[20px] text-[14px] rounded font-medium whitespace-nowrap",
      active: "text-black relative z-20",
      activeStatic: "!text-white",
      inActive: "hover:bg-gray-50",
      activeMarker: "absolute bottom-[4px] top-[4px] rounded duration-300 ease-in-out",
      activeMarkerColor: "bg-indigo-500 filter hue-rotate-180 brightness-200 saturate-150 z-10",
      activeMarkerBlender: "z-30 bg-white mix-blend-difference pointer-events-none",
      activeMarkerStatic: "bg-indigo-500 absolute -z-10 rounded right-0 left-0 bottom-0 top-0",
      tag: ""
    },
    icon: {
      size: "16",
      // <wind-keep fillColor="transparent"/>
      fillColor: "transparent"
    }
  },
  "dark-small": {
    classes: {
      wrapper: "p-[4px] inline-flex gap-[4px] rounded border border-gray-900 bg-gray-1000 text-gray-400 relative",
      button: "flex items-center px-[8px] h-[20px] leading-[16px] text-[12px] rounded font-medium whitespace-nowrap",
      active: "text-white relative z-20",
      activeStatic: "",
      inActive: "hover:bg-gray-900",
      activeMarker: "absolute bottom-[4px] top-[4px] rounded duration-300 ease-in-out",
      activeMarkerColor: "z-10 bg-gray-800",
      activeMarkerBlender: "z-30 mix-blend-overlay pointer-events-none",
      activeMarkerStatic: "bg-gray-800 absolute -z-10 rounded right-0 left-0 bottom-0 top-0",
      tag: ""
    },
    icon: {
      size: "16",
      // <wind-keep fillColor="transparent"/>
      fillColor: "transparent"
    }
  },
  "dark-large": {
    classes: {
      wrapper: "p-[4px] inline-flex gap-[8px] rounded border border-gray-900 bg-gray-1000 text-gray-400 relative",
      button: "flex items-center px-[12px] h-[24px] leading-[20px] text-[14px] rounded font-medium whitespace-nowrap",
      active: "text-white relative z-20",
      activeStatic: "",
      inActive: "hover:bg-gray-900",
      activeMarker: "absolute bottom-[4px] top-[4px] rounded duration-300 ease-in-out",
      activeMarkerColor: "z-10 bg-gray-800",
      activeMarkerBlender: "z-30 mix-blend-overlay pointer-events-none",
      activeMarkerStatic: "bg-gray-800 absolute -z-10 rounded right-0 left-0 bottom-0 top-0",
      tag: ""
    },
    icon: {
      size: "16",
      // <wind-keep fillColor="transparent"/>
      fillColor: "transparent"
    }
  },
  "underline-small": {
    classes: {
      wrapper: "py-[4px] flex gap-[8px] border-b border-gray-100 text-gray-700 dark:text-white relative",
      button: "flex items-center px-[12px] h-[24px] leading-[20px] text-[14px] rounded font-medium whitespace-nowrap relative",
      active: "text-gray-900 dark:text-gray-400 z-20",
      activeStatic: "relative",
      inActive: "before:transition-color before:duration-300 before:absolute hover:before:bg-gray-200 before:bottom-[-6.5px] before:h-[4px] before:left-0 before:right-0 before:rounded-full",
      activeMarker: "absolute bottom-[-2.5px] h-[4px] rounded-full z-10 duration-300 ease-in-out",
      activeMarkerColor: "bg-indigo-500",
      activeMarkerBlender: "hidden",
      activeMarkerStatic: "absolute bg-indigo-500 rounded-full right-0 left-0 bottom-[-6.5px] h-[4px]",
      tag: "ml-[8px] px-[4px] bg-indigo-300/20 rounded text-gray-500 text-[12px] leading-[16px]"
    },
    icon: {
      size: "16",
      // <wind-keep fillColor="transparent"/>
      fillColor: "transparent"
    }
  },
  "underline-large": {
    classes: {
      wrapper: "py-[4px] flex gap-[8px] border-b border-gray-100 text-gray-700 dark:text-white relative",
      button: "flex items-center px-[12px] h-[32px] leading-[24px] text-[16px] rounded font-medium whitespace-nowrap relative",
      active: "text-gray-900 dark:text-gray-400 z-20",
      activeStatic: "relative",
      inActive: "before:transition-color before:duration-300 before:absolute hover:before:bg-gray-200 before:bottom-[-6.5px] before:h-[4px] before:left-0 before:right-0 before:rounded-full",
      activeMarker: "absolute bottom-[-2.5px] h-[4px] rounded-full z-10 duration-300 ease-in-out",
      activeMarkerColor: "bg-indigo-500",
      activeMarkerBlender: "hidden",
      activeMarkerStatic: "absolute bg-indigo-500 rounded-full right-0 left-0 bottom-[-6.5px] h-[4px]",
      tag: ""
    },
    icon: {
      size: "24",
      // <wind-keep fillColor="transparent"/>
      fillColor: "transparent"
    }
  }
}, L = /* @__PURE__ */ defineComponent({
  __name: "Tabs",
  props: {
    tabs: {},
    variant: { default: "default" }
  },
  emits: ["switch"],
  setup(I, { emit: b }) {
    var y;
    const r = I, v = ref(), o = ref((y = r.tabs.find((d) => d.active)) == null ? void 0 : y.id), n = ref();
    onMounted(() => {
      watch(
        o,
        (d) => {
          var e;
          const i = r.tabs.findIndex((t) => t.id === d);
          if (i > -1) {
            const t = (e = v.value) == null ? void 0 : e[i];
            t && (n.value = {
              ...n.value,
              left: `${t.offsetLeft}px`,
              width: `${t.offsetWidth}px`
            });
          }
        },
        { immediate: true }
      ), nextTick(() => {
        n.value = {
          ...n.value,
          transitionProperty: "left, width"
        };
      });
    });
    function m(d) {
      var t, k;
      const i = r.tabs.findIndex(($2) => $2.id === o.value) + d, e = i < 0 ? r.tabs.length - 1 : i >= r.tabs.length ? 0 : i;
      o.value = r.tabs[e].id, (k = (t = v.value) == null ? void 0 : t[e]) == null || k.focus(), b("switch", r.tabs[e]);
    }
    const a = computed(() => r.variant in u ? u[r.variant].classes : u.default.classes), h2 = computed(() => r.variant in u ? u[r.variant].icon : u.default.icon);
    return (d, i) => (openBlock(), createElementBlock("div", {
      role: "tablist",
      class: normalizeClass(a.value.wrapper)
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(d.tabs, (e) => (openBlock(), createBlock(resolveDynamicComponent(e.href ? "a" : "button"), {
        key: e.id,
        href: e.href,
        ref_for: true,
        ref_key: "$tab",
        ref: v,
        role: "tab",
        tabindex: e.id === o.value ? void 0 : -1,
        "aria-selected": e.id === o.value ? true : void 0,
        class: normalizeClass([
          a.value.button,
          {
            [a.value.activeStatic]: e.id === o.value && !n.value,
            [a.value.active]: e.id === o.value,
            [a.value.inActive]: e.id !== o.value
          }
        ]),
        onClick: (t) => {
          t.ctrlKey || t.metaKey || (t.preventDefault(), o.value = e.id, b("switch", e));
        },
        onKeyup: [
          i[0] || (i[0] = withKeys((t) => m(-1), ["left"])),
          i[1] || (i[1] = withKeys((t) => m(1), ["right"]))
        ]
      }, {
        default: withCtx(() => [
          e.iconBefore ?? e.icon ? (openBlock(), createBlock(resolveDynamicComponent(e.iconBefore ?? e.icon), mergeProps({ key: 0 }, h2.value, { class: "mr-[8px]" }), null, 16)) : createCommentVNode("", true),
          createTextVNode(" " + toDisplayString(e.label) + " ", 1),
          e.tag ? (openBlock(), createElementBlock("div", {
            key: 1,
            class: normalizeClass(a.value.tag)
          }, toDisplayString(e.tag), 3)) : createCommentVNode("", true),
          e.iconAfter ? (openBlock(), createBlock(resolveDynamicComponent(e.iconAfter), mergeProps({ key: 2 }, h2.value, { class: "ml-[8px]" }), null, 16)) : createCommentVNode("", true),
          e.id === o.value && !n.value ? (openBlock(), createElementBlock("div", {
            key: 3,
            class: normalizeClass(a.value.activeMarkerStatic)
          }, null, 2)) : createCommentVNode("", true)
        ]),
        _: 2
      }, 1064, ["href", "tabindex", "aria-selected", "class", "onClick"]))), 128)),
      n.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
        createBaseVNode("div", {
          class: normalizeClass([a.value.activeMarker, a.value.activeMarkerColor]),
          style: normalizeStyle(n.value)
        }, null, 6),
        createBaseVNode("div", {
          class: normalizeClass([a.value.activeMarker, a.value.activeMarkerBlender]),
          style: normalizeStyle(n.value)
        }, null, 6)
      ], 64)) : createCommentVNode("", true)
    ], 2));
  }
});
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "TestingTypeSwitcher",
  props: {
    viewedTestingType: null,
    isE2eConfigured: { type: [Boolean, null] },
    isCtConfigured: { type: [Boolean, null] }
  },
  emits: ["selectTestingType"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const { width } = useWindowSize();
    const { t } = useI18n();
    const shouldUseLongText = computed(() => width.value > 1140);
    const StyledQuestionMarkIcon = (props2, ...args) => {
      return h(Q, { ...props2, "data-cy": "unconfigured-icon" }, ...args);
    };
    const key = computed(() => `${props.isE2eConfigured}-${props.isCtConfigured}-${shouldUseLongText.value}`);
    const tabs = computed(() => {
      return [
        {
          id: "e2e",
          iconBefore: wo,
          label: shouldUseLongText.value ? t("specPage.e2eSpecsHeader") : t("specPage.e2eSpecsHeaderShort"),
          iconAfter: props.isE2eConfigured === false ? StyledQuestionMarkIcon : void 0,
          active: props.viewedTestingType === "e2e"
        },
        {
          id: "component",
          iconBefore: Co,
          label: shouldUseLongText.value ? t("specPage.componentSpecsHeader") : t("specPage.componentSpecsHeaderShort"),
          iconAfter: props.isCtConfigured === false ? StyledQuestionMarkIcon : void 0,
          active: props.viewedTestingType === "component"
        }
      ];
    });
    function handleSwitch(tab) {
      emits("selectTestingType", tab.id);
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(L), {
        key: unref(key),
        tabs: unref(tabs),
        "data-cy": "testing-type-switch",
        class: "testing-type-switcher",
        onSwitch: handleSwitch
      }, null, 8, ["tabs"]);
    };
  }
});
gql`
query UseTestingType_TestingType {
  currentProject {
    id
    currentTestingType
    isCTConfigured
    isE2EConfigured
  }
}
`;
gql`
mutation UseTestingType_ActivateTestingType($testingType: TestingTypeEnum!) {
  switchTestingTypeAndRelaunch(testingType: $testingType)
}
`;
function useTestingType() {
  const query = useQuery({ query: UseTestingType_TestingTypeDocument });
  const activateTestingTypeMutation = useMutation(UseTestingType_ActivateTestingTypeDocument);
  const viewedTestingType = ref(null);
  const activeTestingType = computed(() => {
    var _a, _b;
    return (_b = (_a = query.data.value) == null ? void 0 : _a.currentProject) == null ? void 0 : _b.currentTestingType;
  });
  const isCTConfigured = computed(() => {
    var _a, _b;
    return (_b = (_a = query.data.value) == null ? void 0 : _a.currentProject) == null ? void 0 : _b.isCTConfigured;
  });
  const isE2EConfigured = computed(() => {
    var _a, _b;
    return (_b = (_a = query.data.value) == null ? void 0 : _a.currentProject) == null ? void 0 : _b.isE2EConfigured;
  });
  const showTestingTypePromo = computed(() => {
    if (isE2EConfigured.value === void 0 && isCTConfigured.value === void 0) {
      return false;
    }
    return viewedTestingType.value === "e2e" && isE2EConfigured.value === false || viewedTestingType.value === "component" && isCTConfigured.value === false;
  });
  watchEffect(() => {
    if (!!activeTestingType.value && !viewedTestingType.value) {
      viewedTestingType.value = activeTestingType.value;
    }
  });
  async function activateTestingType(testingType) {
    return await activateTestingTypeMutation.executeMutation({ testingType });
  }
  async function viewTestingType(testingType) {
    const switchingBackToActiveMode = testingType === activeTestingType.value;
    const targetModeIsConfigured = testingType === "e2e" && isE2EConfigured.value || testingType === "component" && isCTConfigured.value;
    if (!switchingBackToActiveMode && targetModeIsConfigured) {
      await activateTestingType(testingType);
    } else {
      viewedTestingType.value = testingType;
    }
  }
  return {
    activeTestingType,
    viewedTestingType,
    isCTConfigured,
    isE2EConfigured,
    showTestingTypePromo,
    viewTestingType,
    activateTestingType
  };
}
const _hoisted_1$5 = { class: "flex" };
const _hoisted_2$3 = { class: "border-indigo-600 border-l-[1px] -my-[8px] py-[8px] pl-[16px] ml-[8px]" };
const _hoisted_3$2 = { class: "gap-[24px]" };
const _hoisted_4$2 = { class: "py-[16px] px-[20px] gap-[16px] flex flex-col font-normal text-gray-700" };
const _hoisted_5$2 = { class: "text-jade-400" };
const _hoisted_6$2 = { class: "text-jade-400" };
const _hoisted_7$1 = { class: "text-jade-400" };
const _hoisted_8$1 = { class: "text-jade-400" };
const _hoisted_9 = {
  key: 0,
  class: "border-gray-50 border-t-[1px] pt-[16px]"
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "TestingTypePromo",
  props: {
    testingType: null
  },
  emits: ["activateTestingType"],
  setup(__props, { emit: emits }) {
    const props = __props;
    gql`
mutation TestingTypePromo_RecordEvent($campaign: String!, $medium: String!, $messageId: String!) {
  recordEvent(includeMachineId: true, campaign: $campaign, medium: $medium, messageId: $messageId)
}
`;
    const CT_MEDIUM = "CT Preview";
    const E2E_MEDIUM = "E2E Preview";
    const { t } = useI18n();
    const recordEventMutation = useMutation(TestingTypePromo_RecordEventDocument);
    const promoInstanceId = nanoid();
    const campaign = computed(() => {
      return props.testingType === "e2e" ? "Specs Switcher E2E" : "Specs Switcher Component";
    });
    const giveFeedbackLink = computed(() => {
      return getUrlWithParams({
        url: "https://on.cypress.io/component-survey-q2-23",
        params: {
          utm_campaign: "Give feedback",
          utm_medium: CT_MEDIUM
        }
      });
    });
    const guideLink = computed(() => {
      if (props.testingType === "e2e") {
        return getUrlWithParams({
          url: "https://on.cypress.io/writing-first-test",
          params: {
            utm_campaign: "Read our guide",
            utm_medium: E2E_MEDIUM
          }
        });
      }
      return getUrlWithParams({
        url: "https://on.cypress.io/component",
        params: {
          utm_campaign: "Read our guide",
          utm_medium: CT_MEDIUM
        }
      });
    });
    function getFrameworkLink(framework) {
      let url;
      switch (framework) {
        case "Angular":
          url = "https://on.cypress.io/angular";
          break;
        case "React":
          url = "https://on.cypress.io/react";
          break;
        case "Vue":
          url = "https://on.cypress.io/vue";
          break;
        default:
          url = "https://on.cypress.io/frameworks";
          break;
      }
      return getUrlWithParams({
        url,
        params: {
          utm_campaign: framework,
          utm_medium: CT_MEDIUM
        }
      });
    }
    function recordEvent(testingType, link, framework) {
      let campaign2;
      if (link === "guide") {
        campaign2 = "Read our guide";
      } else if (link === "feedback") {
        campaign2 = "Give feedback";
      } else if (link === "activate") {
        campaign2 = "Quick setup";
      } else if (link === "framework") {
        campaign2 = framework || "N/A";
      } else {
        campaign2 = "N/A";
      }
      const medium = testingType === "e2e" ? E2E_MEDIUM : CT_MEDIUM;
      recordEventMutation.executeMutation({
        messageId: promoInstanceId,
        campaign: campaign2,
        medium
      });
    }
    function activateTestingType(testingType) {
      if (!testingType) {
        throw new Error("No testing type provided");
      }
      recordEvent(testingType, "activate");
      emits("activateTestingType", testingType);
    }
    return (_ctx, _cache) => {
      const _component_i18n_t = resolveComponent("i18n-t");
      return openBlock(), createElementBlock("div", _hoisted_1$5, [
        createVNode(_sfc_main$L, {
          campaign: unref(campaign),
          medium: "Not set up",
          "instance-id": unref(promoInstanceId),
          class: "m-auto mt-[32px]"
        }, {
          header: withCtx(() => [
            createVNode(_sfc_main$J, {
              title: unref(t)(__props.testingType === "e2e" ? "specPage.testingTypePromo.e2e.header.title" : "specPage.testingTypePromo.ct.header.title")
            }, {
              description: withCtx(() => [
                createVNode(_component_i18n_t, {
                  tag: "p",
                  keypath: __props.testingType === "e2e" ? "specPage.testingTypePromo.e2e.header.description" : "specPage.testingTypePromo.ct.header.description"
                }, {
                  default: withCtx(() => [
                    createVNode(_sfc_main$y, {
                      "data-cy": "testing-type-promo-guide-link",
                      href: unref(guideLink),
                      onClick: _cache[0] || (_cache[0] = ($event) => recordEvent(__props.testingType, "guide"))
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(t)(__props.testingType === "e2e" ? "specPage.testingTypePromo.e2e.header.link" : "specPage.testingTypePromo.ct.header.link")), 1)
                      ]),
                      _: 1
                    }, 8, ["href"])
                  ]),
                  _: 1
                }, 8, ["keypath"])
              ]),
              control: withCtx(() => [
                createVNode(unref(j), {
                  class: "gap-[8px]",
                  "data-cy": "testing-type-setup-button",
                  onClick: _cache[1] || (_cache[1] = ($event) => activateTestingType(__props.testingType))
                }, {
                  default: withCtx(() => [
                    (openBlock(), createBlock(resolveDynamicComponent(__props.testingType === "component" ? unref(Co) : unref(wo)))),
                    createBaseVNode("div", _hoisted_2$3, toDisplayString(unref(t)(__props.testingType === "e2e" ? "specPage.testingTypePromo.e2e.header.control" : "specPage.testingTypePromo.ct.header.control")), 1),
                    createVNode(unref(x1))
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title"])
          ]),
          cards: withCtx(() => [
            createVNode(_sfc_main$K, {
              title: unref(t)(__props.testingType === "e2e" ? "specPage.testingTypePromo.e2e.body.title" : "specPage.testingTypePromo.ct.body.title"),
              body: unref(t)(__props.testingType === "e2e" ? "specPage.testingTypePromo.e2e.body.description" : "specPage.testingTypePromo.ct.body.description"),
              class: ""
            }, {
              content: withCtx(() => [
                createBaseVNode("div", _hoisted_3$2, [
                  createBaseVNode("ol", _hoisted_4$2, [
                    __props.testingType === "e2e" ? (openBlock(), createBlock(_component_i18n_t, {
                      key: 0,
                      tag: "li",
                      class: "list-disc",
                      keypath: "specPage.testingTypePromo.e2e.body.listItem1"
                    }, {
                      default: withCtx(() => [
                        createBaseVNode("code", _hoisted_5$2, toDisplayString(unref(t)("specPage.testingTypePromo.e2e.body.listItem1Command")), 1)
                      ]),
                      _: 1
                    })) : (openBlock(), createBlock(_component_i18n_t, {
                      key: 1,
                      tag: "li",
                      class: "list-disc",
                      keypath: "specPage.testingTypePromo.ct.body.listItem1"
                    }, {
                      default: withCtx(() => [
                        createBaseVNode("code", _hoisted_6$2, toDisplayString(unref(t)("specPage.testingTypePromo.ct.body.listItem1Command")), 1)
                      ]),
                      _: 1
                    })),
                    __props.testingType === "e2e" ? (openBlock(), createBlock(_component_i18n_t, {
                      key: 2,
                      tag: "li",
                      class: "list-disc",
                      keypath: "specPage.testingTypePromo.e2e.body.listItem2"
                    }, {
                      default: withCtx(() => [
                        createBaseVNode("code", _hoisted_7$1, toDisplayString(unref(t)("specPage.testingTypePromo.e2e.body.listItem2Command")), 1)
                      ]),
                      _: 1
                    })) : (openBlock(), createBlock(_component_i18n_t, {
                      key: 3,
                      tag: "li",
                      class: "list-disc",
                      keypath: "specPage.testingTypePromo.ct.body.listItem2"
                    })),
                    __props.testingType === "e2e" ? (openBlock(), createBlock(_component_i18n_t, {
                      key: 4,
                      tag: "li",
                      class: "list-disc",
                      keypath: "specPage.testingTypePromo.e2e.body.listItem3"
                    }, {
                      default: withCtx(() => [
                        createBaseVNode("code", _hoisted_8$1, toDisplayString(unref(t)("specPage.testingTypePromo.e2e.body.listItem3Command")), 1)
                      ]),
                      _: 1
                    })) : (openBlock(), createBlock(_component_i18n_t, {
                      key: 5,
                      tag: "li",
                      class: "list-disc",
                      keypath: "specPage.testingTypePromo.ct.body.listItem3"
                    }, {
                      default: withCtx(() => [
                        createBaseVNode("span", null, [
                          (openBlock(), createBlock(resolveDynamicComponent(unref(FrameworkBundlerLogos).angular), { class: "h-[16px] w-[16px] inline" })),
                          createVNode(_sfc_main$y, {
                            "data-cy": "testing-type-promo-framework-link",
                            href: getFrameworkLink("Angular"),
                            onClick: _cache[2] || (_cache[2] = ($event) => recordEvent("component", "framework", "Angular"))
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Angular ")
                            ]),
                            _: 1
                          }, 8, ["href"])
                        ]),
                        createBaseVNode("span", null, [
                          (openBlock(), createBlock(resolveDynamicComponent(unref(FrameworkBundlerLogos).react), { class: "h-[16px] w-[16px] inline" })),
                          createVNode(_sfc_main$y, {
                            "data-cy": "testing-type-promo-framework-link",
                            href: getFrameworkLink("React"),
                            onClick: _cache[3] || (_cache[3] = ($event) => recordEvent("component", "framework", "React"))
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" React ")
                            ]),
                            _: 1
                          }, 8, ["href"])
                        ]),
                        createBaseVNode("span", null, [
                          (openBlock(), createBlock(resolveDynamicComponent(unref(FrameworkBundlerLogos).vue3), { class: "h-[16px] w-[16px] inline" })),
                          createVNode(_sfc_main$y, {
                            "data-cy": "testing-type-promo-framework-link",
                            href: getFrameworkLink("Vue"),
                            onClick: _cache[4] || (_cache[4] = ($event) => recordEvent("component", "framework", "Vue"))
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Vue ")
                            ]),
                            _: 1
                          }, 8, ["href"])
                        ]),
                        createVNode(_sfc_main$y, {
                          "data-cy": "testing-type-promo-framework-link",
                          href: getFrameworkLink("more"),
                          onClick: _cache[5] || (_cache[5] = ($event) => recordEvent("component", "framework", "more"))
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref(t)("specPage.testingTypePromo.ct.body.listItem3Link")), 1)
                          ]),
                          _: 1
                        }, 8, ["href"])
                      ]),
                      _: 1
                    }))
                  ]),
                  __props.testingType === "component" ? (openBlock(), createElementBlock("div", _hoisted_9, [
                    createVNode(_sfc_main$y, {
                      "data-cy": "testing-type-promo-feedback-link",
                      href: unref(giveFeedbackLink),
                      onClick: _cache[6] || (_cache[6] = ($event) => recordEvent(__props.testingType, "feedback"))
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(t)("specPage.testingTypePromo.ct.body.link")), 1)
                      ]),
                      _: 1
                    }, 8, ["href"])
                  ])) : createCommentVNode("", true)
                ])
              ]),
              _: 1
            }, 8, ["title", "body"])
          ]),
          _: 1
        }, 8, ["campaign", "instance-id"])
      ]);
    };
  }
});
const _hoisted_1$4 = { class: "p-[24px] h-full grid grid-rows-[auto,minmax(0,1fr)]" };
const _hoisted_2$2 = {
  class: "flex items-center mr-[12px]",
  "data-cy": "specs-testing-type-header"
};
const _hoisted_3$1 = { class: "flex items-center justify-between truncate" };
const _hoisted_4$1 = { class: "flex items-center justify-end whitespace-nowrap" };
const _hoisted_5$1 = { class: "hidden items-center justify-end truncate md:flex" };
const _hoisted_6$1 = { class: "ml-2 inline-block" };
const _hoisted_7 = { class: "h-full grid justify-items-end items-center relative" };
const _hoisted_8 = {
  key: 1,
  class: "bg-gray-50 rounded-[20px] h-[24px] w-full animate-pulse",
  "data-cy": "run-status-dots-loading"
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "SpecsList",
  props: {
    gql: null,
    mostRecentUpdate: { default: null }
  },
  emits: ["showCreateSpecModal"],
  setup(__props, { emit }) {
    var _a, _b, _c, _d;
    const props = __props;
    const { openLoginConnectModal } = useUserProjectStatusStore();
    const route = useRoute();
    const { t } = useI18n();
    const testingType = useTestingType();
    const isOnline = useOnline();
    const isOffline = ref(false);
    watch(isOnline, (newIsOnlineValue) => isOffline.value = !newIsOnlineValue, { immediate: true });
    const tableGridColumns = "grid-cols-[1fr,135px,130px] md:grid-cols-[1fr,135px,130px,130px] lg:grid-cols-[1fr,160px,160px,180px]";
    const projectConnectionStatus = computed(() => {
      var _a2, _b2, _c2, _d2, _e, _f, _g, _h;
      if (!props.gql.cloudViewer)
        return "LOGGED_OUT";
      if (!((_b2 = (_a2 = props.gql.currentProject) == null ? void 0 : _a2.cloudProject) == null ? void 0 : _b2.__typename))
        return "NOT_CONNECTED";
      if (((_d2 = (_c2 = props.gql.currentProject) == null ? void 0 : _c2.cloudProject) == null ? void 0 : _d2.__typename) === "CloudProjectNotFound")
        return "NOT_FOUND";
      if (((_f = (_e = props.gql.currentProject) == null ? void 0 : _e.cloudProject) == null ? void 0 : _f.__typename) === "CloudProjectUnauthorized") {
        if ((_h = (_g = props.gql.currentProject) == null ? void 0 : _g.cloudProject) == null ? void 0 : _h.hasRequestedAccess) {
          return "ACCESS_REQUESTED";
        }
        return "UNAUTHORIZED";
      }
      return "CONNECTED";
    });
    const cloudProjectType = computed(() => {
      var _a2, _b2;
      return (_b2 = (_a2 = props.gql.currentProject) == null ? void 0 : _a2.cloudProject) == null ? void 0 : _b2.__typename;
    });
    const hasRequestedAccess = computed(() => {
      return projectConnectionStatus.value === "ACCESS_REQUESTED";
    });
    const isGitAvailable = computed(() => {
      var _a2;
      return !(((_a2 = props.gql.currentProject) == null ? void 0 : _a2.specs.some((s) => {
        var _a3;
        return ((_a3 = s.gitInfo) == null ? void 0 : _a3.statusType) === "noGitInfo";
      })) ?? false);
    });
    const hasCloudErrors = computed(() => {
      var _a2;
      return ((_a2 = props.gql.currentProject) == null ? void 0 : _a2.specs.some((s) => {
        var _a3;
        return ((_a3 = s.cloudSpec) == null ? void 0 : _a3.fetchingStatus) === "ERRORED";
      })) ?? false;
    });
    const shouldShowFetchError = ref(false);
    watch(hasCloudErrors, (wasErrorFound) => shouldShowFetchError.value = wasErrorFound, { immediate: true });
    gql`
subscription SpecsList_GitInfoUpdated {
  gitInfoChange {
    id
    absolute
    gitInfo {
      ...SpecListRow
    }
  }
}
`;
    gql`
fragment SpecsList on Spec {
  id
  name
  specType
  absolute
  baseName
  fileName
  specFileExtension
  fileExtension
  relative
  gitInfo {
    ...SpecListRow
  }
  cloudSpec(name: "cloudSpec") @include(if: $hasRunIds) {
    id
    fetchingStatus
    ...AverageDuration
    ...FlakyInformationCloudSpec
    ...RunStatusDots
  }
  ...FlakyInformationSpec
}
`;
    gql`
fragment Specs_SpecsList on Query {
  currentProject {
    id
    projectRoot
    cloudProject {
      __typename
      ... on CloudProject {
        id
      }
    }
    specs {
      id
      ...SpecsList
    }
    config
    savedState
    ...SpecPatternModal
    ...FlakyInformationProject
  }
  ...SpecHeaderCloudDataTooltip
  ...SpecsListBanners
}
`;
    useSubscription({ query: SpecsList_GitInfoUpdatedDocument });
    const showSpecPatternModal = ref(false);
    const isSpecNotFound = ref(!!((_a = route.params) == null ? void 0 : _a.unrunnable));
    const cachedSpecs = useCachedSpecs(
      computed(() => {
        var _a2;
        return ((_a2 = props.gql.currentProject) == null ? void 0 : _a2.specs) ?? [];
      })
    );
    const { debouncedSpecFilterModel, specFilterModel } = useSpecFilter((_c = (_b = props.gql.currentProject) == null ? void 0 : _b.savedState) == null ? void 0 : _c.specFilter);
    const specsListInputRef = ref();
    const specsListInputRefFn = () => specsListInputRef;
    function handleClear() {
      var _a2;
      specFilterModel.value = "";
      (_a2 = specsListInputRef.value) == null ? void 0 : _a2.focus();
    }
    const specs = computed(() => {
      const fuzzyFoundSpecs = cachedSpecs.value.map(makeFuzzyFoundSpec);
      if (!(debouncedSpecFilterModel == null ? void 0 : debouncedSpecFilterModel.value)) {
        return fuzzyFoundSpecs;
      }
      return fuzzySortSpecs(fuzzyFoundSpecs, debouncedSpecFilterModel.value);
    });
    const treeExpansionCache = ref(/* @__PURE__ */ new Map());
    watch([() => specFilterModel.value, () => specs.value.length], () => treeExpansionCache.value.clear());
    const collapsible = computed(() => {
      return useCollapsibleTree(
        buildSpecTree(specs.value),
        { dropRoot: true, cache: treeExpansionCache.value }
      );
    });
    const treeSpecList = computed(() => collapsible.value.tree.filter((item) => !item.hidden.value));
    const { containerProps, list, wrapperProps, scrollTo } = useVirtualList(treeSpecList, { itemHeight: 40, overscan: 10 });
    const scrollbarOffset = ref(0);
    useResizeObserver(containerProps.ref, (entries) => {
      const specListContainer = entries == null ? void 0 : entries[0];
      const containerElement = specListContainer == null ? void 0 : specListContainer.target;
      if (containerElement) {
        const displayedScrollbarWidth = containerElement.offsetWidth - containerElement.clientWidth;
        scrollbarOffset.value = displayedScrollbarWidth;
      } else {
        scrollbarOffset.value = 0;
      }
    });
    watch(() => debouncedSpecFilterModel == null ? void 0 : debouncedSpecFilterModel.value, () => {
      scrollTo(0);
    });
    function getIdIfDirectory(row) {
      if (row.data.isLeaf && row.data) {
        return void 0;
      }
      return `speclist-${row.data.data.relative.replace(row.data.data.baseName, "")}`;
    }
    const isProjectDisconnected = computed(() => {
      var _a2;
      return ((_a2 = props.gql.cloudViewer) == null ? void 0 : _a2.id) === void 0 || cloudProjectType.value !== "CloudProject";
    });
    const displayedSpecs = computed(() => list.value.map((v) => v.data.data));
    const mostRecentUpdateRef = toRef(props, "mostRecentUpdate");
    const { refetchFailedCloudData } = useCloudSpecData(
      isProjectDisconnected,
      isOffline,
      mostRecentUpdateRef,
      displayedSpecs,
      ((_d = props.gql.currentProject) == null ? void 0 : _d.specs) || []
    );
    const runAllSpecsStore = useRunAllSpecsStore();
    watch(collapsible, () => {
      runAllSpecsStore.setRunAllSpecsData(collapsible.value.tree);
    }, { immediate: true });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$4, [
        createBaseVNode("div", null, [
          createVNode(_sfc_main$o, {
            gql: props.gql,
            "is-spec-not-found": isSpecNotFound.value,
            "is-offline": isOffline.value,
            "is-fetch-error": shouldShowFetchError.value,
            "is-project-not-found": unref(cloudProjectType) === "CloudProjectNotFound",
            "is-project-unauthorized": unref(cloudProjectType) === "CloudProjectUnauthorized",
            "has-requested-access": unref(hasRequestedAccess),
            onRefetchFailedCloudData: unref(refetchFailedCloudData)
          }, null, 8, ["gql", "is-spec-not-found", "is-offline", "is-fetch-error", "is-project-not-found", "is-project-unauthorized", "has-requested-access", "onRefetchFailedCloudData"]),
          createVNode(SpecsListHeader, {
            modelValue: unref(specFilterModel),
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(specFilterModel) ? specFilterModel.value = $event : null),
            "specs-list-input-ref-fn": specsListInputRefFn,
            class: "pb-[32px]",
            "result-count": unref(specs).length,
            "spec-count": unref(cachedSpecs).length,
            onShowCreateSpecModal: _cache[1] || (_cache[1] = ($event) => emit("showCreateSpecModal")),
            onShowSpecPatternModal: _cache[2] || (_cache[2] = ($event) => showSpecPatternModal.value = true)
          }, null, 8, ["modelValue", "result-count", "spec-count"]),
          props.gql.currentProject ? (openBlock(), createBlock(_sfc_main$d, {
            key: 0,
            show: showSpecPatternModal.value,
            gql: props.gql.currentProject,
            onClose: _cache[3] || (_cache[3] = ($event) => showSpecPatternModal.value = false)
          }, null, 8, ["show", "gql"])) : createCommentVNode("", true),
          unref(specs).length ? (openBlock(), createElementBlock("div", {
            key: 1,
            class: normalizeClass(["mb-4 grid children:font-medium children:text-gray-800", tableGridColumns]),
            style: normalizeStyle(`padding-right: ${scrollbarOffset.value + 20}px`)
          }, [
            createBaseVNode("div", _hoisted_2$2, [
              createBaseVNode("span", null, [
                createVNode(_sfc_main$7, {
                  "viewed-testing-type": unref(testingType).viewedTestingType.value,
                  "is-ct-configured": unref(testingType).isCTConfigured.value,
                  "is-e2e-configured": unref(testingType).isE2EConfigured.value,
                  onSelectTestingType: unref(testingType).viewTestingType
                }, null, 8, ["viewed-testing-type", "is-ct-configured", "is-e2e-configured", "onSelectTestingType"])
              ]),
              unref(runAllSpecsStore).isRunAllSpecsAllowed && !unref(testingType).showTestingTypePromo.value ? (openBlock(), createBlock(_sfc_main$8, {
                key: 0,
                "spec-number": unref(runAllSpecsStore).allSpecsRef.length,
                directory: "all",
                onRunAllSpecs: unref(runAllSpecsStore).runAllSpecs
              }, null, 8, ["spec-number", "onRunAllSpecs"])) : createCommentVNode("", true)
            ]),
            createBaseVNode("div", _hoisted_3$1, [
              createVNode(_sfc_main$n, { "is-git-available": unref(isGitAvailable) }, null, 8, ["is-git-available"])
            ]),
            createBaseVNode("div", _hoisted_4$1, [
              createVNode(_sfc_main$m, {
                gql: props.gql,
                mode: "LATEST_RUNS",
                "data-cy": "latest-runs-header",
                onShowLoginConnect: _cache[4] || (_cache[4] = ($event) => unref(openLoginConnectModal)({ utmMedium: "Specs Latest Runs Tooltip" }))
              }, null, 8, ["gql"])
            ]),
            createBaseVNode("div", _hoisted_5$1, [
              createVNode(_sfc_main$m, {
                gql: props.gql,
                mode: "AVG_DURATION",
                "data-cy": "average-duration-header",
                onShowLoginConnect: _cache[5] || (_cache[5] = ($event) => unref(openLoginConnectModal)({ utmMedium: "Specs Average Duration Tooltip" }))
              }, null, 8, ["gql"])
            ])
          ], 4)) : createCommentVNode("", true)
        ]),
        unref(testingType).showTestingTypePromo.value ? (openBlock(), createBlock(_sfc_main$6, {
          key: 0,
          class: "p-[32px] overflow-y-auto",
          "testing-type": unref(testingType).viewedTestingType.value,
          onActivateTestingType: unref(testingType).activateTestingType
        }, null, 8, ["testing-type", "onActivateTestingType"])) : (openBlock(), createElementBlock("div", mergeProps({
          key: 1,
          class: ["pb-[32px]", unref(specs).length ? "grid" : "hidden"],
          "data-cy": "spec-list-container"
        }, unref(containerProps)), [
          createBaseVNode("div", mergeProps(unref(wrapperProps), { class: "divide-y border-gray-50 border-y children:border-gray-50 children:h-[40px]" }), [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(list), (row) => {
              var _a2, _b2;
              return openBlock(), createBlock(_sfc_main$g, {
                id: getIdIfDirectory(row),
                key: row.index,
                "data-cy": row.data.isLeaf ? "spec-list-file" : "spec-list-directory",
                "data-cy-row": (_a2 = row.data.data) == null ? void 0 : _a2.baseName,
                "is-leaf": row.data.isLeaf,
                "is-project-connected": unref(projectConnectionStatus) === "CONNECTED",
                "grid-columns": row.data.isLeaf ? tableGridColumns : "grid-cols-[1fr]",
                route: { path: "/specs/runner", query: { file: unref(posixify)(((_b2 = row.data.data) == null ? void 0 : _b2.relative) || "") } },
                onToggleRow: row.data.toggle
              }, {
                file: withCtx(() => {
                  var _a3, _b3;
                  return [
                    row.data.isLeaf ? (openBlock(), createBlock(_sfc_main$e, {
                      key: 0,
                      "file-name": ((_a3 = row.data.data) == null ? void 0 : _a3.fileName) || row.data.name,
                      extension: ((_b3 = row.data.data) == null ? void 0 : _b3.specFileExtension) || "",
                      indexes: row.data.highlightIndexes,
                      style: normalizeStyle({ paddingLeft: `${(row.data.depth - 2) * 10 + 22}px` })
                    }, {
                      default: withCtx(() => {
                        var _a4;
                        return [
                          createBaseVNode("span", _hoisted_6$1, [
                            createVNode(_sfc_main$9, {
                              "project-gql": props.gql.currentProject,
                              "spec-gql": row.data.data,
                              "cloud-spec-gql": (_a4 = row.data.data) == null ? void 0 : _a4.cloudSpec
                            }, null, 8, ["project-gql", "spec-gql", "cloud-spec-gql"])
                          ])
                        ];
                      }),
                      _: 2
                    }, 1032, ["file-name", "extension", "indexes", "style"])) : (openBlock(), createBlock(_sfc_main$f, {
                      key: 1,
                      name: row.data.name,
                      expanded: unref(treeSpecList)[row.index].expanded.value,
                      depth: row.data.depth - 2,
                      style: normalizeStyle({ paddingLeft: `${(row.data.depth - 2) * 10}px` }),
                      indexes: row.data.highlightIndexes,
                      "aria-controls": getIdIfDirectory(row),
                      onToggle: () => row.data.toggle()
                    }, {
                      default: withCtx(() => [
                        unref(runAllSpecsStore).isRunAllSpecsAllowed ? (openBlock(), createBlock(_sfc_main$8, {
                          key: 0,
                          directory: row.data.name,
                          class: "opacity-0 run-all",
                          "spec-number": unref(runAllSpecsStore).directoryChildren[row.data.id].length,
                          onRunAllSpecs: () => unref(runAllSpecsStore).runSelectedSpecs(row.data.id)
                        }, null, 8, ["directory", "spec-number", "onRunAllSpecs"])) : createCommentVNode("", true)
                      ]),
                      _: 2
                    }, 1032, ["name", "expanded", "depth", "style", "indexes", "aria-controls", "onToggle"]))
                  ];
                }),
                "git-info": withCtx(() => {
                  var _a3, _b3;
                  return [
                    row.data.isLeaf && ((_a3 = row.data.data) == null ? void 0 : _a3.gitInfo) ? (openBlock(), createBlock(_sfc_main$k, {
                      key: 0,
                      gql: (_b3 = row.data.data) == null ? void 0 : _b3.gitInfo
                    }, null, 8, ["gql"])) : createCommentVNode("", true)
                  ];
                }),
                "latest-runs": withCtx(() => {
                  var _a3, _b3, _c2, _d2;
                  return [
                    createBaseVNode("div", _hoisted_7, [
                      row.data.isLeaf && row.data.data && (((_a3 = row.data.data.cloudSpec) == null ? void 0 : _a3.data) || ((_b3 = row.data.data.cloudSpec) == null ? void 0 : _b3.fetchingStatus) !== "FETCHING") ? (openBlock(), createBlock(_sfc_main$i, {
                        key: 0,
                        gql: row.data.data.cloudSpec ?? null,
                        "spec-file-extension": row.data.data.specFileExtension,
                        "spec-file-name": row.data.data.fileName
                      }, null, 8, ["gql", "spec-file-extension", "spec-file-name"])) : row.data.isLeaf && ((_d2 = (_c2 = row.data.data) == null ? void 0 : _c2.cloudSpec) == null ? void 0 : _d2.fetchingStatus) === "FETCHING" ? (openBlock(), createElementBlock("div", _hoisted_8)) : createCommentVNode("", true)
                    ])
                  ];
                }),
                "average-duration": withCtx(() => {
                  var _a3;
                  return [
                    row.data.isLeaf ? (openBlock(), createBlock(_sfc_main$h, {
                      key: 0,
                      gql: ((_a3 = row.data.data) == null ? void 0 : _a3.cloudSpec) ?? null
                    }, null, 8, ["gql"])) : createCommentVNode("", true)
                  ];
                }),
                _: 2
              }, 1032, ["id", "data-cy", "data-cy-row", "is-leaf", "is-project-connected", "grid-columns", "route", "onToggleRow"]);
            }), 128))
          ], 16)
        ], 16)),
        withDirectives(createVNode(_sfc_main$M, {
          "search-term": unref(specFilterModel),
          message: unref(t)("specPage.noResultsMessage"),
          class: "mt-[56px]",
          onClear: handleClear
        }, null, 8, ["search-term", "message"]), [
          [vShow, !unref(specs).length]
        ])
      ]);
    };
  }
});
const SpecsList = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-3bbdefda"]]);
const _hoisted_1$3 = { class: "border-t mt-[32px] text-center pt-[32px]" };
const _hoisted_2$1 = {
  "data-cy": "no-specs-message",
  class: "leading-normal mb-[16px] text-gray-600 text-[16px]"
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "DefaultSpecPatternNoContent",
  props: {
    gql: null
  },
  emits: ["showCreateSpecModal"],
  setup(__props, { emit }) {
    const props = __props;
    const { t } = useI18n();
    gql`
fragment CreateSpecContent on Query {
  ...CreateSpecCards
  currentProject {
    id
    codeGenGlobs {
      id
      component
    }
    ...SpecPatternModal
  }
}
`;
    const filteredGenerators = getFilteredGeneratorList(props.gql.currentProject);
    const selectSpecCard = (id) => {
      emit("showCreateSpecModal", id);
    };
    const showSpecPatternModal = ref(false);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        props.gql.currentProject ? (openBlock(), createBlock(_sfc_main$d, {
          key: 0,
          show: showSpecPatternModal.value,
          gql: props.gql.currentProject,
          onClose: _cache[0] || (_cache[0] = ($event) => showSpecPatternModal.value = false)
        }, null, 8, ["show", "gql"])) : createCommentVNode("", true),
        createVNode(_sfc_main$N, {
          "data-cy": "create-spec-page-cards",
          gql: props.gql,
          generators: unref(filteredGenerators),
          onSelect: selectSpecCard
        }, null, 8, ["gql", "generators"]),
        createBaseVNode("div", _hoisted_1$3, [
          createBaseVNode("p", _hoisted_2$1, toDisplayString(unref(t)("createSpec.noSpecsMessage")), 1),
          createVNode(_sfc_main$v, {
            "data-cy": "view-spec-pattern",
            variant: "outline",
            "prefix-icon-class": "icon-light-gray-50 icon-dark-gray-400",
            "prefix-icon": unref(SettingsIcon),
            class: "mx-auto duration-300 hocus:ring-gray-50 hocus:border-gray-200",
            onClick: _cache[1] || (_cache[1] = ($event) => showSpecPatternModal.value = true)
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(t)("createSpec.viewSpecPatternButton")), 1)
            ]),
            _: 1
          }, 8, ["prefix-icon"])
        ])
      ], 64);
    };
  }
});
const _hoisted_1$2 = { class: "flex mt-[32px] gap-[16px] justify-center" };
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "CustomPatternNoSpecContent",
  props: {
    gql: null
  },
  emits: ["showCreateSpecModal"],
  setup(__props, { emit }) {
    const props = __props;
    const { t } = useI18n();
    gql`
fragment CustomPatternNoSpecContent on CurrentProject {
  id
  ...SpecPatterns
  ...OpenConfigFileInIDE
  configFileAbsolutePath
}
`;
    return (_ctx, _cache) => {
      const _component_i_cy_code_editor_x16 = __unplugin_components_0;
      const _component_i_cy_add_large_x16 = __unplugin_components_1;
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(_sfc_main$G, {
          gql: props.gql
        }, null, 8, ["gql"]),
        createBaseVNode("div", _hoisted_1$2, [
          createVNode(_sfc_main$H, {
            gql: props.gql
          }, {
            default: withCtx(({ onClick }) => [
              createVNode(_sfc_main$v, {
                size: "lg",
                onClick
              }, {
                prefix: withCtx(() => [
                  createVNode(_component_i_cy_code_editor_x16, { class: "icon-dark-white" })
                ]),
                default: withCtx(() => [
                  createTextVNode(" " + toDisplayString(unref(t)("createSpec.updateSpecPattern")), 1)
                ]),
                _: 2
              }, 1032, ["onClick"])
            ]),
            _: 1
          }, 8, ["gql"]),
          createVNode(_sfc_main$v, {
            size: "lg",
            variant: "outline",
            onClick: _cache[0] || (_cache[0] = ($event) => emit("showCreateSpecModal"))
          }, {
            prefix: withCtx(() => [
              createVNode(_component_i_cy_add_large_x16, { class: "icon-dark-gray-500" })
            ]),
            default: withCtx(() => [
              createTextVNode(" " + toDisplayString(unref(t)("createSpec.newSpec")), 1)
            ]),
            _: 1
          })
        ])
      ], 64);
    };
  }
});
const _hoisted_1$1 = {
  key: 0,
  class: "mx-auto text-center max-w-[642px] py-[40px]"
};
const _hoisted_2 = { class: "mx-auto max-w-[600px]" };
const _hoisted_3 = {
  "data-cy": "create-spec-page-title",
  class: "mb-[12px] text-gray-900 text-[32px] leading-snug"
};
const _hoisted_4 = {
  "data-cy": "create-spec-page-description",
  class: "leading-normal mb-[32px] text-gray-600 text-[18px]"
};
const _hoisted_5 = ["onClick"];
const _hoisted_6 = { key: 1 };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "NoSpecsPage",
  props: {
    gql: null,
    title: null,
    isDefaultSpecPattern: { type: Boolean }
  },
  emits: ["showCreateSpecModal"],
  setup(__props, { emit }) {
    const props = __props;
    gql`
fragment NoSpecsPage on Query {
  ...CreateSpecCards
  ...ChooseExternalEditor
  currentProject {
    id
    codeGenGlobs {
      id
      component
    }
    currentTestingType
    configFileAbsolutePath
    ...CustomPatternNoSpecContent
    ...OpenConfigFileInIDE
  }
}
`;
    const showCreateSpecModal = (id) => {
      emit("showCreateSpecModal", id);
    };
    const descriptionKeyPath = computed(() => {
      var _a;
      return props.isDefaultSpecPattern ? `createSpec.page.defaultPatternNoSpecs.${(_a = props.gql.currentProject) == null ? void 0 : _a.currentTestingType}.description` : "createSpec.page.customPatternNoSpecs.description";
    });
    return (_ctx, _cache) => {
      var _a;
      const _component_i18n_t = resolveComponent("i18n-t");
      return ((_a = props.gql.currentProject) == null ? void 0 : _a.currentTestingType) ? (openBlock(), createElementBlock("div", _hoisted_1$1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("h1", _hoisted_3, toDisplayString(props.title), 1),
          createBaseVNode("p", _hoisted_4, [
            createVNode(_component_i18n_t, {
              scope: "global",
              keypath: unref(descriptionKeyPath)
            }, {
              default: withCtx(() => [
                props.gql.currentProject.configFileAbsolutePath ? (openBlock(), createBlock(_sfc_main$H, {
                  key: 0,
                  gql: props.gql.currentProject
                }, {
                  default: withCtx(({ onClick }) => [
                    createBaseVNode("button", {
                      class: "text-purple-500 hocus-link-default",
                      "data-cy": "no-specs-specPattern",
                      onClick
                    }, " specPattern ", 8, _hoisted_5)
                  ]),
                  _: 1
                }, 8, ["gql"])) : (openBlock(), createElementBlock("span", _hoisted_6, "specPattern"))
              ]),
              _: 1
            }, 8, ["keypath"])
          ])
        ]),
        props.isDefaultSpecPattern ? (openBlock(), createBlock(_sfc_main$4, {
          key: 0,
          gql: props.gql,
          onShowCreateSpecModal: showCreateSpecModal
        }, null, 8, ["gql"])) : (openBlock(), createBlock(_sfc_main$3, {
          key: 1,
          gql: props.gql.currentProject,
          onShowCreateSpecModal: showCreateSpecModal
        }, null, 8, ["gql"]))
      ])) : createCommentVNode("", true);
    };
  }
});
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SpecsListRunWatcher",
  props: {
    run: null
  },
  emits: ["runUpdate"],
  setup(__props, { emit: emits }) {
    const props = __props;
    gql`
subscription SpecsListRunWatcher($id: ID!) {
  relevantRunSpecChange(runId: $id) {
    id
    status
    totalInstanceCount
    completedInstanceCount
  }
}
`;
    const variables = computed(() => {
      return { id: props.run.runId };
    });
    const shouldPause = computed(() => {
      return props.run.status !== "RUNNING";
    });
    const handleUpdate = () => {
      emits("runUpdate");
    };
    useSubscription$1({ query: SpecsListRunWatcherDocument, variables, pause: shouldPause }, handleUpdate);
    return () => {
    };
  }
});
const _hoisted_1 = {
  key: 0,
  class: "h-full"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Index",
  setup(__props) {
    const { t } = useI18n();
    gql`
query SpecsPageContainer_BranchInfo {
  currentProject {
    id
    branch
    projectId
  }
}
`;
    gql`
query SpecsPageContainer($runIds: [ID!]!, $hasRunIds: Boolean!) {
  ...Specs_SpecsList
  ...NoSpecsPage
  ...CreateSpecModal
  currentProject {
    id
    isDefaultSpecPattern
  }
}
`;
    gql`
subscription SpecsPageContainer_specsChange($runIds: [ID!]!, $hasRunIds: Boolean!) {
  specsChange {
    id
    specs {
      id
      ...SpecsList 
    }
  }
}
`;
    const relevantRuns = useRelevantRun("SPECS");
    const variables = computed(() => {
      var _a;
      const runIds = ((_a = relevantRuns.value.latest) == null ? void 0 : _a.map((run) => run.runId)) || [];
      const hasRunIds = !lodashExports.isEmpty(runIds);
      return { runIds, hasRunIds };
    });
    useSubscription({
      query: SpecsPageContainer_SpecsChangeDocument,
      variables
    });
    const mostRecentUpdate = ref();
    watch(() => relevantRuns.value, (value, oldValue) => {
      if (value && oldValue && value.all !== oldValue.all) {
        runUpdate();
      }
    });
    const latestRuns = computed(() => {
      return relevantRuns.value.latest;
    });
    const runUpdate = () => {
      mostRecentUpdate.value = (/* @__PURE__ */ new Date()).toISOString();
    };
    const query = useQuery({
      query: SpecsPageContainerDocument,
      variables
    });
    const isDefaultSpecPattern = computed(() => {
      var _a, _b;
      return !!((_b = (_a = query.data.value) == null ? void 0 : _a.currentProject) == null ? void 0 : _b.isDefaultSpecPattern);
    });
    const title = computed(() => {
      return isDefaultSpecPattern.value ? t("createSpec.page.defaultPatternNoSpecs.title") : t("createSpec.page.customPatternNoSpecs.title");
    });
    const modalIsShown = ref(false);
    const generator = ref();
    const showCreateSpecModal = (generatorId) => {
      modalIsShown.value = true;
      generator.value = generatorId || null;
    };
    const closeCreateSpecModal = () => {
      modalIsShown.value = false;
      generator.value = null;
    };
    return (_ctx, _cache) => {
      var _a, _b;
      return unref(query).data.value ? (openBlock(), createElementBlock("div", _hoisted_1, [
        ((_a = unref(query).data.value.currentProject) == null ? void 0 : _a.currentTestingType) ? (openBlock(), createBlock(_sfc_main$O, {
          key: generator.value,
          "initial-generator": generator.value,
          show: modalIsShown.value,
          gql: unref(query).data.value,
          onClose: closeCreateSpecModal
        }, null, 8, ["initial-generator", "show", "gql"])) : createCommentVNode("", true),
        ((_b = unref(query).data.value.currentProject) == null ? void 0 : _b.specs.length) ? (openBlock(), createBlock(SpecsList, {
          key: 1,
          gql: unref(query).data.value,
          "most-recent-update": mostRecentUpdate.value,
          onShowCreateSpecModal: showCreateSpecModal
        }, null, 8, ["gql", "most-recent-update"])) : (openBlock(), createBlock(_sfc_main$2, {
          key: 2,
          gql: unref(query).data.value,
          title: unref(title),
          "is-default-spec-pattern": unref(isDefaultSpecPattern),
          onShowCreateSpecModal: showCreateSpecModal
        }, null, 8, ["gql", "title", "is-default-spec-pattern"])),
        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(latestRuns), (run) => {
          return openBlock(), createBlock(_sfc_main$1, {
            key: run.runId,
            run,
            onRunUpdate: _cache[0] || (_cache[0] = ($event) => runUpdate())
          }, null, 8, ["run"]);
        }), 128))
      ])) : createCommentVNode("", true);
    };
  }
});
if (typeof block0 === "function")
  block0(_sfc_main);
export {
  _sfc_main as default
};
