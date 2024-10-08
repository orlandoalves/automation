import { d as defineComponent, o as openBlock, i as createElementBlock, a as createBaseVNode, m as renderSlot, t as toDisplayString, j as createCommentVNode, J as gql, g as useI18n, aj as useMutation, c as createBlock, w as withCtx, V as createTextVNode, b as unref, bh as useSlots, E as resolveDynamicComponent, n as normalizeClass, a8 as useRoute, l as computed, h as ref, a9 as watchEffect, aT as nextTick, f as createVNode, b6 as _sfc_main$q, a7 as __unplugin_components_0$2, _ as _export_sfc, r as resolveComponent, ab as _sfc_main$r, F as Fragment, B as renderList, G as mergeProps, C as normalizeStyle, Y as _sfc_main$u, aa as useExternalLink, bi as IconTerminal, bj as _sfc_main$w, bk as useModelWrapper, W as withDirectives, bl as vModelCheckbox, K as isRef, bc as debouncedWatch, aH as getUrlWithParams, aD as useQuery } from "./index-BVZ6TAOi.js";
import { a as _sfc_main$p } from "./OpenFileInIDE.vue_vue_type_script_setup_true_lang-BXMxX5y6.js";
import { B as ExternalEditorSettings_SetPreferredEditorBinaryDocument, _ as _sfc_main$t, D as SetTestingPreferencesDocument, F as SetNotificationSettingsDocument, N as NotificationSettings_ShowNotificationDocument, Z as Z2, G as SettingsDocument, H as Config_ConfigChangeDocument } from "./Tooltip.vue_vue_type_style_index_0_lang-Bd9NYZxG.js";
import { u as useMarkdown } from "./useMarkdown-B8UeZbCC.js";
import { a as _sfc_main$s, _ as _sfc_main$v } from "./SpecPatterns.vue_vue_type_script_setup_true_lang-oZxpftyj.js";
import { _ as _sfc_main$x } from "./CloudConnectButton.vue_vue_type_script_setup_true_lang-B9s3BRIe.js";
import { _ as _sfc_main$y } from "./Switch.vue_vue_type_script_setup_true_lang-xMGPk7a0.js";
import { j } from "./index.es-BsVuF2bS.js";
import { S as SettingsIcon } from "./settings_x16-DXpuBQx9.js";
import { i as isWindows } from "./isWindows-CN-cKu8K.js";
import { u as useSubscription } from "./graphql-XibiI9-P.js";
import "./document-text_x16-GW-sh3Xt.js";
import "./cypress-logo_x16-reWlL6cm.js";
const _hoisted_1$s = ["id"];
const _hoisted_2$j = { class: "font-medium text-[16px] text-gray-900 leading-[24px] inline-flex items-baseline align-middle" };
const _hoisted_3$i = {
  key: 0,
  class: "rounded font-normal bg-gray-50 h-[20px] mx-[8px] px-[4px] text-[14px] text-purple-500 leading-[24px]"
};
const _hoisted_4$e = { class: "text-sm mb-[16px] text-gray-600" };
const _sfc_main$o = /* @__PURE__ */ defineComponent({
  __name: "SettingsSection",
  props: {
    code: null,
    anchor: null
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("section", { id: __props.anchor }, [
        createBaseVNode("h2", _hoisted_2$j, [
          renderSlot(_ctx.$slots, "title"),
          __props.code ? (openBlock(), createElementBlock("code", _hoisted_3$i, toDisplayString(__props.code), 1)) : createCommentVNode("", true)
        ]),
        createBaseVNode("p", _hoisted_4$e, [
          renderSlot(_ctx.$slots, "description")
        ]),
        renderSlot(_ctx.$slots, "default")
      ], 8, _hoisted_1$s);
    };
  }
});
const _sfc_main$n = /* @__PURE__ */ defineComponent({
  __name: "ExternalEditorSettings",
  props: {
    gql: null
  },
  setup(__props) {
    const props = __props;
    gql`
mutation ExternalEditorSettings_SetPreferredEditorBinary ($value: String!) {
  setPreferences (value: $value, type: global) {
    ...ExternalEditorSettings
  }
}`;
    const { t } = useI18n();
    const setPreferredBinaryEditor = useMutation(ExternalEditorSettings_SetPreferredEditorBinaryDocument);
    function handleChoseEditor(binary) {
      setPreferredBinaryEditor.executeMutation({ value: JSON.stringify({ preferredEditorBinary: binary }) });
    }
    gql`
fragment ExternalEditorSettings on Query {
  ...ChooseExternalEditor
}`;
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$o, null, {
        title: withCtx(() => [
          createTextVNode(toDisplayString(unref(t)("settingsPage.editor.title")), 1)
        ]),
        description: withCtx(() => [
          createTextVNode(toDisplayString(unref(t)("settingsPage.editor.description")), 1)
        ]),
        default: withCtx(() => [
          props.gql.localSettings ? (openBlock(), createBlock(_sfc_main$p, {
            key: 0,
            gql: props.gql,
            onChoseEditor: handleChoseEditor
          }, null, 8, ["gql"])) : createCommentVNode("", true)
        ]),
        _: 1
      });
    };
  }
});
const _hoisted_1$r = { class: "rounded bg-gray-50 border border-gray-100 grid py-[18px] px-[20px] text-[14px] w-[364px] gap-[12px]" };
const _hoisted_2$i = { class: "flex justify-between" };
const _hoisted_3$h = { class: "font-medium text-gray-800" };
const _hoisted_4$d = {
  class: "text-gray-500",
  "data-testid": "proxy-server"
};
const _hoisted_5$a = { class: "flex justify-between" };
const _hoisted_6$5 = { class: "font-medium text-gray-800" };
const _hoisted_7$3 = {
  class: "text-gray-500",
  "data-testid": "bypass-list"
};
const _sfc_main$m = /* @__PURE__ */ defineComponent({
  __name: "ProxySettings",
  props: {
    gql: null
  },
  setup(__props) {
    const props = __props;
    const { t } = useI18n();
    gql`
fragment ProxySettings on Query {
  localSettings {
    preferences {
      proxyServer
      proxyBypass
    }
  }
}
`;
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$o, null, {
        title: withCtx(() => [
          createTextVNode(toDisplayString(unref(t)("settingsPage.proxy.title")), 1)
        ]),
        description: withCtx(() => [
          createTextVNode(toDisplayString(unref(t)("settingsPage.proxy.description")), 1)
        ]),
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1$r, [
            createBaseVNode("div", _hoisted_2$i, [
              createBaseVNode("span", _hoisted_3$h, toDisplayString(unref(t)("settingsPage.proxy.proxyServer")), 1),
              createBaseVNode("span", _hoisted_4$d, toDisplayString(props.gql.localSettings.preferences.proxyServer || "-"), 1)
            ]),
            createBaseVNode("div", _hoisted_5$a, [
              createBaseVNode("span", _hoisted_6$5, toDisplayString(unref(t)("settingsPage.proxy.bypassList")), 1),
              createBaseVNode("span", _hoisted_7$3, toDisplayString(props.gql.localSettings.preferences.proxyBypass || "-"), 1)
            ])
          ])
        ]),
        _: 1
      });
    };
  }
});
const _hoisted_1$q = { class: "rounded flex text-left w-full py-[14px] items-center" };
const _hoisted_2$h = { class: "flex h-[40px] px-[24px] items-center" };
const _hoisted_3$g = { class: "flex flex-row grow flex-wrap h-auto border-gray-100 border-l-[1px] px-[16px] gap-[4px] justify-between" };
const _hoisted_4$c = { class: "font-normal text-sm text-gray-700 select-none" };
const _hoisted_5$9 = {
  key: 0,
  class: "flex items-center"
};
const _hoisted_6$4 = {
  key: 0,
  class: "flex px-[16px] items-center"
};
const _sfc_main$l = /* @__PURE__ */ defineComponent({
  __name: "ListRowHeader",
  props: {
    description: { default: void 0 },
    icon: { default: void 0 },
    gray: { type: Boolean, default: false },
    bigHeader: { type: Boolean, default: false }
  },
  setup(__props) {
    const slots = useSlots();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$q, [
        createBaseVNode("div", _hoisted_2$h, [
          renderSlot(_ctx.$slots, "icon", {}, () => [
            (openBlock(), createBlock(resolveDynamicComponent(__props.icon), { class: "h-[24px] w-[24px]" }))
          ])
        ]),
        createBaseVNode("div", _hoisted_3$g, [
          createBaseVNode("div", null, [
            createBaseVNode("h2", {
              class: normalizeClass(["text-indigo-500 whitespace-nowrap", { "text-[18px] leading-[24px]": __props.bigHeader }])
            }, [
              renderSlot(_ctx.$slots, "header")
            ], 2),
            createBaseVNode("p", _hoisted_4$c, [
              renderSlot(_ctx.$slots, "description", {}, () => [
                createBaseVNode("span", null, toDisplayString(__props.description), 1)
              ])
            ])
          ]),
          unref(slots).middle ? (openBlock(), createElementBlock("div", _hoisted_5$9, [
            renderSlot(_ctx.$slots, "middle")
          ])) : createCommentVNode("", true)
        ]),
        unref(slots).right ? (openBlock(), createElementBlock("div", _hoisted_6$4, [
          renderSlot(_ctx.$slots, "right")
        ])) : createCommentVNode("", true)
      ]);
    };
  }
});
const _hoisted_1$p = {
  "data-cy": "setting-expanded-container",
  class: "divide-y space-y-[32px] divide-gray-100 p-[24px] children:pt-[24px] first:first:pt-0"
};
const _sfc_main$k = /* @__PURE__ */ defineComponent({
  __name: "SettingsCard",
  props: {
    title: null,
    name: null,
    description: null,
    icon: null,
    maxHeight: null
  },
  setup(__props) {
    const props = __props;
    const route = useRoute();
    const initiallyOpen = computed(() => {
      if (!props.name || !route.query.section) {
        return false;
      }
      return route.query.section === props.name;
    });
    const root = ref();
    function maybeScrollToAnchor() {
      var _a;
      if (!initiallyOpen.value) {
        return;
      }
      if (!route.query.anchor) {
        return;
      }
      if (!((_a = root.value) == null ? void 0 : _a.$el)) {
        return;
      }
      const $el = root.value.$el;
      const $anchor = $el.querySelector(`#${route.query.anchor}`);
      $anchor == null ? void 0 : $anchor.scrollIntoView({ behavior: "smooth" });
    }
    watchEffect(() => {
      if (initiallyOpen.value) {
        nextTick(maybeScrollToAnchor);
      }
    });
    return (_ctx, _cache) => {
      const _component_i_cy_chevron_down = __unplugin_components_0$2;
      return openBlock(), createBlock(_sfc_main$q, {
        ref_key: "root",
        ref: root,
        class: "border rounded bg-light-50 border-gray-100 w-full block overflow-hidden hocus-default",
        "max-height": __props.maxHeight,
        "initially-open": unref(initiallyOpen),
        lazy: "",
        "data-cy": __props.title
      }, {
        target: withCtx(({ open }) => [
          createVNode(_sfc_main$l, {
            class: normalizeClass(["cursor-pointer bg-gray-50", { "border-b border-b-gray-100 rounded-b-none": open }]),
            "big-header": ""
          }, {
            icon: withCtx(() => [
              (openBlock(), createBlock(resolveDynamicComponent(__props.icon), { class: "h-[24px] w-[24px] icon-dark-indigo-500 icon-light-indigo-200" }))
            ]),
            header: withCtx(() => [
              createTextVNode(toDisplayString(__props.title), 1)
            ]),
            description: withCtx(() => [
              createTextVNode(toDisplayString(__props.description), 1)
            ]),
            right: withCtx(() => [
              createVNode(_component_i_cy_chevron_down, {
                class: normalizeClass([{ "rotate-180": open }, "max-w-[16px] transform transition duration-250 icon-dark-gray-300"])
              }, null, 8, ["class"])
            ]),
            _: 2
          }, 1032, ["class"])
        ]),
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1$p, [
            renderSlot(_ctx.$slots, "default")
          ])
        ]),
        _: 3
      }, 8, ["max-height", "initially-open", "data-cy"]);
    };
  }
});
const _hoisted_1$o = {
  width: "8",
  height: "8",
  viewBox: "0 0 8 8",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$g = /* @__PURE__ */ createBaseVNode("circle", {
  cx: "4",
  cy: "4",
  r: "2.5",
  class: "icon-light-fill icon-dark-stroke",
  fill: "#F3F4FA",
  stroke: "#D0D2E0",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1);
const _hoisted_3$f = [
  _hoisted_2$g
];
function render$8(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$o, _hoisted_3$f);
}
const __unplugin_components_0$1 = { name: "cy-dot-outline-small", render: render$8 };
const _sfc_main$j = /* @__PURE__ */ defineComponent({
  __name: "StatusIndicator",
  props: {
    type: null
  },
  setup(__props) {
    const props = __props;
    const typeClasses = {
      success: "text-jade-500 icon-light-jade-500 icon-dark-jade-500 font-medium",
      error: "text-red-500 icon-light-red-500 icon-dark-red-500",
      warning: "text-warning-500 icon-light-warning-500 icon-dark-warning-500",
      disabled: "text-gray-500 icon-light-gray-50 icon-dark-gray-200"
    };
    const classes = computed(() => props.type ? typeClasses[props.type] : []);
    return (_ctx, _cache) => {
      const _component_i_cy_dot_outline_small = __unplugin_components_0$1;
      return openBlock(), createElementBlock("span", {
        class: normalizeClass(["rounded cursor-default border-gray-100 border text-sm text-center grid-flow-col grid px-[8px] leading-[22px] gap-[4px] items-center justify-between select-none", unref(classes)])
      }, [
        createVNode(_component_i_cy_dot_outline_small, {
          class: normalizeClass(["h-[8px] w-[8px]", unref(classes)])
        }, null, 8, ["class"]),
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
const _hoisted_1$n = {
  role: "row",
  class: "grid grid-flow-row"
};
const _hoisted_2$f = { class: "inline-flex items-baseline" };
const _hoisted_3$e = {
  class: "inline text-indigo-500 text-md",
  role: "rowheader",
  "data-cy": "experimentName"
};
const _hoisted_4$b = { class: "rounded font-mono bg-gray-50 text-sm ml-[8px] py-[2px] px-[4px] text-purple-500" };
const _hoisted_5$8 = {
  role: "definition",
  class: "text-gray-600"
};
const _hoisted_6$3 = ["innerHTML"];
const _hoisted_7$2 = { class: "ml-[20px] col-end-auto col-start-2 row-start-1 row-end-3 inline-grid items-center justify-self-end" };
const _sfc_main$i = /* @__PURE__ */ defineComponent({
  __name: "ExperimentRow",
  props: {
    experiment: null
  },
  setup(__props) {
    const props = __props;
    const descriptionRef = ref();
    const { markdown } = useMarkdown(descriptionRef, props.experiment.description, {
      classes: {
        overwrite: true,
        code: ["text-purple-500 text-[12px] bg-gray-50 font-normal px-[4px] rounded"],
        pre: ["text-indigo-500"]
      }
    });
    const { t } = useI18n();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$n, [
        createBaseVNode("div", _hoisted_2$f, [
          createBaseVNode("h3", _hoisted_3$e, toDisplayString(__props.experiment.name), 1),
          createBaseVNode("span", _hoisted_4$b, toDisplayString(__props.experiment.key), 1)
        ]),
        createBaseVNode("span", _hoisted_5$8, [
          createBaseVNode("span", {
            ref_key: "descriptionRef",
            ref: descriptionRef,
            class: "description children:text-sm children:leading-[24px]",
            "data-cy": "experimentDescription",
            innerHTML: unref(markdown)
          }, null, 8, _hoisted_6$3)
        ]),
        createBaseVNode("div", _hoisted_7$2, [
          createVNode(_sfc_main$j, {
            type: __props.experiment.enabled ? "success" : "disabled"
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(__props.experiment.enabled ? unref(t)("status.enabled") : unref(t)("status.disabled")), 1)
            ]),
            _: 1
          }, 8, ["type"])
        ])
      ]);
    };
  }
});
const ExperimentRow = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["__scopeId", "data-v-3684ea8b"]]);
const _hoisted_1$m = { class: "border rounded mx-auto border-gray-100 grid px-[24px] gap-0 align-center first:border-t-0" };
const _sfc_main$h = /* @__PURE__ */ defineComponent({
  __name: "Experiments",
  props: {
    gql: null
  },
  setup(__props) {
    const props = __props;
    const { t } = useI18n();
    gql`
fragment Experiments on CurrentProject {
  id
  config
}
`;
    const localExperiments = computed(() => {
      var _a, _b;
      const experimentalConfigurations = ((_a = props.gql) == null ? void 0 : _a.config) ? props.gql.config.filter((item) => item.field.startsWith("experimental")) : [];
      const { value: { experimentalStrategy, experimentalOptions, from } } = (_b = props.gql) == null ? void 0 : _b.config.find((item) => item.field === "retries");
      experimentalConfigurations.push({
        field: "retries.experimentalStrategy",
        from,
        value: experimentalStrategy
      });
      experimentalConfigurations.push({
        field: "retries.experimentalOptions",
        from,
        value: experimentalOptions
      });
      return experimentalConfigurations.map((configItem) => {
        return {
          key: configItem.field,
          name: t(`settingsPage.experiments.${configItem.field}.name`),
          enabled: !!configItem.value,
          description: t(`settingsPage.experiments.${configItem.field}.description`)
        };
      });
    });
    return (_ctx, _cache) => {
      const _component_i18n_t = resolveComponent("i18n-t");
      return openBlock(), createBlock(_sfc_main$o, { "data-cy": "settings-experiments" }, {
        title: withCtx(() => [
          createTextVNode(toDisplayString(unref(t)("settingsPage.experiments.title")), 1)
        ]),
        description: withCtx(() => [
          createVNode(_component_i18n_t, {
            scope: "global",
            keypath: "settingsPage.experiments.description"
          }, {
            default: withCtx(() => [
              createVNode(_sfc_main$r, { href: "https://on.cypress.io/experiments" }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(t)("links.learnMore")), 1)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1$m, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(localExperiments), (experiment) => {
              return openBlock(), createBlock(ExperimentRow, {
                key: experiment.key,
                "data-cy": `experiment-${experiment.key}`,
                class: "border-t border-gray-100 py-[24px] first:border-0",
                experiment
              }, null, 8, ["data-cy", "experiment"]);
            }), 128))
          ])
        ]),
        _: 1
      });
    };
  }
});
const _hoisted_1$l = { class: "text-sm" };
const _hoisted_2$e = { class: "text-gray-600 leading-snug font-light" };
const __default__ = {
  inheritAttrs: false
};
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  ...__default__,
  __name: "ConfigBadge",
  props: {
    label: null
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$l, [
        createBaseVNode("p", mergeProps({
          class: "font-mono whitespace-nowrap rounded px-[2px] w-min",
          "data-testid": "legend-label"
        }, _ctx.$attrs), toDisplayString(__props.label), 17),
        createBaseVNode("p", _hoisted_2$e, [
          renderSlot(_ctx.$slots, "default")
        ])
      ]);
    };
  }
});
const CONFIG_LEGEND_COLOR_MAP = {
  default: "text-gray-800 bg-gray-50",
  config: "bg-teal-100 text-teal-700",
  env: "bg-orange-100 text-orange-700",
  cli: "bg-red-50 text-red-700",
  plugin: "bg-purple-50 text-purple-700"
};
const _hoisted_1$k = { class: "children:mb-[18px]" };
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "ConfigLegend",
  props: {
    gql: null
  },
  setup(__props) {
    const props = __props;
    const { t } = useI18n();
    const legendText = computed(() => {
      return {
        default: {
          label: t("settingsPage.config.legend.default.label"),
          description: t("settingsPage.config.legend.default.description")
        },
        config: {
          label: t("settingsPage.config.legend.config.label"),
          descriptionKey: "settingsPage.config.legend.config.description"
        },
        env: {
          label: t("settingsPage.config.legend.env.label"),
          description: t("settingsPage.config.legend.env.description")
        },
        cli: {
          label: t("settingsPage.config.legend.cli.label"),
          description: t("settingsPage.config.legend.cli.description")
        },
        dynamic: {
          label: t("settingsPage.config.legend.dynamic.label"),
          descriptionKey: "settingsPage.config.legend.dynamic.description"
        }
      };
    });
    return (_ctx, _cache) => {
      const _component_i18n_t = resolveComponent("i18n-t");
      return openBlock(), createElementBlock("div", _hoisted_1$k, [
        createVNode(_sfc_main$g, {
          class: normalizeClass(unref(CONFIG_LEGEND_COLOR_MAP).default),
          label: unref(legendText).default.label
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(unref(legendText).default.description), 1)
          ]),
          _: 1
        }, 8, ["class", "label"]),
        createVNode(_sfc_main$g, {
          class: normalizeClass(unref(CONFIG_LEGEND_COLOR_MAP).config),
          label: unref(legendText).config.label
        }, {
          default: withCtx(() => [
            createVNode(_component_i18n_t, {
              scope: "global",
              keypath: unref(legendText).config.descriptionKey
            }, {
              default: withCtx(() => [
                createVNode(_sfc_main$s, {
                  gql: props.gql
                }, null, 8, ["gql"])
              ]),
              _: 1
            }, 8, ["keypath"])
          ]),
          _: 1
        }, 8, ["class", "label"]),
        createVNode(_sfc_main$g, {
          class: normalizeClass(unref(CONFIG_LEGEND_COLOR_MAP).env),
          label: unref(legendText).env.label
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(unref(legendText).env.description), 1)
          ]),
          _: 1
        }, 8, ["class", "label"]),
        createVNode(_sfc_main$g, {
          class: normalizeClass(unref(CONFIG_LEGEND_COLOR_MAP).cli),
          label: unref(legendText).cli.label
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(unref(legendText).cli.description), 1)
          ]),
          _: 1
        }, 8, ["class", "label"]),
        createVNode(_sfc_main$g, {
          class: normalizeClass(unref(CONFIG_LEGEND_COLOR_MAP).plugin),
          label: unref(legendText).dynamic.label
        }, {
          default: withCtx(() => [
            createVNode(_component_i18n_t, {
              scope: "global",
              keypath: unref(legendText).dynamic.descriptionKey
            }, {
              default: withCtx(() => [
                createVNode(_sfc_main$r, {
                  href: "https://on.cypress.io/setup-node-events",
                  class: "text-purple-500"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" setupNodeEvents ")
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["keypath"])
          ]),
          _: 1
        }, 8, ["class", "label"])
      ]);
    };
  }
});
const _hoisted_1$j = {
  viewBox: "0 0 24 24",
  width: "1em",
  height: "1em"
};
const _hoisted_2$d = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "m12.89 3l1.96.4L11.11 21l-1.96-.4zm6.7 9L16 8.41V5.58L22.42 12L16 18.41v-2.83zM1.58 12L8 5.58v2.83L4.41 12L8 15.58v2.83z"
}, null, -1);
const _hoisted_3$d = [
  _hoisted_2$d
];
function render$7(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$j, _hoisted_3$d);
}
const IconCode = { name: "mdi-code", render: render$7 };
const _hoisted_1$i = ["data-cy-config"];
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "RenderPrimitive",
  props: {
    value: null,
    from: null,
    class: null
  },
  setup(__props) {
    const props = __props;
    const content = computed(() => {
      if (props.value === null || props.value === void 0) {
        return "null";
      }
      if (typeof props.value === "string") {
        if (props.value.startsWith("[Function")) {
          return `${props.value.slice(10, -1)} ( ) { ... }`;
        }
        return `'${props.value.replaceAll("'", "\\'")}'`;
      }
      return props.value.toString();
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$t, {
        class: "inline",
        placement: "right"
      }, {
        popper: withCtx(() => [
          createTextVNode(toDisplayString(props.from), 1)
        ]),
        default: withCtx(() => [
          createBaseVNode("span", {
            class: normalizeClass(props.class),
            "data-cy-config": props.from
          }, toDisplayString(unref(content)) + ", ", 11, _hoisted_1$i)
        ]),
        _: 1
      });
    };
  }
});
const _hoisted_1$h = /* @__PURE__ */ createBaseVNode("br", null, null, -1);
const _hoisted_2$c = /* @__PURE__ */ createBaseVNode("span", null, ",", -1);
const _hoisted_3$c = /* @__PURE__ */ createBaseVNode("br", null, null, -1);
const _hoisted_4$a = ["data-cy-config"];
const _hoisted_5$7 = { key: 0 };
const _hoisted_6$2 = ["data-cy-config"];
const _hoisted_7$1 = /* @__PURE__ */ createBaseVNode("br", null, null, -1);
const _hoisted_8$1 = ["data-cy-config"];
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "RenderObject",
  props: {
    value: null,
    colorClasses: { default: "" },
    depth: { default: 0 },
    from: null
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      const _component_RenderObject = resolveComponent("RenderObject", true);
      return Array.isArray(__props.value) ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
        !props.value.length ? (openBlock(), createElementBlock("span", {
          key: 0,
          class: normalizeClass(props.colorClasses)
        }, "[]", 2)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
          createBaseVNode("span", {
            class: normalizeClass(props.colorClasses)
          }, "[", 2),
          _hoisted_1$h,
          (openBlock(true), createElementBlock(Fragment, null, renderList(props.value, (v) => {
            return openBlock(), createElementBlock("span", {
              key: v,
              class: normalizeClass(props.colorClasses),
              style: normalizeStyle(`margin-left:${(props.depth + 1) * 24}px`)
            }, [
              typeof v === "object" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                createVNode(_component_RenderObject, {
                  value: v,
                  "color-classes": props.colorClasses,
                  depth: props.depth + 1,
                  from: props.from
                }, null, 8, ["value", "color-classes", "depth", "from"]),
                _hoisted_2$c
              ], 64)) : (openBlock(), createBlock(_sfc_main$e, {
                key: 1,
                from: __props.from,
                value: v,
                placement: "right",
                "data-cy-config": __props.from
              }, null, 8, ["from", "value", "data-cy-config"])),
              _hoisted_3$c
            ], 6);
          }), 128)),
          createBaseVNode("span", {
            class: normalizeClass(props.colorClasses),
            style: normalizeStyle(`margin-left:${props.depth * 24}px`)
          }, "]", 6)
        ], 64))
      ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
        createBaseVNode("span", {
          class: normalizeClass(props.colorClasses),
          "data-cy-config": props.from
        }, "{", 10, _hoisted_4$a),
        Object.keys(props.value).length ? (openBlock(), createElementBlock("br", _hoisted_5$7)) : createCommentVNode("", true),
        (openBlock(true), createElementBlock(Fragment, null, renderList(props.value, (val, k) => {
          return openBlock(), createElementBlock(Fragment, { key: k }, [
            createBaseVNode("span", {
              class: normalizeClass(props.colorClasses),
              style: normalizeStyle(`margin-left:${(props.depth + 1) * 24}px`),
              "data-cy-config": props.from
            }, toDisplayString(k) + ": ", 15, _hoisted_6$2),
            typeof val === "object" ? (openBlock(), createBlock(_component_RenderObject, {
              key: 0,
              "record-key": k,
              value: val,
              "color-classes": props.colorClasses,
              depth: props.depth + 1,
              from: props.from
            }, null, 8, ["record-key", "value", "color-classes", "depth", "from"])) : (openBlock(), createBlock(_sfc_main$e, {
              key: 1,
              from: props.from,
              value: val,
              placement: "right",
              class: normalizeClass(props.colorClasses),
              "data-cy-config": props.from
            }, null, 8, ["from", "value", "class", "data-cy-config"])),
            _hoisted_7$1
          ], 64);
        }), 128)),
        createBaseVNode("span", {
          class: normalizeClass(props.colorClasses),
          "data-cy-config": props.from,
          style: normalizeStyle(`margin-left:${props.depth * 24}px`)
        }, "}", 14, _hoisted_8$1)
      ], 64));
    };
  }
});
const _hoisted_1$g = { class: "rounded-bl-md rounded-tl-md mx-auto border w-full min-w-[100px] relative hide-scrollbar overflow-auto grow-1" };
const _hoisted_2$b = { class: "font-thin p-[16px] text-gray-600 text-[14px] leading-[24px] block" };
const _hoisted_3$b = /* @__PURE__ */ createBaseVNode("br", null, null, -1);
const _hoisted_4$9 = { class: "pl-[24px]" };
const _hoisted_5$6 = /* @__PURE__ */ createBaseVNode("span", null, ",", -1);
const _hoisted_6$1 = /* @__PURE__ */ createBaseVNode("br", null, null, -1);
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "ConfigCode",
  props: {
    gql: null
  },
  setup(__props) {
    const props = __props;
    gql`
fragment ConfigCode on CurrentProject {
  id
  config
  ...OpenConfigFileInIDE
}
`;
    const sortAlphabetical = (config) => {
      return config.sort((a, b) => {
        return a.field.localeCompare(b.field);
      });
    };
    const colorMap = CONFIG_LEGEND_COLOR_MAP;
    const { t } = useI18n();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$g, [
        createVNode(_sfc_main$s, {
          gql: props.gql
        }, {
          default: withCtx(({ onClick }) => [
            createVNode(_sfc_main$u, {
              variant: "outline",
              class: "top-4 right-4 absolute",
              "prefix-icon": unref(IconCode),
              "prefix-icon-class": "text-gray-500",
              onClick
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(t)("file.edit")), 1)
              ]),
              _: 2
            }, 1032, ["prefix-icon", "onClick"])
          ]),
          _: 1
        }, 8, ["gql"]),
        createBaseVNode("code", _hoisted_2$b, [
          createTextVNode(" {"),
          _hoisted_3$b,
          createBaseVNode("div", _hoisted_4$9, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(sortAlphabetical(props.gql.config), ({ field, value, from }) => {
              return openBlock(), createElementBlock("span", { key: field }, [
                createTextVNode(toDisplayString(field) + ": ", 1),
                value && typeof value === "object" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                  createVNode(_sfc_main$d, {
                    value,
                    "color-classes": `rounded-sm px-[2px] ${unref(colorMap)[from]}`,
                    from
                  }, null, 8, ["value", "color-classes", "from"]),
                  _hoisted_5$6
                ], 64)) : (openBlock(), createBlock(_sfc_main$e, {
                  key: 1,
                  from,
                  value,
                  "data-cy-config": from,
                  class: normalizeClass(["rounded-sm px-[2px]", unref(colorMap)[from]])
                }, null, 8, ["from", "value", "data-cy-config", "class"])),
                _hoisted_6$1
              ]);
            }), 128))
          ]),
          createTextVNode(" } ")
        ])
      ]);
    };
  }
});
const _hoisted_1$f = { class: "flex w-full" };
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "Config",
  props: {
    gql: null
  },
  setup(__props) {
    const props = __props;
    const { t } = useI18n();
    gql`
fragment Config on CurrentProject {
  id
  ...OpenConfigFileInIDE
  ...ConfigCode
}
`;
    return (_ctx, _cache) => {
      const _component_i18n_t = resolveComponent("i18n-t");
      return openBlock(), createBlock(_sfc_main$o, { "data-cy": "settings-config" }, {
        title: withCtx(() => [
          createTextVNode(toDisplayString(unref(t)("settingsPage.config.title")), 1)
        ]),
        description: withCtx(() => [
          createVNode(_component_i18n_t, {
            scope: "global",
            keypath: "settingsPage.config.description"
          }, {
            default: withCtx(() => [
              createVNode(_sfc_main$s, {
                gql: props.gql
              }, null, 8, ["gql"])
            ]),
            _: 1
          })
        ]),
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1$f, [
            createVNode(_sfc_main$c, {
              "data-cy": "config-code",
              gql: props.gql
            }, null, 8, ["gql"]),
            createVNode(_sfc_main$f, {
              gql: props.gql,
              "data-cy": "config-legend",
              class: "rounded-tr-md rounded-br-md border border-l-0 min-w-[280px] py-[28px] px-[22px]"
            }, null, 8, ["gql"])
          ])
        ]),
        _: 1
      });
    };
  }
});
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "SpecPatterns",
  props: {
    gql: null
  },
  setup(__props) {
    const props = __props;
    const { t } = useI18n();
    gql`
fragment SpecPatterns_Settings on CurrentProject {
  id
  ...SpecPatterns
}
`;
    return (_ctx, _cache) => {
      const _component_i18n_t = resolveComponent("i18n-t");
      return openBlock(), createBlock(_sfc_main$o, {
        code: "specPattern",
        "data-cy": "settings-specPatterns"
      }, {
        title: withCtx(() => [
          createTextVNode(toDisplayString(unref(t)("settingsPage.specPattern.title")), 1)
        ]),
        description: withCtx(() => [
          createVNode(_component_i18n_t, {
            scope: "global",
            keypath: "settingsPage.specPattern.description"
          }, {
            default: withCtx(() => [
              createVNode(_sfc_main$r, { href: "https://on.cypress.io/test-type-options" }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(t)("links.learnMore")), 1)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        default: withCtx(() => [
          props.gql ? (openBlock(), createBlock(_sfc_main$v, {
            key: 0,
            gql: props.gql,
            "data-cy": "spec-pattern"
          }, null, 8, ["gql"])) : createCommentVNode("", true)
        ]),
        _: 1
      });
    };
  }
});
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "ProjectSettings",
  props: {
    gql: null
  },
  setup(__props) {
    const props = __props;
    gql`
fragment ProjectSettings on CurrentProject {
  id
  ...Experiments
  ...SpecPatterns_Settings
  ...Config
}
`;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(_sfc_main$a, {
          gql: props.gql
        }, null, 8, ["gql"]),
        createVNode(_sfc_main$h, {
          gql: props.gql
        }, null, 8, ["gql"]),
        createVNode(_sfc_main$b, {
          gql: props.gql
        }, null, 8, ["gql"])
      ], 64);
    };
  }
});
const _hoisted_1$e = {
  style: { "min-width": "16px", "min-height": "16px" },
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$a = /* @__PURE__ */ createBaseVNode("path", {
  d: "M5 2H3C2.44772 2 2 2.44772 2 3V13C2 13.5523 2.44772 14 3 14H13C13.5523 14 14 13.5523 14 13V11M14 7V2M14 2H9M14 2L7 9",
  class: "icon-dark",
  stroke: "#1B1E2E",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1);
const _hoisted_3$a = [
  _hoisted_2$a
];
function render$6(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$e, _hoisted_3$a);
}
const IconExport = { name: "cy-export_x16", render: render$6 };
const _hoisted_1$d = {
  style: { "min-width": "16px", "min-height": "16px" },
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$9 = /* @__PURE__ */ createBaseVNode("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M10.7035 2.46811C9.906 2.17768 9.00651 2 7.99995 2C5.12798 2 3.12771 3.44654 1.88166 4.83104C1.25934 5.52251 0.812476 6.21059 0.520557 6.72574C0.374034 6.98431 0.264985 7.20208 0.191132 7.35874C0.154168 7.43715 0.125908 7.50048 0.10608 7.54624C0.0961628 7.56913 0.0883443 7.58764 0.082591 7.60146L0.0755017 7.61866L0.0731082 7.62455L0.0721977 7.62681L0.0718138 7.62777C-0.0235506 7.86618 -0.023887 8.13298 0.0714774 8.37139L0.0721977 8.37319L0.0731082 8.37545L0.0755017 8.38134L0.082591 8.39854C0.0883443 8.41236 0.0961628 8.43087 0.10608 8.45376C0.125908 8.49952 0.154168 8.56285 0.191132 8.64126C0.264985 8.79792 0.374034 9.01569 0.520557 9.27426C0.812476 9.78941 1.25934 10.4775 1.88166 11.169C1.90067 11.1901 1.91985 11.2112 1.93921 11.2324L3.35514 9.81643C2.85921 9.26272 2.49785 8.70691 2.2606 8.28824C2.20027 8.18177 2.14836 8.08487 2.10467 8C2.14836 7.91512 2.20027 7.81823 2.2606 7.71176C2.49993 7.28941 2.86557 6.72749 3.36825 6.16896C4.3722 5.05346 5.87193 4 7.99995 4C8.37864 4 8.73744 4.03336 9.07708 4.09449L10.7035 2.46811ZM8.167 5.00457C8.1117 5.00154 8.05601 5 7.99995 5C6.3431 5 4.99995 6.34315 4.99995 8C4.99995 8.05605 5.00149 8.11175 5.00453 8.16705L8.167 5.00457ZM7.83299 10.9954L10.9954 7.83304C10.9984 7.88831 11 7.94397 11 8C11 9.65685 9.65681 11 7.99995 11C7.94393 11 7.88826 10.9985 7.83299 10.9954ZM6.92291 11.9055C7.26253 11.9666 7.62129 12 7.99995 12C10.128 12 11.6277 10.9465 12.6317 9.83104C13.1343 9.27251 13.5 8.71059 13.7393 8.28824C13.7996 8.18177 13.8515 8.08487 13.8952 8C13.8515 7.91512 13.7996 7.81823 13.7393 7.71176C13.5021 7.29311 13.1407 6.73731 12.6448 6.18361L14.0607 4.76769C14.0801 4.78881 14.0993 4.80993 14.1182 4.83104C14.7406 5.52251 15.1874 6.21059 15.4794 6.72574C15.6259 6.98431 15.7349 7.20208 15.8088 7.35874C15.8457 7.43715 15.874 7.50048 15.8938 7.54624C15.9037 7.56913 15.9116 7.58764 15.9173 7.60146L15.9244 7.61866L15.9268 7.62455L15.9281 7.62777L15 8L15.9281 8.37223L15.9268 8.37545L15.9244 8.38134L15.9173 8.39854C15.9116 8.41236 15.9037 8.43087 15.8938 8.45376C15.874 8.49952 15.8457 8.56285 15.8088 8.64126C15.7349 8.79792 15.6259 9.01569 15.4794 9.27426C15.1874 9.78941 14.7406 10.4775 14.1182 11.169C12.8722 12.5535 10.8719 14 7.99995 14C6.99342 14 6.09396 13.8223 5.29651 13.5319L6.92291 11.9055ZM15.9281 8.37223C15.9283 8.3718 15.9284 8.37139 15 8C15.9284 7.62861 15.9283 7.6282 15.9281 7.62777C16.0235 7.86618 16.0235 8.13382 15.9281 8.37223ZM0.0714774 8.37139L0.071474 8.37138C0.0713594 8.37095 0.0783897 8.36863 0.999042 8.00036L0.0714774 8.37139ZM0.999954 8L0.0718138 7.62777C0.0716417 7.6282 0.0714774 7.62861 0.999954 8Z",
  fill: "#1B1E2E",
  class: "icon-dark"
}, null, -1);
const _hoisted_3$9 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M2.5 13.5L13.5 2.5",
  class: "icon-dark",
  stroke: "#1B1E2E",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1);
