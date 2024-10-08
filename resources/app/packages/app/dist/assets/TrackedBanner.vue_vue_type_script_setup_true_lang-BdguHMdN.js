import { d as defineComponent, o as openBlock, i as createElementBlock, m as renderSlot, n as normalizeClass, a as createBaseVNode, J as gql, aD as useQuery, aj as useMutation, h as ref, aV as nanoid, a9 as watchEffect, A as watch, z as onMounted, aC as lodashExports, c as createBlock, w as withCtx, G as mergeProps, ac as _sfc_main$2 } from "./index-BVZ6TAOi.js";
import { a4 as TrackedBanner_ProjectStateDocument, a5 as TrackedBanner_SetProjectStateDocument, a6 as TrackedBanner_RecordBannerSeenDocument } from "./Tooltip.vue_vue_type_style_index_0_lang-Bd9NYZxG.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CodeTag",
  props: {
    bg: { type: Boolean }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("code", {
        class: normalizeClass(["font-medium rounded-[4px] mx-[4px] px-[8px] pb-0 text-[14px] leading-[24px] inline-block", { "bg-gray-50": !__props.bg }])
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
const _hoisted_1 = {
  style: { "min-width": "16px", "min-height": "16px" },
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M15 8L1 1L3 8L1 15L15 8Z",
  fill: "#D0D2E0",
  class: "icon-light"
}, null, -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M3 8L1 15L15 8L1 1L3 8ZM3 8H6",
  stroke: "#1B1E2E",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "icon-dark"
}, null, -1);
const _hoisted_4 = [
  _hoisted_2,
  _hoisted_3
];
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1, _hoisted_4);
}
const SendIcon = { name: "cy-paper-airplane_x16", render };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TrackedBanner",
  props: {
    bannerId: null,
    hasBannerBeenShown: { type: Boolean },
    eventData: null
  },
  setup(__props) {
    const props = __props;
    gql`
query TrackedBanner_ProjectState {
  currentProject {
    id
    savedState
  }
}
`;
    gql`
mutation TrackedBanner_SetProjectState($value: String!) {
  setPreferences(type: project, value: $value) {
    ...TestingPreferences
    ...SpecRunner_Preferences
    currentProject {
      id
      savedState
    }
  }
}
`;
    gql`
mutation TrackedBanner_recordBannerSeen($campaign: String!, $messageId: String!, $medium: String!, $cohort: String) {
  recordEvent(campaign: $campaign, messageId: $messageId, medium: $medium, cohort: $cohort)
}
`;
    const stateQuery = useQuery({ query: TrackedBanner_ProjectStateDocument });
    const setStateMutation = useMutation(TrackedBanner_SetProjectStateDocument);
    const reportSeenMutation = useMutation(TrackedBanner_RecordBannerSeenDocument);
    const bannerInstanceId = ref(nanoid());
    const isAlertDisplayed = ref(true);
    watchEffect(() => {
      if (!props.hasBannerBeenShown && props.eventData) {
        recordBannerShown(props.eventData);
      }
    });
    watch(() => isAlertDisplayed.value, async (newVal) => {
      if (!newVal) {
        await updateBannerState("dismissed");
      }
    });
    onMounted(async () => {
      await updateBannerState("lastShown");
    });
    async function updateBannerState(field) {
      var _a, _b, _c;
      const savedBannerState = ((_c = (_b = (_a = stateQuery.data.value) == null ? void 0 : _a.currentProject) == null ? void 0 : _b.savedState) == null ? void 0 : _c.banners) ?? {};
      lodashExports.set(savedBannerState, [props.bannerId, field], Date.now());
      await setStateMutation.executeMutation({ value: JSON.stringify({ banners: savedBannerState }) });
    }
    function recordBannerShown({ campaign, medium, cohort }) {
      reportSeenMutation.executeMutation({
        campaign,
        messageId: bannerInstanceId.value,
        medium,
        cohort: cohort || null
      });
    }
    async function dismiss() {
      await updateBannerState("dismissed");
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$2, mergeProps({
        modelValue: isAlertDisplayed.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isAlertDisplayed.value = $event)
      }, _ctx.$attrs), {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default", {
            dismiss,
            bannerInstanceId: bannerInstanceId.value
          })
        ]),
        _: 3
      }, 16, ["modelValue"]);
    };
  }
});
export {
  SendIcon as S,
  _sfc_main as _,
  _sfc_main$1 as a
};
