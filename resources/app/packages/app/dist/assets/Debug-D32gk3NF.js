import { _ as _export_sfc, o as openBlock, i as createElementBlock, d as defineComponent, a as createBaseVNode, m as renderSlot, n as normalizeClass, F as Fragment, B as renderList, f as createVNode, w as withCtx, u as useI18n, J as gql, l as computed, aH as getUrlWithParams, b as unref, t as toDisplayString, j as createCommentVNode, V as createTextVNode, ab as _sfc_main$F, c as createBlock, $ as pushScopeId, a0 as popScopeId, h as ref, bp as useIntervalFn, A as watch, C as normalizeStyle, bq as TransitionGroup, E as resolveDynamicComponent, g as useI18n$1, a4 as TransitionQuickFade, bd as createSlots, Y as _sfc_main$N, aj as useMutation, a9 as watchEffect, ac as _sfc_main$O, aK as createStaticVNode, r as resolveComponent, bm as getUtmSource, aJ as _sfc_main$U, a_ as useSubscription$1, aU as h, b0 as useToggle, aC as lodashExports, aE as useUserProjectStatusStore, bn as _sfc_main$V, aV as nanoid, br as decodeBase64Unicode, aW as useOnline, aD as useQuery } from "./index-BVZ6TAOi.js";
import { a as __unplugin_components_0$1, C as CommitIcon, _ as _sfc_main$L } from "./SpecNameDisplay.vue_vue_type_script_setup_true_lang-DAuv_zBL.js";
import { _ as __unplugin_components_0$2 } from "./chevron-right_x16-BAR97gAz.js";
import { u as useRunDateTimeInterval, a as _sfc_main$G, b as _sfc_main$H, L as LockedProject, _ as _sfc_main$P, R as RecordGuideImage, D as DebugCommitIcon } from "./locked-project_x48-B_LJ3MFF.js";
import { X as Ao, a7 as ho, a8 as DebugTestingProgress_SpecsDocument, _ as _sfc_main$J, a9 as Do, aa as vo, q, ab as e1, ac as Z1, ad as u1, ae as m1, af as g1, ag as M1, ah as v1, ai as y1, aj as k1, ak as yo, al as p2, am as i2, an as u2, ao as h2, w as wo, h as Co, x as x1, ap as a0, aq as Y1, ar as Y, as as SwitchTestingTypeAndRelaunchDocument, at as SetTestsForDebugDocument, J, I as d2, au as ro, av as DebugProgress_SpecsDocument, aw as Io, ax as DebugRunNavigation_MoveToRunDocument, ay as UseRecordEvent_RecordEventDocument, az as DebugDocument, aA as Debug_SpecsChangeDocument } from "./Tooltip.vue_vue_type_style_index_0_lang-Bd9NYZxG.js";
import { _ as _sfc_main$I, d as dayjs, w as ws, u as utc } from "./day-BPPVgZCn.js";
import { u as useSubscription } from "./graphql-XibiI9-P.js";
import { _ as _sfc_main$M, b as _sfc_main$Q, a as _sfc_main$R, c as _sfc_main$T } from "./PromoHeader.vue_vue_type_script_setup_true_lang-DTNv-Vxo.js";
import { p as posixify, _ as __unplugin_components_0$3 } from "./box-open_x48-D3WqLTcA.js";
import { b as _sfc_main$K } from "./OpenFileInIDE.vue_vue_type_script_setup_true_lang-BXMxX5y6.js";
import { E as ErrorOutlineIcon } from "./status-errored-outline_x16-BfW96saa.js";
import { _ as _sfc_main$S } from "./CloudConnectButton.vue_vue_type_script_setup_true_lang-B9s3BRIe.js";
import { u as useRelevantRun } from "./useRelevantRun-4sQamk5Z.js";
import "./index.es-BsVuF2bS.js";
import "./cypress-logo_x16-reWlL6cm.js";
const _sfc_main$E = {};
const _hoisted_1$z = { class: "rounded-full font-semibold bg-gray-100 h-[2px] ml-[8px] w-[2px]" };
function _sfc_render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_1$z);
}
const DebugLoadingDivider = /* @__PURE__ */ _export_sfc(_sfc_main$E, [["render", _sfc_render$2]]);
const _hoisted_1$y = /* @__PURE__ */ createBaseVNode("div", { class: "rounded-full bg-gray-50 h-[16px] w-full" }, null, -1);
const _hoisted_2$o = [
  _hoisted_1$y
];
const _hoisted_3$i = { class: "ml-[10px]" };
const _hoisted_4$b = /* @__PURE__ */ createBaseVNode("div", { class: "rounded-full bg-gray-50 h-[16px] w-full" }, null, -1);
const _hoisted_5$c = [
  _hoisted_4$b
];
const _sfc_main$D = /* @__PURE__ */ defineComponent({
  __name: "DebugTestLoadingContainer",
  props: {
    widthClass: null,
    dotClass: null,
    rows: null
  },
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_i_cy_dot_solid_x4 = __unplugin_components_0$1;
      const _component_i_cy_chevron_right_x16 = __unplugin_components_0$2;
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", {
          class: normalizeClass(["border-t border-l border-r rounded-t-md bg-gray-50 border-0 border-gray-100 p-[16px]", __props.widthClass])
        }, [
          renderSlot(_ctx.$slots, "header")
        ], 2),
        (openBlock(true), createElementBlock(Fragment, null, renderList(__props.rows, (row, i) => {
          return openBlock(), createElementBlock("div", {
            key: i,
            class: normalizeClass(["bg-white border flex border-b-0 border-gray-100 p-[16px] items-center overflow-hidden last:border-b last:rounded-b-md", __props.widthClass])
          }, [
            createBaseVNode("div", null, [
              createVNode(_component_i_cy_dot_solid_x4, {
                class: normalizeClass(__props.dotClass)
              }, null, 8, ["class"])
            ]),
            createBaseVNode("div", {
              class: normalizeClass(["ml-[10px]", row[0]])
            }, _hoisted_2$o, 2),
            createBaseVNode("div", _hoisted_3$i, [
              createVNode(_component_i_cy_chevron_right_x16, { class: "icon-dark-gray-200" })
            ]),
            createBaseVNode("div", {
              class: normalizeClass(["ml-[10px]", row[1]])
            }, _hoisted_5$c, 2)
          ], 2);
        }), 128))
      ], 64);
    };
  }
});
const _hoisted_1$x = {
  "data-cy": "debug-loading",
  class: "p-[30px]"
};
const _hoisted_2$n = { class: "flex items-center" };
const _hoisted_3$h = /* @__PURE__ */ createBaseVNode("div", { class: "rounded-full bg-gray-50 h-[16px] w-[344px]" }, null, -1);
const _hoisted_4$a = /* @__PURE__ */ createBaseVNode("div", { class: "rounded-full bg-gray-50 h-[8px] ml-[8px] w-[120px]" }, null, -1);
const _hoisted_5$b = { class: "flex mt-[15px] items-center" };
const _hoisted_6$7 = /* @__PURE__ */ createBaseVNode("div", { class: "rounded-full bg-gray-50 h-[16px] w-[72px]" }, null, -1);
const _hoisted_7$7 = /* @__PURE__ */ createBaseVNode("div", { class: "rounded-full bg-gray-50 h-[16px] ml-[8px] w-[160px]" }, null, -1);
const _hoisted_8$5 = /* @__PURE__ */ createBaseVNode("div", { class: "rounded-full bg-gray-50 h-[16px] ml-[8px] w-[72px]" }, null, -1);
const _hoisted_9$3 = /* @__PURE__ */ createBaseVNode("div", { class: "rounded-full bg-gray-50 h-[8px] ml-[8px] w-[80px]" }, null, -1);
const _hoisted_10$3 = { class: "mt-[24px]" };
const _hoisted_11$4 = { class: "flex items center justify-between" };
const _hoisted_12$3 = { class: "flex items-center" };
const _hoisted_13$3 = /* @__PURE__ */ createBaseVNode("div", { class: "rounded-full bg-gray-100 h-[16px] ml-[8px] w-[200px]" }, null, -1);
const _hoisted_14$3 = { class: "flex mt-[20px] items-center" };
const _hoisted_15$3 = /* @__PURE__ */ createBaseVNode("div", { class: "rounded-full bg-gray-100 h-[8px] w-[180px]" }, null, -1);
const _hoisted_16$3 = /* @__PURE__ */ createBaseVNode("div", { class: "rounded-full bg-gray-100 h-[8px] ml-[8px] w-[99px]" }, null, -1);
const _hoisted_17$1 = /* @__PURE__ */ createBaseVNode("div", { class: "rounded-full bg-gray-100 h-[8px] ml-[8px] w-[99px]" }, null, -1);
const _hoisted_18 = /* @__PURE__ */ createBaseVNode("div", { class: "mt-[12px]" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "rounded-full bg-gray-100 h-[20px] w-[120px]" })
], -1);
const _hoisted_19 = { class: "mt-[24px]" };
const _hoisted_20 = { class: "flex items center justify-between" };
const _hoisted_21 = { class: "flex items-center" };
const _hoisted_22 = /* @__PURE__ */ createBaseVNode("div", { class: "rounded-full bg-gray-100 h-[16px] ml-[8px] w-[200px]" }, null, -1);
const _hoisted_23 = { class: "flex mt-[20px] items-center" };
const _hoisted_24 = /* @__PURE__ */ createBaseVNode("div", { class: "rounded-full bg-gray-100 h-[8px] w-[180px]" }, null, -1);
const _hoisted_25 = /* @__PURE__ */ createBaseVNode("div", { class: "rounded-full bg-gray-100 h-[8px] ml-[8px] w-[99px]" }, null, -1);
const _hoisted_26 = /* @__PURE__ */ createBaseVNode("div", { class: "rounded-full bg-gray-100 h-[8px] ml-[8px] w-[99px]" }, null, -1);
const _hoisted_27 = /* @__PURE__ */ createBaseVNode("div", { class: "mt-[12px]" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "rounded-full bg-gray-100 h-[20px] w-[120px]" })
], -1);
const _sfc_main$C = /* @__PURE__ */ defineComponent({
  __name: "DebugLoading",
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_i_cy_dot_solid_x4 = __unplugin_components_0$1;
      return openBlock(), createElementBlock("div", _hoisted_1$x, [
        createBaseVNode("div", null, [
          createBaseVNode("div", _hoisted_2$n, [
            _hoisted_3$h,
            createVNode(DebugLoadingDivider),
            _hoisted_4$a
          ]),
          createBaseVNode("div", _hoisted_5$b, [
            _hoisted_6$7,
            _hoisted_7$7,
            _hoisted_8$5,
            (openBlock(), createElementBlock(Fragment, null, renderList(4, (n) => {
              return openBlock(), createElementBlock(Fragment, { key: n }, [
                createVNode(DebugLoadingDivider),
                _hoisted_9$3
              ], 64);
            }), 64))
          ])
        ]),
        createBaseVNode("div", _hoisted_10$3, [
          createVNode(_sfc_main$D, {
            "width-class": "w-full",
            "dot-class": "icon-light-gray-50",
            rows: [["w-[200px]", "w-[200px]"], ["w-[200px]", "w-[200px]"], ["w-[200px]", "w-[200px]"]]
          }, {
            header: withCtx(() => [
              createBaseVNode("div", _hoisted_11$4, [
                createBaseVNode("div", null, [
                  createBaseVNode("div", _hoisted_12$3, [
                    createVNode(_component_i_cy_dot_solid_x4, { class: "icon-light-gray-100" }),
                    _hoisted_13$3
                  ]),
                  createBaseVNode("div", _hoisted_14$3, [
                    _hoisted_15$3,
                    createVNode(DebugLoadingDivider),
                    _hoisted_16$3,
                    createVNode(DebugLoadingDivider),
                    _hoisted_17$1
                  ])
                ]),
                _hoisted_18
              ])
            ]),
            _: 1
          })
        ]),
        createBaseVNode("div", _hoisted_19, [
          createVNode(_sfc_main$D, {
            "width-class": "w-full",
            "dot-class": "icon-light-gray-50",
            rows: [["w-[200px]", "w-[200px]"], ["w-[200px]", "w-[200px]"]]
          }, {
            header: withCtx(() => [
              createBaseVNode("div", _hoisted_20, [
                createBaseVNode("div", null, [
                  createBaseVNode("div", _hoisted_21, [
                    createVNode(_component_i_cy_dot_solid_x4, { class: "icon-light-gray-100" }),
                    _hoisted_22
                  ]),
                  createBaseVNode("div", _hoisted_23, [
                    _hoisted_24,
                    createVNode(DebugLoadingDivider),
                    _hoisted_25,
                    createVNode(DebugLoadingDivider),
                    _hoisted_26
                  ])
                ]),
                _hoisted_27
              ])
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
});
const _hoisted_1$w = {
  style: { "min-width": "16px", "min-height": "16px" },
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$m = /* @__PURE__ */ createBaseVNode("path", {
  d: "M3 12H6V10H3V12ZM6 12H13V10H6V12ZM10.2361 6H13V4H10.2361V6ZM6.89443 11.4472L9.34164 6.55279L7.55279 5.65836L5.10557 10.5528L6.89443 11.4472ZM14 5V7C15.1046 7 16 6.10457 16 5H14ZM14 5H12C12 6.10457 12.8954 7 14 7V5ZM14 5V3C12.8954 3 12 3.89543 12 5H14ZM14 5H16C16 3.89543 15.1046 3 14 3V5ZM14 11V13C15.1046 13 16 12.1046 16 11H14ZM14 11H12C12 12.1046 12.8954 13 14 13V11ZM14 11V9C12.8954 9 12 9.89543 12 11H14ZM14 11H16C16 9.89543 15.1046 9 14 9V11ZM2 11V13C3.10457 13 4 12.1046 4 11H2ZM2 11H0C0 12.1046 0.89543 13 2 13V11ZM2 11V9C0.89543 9 0 9.89543 0 11H2ZM2 11H4C4 9.89543 3.10457 9 2 9V11ZM10.2361 4C9.09975 4 8.06096 4.64201 7.55279 5.65836L9.34164 6.55279C9.51103 6.214 9.8573 6 10.2361 6V4Z",
  fill: "#1B1E2E",
  class: "icon-dark"
}, null, -1);
const _hoisted_3$g = [
  _hoisted_2$m
];
function render$4(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$w, _hoisted_3$g);
}
const __unplugin_components_0 = { name: "cy-tech-branch-h_x16", render: render$4 };
const DEBUG_TAB_MEDIUM = "Debug Tab";
const DEBUG_PROMO_CAMPAIGNS = {
  login: "Debug Login Empty State",
  connectProject: "Debug Connect Project Empty State",
  recordRun: "Debug Record Run Empty State"
};
const _withScopeId = (n) => (pushScopeId("data-v-30dba275"), n = n(), popScopeId(), n);
const _hoisted_1$v = {
  "data-cy": "debug",
  class: "flex flex-col gap-[16px]"
};
const _hoisted_2$l = {
  "data-cy": "debug-header",
  class: "flex flex-col w-full gap-y-2 overflow-hidden"
};
const _hoisted_3$f = { "data-cy": "header-top" };
const _hoisted_4$9 = {
  key: 1,
  class: "border rounded border-gray-100 h-6 text-sm inline-block"
};
const _hoisted_5$a = {
  class: "font-normal mx-px px-2 text-orange-500 items-center",
  "data-cy": "debug-commitsAhead"
};
const _hoisted_6$6 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("li", {
  class: "text-lg text-gray-400 w-[16px] inline",
  "aria-hidden": "true"
}, " • ", -1));
const _hoisted_7$6 = { class: "font-normal text-sm text-indigo-500 inline" };
const _hoisted_8$4 = {
  "data-cy": "metadata",
  class: "flex flex-wrap font-normal text-sm text-gray-700 gap-x-2 items-center whitespace-nowrap children:flex children:items-center"
};
const _hoisted_9$2 = { class: "flex flex-row text-sm gap-x-2 items-center justify-center" };
const _hoisted_10$2 = {
  key: 0,
  "data-cy": "debug-header-branch"
};
const _hoisted_11$3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "sr-only" }, "Branch Name:", -1));
const _hoisted_12$2 = {
  key: 1,
  "data-cy": "debug-header-commitHash"
};
const _hoisted_13$2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "sr-only" }, "Commit Hash:", -1));
const _hoisted_14$2 = {
  key: 2,
  "data-cy": "debug-header-author"
};
const _hoisted_15$2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "sr-only" }, "Commit Author:", -1));
const _hoisted_16$2 = {
  key: 3,
  "data-cy": "debug-header-createdAt"
};
const _hoisted_17 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "sr-only" }, "Run Total Duration:", -1));
const _sfc_main$B = /* @__PURE__ */ defineComponent({
  __name: "DebugPageHeader",
  props: {
    gql: null,
    commitsAhead: null
  },
  setup(__props) {
    const props = __props;
    const { t } = useI18n();
    gql`
fragment DebugPageHeader on CloudRun {
  id
  runNumber
  createdAt
  status
  totalDuration
  commitInfo {
    sha
  }
  url
  ...RunResults
  commitInfo {
    authorName
    authorEmail
    summary
    branch
  }
}
`;
    const debug = computed(() => props.gql);
    const runUrl = computed(() => {
      return debug.value.url ? getUrlWithParams({ url: debug.value.url, params: { utm_medium: DEBUG_TAB_MEDIUM, utm_campaign: "View in Cypress Cloud" } }) : "#";
    });
    const { relativeCreatedAt, totalDuration } = useRunDateTimeInterval(debug);
    return (_ctx, _cache) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
      const _component_i_cy_tech_branch_h_x16 = __unplugin_components_0;
      return openBlock(), createElementBlock("div", _hoisted_1$v, [
        createBaseVNode("div", _hoisted_2$l, [
          createBaseVNode("ul", _hoisted_3$f, [
            ((_b = (_a = unref(debug)) == null ? void 0 : _a.commitInfo) == null ? void 0 : _b.summary) ? (openBlock(), createElementBlock("li", {
              key: 0,
              class: normalizeClass(["font-medium text-lg text-gray-900 inline", { "mr-[8px]": props.commitsAhead }]),
              "data-cy": "debug-test-summary"
            }, toDisplayString(unref(debug).commitInfo.summary), 3)) : createCommentVNode("", true),
            props.commitsAhead ? (openBlock(), createElementBlock("li", _hoisted_4$9, [
              createBaseVNode("span", _hoisted_5$a, toDisplayString(unref(t)("debugPage.header.commitsAhead", props.commitsAhead)), 1)
            ])) : createCommentVNode("", true),
            _hoisted_6$6,
            createBaseVNode("li", _hoisted_7$6, [
              createVNode(_sfc_main$F, {
                "data-cy": "debug-header-dashboard-link",
                href: unref(runUrl)
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(t)("debugPage.header.runUrl")), 1)
                ]),
                _: 1
              }, 8, ["href"])
            ])
          ]),
          createBaseVNode("ul", _hoisted_8$4, [
            createBaseVNode("li", _hoisted_9$2, [
              unref(debug).runNumber && unref(debug).status ? (openBlock(), createBlock(_sfc_main$G, {
                key: 0,
                status: unref(debug).status,
                value: unref(debug).runNumber
              }, null, 8, ["status", "value"])) : createCommentVNode("", true),
              createVNode(_sfc_main$H, {
                gql: props.gql,
                "data-cy": "debug-results"
              }, null, 8, ["gql"])
            ]),
            ((_d = (_c = unref(debug)) == null ? void 0 : _c.commitInfo) == null ? void 0 : _d.branch) ? (openBlock(), createElementBlock("li", _hoisted_10$2, [
              createVNode(_component_i_cy_tech_branch_h_x16, { class: "mr-2 icon-dark-gray-300" }),
              _hoisted_11$3,
              createTextVNode(" " + toDisplayString(unref(debug).commitInfo.branch), 1)
            ])) : createCommentVNode("", true),
            ((_e = unref(debug).commitInfo) == null ? void 0 : _e.sha) ? (openBlock(), createElementBlock("li", _hoisted_12$2, [
              createVNode(unref(CommitIcon), { class: "h-[16px] fill-white mr-2 w-[16px]" }),
              _hoisted_13$2,
              createTextVNode(" " + toDisplayString((_g = (_f = unref(debug).commitInfo) == null ? void 0 : _f.sha) == null ? void 0 : _g.substring(0, 7)), 1)
            ])) : createCommentVNode("", true),
            ((_i = (_h = unref(debug)) == null ? void 0 : _h.commitInfo) == null ? void 0 : _i.authorName) ? (openBlock(), createElementBlock("li", _hoisted_14$2, [
              createVNode(_sfc_main$I, {
                class: "h-[16px] mr-2 w-[16px]",
                email: (_k = (_j = unref(debug)) == null ? void 0 : _j.commitInfo) == null ? void 0 : _k.authorEmail,
                "data-cy": "debug-header-avatar"
              }, null, 8, ["email"]),
              _hoisted_15$2,
              createTextVNode(" " + toDisplayString(unref(debug).commitInfo.authorName), 1)
            ])) : createCommentVNode("", true),
            unref(debug).createdAt ? (openBlock(), createElementBlock("li", _hoisted_16$2, [
              createVNode(unref(Ao), {
                size: "16",
                class: "mr-2",
                "stroke-color": "gray-500",
                "fill-color": "gray-50"
              }),
              _hoisted_17,
              createTextVNode(" " + toDisplayString(unref(totalDuration)) + " (" + toDisplayString(unref(relativeCreatedAt)) + ") ", 1)
            ])) : createCommentVNode("", true)
          ])
        ])
      ]);
    };
  }
});
const DebugPageHeader = /* @__PURE__ */ _export_sfc(_sfc_main$B, [["__scopeId", "data-v-30dba275"]]);
const _hoisted_1$u = {
  "data-cy": "debug-pending-splash",
  class: "flex p-12"
};
const _hoisted_2$k = { class: "flex flex-col w-full items-center justify-center" };
const _hoisted_3$e = {
  "data-cy": "title",
  class: "font-medium text-lg text-gray-900"
};
const _hoisted_4$8 = {
  key: 0,
  "data-cy": "splash-subtitle",
  class: "font-normal mt-[4px] text-md text-gray-600"
};
const _sfc_main$A = /* @__PURE__ */ defineComponent({
  __name: "DebugPendingRunSplash",
  props: {
    isCompletionScheduled: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    const { t } = useI18n();
    const title = computed(() => {
      if (props.isCompletionScheduled) {
        return t("debugPage.pending.titleCompletionScheduled");
      }
      return t("debugPage.pending.title");
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$u, [
        createBaseVNode("div", _hoisted_2$k, [
          createVNode(unref(ho), { class: "mb-[16px]" }),
          createBaseVNode("span", _hoisted_3$e, toDisplayString(unref(title)), 1),
          !__props.isCompletionScheduled ? (openBlock(), createElementBlock("div", _hoisted_4$8, toDisplayString(unref(t)("debugPage.pending.failuresHere")), 1)) : createCommentVNode("", true)
        ])
      ]);
    };
  }
});
const _hoisted_1$t = {
  "data-cy": "debug-pending-counts",
  class: "text-gray-600"
};
const _sfc_main$z = /* @__PURE__ */ defineComponent({
  __name: "DebugPendingRunCounts",
  props: {
    specs: null
  },
  setup(__props) {
    gql`
fragment DebugPendingRunCounts on CloudRun {
  id
  totalSpecs: totalInstanceCount
  completedSpecs: completedInstanceCount
}
`;
    const { t } = useI18n();
    return (_ctx, _cache) => {
      var _a, _b, _c;
      return openBlock(), createElementBlock("span", _hoisted_1$t, toDisplayString(unref(t)("debugPage.specCounts.whenRunning", { n: ((_a = __props.specs) == null ? void 0 : _a.totalSpecs) || 0, completed: ((_b = __props.specs) == null ? void 0 : _b.completedSpecs) || 0, total: ((_c = __props.specs) == null ? void 0 : _c.totalSpecs) || 0 })), 1);
    };
  }
});
const _hoisted_1$s = {
  "data-cy": "debug-testing-progress",
  class: "border rounded border-gray-100 relative overflow-hidden"
};
const _hoisted_2$j = { class: "flex text-md py-[14px] px-[16px] text-gray-900" };
const _hoisted_3$d = {
  "data-cy": "title",
  class: "font-medium"
};
const _hoisted_4$7 = { key: 0 };
const _hoisted_5$9 = { key: 1 };
const _hoisted_6$5 = { key: 2 };
const _hoisted_7$5 = { class: "font-normal before-dot" };
const _hoisted_8$3 = { class: "bg-gray-50 h-[4px] w-full bottom-0 absolute" };
const _sfc_main$y = /* @__PURE__ */ defineComponent({
  __name: "DebugTestingProgress",
  props: {
    runId: null
  },
  setup(__props) {
    const props = __props;
    gql`
subscription DebugTestingProgress_Specs($id: ID!) {
  relevantRunSpecChange(runId: $id) {
    id
    ...DebugPendingRunCounts
    scheduledToCompleteAt
  }
}
`;
    const { t } = useI18n();
    const specs = useSubscription({ query: DebugTestingProgress_SpecsDocument, variables: { id: props.runId } });
    const run = computed(() => {
      var _a;
      return (_a = specs.data.value) == null ? void 0 : _a.relevantRunSpecChange;
    });
    const specCompletion = computed(() => {
      if (run.value && run.value.totalSpecs && run.value.completedSpecs) {
        return run.value.completedSpecs / run.value.totalSpecs * 100;
      }
      return 0;
    });
    const timeRemaining = ref();
    const scheduledCompletionExpired = ref(false);
    const remainingInterval = useIntervalFn(() => {
      var _a;
      const scheduledToCompleteAt = (_a = run.value) == null ? void 0 : _a.scheduledToCompleteAt;
      if (scheduledToCompleteAt) {
        const durationRemaining = dayjs(scheduledToCompleteAt).diff(dayjs());
        timeRemaining.value = dayjs.duration(durationRemaining).format("H[h] m[m] s[s]").replace(/^0h /, "").replace(/^0m /, "");
        if (durationRemaining <= 0) {
          scheduledCompletionExpired.value = true;
          timeRemaining.value = void 0;
          remainingInterval.pause();
        }
      }
    }, 1e3, {
      immediate: false,
      immediateCallback: true
    });
    watch([() => {
      var _a;
      return (_a = run.value) == null ? void 0 : _a.scheduledToCompleteAt;
    }], ([scheduledToCompleteAt]) => {
      scheduledCompletionExpired.value = false;
      if (scheduledToCompleteAt) {
        remainingInterval.resume();
      } else {
        remainingInterval.pause();
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$s, [
        createBaseVNode("div", _hoisted_2$j, [
          createBaseVNode("div", _hoisted_3$d, [
            timeRemaining.value ? (openBlock(), createElementBlock("span", _hoisted_4$7, toDisplayString(unref(t)("debugPage.pending.scheduledTime", { time: timeRemaining.value })), 1)) : scheduledCompletionExpired.value ? (openBlock(), createElementBlock("span", _hoisted_5$9, toDisplayString(unref(t)("debugPage.pending.scheduledCompletionExpired")), 1)) : (openBlock(), createElementBlock("span", _hoisted_6$5, toDisplayString(unref(t)("debugPage.pending.title")), 1))
          ]),
          createBaseVNode("div", _hoisted_7$5, [
            createVNode(_sfc_main$z, { specs: unref(run) }, null, 8, ["specs"])
          ])
        ]),
        createBaseVNode("div", _hoisted_8$3, [
          createBaseVNode("div", {
            "data-cy": "progress",
            class: "bg-indigo-600 h-[4px] transition-all duration-500",
            style: normalizeStyle({ width: unref(specCompletion) + "%" })
          }, null, 4)
        ])
      ]);
    };
  }
});
const DebugTestingProgress = /* @__PURE__ */ _export_sfc(_sfc_main$y, [["__scopeId", "data-v-bc8174f1"]]);
const _sfc_main$x = {};
function _sfc_render$1(_ctx, _cache) {
  return openBlock(), createBlock(TransitionGroup, {
    "enter-active-class": "transition duration-200 ease-out",
    "enter-from-class": "translate-y-1 opacity-0",
    "enter-to-class": "translate-y-0 opacity-100",
    "leave-active-class": "transition duration-150 ease-in",
    "leave-from-class": "translate-y-0 opacity-100",
    "leave-to-class": "translate-y-1 opacity-0"
  }, {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
  });
}
const TransitionGroupQuickFade = /* @__PURE__ */ _export_sfc(_sfc_main$x, [["render", _sfc_render$1]]);
const _hoisted_1$r = {
  class: "font-normal text-sm inline-flex",
  "data-cy": "tooltip-content"
};
const _sfc_main$w = /* @__PURE__ */ defineComponent({
  __name: "DebugArtifactLink",
  props: {
    icon: null,
    popperText: null,
    url: null
  },
  setup(__props) {
    const props = __props;
    const ICON_MAP = {
      "TERMINAL_LOG": Do,
      "IMAGE_SCREENSHOT": vo,
      "PLAY": q,
      "REPLAY": e1
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$J, {
        placement: "bottom",
        "data-cy": `artifact-for-${__props.icon}`,
        distance: 8
      }, {
        popper: withCtx(() => [
          createBaseVNode("span", _hoisted_1$r, toDisplayString(__props.popperText), 1)
        ]),
        default: withCtx(() => [
          createVNode(_sfc_main$F, {
            class: "flex h-[24px] w-[24px] justify-center items-center hocus:rounded-md group hocus:border-[1px] hocus:border-indigo-500",
            "data-cy": `${__props.icon}-button`,
            href: props.url || "#",
            "use-default-hocus": true,
            "aria-label": __props.popperText
          }, {
            default: withCtx(() => [
              (openBlock(), createBlock(resolveDynamicComponent(ICON_MAP[__props.icon]), {
                "stroke-color": "gray-600",
                "fill-color": "gray-100",
                "hocus-stroke-color": "indigo-500",
                "hocus-fill-color": "indigo-100",
                "interactive-colors-on-group": ""
              }))
            ]),
            _: 1
          }, 8, ["data-cy", "href", "aria-label"])
        ]),
        _: 1
      }, 8, ["data-cy"]);
    };
  }
});
const _hoisted_1$q = {
  "data-cy": "layered-browser-icons",
  class: "flex mr-[8px] pl-[8px]"
};
const _sfc_main$v = /* @__PURE__ */ defineComponent({
  __name: "LayeredBrowserIcons",
  props: {
    browsers: null
  },
  setup(__props) {
    const props = __props;
    const results = computed(() => {
      if (props.browsers) {
        return props.browsers.map((browserType) => {
          return {
            icon: BROWSER_MAP[browserType],
            name: `browser-icon-${browserType.toLowerCase().replaceAll(" ", "_")}`
          };
        });
      }
      return [];
    });
    const BROWSER_MAP = {
      "CHROME": Z1,
      "CHROME BETA": u1,
      "CHROME-CANARY": m1,
      "SAFARI": g1,
      "FIREFOX": M1,
      "EDGE": v1,
      "WEBKIT": y1,
      "ELECTRON": k1
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("ul", _hoisted_1$q, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(results), (result, i) => {
          return openBlock(), createElementBlock("li", {
            key: i,
            class: normalizeClass(["rounded-full rounded flex h-5 ml-[-8px] w-5 items-center justify-center", unref(results).length > 1 ? "bg-gray-50" : ""])
          }, [
            (openBlock(), createBlock(resolveDynamicComponent(result.icon), {
              "data-cy": result.name,
              size: "16"
            }, null, 8, ["data-cy"]))
          ], 2);
        }), 128))
      ]);
    };
  }
});
const _hoisted_1$p = {
  "data-cy": "stats-metadata",
  class: "flex flex-wrap font-normal text-sm w-full text-gray-700 gap-x-2 items-center whitespace-nowrap stats-metadata-class children:flex children:items-center"
};
const _hoisted_2$i = { key: 0 };
const _hoisted_3$c = ["data-cy"];
const _hoisted_4$6 = {
  key: 0,
  class: "flex inline-flex items-center"
};
const _hoisted_5$8 = { class: "sr-only" };
const _hoisted_6$4 = {
  key: 1,
  class: "flex inline-flex items-center"
};
const _hoisted_7$4 = { class: "sr-only" };
const _sfc_main$u = /* @__PURE__ */ defineComponent({
  __name: "StatsMetadata",
  props: {
    order: null,
    specDuration: null,
    testing: null,
    groups: null,
    groupName: null
  },
  setup(__props) {
    const props = __props;
    const { t } = useI18n$1();
    gql`
  fragment StatsMetadata_Groups on CloudRunGroup {
    id
    groupName
    browser {
      id
      formattedName
      formattedNameWithVersion
    }
    os {
      id
      name
      nameWithVersion
    }
  }
`;
    const OS_MAP = {
      "LINUX": p2,
      "MAC": i2,
      "WINDOWS": u2,
      "GROUP": h2
    };
    const TESTING_MAP = {
      "e2e": wo,
      "component": Co
    };
    const TESTING_TITLE_MAP = {
      "e2e": "E2E",
      "component": "Component"
    };
    const results = computed(() => {
      if (props.order) {
        return props.order.map((status) => ORDER_MAP.value[status]);
      }
      return [];
    });
    const arrMapping = computed(() => {
      const acc = { browsers: [], oses: [], firstBrowser: "", firstOs: "" };
      const uniqueBrowsers = /* @__PURE__ */ new Set();
      const uniqueOSes = /* @__PURE__ */ new Set();
      if (props.groups) {
        props.groups.forEach((group, index) => {
          const browserName = group.browser.formattedName.toUpperCase();
          const osName = group.os.name.toUpperCase();
          uniqueBrowsers.add(browserName);
          uniqueOSes.add(osName);
          if (index === 0) {
            acc.firstBrowser = group.browser.formattedNameWithVersion;
            acc.firstOs = group.os.nameWithVersion;
          }
        });
      }
      acc.browsers = Array.from(uniqueBrowsers).sort();
      acc.oses = Array.from(uniqueOSes);
      return acc;
    });
    const ORDER_MAP = computed(() => {
      return {
        "DURATION": {
          value: props.specDuration,
          icon: Ao,
          name: "spec-duration"
        },
        "OS": {
          value: arrMapping.value.firstOs,
          icon: OS_MAP[arrMapping.value.oses[0]],
          name: "operating-system"
        },
        "BROWSER": {
          value: arrMapping.value.firstBrowser,
          icon: arrMapping.value.browsers,
          name: "browser"
        },
        "TESTING": {
          value: TESTING_TITLE_MAP[props.testing],
          icon: TESTING_MAP[props.testing],
          name: "testing-type"
        },
        "GROUPS": {
          value: t("debugPage.stats.groups", props.groups.length),
          icon: yo,
          name: "group-server"
        },
        "G_OS": {
          value: t("debugPage.stats.operatingSystems", arrMapping.value.oses.length),
          icon: OS_MAP["GROUP"],
          name: "operating-system-groups"
        },
        "G_BROWSERS": {
          value: t("debugPage.stats.browsers", arrMapping.value.browsers.length),
          icon: arrMapping.value.browsers,
          name: "browser-groups"
        },
        "GROUP_NAME": {
          value: props.groupName,
          icon: yo,
          name: "group_name"
        }
      };
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("ul", _hoisted_1$p, [
        _ctx.$slots.prefix ? (openBlock(), createElementBlock("li", _hoisted_2$i, [
          renderSlot(_ctx.$slots, "prefix", {}, void 0, true)
        ])) : createCommentVNode("", true),
        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(results), (result, i) => {
          return openBlock(), createElementBlock("li", {
            key: i,
            "data-cy": `metaData-Results-${result.name}`,
            class: "py-1"
          }, [
            result.value && (result.name === "browser" || result.name === "browser-groups") ? (openBlock(), createElementBlock("span", _hoisted_4$6, [
              createVNode(_sfc_main$v, {
                browsers: result.icon,
                "data-cy": `${result.name} ${result.value}`
              }, null, 8, ["browsers", "data-cy"]),
              createBaseVNode("span", _hoisted_5$8, toDisplayString(result.name), 1),
              createTextVNode(" " + toDisplayString(result.value), 1)
            ])) : result.value ? (openBlock(), createElementBlock("span", _hoisted_6$4, [
              (openBlock(), createBlock(resolveDynamicComponent(result.icon), {
                class: "mr-[8px] text-gray-500",
                "stroke-color": "gray-500",
                "fill-color": "gray-100",
                "data-cy": `${result.name} ${result.value}`
              }, null, 8, ["data-cy"])),
              createBaseVNode("span", _hoisted_7$4, toDisplayString(result.name), 1),
              createTextVNode(" " + toDisplayString(result.value), 1)
            ])) : createCommentVNode("", true)
          ], 8, _hoisted_3$c);
        }), 128))
      ]);
    };
  }
});
const StatsMetaData = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["__scopeId", "data-v-e1c57a84"]]);
const formatUrl = (url, campaign) => {
  return getUrlWithParams({ url, params: { utm_medium: DEBUG_TAB_MEDIUM, utm_campaign: campaign } });
};
const getDebugArtifacts = (instance, t) => {
  const debugArtifacts = [];
  if ((instance == null ? void 0 : instance.hasReplay) && instance.replayUrl) {
    debugArtifacts.push({ icon: "REPLAY", text: t("debugPage.artifacts.replay"), url: formatUrl(instance.replayUrl, "Test Replay") });
  }
  if ((instance == null ? void 0 : instance.hasStdout) && instance.stdoutUrl) {
    debugArtifacts.push({ icon: "TERMINAL_LOG", text: t("debugPage.artifacts.stdout"), url: formatUrl(instance.stdoutUrl, "Output") });
  }
  if ((instance == null ? void 0 : instance.hasScreenshots) && instance.screenshotsUrl) {
    debugArtifacts.push({ icon: "IMAGE_SCREENSHOT", text: t("debugPage.artifacts.screenshots"), url: formatUrl(instance.screenshotsUrl, "Screenshots") });
  }
  if ((instance == null ? void 0 : instance.hasVideo) && instance.videoUrl) {
    debugArtifacts.push({ icon: "PLAY", text: t("debugPage.artifacts.video"), url: formatUrl(instance.videoUrl, "Video") });
  }
  return debugArtifacts;
};
const _hoisted_1$o = {
  class: "flex flex-start flex-row font-normal border-b-gray-100 h-12 text-base text-gray-700 gap-x-2.5 items-center non-italic",
  "data-cy": "test-failed-metadata"
};
const _hoisted_2$h = {
  "data-cy": "debug-artifacts",
  class: "flex grow space-x-4.5 opacity-0 px-[18px] justify-end grouped-row-artifacts"
};
const _hoisted_3$b = ["data-cy"];
const _sfc_main$t = /* @__PURE__ */ defineComponent({
  __name: "GroupedDebugFailedTest",
  props: {
    failedTests: null,
    groups: null
  },
  setup(__props) {
    const props = __props;
    const { t } = useI18n$1();
    const debugArtifacts = computed(() => {
      return props.failedTests.reduce((acc, curr) => {
        var _a;
        acc[((_a = curr.instance) == null ? void 0 : _a.groupId) ?? ""] = getDebugArtifacts(curr.instance, t);
        return acc;
      }, {});
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(TransitionGroupQuickFade, null, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList(props.groups, (group, j) => {
            return openBlock(), createElementBlock("div", {
              key: j,
              class: "flex flex-col flex-start w-full pl-[16px] justify-center grouped-row-class hover:bg-gray-50",
              "data-cy": "grouped-row"
            }, [
              createBaseVNode("div", _hoisted_1$o, [
                createVNode(StatsMetaData, {
                  order: ["GROUP_NAME", "OS", "BROWSER"],
                  groups: [group],
                  "group-name": group.groupName
                }, null, 8, ["groups", "group-name"]),
                createBaseVNode("div", _hoisted_2$h, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(unref(debugArtifacts)[group.id], (artifact, l) => {
                    return openBlock(), createElementBlock("div", {
                      key: l,
                      "data-cy": `artifact-${artifact.icon}`
                    }, [
                      createVNode(_sfc_main$w, {
                        icon: artifact.icon,
                        "popper-text": artifact.text,
                        url: artifact.url
                      }, null, 8, ["icon", "popper-text", "url"])
                    ], 8, _hoisted_3$b);
                  }), 128))
                ])
              ])
            ]);
          }), 128))
        ]),
        _: 1
      });
    };
  }
});
const GroupedDebugFailedTestVue = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["__scopeId", "data-v-ccb1f18e"]]);
const _hoisted_1$n = {
  "data-cy": "test-row",
  class: "flex flex-row font-normal h-12 text-base text-gray-700 items-center non-italic"
};
const _hoisted_2$g = ["data-cy"];
const _hoisted_3$a = { class: "sr-only" };
const _hoisted_4$5 = { "data-cy": "tooltip-content" };
const _hoisted_5$7 = {
  key: 0,
  "data-cy": "debug-artifacts",
  class: "flex grow opacity-0 px-[18px] gap-[16px] justify-end test-row-artifacts"
};
const _hoisted_6$3 = ["data-cy"];
const _hoisted_7$3 = {
  key: 0,
  "data-cy": "debug-failed-test-groups",
  class: "divide-y rounded border-gray-100 border"
};
const _sfc_main$s = /* @__PURE__ */ defineComponent({
  __name: "DebugFailedTest",
  props: {
    failedTestsResult: null,
    groups: null,
    expandable: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const { t } = useI18n$1();
    const failedTestData = computed(() => {
      const runInstance = props.failedTestsResult[0].instance;
      const titleParts = props.failedTestsResult[0].titleParts;
      let isFirstMiddleAdded = false;
      const mappedTitleParts = titleParts.map((titlePart, index, parts) => {
        if (index === 0) {
          return {
            text: titlePart,
            type: "SHOW_FULL"
          };
        }
        if (index === parts.length - 1) {
          return [
            {
              text: titlePart.slice(0, titlePart.length - 15),
              type: "LAST-PART-START"
            },
            {
              text: titlePart.slice(titlePart.length - 15),
              type: "LAST-PART-END"
            }
          ];
        }
        if (index === parts.length - 2 && parts.length >= 3) {
          return {
            text: titlePart,
            type: "SHOW_FULL"
          };
        }
        if (!isFirstMiddleAdded && parts.length > 3) {
          isFirstMiddleAdded = true;
          return [
            {
              text: "...",
              type: "ELLIPSIS"
            },
            {
              text: titlePart,
              type: "MIDDLE"
            }
          ];
        }
        return { text: titlePart, type: "MIDDLE" };
      }).flat();
      const debugArtifacts = getDebugArtifacts(runInstance, t);
      return {
        debugArtifacts,
        mappedTitleParts
      };
    });
    const middlePartText = computed(() => {
      return failedTestData.value.mappedTitleParts.filter((item) => item.type === "MIDDLE").map((item) => item.text).join(" > ");
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1$n, [
          createVNode(unref(ws), {
            size: "16",
            status: "failed",
            "data-cy": "failed-icon",
            class: "min-w-[16px] isolate"
          }),
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(failedTestData).mappedTitleParts, ({ text, type }, index) => {
            return openBlock(), createElementBlock(Fragment, {
              key: `${text}-${index}`
            }, [
              index !== 0 && type !== "LAST-PART-END" ? (openBlock(), createBlock(unref(x1), {
                key: 0,
                "data-cy": `titleParts-${index}-chevron`,
                size: "8",
                "stroke-color": "gray-200",
                "fill-color": "gray-200",
                class: normalizeClass(["shrink-0", type === "MIDDLE" ? "hidden lg:block" : type === "ELLIPSIS" ? "lg:hidden" : ""])
              }, null, 8, ["data-cy", "class"])) : createCommentVNode("", true),
              createBaseVNode("span", {
                "data-cy": `titleParts-${index}-title`,
                class: normalizeClass(type === "ELLIPSIS" ? "px-2.5 shrink-0 lg:hidden" : type === "MIDDLE" ? "truncate px-2.5 hidden lg:block" : type === "LAST-PART-END" ? "shrink-0 whitespace-pre" : type === "LAST-PART-START" ? "pl-2.5 truncate whitespace-pre" : "px-2.5 truncate")
              }, [
                type === "ELLIPSIS" ? (openBlock(), createBlock(_sfc_main$J, { key: 0 }, {
                  popper: withCtx(() => [
                    createBaseVNode("span", _hoisted_4$5, toDisplayString(unref(middlePartText)), 1)
                  ]),
                  default: withCtx(() => [
                    createBaseVNode("button", null, toDisplayString(text), 1),
                    createBaseVNode("span", _hoisted_3$a, toDisplayString(unref(middlePartText)), 1)
                  ]),
                  _: 2
                }, 1024)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                  createTextVNode(toDisplayString(text), 1)
                ], 64))
              ], 10, _hoisted_2$g)
            ], 64);
          }), 128)),
          !props.expandable ? (openBlock(), createElementBlock("div", _hoisted_5$7, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(failedTestData).debugArtifacts, (result, i) => {
              return openBlock(), createElementBlock("div", {
                key: i,
                "data-cy": `artifact--${result.icon}`
              }, [
                createVNode(_sfc_main$w, {
                  icon: result.icon,
                  "popper-text": result.text,
                  url: result.url
                }, null, 8, ["icon", "popper-text", "url"])
              ], 8, _hoisted_6$3);
            }), 128))
          ])) : createCommentVNode("", true)
        ]),
        createVNode(TransitionQuickFade, null, {
          default: withCtx(() => [
            props.expandable ? (openBlock(), createElementBlock("div", _hoisted_7$3, [
              createVNode(GroupedDebugFailedTestVue, {
                "failed-tests": props.failedTestsResult,
                groups: props.groups
              }, null, 8, ["failed-tests", "groups"])
            ])) : createCommentVNode("", true)
          ]),
          _: 1
        })
      ], 64);
    };
  }
});
const DebugFailedTest = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["__scopeId", "data-v-c3d44afe"]]);
function useDurationFormat(value) {
  return computed(() => {
    const duration = unref(value);
    if (duration >= 1e3) {
      return dayjs.duration(duration).format("HH:mm:ss").replace(/^0+:/, "");
    }
    return `${duration}ms`;
  });
}
const _hoisted_1$m = {
  "data-cy": "debug-spec-col",
  class: "flex flex-col grid gap-[24px] self-stretch"
};
const _hoisted_2$f = {
  "data-cy": "debug-spec-item",
  class: "rounded flex flex-col border-gray-100 border-t-[1px] border-x-[1px] w-full overflow-hidden items-start box-border"
};
const _hoisted_3$9 = {
  "data-cy": "debug-spec-header",
  class: "rounded-t flex flex-row bg-gray-50 border-b-[1px] border-b-gray-100 w-full py-[12px] items-center"
};
const _hoisted_4$4 = {
  "data-cy": "spec-contents",
  class: "flex w-full grid px-[18px] gap-y-[8px] items-center"
};
const _hoisted_5$6 = { class: "grow flex w-full gap-x-2 truncate items-center" };
const _hoisted_6$2 = ["aria-label", "onClick"];
const _hoisted_7$2 = {
  class: "text-center text-sm max-w-[240px]",
  "data-cy": "open-in-ide-tooltip"
};
const _hoisted_8$2 = ["aria-label"];
const _hoisted_9$1 = {
  class: "text-center text-sm max-w-[240px]",
  "data-cy": "open-in-ide-disabled-tooltip"
};
const _hoisted_10$1 = {
  "data-cy": "spec-path",
  class: "grow text-base non-italic truncate"
};
const _hoisted_11$2 = { class: "font-normal text-gray-600" };
const _hoisted_12$1 = { class: "inline-flex items-center" };
const _hoisted_13$1 = { "data-cy": "spec-header-metadata" };
const _hoisted_14$1 = { class: "mr-[16px]" };
const _hoisted_15$1 = {
  class: "flex flex-col text-sm max-w-[350px] items-center",
  "data-cy": "run-all-failures-tooltip"
};
const _hoisted_16$1 = { class: "text-center" };
const _sfc_main$r = /* @__PURE__ */ defineComponent({
  __name: "DebugSpec",
  props: {
    spec: null,
    testResults: null,
    groups: null,
    testingType: null,
    foundLocally: { type: Boolean },
    matchesCurrentTestingType: { type: Boolean }
  },
  emits: ["switchTestingType"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const { t } = useI18n$1();
    const durationFormatter = (val) => {
      return unref(useDurationFormat(val ?? 0));
    };
    const debugResultsCalc = (value, formatter) => {
      if (!value) {
        return "";
      }
      const formattedMin = formatter ? formatter(value.min) : value.min;
      const formattedMax = formatter ? formatter(value.max) : value.max;
      if (formattedMin === formattedMax) {
        return formattedMin;
      }
      return `${formattedMin}-${formattedMax}`;
    };
    const specData = computed(() => {
      return {
        path: props.spec.path,
        fileName: props.spec.fileName,
        fileExtension: props.spec.fileExtension,
        failedTests: props.testResults,
        testsPassed: debugResultsCalc(props.spec.testsPassed),
        testsFailed: debugResultsCalc(props.spec.testsFailed),
        testsPending: debugResultsCalc(props.spec.testsPending),
        specDuration: debugResultsCalc(props.spec.specDuration, durationFormatter),
        groups: props.groups,
        testingType: props.testingType,
        fullPath: props.spec.fullPath
      };
    });
    const groupsPerTest = computed(() => {
      return Object.keys(props.testResults).reduce((acc, currThumbprint) => {
        acc[currThumbprint] = props.testResults[currThumbprint].map((test) => {
          var _a;
          return props.groups[((_a = test.instance) == null ? void 0 : _a.groupId) || ""];
        });
        return acc;
      }, {});
    });
    const runAllFailuresState = computed(() => {
      if (!props.matchesCurrentTestingType) {
        return {
          disabled: true,
          message: t("debugPage.runFailures.switchTestingTypeInfo", { n: Object.keys(props.testResults).length, testingType: props.testingType }),
          cta: {
            message: t("debugPage.runFailures.switchTestingTypeAction", { testingType: props.testingType }),
            action: () => emits("switchTestingType", props.testingType)
          }
        };
      }
      if (!props.foundLocally) {
        return {
          disabled: true,
          message: t("debugPage.runFailures.notFoundLocally")
        };
      }
      return { disabled: false };
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$m, [
        createBaseVNode("div", _hoisted_2$f, [
          createBaseVNode("div", _hoisted_3$9, [
            createBaseVNode("div", _hoisted_4$4, [
              createBaseVNode("div", _hoisted_5$6, [
                __props.foundLocally ? (openBlock(), createBlock(_sfc_main$J, {
                  key: 0,
                  placement: "bottom",
                  color: "dark",
                  distance: 8
                }, {
                  popper: withCtx(() => [
                    createBaseVNode("div", _hoisted_7$2, toDisplayString(unref(t)("debugPage.openFile.openInIDE")), 1)
                  ]),
                  default: withCtx(() => [
                    createVNode(_sfc_main$K, {
                      "file-path": unref(specData).fullPath
                    }, {
                      default: withCtx(({ onClick }) => [
                        createBaseVNode("button", {
                          class: "rounded-md border-[1px] border-gray-100 p-[4px] group hocus:border-indigo-200",
                          "aria-label": unref(t)("debugPage.openFile.openInIDE"),
                          onClick
                        }, [
                          createVNode(unref(a0), {
                            "stroke-color": "gray-500",
                            "fill-color": "gray-100",
                            "hocus-stroke-color": "indigo-400",
                            "hocus-fill-color": "indigo-200",
                            size: "16",
                            "interactive-colors-on-group": "",
                            class: "min-w-[16px]"
                          })
                        ], 8, _hoisted_6$2)
                      ]),
                      _: 1
                    }, 8, ["file-path"])
                  ]),
                  _: 1
                })) : (openBlock(), createBlock(_sfc_main$J, {
                  key: 1,
                  placement: "bottom",
                  color: "dark",
                  distance: 8
                }, {
                  popper: withCtx(() => [
                    createBaseVNode("div", _hoisted_9$1, toDisplayString(unref(t)("debugPage.openFile.notFoundLocally")), 1)
                  ]),
                  default: withCtx(() => [
                    createBaseVNode("button", {
                      "aria-disabled": "",
                      "aria-label": unref(t)("debugPage.openFile.notFoundLocally"),
                      class: "rounded-md border-[1px] border-gray-100 p-[4px]"
                    }, [
                      createVNode(unref(Y1), {
                        "stroke-color": "gray-500",
                        "fill-color": "gray-100",
                        size: "16",
                        class: "min-w-[16px]"
                      })
                    ], 8, _hoisted_8$2)
                  ]),
                  _: 1
                })),
                createBaseVNode("div", _hoisted_10$1, [
                  createBaseVNode("span", _hoisted_11$2, toDisplayString(unref(specData).path), 1),
                  createBaseVNode("span", _hoisted_12$1, [
                    createVNode(_sfc_main$L, {
                      "spec-file-name": unref(specData).fileName,
                      "spec-file-extension": unref(specData).fileExtension
                    }, null, 8, ["spec-file-name", "spec-file-extension"])
                  ])
                ])
              ]),
              createBaseVNode("div", _hoisted_13$1, [
                createVNode(TransitionQuickFade, { mode: "out-in" }, {
                  default: withCtx(() => [
                    Object.keys(unref(specData).groups).length === 1 ? (openBlock(), createBlock(StatsMetaData, {
                      key: "single",
                      order: ["DURATION", "OS", "BROWSER", "TESTING"],
                      "spec-duration": unref(specData).specDuration,
                      testing: unref(specData).testingType,
                      groups: Object.values(unref(specData).groups)
                    }, {
                      prefix: withCtx(() => [
                        createVNode(_sfc_main$M, {
                          "data-cy": "debugHeader-results",
                          "total-failed": unref(specData).testsFailed,
                          "total-passed": unref(specData).testsPassed,
                          "total-pending": unref(specData).testsPending,
                          order: ["FAILED", "PASSED", "PENDING"]
                        }, null, 8, ["total-failed", "total-passed", "total-pending"])
                      ]),
                      _: 1
                    }, 8, ["spec-duration", "testing", "groups"])) : Object.keys(unref(specData).groups).length > 1 ? (openBlock(), createBlock(StatsMetaData, {
                      key: "multiple",
                      order: ["DURATION", "GROUPS", "G_OS", "G_BROWSERS", "TESTING"],
                      "spec-duration": unref(specData).specDuration,
                      testing: unref(specData).testingType,
                      groups: Object.values(unref(specData).groups)
                    }, {
                      prefix: withCtx(() => [
                        createVNode(_sfc_main$M, {
                          "data-cy": "debugHeader-results",
                          "total-failed": unref(specData).testsFailed,
                          "total-passed": unref(specData).testsPassed,
                          "total-pending": unref(specData).testsPending,
                          order: ["FAILED", "PASSED", "PENDING"]
                        }, null, 8, ["total-failed", "total-passed", "total-pending"])
                      ]),
                      _: 1
                    }, 8, ["spec-duration", "testing", "groups"])) : createCommentVNode("", true)
                  ]),
                  _: 1
                })
              ])
            ]),
            createBaseVNode("div", _hoisted_14$1, [
              createVNode(_sfc_main$J, {
                placement: "bottom",
                color: "dark",
                "is-interactive": !!unref(runAllFailuresState).cta,
                disabled: !unref(runAllFailuresState).disabled,
                distance: 8
              }, createSlots({
                default: withCtx(() => [
                  createVNode(_sfc_main$N, {
                    "data-cy": "run-failures",
                    variant: "white",
                    class: "gap-x-[10px] inline-flex whitespace-nowrap justify-center items-center isolate",
                    disabled: unref(runAllFailuresState).disabled,
                    to: { path: "/specs/runner", query: { file: unref(posixify)(unref(specData).fullPath), mode: "debug" } }
                  }, {
                    prefix: withCtx(() => [
                      createVNode(unref(Y), {
                        "data-cy": "icon-refresh",
                        "stroke-color": "indigo-500"
                      })
                    ]),
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(t)("debugPage.runFailures.btn")), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled", "to"])
                ]),
                _: 2
              }, [
                unref(runAllFailuresState).disabled ? {
                  name: "popper",
                  fn: withCtx(() => {
                    var _a;
                    return [
                      createBaseVNode("div", _hoisted_15$1, [
                        createBaseVNode("span", _hoisted_16$1, toDisplayString(unref(runAllFailuresState).message), 1),
                        unref(runAllFailuresState).cta ? (openBlock(), createBlock(_sfc_main$N, {
                          key: 0,
                          variant: "text",
                          class: "rounded-md font-medium bg-gray-800 my-[12px]",
                          onClick: (_a = unref(runAllFailuresState).cta) == null ? void 0 : _a.action
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref(runAllFailuresState).cta.message), 1)
                          ]),
                          _: 1
                        }, 8, ["onClick"])) : createCommentVNode("", true)
                      ])
                    ];
                  }),
                  key: "0"
                } : void 0
              ]), 1032, ["is-interactive", "disabled"])
            ])
          ]),
          createVNode(TransitionGroupQuickFade, null, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(Object.keys(unref(specData).failedTests), (thumbprint) => {
                return openBlock(), createElementBlock("div", {
                  key: `test-${thumbprint}`,
                  "data-cy": "test-group",
                  class: normalizeClass(["flex flex-col flex-start border-b-gray-100 border-b-[1px] w-full pr-[16px] pl-[16px] justify-center", Object.keys(unref(specData).groups).length > 1 ? "pb-[16px]" : "hover:bg-gray-50 focus-within:bg-gray-50"])
                }, [
                  unref(specData).failedTests[thumbprint].length >= 1 ? (openBlock(), createBlock(DebugFailedTest, {
                    key: 0,
                    "failed-tests-result": unref(specData).failedTests[thumbprint],
                    groups: unref(groupsPerTest)[thumbprint],
                    expandable: Object.keys(unref(specData).groups).length > 1
                  }, null, 8, ["failed-tests-result", "groups", "expandable"])) : createCommentVNode("", true)
                ], 2);
              }), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
});
const _hoisted_1$l = {
  "data-cy": "debug-spec-list",
  class: "flex flex-col gap-[24px] self-stretch"
};
const _sfc_main$q = /* @__PURE__ */ defineComponent({
  __name: "DebugSpecList",
  props: {
    specs: null
  },
  setup(__props) {
    const props = __props;
    gql`
fragment DebugSpecListSpec on CloudSpecRun {
  id
  path
  basename
  extension
  shortPath
  groupIds
  specDuration {
    min
    max
  }
  status
  testsPassed {
    min
    max
  }
  testsFailed {
    min
    max
  }
  testsPending {
    min
    max
  }
}
`;
    gql`
fragment DebugSpecListTests on CloudTestResult {
  id
  specId
  title(depth: 2)
  titleParts
  duration
  isFlaky
  testUrl
  thumbprint
  instance {
    id
    status
    groupId
    totalPassed
    totalFailed
    totalPending
    totalSkipped
    totalRunning
    hasStdout
    stdoutUrl
    hasScreenshots
    screenshotsUrl
    hasVideo
    videoUrl
    hasReplay
    replayUrl
  }
}
`;
    gql`
fragment DebugSpecListGroups on CloudRunGroup {
  id
  testingType
  groupName
  os {
    id
    name
    nameWithVersion
  }
  browser {
    id
    formattedName
    formattedNameWithVersion
  }
}
`;
    gql`
  mutation SetTestsForDebug($testsBySpec: [TestsBySpecInput!]!) {
    setTestsForRun (testsBySpec: $testsBySpec)
  }
`;
    const switchTestingTypeMutation = useMutation(SwitchTestingTypeAndRelaunchDocument);
    const setTestsForDebug = useMutation(SetTestsForDebugDocument);
    const specs = computed(() => {
      return props.specs.map((specItem) => {
        const fileName = specItem.spec.basename;
        const fileExtension = specItem.spec.extension;
        const fileNameWithoutExtension = fileName.replace(fileExtension, "");
        return {
          spec: {
            ...specItem.spec,
            id: specItem.spec.id,
            path: specItem.spec.path.replace(fileNameWithoutExtension + fileExtension, ""),
            fileName: fileNameWithoutExtension,
            fileExtension,
            fullPath: specItem.spec.path
          },
          tests: specItem.tests,
          groups: specItem.groups,
          testingType: specItem.testingType,
          foundLocally: specItem.foundLocally,
          matchesCurrentTestingType: specItem.matchesCurrentTestingType
        };
      });
    });
    function switchTestingType(testingType) {
      switchTestingTypeMutation.executeMutation({ testingType });
    }
    watchEffect(() => {
      const testsNamesBySpec = props.specs.map((specItem) => {
        return {
          specPath: specItem.spec.path,
          tests: Object.values(specItem.tests).flat().map((test) => {
            return test.titleParts.join(" ");
          })
        };
      });
      setTestsForDebug.executeMutation({ testsBySpec: testsNamesBySpec });
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$l, [
        createVNode(TransitionGroupQuickFade, null, {
          default: withCtx(() => [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(specs), (spec) => {
              return openBlock(), createBlock(_sfc_main$r, {
                key: spec.spec.id,
                spec: spec.spec,
                "test-results": spec.tests,
                "testing-type": spec.testingType,
                groups: spec.groups,
                "found-locally": spec.foundLocally,
                "matches-current-testing-type": spec.matchesCurrentTestingType,
                onSwitchTestingType: switchTestingType
              }, null, 8, ["spec", "test-results", "testing-type", "groups", "found-locally", "matches-current-testing-type"]);
            }), 128))
          ]),
          _: 1
        })
      ]);
    };
  }
});
const _hoisted_1$k = { class: "flex items-center" };
const _hoisted_2$e = /* @__PURE__ */ createBaseVNode("div", { class: "rounded-full font-semibold bg-orange-500 h-[3px] mx-[10px] w-[3px]" }, null, -1);
const _hoisted_3$8 = { class: "flex items-center" };
const _hoisted_4$3 = /* @__PURE__ */ createBaseVNode("div", { class: "rounded-full font-semibold bg-orange-500 h-[3px] mx-[10px] w-[3px]" }, null, -1);
const _sfc_main$p = /* @__PURE__ */ defineComponent({
  __name: "DebugCancelledAlert",
  props: {
    totalSpecs: null,
    totalSkippedSpecs: null,
    cancellation: null
  },
  setup(__props) {
    const { t } = useI18n$1();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$O, {
        title: unref(t)("debugPage.manuallyCancelled"),
        status: "warning",
        icon: unref(ErrorOutlineIcon),
        class: "flex flex-col mb-[24px] w-full"
      }, {
        default: withCtx(() => {
          var _a;
          return [
            createBaseVNode("div", _hoisted_1$k, [
              createBaseVNode("div", null, toDisplayString(unref(t)("debugPage.specsSkipped", { n: __props.totalSpecs, totalSkippedSpecs: __props.totalSkippedSpecs })), 1),
              ((_a = __props.cancellation.cancelledBy) == null ? void 0 : _a.email) && __props.cancellation.cancelledBy.fullName ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                _hoisted_2$e,
                createBaseVNode("div", _hoisted_3$8, [
                  createVNode(_sfc_main$I, {
                    email: __props.cancellation.cancelledBy.email,
                    class: "h-[20px] mr-[7px] w-[20px]",
                    "data-cy": "cancelled-by-user-avatar"
                  }, null, 8, ["email"]),
                  createBaseVNode("div", null, toDisplayString(__props.cancellation.cancelledBy.fullName), 1)
                ])
              ], 64)) : createCommentVNode("", true),
              __props.cancellation.cancelledAt ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                _hoisted_4$3,
                createBaseVNode("div", null, toDisplayString(unref(dayjs)(__props.cancellation.cancelledAt).local().format("MMM D, YYYY h:mm A")), 1)
              ], 64)) : createCommentVNode("", true)
            ])
          ];
        }),
        _: 1
      }, 8, ["title", "icon"]);
    };
  }
});
const _hoisted_1$j = {
  style: { "min-width": "48px", "min-height": "48px" },
  width: "48",
  height: "48",
  viewBox: "0 0 48 48",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$d = /* @__PURE__ */ createStaticVNode('<path d="M40 8H8C6.34315 8 5 9.34315 5 11V16H43V11C43 9.34315 41.6569 8 40 8Z" fill="#D0D2E0" class="icon-light"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M8 8C6.34315 8 5 9.34315 5 11V16H43V11C43 9.34315 41.6569 8 40 8H8Z" fill="#D0D2E0" class="icon-light"></path><path d="M19 30L14 28L9 31V36H38C38.5523 36 39 35.5523 39 35V23L34 24L29 27L24 25L19 30Z" fill="#D0D2E0" class="icon-light"></path><path d="M5 16H4C4 16.5523 4.44772 17 5 17V16ZM43 16V17C43.5523 17 44 16.5523 44 16H43ZM19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13V11ZM39 13C39.5523 13 40 12.5523 40 12C40 11.4477 39.5523 11 39 11V13ZM14 28L14.3714 27.0715C14.0812 26.9555 13.7535 26.9817 13.4855 27.1425L14 28ZM19 30L18.6286 30.9285C19 31.077 19.4242 30.99 19.7071 30.7071L19 30ZM24 25L24.3714 24.0715C24 23.923 23.5758 24.01 23.2929 24.2929L24 25ZM29 27L28.6286 27.9285C28.9188 28.0445 29.2465 28.0183 29.5145 27.8575L29 27ZM9 31L8.4855 30.1425C8.1843 30.3232 8 30.6487 8 31H9ZM34 24L33.8039 23.0194C33.6915 23.0419 33.5838 23.0835 33.4855 23.1425L34 24ZM9 36H8C8 36.5523 8.44772 37 9 37V36ZM8 9H40V7H8V9ZM42 11V37H44V11H42ZM6 37V11H4V37H6ZM5 17H43V15H5V17ZM19 13H39V11H19V13ZM8 39C6.89543 39 6 38.1046 6 37H4C4 39.2091 5.79086 41 8 41V39ZM42 37C42 38.1046 41.1046 39 40 39V41C42.2091 41 44 39.2091 44 37H42ZM40 9C41.1046 9 42 9.89543 42 11H44C44 8.79086 42.2091 7 40 7V9ZM8 7C5.79086 7 4 8.79086 4 11H6C6 9.89543 6.89543 9 8 9V7ZM4 11V16H6V11H4ZM44 16V11H42V16H44ZM38 19H10V21H38V19ZM13.6286 28.9285L18.6286 30.9285L19.3714 29.0715L14.3714 27.0715L13.6286 28.9285ZM19.7071 30.7071L24.7071 25.7071L23.2929 24.2929L18.2929 29.2929L19.7071 30.7071ZM23.6286 25.9285L28.6286 27.9285L29.3714 26.0715L24.3714 24.0715L23.6286 25.9285ZM40 35V23H38V35H40ZM40 23V21H38V23H40ZM40 39H24V41H40V39ZM24 39H16V41H24V39ZM16 39H8V41H16V39ZM9.5145 31.8575L14.5145 28.8575L13.4855 27.1425L8.4855 30.1425L9.5145 31.8575ZM29.5145 27.8575L34.5145 24.8575L33.4855 23.1425L28.4855 26.1425L29.5145 27.8575ZM34.1961 24.9806L39.1961 23.9806L38.8039 22.0194L33.8039 23.0194L34.1961 24.9806ZM38 35H9V37H38V35ZM10 36V21H8V36H10ZM8 31V36H10V31H8ZM38 21H40C40 19.8954 39.1046 19 38 19V21ZM38 35V37C39.1046 37 40 36.1046 40 35H38ZM10 19C8.89543 19 8 19.8954 8 21H10H10V19Z" fill="#1B1E2E" class="icon-dark"></path><path d="M10 12C10 12.5523 9.55228 13 9 13C8.44772 13 8 12.5523 8 12C8 11.4477 8.44772 11 9 11C9.55228 11 10 11.4477 10 12Z" fill="#1B1E2E" class="icon-dark"></path><path d="M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12Z" fill="#1B1E2E" class="icon-dark"></path><path d="M16 12C16 12.5523 15.5523 13 15 13C14.4477 13 14 12.5523 14 12C14 11.4477 14.4477 11 15 11C15.5523 11 16 11.4477 16 12Z" fill="#1B1E2E" class="icon-dark"></path><path d="M37 37C37 33.6863 34.3137 31 31 31C27.6863 31 25 33.6863 25 37C25 40.3137 27.6863 43 31 43C34.3137 43 37 40.3137 37 37Z" fill="#69D3A7"></path><path d="M28.2929 38.2071C27.9024 37.8166 27.9024 37.1834 28.2929 36.7929C28.6834 36.4024 29.3166 36.4024 29.7071 36.7929L28.2929 38.2071ZM30.5 39L31.3137 39.5812C31.1429 39.8204 30.8754 39.9723 30.5825 39.9966C30.2895 40.0208 30.0007 39.915 29.7929 39.7071L30.5 39ZM32.1863 34.9188C32.5073 34.4693 33.1318 34.3653 33.5812 34.6863C34.0307 35.0073 34.1347 35.6318 33.8137 36.0812L32.1863 34.9188ZM36 37C36 34.2386 33.7614 32 31 32V30C34.866 30 38 33.134 38 37H36ZM31 32C28.2386 32 26 34.2386 26 37H24C24 33.134 27.134 30 31 30V32ZM26 37C26 39.7614 28.2386 42 31 42V44C27.134 44 24 40.866 24 37H26ZM31 42C33.7614 42 36 39.7614 36 37H38C38 40.866 34.866 44 31 44V42ZM29.7071 36.7929L31.2071 38.2929L29.7929 39.7071L28.2929 38.2071L29.7071 36.7929ZM29.6863 38.4188L32.1863 34.9188L33.8137 36.0812L31.3137 39.5812L29.6863 38.4188Z" fill="#00814D"></path>', 9);
const _hoisted_11$1 = [
  _hoisted_2$d
];
function render$3(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$j, _hoisted_11$1);
}
const DashboardCheckmark = { name: "cy-dashboard-checkmark_x48", render: render$3 };
const _hoisted_1$i = {
  class: "flex flex-col items-center",
  "data-cy": "debug-passed"
};
const _hoisted_2$c = { class: "font-medium mt-[24px] text-gray-900" };
const _hoisted_3$7 = { class: "mt-[5px] text-gray-700" };
const _sfc_main$o = /* @__PURE__ */ defineComponent({
  __name: "DebugPassed",
  setup(__props) {
    const { t } = useI18n$1();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$i, [
        createVNode(unref(DashboardCheckmark), { class: "icon-dark-gray-500" }),
        createBaseVNode("span", _hoisted_2$c, toDisplayString(unref(t)("debugPage.wellDone")), 1),
        createBaseVNode("span", _hoisted_3$7, toDisplayString(unref(t)("debugPage.allYourTestsPassed")), 1)
      ]);
    };
  }
});
const _hoisted_1$h = { class: "ml-[5px]" };
const _hoisted_2$b = { class: "mt-[20px]" };
const _sfc_main$n = /* @__PURE__ */ defineComponent({
  __name: "DebugErrored",
  props: {
    errors: null,
    totalSpecs: null,
    totalSkippedSpecs: null
  },
  setup(__props) {
    const { t } = useI18n$1();
    dayjs.extend(utc);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$O, {
        title: unref(t)("debugPage.incomplete"),
        status: "warning",
        icon: unref(ErrorOutlineIcon),
        class: "flex flex-col mb-[24px] w-full"
      }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1$h, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(__props.errors, (error, index) => {
              return openBlock(), createElementBlock("ul", {
                key: index,
                class: "list-disc ml-[25px]"
              }, [
                createBaseVNode("li", null, [
                  createBaseVNode("pre", null, toDisplayString(error), 1)
                ])
              ]);
            }), 128))
          ]),
          createBaseVNode("div", _hoisted_2$b, toDisplayString(unref(t)("debugPage.specsSkipped", { n: __props.totalSpecs, totalSkippedSpecs: __props.totalSkippedSpecs })), 1)
        ]),
        _: 1
      }, 8, ["title", "icon"]);
    };
  }
});
const _sfc_main$m = /* @__PURE__ */ defineComponent({
  __name: "DebugNoTests",
  setup(__props) {
    const { t } = useI18n$1();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$O, {
        title: unref(t)("debugPage.incomplete"),
        status: "warning",
        icon: unref(ErrorOutlineIcon),
        class: "flex flex-col mb-[24px] w-full"
      }, {
        default: withCtx(() => [
          createTextVNode(toDisplayString(unref(t)("debugPage.runHasNoTests")), 1)
        ]),
        _: 1
      }, 8, ["title", "icon"]);
    };
  }
});
const _hoisted_1$g = { key: 0 };
const _hoisted_2$a = { class: "mt-[20px]" };
const _sfc_main$l = /* @__PURE__ */ defineComponent({
  __name: "DebugTimedout",
  props: {
    ci: null,
    totalSpecs: null,
    totalSkippedSpecs: null
  },
  setup(__props) {
    const props = __props;
    const { t } = useI18n$1();
    const hasCiInfo = computed(() => {
      var _a;
      return !!(((_a = props.ci) == null ? void 0 : _a.url) && props.ci.formattedProvider && props.ci.ciBuildNumberFormatted);
    });
    return (_ctx, _cache) => {
      const _component_i18n_t = resolveComponent("i18n-t");
      return openBlock(), createBlock(_sfc_main$O, {
        title: unref(t)("debugPage.incomplete"),
        status: "warning",
        icon: unref(ErrorOutlineIcon),
        class: "flex flex-col mb-[24px] w-full"
      }, {
        default: withCtx(() => [
          createTextVNode(toDisplayString(unref(t)("debugPage.theRunStartedButNeverCompleted")) + " ", 1),
          __props.ci && unref(hasCiInfo) ? (openBlock(), createElementBlock("span", _hoisted_1$g, [
            createVNode(_component_i18n_t, {
              scope: "global",
              keypath: "debugPage.checkYourCiLogs"
            }, {
              default: withCtx(() => [
                createVNode(_sfc_main$F, {
                  href: __props.ci.url || "#"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(`${__props.ci.formattedProvider} #${__props.ci.ciBuildNumberFormatted}`), 1)
                  ]),
                  _: 1
                }, 8, ["href"])
              ]),
              _: 1
            })
          ])) : createCommentVNode("", true),
          createTextVNode(" " + toDisplayString(unref(t)("debugPage.archiveThisRun")) + " ", 1),
          createBaseVNode("div", _hoisted_2$a, toDisplayString(unref(t)("debugPage.specsSkipped", { n: __props.totalSpecs, totalSkippedSpecs: __props.totalSkippedSpecs })), 1)
        ]),
        _: 1
      }, 8, ["title", "icon"]);
    };
  }
});
const _hoisted_1$f = { class: "flex flex-col max-w-[440px] items-center" };
const _hoisted_2$9 = { class: "font-medium mt-[24px] text-lg text-gray-900" };
const _hoisted_3$6 = { class: "mt-[10px] text-center text-gray-600" };
const _sfc_main$k = /* @__PURE__ */ defineComponent({
  __name: "DebugOverLimit",
  props: {
    overLimitReasons: null,
    overLimitActionType: null,
    overLimitActionUrl: null,
    runAgeDays: null
  },
  setup(__props) {
    const props = __props;
    gql`
fragment DebugReasonsRunIsHidden on CloudRun {
  id
  reasonsRunIsHidden {
    __typename
    ... on DataRetentionLimitExceeded {
      dataRetentionDays
    }
    ... on UsageLimitExceeded {
      monthlyTests
    }
  }
}
`;
    const { t } = useI18n$1();
    const actionUrl = computed(() => {
      return getUrlWithParams({ url: props.overLimitActionUrl, params: { utmMedium: DEBUG_TAB_MEDIUM, utmSource: getUtmSource() } });
    });
    const overLimitReason = computed(() => {
      return props.overLimitReasons.find(isUsageLimit) || props.overLimitReasons.find(isRetentionLimit) || null;
    });
    const isPlanAdmin = computed(() => props.overLimitActionType === "UPGRADE");
    const iconClasses = computed(() => {
      return [
        "icon-dark-gray-500",
        isRetentionLimit(overLimitReason.value) ? "icon-dark-secondary-orange-400 icon-light-secondary-orange-200" : "icon-dark-secondary-jade-400 icon-light-secondary-jade-200"
      ];
    });
    const copy = computed(() => {
      var _a;
      if (isRetentionLimit(overLimitReason.value)) {
        return {
          title: t("debugPage.overLimit.retentionExceededTitle"),
          message: t("debugPage.overLimit.retentionExceededMessage", { limitDays: overLimitReason.value.dataRetentionDays, runAgeDays: props.runAgeDays }),
          actionLabel: isPlanAdmin.value ? t("debugPage.overLimit.upgradePlan") : t("debugPage.overLimit.contactAdmin")
        };
      }
      const numberTests = ((_a = overLimitReason.value) == null ? void 0 : _a.monthlyTests) || 0;
      return {
        title: t("debugPage.overLimit.usageExceededTitle"),
        message: isPlanAdmin.value ? t("debugPage.overLimit.usageExceededAdminMessage", { numberTests }) : t("debugPage.overLimit.usageExceededUserMessage", { numberTests }),
        actionLabel: isPlanAdmin.value ? t("debugPage.overLimit.upgradePlan") : t("debugPage.overLimit.contactAdmin")
      };
    });
    function isUsageLimit(reason) {
      return (reason == null ? void 0 : reason.__typename) === "UsageLimitExceeded";
    }
    function isRetentionLimit(reason) {
      return (reason == null ? void 0 : reason.__typename) === "DataRetentionLimitExceeded";
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$f, [
        createVNode(unref(LockedProject), {
          class: normalizeClass(unref(iconClasses))
        }, null, 8, ["class"]),
        createBaseVNode("span", _hoisted_2$9, toDisplayString(unref(copy).title), 1),
        createBaseVNode("span", _hoisted_3$6, toDisplayString(unref(copy).message), 1),
        createVNode(_sfc_main$N, {
          size: "lg",
          class: "mt-[25px]",
          href: unref(actionUrl)
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(unref(copy).actionLabel), 1)
          ]),
          _: 1
        }, 8, ["href"])
      ]);
    };
  }
});
const _hoisted_1$e = {
  key: 4,
  class: "flex flex-col grow w-full p-12 justify-center items-center align-middle"
};
const _sfc_main$j = /* @__PURE__ */ defineComponent({
  __name: "DebugPageDetails",
  props: {
    status: null,
    cancellation: null,
    isHidden: { type: Boolean },
    reasonsRunIsHidden: null,
    overLimitActionType: null,
    overLimitActionUrl: null,
    specs: null,
    ci: null,
    errors: null,
    runAgeDays: null
  },
  setup(__props) {
    const props = __props;
    gql`
fragment DebugPageDetails_cloudCiBuildInfo on CloudCiBuildInfo {
  id
  ciBuildNumberFormatted
  formattedProvider
  url
}
`;
    const totalSkippedSpecs = computed(() => {
      return props.specs.filter((spec) => spec.status === "UNCLAIMED" || spec.status === "RUNNING").length;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        __props.status === "CANCELLED" ? (openBlock(), createBlock(_sfc_main$p, {
          key: 0,
          "total-specs": __props.specs.length,
          "total-skipped-specs": unref(totalSkippedSpecs),
          cancellation: __props.cancellation
        }, null, 8, ["total-specs", "total-skipped-specs", "cancellation"])) : __props.status === "ERRORED" ? (openBlock(), createBlock(_sfc_main$n, {
          key: 1,
          errors: __props.errors,
          "total-specs": __props.specs.length,
          "total-skipped-specs": unref(totalSkippedSpecs)
        }, null, 8, ["errors", "total-specs", "total-skipped-specs"])) : __props.status === "NOTESTS" ? (openBlock(), createBlock(_sfc_main$m, { key: 2 })) : __props.status === "TIMEDOUT" ? (openBlock(), createBlock(_sfc_main$l, {
          key: 3,
          "total-specs": __props.specs.length,
          "total-skipped-specs": unref(totalSkippedSpecs),
          ci: __props.ci
        }, null, 8, ["total-specs", "total-skipped-specs", "ci"])) : createCommentVNode("", true),
        ["PASSED", "OVERLIMIT"].includes(__props.status) || __props.isHidden ? (openBlock(), createElementBlock("div", _hoisted_1$e, [
          __props.status === "PASSED" && !__props.isHidden ? (openBlock(), createBlock(_sfc_main$o, { key: 0 })) : createCommentVNode("", true),
          __props.isHidden ? (openBlock(), createBlock(_sfc_main$k, {
            key: 1,
            "over-limit-reasons": __props.reasonsRunIsHidden,
            "over-limit-action-type": __props.overLimitActionType,
            "over-limit-action-url": __props.overLimitActionUrl,
            "run-age-days": __props.runAgeDays
          }, null, 8, ["over-limit-reasons", "over-limit-action-type", "over-limit-action-url", "run-age-days"])) : createCommentVNode("", true)
        ])) : createCommentVNode("", true)
      ], 64);
    };
  }
});
const _hoisted_1$d = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 468 284"
};
const _hoisted_2$8 = /* @__PURE__ */ createStaticVNode('<g clip-path="url(#a)"><rect width="468" height="284" fill="#fff" rx="6"></rect><path fill="#F3F4FA" d="M0 0h468v64H0z"></path><path fill="#E1E3ED" d="M18 38V26a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H19a1 1 0 0 1-1-1Z"></path><path stroke="#9095AD" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 32h3m-3-3h6m-6 6h5m3-10H19a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V26a1 1 0 0 0-1-1Z"></path><path fill="#747994" d="M44.25 38.156c-2.305 0-3.766-1.64-3.766-4.226v-.008c0-2.563 1.493-4.203 3.75-4.203 2.024 0 3.22 1.343 3.391 2.734l.008.063h-1.328l-.016-.063c-.203-.812-.86-1.531-2.055-1.531-1.414 0-2.359 1.172-2.359 3.015v.008c0 1.89.969 3.008 2.375 3.008 1.11 0 1.82-.625 2.047-1.531l.016-.063h1.335l-.007.055c-.22 1.547-1.555 2.742-3.391 2.742Zm5.43 2.578a4.5 4.5 0 0 1-.727-.062v-1.11c.117.024.274.047.438.047.859 0 1.336-.218 1.664-1.14l.164-.461-3.016-8.133h1.453l2.242 6.766h.032l2.25-6.766h1.43l-3.172 8.633c-.579 1.554-1.29 2.226-2.758 2.226Zm7 0V29.875h1.36v1.375h.03c.508-.945 1.414-1.531 2.578-1.531 2.079 0 3.454 1.656 3.454 4.218v.008c0 2.563-1.391 4.211-3.43 4.211-1.149 0-2.094-.578-2.602-1.515h-.03v4.093h-1.36Zm3.703-3.78c1.437 0 2.328-1.157 2.328-3.009v-.008c0-1.867-.89-3.015-2.328-3.015-1.375 0-2.352 1.195-2.352 3.015v.008c0 1.813.985 3.008 2.352 3.008ZM65.477 38v-8.125h1.359v1.375h.031c.274-.938.977-1.531 1.89-1.531.235 0 .438.039.548.054v1.32c-.11-.038-.399-.077-.727-.077-1.055 0-1.742.734-1.742 1.968V38h-1.36Zm7.89.156c-2.336 0-3.742-1.633-3.742-4.187v-.008c0-2.516 1.438-4.242 3.656-4.242 2.219 0 3.57 1.648 3.57 4.086v.5H71c.031 1.672.953 2.648 2.398 2.648 1.032 0 1.758-.516 1.993-1.21l.023-.071h1.336l-.016.078c-.265 1.344-1.593 2.406-3.367 2.406Zm-.094-7.234c-1.18 0-2.101.805-2.25 2.32h4.446c-.133-1.578-1.008-2.32-2.196-2.32Zm7.836 7.234c-1.914 0-3.07-.976-3.234-2.43l-.008-.07h1.36l.015.078c.164.813.766 1.29 1.875 1.29 1.102 0 1.758-.462 1.758-1.196v-.008c0-.586-.305-.914-1.227-1.14l-1.289-.313c-1.53-.367-2.273-1.078-2.273-2.25v-.008c0-1.398 1.227-2.39 2.984-2.39 1.782 0 2.914 1.039 3.016 2.398l.008.102h-1.297l-.008-.055c-.11-.789-.71-1.312-1.719-1.312-.984 0-1.593.476-1.593 1.195v.008c0 .554.367.937 1.265 1.156l1.29.312c1.64.399 2.234 1.047 2.234 2.204v.007c0 1.422-1.344 2.422-3.157 2.422Zm7.454 0c-1.915 0-3.07-.976-3.235-2.43l-.008-.07h1.36l.015.078c.164.813.766 1.29 1.875 1.29 1.102 0 1.758-.462 1.758-1.196v-.008c0-.586-.305-.914-1.226-1.14l-1.29-.313c-1.53-.367-2.273-1.078-2.273-2.25v-.008c0-1.398 1.227-2.39 2.984-2.39 1.782 0 2.915 1.039 3.016 2.398l.008.102H90.25l-.008-.055c-.11-.789-.71-1.312-1.719-1.312-.984 0-1.593.476-1.593 1.195v.008c0 .554.367.937 1.265 1.156l1.29.312c1.64.399 2.234 1.047 2.234 2.204v.007c0 1.422-1.344 2.422-3.156 2.422Zm8.164-11.43-3.18 14.008H92.25l3.18-14.007h1.297Zm4.218 11.43c-2.336 0-3.742-1.633-3.742-4.187v-.008c0-2.516 1.438-4.242 3.656-4.242 2.219 0 3.571 1.648 3.571 4.086v.5h-5.852c.031 1.672.953 2.648 2.399 2.648 1.031 0 1.757-.516 1.992-1.21l.023-.071h1.336l-.016.078c-.265 1.344-1.593 2.406-3.367 2.406Zm-.093-7.234c-1.18 0-2.102.805-2.25 2.32h4.445c-.133-1.578-1.008-2.32-2.195-2.32ZM105.836 38v-.969l3.969-4.14c1.523-1.586 1.875-2.196 1.875-3.133v-.016c-.008-1.148-.875-1.976-2.102-1.976-1.406 0-2.453.968-2.453 2.18v.038h-1.359v-.047c0-1.953 1.687-3.398 3.789-3.398 2.039 0 3.531 1.367 3.531 3.133v.015c0 1.235-.57 2.165-2.641 4.282l-2.679 2.75v.031h5.507V38h-7.437Zm12.375.156c-2.336 0-3.742-1.633-3.742-4.187v-.008c0-2.516 1.437-4.242 3.656-4.242 2.219 0 3.57 1.648 3.57 4.086v.5h-5.851c.031 1.672.953 2.648 2.398 2.648 1.031 0 1.758-.516 1.992-1.21l.024-.071h1.336l-.016.078c-.266 1.344-1.594 2.406-3.367 2.406Zm-.094-7.234c-1.179 0-2.101.805-2.25 2.32h4.445c-.132-1.578-1.007-2.32-2.195-2.32Zm8.547-4.195-3.18 14.007h-1.296l3.179-14.007h1.297Z"></path><path fill="#2E3247" d="m127.203 38 4.102-11.273h1.89L137.289 38h-1.836l-1.031-3.047h-4.344L129.039 38h-1.836Zm5.031-9.406-1.687 4.953h3.398l-1.679-4.953h-.032Zm8.649 9.57c-1.805 0-2.836-1.164-2.836-3.055v-5.328h1.687v5c0 1.242.578 1.93 1.75 1.93 1.188 0 1.954-.852 1.954-2.133v-4.797h1.695V38h-1.695v-1.234h-.04c-.429.828-1.265 1.398-2.515 1.398Zm8.805 0c-1.626 0-2.407-.687-2.407-2.328v-4.711h-1.179v-1.344h1.179v-2.14h1.727v2.14h1.539v1.344h-1.539v4.61c0 .835.375 1.085 1.086 1.085.179 0 .328-.015.453-.03v1.304c-.195.031-.516.07-.859.07Zm2.32-.164V26.727h1.687v4.406h.039c.438-.953 1.321-1.508 2.547-1.508 1.758 0 2.914 1.313 2.914 3.297V38h-1.687v-4.758c0-1.36-.688-2.172-1.875-2.172-1.164 0-1.938.89-1.938 2.172V38h-1.687Z"></path><path fill="#747994" d="M161.68 38.102a.72.72 0 0 1-.727-.727.72.72 0 0 1 .727-.727.72.72 0 0 1 .726.727.72.72 0 0 1-.726.727Zm5.359.046c-1.844 0-3.023-.984-3.18-2.421l-.007-.07h1.031l.015.07c.164.937.922 1.546 2.149 1.546 1.226 0 2.008-.562 2.008-1.414v-.007c0-.704-.391-1.086-1.477-1.344l-1.226-.297c-1.532-.367-2.266-1.04-2.266-2.164v-.008c0-1.352 1.195-2.312 2.891-2.312 1.734 0 2.843 1.007 2.976 2.406l.008.086h-.992l-.008-.055c-.133-.945-.852-1.562-1.984-1.562-1.102 0-1.836.57-1.836 1.398v.008c0 .648.437 1.062 1.507 1.32l1.227.29c1.617.39 2.234 1.023 2.234 2.163v.008c0 1.383-1.289 2.36-3.07 2.36Zm4.461 2.586V29.875h1.031v1.719h.031c.454-1.102 1.454-1.867 2.758-1.867 2.063 0 3.446 1.671 3.446 4.21v.008c0 2.547-1.391 4.203-3.43 4.203a2.945 2.945 0 0 1-2.774-1.843h-.031v4.43H171.5Zm3.641-3.507c1.562 0 2.57-1.29 2.57-3.282v-.008c0-2.007-1.008-3.289-2.57-3.289-1.532 0-2.61 1.32-2.61 3.29v.007c0 1.961 1.086 3.282 2.61 3.282Zm8.304.921c-2.281 0-3.695-1.617-3.695-4.187v-.008c0-2.547 1.438-4.226 3.609-4.226 2.172 0 3.539 1.625 3.539 4.054v.407h-6.101c.031 1.937 1.07 3.039 2.672 3.039 1.195 0 2.023-.602 2.289-1.485l.015-.07h1.024l-.016.078c-.281 1.39-1.578 2.398-3.336 2.398Zm-.093-7.5c-1.383 0-2.414.993-2.54 2.72h5.047c-.117-1.774-1.117-2.72-2.507-2.72Zm8.218 7.5c-2.258 0-3.695-1.632-3.695-4.218v-.008c0-2.555 1.461-4.195 3.687-4.195 1.891 0 3.118 1.226 3.321 2.625l.008.07h-1.016l-.016-.063c-.226-.953-1.031-1.71-2.297-1.71-1.585 0-2.624 1.273-2.624 3.288v.008c0 2.047 1.054 3.282 2.632 3.282 1.211 0 2.047-.696 2.289-1.711l.016-.063h1.023l-.007.063c-.243 1.515-1.547 2.632-3.321 2.632Zm5.25-.046a.72.72 0 0 1-.726-.727.72.72 0 0 1 .726-.727.72.72 0 0 1 .727.727.72.72 0 0 1-.727.727Zm3.157-9.696a.689.689 0 0 1-.688-.687c0-.383.313-.68.688-.68.382 0 .687.297.687.68a.684.684 0 0 1-.687.687Zm-1.821 12.336c-.086 0-.164 0-.25-.008v-.914h.211c.969 0 1.344-.343 1.344-1.32v-8.625h1.031v8.602c0 1.562-.726 2.265-2.336 2.265Zm6.992-2.594c-1.843 0-3.023-.984-3.179-2.421l-.008-.07h1.031l.016.07c.164.937.922 1.546 2.148 1.546 1.227 0 2.008-.562 2.008-1.414v-.007c0-.704-.391-1.086-1.476-1.344l-1.227-.297c-1.531-.367-2.266-1.04-2.266-2.164v-.008c0-1.352 1.196-2.312 2.891-2.312 1.734 0 2.844 1.007 2.976 2.406l.008.086h-.992l-.008-.055c-.132-.945-.851-1.562-1.984-1.562-1.102 0-1.836.57-1.836 1.398v.008c0 .648.438 1.062 1.508 1.32l1.226.29c1.618.39 2.235 1.023 2.235 2.163v.008c0 1.383-1.289 2.36-3.071 2.36Z"></path><g clip-path="url(#b)"><rect width="39" height="24" x="217" y="20" fill="#fff" rx="4"></rect><path stroke="#E45770" stroke-linecap="round" stroke-width="2" d="m227 29 6 6m0-6-6 6"></path><path fill="#5A5F7A" d="M244.211 37.164c-2.106 0-3.48-1.148-3.616-2.755l-.007-.089h1.47l.006.075c.096.875.923 1.49 2.147 1.49 1.203 0 2.017-.67 2.017-1.626v-.014c0-1.114-.807-1.736-2.126-1.736h-1.197v-1.19h1.156c1.127 0 1.893-.663 1.893-1.579v-.013c0-.95-.642-1.504-1.757-1.504-1.093 0-1.859.574-1.955 1.49l-.007.061H240.8l.007-.068c.15-1.647 1.463-2.734 3.39-2.734 1.962 0 3.247 1.039 3.247 2.556v.014c0 1.224-.875 2.044-2.078 2.297v.034c1.449.13 2.42 1.005 2.42 2.386v.014c0 1.688-1.483 2.891-3.575 2.891Z"></path><rect width="38" height="23" x="217.5" y="20.5" stroke="#E1E3ED" rx="3.5"></rect></g><rect width="41" height="26" x="216" y="19" stroke="#A06CE4" stroke-width="2" rx="5"></rect><rect width="105" height="24" x="347" y="20" fill="#E1E3ED" rx="12"></rect><path fill="#fff" d="M.5 63.5h467v55H.5z"></path><circle cx="24" cy="91" r="7" fill="#F3F4FA"></circle><rect width="32" height="16" x="40" y="83" fill="#F3F4FA" rx="8"></rect><path stroke="#D0D2E0" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m82.5 88 3 3-3 3"></path><rect width="284" height="16" x="96" y="83" fill="#F3F4FA" rx="8"></rect><path stroke="#E1E3ED" d="M.5 63.5h467v55H.5z"></path><path fill="#fff" d="M.5 118.5h467v55H.5z"></path><circle cx="24" cy="146" r="7" fill="#F3F4FA"></circle><rect width="32" height="16" x="40" y="138" fill="#F3F4FA" rx="8"></rect><path stroke="#D0D2E0" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m82.5 143 3 3-3 3"></path><rect width="284" height="16" x="96" y="138" fill="#F3F4FA" rx="8"></rect><path stroke="#E1E3ED" d="M.5 118.5h467v55H.5z"></path><path fill="#fff" d="M.5 173.5h467v55H.5z"></path><circle cx="24" cy="201" r="7" fill="#F3F4FA"></circle><rect width="32" height="16" x="40" y="193" fill="#F3F4FA" rx="8"></rect><path stroke="#D0D2E0" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m82.5 198 3 3-3 3"></path><rect width="284" height="16" x="96" y="193" fill="#F3F4FA" rx="8"></rect><path stroke="#E1E3ED" d="M.5 173.5h467v55H.5z"></path><path fill="#fff" d="M.5 228.5h467v55H.5z"></path><circle cx="24" cy="256" r="7" fill="#F3F4FA"></circle><rect width="32" height="16" x="40" y="248" fill="#F3F4FA" rx="8"></rect><path stroke="#D0D2E0" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m82.5 253 3 3-3 3"></path><rect width="284" height="16" x="96" y="248" fill="#F3F4FA" rx="8"></rect><path stroke="#E1E3ED" d="M.5 228.5h467v55H.5z"></path></g><rect width="467" height="283" x=".5" y=".5" stroke="#E1E3ED" rx="5.5"></rect><defs><clipPath id="a"><rect width="468" height="284" fill="#fff" rx="6"></rect></clipPath><clipPath id="b"><rect width="39" height="24" x="217" y="20" fill="#fff" rx="4"></rect></clipPath></defs>', 3);
const _hoisted_5$5 = [
  _hoisted_2$8
];
function render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$d, _hoisted_5$5);
}
const Illustration$2 = { render: render$2 };
const _sfc_main$i = /* @__PURE__ */ defineComponent({
  __name: "GuideCard1",
  props: {
    action: { type: Function }
  },
  setup(__props) {
    const { t } = useI18n$1();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$Q, {
        title: unref(t)("debugPage.emptyStates.slideshow.step1.title"),
        body: unref(t)("debugPage.emptyStates.slideshow.step1.description")
      }, {
        image: withCtx(() => [
          createVNode(unref(Illustration$2))
        ]),
        action: withCtx(() => [
          createVNode(_sfc_main$P, {
            action: __props.action,
            "left-label": unref(t)("debugPage.emptyStates.slideshow.controls.step", [1, 3]),
            "right-label": unref(t)("debugPage.emptyStates.slideshow.controls.next"),
            "right-icon": unref(x1)
          }, null, 8, ["action", "left-label", "right-label", "right-icon"])
        ]),
        _: 1
      }, 8, ["title", "body"]);
    };
  }
});
const _hoisted_1$c = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 468 284"
};
const _hoisted_2$7 = /* @__PURE__ */ createStaticVNode('<g clip-path="url(#a)"><path fill="#F3F4FA" d="M.5.5h467v63H.5z"></path><circle cx="23" cy="32" r="7" fill="#D0D2E0"></circle><rect width="227" height="16" x="38" y="24" fill="#E1E3ED" rx="8"></rect><rect width="118" height="31" x="333.5" y="16.5" fill="#fff" rx="3.5"></rect><rect width="118" height="31" x="333.5" y="16.5" stroke="#E1E3ED" rx="3.5"></rect><path fill="#D0D2E0" stroke="#4956E3" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m356.322 32.424-6.557 4.098a.5.5 0 0 1-.765-.424v-8.196a.5.5 0 0 1 .765-.424l6.557 4.098a.5.5 0 0 1 0 .848Z"></path><path fill="#4956E3" d="M369.909 37v-9.864h3.828c2.017 0 3.288 1.169 3.288 3.021v.014c0 1.34-.731 2.406-1.914 2.81L377.319 37h-1.763l-2.01-3.787h-2.106V37h-1.531Zm1.531-5.045h2.147c1.183 0 1.859-.65 1.859-1.77v-.014c0-1.094-.724-1.75-1.9-1.75h-2.106v3.534Zm9.338 5.189c-1.579 0-2.481-1.019-2.481-2.673v-4.662h1.476v4.375c0 1.087.506 1.688 1.532 1.688 1.039 0 1.709-.745 1.709-1.866v-4.197h1.483V37h-1.483v-1.08h-.035c-.375.724-1.107 1.224-2.201 1.224ZM385.96 37v-7.191h1.477v1.086h.034c.376-.73 1.114-1.223 2.201-1.223 1.579 0 2.488 1.018 2.488 2.673V37h-1.483v-4.375c0-1.08-.506-1.689-1.531-1.689-1.04 0-1.709.753-1.709 1.874V37h-1.477Zm10.903 0v-6.016h-.991V29.81h.991v-.766c0-1.395.657-2.05 2.119-2.05.301 0 .629.027.828.06v1.095a3.804 3.804 0 0 0-.513-.035c-.663 0-.978.322-.978.957v.739h1.463v1.175h-1.435V37h-1.484Zm5.797.13c-1.435 0-2.399-.882-2.399-2.174v-.014c0-1.25.97-2.016 2.673-2.119l1.955-.116v-.54c0-.793-.513-1.272-1.429-1.272-.855 0-1.381.404-1.504.978l-.014.062h-1.394l.007-.076c.102-1.237 1.175-2.187 2.946-2.187 1.757 0 2.871.93 2.871 2.372V37h-1.483v-1.135h-.028c-.417.773-1.251 1.265-2.201 1.265Zm-.909-2.208c0 .629.52 1.025 1.312 1.025 1.04 0 1.826-.704 1.826-1.64v-.56l-1.757.108c-.889.055-1.381.445-1.381 1.053v.014Zm6.856-6.22a.855.855 0 0 1-.861-.849c0-.471.383-.854.861-.854a.852.852 0 1 1 0 1.702ZM407.869 37v-7.191h1.477V37h-1.477Zm3.056 0v-9.864h1.476V37h-1.476Zm5.441.144c-1.579 0-2.481-1.019-2.481-2.673v-4.662h1.476v4.375c0 1.087.506 1.688 1.532 1.688 1.039 0 1.709-.745 1.709-1.866v-4.197h1.483V37h-1.483v-1.08h-.035c-.376.724-1.107 1.224-2.201 1.224Zm5.182-.144v-7.191h1.476v1.23h.035c.232-.84.834-1.367 1.654-1.367.212 0 .396.034.513.055V31.1c-.117-.048-.376-.082-.664-.082-.95 0-1.538.622-1.538 1.695V37h-1.476Zm7.348.144c-2.112 0-3.39-1.443-3.39-3.712v-.007c0-2.25 1.299-3.753 3.315-3.753 2.017 0 3.254 1.45 3.254 3.61v.498h-5.093c.028 1.36.773 2.154 1.949 2.154.875 0 1.456-.452 1.64-.992l.021-.054h1.401l-.014.075c-.232 1.142-1.339 2.18-3.083 2.18Zm-.068-6.262c-.957 0-1.695.65-1.825 1.852h3.609c-.123-1.244-.82-1.852-1.784-1.852Zm7.089 6.262c-1.798 0-2.851-.89-3.001-2.202l-.007-.061h1.463l.014.068c.136.663.629 1.053 1.538 1.053.888 0 1.422-.37 1.422-.95v-.007c0-.465-.26-.732-1.033-.916l-1.175-.267c-1.367-.314-2.044-.97-2.044-2.016v-.007c0-1.285 1.121-2.167 2.775-2.167 1.702 0 2.728.95 2.803 2.174l.007.082h-1.388l-.007-.048c-.089-.629-.581-1.066-1.415-1.066-.793 0-1.292.375-1.292.95v.006c0 .445.294.746 1.067.93l1.168.267c1.47.342 2.031.923 2.031 1.955v.007c0 1.312-1.231 2.215-2.926 2.215Z"></path><rect width="121" height="34" x="332" y="15" stroke="#A06CE4" stroke-width="2" rx="5"></rect><path stroke="#E1E3ED" d="M.5.5h467v63H.5z"></path><path fill="#fff" d="M0 63h468v221H0z"></path><path fill="#fff" d="M.5 63.5h467v55H.5z"></path><circle cx="24" cy="91" r="7" fill="#F3F4FA"></circle><rect width="32" height="16" x="40" y="83" fill="#F3F4FA" rx="8"></rect><path stroke="#D0D2E0" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m82.5 88 3 3-3 3"></path><rect width="284" height="16" x="96" y="83" fill="#F3F4FA" rx="8"></rect><path stroke="#E1E3ED" d="M.5 63.5h467v55H.5z"></path><path fill="#fff" d="M.5 118.5h467v55H.5z"></path><circle cx="24" cy="146" r="7" fill="#F3F4FA"></circle><rect width="32" height="16" x="40" y="138" fill="#F3F4FA" rx="8"></rect><path stroke="#D0D2E0" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m82.5 143 3 3-3 3"></path><rect width="284" height="16" x="96" y="138" fill="#F3F4FA" rx="8"></rect><path stroke="#E1E3ED" d="M.5 118.5h467v55H.5z"></path><path fill="#fff" d="M.5 173.5h467v55H.5z"></path><circle cx="24" cy="201" r="7" fill="#F3F4FA"></circle><rect width="32" height="16" x="40" y="193" fill="#F3F4FA" rx="8"></rect><path stroke="#D0D2E0" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m82.5 198 3 3-3 3"></path><rect width="284" height="16" x="96" y="193" fill="#F3F4FA" rx="8"></rect><path stroke="#E1E3ED" d="M.5 173.5h467v55H.5z"></path><path fill="#fff" d="M.5 228.5h467v55H.5z"></path><circle cx="24" cy="256" r="7" fill="#F3F4FA"></circle><rect width="32" height="16" x="40" y="248" fill="#F3F4FA" rx="8"></rect><path stroke="#D0D2E0" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m82.5 253 3 3-3 3"></path><rect width="284" height="16" x="96" y="248" fill="#F3F4FA" rx="8"></rect><path stroke="#E1E3ED" d="M.5 228.5h467v55H.5z"></path></g><rect width="467" height="283" x=".5" y=".5" stroke="#E1E3ED" rx="5.5"></rect><defs><clipPath id="a"><rect width="468" height="284" fill="#fff" rx="6"></rect></clipPath></defs>', 3);
const _hoisted_5$4 = [
  _hoisted_2$7
];
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$c, _hoisted_5$4);
}
const Illustration$1 = { render: render$1 };
const _sfc_main$h = /* @__PURE__ */ defineComponent({
  __name: "GuideCard2",
  props: {
    action: { type: Function }
  },
  setup(__props) {
    const { t } = useI18n$1();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$Q, {
        title: unref(t)("debugPage.emptyStates.slideshow.step2.title"),
        body: unref(t)("debugPage.emptyStates.slideshow.step2.description")
      }, {
        image: withCtx(() => [
          createVNode(unref(Illustration$1))
        ]),
        action: withCtx(() => [
          createVNode(_sfc_main$P, {
            action: __props.action,
            "left-label": unref(t)("debugPage.emptyStates.slideshow.controls.step", [2, 3]),
            "right-label": unref(t)("debugPage.emptyStates.slideshow.controls.next"),
            "right-icon": unref(x1)
          }, null, 8, ["action", "left-label", "right-label", "right-icon"])
        ]),
        _: 1
      }, 8, ["title", "body"]);
    };
  }
});
const _hoisted_1$b = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 468 284"
};
const _hoisted_2$6 = /* @__PURE__ */ createStaticVNode('<g clip-path="url(#a)"><path fill="#F3F4FA" d="M0 0h468v64H0z"></path><circle cx="23" cy="32" r="7" fill="#D0D2E0"></circle><rect width="227" height="16" x="38" y="24" fill="#E1E3ED" rx="8"></rect><rect width="105" height="24" x="347" y="20" fill="#E1E3ED" rx="12"></rect><path fill="#fff" d="M0 63h468v221H0z"></path><circle cx="24" cy="91" r="7" fill="#E45770"></circle><path stroke="#fff" stroke-linecap="round" stroke-width="2" d="m22 89 4 4m0-4-4 4"></path><path fill="#5A5F7A" d="m40.195 97 4.196-11.273h1.39L49.97 97h-1.477l-1.14-3.227h-4.54L41.672 97h-1.477Zm4.875-9.586-1.828 5.164h3.688l-1.828-5.164h-.032Zm8.524 9.742c-1.782 0-2.813-1.156-2.813-3.008v-5.273h1.36v5.031c0 1.32.617 2.047 1.867 2.047 1.281 0 2.117-.914 2.117-2.297v-4.781h1.36V97h-1.36v-1.156h-.031c-.438.758-1.266 1.312-2.5 1.312Zm8.304 0c-1.492 0-2.226-.672-2.226-2.226V90h-1.188v-1.125h1.188V86.68h1.406v2.195h1.547V90h-1.547v4.922c0 .867.383 1.11 1.11 1.11.164 0 .32-.024.437-.032v1.102c-.172.023-.46.054-.727.054ZM64.156 97V85.727h1.36v4.445h.03c.438-.914 1.321-1.453 2.532-1.453 1.727 0 2.906 1.336 2.906 3.304V97h-1.359v-4.742c0-1.469-.75-2.336-2.016-2.336-1.257 0-2.093.953-2.093 2.336V97h-1.36Z"></path><path stroke="#D0D2E0" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m82.5 88 3 3-3 3"></path><rect width="70" height="31" x="96.5" y="75.5" fill="#fff" rx="3.5"></rect><rect width="70" height="31" x="96.5" y="75.5" stroke="#E1E3ED" rx="3.5"></rect><path fill="#D0D2E0" d="M123 86a2 2 0 0 0-2-2h-10a2 2 0 0 0-2 2v1h14v-1Z"></path><path fill="#D0D2E0" fill-rule="evenodd" d="M123 86a2 2 0 0 0-2-2h-10a2 2 0 0 0-2 2v1h14v-1Z" clip-rule="evenodd"></path><path stroke="#4956E3" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M109 87v9a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-9m-14 0v-1a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1m-14 0h14"></path><path fill="#1B1E2E" d="M112.5 90a.5.5 0 0 0 0 1v-1Zm1 1h.5v-1h-.5v1Zm-1 1a.5.5 0 0 0 0 1v-1Zm1.5 1h.5v-1h-.5v1Zm-1.5 1a.5.5 0 0 0 0 1v-1Zm3 1h.5v-1h-.5v1Zm0-3h-.5v1h.5v-1Zm1.5 1a.5.5 0 0 0 0-1v1Zm0 1h-.5v1h.5v-1Zm2 1a.5.5 0 0 0 0-1v1Zm-4-5h-.5v1h.5v-1Zm1 1h.5v-1h-.5v1Zm1.5-1h-.5v1h.5v-1Zm2 1a.5.5 0 0 0 0-1v1Zm-7 0h1v-1h-1v1Zm0 2h1.5v-1h-1.5v1Zm0 2h3v-1h-3v1Zm3-2h1.5v-1h-1.5v1Zm1.5 2h2v-1h-2v1Zm-2-4h1v-1h-1v1Zm2.5 0h2v-1h-2v1Z"></path><path fill="#4956E3" d="M132.909 96v-9.864h1.531v8.545h4.594V96h-6.125Zm10.172.144c-2.064 0-3.411-1.43-3.411-3.74v-.013c0-2.297 1.36-3.72 3.404-3.72 2.051 0 3.418 1.416 3.418 3.72v.013c0 2.318-1.353 3.74-3.411 3.74Zm.007-1.238c1.155 0 1.893-.916 1.893-2.502v-.013c0-1.573-.752-2.482-1.907-2.482-1.135 0-1.893.91-1.893 2.482v.013c0 1.593.752 2.502 1.907 2.502Zm7.697 3.63c-1.846 0-3.014-.854-3.233-1.955l-.007-.062h1.463l.027.055c.198.458.82.773 1.743.773 1.176 0 1.826-.63 1.826-1.634v-.984h-.035c-.41.779-1.23 1.278-2.262 1.278-1.805 0-2.995-1.415-2.995-3.657v-.007c0-2.256 1.204-3.671 3.029-3.671 1.012 0 1.805.547 2.228 1.36h.035V88.81h1.483v6.993c0 1.64-1.272 2.734-3.302 2.734Zm-.061-3.732c1.128 0 1.88-.95 1.88-2.434v-.007c0-1.476-.759-2.427-1.88-2.427-1.169 0-1.901.944-1.901 2.427v.007c0 1.504.732 2.434 1.901 2.434Z"></path><rect width="73" height="34" x="95" y="74" stroke="#A06CE4" stroke-width="2" rx="5"></rect><rect width="117" height="31" x="175.5" y="75.5" fill="#fff" rx="3.5"></rect><rect width="117" height="31" x="175.5" y="75.5" stroke="#E1E3ED" rx="3.5"></rect><g clip-path="url(#b)"><path fill="#D0D2E0" d="M188 97a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2l-2.5-2.5L197 95l-4.5-4.5L188 95v2ZM199 88a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path><path fill="#4956E3" d="m192.5 90.5.707-.707a1 1 0 0 0-1.414 0l.707.707ZM197 95l-.707.707a1 1 0 0 0 1.414 0L197 95Zm2.5-2.5.707-.707a1 1 0 0 0-1.414 0l.707.707ZM201 83h-12v2h12v-2Zm-12 14v-2h-2v2h2Zm0-2V85h-2v10h2Zm-.293.707 4.5-4.5-1.414-1.414-4.5 4.5 1.414 1.414Zm3.086-4.5 4.5 4.5 1.414-1.414-4.5-4.5-1.414 1.414Zm5.914 4.5 2.5-2.5-1.414-1.414-2.5 2.5 1.414 1.414ZM203 97v-2h-2v2h2Zm0-2V85h-2v10h2Zm-4.207-1.793 2.5 2.5 1.414-1.414-2.5-2.5-1.414 1.414ZM189 99h12v-2h-12v2Zm9-11v2a2 2 0 0 0 2-2h-2Zm0 0h-2a2 2 0 0 0 2 2v-2Zm0 0v-2a2 2 0 0 0-2 2h2Zm0 0h2a2 2 0 0 0-2-2v2Zm3-3h2a2 2 0 0 0-2-2v2Zm0 12v2a2 2 0 0 0 2-2h-2Zm-12-14a2 2 0 0 0-2 2h2v-2Zm-2 14a2 2 0 0 0 2 2v-2h-2Z"></path></g><path fill="#4956E3" d="M215.272 96.164c-2.214 0-3.677-1.053-3.8-2.789l-.007-.103h1.49l.014.09c.136.909 1.046 1.476 2.365 1.476 1.319 0 2.153-.595 2.153-1.518v-.006c0-.793-.54-1.224-1.845-1.511l-1.074-.226c-1.934-.41-2.871-1.299-2.871-2.762v-.006c.007-1.682 1.491-2.837 3.575-2.837 2.058 0 3.466 1.12 3.569 2.775l.007.116h-1.491l-.006-.095c-.137-.916-.93-1.47-2.099-1.47-1.224.007-2.003.588-2.003 1.45v.006c0 .738.561 1.19 1.791 1.456l1.08.226c2.037.43 2.912 1.257 2.912 2.782v.007c0 1.797-1.422 2.94-3.76 2.94Zm8.053-.02c-2.098 0-3.411-1.443-3.411-3.747v-.006c0-2.277 1.34-3.72 3.391-3.72 1.852 0 2.973 1.19 3.096 2.544l.007.048H225l-.014-.055c-.157-.704-.704-1.299-1.668-1.299-1.148 0-1.893.957-1.893 2.495v.007c0 1.572.759 2.495 1.9 2.495.909 0 1.49-.526 1.668-1.305l.007-.055h1.422l-.007.048c-.157 1.442-1.36 2.55-3.09 2.55Zm4.143-.144v-7.191h1.476v1.23h.035c.232-.84.833-1.367 1.654-1.367.212 0 .396.034.513.055V90.1c-.117-.048-.376-.082-.664-.082-.95 0-1.538.622-1.538 1.695V96h-1.476Zm7.348.144c-2.112 0-3.39-1.443-3.39-3.712v-.007c0-2.25 1.299-3.753 3.315-3.753 2.017 0 3.254 1.45 3.254 3.61v.498h-5.093c.028 1.36.773 2.154 1.949 2.154.875 0 1.456-.452 1.64-.992l.021-.054h1.401l-.014.075c-.232 1.142-1.339 2.18-3.083 2.18Zm-.068-6.262c-.957 0-1.695.65-1.825 1.852h3.609c-.123-1.244-.82-1.852-1.784-1.852Zm7.465 6.262c-2.112 0-3.391-1.443-3.391-3.712v-.007c0-2.25 1.299-3.753 3.316-3.753 2.016 0 3.254 1.45 3.254 3.61v.498h-5.093c.027 1.36.772 2.154 1.948 2.154.875 0 1.456-.452 1.641-.992l.02-.054h1.402l-.014.075c-.233 1.142-1.34 2.18-3.083 2.18Zm-.068-6.262c-.957 0-1.696.65-1.826 1.852h3.61c-.123-1.244-.821-1.852-1.784-1.852ZM246.54 96v-7.191h1.477v1.087h.034c.376-.732 1.114-1.224 2.201-1.224 1.579 0 2.488 1.018 2.488 2.673V96h-1.483v-4.375c0-1.08-.506-1.689-1.531-1.689-1.039 0-1.709.752-1.709 1.874V96h-1.477Zm10.322.144c-1.798 0-2.85-.89-3.001-2.202l-.007-.061h1.463l.014.068c.137.663.629 1.053 1.538 1.053.889 0 1.422-.37 1.422-.95v-.007c0-.465-.26-.731-1.032-.916l-1.176-.267c-1.367-.314-2.044-.97-2.044-2.016v-.007c0-1.285 1.121-2.167 2.775-2.167 1.703 0 2.728.95 2.803 2.174l.007.082h-1.388l-.007-.048c-.088-.629-.581-1.066-1.415-1.066-.793 0-1.292.376-1.292.95v.007c0 .444.294.745 1.067.93l1.169.266c1.47.342 2.03.923 2.03 1.955v.007c0 1.312-1.23 2.215-2.926 2.215Zm4.129-.144v-9.864h1.477v3.855h.034c.383-.834 1.155-1.32 2.228-1.32 1.539 0 2.55 1.15 2.55 2.886V96h-1.476v-4.163c0-1.19-.602-1.9-1.641-1.9-1.018 0-1.695.779-1.695 1.9V96h-1.477Zm10.815.144c-2.065 0-3.411-1.43-3.411-3.74v-.013c0-2.297 1.36-3.72 3.404-3.72 2.051 0 3.418 1.416 3.418 3.72v.013c0 2.318-1.354 3.74-3.411 3.74Zm.006-1.238c1.156 0 1.894-.916 1.894-2.502v-.013c0-1.573-.752-2.482-1.907-2.482-1.135 0-1.894.91-1.894 2.482v.013c0 1.593.752 2.502 1.907 2.502Zm7.069 1.238c-1.422 0-2.106-.602-2.106-2.038v-4.122h-1.032V88.81h1.032v-1.873h1.511v1.873h1.347v1.175h-1.347v4.034c0 .731.328.95.95.95.158 0 .287-.014.397-.028v1.142a4.931 4.931 0 0 1-.752.062Z"></path><rect width="120" height="34" x="174" y="74" stroke="#A06CE4" stroke-width="2" rx="5"></rect><rect width="82" height="31" x="301.5" y="75.5" fill="#fff" rx="3.5"></rect><rect width="82" height="31" x="301.5" y="75.5" stroke="#E1E3ED" rx="3.5"></rect><path fill="#C5C9FD" stroke="#4956E3" stroke-linejoin="round" stroke-width="2" d="M323 86h-7a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2v-.5l3 1.5v-8l-3 1.5V88a2 2 0 0 0-2-2Z"></path><path stroke="#6470F3" stroke-linecap="round" stroke-linejoin="round" d="M324.5 88v6" style="mix-blend-mode:darken;"></path><path fill="#4956E3" d="m340.691 96-3.513-9.864h1.647l2.694 8.162h.034l2.693-8.162h1.648L342.38 96h-1.689Zm6.741-8.299a.855.855 0 0 1-.862-.847c0-.472.383-.855.862-.855a.852.852 0 1 1 0 1.702ZM346.693 96v-7.191h1.477V96h-1.477Zm5.688.144c-1.832 0-3.008-1.45-3.008-3.74v-.007c0-2.29 1.189-3.725 2.994-3.725 1.019 0 1.839.513 2.27 1.36h.027v-3.896h1.483V96h-1.483v-1.217h-.027c-.431.841-1.224 1.36-2.256 1.36Zm.39-1.272c1.114 0 1.9-.97 1.9-2.468v-.007c0-1.49-.793-2.46-1.9-2.46-1.163 0-1.887.943-1.887 2.46v.007c0 1.532.718 2.468 1.887 2.468Zm7.963 1.272c-2.112 0-3.39-1.443-3.39-3.712v-.007c0-2.25 1.299-3.753 3.315-3.753 2.017 0 3.254 1.45 3.254 3.61v.498h-5.093c.028 1.36.773 2.154 1.949 2.154.875 0 1.456-.452 1.64-.992l.021-.054h1.401l-.014.075c-.232 1.142-1.339 2.18-3.083 2.18Zm-.068-6.262c-.957 0-1.695.65-1.825 1.852h3.609c-.123-1.244-.82-1.852-1.784-1.852Zm7.485 6.262c-2.064 0-3.411-1.43-3.411-3.74v-.013c0-2.297 1.361-3.72 3.405-3.72 2.05 0 3.417 1.416 3.417 3.72v.013c0 2.318-1.353 3.74-3.411 3.74Zm.007-1.238c1.155 0 1.894-.916 1.894-2.502v-.013c0-1.573-.752-2.482-1.907-2.482-1.135 0-1.894.91-1.894 2.482v.013c0 1.593.752 2.502 1.907 2.502Z"></path><rect width="85" height="34" x="300" y="74" stroke="#A06CE4" stroke-width="2" rx="5"></rect><path stroke="#E1E3ED" d="M.5 63.5h467v55H.5z"></path><path fill="#fff" d="M.5 118.5h467v55H.5z"></path><circle cx="24" cy="146" r="7" fill="#F3F4FA"></circle><rect width="32" height="16" x="40" y="138" fill="#F3F4FA" rx="8"></rect><path stroke="#D0D2E0" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m82.5 143 3 3-3 3"></path><rect width="284" height="16" x="96" y="138" fill="#F3F4FA" rx="8"></rect><path stroke="#E1E3ED" d="M.5 118.5h467v55H.5z"></path><path fill="#fff" d="M.5 173.5h467v55H.5z"></path><circle cx="24" cy="201" r="7" fill="#F3F4FA"></circle><rect width="32" height="16" x="40" y="193" fill="#F3F4FA" rx="8"></rect><path stroke="#D0D2E0" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m82.5 198 3 3-3 3"></path><rect width="284" height="16" x="96" y="193" fill="#F3F4FA" rx="8"></rect><path stroke="#E1E3ED" d="M.5 173.5h467v55H.5z"></path><path fill="#fff" d="M.5 228.5h467v55H.5z"></path><circle cx="24" cy="256" r="7" fill="#F3F4FA"></circle><rect width="32" height="16" x="40" y="248" fill="#F3F4FA" rx="8"></rect><path stroke="#D0D2E0" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m82.5 253 3 3-3 3"></path><rect width="284" height="16" x="96" y="248" fill="#F3F4FA" rx="8"></rect><path stroke="#E1E3ED" d="M.5 228.5h467v55H.5z"></path></g><rect width="467" height="283" x=".5" y=".5" stroke="#E1E3ED" rx="5.5"></rect><defs><clipPath id="a"><rect width="468" height="284" fill="#fff" rx="6"></rect></clipPath><clipPath id="b"><path fill="#fff" d="M187 83h16v16h-16z"></path></clipPath></defs>', 3);
const _hoisted_5$3 = [
  _hoisted_2$6
];
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$b, _hoisted_5$3);
}
const Illustration = { render };
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  __name: "GuideCard3",
  props: {
    action: { type: Function }
  },
  setup(__props) {
    const { t } = useI18n$1();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$Q, {
        title: unref(t)("debugPage.emptyStates.slideshow.step3.title"),
        body: unref(t)("debugPage.emptyStates.slideshow.step3.description")
      }, {
        image: withCtx(() => [
          createVNode(unref(Illustration))
        ]),
        action: withCtx(() => [
          createVNode(_sfc_main$P, {
            action: __props.action,
            "left-icon": unref(J),
            "right-label": unref(t)("debugPage.emptyStates.slideshow.controls.reset")
          }, null, 8, ["action", "left-icon", "right-label"])
        ]),
        _: 1
      }, 8, ["title", "body"]);
    };
  }
});
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "DebugGuide",
  props: {
    campaign: null
  },
  setup(__props) {
    const { t } = useI18n$1();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$T, {
        campaign: __props.campaign,
        medium: unref(DEBUG_TAB_MEDIUM)
      }, {
        header: withCtx(() => [
          createVNode(_sfc_main$R, {
            title: unref(t)("debugPage.emptyStates.connect.title")
          }, {
            description: withCtx(() => [
              createTextVNode(toDisplayString(unref(t)("debugPage.emptyStates.connect.description")), 1)
            ]),
            control: withCtx(() => [
              createVNode(_sfc_main$S, { "utm-medium": unref(DEBUG_TAB_MEDIUM) }, null, 8, ["utm-medium"])
            ]),
            _: 1
          }, 8, ["title"])
        ]),
        cards: withCtx(({ step, goForward, reset }) => [
          step === 0 ? (openBlock(), createBlock(_sfc_main$i, {
            key: 0,
            action: goForward,
            "data-cy": "guide-card"
          }, null, 8, ["action"])) : step === 1 ? (openBlock(), createBlock(_sfc_main$h, {
            key: 1,
            action: goForward,
            "data-cy": "guide-card"
          }, null, 8, ["action"])) : step === 2 ? (openBlock(), createBlock(_sfc_main$g, {
            key: 2,
            action: reset,
            "data-cy": "guide-card"
          }, null, 8, ["action"])) : createCommentVNode("", true)
        ]),
        _: 1
      }, 8, ["campaign", "medium"]);
    };
  }
});
const _hoisted_1$a = { class: "flex h-full" };
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "DebugNotLoggedIn",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$a, [
        createVNode(_sfc_main$f, {
          campaign: unref(DEBUG_PROMO_CAMPAIGNS).login,
          class: "m-auto"
        }, null, 8, ["campaign"])
      ]);
    };
  }
});
const _hoisted_1$9 = { class: "flex h-full" };
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "DebugNoProject",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$9, [
        createVNode(_sfc_main$f, {
          campaign: unref(DEBUG_PROMO_CAMPAIGNS).connectProject,
          class: "m-auto"
        }, null, 8, ["campaign"])
      ]);
    };
  }
});
const _hoisted_1$8 = { class: "h-[310px] xl:h-[305px]" };
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "TourCard",
  props: {
    action: { type: Function }
  },
  setup(__props) {
    const { t } = useI18n$1();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$Q, {
        title: unref(t)("debugPage.emptyStates.slideshow.tour.title"),
        body: unref(t)("debugPage.emptyStates.slideshow.tour.description")
      }, {
        image: withCtx(() => [
          createBaseVNode("div", _hoisted_1$8, [
            createVNode(unref(RecordGuideImage), { class: "ml-[-20px] mr-[-40px] mt-[-20px]" })
          ])
        ]),
        action: withCtx(() => [
          createVNode(_sfc_main$P, {
            action: __props.action,
            "left-icon": unref(d2),
            "right-label": unref(t)("debugPage.emptyStates.slideshow.controls.view")
          }, null, 8, ["action", "left-icon", "right-label"])
        ]),
        _: 1
      }, 8, ["title", "body"]);
    };
  }
});
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "DebugTour",
  props: {
    campaign: null
  },
  setup(__props) {
    const props = __props;
    const { t } = useI18n$1();
    const guideUrl = computed(() => {
      return getUrlWithParams({
        url: "https://on.cypress.io/recording-project-runs",
        params: {
          utm_campaign: props.campaign,
          utm_medium: DEBUG_TAB_MEDIUM
        }
      });
    });
    return (_ctx, _cache) => {
      const _component_i18n_t = resolveComponent("i18n-t");
      return openBlock(), createBlock(_sfc_main$T, {
        campaign: __props.campaign,
        medium: unref(DEBUG_TAB_MEDIUM)
      }, {
        header: withCtx(() => [
          createVNode(_sfc_main$R, {
            title: unref(t)("debugPage.emptyStates.noRuns.title")
          }, {
            description: withCtx(() => [
              createVNode(_component_i18n_t, {
                scope: "global",
                keypath: "debugPage.emptyStates.noRuns.description"
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$F, { href: unref(guideUrl) }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(t)("debugPage.emptyStates.noRuns.link")), 1)
                    ]),
                    _: 1
                  }, 8, ["href"])
                ]),
                _: 1
              })
            ]),
            content: withCtx(() => [
              createVNode(_sfc_main$U)
            ]),
            _: 1
          }, 8, ["title"])
        ]),
        cards: withCtx(({ step, goForward, reset }) => [
          step === 0 ? (openBlock(), createBlock(_sfc_main$c, {
            key: 0,
            action: goForward
          }, null, 8, ["action"])) : step === 1 ? (openBlock(), createBlock(_sfc_main$i, {
            key: 1,
            action: goForward
          }, null, 8, ["action"])) : step === 2 ? (openBlock(), createBlock(_sfc_main$h, {
            key: 2,
            action: goForward
          }, null, 8, ["action"])) : step === 3 ? (openBlock(), createBlock(_sfc_main$g, {
            key: 3,
            action: reset
          }, null, 8, ["action"])) : createCommentVNode("", true)
        ]),
        _: 1
      }, 8, ["campaign", "medium"]);
    };
  }
});
const _hoisted_1$7 = { class: "flex h-full" };
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "DebugNoRuns",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$7, [
        createVNode(_sfc_main$b, {
          campaign: unref(DEBUG_PROMO_CAMPAIGNS).recordRun,
          class: "m-auto"
        }, null, 8, ["campaign"])
      ]);
    };
  }
});
const _hoisted_1$6 = { class: "flex flex-col mx-auto my-[45px] max-w-[680px] items-center" };
const _hoisted_2$5 = { class: "flex flex-col items-center justify-evenly" };
const _hoisted_3$5 = { key: 1 };
const _hoisted_4$2 = { class: "flex flex-col gap-1 my-6 max-w-[640px] items-center" };
const _hoisted_5$2 = {
  "data-cy": "debug-empty-title",
  class: "font-medium text-center text-gray-900 text-lg"
};
const _hoisted_6$1 = {
  "data-cy": "debug-empty-description",
  class: "font-normal text-center leading-relaxed text-gray-600"
};
const _hoisted_7$1 = {
  key: 0,
  class: "ml-[4px]"
};
const _hoisted_8$1 = { class: "sr-only" };
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "DebugEmptyView",
  props: {
    title: null,
    description: null,
    icon: null,
    helpLinkHref: null,
    helpLinkSrText: null,
    utm: null,
    cohort: null
  },
  setup(__props) {
    var _a;
    const props = __props;
    const { t } = useI18n$1();
    const helpLink = getUrlWithParams({
      url: props.helpLinkHref || "",
      params: {
        utm_source: getUtmSource(),
        utm_medium: DEBUG_TAB_MEDIUM,
        utm_campaign: ((_a = props.utm) == null ? void 0 : _a.utm_campaign) || "Learn More"
      }
    });
    return (_ctx, _cache) => {
      const _component_i_cy_box_open_x48 = __unplugin_components_0$3;
      return openBlock(), createElementBlock("div", _hoisted_1$6, [
        createBaseVNode("div", _hoisted_2$5, [
          __props.icon ? (openBlock(), createBlock(resolveDynamicComponent(__props.icon), {
            key: 0,
            class: "icon-dark-gray-500 icon-light-indigo-100"
          })) : (openBlock(), createElementBlock("div", _hoisted_3$5, [
            createVNode(_component_i_cy_box_open_x48, { class: "icon-dark-gray-500 icon-light-indigo-100" })
          ])),
          createBaseVNode("div", _hoisted_4$2, [
            createBaseVNode("div", _hoisted_5$2, toDisplayString(__props.title), 1),
            createBaseVNode("div", _hoisted_6$1, [
              createTextVNode(toDisplayString(__props.description) + " ", 1),
              __props.helpLinkHref ? (openBlock(), createElementBlock("span", _hoisted_7$1, [
                createVNode(_sfc_main$F, { href: unref(helpLink) }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(t)("links.learnMoreButton")) + " ", 1),
                    createBaseVNode("span", _hoisted_8$1, toDisplayString(__props.helpLinkSrText), 1)
                  ]),
                  _: 1
                }, 8, ["href"])
              ])) : createCommentVNode("", true)
            ])
          ]),
          renderSlot(_ctx.$slots, "cta", { utmContent: __props.cohort })
        ]),
        renderSlot(_ctx.$slots, "default")
      ]);
    };
  }
});
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "DebugError",
  setup(__props) {
    const { t } = useI18n$1();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$9, {
        title: unref(t)("debugPage.emptyStates.gitRepositoryNotDetected"),
        description: unref(t)("debugPage.emptyStates.ensureGitSetupCorrectly"),
        icon: unref(ro)
      }, null, 8, ["title", "description", "icon"]);
    };
  }
});
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "DebugBranchError",
  setup(__props) {
    const { t } = useI18n$1();
    const utm = {
      utm_campaign: "No Runs Found"
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$9, {
        title: unref(t)("debugPage.emptyStates.noRunsFoundForBranch"),
        description: unref(t)("debugPage.emptyStates.noRunsForBranchMessage"),
        icon: unref(ro),
        utm,
        "help-link-href": "https://on.cypress.io/git-info"
      }, null, 8, ["title", "description", "icon"]);
    };
  }
});
const _hoisted_1$5 = {
  id: "limit-row",
  "data-cy": "debug-spec-limit",
  class: "w-full"
};
const _hoisted_2$4 = { class: "border rounded flex flex-row flex-wrap bg-indigo-50 border-indigo-100 p-4 gap-x-2 items-center whitespace-nowrap children:flex children:items-center" };
const _hoisted_3$4 = { class: "font-medium text-sm text-gray-900" };
const _hoisted_4$1 = { class: "font-normal text-sm text-gray-700" };
const _hoisted_5$1 = {
  key: 0,
  class: "text-sm"
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "DebugSpecLimitBanner",
  props: {
    failedTestCount: null,
    cloudRunUrl: null
  },
  setup(__props) {
    const props = __props;
    const { t } = useI18n$1();
    const cloudRunUrlWithUtmParams = computed(() => props.cloudRunUrl && getUrlWithParams({ url: props.cloudRunUrl, params: { utm_medium: DEBUG_TAB_MEDIUM, utm_campaign: "Spec Limit" } }));
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$5, [
        createBaseVNode("ul", _hoisted_2$4, [
          createBaseVNode("li", _hoisted_3$4, toDisplayString(unref(t)("debugPage.limit.title")), 1),
          createBaseVNode("li", _hoisted_4$1, toDisplayString(unref(t)("debugPage.limit.message", { n: __props.failedTestCount })), 1),
          unref(cloudRunUrlWithUtmParams) ? (openBlock(), createElementBlock("li", _hoisted_5$1, [
            createVNode(_sfc_main$F, { href: unref(cloudRunUrlWithUtmParams) }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(t)("debugPage.limit.link")), 1)
              ]),
              _: 1
            }, 8, ["href"])
          ])) : createCommentVNode("", true)
        ])
      ]);
    };
  }
});
const DebugSpecLimitBanner = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-e273908e"]]);
const _sfc_main$5 = {};
const _hoisted_1$4 = {
  width: "8",
  height: "8",
  viewBox: "0 0 8 8",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$3 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M1 4.5L3.5 7L7 1",
  stroke: "#4956E3",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1);