const _hoisted_4$8 = [
  _hoisted_2$9,
  _hoisted_3$9
];
function render$5(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$d, _hoisted_4$8);
}
const __unplugin_components_1 = { name: "cy-eye-closed_x16", render: render$5 };
const _hoisted_1$c = {
  style: { "min-width": "16px", "min-height": "16px" },
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$8 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M10 8C10 9.10457 9.10457 10 8 10C6.89543 10 6 9.10457 6 8C6 6.89543 6.89543 6 8 6C9.10457 6 10 6.89543 10 8Z",
  fill: "#D0D2E0",
  class: "icon-light"
}, null, -1);
const _hoisted_3$8 = /* @__PURE__ */ createBaseVNode("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M10 8C10 9.10457 9.10457 10 8 10C6.89543 10 6 9.10457 6 8C6 6.89543 6.89543 6 8 6C9.10457 6 10 6.89543 10 8Z",
  fill: "#D0D2E0",
  class: "icon-light"
}, null, -1);
const _hoisted_4$7 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M1 8L0.0715233 7.62861C-0.0238411 7.86702 -0.0238411 8.13298 0.0715233 8.37139L1 8ZM15 8L15.9285 8.37139C16.0238 8.13298 16.0238 7.86702 15.9285 7.62861L15 8ZM1 8C1.92848 8.37139 1.92833 8.37176 1.92819 8.37212C1.92815 8.37221 1.92801 8.37254 1.92794 8.37273C1.92779 8.3731 1.92767 8.3734 1.92758 8.37362C1.9274 8.37407 1.92733 8.37423 1.92739 8.37409C1.9275 8.37382 1.92808 8.3724 1.92914 8.36985C1.93126 8.36475 1.93529 8.35519 1.94124 8.34145C1.95315 8.31397 1.97274 8.26989 2.00023 8.21158C2.05528 8.0948 2.14154 7.92194 2.26065 7.71176C2.49998 7.28941 2.86562 6.72749 3.36829 6.16896C4.37225 5.05346 5.87198 4 8 4V2C5.12802 2 3.12775 3.44654 1.88171 4.83104C1.25938 5.52251 0.812522 6.21059 0.520603 6.72574C0.37408 6.98431 0.265031 7.20208 0.191177 7.35874C0.154214 7.43715 0.125954 7.50048 0.106126 7.54624C0.0962087 7.56913 0.0883902 7.58764 0.0826368 7.60146C0.0797598 7.60838 0.0773981 7.61412 0.0755476 7.61866C0.0746223 7.62093 0.0738246 7.62289 0.0731541 7.62455C0.0728189 7.62538 0.0725154 7.62614 0.0722436 7.62681C0.0721079 7.62715 0.0719274 7.6276 0.0718597 7.62777C0.0716876 7.6282 0.0715233 7.62861 1 8ZM8 4C10.128 4 11.6278 5.05346 12.6317 6.16896C13.1344 6.72749 13.5 7.28941 13.7394 7.71176C13.8585 7.92194 13.9447 8.0948 13.9998 8.21158C14.0273 8.26989 14.0469 8.31397 14.0588 8.34145C14.0647 8.35519 14.0687 8.36475 14.0709 8.36985C14.0719 8.3724 14.0725 8.37382 14.0726 8.37409C14.0727 8.37423 14.0726 8.37407 14.0724 8.37362C14.0723 8.3734 14.0722 8.3731 14.0721 8.37273C14.072 8.37254 14.0719 8.37221 14.0718 8.37212C14.0717 8.37176 14.0715 8.37139 15 8C15.9285 7.62861 15.9283 7.6282 15.9281 7.62777C15.9281 7.6276 15.9279 7.62715 15.9278 7.62681C15.9275 7.62614 15.9272 7.62538 15.9268 7.62455C15.9262 7.62289 15.9254 7.62093 15.9245 7.61866C15.9226 7.61412 15.9202 7.60838 15.9174 7.60146C15.9116 7.58764 15.9038 7.56913 15.8939 7.54624C15.874 7.50048 15.8458 7.43715 15.8088 7.35874C15.735 7.20208 15.6259 6.98431 15.4794 6.72574C15.1875 6.21059 14.7406 5.52251 14.1183 4.83104C12.8722 3.44654 10.872 2 8 2V4ZM15 8C14.0715 7.62861 14.0717 7.62824 14.0718 7.62788C14.0719 7.62779 14.072 7.62746 14.0721 7.62727C14.0722 7.6269 14.0723 7.6266 14.0724 7.62638C14.0726 7.62593 14.0727 7.62577 14.0726 7.62591C14.0725 7.62618 14.0719 7.6276 14.0709 7.63015C14.0687 7.63525 14.0647 7.64481 14.0588 7.65855C14.0469 7.68603 14.0273 7.73011 13.9998 7.78842C13.9447 7.9052 13.8585 8.07806 13.7394 8.28824C13.5 8.71059 13.1344 9.27251 12.6317 9.83104C11.6278 10.9465 10.128 12 8 12V14C10.872 14 12.8722 12.5535 14.1183 11.169C14.7406 10.4775 15.1875 9.78941 15.4794 9.27426C15.6259 9.01569 15.735 8.79792 15.8088 8.64126C15.8458 8.56285 15.874 8.49952 15.8939 8.45376C15.9038 8.43087 15.9116 8.41236 15.9174 8.39854C15.9202 8.39162 15.9226 8.38588 15.9245 8.38134C15.9254 8.37907 15.9262 8.37711 15.9268 8.37545C15.9272 8.37462 15.9275 8.37386 15.9278 8.37319C15.9279 8.37285 15.9281 8.3724 15.9281 8.37223C15.9283 8.3718 15.9285 8.37139 15 8ZM8 12C5.87198 12 4.37225 10.9465 3.36829 9.83104C2.86562 9.27251 2.49998 8.71059 2.26065 8.28824C2.14154 8.07806 2.05528 7.9052 2.00023 7.78842C1.97274 7.73011 1.95315 7.68603 1.94124 7.65855C1.93529 7.64481 1.93126 7.63525 1.92914 7.63015C1.92808 7.6276 1.9275 7.62618 1.92739 7.62591C1.92733 7.62577 1.9274 7.62593 1.92758 7.62638C1.92767 7.6266 1.92779 7.6269 1.92794 7.62727C1.92801 7.62746 1.92815 7.62779 1.92819 7.62788C1.92833 7.62824 1.92848 7.62861 1 8C0.0715233 8.37139 0.0716876 8.3718 0.0718597 8.37223C0.0719274 8.3724 0.0721079 8.37285 0.0722436 8.37319C0.0725154 8.37386 0.0728189 8.37462 0.0731541 8.37545C0.0738246 8.37711 0.0746223 8.37907 0.0755476 8.38134C0.0773981 8.38588 0.0797598 8.39162 0.0826368 8.39854C0.0883902 8.41236 0.0962087 8.43087 0.106126 8.45376C0.125954 8.49952 0.154214 8.56285 0.191177 8.64126C0.265031 8.79792 0.37408 9.01569 0.520603 9.27426C0.812522 9.78941 1.25938 10.4775 1.88171 11.169C3.12775 12.5535 5.12802 14 8 14V12ZM9 8C9 8.55228 8.55228 9 8 9V11C9.65685 11 11 9.65685 11 8H9ZM8 9C7.44772 9 7 8.55228 7 8H5C5 9.65685 6.34315 11 8 11V9ZM7 8C7 7.44772 7.44772 7 8 7V5C6.34315 5 5 6.34315 5 8H7ZM8 7C8.55228 7 9 7.44772 9 8H11C11 6.34315 9.65685 5 8 5V7Z",
  fill: "#1B1E2E",
  class: "icon-dark"
}, null, -1);
const _hoisted_5$5 = [
  _hoisted_2$8,
  _hoisted_3$8,
  _hoisted_4$7
];
function render$4(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$c, _hoisted_5$5);
}
const __unplugin_components_0 = { name: "cy-eye-open_x16", render: render$4 };
const _hoisted_1$b = { class: "bg-gray-50 flex items-center w-[400px] h-[32px] pr-[16px] border rounded border-gray-100 text-jade-500 relative" };
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "CodeBox",
  props: {
    code: null,
    prefixIcon: null,
    confidential: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const localConfidential = ref(Boolean(props.confidential));
    return (_ctx, _cache) => {
      const _component_i_cy_eye_open_x16 = __unplugin_components_0;
      const _component_i_cy_eye_closed_x16 = __unplugin_components_1;
      return openBlock(), createElementBlock("div", _hoisted_1$b, [
        (openBlock(), createBlock(resolveDynamicComponent(__props.prefixIcon), { class: "h-[16px] w-[16px] icon-dark-gray-500 mx-[8px]" })),
        __props.confidential ? (openBlock(), createElementBlock("button", {
          key: 0,
          class: "absolute right-[8px] focus:outline-transparent",
          onClick: _cache[0] || (_cache[0] = ($event) => localConfidential.value = !localConfidential.value)
        }, [
          localConfidential.value ? (openBlock(), createBlock(_component_i_cy_eye_open_x16, {
            key: 0,
            class: "icon-dark-gray-500",
            "aria-label": "Record Key Visibility Toggle"
          })) : (openBlock(), createBlock(_component_i_cy_eye_closed_x16, {
            key: 1,
            class: "icon-dark-gray-500",
            "aria-label": "Record Key Visibility Toggle"
          }))
        ])) : createCommentVNode("", true),
        createBaseVNode("code", {
          class: normalizeClass(["text-[14px]", { "text-gray-500": localConfidential.value }]),
          "data-cy": "code-box"
        }, toDisplayString(localConfidential.value ? "*".repeat(__props.code.length) : __props.code), 3)
      ]);
    };
  }
});
const _hoisted_1$a = {
  key: 0,
  class: "gap-[10px] inline-flex justify-start"
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "RecordKey",
  props: {
    gql: null,
    manageKeysUrl: null
  },
  setup(__props) {
    const props = __props;
    const { t } = useI18n();
    gql`
fragment RecordKey on CloudRecordKey {
  id
  key
}
`;
    const openManageKeys = useExternalLink(props.manageKeysUrl);
    const recordKey = computed(() => props.gql.key);
    return (_ctx, _cache) => {
      const _component_i18n_t = resolveComponent("i18n-t");
      return openBlock(), createBlock(_sfc_main$o, { "data-cy": "settings-recordKey" }, {
        title: withCtx(() => [
          createTextVNode(toDisplayString(unref(t)("settingsPage.recordKey.title")), 1)
        ]),
        description: withCtx(() => [
          createVNode(_component_i18n_t, {
            scope: "global",
            keypath: "settingsPage.recordKey.description"
          }, {
            default: withCtx(() => [
              createVNode(_sfc_main$r, { href: "https://on.cypress.io/what-is-a-record-key" }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(t)("links.learnMore")), 1)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        default: withCtx(() => [
          unref(recordKey) ? (openBlock(), createElementBlock("div", _hoisted_1$a, [
            createVNode(_sfc_main$8, {
              code: unref(recordKey),
              "prefix-icon": unref(IconTerminal),
              confidential: ""
            }, null, 8, ["code", "prefix-icon"]),
            createVNode(_sfc_main$w, {
              text: unref(recordKey),
              variant: "outline"
            }, null, 8, ["text"]),
            createVNode(_sfc_main$u, {
              variant: "outline",
              "prefix-icon": unref(IconExport),
              "prefix-icon-class": "icon-dark-gray-500",
              onClick: unref(openManageKeys)
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(t)("settingsPage.recordKey.manageKeys")), 1)
              ]),
              _: 1
            }, 8, ["prefix-icon", "onClick"])
          ])) : createCommentVNode("", true)
        ]),
        _: 1
      });
    };
  }
});
const _hoisted_1$9 = {
  style: { "min-width": "16px", "min-height": "16px" },
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$7 = /* @__PURE__ */ createBaseVNode("path", {
  class: "icon-dark",
  d: "M7 2L4 14M9 14L12 2M14 6H3M13 10H2",
  stroke: "#1B1E2E",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1);
const _hoisted_3$7 = [
  _hoisted_2$7
];
function render$3(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$9, _hoisted_3$7);
}
const IconOctothorpe = { name: "cy-octothorpe_x16", render: render$3 };
const _hoisted_1$8 = {
  key: 0,
  class: "flex gap-[10px] items-center"
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "ProjectId",
  props: {
    gql: null
  },
  setup(__props) {
    const props = __props;
    const { t } = useI18n();
    gql`
fragment ProjectId on Query {
  currentProject {
    id
    projectId
  }
}`;
    return (_ctx, _cache) => {
      const _component_i18n_t = resolveComponent("i18n-t");
      return openBlock(), createBlock(_sfc_main$o, {
        code: "projectId",
        "data-cy": "settings-projectId"
      }, {
        title: withCtx(() => [
          createTextVNode(toDisplayString(unref(t)("settingsPage.projectId.title")), 1)
        ]),
        description: withCtx(() => [
          createVNode(_component_i18n_t, {
            scope: "global",
            keypath: "settingsPage.projectId.description"
          }, {
            default: withCtx(() => [
              createVNode(_sfc_main$r, { href: "https://on.cypress.io/what-is-a-project-id" }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(t)("links.learnMore")), 1)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        default: withCtx(() => {
          var _a, _b, _c;
          return [
            ((_a = props.gql.currentProject) == null ? void 0 : _a.projectId) ? (openBlock(), createElementBlock("div", _hoisted_1$8, [
              createVNode(_sfc_main$8, {
                code: (_b = props.gql.currentProject) == null ? void 0 : _b.projectId,
                "prefix-icon": unref(IconOctothorpe)
              }, null, 8, ["code", "prefix-icon"]),
              createVNode(_sfc_main$w, {
                text: (_c = props.gql.currentProject) == null ? void 0 : _c.projectId,
                variant: "outline"
              }, null, 8, ["text"])
            ])) : createCommentVNode("", true)
          ];
        }),
        _: 1
      });
    };
  }
});
const _hoisted_1$7 = { key: 1 };
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "CloudSettings",
  props: {
    gql: null
  },
  setup(__props) {
    const props = __props;
    gql`
fragment CloudSettings on Query {
  ...ProjectId
  currentProject {
    id
    cloudProject {
      __typename
      ... on CloudProject {
        id
        cloudProjectSettingsUrl
        recordKeys {
          id
          ...RecordKey
        }
      }
    }
  }
}
`;
    return (_ctx, _cache) => {
      var _a, _b, _c, _d;
      return openBlock(), createElementBlock(Fragment, null, [
        ((_a = props.gql.currentProject) == null ? void 0 : _a.projectId) ? (openBlock(), createBlock(_sfc_main$6, {
          key: 0,
          gql: props.gql
        }, null, 8, ["gql"])) : (openBlock(), createElementBlock("section", _hoisted_1$7, [
          createVNode(_sfc_main$x, { "utm-medium": "Settings Tab" })
        ])),
        ((_c = (_b = props.gql.currentProject) == null ? void 0 : _b.cloudProject) == null ? void 0 : _c.__typename) === "CloudProject" && ((_d = props.gql.currentProject.cloudProject.recordKeys) == null ? void 0 : _d.length) ? (openBlock(true), createElementBlock(Fragment, { key: 2 }, renderList(props.gql.currentProject.cloudProject.recordKeys, (key) => {
          return openBlock(), createBlock(_sfc_main$7, {
            key: key.id,
            gql: key,
            "manage-keys-url": props.gql.currentProject.cloudProject.cloudProjectSettingsUrl
          }, null, 8, ["gql", "manage-keys-url"]);
        }), 128)) : createCommentVNode("", true)
      ], 64);
    };
  }
});
const _hoisted_1$6 = { class: "divide-y border rounded divide-gray-200 border-gray-100 px-[16px]" };
const _hoisted_2$6 = { class: "py-[16px]" };
const _hoisted_3$6 = { class: "flex text-gray-800 text-[16px] leading-[24px] items-center" };
const _hoisted_4$6 = ["for"];
const _hoisted_5$4 = { class: "text-[14px] text-gray-600 leading-[24px]" };
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "TestingPreferences",
  props: {
    gql: null
  },
  setup(__props) {
    const props = __props;
    const { t } = useI18n();
    gql`
fragment TestingPreferences on Query {
  localSettings {
    preferences {
      autoScrollingEnabled
    }
  }
}
`;
    gql`
mutation SetTestingPreferences($value: String!) {
  setPreferences (value: $value, type: global) {
    ...TestingPreferences
  }
}`;
    const setPreferences = useMutation(SetTestingPreferencesDocument);
    const autoScrollingPreference = {
      id: "autoScrollingEnabled",
      title: t("settingsPage.testingPreferences.autoScrollingEnabled.title"),
      description: t("settingsPage.testingPreferences.autoScrollingEnabled.description")
    };
    function updatePref(value) {
      setPreferences.executeMutation({
        value: JSON.stringify({ [autoScrollingPreference.id]: value })
      });
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$o, null, {
        title: withCtx(() => [
          createTextVNode(toDisplayString(unref(t)("settingsPage.testingPreferences.title")), 1)
        ]),
        description: withCtx(() => [
          createTextVNode(toDisplayString(unref(t)("settingsPage.testingPreferences.description")), 1)
        ]),
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1$6, [
            createBaseVNode("div", _hoisted_2$6, [
              createBaseVNode("h4", _hoisted_3$6, [
                createBaseVNode("label", {
                  for: unref(autoScrollingPreference).id
                }, toDisplayString(unref(autoScrollingPreference).title), 9, _hoisted_4$6),
                createVNode(_sfc_main$y, {
                  class: "mx-[8px]",
                  value: props.gql.localSettings.preferences[unref(autoScrollingPreference).id] ?? false,
                  name: unref(autoScrollingPreference).id,
                  onUpdate: _cache[0] || (_cache[0] = (value) => updatePref(value))
                }, null, 8, ["value", "name"])
              ]),
              createBaseVNode("p", _hoisted_5$4, toDisplayString(unref(autoScrollingPreference).description), 1)
            ])
          ])
        ]),
        _: 1
      });
    };
  }
});
const _hoisted_1$5 = { class: "relative flex items-center" };
const _hoisted_2$5 = { class: "flex items-center h-5" };
const _hoisted_3$5 = ["id", "value", "aria-describedby", "name", "disabled"];
const _hoisted_4$5 = { class: "ml-2 text-[16px] leading-normal" };
const _hoisted_5$3 = ["for"];
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Checkbox",
  props: {
    id: null,
    modelValue: null,
    state: { default: "default" },
    disabled: { type: Boolean, default: false },
    label: { default: void 0 }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const localValue = useModelWrapper(props, emits);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$5, [
        createBaseVNode("div", _hoisted_2$5, [
          withDirectives(createBaseVNode("input", {
            id: __props.id,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(localValue) ? localValue.value = $event : null),
            value: __props.id,
            "aria-describedby": `${__props.id}-description`,
            name: __props.id,
            type: "checkbox",
            disabled: __props.disabled,
            class: normalizeClass(["border rounded border-gray-200 bg-white h-4 w-4 text-indigo-500 checked:bg-indigo-500 disabled:bg-gray-100 hover:disabled:bg-gray-100", {
              "text-indigo-500 checked:border-indigo-500 checked:bg-indigo-400 checked:text-indigo-400": __props.state === "default",
              "checked:border-jade-300 checked:bg-jade-600 checked:text-jade-600": __props.state === "success",
              "checked:border-red-300 checked:bg-red-600 checked:text-red-600": __props.state === "danger"
            }])
          }, null, 10, _hoisted_3$5), [
            [vModelCheckbox, unref(localValue)]
          ])
        ]),
        createBaseVNode("div", _hoisted_4$5, [
          renderSlot(_ctx.$slots, "label", {}, () => [
            __props.label ? (openBlock(), createElementBlock("label", {
              key: 0,
              for: __props.id,
              class: "disabled:text-gray-500 text-gray-800 font-light select-none"
            }, toDisplayString(__props.label), 9, _hoisted_5$3)) : createCommentVNode("", true)
          ])
        ])
      ]);
    };
  }
});
const _hoisted_1$4 = { class: "border rounded border-gray-100" };
const _hoisted_2$4 = {
  key: 0,
  class: "min-h-[56px] bg-indigo-50 px-[16px] py-[10px] flex flex-wrap justify-between items-center gap-[5px]",
  "data-cy": "enable-notifications"
};
const _hoisted_3$4 = { class: "text-indigo-700 font-medium flex items-center" };
const _hoisted_4$4 = { class: "px-[16px] divide-y divide-gray-50" };
const _hoisted_5$2 = { class: "flex text-gray-800 text-[16px] leading-[24px] items-center" };
const _hoisted_6 = ["for"];
const _hoisted_7 = { class: "py-[16px]" };
const _hoisted_8 = { class: "flex text-gray-800 text-[16px] leading-[24px] items-center" };
const _hoisted_9 = { class: "pt-[5px]" };
const _hoisted_10 = ["for"];
const _hoisted_11 = { class: "py-[16px]" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "NotificationSettings",
  props: {
    gql: null
  },
  setup(__props) {
    const props = __props;
    const { t } = useI18n();
    gql`
fragment NotificationSettings on Query {
  localSettings {
    preferences {
      notifyWhenRunStarts
      notifyWhenRunStartsFailing
      notifyWhenRunCompletes
      desktopNotificationsEnabled
    }
  }
}
`;
    gql`
mutation SetNotificationSettings($value: String!) {
  setPreferences (value: $value, type: global) {
    ...NotificationSettings
  }
}`;
    gql`
mutation NotificationSettings_ShowNotification($title: String!, $body: String!) {
  showSystemNotification(title: $title, body: $body)
}`;
    const switches = [
      {
        id: "notifyWhenRunStarts",
        title: t("settingsPage.notifications.notifyMeWhenRunStarts")
      },
      {
        id: "notifyWhenRunStartsFailing",
        title: t("settingsPage.notifications.notifyMeWhenRunIsFailing")
      }
    ];
    const listRef = ref();
    watchEffect(() => {
      if (!listRef.value) {
        listRef.value = props.gql.localSettings.preferences.notifyWhenRunCompletes;
      }
    });
    const statuses = [
      { id: "passed", label: t("settingsPage.notifications.passed") },
      { id: "failed", label: t("settingsPage.notifications.failed") },
      { id: "cancelled", label: t("settingsPage.notifications.canceled") },
      { id: "errored", label: t("settingsPage.notifications.errored") }
    ];
    const desktopNotificationsEnabled = computed(() => props.gql.localSettings.preferences.desktopNotificationsEnabled);
    const setPreferences = useMutation(SetNotificationSettingsDocument);
    const showNotification = useMutation(NotificationSettings_ShowNotificationDocument);
    async function showTestNotification() {
      await showNotification.executeMutation({ title: t("settingsPage.notifications.testNotificationTitle"), body: t("settingsPage.notifications.testNotificationBody") });
    }
    function updatePref(property, value) {
      setPreferences.executeMutation({
        value: JSON.stringify({ [property]: value })
      });
    }
    async function enableNotifications() {
      updatePref("desktopNotificationsEnabled", true);
      await showNotification.executeMutation({ title: t("specPage.banners.enableNotifications.notificationsEnabledTitle"), body: t("specPage.banners.enableNotifications.notificationsEnabledBody") });
    }
    const debounce = 200;
    debouncedWatch(() => listRef.value, async (newVal) => {
      await setPreferences.executeMutation({
        value: JSON.stringify({ notifyWhenRunCompletes: newVal })
      });
    }, { debounce });
    const troubleshootingHref = getUrlWithParams({ url: "https://on.cypress.io/notifications-troubleshooting", params: {} });
    return (_ctx, _cache) => {
      const _component_i18n_t = resolveComponent("i18n-t");
      return openBlock(), createBlock(_sfc_main$o, { anchor: "notifications" }, {
        title: withCtx(() => [
          createTextVNode(toDisplayString(unref(t)("settingsPage.notifications.title")), 1)
        ]),
        description: withCtx(() => [
          createTextVNode(toDisplayString(unref(t)("settingsPage.notifications.description")), 1)
        ]),
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1$4, [
            !props.gql.localSettings.preferences.desktopNotificationsEnabled ? (openBlock(), createElementBlock("div", _hoisted_2$4, [
              createBaseVNode("div", _hoisted_3$4, [
                createVNode(unref(Z2), {
                  class: "mr-[7px]",
                  "fill-color": "indigo-200",
                  "stroke-color": "indigo-500"
                }),
                createTextVNode(" " + toDisplayString(unref(t)("settingsPage.notifications.enableNotificationsLabel")), 1)
              ]),
              createVNode(unref(j), {
                size: "32",
                class: "font-normal",
                onClick: enableNotifications
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(t)("specPage.banners.enableNotifications.enableDesktopNotifications")), 1)
                ]),
                _: 1
              })
            ])) : createCommentVNode("", true),
            createBaseVNode("div", _hoisted_4$4, [
              (openBlock(), createElementBlock(Fragment, null, renderList(switches, ({ id, title }) => {
                return createBaseVNode("div", {
                  key: id,
                  class: "py-[16px]"
                }, [
                  createBaseVNode("h4", _hoisted_5$2, [
                    createBaseVNode("label", { for: id }, toDisplayString(title), 9, _hoisted_6),
                    createVNode(_sfc_main$y, {
                      class: "mx-[8px]",
                      value: props.gql.localSettings.preferences[id] ?? false,
                      name: id,
                      disabled: !unref(desktopNotificationsEnabled),
                      onUpdate: (value) => updatePref(id, value)
                    }, null, 8, ["value", "name", "disabled", "onUpdate"]),
                    createTextVNode(" " + toDisplayString(unref(gql).localSettings), 1)
                  ])
                ]);
              }), 64)),
              createBaseVNode("div", _hoisted_7, [
                createBaseVNode("h4", _hoisted_8, toDisplayString(unref(t)("settingsPage.notifications.notifyMeWhenRunCompletes")), 1),
                createBaseVNode("div", _hoisted_9, [
                  (openBlock(), createElementBlock(Fragment, null, renderList(statuses, ({ id, label }) => {
                    return createVNode(_sfc_main$3, {
                      id,
                      key: id,
                      modelValue: listRef.value,
                      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => listRef.value = $event),
                      label,
                      state: unref(desktopNotificationsEnabled) ? "default" : "disabled",
                      disabled: !unref(desktopNotificationsEnabled)
                    }, {
                      label: withCtx(() => [
                        createBaseVNode("label", {
                          for: id,
                          class: "text-sm text-gray-900"
                        }, toDisplayString(label), 9, _hoisted_10)
                      ]),
                      _: 2
                    }, 1032, ["id", "modelValue", "label", "state", "disabled"]);
                  }), 64))
                ])
              ]),
              createBaseVNode("div", _hoisted_11, [
                createVNode(_sfc_main$u, {
                  variant: "white",
                  "data-cy": "send-test-notification",
                  disabled: !unref(desktopNotificationsEnabled),
                  onClick: showTestNotification
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(t)("settingsPage.notifications.sendTestNotification")), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"]),
                createVNode(_component_i18n_t, {
                  tag: "p",
                  scope: "global",
                  keypath: "settingsPage.notifications.notReceivingNotifications",
                  class: "pt-[15px] text-gray-600 text-sm font-normal"
                }, {
                  default: withCtx(() => [
                    createVNode(_sfc_main$r, { href: unref(troubleshootingHref) }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(t)("settingsPage.notifications.troubleshoot")), 1)
                      ]),
                      _: 1
                    }, 8, ["href"])
                  ]),
                  _: 1
                })
              ])
            ])
          ])
        ]),
        _: 1
      });
    };
  }
});
const _hoisted_1$3 = {
  style: { "min-width": "24px", "min-height": "24px" },
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$3 = /* @__PURE__ */ createBaseVNode("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M3 17H2V17.1C2 18.7016 3.29837 20 4.9 20H19.1C20.7016 20 22 18.7016 22 17.1V17H21H3Z",
  fill: "#D0D2E0",
  class: "icon-light"
}, null, -1);
const _hoisted_3$3 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M21 17H3M21 17H22V17.1M21 17V6M3 17H2V17.1M3 17V6M5 4H19M5 4C3.89543 4 3 4.89543 3 6M5 4V4C3.89543 4 3 4.89543 3 6V6M19 4C20.1046 4 21 4.89543 21 6M19 4V4C20.1046 4 21 4.89543 21 6V6M22 17.1C22 18.7016 20.7016 20 19.1 20M22 17.1V17.1C22 18.7016 20.7016 20 19.1 20V20M19.1 20H4.9M4.9 20C3.29837 20 2 18.7016 2 17.1M4.9 20V20C3.29837 20 2 18.7016 2 17.1V17.1",
  class: "icon-dark",
  stroke: "#1B1E2E",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1);