const _hoisted_3$3 = [
  _hoisted_2$3
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$4, _hoisted_3$3);
}
const DebugCurrentRunIcon = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render]]);
gql`
subscription DebugProgress_Specs($id: ID!) {
  relevantRunSpecChange(runId: $id) {
    id
    ...DebugProgress_DebugTests
  }
}
`;
function useDebugRunSummary(run) {
  var _a;
  const shouldPause = ref(true);
  const runToWatch = computed(() => unref(run));
  useSubscription$1({
    query: DebugProgress_SpecsDocument,
    variables: {
      id: ((_a = runToWatch.value) == null ? void 0 : _a.id) || ""
    },
    pause: shouldPause
  });
  watchEffect(() => {
    var _a2, _b;
    const status = (_a2 = runToWatch.value) == null ? void 0 : _a2.status;
    const id = (_b = runToWatch.value) == null ? void 0 : _b.id;
    shouldPause.value = id === void 0 || status === void 0 || status !== "RUNNING";
  });
}
const _hoisted_1$3 = ["data-cy"];
const _hoisted_2$2 = ["data-cy"];
const _hoisted_3$2 = { class: "flex items-center min-w-0" };
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "DebugRunNavigationRow",
  props: {
    gql: null,
    isCurrentRun: { type: Boolean }
  },
  emits: ["changeRun"],
  setup(__props) {
    const props = __props;
    const { t } = useI18n$1();
    gql`
fragment DebugProgress_DebugTests on CloudRun {
  id
  runNumber
  totalDuration
  createdAt
  status
  completedInstanceCount
  totalInstanceCount
  ...RunResults
}`;
    const Dot = () => {
      return h("span", { class: "px-[8px] text-gray-300" }, "•");
    };
    useDebugRunSummary(props.gql);
    const LightText = (_props, { slots }) => {
      var _a;
      return h("span", { class: "text-sm text-gray-700" }, (_a = slots == null ? void 0 : slots.default) == null ? void 0 : _a.call(slots));
    };
    const run = computed(() => props.gql);
    const { relativeCreatedAt, totalDuration } = useRunDateTimeInterval(run);
    const specsCompleted = computed(() => {
      if (props.gql.status === "RUNNING") {
        return t("debugPage.specCounts.whenRunning", { n: props.gql.totalInstanceCount || 0, completed: props.gql.completedInstanceCount || 0, total: props.gql.totalInstanceCount || 0 });
      }
      return t("debugPage.specCounts.whenCompleted", { n: props.gql.totalInstanceCount || 0 });
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("li", {
        class: "mr-[12px] ml-[6px]",
        "data-cy": __props.isCurrentRun ? "current-run" : "run"
      }, [
        (openBlock(), createBlock(resolveDynamicComponent(__props.isCurrentRun ? "div" : "button"), {
          "aria-label": unref(t)("debugPage.switchToRun", { runNumber: unref(gql).runNumber }),
          class: normalizeClass(["rounded flex w-full p-[10px] pl-[35px] relative hocus:bg-indigo-50 focus:outline focus:outline-indigo-500", { "bg-indigo-50": __props.isCurrentRun }]),
          onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("changeRun"))
        }, {
          default: withCtx(() => [
            __props.isCurrentRun ? (openBlock(), createBlock(DebugCurrentRunIcon, {
              key: 0,
              class: "top-[18px] left-[12px] absolute",
              "data-cy": "current-run-check"
            })) : createCommentVNode("", true),
            createBaseVNode("div", {
              "data-cy": `run-${props.gql.runNumber}`,
              class: "flex items-center justify-between w-full"
            }, [
              createBaseVNode("div", _hoisted_3$2, [
                props.gql.status && props.gql.runNumber ? (openBlock(), createBlock(_sfc_main$G, {
                  key: 0,
                  status: props.gql.status,
                  value: props.gql.runNumber,
                  class: "mr-[8px]"
                }, null, 8, ["status", "value"])) : createCommentVNode("", true),
                props.gql ? (openBlock(), createBlock(_sfc_main$H, {
                  key: 1,
                  gql: props.gql
                }, null, 8, ["gql"])) : createCommentVNode("", true),
                createVNode(Dot),
                createVNode(LightText, { class: "truncate" }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(specsCompleted)), 1)
                  ]),
                  _: 1
                })
              ]),
              createVNode(LightText, { class: "shrink-0 ml-[8px]" }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(totalDuration)) + " (" + toDisplayString(unref(relativeCreatedAt)) + ") ", 1)
                ]),
                _: 1
              })
            ], 8, _hoisted_2$2)
          ]),
          _: 1
        }, 8, ["aria-label", "class"]))
      ], 8, _hoisted_1$3);
    };
  }
});
const _hoisted_1$2 = { class: "flex text-sm p-4 align-center" };
const _hoisted_2$1 = { class: "mr-2 pt-[2px]" };
const _hoisted_3$1 = { class: "text-gray-700" };
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "DebugRunNavigationLimitMessage",
  props: {
    cloudProjectUrl: null
  },
  setup(__props) {
    const props = __props;
    const { t } = useI18n$1();
    const cloudProjectUrlWithUtmParams = computed(() => props.cloudProjectUrl && getUrlWithParams({ url: props.cloudProjectUrl, params: { utm_medium: DEBUG_TAB_MEDIUM, utm_campaign: "Run Navigation Limit" } }));
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$2, [
        createBaseVNode("div", _hoisted_2$1, [
          createVNode(unref(Io), {
            "stroke-color": "gray-500",
            "fill-color": "gray-50"
          })
        ]),
        createBaseVNode("div", _hoisted_3$1, [
          createTextVNode(toDisplayString(unref(t)("debugPage.foundMoreThan100Runs")) + " ", 1),
          unref(cloudProjectUrlWithUtmParams) ? (openBlock(), createBlock(_sfc_main$F, {
            key: 0,
            href: unref(cloudProjectUrlWithUtmParams)
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(t)("debugPage.goToCypressCloud")), 1)
            ]),
            _: 1
          }, 8, ["href"])) : createCommentVNode("", true)
        ])
      ]);
    };
  }
});
const _hoisted_1$1 = {
  key: 0,
  class: "overflow-hidden border border-indigo-100 rounded"
};
const _hoisted_2 = {
  class: "bg-indigo-50 p-[12px] group",
  "data-cy": "debug-detailed-header"
};
const _hoisted_3 = { class: "flex items-center justify-between" };
const _hoisted_4 = { class: "flex items-center min-w-0" };
const _hoisted_5 = ["aria-expanded"];
const _hoisted_6 = ["title"];
const _hoisted_7 = { class: "hidden text-gray-700 truncate shrink-0 lg:block" };
const _hoisted_8 = { key: 0 };
const _hoisted_9 = {
  id: "debug-runs-container",
  class: "overflow-y-scroll max-h-[30vh]",
  "data-cy": "debug-runs-container"
};
const _hoisted_10 = {
  class: "my-[8px] relative before:content-[''] before:absolute before:top-[20px] before:bottom-[10px] before:w-[5px] before:border-2 before:border-dashed before:border-l-0 before:border-y-0 before:border-r-gray-100 before:left-[19px]",
  "data-cy": "debug-historical-runs"
};
const _hoisted_11 = ["data-cy"];
const _hoisted_12 = { class: "flex items-center my-[10px] mx-[16px]" };
const _hoisted_13 = ["title"];
const _hoisted_14 = {
  key: 0,
  "data-cy": "tag-checked-out",
  class: "inline-flex items-center shrink-0 font-medium text-purple-400 align-middle border border-gray-100 rounded border-1 h-[16px] ml-[8px] px-[4px] text-[12px] leading-[16px]"
};
const _hoisted_15 = { key: 0 };
const _hoisted_16 = {
  key: 0,
  class: "border-t border-indigo-100"
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "DebugRunNavigation",
  props: {
    runs: null,
    currentRunNumber: null,
    cloudProjectUrl: null,
    currentCommitInfo: null
  },
  setup(__props) {
    const props = __props;
    const { t } = useI18n$1();
    gql`
fragment DebugRunNavigationRunInfo on CloudRun {
  ...RunResults
  ...DebugProgress_DebugTests
  __typename
  runNumber
  totalTests
  totalFailed
  totalPassed
  totalPending
  totalSkipped
  totalDuration
  totalFlakyTests
  totalInstanceCount
  completedInstanceCount
  id
  status
  specs {
    id
    path
  }
  createdAt
  commitInfo {
    sha
    summary
  }
}
`;
    gql`
fragment DebugRunNavigation on CloudProject {
  id
  cloudProjectUrl
  allRuns: runsByCommitShas(commitShas: $commitShas) {
    id
    ...DebugRunNavigationRunInfo
  }
}
`;
    gql`
mutation DebugRunNavigation_moveToRun($runNumber: Int!) {
  moveToRelevantRun(runNumber: $runNumber)
}
`;
    const Dot = () => {
      return h("span", { class: "px-[8px] text-gray-300" }, "•");
    };
    const LightText = (_props, { slots }) => {
      var _a;
      return h("span", { class: "text-sm text-gray-700" }, (_a = slots == null ? void 0 : slots.default) == null ? void 0 : _a.call(slots));
    };
    const moveToNewRun = useMutation(DebugRunNavigation_MoveToRunDocument);
    const [showRuns, toggleRuns] = useToggle(false);
    const latest = computed(() => props.runs[0]);
    useDebugRunSummary(latest);
    const current = computed(() => {
      var _a;
      return (_a = props.runs) == null ? void 0 : _a.find((run) => (run == null ? void 0 : run.runNumber) === props.currentRunNumber);
    });
    const latestIsCurrentlySelected = computed(() => {
      var _a, _b;
      return ((_a = latest.value) == null ? void 0 : _a.runNumber) === ((_b = current.value) == null ? void 0 : _b.runNumber);
    });
    const groupByCommit = computed(() => {
      var _a;
      const grouped = lodashExports.groupBy(lodashExports.compact(props.runs), (run) => {
        var _a2;
        return (_a2 = run == null ? void 0 : run.commitInfo) == null ? void 0 : _a2.sha;
      });
      const mapped = {};
      const hasRunsForCurrentCommit = ((_a = props.currentCommitInfo) == null ? void 0 : _a.sha) && Object.keys(grouped).includes(props.currentCommitInfo.sha);
      if (!hasRunsForCurrentCommit && props.currentCommitInfo) {
        mapped[props.currentCommitInfo.sha] = props.currentCommitInfo;
      }
      const result = Object.keys(grouped).reduce((acc, curr) => {
        var _a2;
        acc[curr] = {
          sha: curr,
          message: (_a2 = grouped[curr][0].commitInfo) == null ? void 0 : _a2.summary,
          runs: grouped[curr]
        };
        return acc;
      }, mapped);
      return result;
    });
    const shouldShow = computed(() => {
      return props.runs.length > 1;
    });
    const hideToggle = computed(() => {
      return !latestIsCurrentlySelected.value && props.runs.length === 2;
    });
    function changeRun(run) {
      var _a;
      if (!run.runNumber || !((_a = run.commitInfo) == null ? void 0 : _a.sha)) {
        return;
      }
      moveToNewRun.executeMutation({ runNumber: run.runNumber });
    }
    function isCurrentRun(run) {
      var _a;
      return run.runNumber === ((_a = current.value) == null ? void 0 : _a.runNumber);
    }
    function specsCompleted(run) {
      if (run.status === "RUNNING") {
        return t("debugPage.specCounts.whenRunning", { n: run.totalInstanceCount || 0, completed: run.completedInstanceCount || 0, total: run.totalInstanceCount || 0 });
      }
      return t("debugPage.specCounts.whenCompleted", { n: run.totalInstanceCount || 0 });
    }
    return (_ctx, _cache) => {
      var _a, _b, _c;
      return unref(shouldShow) ? (openBlock(), createElementBlock("div", _hoisted_1$1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("div", _hoisted_4, [
              !unref(hideToggle) ? (openBlock(), createElementBlock("button", {
                key: 0,
                "aria-expanded": unref(showRuns),
                "aria-controls": "debug-runs-container",
                class: "border border-transparent rounded flex p-[2px] transition items-center hocus-default hover:bg-white focus:bg-white active:bg-white group-hover:outline group-hover:outline-indigo-100",
                "data-cy": "debug-toggle",
                onClick: _cache[0] || (_cache[0] = ($event) => unref(toggleRuns)())
              }, [
                createVNode(unref(x1), {
                  class: normalizeClass(["transition", { "transform rotate-90": unref(showRuns) }]),
                  "stroke-color": "indigo-400"
                }, null, 8, ["class"]),
                createBaseVNode("span", {
                  class: normalizeClass(["font-medium text-sm mr-[4px] ml-[8px] text-indigo-500", { "sr-only": !unref(latestIsCurrentlySelected) }])
                }, toDisplayString(unref(t)("debugPage.switchRun")), 3)
              ], 8, _hoisted_5)) : createCommentVNode("", true),
              unref(latestIsCurrentlySelected) ? (openBlock(), createBlock(Dot, { key: 1 })) : createCommentVNode("", true),
              unref(latestIsCurrentlySelected) ? (openBlock(), createBlock(LightText, { key: 2 }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(t)("debugPage.mostRecentRun")), 1)
                ]),
                _: 1
              })) : ((_a = unref(latest)) == null ? void 0 : _a.status) && unref(latest).runNumber ? (openBlock(), createElementBlock(Fragment, { key: 3 }, [
                createVNode(_sfc_main$G, {
                  status: unref(latest).status,
                  value: unref(latest).runNumber,
                  class: "mx-[8px]"
                }, null, 8, ["status", "value"]),
                unref(latest) ? (openBlock(), createBlock(_sfc_main$H, {
                  key: 0,
                  gql: unref(latest),
                  class: "bg-white mr-[12px]"
                }, null, 8, ["gql"])) : createCommentVNode("", true),
                createBaseVNode("span", {
                  class: "font-medium text-gray-800 truncate",
                  title: (_b = unref(latest).commitInfo) == null ? void 0 : _b.summary
                }, toDisplayString((_c = unref(latest).commitInfo) == null ? void 0 : _c.summary), 9, _hoisted_6),
                createVNode(Dot, { class: "hidden lg:block" }),
                createBaseVNode("span", _hoisted_7, toDisplayString(specsCompleted(unref(latest))), 1)
              ], 64)) : createCommentVNode("", true)
            ]),
            !unref(latestIsCurrentlySelected) ? (openBlock(), createBlock(_sfc_main$N, {
              key: 0,
              "data-cy": "switch-to-latest",
              class: "shrink-0 ml-[8px]",
              onClick: _cache[1] || (_cache[1] = ($event) => changeRun(unref(latest)))
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(t)("debugPage.switchToLatestRun")), 1)
              ]),
              _: 1
            })) : createCommentVNode("", true)
          ])
        ]),
        createVNode(TransitionQuickFade, null, {
          default: withCtx(() => [
            unref(showRuns) ? (openBlock(), createElementBlock("div", _hoisted_8, [
              createBaseVNode("div", _hoisted_9, [
                createBaseVNode("ul", _hoisted_10, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(Object.keys(unref(groupByCommit)), (sha) => {
                    var _a2;
                    return openBlock(), createElementBlock("li", {
                      key: sha,
                      "data-cy": `commit-${sha}`
                    }, [
                      createBaseVNode("div", _hoisted_12, [
                        createVNode(DebugCommitIcon, { class: "shrink-0" }),
                        createVNode(LightText, { class: "shrink-0 truncate ml-[12px]" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(sha.slice(0, 7)), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(Dot),
                        createBaseVNode("span", {
                          class: "text-sm font-medium text-gray-800 truncate",
                          title: unref(groupByCommit)[sha].message
                        }, toDisplayString(unref(groupByCommit)[sha].message), 9, _hoisted_13),
                        sha === ((_a2 = __props.currentCommitInfo) == null ? void 0 : _a2.sha) ? (openBlock(), createElementBlock("span", _hoisted_14, " Checked out ")) : createCommentVNode("", true)
                      ]),
                      unref(groupByCommit)[sha].runs ? (openBlock(), createElementBlock("ul", _hoisted_15, [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(groupByCommit)[sha].runs, (run) => {
                          return openBlock(), createBlock(_sfc_main$4, {
                            key: run == null ? void 0 : run.runNumber,
                            "run-number": run == null ? void 0 : run.runNumber,
                            "is-current-run": isCurrentRun(run),
                            gql: run,
                            onChangeRun: ($event) => changeRun(run)
                          }, null, 8, ["run-number", "is-current-run", "gql", "onChangeRun"]);
                        }), 128))
                      ])) : createCommentVNode("", true)
                    ], 8, _hoisted_11);
                  }), 128))
                ])
              ]),
              __props.runs.length === 100 ? (openBlock(), createElementBlock("div", _hoisted_16, [
                createVNode(_sfc_main$3, { "cloud-project-url": __props.cloudProjectUrl }, null, 8, ["cloud-project-url"])
              ])) : createCommentVNode("", true)
            ])) : createCommentVNode("", true)
          ]),
          _: 1
        })
      ])) : createCommentVNode("", true);
    };
  }
});
const specsList = ({ specs, tests, localSpecs, currentTestingType, groups }) => {
  const localSpecsSet = new Set(localSpecs.map((spec) => posixify(spec.relative)));
  const groupsMap = groups.reduce((acc, group) => ({ ...acc, [group.id]: group }), {});
  const mappedTests = tests.reduce((acc, curr) => {
    let debugResult = acc[curr.specId];
    if (!debugResult) {
      const foundSpec = specs.find((spec) => spec.id === curr.specId);
      if (!foundSpec) {
        throw new Error(`Could not find spec for id ${curr.specId}`);
      }
      const groupsMapping = (foundSpec.groupIds || []).reduce((acc2, id) => {
        if (id) {
          acc2[id] = groupsMap[id];
        }
        return acc2;
      }, {});
      const testingType = Object.values(groupsMapping)[0].testingType;
      debugResult = {
        spec: foundSpec,
        tests: { [curr.thumbprint]: [curr] },
        groups: groupsMapping,
        testingType,
        matchesCurrentTestingType: testingType === currentTestingType,
        foundLocally: localSpecsSet.has(foundSpec.path)
      };
      acc[curr.specId] = debugResult;
    } else {
      if (!debugResult.tests[curr.thumbprint]) {
        debugResult.tests[curr.thumbprint] = [curr];
      } else {
        debugResult.tests[curr.thumbprint].push(curr);
      }
    }
    return acc;
  }, {});
  return Object.values(mappedTests);
};
const _hoisted_1 = { class: "h-full" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "DebugContainer",
  props: {
    gql: { default: void 0 },
    isLoading: { type: Boolean, default: false },
    commitsAhead: { default: 0 },
    online: { type: Boolean, default: true },
    currentCommitInfo: { default: void 0 }
  },
  setup(__props) {
    const props = __props;
    const { t } = useI18n$1();
    gql`
fragment DebugLocalSpecs on Spec {
  id
  absolute
  relative
}
`;
    gql`
fragment RunDetail on CloudRun {
  ...DebugPageHeader
  cancelledBy {
    id
    fullName
    email
  }
  cancelledAt
  scheduledToCompleteAt
  id
  runNumber
  errors
  status
  overLimitActionType
  overLimitActionUrl
  isHidden
  reasonsRunIsHidden {
    __typename
    ... on DataRetentionLimitExceeded {
      dataRetentionDays
    }
    ... on UsageLimitExceeded {
      monthlyTests
    }
  }
  totalTests
  ci {
    id
    ...DebugPageDetails_cloudCiBuildInfo
  }
  testsForReview(limit: 100) {
    id
    ...DebugSpecListTests
  }
  specs {
    id
    ...DebugSpecListSpec
  }
  groups {
    id,
    ...DebugSpecListGroups
  }
  createdAt
}
`;
    gql`
fragment DebugSpecs on Query {
  currentProject {
    id
    cloudProject {
      __typename
      ... on CloudProject {
        id
        runByNumber(runNumber: $runNumber) {
          id
          ...RunDetail
        } 
        ...DebugRunNavigation
      }
    }
    specs {
      id
      ...DebugLocalSpecs
    }
    currentTestingType
  }
}
`;
    const userProjectStatusStore = useUserProjectStatusStore();
    const { cloudStatusMatches } = userProjectStatusStore;
    const cloudProject = computed(() => {
      var _a, _b, _c;
      return ((_c = (_b = (_a = props.gql) == null ? void 0 : _a.currentProject) == null ? void 0 : _b.cloudProject) == null ? void 0 : _c.__typename) === "CloudProject" ? props.gql.currentProject.cloudProject : null;
    });
    const allRuns = computed(() => {
      var _a;
      return (_a = cloudProject.value) == null ? void 0 : _a.allRuns;
    });
    const run = computed(() => {
      var _a;
      return (_a = cloudProject.value) == null ? void 0 : _a.runByNumber;
    });
    function shouldDisplayDetails(status, isHidden) {
      return !["RUNNING", "FAILED"].includes(status) || isHidden;
    }
    function shouldDisplaySpecsList(status) {
      return ["ERRORED", "CANCELLED", "TIMEDOUT", "FAILED", "RUNNING"].includes(status);
    }
    const shouldShowPendingRunSplash = computed(() => {
      var _a;
      return isRunning.value && !((_a = run.value) == null ? void 0 : _a.totalFailed);
    });
    const shouldBeFullHeight = computed(() => {
      const willShowCenteredContentInRun = !!run.value && !!run.value.status && (["PASSED", "OVERLIMIT"].includes(run.value.status) || run.value.isHidden);
      return shouldShowPendingRunSplash.value || willShowCenteredContentInRun;
    });
    const debugSpecsArray = computed(() => {
      var _a;
      if (run.value && ((_a = props.gql) == null ? void 0 : _a.currentProject)) {
        const specs = run.value.specs || [];
        const tests = run.value.testsForReview || [];
        const groups = run.value.groups || [];
        const currentTestingType = props.gql.currentProject.currentTestingType;
        const localSpecs = props.gql.currentProject.specs;
        return specsList({
          specs,
          tests,
          groups,
          localSpecs,
          currentTestingType
        });
      }
      return [];
    });
    const isRunning = computed(() => !!run.value && run.value.status === "RUNNING");
    const isScheduledToComplete = computed(() => {
      var _a;
      return !!((_a = run.value) == null ? void 0 : _a.scheduledToCompleteAt);
    });
    const reasonsRunIsHidden = computed(() => {
      var _a;
      return ((_a = run.value) == null ? void 0 : _a.reasonsRunIsHidden) || [];
    });
    const runAgeDays = computed(() => {
      var _a;
      return ((_a = run.value) == null ? void 0 : _a.createdAt) && dayjs().diff(dayjs(run.value.createdAt), "day") || 0;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(TransitionQuickFade, { mode: "out-in" }, {
          default: withCtx(() => {
            var _a, _b;
            return [
              !__props.online ? (openBlock(), createBlock(_sfc_main$V, { key: 0 }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(t)("launchpadErrors.noInternet.connectProject")), 1)
                ]),
                _: 1
              })) : !unref(userProjectStatusStore).hasInitiallyLoaded || unref(userProjectStatusStore).project.isProjectConnected && __props.isLoading ? (openBlock(), createBlock(_sfc_main$C, { key: 1 })) : !unref(userProjectStatusStore).user.isLoggedIn ? (openBlock(), createBlock(_sfc_main$e, {
                key: 2,
                "data-cy": "debug-empty"
              })) : !unref(userProjectStatusStore).project.isProjectConnected ? (openBlock(), createBlock(_sfc_main$d, {
                key: 3,
                "data-cy": "debug-empty"
              })) : !unref(userProjectStatusStore).project.isUsingGit ? (openBlock(), createBlock(_sfc_main$8, { key: 4 })) : unref(cloudStatusMatches)("needsRecordedRun") ? (openBlock(), createBlock(_sfc_main$7, { key: 5 })) : !unref(run) ? (openBlock(), createBlock(_sfc_main$a, {
                key: 6,
                "data-cy": "debug-empty"
              })) : ((_a = unref(run)) == null ? void 0 : _a.status) ? (openBlock(), createElementBlock("div", {
                key: 7,
                class: normalizeClass(["flex flex-col p-[1.5rem] gap-[24px]", { "h-full": unref(shouldBeFullHeight) }])
              }, [
                unref(allRuns) && unref(run).runNumber ? (openBlock(), createBlock(_sfc_main$2, {
                  key: 0,
                  class: "shrink-0",
                  runs: unref(allRuns),
                  "current-run-number": unref(run).runNumber,
                  "current-commit-info": __props.currentCommitInfo,
                  "cloud-project-url": (_b = unref(cloudProject)) == null ? void 0 : _b.cloudProjectUrl
                }, null, 8, ["runs", "current-run-number", "current-commit-info", "cloud-project-url"])) : createCommentVNode("", true),
                createVNode(DebugPageHeader, {
                  gql: unref(run),
                  "commits-ahead": props.commitsAhead
                }, null, 8, ["gql", "commits-ahead"]),
                createVNode(TransitionQuickFade, null, {
                  default: withCtx(() => [
                    unref(isRunning) && unref(run).id ? (openBlock(), createBlock(DebugTestingProgress, {
                      key: 0,
                      "run-id": unref(run).id,
                      class: "shrink-0"
                    }, null, 8, ["run-id"])) : createCommentVNode("", true)
                  ]),
                  _: 1
                }),
                unref(shouldShowPendingRunSplash) ? (openBlock(), createBlock(_sfc_main$A, {
                  key: 1,
                  class: "grow",
                  "is-completion-scheduled": unref(isScheduledToComplete)
                }, null, 8, ["is-completion-scheduled"])) : (openBlock(), createElementBlock(Fragment, { key: 2 }, [
                  shouldDisplayDetails(unref(run).status, unref(run).isHidden) ? (openBlock(), createBlock(_sfc_main$j, {
                    key: 0,
                    status: unref(run).status,
                    specs: unref(run).specs,
                    cancellation: { cancelledAt: unref(run).cancelledAt, cancelledBy: unref(run).cancelledBy },
                    "is-hidden": unref(run).isHidden,
                    "reasons-run-is-hidden": unref(reasonsRunIsHidden),
                    "over-limit-action-type": unref(run).overLimitActionType,
                    "over-limit-action-url": unref(run).overLimitActionUrl,
                    ci: unref(run).ci,
                    errors: unref(run).errors,
                    "run-age-days": unref(runAgeDays)
                  }, null, 8, ["status", "specs", "cancellation", "is-hidden", "reasons-run-is-hidden", "over-limit-action-type", "over-limit-action-url", "ci", "errors", "run-age-days"])) : createCommentVNode("", true),
                  unref(run).totalFailed && shouldDisplaySpecsList(unref(run).status) ? (openBlock(), createBlock(_sfc_main$q, {
                    key: 1,
                    specs: unref(debugSpecsArray)
                  }, null, 8, ["specs"])) : createCommentVNode("", true),
                  unref(run).totalFailed && unref(run).totalFailed > 100 ? (openBlock(), createBlock(DebugSpecLimitBanner, {
                    key: 2,
                    "failed-test-count": unref(run).totalFailed,
                    "cloud-run-url": unref(run).url
                  }, null, 8, ["failed-test-count", "cloud-run-url"])) : createCommentVNode("", true)
                ], 64))
              ], 2)) : createCommentVNode("", true)
            ];
          }),
          _: 1
        })
      ]);
    };
  }
});
gql`
mutation useRecordEvent_recordEvent ($messageId: String!, $campaign: String!, $medium: String!, $payload: String!, $includeMachineId: Boolean) {
  recordEvent(includeMachineId: $includeMachineId, messageId: $messageId, campaign: $campaign, medium: $medium, payload: $payload)
}
`;
function useRecordEvent() {
  const recordEventMutation = useMutation(UseRecordEvent_RecordEventDocument);
  function record(params) {
    recordEventMutation.executeMutation({
      ...params,
      messageId: nanoid(),
      includeMachineId: params.includeMachineId ?? false,
      payload: JSON.stringify(params.payload)
    });
  }
  function decodeCloudId(id) {
    if (!id) {
      return;
    }
    const decoded = decodeBase64Unicode(id);
    return decoded.split(":")[1];
  }
  return {
    record,
    decodeCloudId
  };
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Debug",
  props: {
    from: null,
    runNumber: null
  },
  setup(__props) {
    var _a;
    const props = __props;
    const online = useOnline();
    gql`
subscription Debug_specsChange {
  specsChange {
    id
    specs {
      id
      ...DebugLocalSpecs
    }
  }
}
`;
    gql`
query Debug($runNumber: Int!, $commitShas: [String!]!) {
  ...DebugSpecs
}
`;
    const relevantRuns = useRelevantRun("DEBUG");
    const recordEvent = useRecordEvent();
    const userProjectStatusStore = useUserProjectStatusStore();
    if (props.from) {
      recordEvent.record({
        campaign: "Navigated To Debug Page",
        medium: props.from,
        includeMachineId: true,
        payload: {
          projectId: userProjectStatusStore.projectId,
          runNumber: props.runNumber,
          userUuid: recordEvent.decodeCloudId((_a = userProjectStatusStore.userData) == null ? void 0 : _a.id)
        }
      });
    }
    const variables = computed(() => {
      var _a2;
      return {
        runNumber: ((_a2 = relevantRuns.value.selectedRun) == null ? void 0 : _a2.runNumber) || -1,
        commitShas: relevantRuns.value.commitShas
      };
    });
    const shouldPauseQuery = computed(() => {
      return variables.value.runNumber === -1 || !online;
    });
    const cachedProject = ref();
    const query = useQuery({ query: DebugDocument, variables, pause: shouldPauseQuery, requestPolicy: "network-only" });
    const isLoading = computed(() => {
      var _a2, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
      const relevantRunsHaveNotLoaded = !relevantRuns.value.all;
      const queryIsBeingFetched = query.fetching.value;
      const cloudProject = ((_c = (_b = (_a2 = query.data.value) == null ? void 0 : _a2.currentProject) == null ? void 0 : _b.cloudProject) == null ? void 0 : _c.__typename) === "CloudProject" ? (_e = (_d = query.data.value) == null ? void 0 : _d.currentProject) == null ? void 0 : _e.cloudProject : null;
      const currentRunNumber = (_g = (_f = relevantRuns.value) == null ? void 0 : _f.selectedRun) == null ? void 0 : _g.runNumber;
      const cachedRunNumber = ((_j = (_i = (_h = cachedProject.value) == null ? void 0 : _h.currentProject) == null ? void 0 : _i.cloudProject) == null ? void 0 : _j.__typename) === "CloudProject" ? (_k = cachedProject.value.currentProject.cloudProject.runByNumber) == null ? void 0 : _k.runNumber : void 0;
      const currentRunIsChanging = currentRunNumber !== cachedRunNumber;
      const waitingForRunToFetchFromTheCloud = !!currentRunNumber && currentRunNumber > 0 && (!cloudProject || !((_l = cloudProject.runByNumber) == null ? void 0 : _l.status));
      return relevantRunsHaveNotLoaded || currentRunIsChanging && (queryIsBeingFetched || waitingForRunToFetchFromTheCloud);
    });
    watchEffect(() => {
      var _a2, _b, _c;
      if (((_c = (_b = (_a2 = query.data.value) == null ? void 0 : _a2.currentProject) == null ? void 0 : _b.cloudProject) == null ? void 0 : _c.__typename) === "CloudProject") {
        const cloudProject = query.data.value.currentProject.cloudProject;
        if (cloudProject.runByNumber !== void 0) {
          cachedProject.value = query.data.value;
        }
      }
    });
    useSubscription({ query: Debug_SpecsChangeDocument });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$1, {
        "data-cy": "debug-container",
        gql: cachedProject.value,
        "is-loading": unref(isLoading),
        "commits-ahead": unref(relevantRuns).commitsAhead || 0,
        "current-commit-info": unref(relevantRuns).currentCommitInfo,
        online: unref(online)
      }, null, 8, ["gql", "is-loading", "commits-ahead", "current-commit-info", "online"]);
    };
  }
});
export {
  _sfc_main as default
};