const _hoisted_4$3 = /* @__PURE__ */ createBaseVNode("circle", {
  cx: "12",
  cy: "7",
  r: "1",
  fill: "#1B1E2E",
  class: "icon-dark"
}, null, -1);
const _hoisted_5$1 = [
  _hoisted_2$3,
  _hoisted_3$3,
  _hoisted_4$3
];
function render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3, _hoisted_5$1);
}
const IconLaptop = { name: "cy-laptop_x24", render: render$2 };
const _hoisted_1$2 = {
  style: { "min-width": "24px", "min-height": "24px" },
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$2 = /* @__PURE__ */ createBaseVNode("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M2 12.9996C2 7.47679 6.47715 2.99963 12 2.99963C17.5228 2.99963 22 7.47679 22 12.9996C22 16.2713 20.4289 19.176 18 21.0004H6C3.57111 19.176 2 16.2713 2 12.9996ZM12 13.9996C12.5523 13.9996 13 13.5519 13 12.9996C13 12.7235 12.8881 12.4735 12.7071 12.2925C12.5261 12.1116 12.2761 11.9996 12 11.9996C11.4477 11.9996 11 12.4473 11 12.9996C11 13.5519 11.4477 13.9996 12 13.9996Z",
  fill: "#D0D2E0",
  class: "icon-light"
}, null, -1);
const _hoisted_3$2 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M6 21.0004L5.39942 21.7999C5.57262 21.93 5.78338 22.0004 6 22.0004V21.0004ZM18 21.0004V22.0004C18.2166 22.0004 18.4274 21.93 18.6006 21.7999L18 21.0004ZM11.2929 12.2925C10.9024 12.6831 10.9024 13.3162 11.2929 13.7067C11.6834 14.0973 12.3166 14.0973 12.7071 13.7067L11.2929 12.2925ZM17.7071 8.70674C18.0976 8.31622 18.0976 7.68305 17.7071 7.29253C17.3166 6.902 16.6834 6.902 16.2929 7.29253L17.7071 8.70674ZM3 12.9996C3 8.02907 7.02944 3.99963 12 3.99963V1.99963C5.92487 1.99963 1 6.9245 1 12.9996H3ZM12 3.99963C16.9706 3.99963 21 8.02907 21 12.9996H23C23 6.9245 18.0751 1.99963 12 1.99963V3.99963ZM6.60058 20.2008C4.41232 18.5571 3 15.9435 3 12.9996H1C1 16.5991 2.7299 19.7948 5.39942 21.7999L6.60058 20.2008ZM21 12.9996C21 15.9435 19.5877 18.5571 17.3994 20.2008L18.6006 21.7999C21.2701 19.7948 23 16.5991 23 12.9996H21ZM12 12.9996V14.9996C13.1046 14.9996 14 14.1042 14 12.9996H12ZM12 12.9996H10C10 14.1042 10.8954 14.9996 12 14.9996V12.9996ZM12 12.9996V10.9996C10.8954 10.9996 10 11.8951 10 12.9996H12ZM6 22.0004H18V20.0004H6V22.0004ZM14 12.9996C14 12.4476 13.775 11.9463 13.4142 11.5854L12 12.9996H14ZM13.4142 11.5854C13.0534 11.2246 12.552 10.9996 12 10.9996V12.9996L13.4142 11.5854ZM12.7071 13.7067L13.4142 12.9996L12 11.5854L11.2929 12.2925L12.7071 13.7067ZM13.4142 12.9996L17.7071 8.70674L16.2929 7.29253L12 11.5854L13.4142 12.9996Z",
  fill: "currentColor",
  class: "icon-dark"
}, null, -1);
const _hoisted_4$2 = /* @__PURE__ */ createBaseVNode("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M5.68012 8.09402C6.09073 7.5658 6.56611 7.09041 7.09433 6.6798L7.75731 7.34278C8.14783 7.7333 8.14783 8.36647 7.75731 8.75699C7.36678 9.14752 6.73362 9.14752 6.34309 8.75699L5.68012 8.09402ZM4.06189 13.9996C4.02104 13.672 4 13.3383 4 12.9996C4 12.661 4.02104 12.3272 4.06189 11.9996H5C5.55228 11.9996 6 12.4473 6 12.9996C6 13.5519 5.55228 13.9996 5 13.9996H4.06189ZM19.9381 11.9996C19.979 12.3272 20 12.661 20 12.9996C20 13.3383 19.979 13.672 19.9381 13.9996H19C18.4477 13.9996 18 13.5519 18 12.9996C18 12.4473 18.4477 11.9996 19 11.9996H19.9381ZM13 5.06153V5.99963C13 6.55192 12.5523 6.99963 12 6.99963C11.4477 6.99963 11 6.55192 11 5.99963V5.06153C11.3276 5.02068 11.6613 4.99963 12 4.99963C12.3387 4.99963 12.6724 5.02068 13 5.06153Z",
  fill: "currentColor",
  class: "icon-dark"
}, null, -1);
const _hoisted_5 = [
  _hoisted_2$2,
  _hoisted_3$2,
  _hoisted_4$2
];
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2, _hoisted_5);
}
const IconOdometer = { name: "cy-object-odometer_x24", render: render$1 };
const _hoisted_1$1 = {
  style: { "min-width": "24px", "min-height": "24px" },
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$1 = /* @__PURE__ */ createBaseVNode("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M10.2929 4.29289C10.1054 4.10536 9.851 4 9.58579 4H4C3.44772 4 3 4.44772 3 5V8H9.58579C9.851 8 10.1054 7.89464 10.2929 7.70711L12 6L10.2929 4.29289Z",
  fill: "#D0D2E0",
  class: "icon-light"
}, null, -1);
const _hoisted_3$1 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M12 6L10.2929 4.29289C10.1054 4.10536 9.851 4 9.58579 4H4C3.44772 4 3 4.44772 3 5V8M12 6H20C20.5523 6 21 6.44772 21 7V19C21 19.5523 20.5523 20 20 20H4C3.44772 20 3 19.5523 3 19V8M12 6L10.2929 7.70711C10.1054 7.89464 9.851 8 9.58579 8H3",
  stroke: "#1B1E2E",
  "stroke-width": "2",
  "stroke-linejoin": "round",
  class: "icon-dark"
}, null, -1);
const _hoisted_4$1 = [
  _hoisted_2$1,
  _hoisted_3$1
];
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, _hoisted_4$1);
}
const IconFolder = { name: "cy-folder-outline_x24", render };
const _hoisted_1 = {
  class: "space-y-[32px] h-[calc(100vh-[64px])] p-[32px] overflow-auto",
  "data-cy": "settings"
};
const _hoisted_2 = { class: "space-y-[24px]" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("hr", { class: "border-gray-100" }, null, -1);
const _hoisted_4 = { class: "mx-auto font-light text-center text-gray-500 max-w-[500px] text-[16px] leading-[24px]" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SettingsContainer",
  props: {
    gql: null
  },
  setup(__props) {
    const props = __props;
    const { t } = useI18n();
    const footerText = computed(() => {
      var _a;
      return t(
        "settingsPage.footer.text",
        { testingType: ((_a = props.gql.currentProject) == null ? void 0 : _a.currentTestingType) === "component" ? "component" : "E2E" }
      );
    });
    gql`
fragment SettingsContainer on Query {
  ...TestingPreferences
  currentProject {
    id
    ...ProjectSettings
  }
  ...CloudSettings
  ...ExternalEditorSettings
  ...ProxySettings
  ...NotificationSettings
}`;
    const showNotificationSettings = !isWindows;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createVNode(_sfc_main$k, {
            title: unref(t)("settingsPage.project.title"),
            name: "project",
            description: unref(t)("settingsPage.project.description"),
            icon: unref(IconFolder),
            "max-height": "10000px"
          }, {
            default: withCtx(() => [
              props.gql.currentProject ? (openBlock(), createBlock(_sfc_main$9, {
                key: 0,
                gql: props.gql.currentProject
              }, null, 8, ["gql"])) : createCommentVNode("", true)
            ]),
            _: 1
          }, 8, ["title", "description", "icon"]),
          createVNode(_sfc_main$k, {
            title: unref(t)("settingsPage.device.title"),
            description: unref(t)("settingsPage.device.description"),
            name: "device",
            icon: unref(IconLaptop),
            "max-height": "800px"
          }, {
            default: withCtx(() => [
              createVNode(_sfc_main$n, {
                gql: props.gql
              }, null, 8, ["gql"]),
              createVNode(_sfc_main$m, {
                gql: props.gql
              }, null, 8, ["gql"]),
              showNotificationSettings ? (openBlock(), createBlock(_sfc_main$2, {
                key: 0,
                gql: props.gql
              }, null, 8, ["gql"])) : createCommentVNode("", true),
              createVNode(_sfc_main$4, {
                gql: props.gql
              }, null, 8, ["gql"])
            ]),
            _: 1
          }, 8, ["title", "description", "icon"]),
          createVNode(_sfc_main$k, {
            title: unref(t)("settingsPage.cloud.title"),
            description: unref(t)("settingsPage.cloud.description"),
            icon: unref(IconOdometer),
            name: "cloud",
            "max-height": "10000px"
          }, {
            default: withCtx(() => [
              createVNode(_sfc_main$5, {
                gql: props.gql
              }, null, 8, ["gql"])
            ]),
            _: 1
          }, 8, ["title", "description", "icon"])
        ]),
        _hoisted_3,
        createBaseVNode("p", _hoisted_4, toDisplayString(unref(footerText)), 1),
        createVNode(_sfc_main$u, {
          class: "mx-auto group",
          variant: "outline",
          "prefix-icon": unref(SettingsIcon),
          "prefix-icon-class": "icon-dark-gray-500 icon-light-gray-50 group-hocus:icon-dark-indigo-400 group-hocus:icon-light-indigo-50",
          href: unref(t)("settingsPage.footer.buttonLink")
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(unref(t)("settingsPage.footer.button")), 1)
          ]),
          _: 1
        }, 8, ["prefix-icon", "href"])
      ]);
    };
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Settings",
  setup(__props) {
    gql`
query Settings {
  ...SettingsContainer
}`;
    gql`
subscription Config_ConfigChange {
  configChange {
    id
    ...ProjectSettings
  }
}
`;
    const query = useQuery({ query: SettingsDocument });
    useSubscription({ query: Config_ConfigChangeDocument });
    return (_ctx, _cache) => {
      return unref(query).data.value ? (openBlock(), createBlock(_sfc_main$1, {
        key: 0,
        gql: unref(query).data.value
      }, null, 8, ["gql"])) : createCommentVNode("", true);
    };
  }
});
export {
  _sfc_main as default
};
