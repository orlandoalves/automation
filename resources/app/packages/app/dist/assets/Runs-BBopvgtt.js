import { _ as _export_sfc, o as openBlock, i as createElementBlock, aK as createStaticVNode, d as defineComponent, F as Fragment, B as renderList, a as createBaseVNode, n as normalizeClass, f as createVNode, g as useI18n, c as createBlock, w as withCtx, b as unref, V as createTextVNode, t as toDisplayString, j as createCommentVNode, J as gql, h as ref, l as computed, b8 as whenever, r as resolveComponent, ac as _sfc_main$p, aH as getUrlWithParams, ab as _sfc_main$q, aJ as _sfc_main$r, E as resolveDynamicComponent, bd as createSlots, a_ as useSubscription, aj as useMutation, aa as useExternalLink, aC as lodashExports, aU as h, b7 as useVModels, Y as _sfc_main$w, K as isRef, m as renderSlot, aE as useUserProjectStatusStore, z as onMounted, aF as ConnectIcon, bm as getUtmSource, A as watch, bn as _sfc_main$y, aG as BannerIds, aD as useQuery, bo as onUnmounted, aW as useOnline, a9 as watchEffect, a4 as TransitionQuickFade } from "./index-BVZ6TAOi.js";
import { _ as _sfc_main$n } from "./CloudConnectButton.vue_vue_type_script_setup_true_lang-B9s3BRIe.js";
import { b as _sfc_main$l, a as _sfc_main$m, c as _sfc_main$o } from "./PromoHeader.vue_vue_type_script_setup_true_lang-DTNv-Vxo.js";
import { _ as _sfc_main$k, R as RecordGuideImage, u as useRunDateTimeInterval, a as _sfc_main$t, b as _sfc_main$u, D as DebugCommitIcon, L as LockedProject } from "./locked-project_x48-B_LJ3MFF.js";
import { x as x1, J, I as d2, K as oo, M as l0, _ as _sfc_main$s, O as RunCard_ChangeDocument, W as RunCard_ShowDebugForCloudRunDocument, X as Ao, Y as po, $ as co, a0 as RunsErrorRenderer_RequestAccessDocument, a1 as RunsDocument, a2 as RunsContainer_FetchNewerRunsDocument, a3 as RunsGitTreeDocument } from "./Tooltip.vue_vue_type_style_index_0_lang-Bd9NYZxG.js";
import { j } from "./index.es-BsVuF2bS.js";
import { _ as _sfc_main$v } from "./day-BPPVgZCn.js";
import { E as ErrorOutlineIcon } from "./status-errored-outline_x16-BfW96saa.js";
import { u as useMarkdown } from "./useMarkdown-B8UeZbCC.js";
import { R as RefreshIcon } from "./refresh_x16--cGO0Ru4.js";
import { a as _sfc_main$x, S as SendIcon, _ as _sfc_main$z } from "./TrackedBanner.vue_vue_type_script_setup_true_lang-BdguHMdN.js";
import { u as useRelevantRun } from "./useRelevantRun-4sQamk5Z.js";
import "./cypress-logo_x16-reWlL6cm.js";
const _sfc_main$j = {};
const _hoisted_1$i = {
  "data-cy": "runsSkeletonRow",
  class: "p-[16px] gap-[16px] flex justify-between children:flex"
};
const _hoisted_2$d = /* @__PURE__ */ createStaticVNode('<div class="overflow-hidden gap-[8px] children:rounded-lg children:h-[26px] children:bg-gray-50"><div class="shrink-0 w-[80px]"></div><div class="w-[160px] max-w-[160px]"></div><div class="w-[80px] max-w-[80px]"></div><div class="w-[80px] max-w-[80px]"></div></div><div class="children:flex children:items-center overflow-hidden gap-[16px] children:overflow-hidden children:gap-[8px]"><div class="children:bg-gray-50 children:rounded-lg"><div class="shrink-0 w-[16px] h-[16px]"></div><div class="w-[80px] max-w-[80px] h-[20px]"></div></div><div class="children:bg-gray-50 children:rounded-lg"><div class="shrink-0 w-[16px] h-[16px]"></div><div class="w-[120px] max-w-[120px] h-[20px]"></div></div></div>', 2);
const _hoisted_4$5 = [
  _hoisted_2$d
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_1$i, _hoisted_4$5);
}
const RunsSkeletonRow = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["render", _sfc_render]]);
const _hoisted_1$h = {
  key: 0,
  "data-cy": "runsSkeleton-git",
  class: "flex flex-col mb-[24px] gap-[16px] relative before:content-[''] before:absolute before:top-[20px] before:bottom-[10px] before:w-[2px] before:border-2 before:border-dashed before:border-l-0 before:border-y-0 before:border-r-gray-100 before:left-[7px]"
};
const _hoisted_2$c = /* @__PURE__ */ createBaseVNode("div", { class: "relative w-[16px] rounded-lg bg-gray-50" }, null, -1);
const _hoisted_3$8 = /* @__PURE__ */ createBaseVNode("div", { class: "w-[46px] max-w-[46px] rounded-lg bg-gray-50" }, null, -1);
const _hoisted_4$4 = /* @__PURE__ */ createBaseVNode("div", { class: "flex items-center text-gray-50" }, " • ", -1);
const _hoisted_5$7 = /* @__PURE__ */ createBaseVNode("div", { class: "w-[240px] max-w-[240px] rounded-lg bg-gray-50" }, null, -1);
const _hoisted_6$3 = [
  _hoisted_2$c,
  _hoisted_3$8,
  _hoisted_4$4,
  _hoisted_5$7
];
const _hoisted_7$3 = { class: "relative bg-white border border-gray-100 rounded border-1 overflow-hidden" };
const _hoisted_8$2 = {
  key: 1,
  "data-cy": "runsSkeleton-default",
  class: "relative bg-white border border-gray-100 rounded border-1 overflow-hidden mb-[24px]"
};
const _sfc_main$i = /* @__PURE__ */ defineComponent({
  __name: "RunsSkeleton",
  props: {
    isUsingGit: { type: Boolean }
  },
  setup(__props) {
    const numberOfLinesDefault = 7;
    const numberOfLinesGit = 5;
    return (_ctx, _cache) => {
      return __props.isUsingGit ? (openBlock(), createElementBlock("ul", _hoisted_1$h, [
        (openBlock(), createElementBlock(Fragment, null, renderList(numberOfLinesGit, (i) => {
          return createBaseVNode("li", { key: i }, [
            createBaseVNode("div", {
              class: normalizeClass(["flex items-center my-[10px] gap-[8px] children:h-[14px]", { "mt-0": i === 0 }])
            }, _hoisted_6$3, 2),
            createBaseVNode("ul", _hoisted_7$3, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(i % 2 === 0 ? 2 : 1, (j2) => {
                return openBlock(), createElementBlock("li", {
                  key: j2,
                  class: "border-gray-100 [&:not(:last-child)]:border-b w-full block overflow-auto"
                }, [
                  createVNode(RunsSkeletonRow)
                ]);
              }), 128))
            ])
          ]);
        }), 64))
      ])) : (openBlock(), createElementBlock("ul", _hoisted_8$2, [
        (openBlock(), createElementBlock(Fragment, null, renderList(numberOfLinesDefault, (i) => {
          return createBaseVNode("li", {
            key: i,
            class: "border-gray-100 [&:not(:last-child)]:border-b w-full block overflow-auto"
          }, [
            createVNode(RunsSkeletonRow)
          ]);
        }), 64))
      ]));
    };
  }
});
const RUNS_TAB_MEDIUM = "Runs Tab";
const RUNS_PROMO_CAMPAIGNS = {
  login: "Runs Login Empty State",
  connectProject: "Runs Connect Project Empty State",
  recordRun: "Runs Record Run Empty State"
};
const _hoisted_1$g = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  fill: "none",
  viewBox: "0 0 469 284"
};
const _hoisted_2$b = /* @__PURE__ */ createStaticVNode('<g clip-path="url(#a)"><path fill="#fff" d="M1-.5h513v71H1z"></path><path stroke="#E1E3ED" stroke-linecap="round" d="M57 15v40"></path><g stroke-width="2" clip-path="url(#b)"><circle cx="28.5" cy="35" r="9" stroke="#E1E3ED"></circle><path stroke="#6470F3" stroke-linecap="round" d="M28.502 26c4.893-.006 9.017 4.125 8.998 9.001"></path></g><path fill="#4956E3" d="M81.492 31h2.016v-4.219h2.18L87.906 31h2.297l-2.46-4.523c1.312-.477 2.124-1.704 2.124-3.22v-.015c0-2.18-1.469-3.515-3.875-3.515h-4.5V31Zm2.016-5.813V21.36h2.234c1.266 0 2.063.72 2.063 1.899v.015c0 1.211-.75 1.915-2.024 1.915h-2.273Zm10.61 5.977c1.25 0 2.1-.578 2.53-1.46h.04V31h1.945v-8.281h-1.945v4.797c0 1.203-.711 2.007-1.829 2.007-1.109 0-1.656-.664-1.656-1.835v-4.97h-1.945v5.352c0 1.922 1.039 3.094 2.86 3.094Zm6.116-.164h1.946v-4.805c0-1.195.711-2.008 1.828-2.008 1.109 0 1.656.665 1.656 1.844V31h1.945v-5.36c0-1.921-1.039-3.093-2.859-3.093-1.258 0-2.102.578-2.531 1.469h-.039v-1.297h-1.946V31Zm8.938 0h1.945v-4.805c0-1.195.711-2.008 1.828-2.008 1.11 0 1.657.665 1.657 1.844V31h1.945v-5.36c0-1.921-1.039-3.093-2.859-3.093-1.258 0-2.102.578-2.532 1.469h-.039v-1.297h-1.945V31Zm9.969-9.469a1.067 1.067 0 1 0 0-2.133 1.07 1.07 0 0 0-1.086 1.07c0 .579.476 1.063 1.086 1.063ZM118.164 31h1.945v-8.281h-1.945V31Zm3.602 0h1.945v-4.805c0-1.195.711-2.008 1.828-2.008 1.109 0 1.656.665 1.656 1.844V31h1.946v-5.36c0-1.921-1.039-3.093-2.86-3.093-1.258 0-2.101.578-2.531 1.469h-.039v-1.297h-1.945V31Zm12.672 2.898c2.398 0 3.906-1.257 3.906-3.132v-8.047h-1.946v1.406h-.046c-.469-.953-1.375-1.578-2.547-1.578-2.094 0-3.446 1.61-3.446 4.226v.008c0 2.578 1.336 4.172 3.414 4.172 1.188 0 2.125-.562 2.586-1.445h.039v1.195c0 1.055-.695 1.727-1.96 1.727-1.016 0-1.68-.36-1.891-.836l-.024-.063h-1.914l.016.07c.234 1.297 1.617 2.297 3.813 2.297Zm-.055-4.445c-1.25 0-2.039-1.008-2.039-2.64v-.008c0-1.61.789-2.617 2.039-2.617 1.203 0 2.023 1.023 2.023 2.625v.007c0 1.61-.812 2.633-2.023 2.633Z"></path><g clip-path="url(#c)"><rect width="16" height="16" x="80.5" y="39" fill="url(#d)" rx="8"></rect><rect width="15" height="15" x="81" y="39.5" stroke="#1B1E2E" stroke-opacity=".07" rx="7.5"></rect><path fill="#9095AD" d="M103.795 52.137c1.586 0 2.762-.875 2.762-2.12v-.006c0-1.012-.52-1.58-1.955-1.928l-1.128-.273c-.786-.192-1.108-.527-1.108-1.012v-.007c0-.629.533-1.046 1.395-1.046.882 0 1.408.458 1.504 1.149l.006.047h1.135l-.007-.089c-.088-1.189-1.08-2.098-2.638-2.098-1.538 0-2.612.868-2.612 2.092v.007c0 1.025.65 1.647 1.99 1.968l1.128.274c.806.198 1.073.485 1.073.998v.007c0 .642-.574 1.045-1.538 1.045-.971 0-1.497-.417-1.641-1.127l-.014-.069h-1.189l.007.062c.143 1.271 1.155 2.126 2.83 2.126Zm6.309 0c.233 0 .486-.028.636-.048v-.964c-.102.007-.239.027-.383.027-.635 0-.97-.212-.97-.97v-4.307h1.353v-.984h-1.353V42.97h-1.231v1.92h-1.039v.985h1.039v4.313c0 1.36.643 1.949 1.948 1.949Zm4.635 0c1.552 0 2.714-.93 2.947-2.106l.013-.068h-1.169l-.02.061c-.205.609-.841 1.06-1.743 1.06-1.265 0-2.072-.855-2.099-2.317h5.12v-.438c0-2.133-1.183-3.575-3.124-3.575s-3.199 1.51-3.199 3.712v.007c0 2.235 1.23 3.664 3.274 3.664Zm-.082-6.33c1.039 0 1.805.65 1.921 2.03h-3.89c.13-1.326.937-2.03 1.969-2.03ZM120.721 52h1.217l2.611-7.11h-1.237l-1.969 5.845h-.028l-1.961-5.844h-1.251L120.721 52Zm7.417.137c1.551 0 2.714-.93 2.946-2.106l.014-.068h-1.169l-.021.061c-.205.609-.841 1.06-1.743 1.06-1.265 0-2.071-.855-2.099-2.317h5.121v-.438c0-2.133-1.183-3.575-3.125-3.575-1.941 0-3.199 1.51-3.199 3.712v.007c0 2.235 1.231 3.664 3.275 3.664Zm-.082-6.33c1.039 0 1.804.65 1.921 2.03h-3.89c.13-1.326.936-2.03 1.969-2.03ZM132.772 52h1.19v-6.125h1.449v-.984h-1.463v-.868c0-.705.328-1.04.985-1.04.184 0 .369.007.512.028v-.964a5.247 5.247 0 0 0-.724-.048c-1.313 0-1.949.65-1.949 2.017v.875h-.991v.984h.991V52Z"></path><path fill="#D0D2E0" d="M148.841 47.987c0-.738-.588-1.326-1.326-1.326h-.021c-.738 0-1.326.588-1.326 1.326v.02c0 .74.588 1.327 1.326 1.327h.021c.738 0 1.326-.588 1.326-1.326v-.02Z"></path><path fill="#BFC2D4" d="M162.5 51h3v-2h-3v2Zm3 0h7v-2h-7v2Zm4.236-6h2.764v-2h-2.764v2Zm-3.342 5.447 2.448-4.894-1.789-.895-2.447 4.895 1.788.894ZM173.5 44v2a2 2 0 0 0 2-2h-2Zm0 0h-2a2 2 0 0 0 2 2v-2Zm0 0v-2a2 2 0 0 0-2 2h2Zm0 0h2a2 2 0 0 0-2-2v2Zm0 6v2a2 2 0 0 0 2-2h-2Zm0 0h-2a2 2 0 0 0 2 2v-2Zm0 0v-2a2 2 0 0 0-2 2h2Zm0 0h2a2 2 0 0 0-2-2v2Zm-12 0v2a2 2 0 0 0 2-2h-2Zm0 0h-2a2 2 0 0 0 2 2v-2Zm0 0v-2a2 2 0 0 0-2 2h2Zm0 0h2a2 2 0 0 0-2-2v2Zm8.236-7a3 3 0 0 0-2.683 1.658l1.789.895a.999.999 0 0 1 .894-.553v-2Z"></path><path fill="#9095AD" d="M182.655 52h1.19v-6.125h1.449v-.984h-1.463v-.868c0-.705.328-1.04.984-1.04.185 0 .37.007.513.028v-.964a5.258 5.258 0 0 0-.724-.048c-1.313 0-1.949.65-1.949 2.017v.875h-.991v.984h.991V52Zm6.112.137c1.551 0 2.713-.93 2.946-2.106l.014-.068h-1.169l-.021.061c-.205.609-.841 1.06-1.743 1.06-1.265 0-2.071-.855-2.099-2.317h5.12v-.438c0-2.133-1.182-3.575-3.124-3.575-1.941 0-3.199 1.51-3.199 3.712v.007c0 2.235 1.231 3.664 3.275 3.664Zm-.082-6.33c1.039 0 1.804.65 1.92 2.03h-3.889c.13-1.326.936-2.03 1.969-2.03Zm6.412 6.33c.95 0 1.804-.513 2.221-1.292h.028V52h1.189v-4.915c0-1.422-1.053-2.331-2.734-2.331-1.675 0-2.694.943-2.796 2.112l-.007.075h1.148l.014-.061c.137-.636.711-1.073 1.627-1.073.991 0 1.559.526 1.559 1.394v.595l-2.037.116c-1.634.096-2.578.855-2.578 2.065v.013c0 1.292.951 2.147 2.366 2.147Zm-1.149-2.147v-.013c0-.663.547-1.087 1.497-1.142l1.901-.116v.58c0 1.033-.862 1.806-1.983 1.806-.854 0-1.415-.431-1.415-1.115Zm8.408 2.147c.233 0 .486-.028.636-.048v-.964c-.102.007-.239.027-.383.027-.635 0-.97-.212-.97-.97v-4.307h1.353v-.984h-1.353V42.97h-1.231v1.92h-1.039v.985h1.039v4.313c0 1.36.643 1.949 1.948 1.949Zm4.341 0c1.08 0 1.805-.486 2.188-1.149h.027V52h1.19v-7.11h-1.19v4.184c0 1.21-.731 2.01-1.852 2.01-1.094 0-1.634-.636-1.634-1.791v-4.402h-1.19v4.614c0 1.62.903 2.632 2.461 2.632Zm4.956-.137h1.19v-4.389c0-1.08.601-1.722 1.524-1.722.287 0 .54.034.636.068v-1.155c-.096-.014-.274-.048-.479-.048-.799 0-1.415.52-1.654 1.34h-.027V44.89h-1.19V52Zm6.905.137c1.551 0 2.713-.93 2.946-2.106l.014-.068h-1.169l-.021.061c-.205.609-.841 1.06-1.743 1.06-1.265 0-2.071-.855-2.099-2.317h5.12v-.438c0-2.133-1.182-3.575-3.124-3.575-1.941 0-3.199 1.51-3.199 3.712v.007c0 2.235 1.231 3.664 3.275 3.664Zm-.082-6.33c1.039 0 1.804.65 1.92 2.03h-3.889c.13-1.326.936-2.03 1.969-2.03Zm7.478-3.671h-1.135l-2.782 12.257h1.135l2.782-12.257Zm.95 9.864h6.112v-1.107h-4.881v-3.391h4.628v-1.094h-4.628v-3.165h4.881v-1.107h-6.112V52Zm7.739 0h1.216v-7.786h.035L241.321 52h1.197v-9.864h-1.217v7.786h-.034l-5.428-7.786h-1.196V52Zm13.924.164c2.632 0 4.184-1.579 4.184-4.245v-.937h-4.013v1.08h2.783v.178c0 1.654-1.204 2.79-2.954 2.79-2.009 0-3.26-1.532-3.26-4.013v-.007c0-2.434 1.23-3.904 3.26-3.904 1.388 0 2.345.718 2.803 1.97l.027.074h1.292l-.034-.13c-.458-1.743-1.818-3.048-4.088-3.048-2.755 0-4.518 1.955-4.518 5.038v.007c0 3.144 1.763 5.147 4.518 5.147Zm5.62-3.61h4.375v-1.107h-4.375v1.108ZM262.28 52h1.19v-9.864h-1.203l-2.625 1.886v1.238l2.611-1.819h.027V52Zm7.089.164c2.092 0 3.582-1.176 3.582-2.83v-.014c0-1.217-.854-2.228-2.119-2.522v-.028c1.08-.335 1.764-1.155 1.764-2.194v-.014c0-1.49-1.361-2.59-3.227-2.59-1.866 0-3.226 1.1-3.226 2.59v.014c0 1.04.683 1.86 1.763 2.194v.028c-1.264.294-2.119 1.305-2.119 2.522v.014c0 1.654 1.49 2.83 3.582 2.83Zm0-5.852c-1.189 0-2.003-.676-2.003-1.633v-.014c0-.957.814-1.634 2.003-1.634 1.19 0 2.003.677 2.003 1.634v.014c0 .957-.813 1.633-2.003 1.633Zm0 4.779c-1.36 0-2.331-.766-2.331-1.832v-.014c0-1.08.964-1.852 2.331-1.852s2.331.772 2.331 1.852v.014c0 1.066-.971 1.832-2.331 1.832Zm8.319 1.073c1.976 0 3.425-1.217 3.425-2.864v-.014c0-1.401-.977-2.297-2.413-2.42v-.027c1.231-.26 2.092-1.094 2.092-2.31v-.014c0-1.497-1.237-2.543-3.117-2.543-1.846 0-3.117 1.073-3.275 2.68l-.006.068h1.182l.007-.069c.103-.998.93-1.613 2.092-1.613 1.203 0 1.88.595 1.88 1.627v.014c0 .984-.821 1.709-1.996 1.709h-1.183v1.039h1.237c1.381 0 2.249.676 2.249 1.886v.014c0 1.046-.882 1.77-2.174 1.77-1.312 0-2.201-.67-2.303-1.64l-.007-.068h-1.183l.007.082c.13 1.558 1.449 2.693 3.486 2.693Z"></path></g><path stroke="#E1E3ED" d="M1-.5h513v71H1z"></path><path fill="#fff" d="M1 70.5h513v71H1z"></path><path stroke="#E1E3ED" stroke-linecap="round" d="M57 86v40"></path><g clip-path="url(#e)"><rect width="20" height="20" x="18.5" y="96" fill="#F3F4FA" rx="10"></rect></g><rect width="180" height="16" x="80.5" y="88" fill="#F3F4FA" rx="8"></rect><g clip-path="url(#f)"><g clip-path="url(#g)"><rect width="80" height="8" x="80.5" y="116" fill="#F3F4FA" rx="4"></rect></g><circle cx="170.5" cy="120" r="2" fill="#F3F4FA"></circle><g clip-path="url(#h)"><rect width="80" height="8" x="180.5" y="116" fill="#F3F4FA" rx="4"></rect></g></g><path stroke="#E1E3ED" d="M1 70.5h513v71H1z"></path><path fill="#fff" d="M1 141.5h513v71H1z"></path><path stroke="#E1E3ED" stroke-linecap="round" d="M57 157v40"></path><g clip-path="url(#i)"><rect width="20" height="20" x="18.5" y="167" fill="#F3F4FA" rx="10"></rect></g><rect width="180" height="16" x="80.5" y="159" fill="#F3F4FA" rx="8"></rect><g clip-path="url(#j)"><g clip-path="url(#k)"><rect width="80" height="8" x="80.5" y="187" fill="#F3F4FA" rx="4"></rect></g><circle cx="170.5" cy="191" r="2" fill="#F3F4FA"></circle><g clip-path="url(#l)"><rect width="80" height="8" x="180.5" y="187" fill="#F3F4FA" rx="4"></rect></g></g><path stroke="#E1E3ED" d="M1 141.5h513v71H1z"></path><path fill="#fff" d="M1 212.5h513v71H1z"></path><path stroke="#E1E3ED" stroke-linecap="round" d="M57 228v40"></path><g clip-path="url(#m)"><rect width="20" height="20" x="18.5" y="238" fill="#F3F4FA" rx="10"></rect></g><rect width="180" height="16" x="80.5" y="230" fill="#F3F4FA" rx="8"></rect><g clip-path="url(#n)"><g clip-path="url(#o)"><rect width="80" height="8" x="80.5" y="258" fill="#F3F4FA" rx="4"></rect></g><circle cx="170.5" cy="262" r="2" fill="#F3F4FA"></circle><g clip-path="url(#p)"><rect width="80" height="8" x="180.5" y="258" fill="#F3F4FA" rx="4"></rect></g></g><path stroke="#E1E3ED" d="M1 212.5h513v71H1z"></path></g><rect width="467" height="283" x="1" y=".5" stroke="#E1E3ED" rx="5.5"></rect><defs><clipPath id="a"><rect width="468" height="284" x=".5" fill="#fff" rx="6"></rect></clipPath><clipPath id="b"><path fill="#fff" d="M16.5 23h24v24h-24z"></path></clipPath><clipPath id="c"><path fill="#fff" d="M80.5 37h281v20h-281z"></path></clipPath><clipPath id="e"><rect width="20" height="20" x="18.5" y="96" fill="#fff" rx="10"></rect></clipPath><clipPath id="f"><path fill="#fff" d="M80.5 116h180v8h-180z"></path></clipPath><clipPath id="g"><rect width="80" height="8" x="80.5" y="116" fill="#fff" rx="4"></rect></clipPath><clipPath id="h"><rect width="80" height="8" x="180.5" y="116" fill="#fff" rx="4"></rect></clipPath><clipPath id="i"><rect width="20" height="20" x="18.5" y="167" fill="#fff" rx="10"></rect></clipPath><clipPath id="j"><path fill="#fff" d="M80.5 187h180v8h-180z"></path></clipPath><clipPath id="k"><rect width="80" height="8" x="80.5" y="187" fill="#fff" rx="4"></rect></clipPath><clipPath id="l"><rect width="80" height="8" x="180.5" y="187" fill="#fff" rx="4"></rect></clipPath><clipPath id="m"><rect width="20" height="20" x="18.5" y="238" fill="#fff" rx="10"></rect></clipPath><clipPath id="n"><path fill="#fff" d="M80.5 258h180v8h-180z"></path></clipPath><clipPath id="o"><rect width="80" height="8" x="80.5" y="258" fill="#fff" rx="4"></rect></clipPath><clipPath id="p"><rect width="80" height="8" x="180.5" y="258" fill="#fff" rx="4"></rect></clipPath><pattern id="d" width="1" height="1" patternContentUnits="objectBoundingBox"><use xlink:href="#q" transform="scale(.00195)"></use></pattern><image xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAFhdJREFUeF5l21nIvVXZx/G9tcFsVlMbzMpyHss0UxM0oiApJVQcUCMHyOzEIc1wOJAIpDPBU8EIRSGQxCDDVJy10jS1TG1wKFNLK1N74rPe57tZ/t8ND/fe972G6/pd87XuZ3naaaetra2tLfy94Q1vWGy00UaLPu7deeediyeffHLxr3/9a/Hqq68u3vjGNy7e+ta3Lv75z38u3vzmNy9eeeWVxXK5XPz3v/9dbLrppou3vOUtY4y5b3rTmxavvfbauPpt3H/+85/x+6mnnlpsttlmY97b3/72xYsvvrjYcsstx7p+W/fll19e/OUvf1lsvPHGY81//OMfY5w1rOdjTXR/6lOfWuy2226Dfs/M6W/mx35ocvW3BIBJFjLB9wa5d8cddyweffTRMcnHZohpDiIBgeh3vvOdAwD3gOTjGYYR/e53v3vxt7/9bQCJMWN8f//73z/mAfDf//734oUXXhj7meN5wHkGAGv4PoNg76OOOmqxySabrO6jNZACYQZgCOUb3/jGgBJTAEgbut56662L3//+96uFjMOQsQi0IcZc3/a2tw1igWOMj3s+GHTfHKBgjLQ990figWy83ySOUdqXxP7+97+PeTTImAQGgOOOO26sPa/jecKKp9YybmhA6o9oDPjMG/74xz8eDLmHcN+ha4EPfvCDQ/qA8RsQMUyi1vOHMB9jrWMNjDQPMK3viib3MGncSy+9NBgBCBCee+65cfXcx3onn3zy2Mfc1NwctMaXsfPzoQHZKWIMzF4t7vuVV145rphDXMyT/LbbbrvyHcZYwx+pGp82BI6r50mvNTHLdOyPSRpmL99juvWZwLPPPjvMaDaFY489dvgRH4KKDzRYL95mTViefvrpazaK2JyIQWnBT37yk7Hh7Cip9NZbbz0cWQxl96Qc47QgE8tRZo/zXjlSkrYPqWMiENg+8Px5RvqcMwCM8znxxBOHOTbOvfya6/wJhOWpp566lmcvAqSK2c4vfvGLxS9/+cuVelnoXe9610Cb7c0ed4stthjq+o53vGM4Nc9yRtY1PhPL0WHed/vFoLG0hGZ4zjFmJsD461//OjSA1mQG++6772K//fZbATcDjIa0YDbz5THHHLOGWH8zodmhSX/+858X119//WoBgAGABmCS/eV9AzNHufnmmw+GZ+bMLXxt6M3dxyAQMeyTL3CP9DGMeX+kz0mSKH/05S9/+f/C27oznoWZQ4zPYSJHHnnkGoIwwIF4mPrb3EJPPPHE4mc/+9nKswcA5t7znveMOUUQ40mZabhfqPMdI4AmNSY0e36/zc3juwKCqqMHo2kBIESIP/3pT6vx1gL6KaecsjLVmdHMIuCLSMuvfe1ra3lOjBXn85Y2f+aZZxbXXXfdYDJfsdVWWy0AwOZKfCyOYQC4hynOsPWzx9kjpx35GxL2PSA4vPKBQicAn3/++cUf//jHcXUfAPb56le/uvI55SvZu3UAUVQA4vKb3/zmmhuz10TgHBIh/qMf/WiMCQQS5gPYfHHdHJt6BgjrAgBDxvjzfU64yiSNxRiT8CH9HKHvniVF9NAMphlA1rGnZKhcpaiWzwmotNUayzPOOGNkgiUUqWWxO8f4wx/+cBBkE1pA+kyHBvD6hVIgZFKYMq4ssDA3EpD1FLbMLHPrN+J8JyUM5+2tARDmwBEa5w9zwD7mmGNWAMwJUHu6lkFac/mtb31rlQgVipKE35iF5FVXXTWISa0B8b73vW84wRKh8npz2LoPU8mjM40c1uwDAAXcYr8x9nJf+E0TcqQAofquzJMWoJlT/spXvrLKahNempPmVUsMgL797W+PVHhOGU2AMm3IL0iJH3nkkcEs4jFWqCuCQJaa0wDA+J0PKA7nndO4DUMi4jDmUwIEQCAUEQqLgBIJgOD5DjvssPj85z+/SsxKfIoEhWTrF3aX55133tCAAMg+cjyh/oc//GFxww03DMaEG4wFxpxBAofaA6Lq0GbWzdOX0VFdYxBvn3yMvWkAARAEaZOwe6XhZYieiVLAoGE777zzYv/9939d6psGxKOxZbnLs846awVA5XC5ctKyANSYAQJs4op46l5Cwx8UBQBEM6yBcQAERKpZadx+ZZR5+8IfzcP8008/PaSbF09TH3zwwbH2LrvsMhj74he/+Lqsr7qguqTkaaxz5plnjlqgdDU7LI9OjW688caReiJuzz33XDkxi1T3m/ORj3xkMP7e9753RIOcYwWQ35lWEaHEJRW3B4ZVoYCnfaq/1mBiQAUg+weAex/60IeG5u2zzz4rR5eJxU9Flvsj0tGAQuBcEkdcANx+++3D24q90s3CF2YRwitzWMKiAslfCZNkKfubI85MlPWo5m9+85vFPffcM6q9bNUe1rcGRqm/fTBgjDTdfu4xg5122mkFQDlAZm4f/BIcsJZnn332AADDAVComMtIm1jk3nvvXci58/jUCShJkQkIT8wjuyQZdokRkqtmt1+pMBCt89Of/nQAWj5g7oEHHjg0Dii//e1vF4899tgwNQBg6K677hqah3kAfexjHxsaPVd/c4mNXzRYY4TBOUxUn+eoWoRkSMH1k5/85JCGDSUje++993CI/EEOBjNVkNbnOD3ffffdVz0DABvveWlutb4ky5xKb6pejeA7MNIAxRqpG0sLPvCBD6ycejE/LQdsWSN6luecc87QgFLEwtOGNTT7Z4vQ5wQ5uaRMSnNNAF2StlkxXKjKSbp6jjgaRDrCGbuv32h9ANaPJBiAAMj6aQlte+CBBwYAaBae+Z5MLR9AkGWCgTE0nA8o+0rlU+d+I5SEqJ+wI+GANKnX4SnrQhCV5LFJaK+99lp84hOfWDU6gQIAgNUKszZG7Wt9WnXzzTePRqemrOzummuuWXz0ox8dZmRPc2kPgXCWACB5axgTADn4SuHMvYRsAFDMr6ojFUxTkfICCwGgJiVpAALxPiSN6F133XXxhS98YfHd7353SAuhp5566pCsNZhG6u0eQNyj1qT8q1/9anH00Ucvzj777OFrfv7zny8OOOCAsb5xmJz3pv4ixKc//elVVVpDBl0lPAHgN/7wMXjhA0oqUvtydgvNJSW784cYYQ4xqfHvfve78b2W1K9//evhof1mIo8//vjipJNOGhIF+Mc//vFVEvTwww8PyWlr33LLLWNdGlI+ABhgkrS9rUmL0GJdiVAluPS8zDTTNj8w8OavxGukwm6kEnnWSlu/8wt8gE0tjEiEGAdA9kraEV+JjFkglvszD0DtuOOOg2iOTdudXcfEKFLW65CSHfeYR2ltPsZcfQH+yJ6SobLFyt/h7Na7TgDM341IccEFFwwTyBnNvbPCYmZQfEYoDfBX2xtIVWrup94lHsACMlvn7Lbffvsh5RIennm77bYbxHNqtc4Ak9TKJTBDu4BH/ZkGQIDD52T3xplToyeNap1RIV544YUjCswA5EBKHsoOb7vttlWzE/FUzbUNIG2tzgQKN5gxBvNU1n2FC0cKACqMGGt9+MMfHozU/kJLEuVg/fbMPiJLWSLfw48wt5o59kR7jRFahM/5pGoAUC6PsDpClcZAKBrcfffdQ4o1PZzosEXJh08Znw1yls01DwPUleSYAC1BoFwfDQjmzfme6gBj00oM0Fb3mFzRAwgSrfoGQCwRKjrhpx6j74AYpnH++eevEqGKlbnYqFR2TxQgdU5LvKXW/jDS0ZZF688FBMDYnpw9h8sEgAcoGlA/gIenMQkCcPml8gog2oM/kj8wAxEDAHwBQdCiiq5ygQSMzxooAwADKg/nvkCOozSZp8coiZE+MITCukSdEVRodJpkbXkBL55kqaq5mLJepbA1gFsIrtT2PF9VUgacymEAWDstnPkoAcK49QJnHOVddNFFoxzOu9awnEvhJvC4JCP5QGT2X4scw9R3PjqrG8Q+77///uGNSYkP0DcgeeBIfurriSTA6dP+ACgMo4UJMAcaoQSO9iRvXknebJIB8ToAUgtgzN1bvzt4sDA7Vg+QFCdmESoLEN+Ncc3x1N5STLFb82R0mMckAOrx0zB7A5aGGes3LQEqu5UPAJPaA858zvDQQw9d+YqcYH2AogiaaJbfBElYwwRqSGxYBVYIdT9kdYaEOkzUBAWGxTFl8dCvfw84UrAp+zeOORmLEVI0hlkJa6o7ptXBSx68Q1FaWJeIJsg+c3hd06BMx2/7ddAK4OW55547fEBm4Htp44Y9tToqzgplXJyYBTlCi9UKMz+746ERhIjqedI1P1+B8VrcpFRfoUOUzhezec9JHc18gGttMHvM+UIgRE/OE920dtQCxfkc0Yb99BxXRZJ8nbTrEJPq3AqzHtskfZqR2jINc9g45jpOwxCJ0gSqLUR6nq2SvnnUvRckkipzAJCCq1S+mmaOAoDAHxDtI+TS4nE8nmesC1T6O2tG9gQMyYyFSN0fYkmRWnOINTeUzcZhCpOFI2t85jOfWZXEMj9qX3uNpvErAKzPgHl7dSIEzPIAJiWqJP182JzVltfUSfZ7aMDxxx8/NKBmY9KH3tyyinhXUkC0hAOKGJfji+EWZac2oqauJF2b3XdOz36ytxyrcRgCJhAJwzoBT2JacdbkL5gdSRIGMHOYGzKf2VbPMIFqitEROuqoo4YGkHp5fe2jOkUBEcJ+8+qYxTSbfuihhwbh1BsYGBGqbFayFJNU2nPzyt7y9O7xGx2A0gD78i9ifem0SIF5IIgAhd7816z+mUb5TgnV4AsA0AVCuXPOL7uZ1T/vrtwFAA3Qg6PCpOs37RDSbBTxzMIz2SB7JUn+gXnICWgIpth0xU7vJrFdTtM8TNuLsOxj7Je+9KXX2X9RYG7szA2R+Xhtefjhh4/D0Xr8GzqSVL92dhkZyVJR3VimwNFhmD1iks1ioD5gaXFpM5utaCoXsDbmSKbkaI899hhgkj5N8l3miGYats0224xmyEz3bL5lhHO3ixnYkyktDzvssAFAb3rN7bG8ac2EQmVdFR0g0lODm8fRaXQgnmRIE8Gu1ufdAZdWIK7DWBr4uc99bmjiZZddNlRdwoQG44BsnvZ8LXNadOSRR67eWstE5wJoTuoq69HPxOyxPOKII8bpMPulVtQDOqWsLZBfmNNLRYyFmADJYg7R/rSqrIXITmIkN+J1jNGOTpzrIN90002ja8T20UQrKnOtBdDA5m9oxmz3cySoHzAnSGk0f2TP5bHHHjv6ARgo9lZvM4txeLD+5liaEAjmkQjHpZnBDHxHBJvHnDXYee8O8Bt+f/3rX1+9WEGzrr766kEQUOoilbVJvX03DghFosMPP3z1HlLl7xwF0p45sate6DBnecIJJ4yeYIVMxNc3w0CpbSZQ6gwA9igHUMeL3cAxp0YGKUqc2K9nvDnnR9U5Pnv3eg4mgNAZAGJrwTGr6hJmYz/+IYkHQEXcnBFm/0WGcoLRejvxxBNHS6wucG909opKEWJOitIATm7uKHNIFpfA0CZMAsU9PQTq6pnQGUDV+9aXDnf81otb7vUqTDSgMX8xh7jS3nxX+c1sFo1B06gQAVCLuOZlr7zM7wcAqBYZJ5KnZ6skTmqIJmkagXl/TpFIlVlJgIRCIa2s0zUQre/ojRkBqpY2EwCM3zTVOwC0puQtyUZjzZSAqLdZRCivGWHyuOOOGx2hkLRBvb3uW6g3Pzme++67byQ7lb4lK2xbVohhmxpb/m9TCU4psawP0MV//oJp9A4BkEgf88zReFJzRsCMojfmqlcI0xodyZN+pfkcEfJrAwAS6FWY1KbkB1FUm3Q5Sgx5W8SBRc6zJohFRQYgiNFUHQju99ocpiqNrctEODZjXSuxxWgFEgBoYomUrm/hzLro9ufDptGN+V7Smp1ivM1hcrwmV6laHWBhcVu4KsVEWCcuQtEVV1wxJAOQWmLmIRYIiPGsc0BrYYiJWIvt925RPYHaYNalKRxs2Z71HJXZK7MxrxPn3lEAQJVqkk/1Xd0rOgwgvCrbWb8bFuSsqrw6iZn7fezzkksuWTFRdlcGxmOzWXmB9NWmmJXq0gDEmmMdINGyvLx5JEhLNGFpAv8h4zSPprjyObP08/RMofBN4sYmRPTlN/IPwwRMMuizn/3s2IBq99KyRXrdpX46wC6++OJVuVrnpvLTc/4AE75Le+3hyqOzb/cBUheoSOQ535Cp0AS5Q/9MQdUPPvjgYRI5RtpUIwcNAMwsavF1vy5UvmOUw9JM+XTHWXnJMimLYRJhdY/5AO8Pz2+DFkI7ula4SDchj1laZG0xvAanPIHJJE3qTfI1Pjp3cJ82mucVHVoqqgCMsNDaAY3rfDiTP4ufkrKhNddff/0aRwTNPKaB9eILZ6Fa85R6f//73x+bIp6WtGlVJE0iQUdq9pC48OY29hHuqD6AgAMIDNZAETLLI0rR7e+eI3Mf80UXz7PvuSNUiMxvlAmWDC1vuOGGNcxhqHCWnQClV1GyJQt26goAzqnX4ayTFqXSnhuPUPUBE0MsJkQL+7JzAPZ2iP07dyhx6e1xa9Ei/xtAe6h/NQkNyZxnx7cKeetvp3pWMre85ZZbxgsShbRCRSVjAKQJeVtzbHz55Zev3rcp9oZ6CRaiOLzO80SDOrOdGzARYAHGXye6nSp1qps6qwMUVz7oYDLA6JWb8oRS44q5bP91AIRyDqJiw7WMy9WiOZe6Rd/73vfG/UJhWVjMA7TyuVK7M76uQKUxc66eOcZUR93VI4cccsh43whD6gVOs31qmJbIWbdn6KvAG+2y2267bS0VAUDlIon1hvecU9vQuCTBXn/wgx8M+w+giifrdqZQ8pJmYQxIG7bfZtCZSn1BjHe46bu+w0EHHbQ6OOEM5+Mz+3Qgkk8CuLkJC80DgMrFwpyFKmVLJlZxc/1oay6OvErPxs0LiFQQANbPdmdJ55gywRxUPoZPoNrZbAAYT/0PO+ywVakeAPmcNGbWoPzSnCku77zzzgGAT5Iz0CZlZhVBA7H1lw56GbrszztB86lsnr6ip9Ca6ST5zuxc0760JOn3kgS62o8D9O6RdQDEkQZo7zpYJ3D5nBqwhNr/Mw0AIjZ7NdGiNp7r7MrKukU1KfwmrUsvvXSkutXto9pa/9+dYW/rqfLcXUqT6jm6+ogO4z861gFvTSCkRV6kKgGq82R8r+YFqLk+5lmzUn9o/h133LGWZLOzQgmkAiANcc1Z9TpazFFDNQJNMCZNipCABvBs/4FQSo5ATMz+IUmWDJHyRRddtHrvuP8hzNzKDmM+80q7rDP2u+uuu4YTnJ2U34W9HCQiO0GK4TnlDCiND+0tMT7brUZIs5LGbAZ59yQ41ydJrAPSnNt3vvOdoSH+JFyeZ3LGZDJ4y1TsPYPw/wAoPlaXlzElvTlN7kClKjJf4j2Aa6+9dsTzOk1VYGWSrtaO6LQkU0jjEAuASmJMBc6ZZ565Or2aX662Fw3L60dXYKXp1l3ec889q/8YCR1XoSLJzd2gaumA6OQ275+q6Rl4xV6Ki5jyg2FT6x9jEZF3Ng6YaUoax3kl0QDSZzjiiCNWkuUz/JWpZgqj77euJZlv4dk+/wOS9ZfPao49mgAAAABJRU5ErkJggg==" id="q" width="512" height="512"></image></defs>', 3);
const _hoisted_5$6 = [
  _hoisted_2$b
];
function render$4(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$g, _hoisted_5$6);
}
const Illustration$2 = { render: render$4 };
const _sfc_main$h = /* @__PURE__ */ defineComponent({
  __name: "GuideCard1",
  props: {
    action: { type: Function }
  },
  setup(__props) {
    const { t } = useI18n();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$l, {
        title: unref(t)("runs.slideshow.step1.title"),
        body: unref(t)("runs.slideshow.step1.description")
      }, {
        image: withCtx(() => [
          createVNode(unref(Illustration$2))
        ]),
        action: withCtx(() => [
          createVNode(_sfc_main$k, {
            action: __props.action,
            "left-label": unref(t)("runs.slideshow.controls.step", [1, 3]),
            "right-label": unref(t)("runs.slideshow.controls.next"),
            "right-icon": unref(x1)
          }, null, 8, ["action", "left-label", "right-label", "right-icon"])
        ]),
        _: 1
      }, 8, ["title", "body"]);
    };
  }
});
const _hoisted_1$f = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  fill: "none",
  viewBox: "0 0 469 284"
};
const _hoisted_2$a = /* @__PURE__ */ createStaticVNode('<g clip-path="url(#a)"><path fill="#fff" d="M1-.5h513v71H1z"></path><path stroke="#E1E3ED" stroke-linecap="round" d="M57 15v40"></path><g clip-path="url(#b)"><rect width="19" height="19" x="19" y="25.5" fill="#F3F4FA" rx="9.5"></rect><rect width="19" height="19" x="19" y="25.5" stroke="#BFC2D4" stroke-dasharray="2 4" stroke-linecap="square" rx="9.5"></rect><path fill="#E45770" fill-rule="evenodd" d="M28.5 45c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10Zm-2.293-13.707a1 1 0 0 0-1.414 1.414L27.086 35l-2.293 2.293a1 1 0 0 0 1.414 1.414l2.293-2.293 2.293 2.293a1 1 0 0 0 1.414-1.414L29.914 35l2.293-2.293a1 1 0 0 0-1.414-1.414L28.5 33.586l-2.293-2.293Z" clip-rule="evenodd"></path></g><path fill="#C62B49" d="M81.492 31h2.016v-4.602h4.726v-1.64h-4.726v-3.336h5.172v-1.695h-7.188V31Zm10.485.14c1.093 0 2.015-.546 2.492-1.413h.047V31h1.945v-5.695c0-1.664-1.336-2.758-3.406-2.758-2.102 0-3.375 1.101-3.493 2.57l-.007.094h1.804l.016-.07c.125-.61.688-1.04 1.61-1.04.984 0 1.53.508 1.53 1.344v.57l-2.163.133c-2.008.125-3.149 1.008-3.149 2.477v.016c0 1.476 1.117 2.5 2.774 2.5Zm-.836-2.578v-.007c0-.657.523-1.07 1.484-1.133l1.89-.117v.625c0 .984-.843 1.726-1.96 1.726-.852 0-1.414-.414-1.414-1.093Zm7.921-7.03a1.067 1.067 0 1 0 0-2.134 1.07 1.07 0 0 0-1.085 1.07c0 .579.476 1.063 1.085 1.063ZM98.087 31h1.945v-8.281h-1.945V31Zm3.656 0h1.946V19.727h-1.946V31Zm7.242.164c2.164 0 3.383-1.281 3.641-2.555l.023-.086h-1.82l-.016.055c-.187.555-.82 1.07-1.789 1.07-1.265 0-2.062-.859-2.093-2.312h5.797v-.625c0-2.5-1.469-4.164-3.836-4.164-2.368 0-3.891 1.719-3.891 4.328v.008c0 2.633 1.5 4.281 3.984 4.281Zm-.07-7.094c1.031 0 1.781.657 1.922 1.97h-3.883c.156-1.274.93-1.97 1.961-1.97Zm8.148 7.094c1.196 0 2.11-.594 2.579-1.57h.047V31h1.945V19.727h-1.945v4.414h-.047c-.469-.993-1.414-1.594-2.586-1.594-2.078 0-3.414 1.633-3.414 4.305v.007c0 2.664 1.328 4.305 3.421 4.305Zm.586-1.64c-1.25 0-2.023-1.016-2.023-2.665v-.007c0-1.649.781-2.665 2.023-2.665 1.196 0 2.04 1.047 2.04 2.665v.007c0 1.625-.836 2.664-2.04 2.664Z"></path><g clip-path="url(#c)"><rect width="16" height="16" x="80.5" y="39" fill="url(#d)" rx="8"></rect><rect width="15" height="15" x="81" y="39.5" stroke="#1B1E2E" stroke-opacity=".07" rx="7.5"></rect><path fill="#9095AD" d="M103.795 52.137c1.586 0 2.762-.875 2.762-2.12v-.006c0-1.012-.52-1.58-1.955-1.928l-1.128-.273c-.786-.192-1.108-.527-1.108-1.012v-.007c0-.629.533-1.046 1.395-1.046.882 0 1.408.458 1.504 1.149l.006.047h1.135l-.007-.089c-.088-1.189-1.08-2.098-2.638-2.098-1.538 0-2.612.868-2.612 2.092v.007c0 1.025.65 1.647 1.99 1.968l1.128.274c.806.198 1.073.485 1.073.998v.007c0 .642-.574 1.045-1.538 1.045-.971 0-1.497-.417-1.641-1.127l-.014-.069h-1.189l.007.062c.143 1.271 1.155 2.126 2.83 2.126Zm6.309 0c.233 0 .486-.028.636-.048v-.964c-.102.007-.239.027-.383.027-.635 0-.97-.212-.97-.97v-4.307h1.353v-.984h-1.353V42.97h-1.231v1.92h-1.039v.985h1.039v4.313c0 1.36.643 1.949 1.948 1.949Zm4.635 0c1.552 0 2.714-.93 2.947-2.106l.013-.068h-1.169l-.02.061c-.205.609-.841 1.06-1.743 1.06-1.265 0-2.072-.855-2.099-2.317h5.12v-.438c0-2.133-1.183-3.575-3.124-3.575s-3.199 1.51-3.199 3.712v.007c0 2.235 1.23 3.664 3.274 3.664Zm-.082-6.33c1.039 0 1.805.65 1.921 2.03h-3.89c.13-1.326.937-2.03 1.969-2.03ZM120.721 52h1.217l2.611-7.11h-1.237l-1.969 5.845h-.028l-1.961-5.844h-1.251L120.721 52Zm7.417.137c1.551 0 2.714-.93 2.946-2.106l.014-.068h-1.169l-.021.061c-.205.609-.841 1.06-1.743 1.06-1.265 0-2.071-.855-2.099-2.317h5.121v-.438c0-2.133-1.183-3.575-3.125-3.575-1.941 0-3.199 1.51-3.199 3.712v.007c0 2.235 1.231 3.664 3.275 3.664Zm-.082-6.33c1.039 0 1.804.65 1.921 2.03h-3.89c.13-1.326.936-2.03 1.969-2.03ZM132.772 52h1.19v-6.125h1.449v-.984h-1.463v-.868c0-.705.328-1.04.985-1.04.184 0 .369.007.512.028v-.964a5.247 5.247 0 0 0-.724-.048c-1.313 0-1.949.65-1.949 2.017v.875h-.991v.984h.991V52Z"></path><path fill="#D0D2E0" d="M148.841 47.987c0-.738-.588-1.326-1.326-1.326h-.021c-.738 0-1.326.588-1.326 1.326v.02c0 .74.588 1.327 1.326 1.327h.021c.738 0 1.326-.588 1.326-1.326v-.02Z"></path><path fill="#BFC2D4" d="M162.5 51h3v-2h-3v2Zm3 0h7v-2h-7v2Zm4.236-6h2.764v-2h-2.764v2Zm-3.342 5.447 2.448-4.894-1.789-.895-2.447 4.895 1.788.894ZM173.5 44v2a2 2 0 0 0 2-2h-2Zm0 0h-2a2 2 0 0 0 2 2v-2Zm0 0v-2a2 2 0 0 0-2 2h2Zm0 0h2a2 2 0 0 0-2-2v2Zm0 6v2a2 2 0 0 0 2-2h-2Zm0 0h-2a2 2 0 0 0 2 2v-2Zm0 0v-2a2 2 0 0 0-2 2h2Zm0 0h2a2 2 0 0 0-2-2v2Zm-12 0v2a2 2 0 0 0 2-2h-2Zm0 0h-2a2 2 0 0 0 2 2v-2Zm0 0v-2a2 2 0 0 0-2 2h2Zm0 0h2a2 2 0 0 0-2-2v2Zm8.236-7a3 3 0 0 0-2.683 1.658l1.789.895a.999.999 0 0 1 .894-.553v-2Z"></path><path fill="#9095AD" d="M182.655 52h1.19v-6.125h1.449v-.984h-1.463v-.868c0-.705.328-1.04.984-1.04.185 0 .37.007.513.028v-.964a5.258 5.258 0 0 0-.724-.048c-1.313 0-1.949.65-1.949 2.017v.875h-.991v.984h.991V52Zm6.112.137c1.551 0 2.713-.93 2.946-2.106l.014-.068h-1.169l-.021.061c-.205.609-.841 1.06-1.743 1.06-1.265 0-2.071-.855-2.099-2.317h5.12v-.438c0-2.133-1.182-3.575-3.124-3.575-1.941 0-3.199 1.51-3.199 3.712v.007c0 2.235 1.231 3.664 3.275 3.664Zm-.082-6.33c1.039 0 1.804.65 1.92 2.03h-3.889c.13-1.326.936-2.03 1.969-2.03Zm6.412 6.33c.95 0 1.804-.513 2.221-1.292h.028V52h1.189v-4.915c0-1.422-1.053-2.331-2.734-2.331-1.675 0-2.694.943-2.796 2.112l-.007.075h1.148l.014-.061c.137-.636.711-1.073 1.627-1.073.991 0 1.559.526 1.559 1.394v.595l-2.037.116c-1.634.096-2.578.855-2.578 2.065v.013c0 1.292.951 2.147 2.366 2.147Zm-1.149-2.147v-.013c0-.663.547-1.087 1.497-1.142l1.901-.116v.58c0 1.033-.862 1.806-1.983 1.806-.854 0-1.415-.431-1.415-1.115Zm8.408 2.147c.233 0 .486-.028.636-.048v-.964c-.102.007-.239.027-.383.027-.635 0-.97-.212-.97-.97v-4.307h1.353v-.984h-1.353V42.97h-1.231v1.92h-1.039v.985h1.039v4.313c0 1.36.643 1.949 1.948 1.949Zm4.341 0c1.08 0 1.805-.486 2.188-1.149h.027V52h1.19v-7.11h-1.19v4.184c0 1.21-.731 2.01-1.852 2.01-1.094 0-1.634-.636-1.634-1.791v-4.402h-1.19v4.614c0 1.62.903 2.632 2.461 2.632Zm4.956-.137h1.19v-4.389c0-1.08.601-1.722 1.524-1.722.287 0 .54.034.636.068v-1.155c-.096-.014-.274-.048-.479-.048-.799 0-1.415.52-1.654 1.34h-.027V44.89h-1.19V52Zm6.905.137c1.551 0 2.713-.93 2.946-2.106l.014-.068h-1.169l-.021.061c-.205.609-.841 1.06-1.743 1.06-1.265 0-2.071-.855-2.099-2.317h5.12v-.438c0-2.133-1.182-3.575-3.124-3.575-1.941 0-3.199 1.51-3.199 3.712v.007c0 2.235 1.231 3.664 3.275 3.664Zm-.082-6.33c1.039 0 1.804.65 1.92 2.03h-3.889c.13-1.326.936-2.03 1.969-2.03Zm7.478-3.671h-1.135l-2.782 12.257h1.135l2.782-12.257Zm.95 9.864h6.112v-1.107h-4.881v-3.391h4.628v-1.094h-4.628v-3.165h4.881v-1.107h-6.112V52Zm7.739 0h1.216v-7.786h.035L241.321 52h1.197v-9.864h-1.217v7.786h-.034l-5.428-7.786h-1.196V52Zm13.924.164c2.632 0 4.184-1.579 4.184-4.245v-.937h-4.013v1.08h2.783v.178c0 1.654-1.204 2.79-2.954 2.79-2.009 0-3.26-1.532-3.26-4.013v-.007c0-2.434 1.23-3.904 3.26-3.904 1.388 0 2.345.718 2.803 1.97l.027.074h1.292l-.034-.13c-.458-1.743-1.818-3.048-4.088-3.048-2.755 0-4.518 1.955-4.518 5.038v.007c0 3.144 1.763 5.147 4.518 5.147Zm5.62-3.61h4.375v-1.107h-4.375v1.108ZM262.28 52h1.19v-9.864h-1.203l-2.625 1.886v1.238l2.611-1.819h.027V52Zm7.089.164c2.092 0 3.582-1.176 3.582-2.83v-.014c0-1.217-.854-2.228-2.119-2.522v-.028c1.08-.335 1.764-1.155 1.764-2.194v-.014c0-1.49-1.361-2.59-3.227-2.59-1.866 0-3.226 1.1-3.226 2.59v.014c0 1.04.683 1.86 1.763 2.194v.028c-1.264.294-2.119 1.305-2.119 2.522v.014c0 1.654 1.49 2.83 3.582 2.83Zm0-5.852c-1.189 0-2.003-.676-2.003-1.633v-.014c0-.957.814-1.634 2.003-1.634 1.19 0 2.003.677 2.003 1.634v.014c0 .957-.813 1.633-2.003 1.633Zm0 4.779c-1.36 0-2.331-.766-2.331-1.832v-.014c0-1.08.964-1.852 2.331-1.852s2.331.772 2.331 1.852v.014c0 1.066-.971 1.832-2.331 1.832Zm8.319 1.073c1.976 0 3.425-1.217 3.425-2.864v-.014c0-1.401-.977-2.297-2.413-2.42v-.027c1.231-.26 2.092-1.094 2.092-2.31v-.014c0-1.497-1.237-2.543-3.117-2.543-1.846 0-3.117 1.073-3.275 2.68l-.006.068h1.182l.007-.069c.103-.998.93-1.613 2.092-1.613 1.203 0 1.88.595 1.88 1.627v.014c0 .984-.821 1.709-1.996 1.709h-1.183v1.039h1.237c1.381 0 2.249.676 2.249 1.886v.014c0 1.046-.882 1.77-2.174 1.77-1.312 0-2.201-.67-2.303-1.64l-.007-.068h-1.183l.007.082c.13 1.558 1.449 2.693 3.486 2.693Z"></path></g><path stroke="#E1E3ED" d="M1-.5h513v71H1z"></path><path fill="#fff" d="M1 70.5h513v71H1z"></path><path stroke="#E1E3ED" stroke-linecap="round" d="M57 86v40"></path><g clip-path="url(#e)"><rect width="20" height="20" x="18.5" y="96" fill="#F3F4FA" rx="10"></rect></g><rect width="180" height="16" x="80.5" y="88" fill="#F3F4FA" rx="8"></rect><g clip-path="url(#f)"><g clip-path="url(#g)"><rect width="80" height="8" x="80.5" y="116" fill="#F3F4FA" rx="4"></rect></g><circle cx="170.5" cy="120" r="2" fill="#F3F4FA"></circle><g clip-path="url(#h)"><rect width="80" height="8" x="180.5" y="116" fill="#F3F4FA" rx="4"></rect></g></g><path stroke="#E1E3ED" d="M1 70.5h513v71H1z"></path><path fill="#fff" d="M1 141.5h513v71H1z"></path><path stroke="#E1E3ED" stroke-linecap="round" d="M57 157v40"></path><g clip-path="url(#i)"><rect width="20" height="20" x="18.5" y="167" fill="#F3F4FA" rx="10"></rect></g><rect width="180" height="16" x="80.5" y="159" fill="#F3F4FA" rx="8"></rect><g clip-path="url(#j)"><g clip-path="url(#k)"><rect width="80" height="8" x="80.5" y="187" fill="#F3F4FA" rx="4"></rect></g><circle cx="170.5" cy="191" r="2" fill="#F3F4FA"></circle><g clip-path="url(#l)"><rect width="80" height="8" x="180.5" y="187" fill="#F3F4FA" rx="4"></rect></g></g><path stroke="#E1E3ED" d="M1 141.5h513v71H1z"></path><path fill="#fff" d="M1 212.5h513v71H1z"></path><path stroke="#E1E3ED" stroke-linecap="round" d="M57 228v40"></path><g clip-path="url(#m)"><rect width="20" height="20" x="18.5" y="238" fill="#F3F4FA" rx="10"></rect></g><rect width="180" height="16" x="80.5" y="230" fill="#F3F4FA" rx="8"></rect><g clip-path="url(#n)"><g clip-path="url(#o)"><rect width="80" height="8" x="80.5" y="258" fill="#F3F4FA" rx="4"></rect></g><circle cx="170.5" cy="262" r="2" fill="#F3F4FA"></circle><g clip-path="url(#p)"><rect width="80" height="8" x="180.5" y="258" fill="#F3F4FA" rx="4"></rect></g></g><path stroke="#E1E3ED" d="M1 212.5h513v71H1z"></path></g><rect width="467" height="283" x="1" y=".5" stroke="#E1E3ED" rx="5.5"></rect><defs><clipPath id="a"><rect width="468" height="284" x=".5" fill="#fff" rx="6"></rect></clipPath><clipPath id="b"><path fill="#fff" d="M16.5 23h24v24h-24z"></path></clipPath><clipPath id="c"><path fill="#fff" d="M80.5 37h281v20h-281z"></path></clipPath><clipPath id="e"><rect width="20" height="20" x="18.5" y="96" fill="#fff" rx="10"></rect></clipPath><clipPath id="f"><path fill="#fff" d="M80.5 116h180v8h-180z"></path></clipPath><clipPath id="g"><rect width="80" height="8" x="80.5" y="116" fill="#fff" rx="4"></rect></clipPath><clipPath id="h"><rect width="80" height="8" x="180.5" y="116" fill="#fff" rx="4"></rect></clipPath><clipPath id="i"><rect width="20" height="20" x="18.5" y="167" fill="#fff" rx="10"></rect></clipPath><clipPath id="j"><path fill="#fff" d="M80.5 187h180v8h-180z"></path></clipPath><clipPath id="k"><rect width="80" height="8" x="80.5" y="187" fill="#fff" rx="4"></rect></clipPath><clipPath id="l"><rect width="80" height="8" x="180.5" y="187" fill="#fff" rx="4"></rect></clipPath><clipPath id="m"><rect width="20" height="20" x="18.5" y="238" fill="#fff" rx="10"></rect></clipPath><clipPath id="n"><path fill="#fff" d="M80.5 258h180v8h-180z"></path></clipPath><clipPath id="o"><rect width="80" height="8" x="80.5" y="258" fill="#fff" rx="4"></rect></clipPath><clipPath id="p"><rect width="80" height="8" x="180.5" y="258" fill="#fff" rx="4"></rect></clipPath><pattern id="d" width="1" height="1" patternContentUnits="objectBoundingBox"><use xlink:href="#q" transform="scale(.00195)"></use></pattern><image xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAFhdJREFUeF5l21nIvVXZx/G9tcFsVlMbzMpyHss0UxM0oiApJVQcUCMHyOzEIc1wOJAIpDPBU8EIRSGQxCDDVJy10jS1TG1wKFNLK1N74rPe57tZ/t8ND/fe972G6/pd87XuZ3naaaetra2tLfy94Q1vWGy00UaLPu7deeediyeffHLxr3/9a/Hqq68u3vjGNy7e+ta3Lv75z38u3vzmNy9eeeWVxXK5XPz3v/9dbLrppou3vOUtY4y5b3rTmxavvfbauPpt3H/+85/x+6mnnlpsttlmY97b3/72xYsvvrjYcsstx7p+W/fll19e/OUvf1lsvPHGY81//OMfY5w1rOdjTXR/6lOfWuy2226Dfs/M6W/mx35ocvW3BIBJFjLB9wa5d8cddyweffTRMcnHZohpDiIBgeh3vvOdAwD3gOTjGYYR/e53v3vxt7/9bQCJMWN8f//73z/mAfDf//734oUXXhj7meN5wHkGAGv4PoNg76OOOmqxySabrO6jNZACYQZgCOUb3/jGgBJTAEgbut56662L3//+96uFjMOQsQi0IcZc3/a2tw1igWOMj3s+GHTfHKBgjLQ990figWy83ySOUdqXxP7+97+PeTTImAQGgOOOO26sPa/jecKKp9YybmhA6o9oDPjMG/74xz8eDLmHcN+ha4EPfvCDQ/qA8RsQMUyi1vOHMB9jrWMNjDQPMK3viib3MGncSy+9NBgBCBCee+65cfXcx3onn3zy2Mfc1NwctMaXsfPzoQHZKWIMzF4t7vuVV145rphDXMyT/LbbbrvyHcZYwx+pGp82BI6r50mvNTHLdOyPSRpmL99juvWZwLPPPjvMaDaFY489dvgRH4KKDzRYL95mTViefvrpazaK2JyIQWnBT37yk7Hh7Cip9NZbbz0cWQxl96Qc47QgE8tRZo/zXjlSkrYPqWMiENg+8Px5RvqcMwCM8znxxBOHOTbOvfya6/wJhOWpp566lmcvAqSK2c4vfvGLxS9/+cuVelnoXe9610Cb7c0ed4stthjq+o53vGM4Nc9yRtY1PhPL0WHed/vFoLG0hGZ4zjFmJsD461//OjSA1mQG++6772K//fZbATcDjIa0YDbz5THHHLOGWH8zodmhSX/+858X119//WoBgAGABmCS/eV9AzNHufnmmw+GZ+bMLXxt6M3dxyAQMeyTL3CP9DGMeX+kz0mSKH/05S9/+f/C27oznoWZQ4zPYSJHHnnkGoIwwIF4mPrb3EJPPPHE4mc/+9nKswcA5t7znveMOUUQ40mZabhfqPMdI4AmNSY0e36/zc3juwKCqqMHo2kBIESIP/3pT6vx1gL6KaecsjLVmdHMIuCLSMuvfe1ra3lOjBXn85Y2f+aZZxbXXXfdYDJfsdVWWy0AwOZKfCyOYQC4hynOsPWzx9kjpx35GxL2PSA4vPKBQicAn3/++cUf//jHcXUfAPb56le/uvI55SvZu3UAUVQA4vKb3/zmmhuz10TgHBIh/qMf/WiMCQQS5gPYfHHdHJt6BgjrAgBDxvjzfU64yiSNxRiT8CH9HKHvniVF9NAMphlA1rGnZKhcpaiWzwmotNUayzPOOGNkgiUUqWWxO8f4wx/+cBBkE1pA+kyHBvD6hVIgZFKYMq4ssDA3EpD1FLbMLHPrN+J8JyUM5+2tARDmwBEa5w9zwD7mmGNWAMwJUHu6lkFac/mtb31rlQgVipKE35iF5FVXXTWISa0B8b73vW84wRKh8npz2LoPU8mjM40c1uwDAAXcYr8x9nJf+E0TcqQAofquzJMWoJlT/spXvrLKahNempPmVUsMgL797W+PVHhOGU2AMm3IL0iJH3nkkcEs4jFWqCuCQJaa0wDA+J0PKA7nndO4DUMi4jDmUwIEQCAUEQqLgBIJgOD5DjvssPj85z+/SsxKfIoEhWTrF3aX55133tCAAMg+cjyh/oc//GFxww03DMaEG4wFxpxBAofaA6Lq0GbWzdOX0VFdYxBvn3yMvWkAARAEaZOwe6XhZYieiVLAoGE777zzYv/9939d6psGxKOxZbnLs846awVA5XC5ctKyANSYAQJs4op46l5Cwx8UBQBEM6yBcQAERKpZadx+ZZR5+8IfzcP8008/PaSbF09TH3zwwbH2LrvsMhj74he/+Lqsr7qguqTkaaxz5plnjlqgdDU7LI9OjW688caReiJuzz33XDkxi1T3m/ORj3xkMP7e9753RIOcYwWQ35lWEaHEJRW3B4ZVoYCnfaq/1mBiQAUg+weAex/60IeG5u2zzz4rR5eJxU9Flvsj0tGAQuBcEkdcANx+++3D24q90s3CF2YRwitzWMKiAslfCZNkKfubI85MlPWo5m9+85vFPffcM6q9bNUe1rcGRqm/fTBgjDTdfu4xg5122mkFQDlAZm4f/BIcsJZnn332AADDAVComMtIm1jk3nvvXci58/jUCShJkQkIT8wjuyQZdokRkqtmt1+pMBCt89Of/nQAWj5g7oEHHjg0Dii//e1vF4899tgwNQBg6K677hqah3kAfexjHxsaPVd/c4mNXzRYY4TBOUxUn+eoWoRkSMH1k5/85JCGDSUje++993CI/EEOBjNVkNbnOD3ffffdVz0DABvveWlutb4ky5xKb6pejeA7MNIAxRqpG0sLPvCBD6ycejE/LQdsWSN6luecc87QgFLEwtOGNTT7Z4vQ5wQ5uaRMSnNNAF2StlkxXKjKSbp6jjgaRDrCGbuv32h9ANaPJBiAAMj6aQlte+CBBwYAaBae+Z5MLR9AkGWCgTE0nA8o+0rlU+d+I5SEqJ+wI+GANKnX4SnrQhCV5LFJaK+99lp84hOfWDU6gQIAgNUKszZG7Wt9WnXzzTePRqemrOzummuuWXz0ox8dZmRPc2kPgXCWACB5axgTADn4SuHMvYRsAFDMr6ojFUxTkfICCwGgJiVpAALxPiSN6F133XXxhS98YfHd7353SAuhp5566pCsNZhG6u0eQNyj1qT8q1/9anH00Ucvzj777OFrfv7zny8OOOCAsb5xmJz3pv4ixKc//elVVVpDBl0lPAHgN/7wMXjhA0oqUvtydgvNJSW784cYYQ4xqfHvfve78b2W1K9//evhof1mIo8//vjipJNOGhIF+Mc//vFVEvTwww8PyWlr33LLLWNdGlI+ABhgkrS9rUmL0GJdiVAluPS8zDTTNj8w8OavxGukwm6kEnnWSlu/8wt8gE0tjEiEGAdA9kraEV+JjFkglvszD0DtuOOOg2iOTdudXcfEKFLW65CSHfeYR2ltPsZcfQH+yJ6SobLFyt/h7Na7TgDM341IccEFFwwTyBnNvbPCYmZQfEYoDfBX2xtIVWrup94lHsACMlvn7Lbffvsh5RIennm77bYbxHNqtc4Ak9TKJTBDu4BH/ZkGQIDD52T3xplToyeNap1RIV544YUjCswA5EBKHsoOb7vttlWzE/FUzbUNIG2tzgQKN5gxBvNU1n2FC0cKACqMGGt9+MMfHozU/kJLEuVg/fbMPiJLWSLfw48wt5o59kR7jRFahM/5pGoAUC6PsDpClcZAKBrcfffdQ4o1PZzosEXJh08Znw1yls01DwPUleSYAC1BoFwfDQjmzfme6gBj00oM0Fb3mFzRAwgSrfoGQCwRKjrhpx6j74AYpnH++eevEqGKlbnYqFR2TxQgdU5LvKXW/jDS0ZZF688FBMDYnpw9h8sEgAcoGlA/gIenMQkCcPml8gog2oM/kj8wAxEDAHwBQdCiiq5ygQSMzxooAwADKg/nvkCOozSZp8coiZE+MITCukSdEVRodJpkbXkBL55kqaq5mLJepbA1gFsIrtT2PF9VUgacymEAWDstnPkoAcK49QJnHOVddNFFoxzOu9awnEvhJvC4JCP5QGT2X4scw9R3PjqrG8Q+77///uGNSYkP0DcgeeBIfurriSTA6dP+ACgMo4UJMAcaoQSO9iRvXknebJIB8ToAUgtgzN1bvzt4sDA7Vg+QFCdmESoLEN+Ncc3x1N5STLFb82R0mMckAOrx0zB7A5aGGes3LQEqu5UPAJPaA858zvDQQw9d+YqcYH2AogiaaJbfBElYwwRqSGxYBVYIdT9kdYaEOkzUBAWGxTFl8dCvfw84UrAp+zeOORmLEVI0hlkJa6o7ptXBSx68Q1FaWJeIJsg+c3hd06BMx2/7ddAK4OW55547fEBm4Htp44Y9tToqzgplXJyYBTlCi9UKMz+746ERhIjqedI1P1+B8VrcpFRfoUOUzhezec9JHc18gGttMHvM+UIgRE/OE920dtQCxfkc0Yb99BxXRZJ8nbTrEJPq3AqzHtskfZqR2jINc9g45jpOwxCJ0gSqLUR6nq2SvnnUvRckkipzAJCCq1S+mmaOAoDAHxDtI+TS4nE8nmesC1T6O2tG9gQMyYyFSN0fYkmRWnOINTeUzcZhCpOFI2t85jOfWZXEMj9qX3uNpvErAKzPgHl7dSIEzPIAJiWqJP182JzVltfUSfZ7aMDxxx8/NKBmY9KH3tyyinhXUkC0hAOKGJfji+EWZac2oqauJF2b3XdOz36ytxyrcRgCJhAJwzoBT2JacdbkL5gdSRIGMHOYGzKf2VbPMIFqitEROuqoo4YGkHp5fe2jOkUBEcJ+8+qYxTSbfuihhwbh1BsYGBGqbFayFJNU2nPzyt7y9O7xGx2A0gD78i9ifem0SIF5IIgAhd7816z+mUb5TgnV4AsA0AVCuXPOL7uZ1T/vrtwFAA3Qg6PCpOs37RDSbBTxzMIz2SB7JUn+gXnICWgIpth0xU7vJrFdTtM8TNuLsOxj7Je+9KXX2X9RYG7szA2R+Xhtefjhh4/D0Xr8GzqSVL92dhkZyVJR3VimwNFhmD1iks1ioD5gaXFpM5utaCoXsDbmSKbkaI899hhgkj5N8l3miGYats0224xmyEz3bL5lhHO3ixnYkyktDzvssAFAb3rN7bG8ac2EQmVdFR0g0lODm8fRaXQgnmRIE8Gu1ufdAZdWIK7DWBr4uc99bmjiZZddNlRdwoQG44BsnvZ8LXNadOSRR67eWstE5wJoTuoq69HPxOyxPOKII8bpMPulVtQDOqWsLZBfmNNLRYyFmADJYg7R/rSqrIXITmIkN+J1jNGOTpzrIN90002ja8T20UQrKnOtBdDA5m9oxmz3cySoHzAnSGk0f2TP5bHHHjv6ARgo9lZvM4txeLD+5liaEAjmkQjHpZnBDHxHBJvHnDXYee8O8Bt+f/3rX1+9WEGzrr766kEQUOoilbVJvX03DghFosMPP3z1HlLl7xwF0p45sate6DBnecIJJ4yeYIVMxNc3w0CpbSZQ6gwA9igHUMeL3cAxp0YGKUqc2K9nvDnnR9U5Pnv3eg4mgNAZAGJrwTGr6hJmYz/+IYkHQEXcnBFm/0WGcoLRejvxxBNHS6wucG909opKEWJOitIATm7uKHNIFpfA0CZMAsU9PQTq6pnQGUDV+9aXDnf81otb7vUqTDSgMX8xh7jS3nxX+c1sFo1B06gQAVCLuOZlr7zM7wcAqBYZJ5KnZ6skTmqIJmkagXl/TpFIlVlJgIRCIa2s0zUQre/ojRkBqpY2EwCM3zTVOwC0puQtyUZjzZSAqLdZRCivGWHyuOOOGx2hkLRBvb3uW6g3Pzme++67byQ7lb4lK2xbVohhmxpb/m9TCU4psawP0MV//oJp9A4BkEgf88zReFJzRsCMojfmqlcI0xodyZN+pfkcEfJrAwAS6FWY1KbkB1FUm3Q5Sgx5W8SBRc6zJohFRQYgiNFUHQju99ocpiqNrctEODZjXSuxxWgFEgBoYomUrm/hzLro9ufDptGN+V7Smp1ivM1hcrwmV6laHWBhcVu4KsVEWCcuQtEVV1wxJAOQWmLmIRYIiPGsc0BrYYiJWIvt925RPYHaYNalKRxs2Z71HJXZK7MxrxPn3lEAQJVqkk/1Xd0rOgwgvCrbWb8bFuSsqrw6iZn7fezzkksuWTFRdlcGxmOzWXmB9NWmmJXq0gDEmmMdINGyvLx5JEhLNGFpAv8h4zSPprjyObP08/RMofBN4sYmRPTlN/IPwwRMMuizn/3s2IBq99KyRXrdpX46wC6++OJVuVrnpvLTc/4AE75Le+3hyqOzb/cBUheoSOQ535Cp0AS5Q/9MQdUPPvjgYRI5RtpUIwcNAMwsavF1vy5UvmOUw9JM+XTHWXnJMimLYRJhdY/5AO8Pz2+DFkI7ula4SDchj1laZG0xvAanPIHJJE3qTfI1Pjp3cJ82mucVHVoqqgCMsNDaAY3rfDiTP4ufkrKhNddff/0aRwTNPKaB9eILZ6Fa85R6f//73x+bIp6WtGlVJE0iQUdq9pC48OY29hHuqD6AgAMIDNZAETLLI0rR7e+eI3Mf80UXz7PvuSNUiMxvlAmWDC1vuOGGNcxhqHCWnQClV1GyJQt26goAzqnX4ayTFqXSnhuPUPUBE0MsJkQL+7JzAPZ2iP07dyhx6e1xa9Ei/xtAe6h/NQkNyZxnx7cKeetvp3pWMre85ZZbxgsShbRCRSVjAKQJeVtzbHz55Zev3rcp9oZ6CRaiOLzO80SDOrOdGzARYAHGXye6nSp1qps6qwMUVz7oYDLA6JWb8oRS44q5bP91AIRyDqJiw7WMy9WiOZe6Rd/73vfG/UJhWVjMA7TyuVK7M76uQKUxc66eOcZUR93VI4cccsh43whD6gVOs31qmJbIWbdn6KvAG+2y2267bS0VAUDlIon1hvecU9vQuCTBXn/wgx8M+w+giifrdqZQ8pJmYQxIG7bfZtCZSn1BjHe46bu+w0EHHbQ6OOEM5+Mz+3Qgkk8CuLkJC80DgMrFwpyFKmVLJlZxc/1oay6OvErPxs0LiFQQANbPdmdJ55gywRxUPoZPoNrZbAAYT/0PO+ywVakeAPmcNGbWoPzSnCku77zzzgGAT5Iz0CZlZhVBA7H1lw56GbrszztB86lsnr6ip9Ca6ST5zuxc0760JOn3kgS62o8D9O6RdQDEkQZo7zpYJ3D5nBqwhNr/Mw0AIjZ7NdGiNp7r7MrKukU1KfwmrUsvvXSkutXto9pa/9+dYW/rqfLcXUqT6jm6+ogO4z861gFvTSCkRV6kKgGq82R8r+YFqLk+5lmzUn9o/h133LGWZLOzQgmkAiANcc1Z9TpazFFDNQJNMCZNipCABvBs/4FQSo5ATMz+IUmWDJHyRRddtHrvuP8hzNzKDmM+80q7rDP2u+uuu4YTnJ2U34W9HCQiO0GK4TnlDCiND+0tMT7brUZIs5LGbAZ59yQ41ydJrAPSnNt3vvOdoSH+JFyeZ3LGZDJ4y1TsPYPw/wAoPlaXlzElvTlN7kClKjJf4j2Aa6+9dsTzOk1VYGWSrtaO6LQkU0jjEAuASmJMBc6ZZ565Or2aX662Fw3L60dXYKXp1l3ec889q/8YCR1XoSLJzd2gaumA6OQ275+q6Rl4xV6Ki5jyg2FT6x9jEZF3Ng6YaUoax3kl0QDSZzjiiCNWkuUz/JWpZgqj77euJZlv4dk+/wOS9ZfPao49mgAAAABJRU5ErkJggg==" id="q" width="512" height="512"></image></defs>', 3);
const _hoisted_5$5 = [
  _hoisted_2$a
];
function render$3(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$f, _hoisted_5$5);
}
const Illustration$1 = { render: render$3 };
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  __name: "GuideCard2",
  props: {
    action: { type: Function }
  },
  setup(__props) {
    const { t } = useI18n();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$l, {
        title: unref(t)("runs.slideshow.step2.title"),
        body: unref(t)("runs.slideshow.step2.description")
      }, {
        image: withCtx(() => [
          createVNode(unref(Illustration$1))
        ]),
        action: withCtx(() => [
          createVNode(_sfc_main$k, {
            action: __props.action,
            "left-label": unref(t)("runs.slideshow.controls.step", [2, 3]),
            "right-label": unref(t)("runs.slideshow.controls.next"),
            "right-icon": unref(x1)
          }, null, 8, ["action", "left-label", "right-label", "right-icon"])
        ]),
        _: 1
      }, 8, ["title", "body"]);
    };
  }
});
const _hoisted_1$e = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  fill: "none",
  viewBox: "0 0 469 284"
};
const _hoisted_2$9 = /* @__PURE__ */ createStaticVNode('<g clip-path="url(#a)"><path fill="#fff" d="M1 .5h513v71H1z"></path><path stroke="#E1E3ED" stroke-linecap="round" d="M57 16v40"></path><g clip-path="url(#b)"><rect width="19" height="19" x="19" y="26.5" fill="#F3F4FA" rx="9.5"></rect><rect width="19" height="19" x="19" y="26.5" stroke="#BFC2D4" stroke-dasharray="2 4" stroke-linecap="square" rx="9.5"></rect><path fill="#1FA971" fill-rule="evenodd" d="M28.5 46c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10Zm3.864-12.496a1 1 0 0 0-1.728-1.008l-2.846 4.88-1.583-1.583a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.57-.203l3.5-6Z" clip-rule="evenodd"></path></g><path fill="#00814D" d="M81.492 32h2.016v-3.727h2.328c2.281 0 3.836-1.515 3.836-3.765v-.016c0-2.258-1.555-3.765-3.836-3.765h-4.344V32Zm3.844-9.625c1.445 0 2.289.773 2.289 2.125v.016c0 1.351-.844 2.132-2.29 2.132h-1.827v-4.273h1.828Zm7.453 9.766c1.094 0 2.016-.547 2.492-1.414h.047V32h1.945v-5.695c0-1.664-1.335-2.758-3.406-2.758-2.101 0-3.375 1.101-3.492 2.57l-.008.094h1.805l.016-.07c.124-.61.687-1.04 1.609-1.04.984 0 1.531.508 1.531 1.344v.57l-2.164.133c-2.008.125-3.148 1.008-3.148 2.477v.016c0 1.476 1.117 2.5 2.773 2.5Zm-.836-2.578v-.008c0-.657.524-1.07 1.484-1.133l1.891-.117v.625c0 .984-.844 1.726-1.96 1.726-.852 0-1.415-.414-1.415-1.093Zm10.125 2.601c2.031 0 3.477-1.047 3.477-2.61v-.007c0-1.203-.664-1.875-2.375-2.258l-1.383-.305c-.859-.195-1.18-.507-1.18-.984v-.008c0-.61.539-1.008 1.399-1.008.906 0 1.437.485 1.523 1.149l.008.062h1.812l-.007-.086c-.071-1.43-1.274-2.562-3.336-2.562-2 0-3.32 1.023-3.32 2.539v.008c0 1.226.796 2 2.382 2.351l1.375.305c.859.195 1.149.477 1.149.977v.007c0 .61-.571.993-1.516.993-.984 0-1.524-.422-1.672-1.133l-.016-.07h-1.914l.008.07c.172 1.539 1.414 2.57 3.586 2.57Zm7.953 0c2.031 0 3.477-1.047 3.477-2.61v-.007c0-1.203-.664-1.875-2.375-2.258l-1.383-.305c-.859-.195-1.18-.507-1.18-.984v-.008c0-.61.539-1.008 1.399-1.008.906 0 1.437.485 1.523 1.149l.008.062h1.812l-.007-.086c-.071-1.43-1.274-2.562-3.336-2.562-2 0-3.321 1.023-3.321 2.539v.008c0 1.226.797 2 2.383 2.351l1.375.305c.86.195 1.149.477 1.149.977v.007c0 .61-.571.993-1.516.993-.984 0-1.523-.422-1.672-1.133l-.015-.07h-1.914l.007.07c.172 1.539 1.414 2.57 3.586 2.57Zm8.36 0c2.164 0 3.382-1.281 3.64-2.555l.024-.086h-1.821l-.015.055c-.188.555-.821 1.07-1.789 1.07-1.266 0-2.063-.859-2.094-2.312h5.797v-.625c0-2.5-1.469-4.164-3.836-4.164s-3.891 1.719-3.891 4.328v.008c0 2.633 1.5 4.281 3.985 4.281Zm-.071-7.094c1.032 0 1.782.657 1.922 1.97h-3.883c.157-1.274.93-1.97 1.961-1.97Zm8.149 7.094c1.195 0 2.109-.594 2.578-1.57h.047V32h1.945V20.727h-1.945v4.414h-.047c-.469-.993-1.414-1.594-2.586-1.594-2.078 0-3.414 1.633-3.414 4.305v.007c0 2.664 1.328 4.305 3.422 4.305Zm.586-1.64c-1.25 0-2.024-1.016-2.024-2.665v-.007c0-1.649.781-2.665 2.024-2.665 1.195 0 2.039 1.047 2.039 2.665v.007c0 1.625-.836 2.664-2.039 2.664Z"></path><g clip-path="url(#c)"><rect width="16" height="16" x="80.5" y="40" fill="url(#d)" rx="8"></rect><rect width="15" height="15" x="81" y="40.5" stroke="#1B1E2E" stroke-opacity=".07" rx="7.5"></rect><path fill="#9095AD" d="M103.795 53.137c1.586 0 2.762-.875 2.762-2.12v-.006c0-1.012-.52-1.58-1.955-1.928l-1.128-.273c-.786-.192-1.108-.527-1.108-1.012v-.007c0-.629.533-1.046 1.395-1.046.882 0 1.408.458 1.504 1.149l.006.047h1.135l-.007-.089c-.088-1.189-1.08-2.098-2.638-2.098-1.538 0-2.612.868-2.612 2.092v.007c0 1.025.65 1.647 1.99 1.968l1.128.274c.806.198 1.073.485 1.073.998v.007c0 .642-.574 1.045-1.538 1.045-.971 0-1.497-.417-1.641-1.127l-.014-.069h-1.189l.007.062c.143 1.271 1.155 2.126 2.83 2.126Zm6.309 0c.233 0 .486-.028.636-.048v-.964c-.102.007-.239.027-.383.027-.635 0-.97-.212-.97-.97v-4.307h1.353v-.984h-1.353V43.97h-1.231v1.92h-1.039v.985h1.039v4.313c0 1.36.643 1.949 1.948 1.949Zm4.635 0c1.552 0 2.714-.93 2.947-2.106l.013-.068h-1.169l-.02.061c-.205.609-.841 1.06-1.743 1.06-1.265 0-2.072-.855-2.099-2.317h5.12v-.438c0-2.133-1.183-3.575-3.124-3.575s-3.199 1.51-3.199 3.712v.007c0 2.235 1.23 3.664 3.274 3.664Zm-.082-6.33c1.039 0 1.805.65 1.921 2.03h-3.89c.13-1.326.937-2.03 1.969-2.03ZM120.721 53h1.217l2.611-7.11h-1.237l-1.969 5.845h-.028l-1.961-5.844h-1.251L120.721 53Zm7.417.137c1.551 0 2.714-.93 2.946-2.106l.014-.068h-1.169l-.021.061c-.205.609-.841 1.06-1.743 1.06-1.265 0-2.071-.855-2.099-2.317h5.121v-.438c0-2.133-1.183-3.575-3.125-3.575-1.941 0-3.199 1.51-3.199 3.712v.007c0 2.235 1.231 3.664 3.275 3.664Zm-.082-6.33c1.039 0 1.804.65 1.921 2.03h-3.89c.13-1.326.936-2.03 1.969-2.03ZM132.772 53h1.19v-6.125h1.449v-.984h-1.463v-.868c0-.705.328-1.04.985-1.04.184 0 .369.007.512.028v-.964a5.247 5.247 0 0 0-.724-.048c-1.313 0-1.949.65-1.949 2.017v.875h-.991v.984h.991V53Z"></path><path fill="#D0D2E0" d="M148.841 48.987c0-.738-.588-1.326-1.326-1.326h-.021c-.738 0-1.326.588-1.326 1.326v.02c0 .74.588 1.327 1.326 1.327h.021c.738 0 1.326-.588 1.326-1.326v-.02Z"></path><path fill="#BFC2D4" d="M162.5 52h3v-2h-3v2Zm3 0h7v-2h-7v2Zm4.236-6h2.764v-2h-2.764v2Zm-3.342 5.447 2.448-4.894-1.789-.895-2.447 4.895 1.788.894ZM173.5 45v2a2 2 0 0 0 2-2h-2Zm0 0h-2a2 2 0 0 0 2 2v-2Zm0 0v-2a2 2 0 0 0-2 2h2Zm0 0h2a2 2 0 0 0-2-2v2Zm0 6v2a2 2 0 0 0 2-2h-2Zm0 0h-2a2 2 0 0 0 2 2v-2Zm0 0v-2a2 2 0 0 0-2 2h2Zm0 0h2a2 2 0 0 0-2-2v2Zm-12 0v2a2 2 0 0 0 2-2h-2Zm0 0h-2a2 2 0 0 0 2 2v-2Zm0 0v-2a2 2 0 0 0-2 2h2Zm0 0h2a2 2 0 0 0-2-2v2Zm8.236-7a3 3 0 0 0-2.683 1.658l1.789.895a.999.999 0 0 1 .894-.553v-2Z"></path><path fill="#9095AD" d="M182.655 53h1.19v-6.125h1.449v-.984h-1.463v-.868c0-.705.328-1.04.984-1.04.185 0 .37.007.513.028v-.964a5.258 5.258 0 0 0-.724-.048c-1.313 0-1.949.65-1.949 2.017v.875h-.991v.984h.991V53Zm6.112.137c1.551 0 2.713-.93 2.946-2.106l.014-.068h-1.169l-.021.061c-.205.609-.841 1.06-1.743 1.06-1.265 0-2.071-.855-2.099-2.317h5.12v-.438c0-2.133-1.182-3.575-3.124-3.575-1.941 0-3.199 1.51-3.199 3.712v.007c0 2.235 1.231 3.664 3.275 3.664Zm-.082-6.33c1.039 0 1.804.65 1.92 2.03h-3.889c.13-1.326.936-2.03 1.969-2.03Zm6.412 6.33c.95 0 1.804-.513 2.221-1.292h.028V53h1.189v-4.915c0-1.422-1.053-2.331-2.734-2.331-1.675 0-2.694.943-2.796 2.112l-.007.075h1.148l.014-.061c.137-.636.711-1.073 1.627-1.073.991 0 1.559.526 1.559 1.394v.595l-2.037.116c-1.634.096-2.578.855-2.578 2.065v.013c0 1.292.951 2.147 2.366 2.147Zm-1.149-2.147v-.013c0-.663.547-1.087 1.497-1.142l1.901-.116v.58c0 1.033-.862 1.806-1.983 1.806-.854 0-1.415-.431-1.415-1.115Zm8.408 2.147c.233 0 .486-.028.636-.048v-.964c-.102.007-.239.027-.383.027-.635 0-.97-.212-.97-.97v-4.307h1.353v-.984h-1.353V43.97h-1.231v1.92h-1.039v.985h1.039v4.313c0 1.36.643 1.949 1.948 1.949Zm4.341 0c1.08 0 1.805-.486 2.188-1.149h.027V53h1.19v-7.11h-1.19v4.184c0 1.21-.731 2.01-1.852 2.01-1.094 0-1.634-.636-1.634-1.791v-4.402h-1.19v4.614c0 1.62.903 2.632 2.461 2.632Zm4.956-.137h1.19v-4.389c0-1.08.601-1.722 1.524-1.722.287 0 .54.034.636.068v-1.155c-.096-.014-.274-.048-.479-.048-.799 0-1.415.52-1.654 1.34h-.027V45.89h-1.19V53Zm6.905.137c1.551 0 2.713-.93 2.946-2.106l.014-.068h-1.169l-.021.061c-.205.609-.841 1.06-1.743 1.06-1.265 0-2.071-.855-2.099-2.317h5.12v-.438c0-2.133-1.182-3.575-3.124-3.575-1.941 0-3.199 1.51-3.199 3.712v.007c0 2.235 1.231 3.664 3.275 3.664Zm-.082-6.33c1.039 0 1.804.65 1.92 2.03h-3.889c.13-1.326.936-2.03 1.969-2.03Zm7.478-3.671h-1.135l-2.782 12.257h1.135l2.782-12.257Zm.95 9.864h6.112v-1.107h-4.881v-3.391h4.628v-1.094h-4.628v-3.165h4.881v-1.107h-6.112V53Zm7.739 0h1.216v-7.786h.035L241.321 53h1.197v-9.864h-1.217v7.786h-.034l-5.428-7.786h-1.196V53Zm13.924.164c2.632 0 4.184-1.579 4.184-4.245v-.937h-4.013v1.08h2.783v.178c0 1.654-1.204 2.79-2.954 2.79-2.009 0-3.26-1.532-3.26-4.013v-.007c0-2.434 1.23-3.904 3.26-3.904 1.388 0 2.345.718 2.803 1.97l.027.074h1.292l-.034-.13c-.458-1.743-1.818-3.048-4.088-3.048-2.755 0-4.518 1.955-4.518 5.038v.007c0 3.144 1.763 5.147 4.518 5.147Zm5.62-3.61h4.375v-1.107h-4.375v1.108ZM262.28 53h1.19v-9.864h-1.203l-2.625 1.886v1.238l2.611-1.819h.027V53Zm7.089.164c2.092 0 3.582-1.176 3.582-2.83v-.014c0-1.217-.854-2.228-2.119-2.522v-.028c1.08-.335 1.764-1.155 1.764-2.194v-.014c0-1.49-1.361-2.59-3.227-2.59-1.866 0-3.226 1.1-3.226 2.59v.014c0 1.04.683 1.86 1.763 2.194v.028c-1.264.294-2.119 1.305-2.119 2.522v.014c0 1.654 1.49 2.83 3.582 2.83Zm0-5.852c-1.189 0-2.003-.676-2.003-1.633v-.014c0-.957.814-1.634 2.003-1.634 1.19 0 2.003.677 2.003 1.634v.014c0 .957-.813 1.633-2.003 1.633Zm0 4.779c-1.36 0-2.331-.766-2.331-1.832v-.014c0-1.08.964-1.852 2.331-1.852s2.331.772 2.331 1.852v.014c0 1.066-.971 1.832-2.331 1.832Zm8.319 1.073c1.976 0 3.425-1.217 3.425-2.864v-.014c0-1.401-.977-2.297-2.413-2.42v-.027c1.231-.26 2.092-1.094 2.092-2.31v-.014c0-1.497-1.237-2.543-3.117-2.543-1.846 0-3.117 1.073-3.275 2.68l-.006.068h1.182l.007-.069c.103-.998.93-1.613 2.092-1.613 1.203 0 1.88.595 1.88 1.627v.014c0 .984-.821 1.709-1.996 1.709h-1.183v1.039h1.237c1.381 0 2.249.676 2.249 1.886v.014c0 1.046-.882 1.77-2.174 1.77-1.312 0-2.201-.67-2.303-1.64l-.007-.068h-1.183l.007.082c.13 1.558 1.449 2.693 3.486 2.693Z"></path></g><path stroke="#E1E3ED" d="M1 .5h513v71H1z"></path><path fill="#fff" d="M1 71.5h513v71H1z"></path><path stroke="#E1E3ED" stroke-linecap="round" d="M57 87v40"></path><g clip-path="url(#e)"><rect width="19" height="19" x="19" y="97.5" fill="#F3F4FA" rx="9.5"></rect><rect width="19" height="19" x="19" y="97.5" stroke="#BFC2D4" stroke-dasharray="2 4" stroke-linecap="square" rx="9.5"></rect><path fill="#BFC2D4" fill-rule="evenodd" d="M28.5 117c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10Zm-2.293-13.707a1 1 0 1 0-1.414 1.414L27.086 107l-2.293 2.293a1 1 0 1 0 1.414 1.414l2.293-2.293 2.293 2.293a1 1 0 1 0 1.414-1.414L29.914 107l2.293-2.293a1 1 0 1 0-1.414-1.414l-2.293 2.293-2.293-2.293Z" clip-rule="evenodd"></path></g><path fill="#AFB3C7" d="M81.492 103h2.016v-4.602h4.726v-1.64h-4.726v-3.336h5.172v-1.695h-7.188V103Zm10.485.141c1.093 0 2.015-.547 2.492-1.414h.047V103h1.945v-5.695c0-1.664-1.336-2.758-3.406-2.758-2.102 0-3.375 1.101-3.493 2.57l-.007.094h1.804l.016-.07c.125-.61.688-1.04 1.61-1.04.984 0 1.53.508 1.53 1.344v.57l-2.163.133c-2.008.125-3.149 1.008-3.149 2.477v.016c0 1.476 1.117 2.5 2.774 2.5Zm-.836-2.579v-.007c0-.657.523-1.07 1.484-1.133l1.89-.117v.625c0 .984-.843 1.726-1.96 1.726-.852 0-1.414-.414-1.414-1.094Zm7.921-7.03a1.067 1.067 0 1 0 0-2.134 1.07 1.07 0 0 0-1.085 1.07c0 .579.476 1.063 1.085 1.063ZM98.087 103h1.945v-8.281h-1.945V103Zm3.656 0h1.946V91.727h-1.946V103Zm7.242.164c2.164 0 3.383-1.281 3.641-2.555l.023-.086h-1.82l-.016.055c-.187.555-.82 1.07-1.789 1.07-1.265 0-2.062-.859-2.093-2.312h5.797v-.625c0-2.5-1.469-4.164-3.836-4.164-2.368 0-3.891 1.719-3.891 4.328v.008c0 2.633 1.5 4.281 3.984 4.281Zm-.07-7.094c1.031 0 1.781.657 1.922 1.97h-3.883c.156-1.274.93-1.97 1.961-1.97Zm8.148 7.094c1.196 0 2.11-.594 2.579-1.57h.047V103h1.945V91.727h-1.945v4.414h-.047c-.469-.993-1.414-1.594-2.586-1.594-2.078 0-3.414 1.633-3.414 4.305v.007c0 2.664 1.328 4.305 3.421 4.305Zm.586-1.641c-1.25 0-2.023-1.015-2.023-2.664v-.007c0-1.649.781-2.665 2.023-2.665 1.196 0 2.04 1.047 2.04 2.665v.007c0 1.625-.836 2.664-2.04 2.664Z"></path><g clip-path="url(#f)"><rect width="16" height="16" x="80.5" y="111" fill="url(#g)" rx="8"></rect><rect width="15" height="15" x="81" y="111.5" stroke="#1B1E2E" stroke-opacity=".07" rx="7.5"></rect><path fill="#AFB3C7" d="M103.795 124.137c1.586 0 2.762-.875 2.762-2.119v-.007c0-1.012-.52-1.579-1.955-1.928l-1.128-.273c-.786-.192-1.108-.527-1.108-1.012v-.007c0-.629.533-1.046 1.395-1.046.882 0 1.408.458 1.504 1.149l.006.047h1.135l-.007-.088c-.088-1.19-1.08-2.099-2.638-2.099-1.538 0-2.612.868-2.612 2.092v.007c0 1.025.65 1.647 1.99 1.968l1.128.274c.806.198 1.073.485 1.073.998v.007c0 .642-.574 1.046-1.538 1.046-.971 0-1.497-.417-1.641-1.128l-.014-.069h-1.189l.007.062c.143 1.271 1.155 2.126 2.83 2.126Zm6.309 0c.233 0 .486-.028.636-.048v-.964c-.102.007-.239.027-.383.027-.635 0-.97-.212-.97-.97v-4.307h1.353v-.984h-1.353v-1.921h-1.231v1.921h-1.039v.984h1.039v4.313c0 1.361.643 1.949 1.948 1.949Zm4.635 0c1.552 0 2.714-.93 2.947-2.106l.013-.068h-1.169l-.02.061c-.205.609-.841 1.06-1.743 1.06-1.265 0-2.072-.855-2.099-2.317h5.12v-.438c0-2.133-1.183-3.575-3.124-3.575s-3.199 1.511-3.199 3.712v.007c0 2.235 1.23 3.664 3.274 3.664Zm-.082-6.33c1.039 0 1.805.649 1.921 2.03h-3.89c.13-1.326.937-2.03 1.969-2.03Zm6.064 6.193h1.217l2.611-7.109h-1.237l-1.969 5.844h-.028l-1.961-5.844h-1.251l2.618 7.109Zm7.417.137c1.551 0 2.714-.93 2.946-2.106l.014-.068h-1.169l-.021.061c-.205.609-.841 1.06-1.743 1.06-1.265 0-2.071-.855-2.099-2.317h5.121v-.438c0-2.133-1.183-3.575-3.125-3.575-1.941 0-3.199 1.511-3.199 3.712v.007c0 2.235 1.231 3.664 3.275 3.664Zm-.082-6.33c1.039 0 1.804.649 1.921 2.03h-3.89c.13-1.326.936-2.03 1.969-2.03Zm4.716 6.193h1.19v-6.125h1.449v-.984h-1.463v-.869c0-.704.328-1.039.985-1.039.184 0 .369.007.512.028v-.964a5.309 5.309 0 0 0-.724-.048c-1.313 0-1.949.649-1.949 2.017v.875h-.991v.984h.991V124Z"></path><path fill="#D0D2E0" d="M148.841 119.987c0-.738-.588-1.326-1.326-1.326h-.021c-.738 0-1.326.588-1.326 1.326v.021c0 .738.588 1.326 1.326 1.326h.021c.738 0 1.326-.588 1.326-1.326v-.021Z"></path><path fill="#BFC2D4" d="M162.5 123h3v-2h-3v2Zm3 0h7v-2h-7v2Zm4.236-6h2.764v-2h-2.764v2Zm-3.342 5.447 2.448-4.894-1.789-.895-2.447 4.895 1.788.894ZM173.5 116v2a2 2 0 0 0 2-2h-2Zm0 0h-2a2 2 0 0 0 2 2v-2Zm0 0v-2a2 2 0 0 0-2 2h2Zm0 0h2a2 2 0 0 0-2-2v2Zm0 6v2a2 2 0 0 0 2-2h-2Zm0 0h-2a2 2 0 0 0 2 2v-2Zm0 0v-2a2 2 0 0 0-2 2h2Zm0 0h2a2 2 0 0 0-2-2v2Zm-12 0v2a2 2 0 0 0 2-2h-2Zm0 0h-2a2 2 0 0 0 2 2v-2Zm0 0v-2a2 2 0 0 0-2 2h2Zm0 0h2a2 2 0 0 0-2-2v2Zm8.236-7a3 3 0 0 0-2.683 1.658l1.789.895a.998.998 0 0 1 .894-.553v-2Z"></path><path fill="#AFB3C7" d="M182.655 124h1.19v-6.125h1.449v-.984h-1.463v-.869c0-.704.328-1.039.984-1.039.185 0 .37.007.513.028v-.964a5.32 5.32 0 0 0-.724-.048c-1.313 0-1.949.649-1.949 2.017v.875h-.991v.984h.991V124Zm6.112.137c1.551 0 2.713-.93 2.946-2.106l.014-.068h-1.169l-.021.061c-.205.609-.841 1.06-1.743 1.06-1.265 0-2.071-.855-2.099-2.317h5.12v-.438c0-2.133-1.182-3.575-3.124-3.575-1.941 0-3.199 1.511-3.199 3.712v.007c0 2.235 1.231 3.664 3.275 3.664Zm-.082-6.33c1.039 0 1.804.649 1.92 2.03h-3.889c.13-1.326.936-2.03 1.969-2.03Zm6.412 6.33c.95 0 1.804-.513 2.221-1.292h.028V124h1.189v-4.915c0-1.422-1.053-2.331-2.734-2.331-1.675 0-2.694.943-2.796 2.112l-.007.075h1.148l.014-.061c.137-.636.711-1.073 1.627-1.073.991 0 1.559.526 1.559 1.394v.595l-2.037.116c-1.634.096-2.578.855-2.578 2.065v.013c0 1.292.951 2.147 2.366 2.147Zm-1.149-2.147v-.013c0-.664.547-1.087 1.497-1.142l1.901-.116v.581c0 1.032-.862 1.804-1.983 1.804-.854 0-1.415-.43-1.415-1.114Zm8.408 2.147c.233 0 .486-.028.636-.048v-.964c-.102.007-.239.027-.383.027-.635 0-.97-.212-.97-.97v-4.307h1.353v-.984h-1.353v-1.921h-1.231v1.921h-1.039v.984h1.039v4.313c0 1.361.643 1.949 1.948 1.949Zm4.341 0c1.08 0 1.805-.486 2.188-1.149h.027V124h1.19v-7.109h-1.19v4.183c0 1.21-.731 2.01-1.852 2.01-1.094 0-1.634-.636-1.634-1.791v-4.402h-1.19v4.614c0 1.62.903 2.632 2.461 2.632Zm4.956-.137h1.19v-4.389c0-1.08.601-1.722 1.524-1.722.287 0 .54.034.636.068v-1.155c-.096-.014-.274-.048-.479-.048-.799 0-1.415.519-1.654 1.34h-.027v-1.203h-1.19V124Zm6.905.137c1.551 0 2.713-.93 2.946-2.106l.014-.068h-1.169l-.021.061c-.205.609-.841 1.06-1.743 1.06-1.265 0-2.071-.855-2.099-2.317h5.12v-.438c0-2.133-1.182-3.575-3.124-3.575-1.941 0-3.199 1.511-3.199 3.712v.007c0 2.235 1.231 3.664 3.275 3.664Zm-.082-6.33c1.039 0 1.804.649 1.92 2.03h-3.889c.13-1.326.936-2.03 1.969-2.03Zm7.478-3.671h-1.135l-2.782 12.257h1.135l2.782-12.257Zm.95 9.864h6.112v-1.107h-4.881v-3.391h4.628v-1.094h-4.628v-3.165h4.881v-1.107h-6.112V124Zm7.739 0h1.216v-7.786h.035l5.427 7.786h1.197v-9.864h-1.217v7.786h-.034l-5.428-7.786h-1.196V124Zm13.924.164c2.632 0 4.184-1.579 4.184-4.245v-.937h-4.013v1.08h2.783v.178c0 1.655-1.204 2.789-2.954 2.789-2.009 0-3.26-1.531-3.26-4.012v-.007c0-2.434 1.23-3.904 3.26-3.904 1.388 0 2.345.718 2.803 1.969l.027.075h1.292l-.034-.129c-.458-1.744-1.818-3.049-4.088-3.049-2.755 0-4.518 1.955-4.518 5.038v.007c0 3.144 1.763 5.147 4.518 5.147Zm5.62-3.609h4.375v-1.108h-4.375v1.108ZM262.28 124h1.19v-9.864h-1.203l-2.625 1.886v1.238l2.611-1.819h.027V124Zm7.089.164c2.092 0 3.582-1.176 3.582-2.83v-.014c0-1.216-.854-2.228-2.119-2.522v-.027c1.08-.335 1.764-1.156 1.764-2.195v-.014c0-1.49-1.361-2.59-3.227-2.59-1.866 0-3.226 1.1-3.226 2.59v.014c0 1.039.683 1.86 1.763 2.195v.027c-1.264.294-2.119 1.306-2.119 2.522v.014c0 1.654 1.49 2.83 3.582 2.83Zm0-5.852c-1.189 0-2.003-.676-2.003-1.633v-.014c0-.957.814-1.634 2.003-1.634 1.19 0 2.003.677 2.003 1.634v.014c0 .957-.813 1.633-2.003 1.633Zm0 4.779c-1.36 0-2.331-.766-2.331-1.832v-.014c0-1.08.964-1.852 2.331-1.852s2.331.772 2.331 1.852v.014c0 1.066-.971 1.832-2.331 1.832Zm8.319 1.073c1.976 0 3.425-1.217 3.425-2.864v-.014c0-1.401-.977-2.297-2.413-2.42v-.027c1.231-.26 2.092-1.094 2.092-2.311v-.013c0-1.497-1.237-2.543-3.117-2.543-1.846 0-3.117 1.073-3.275 2.679l-.006.069h1.182l.007-.069c.103-.998.93-1.613 2.092-1.613 1.203 0 1.88.595 1.88 1.627v.014c0 .984-.821 1.709-1.996 1.709h-1.183v1.039h1.237c1.381 0 2.249.677 2.249 1.886v.014c0 1.046-.882 1.771-2.174 1.771-1.312 0-2.201-.67-2.303-1.641l-.007-.068h-1.183l.007.082c.13 1.558 1.449 2.693 3.486 2.693Z"></path></g><path stroke="#E1E3ED" d="M1 71.5h513v71H1z"></path><path fill="#fff" d="M1 142.5h513v71H1z"></path><path stroke="#E1E3ED" stroke-linecap="round" d="M57 158v40"></path><g clip-path="url(#h)"><rect width="20" height="20" x="18.5" y="168" fill="#F3F4FA" rx="10"></rect></g><rect width="180" height="16" x="80.5" y="160" fill="#F3F4FA" rx="8"></rect><g clip-path="url(#i)"><g clip-path="url(#j)"><rect width="80" height="8" x="80.5" y="188" fill="#F3F4FA" rx="4"></rect></g><circle cx="170.5" cy="192" r="2" fill="#F3F4FA"></circle><g clip-path="url(#k)"><rect width="80" height="8" x="180.5" y="188" fill="#F3F4FA" rx="4"></rect></g></g><path stroke="#E1E3ED" d="M1 142.5h513v71H1z"></path><path fill="#fff" d="M1 213.5h513v71H1z"></path><path stroke="#E1E3ED" stroke-linecap="round" d="M57 229v40"></path><g clip-path="url(#l)"><rect width="20" height="20" x="18.5" y="239" fill="#F3F4FA" rx="10"></rect></g><rect width="180" height="16" x="80.5" y="231" fill="#F3F4FA" rx="8"></rect><g clip-path="url(#m)"><g clip-path="url(#n)"><rect width="80" height="8" x="80.5" y="259" fill="#F3F4FA" rx="4"></rect></g><circle cx="170.5" cy="263" r="2" fill="#F3F4FA"></circle><g clip-path="url(#o)"><rect width="80" height="8" x="180.5" y="259" fill="#F3F4FA" rx="4"></rect></g></g><path stroke="#E1E3ED" d="M1 213.5h513v71H1z"></path></g><rect width="467" height="283" x="1" y=".5" stroke="#E1E3ED" rx="5.5"></rect><defs><clipPath id="a"><rect width="468" height="284" x=".5" fill="#fff" rx="6"></rect></clipPath><clipPath id="b"><path fill="#fff" d="M16.5 24h24v24h-24z"></path></clipPath><clipPath id="c"><path fill="#fff" d="M80.5 38h281v20h-281z"></path></clipPath><clipPath id="e"><path fill="#fff" d="M16.5 95h24v24h-24z"></path></clipPath><clipPath id="f"><path fill="#fff" d="M80.5 109h281v20h-281z"></path></clipPath><clipPath id="h"><rect width="20" height="20" x="18.5" y="168" fill="#fff" rx="10"></rect></clipPath><clipPath id="i"><path fill="#fff" d="M80.5 188h180v8h-180z"></path></clipPath><clipPath id="j"><rect width="80" height="8" x="80.5" y="188" fill="#fff" rx="4"></rect></clipPath><clipPath id="k"><rect width="80" height="8" x="180.5" y="188" fill="#fff" rx="4"></rect></clipPath><clipPath id="l"><rect width="20" height="20" x="18.5" y="239" fill="#fff" rx="10"></rect></clipPath><clipPath id="m"><path fill="#fff" d="M80.5 259h180v8h-180z"></path></clipPath><clipPath id="n"><rect width="80" height="8" x="80.5" y="259" fill="#fff" rx="4"></rect></clipPath><clipPath id="o"><rect width="80" height="8" x="180.5" y="259" fill="#fff" rx="4"></rect></clipPath><pattern id="d" width="1" height="1" patternContentUnits="objectBoundingBox"><use xlink:href="#p" transform="scale(.00195)"></use></pattern><pattern id="g" width="1" height="1" patternContentUnits="objectBoundingBox"><use xlink:href="#p" transform="scale(.00195)"></use></pattern><image xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAFhdJREFUeF5l21nIvVXZx/G9tcFsVlMbzMpyHss0UxM0oiApJVQcUCMHyOzEIc1wOJAIpDPBU8EIRSGQxCDDVJy10jS1TG1wKFNLK1N74rPe57tZ/t8ND/fe972G6/pd87XuZ3naaaetra2tLfy94Q1vWGy00UaLPu7deeediyeffHLxr3/9a/Hqq68u3vjGNy7e+ta3Lv75z38u3vzmNy9eeeWVxXK5XPz3v/9dbLrppou3vOUtY4y5b3rTmxavvfbauPpt3H/+85/x+6mnnlpsttlmY97b3/72xYsvvrjYcsstx7p+W/fll19e/OUvf1lsvPHGY81//OMfY5w1rOdjTXR/6lOfWuy2226Dfs/M6W/mx35ocvW3BIBJFjLB9wa5d8cddyweffTRMcnHZohpDiIBgeh3vvOdAwD3gOTjGYYR/e53v3vxt7/9bQCJMWN8f//73z/mAfDf//734oUXXhj7meN5wHkGAGv4PoNg76OOOmqxySabrO6jNZACYQZgCOUb3/jGgBJTAEgbut56662L3//+96uFjMOQsQi0IcZc3/a2tw1igWOMj3s+GHTfHKBgjLQ990figWy83ySOUdqXxP7+97+PeTTImAQGgOOOO26sPa/jecKKp9YybmhA6o9oDPjMG/74xz8eDLmHcN+ha4EPfvCDQ/qA8RsQMUyi1vOHMB9jrWMNjDQPMK3viib3MGncSy+9NBgBCBCee+65cfXcx3onn3zy2Mfc1NwctMaXsfPzoQHZKWIMzF4t7vuVV145rphDXMyT/LbbbrvyHcZYwx+pGp82BI6r50mvNTHLdOyPSRpmL99juvWZwLPPPjvMaDaFY489dvgRH4KKDzRYL95mTViefvrpazaK2JyIQWnBT37yk7Hh7Cip9NZbbz0cWQxl96Qc47QgE8tRZo/zXjlSkrYPqWMiENg+8Px5RvqcMwCM8znxxBOHOTbOvfya6/wJhOWpp566lmcvAqSK2c4vfvGLxS9/+cuVelnoXe9610Cb7c0ed4stthjq+o53vGM4Nc9yRtY1PhPL0WHed/vFoLG0hGZ4zjFmJsD461//OjSA1mQG++6772K//fZbATcDjIa0YDbz5THHHLOGWH8zodmhSX/+858X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" id="p" width="512" height="512"></image></defs>', 3);
const _hoisted_5$4 = [
  _hoisted_2$9
];
function render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$e, _hoisted_5$4);
}
const Illustration = { render: render$2 };
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "GuideCard3",
  props: {
    action: { type: Function }
  },
  setup(__props) {
    const { t } = useI18n();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$l, {
        title: unref(t)("runs.slideshow.step3.title"),
        body: unref(t)("runs.slideshow.step3.description")
      }, {
        image: withCtx(() => [
          createVNode(unref(Illustration))
        ]),
        action: withCtx(() => [
          createVNode(_sfc_main$k, {
            action: __props.action,
            "left-icon": unref(J),
            "right-label": unref(t)("runs.slideshow.controls.reset")
          }, null, 8, ["action", "left-icon", "right-label"])
        ]),
        _: 1
      }, 8, ["title", "body"]);
    };
  }
});
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "RunsGuide",
  props: {
    campaign: null
  },
  setup(__props) {
    const { t } = useI18n();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$o, {
        campaign: __props.campaign,
        medium: unref(RUNS_TAB_MEDIUM)
      }, {
        header: withCtx(() => [
          createVNode(_sfc_main$m, {
            title: unref(t)("runs.connect.title")
          }, {
            description: withCtx(() => [
              createTextVNode(toDisplayString(unref(t)("runs.connect.description")), 1)
            ]),
            control: withCtx(() => [
              createVNode(_sfc_main$n, { "utm-medium": unref(RUNS_TAB_MEDIUM) }, null, 8, ["utm-medium"])
            ]),
            _: 1
          }, 8, ["title"])
        ]),
        cards: withCtx(({ step, goForward, reset }) => [
          step === 0 ? (openBlock(), createBlock(_sfc_main$h, {
            key: 0,
            action: goForward
          }, null, 8, ["action"])) : step === 1 ? (openBlock(), createBlock(_sfc_main$g, {
            key: 1,
            action: goForward
          }, null, 8, ["action"])) : step === 2 ? (openBlock(), createBlock(_sfc_main$f, {
            key: 2,
            action: reset
          }, null, 8, ["action"])) : createCommentVNode("", true)
        ]),
        _: 1
      }, 8, ["campaign", "medium"]);
    };
  }
});
const _hoisted_1$d = { class: "h-full flex" };
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "RunsConnect",
  props: {
    campaign: null
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$d, [
        createVNode(_sfc_main$e, {
          campaign: __props.campaign,
          class: "m-auto"
        }, null, 8, ["campaign"])
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
const _hoisted_2$8 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M9 12L13 8M13 8L9 4M13 8L3 8",
  stroke: "#1B1E2E",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "icon-dark"
}, null, -1);
const _hoisted_3$7 = [
  _hoisted_2$8
];
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$c, _hoisted_3$7);
}
const __unplugin_components_0 = { name: "cy-arrow-outline-right_x16", render: render$1 };
const _hoisted_1$b = { class: "flex px-[16px] pt-[16px] leading-[24px] md:items-center" };
const _hoisted_2$7 = /* @__PURE__ */ createBaseVNode("span", { class: "font-normal text-jade-600" }, "projectId", -1);
const _hoisted_3$6 = { class: "font-normal text-jade-600" };
const _hoisted_4$3 = { class: "flex px-[16px] pt-[16px] pb-[16px] leading-[24px] md:items-center" };
const _hoisted_5$3 = { class: "font-normal text-jade-600" };
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "RunsConnectSuccessAlert",
  props: {
    gql: null
  },
  setup(__props) {
    const props = __props;
    const { t } = useI18n();
    gql`
fragment RunsConnectSuccessAlert on CurrentProject {
  id
  projectId
  configFileAbsolutePath
  projectRoot
}`;
    const showAlert = ref(true);
    const projectId = computed(() => props.gql.projectId);
    const configFilePath = computed(() => {
      var _a;
      return (_a = props.gql.configFileAbsolutePath) == null ? void 0 : _a.replace(props.gql.projectRoot, "").replace(/^\//, "");
    });
    whenever(projectId, () => {
      showAlert.value = true;
    });
    return (_ctx, _cache) => {
      const _component_i_cy_arrow_outline_right_x16 = __unplugin_components_0;
      const _component_i18n_t = resolveComponent("i18n-t");
      return openBlock(), createBlock(_sfc_main$p, {
        modelValue: showAlert.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => showAlert.value = $event),
        status: "success",
        class: "mb-[24px]",
        dismissible: "",
        title: unref(t)("runs.connectSuccessAlert.title")
      }, {
        default: withCtx(() => [
          createBaseVNode("p", _hoisted_1$b, [
            createVNode(_component_i_cy_arrow_outline_right_x16, { class: "h-[16px] mr-[8px] w-[16px] inline align-middle icon-dark-jade-500 mt-[4px] md:mt-0" }),
            createBaseVNode("span", null, [
              createVNode(_component_i18n_t, {
                scope: "global",
                keypath: "runs.connectSuccessAlert.item1"
              }, {
                projectId: withCtx(() => [
                  _hoisted_2$7
                ]),
                configFile: withCtx(() => [
                  createBaseVNode("span", _hoisted_3$6, toDisplayString(unref(configFilePath)), 1)
                ]),
                _: 1
              })
            ])
          ]),
          createBaseVNode("p", _hoisted_4$3, [
            createVNode(_component_i_cy_arrow_outline_right_x16, { class: "h-[16px] mr-[8px] w-[16px] inline align-middle icon-dark-jade-500 mt-[4px] md:mt-0" }),
            createBaseVNode("span", null, [
              createVNode(_component_i18n_t, {
                scope: "global",
                keypath: "runs.connectSuccessAlert.item2"
              }, {
                default: withCtx(() => [
                  createBaseVNode("span", _hoisted_5$3, toDisplayString(unref(configFilePath)), 1)
                ]),
                _: 1
              })
            ])
          ])
        ]),
        _: 1
      }, 8, ["modelValue", "title"]);
    };
  }
});
const _hoisted_1$a = { class: "h-[310px] xl:h-[305px]" };
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "TourCard",
  props: {
    action: { type: Function }
  },
  setup(__props) {
    const { t } = useI18n();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$l, {
        title: unref(t)("runs.slideshow.tour.title"),
        body: unref(t)("runs.slideshow.tour.description")
      }, {
        image: withCtx(() => [
          createBaseVNode("div", _hoisted_1$a, [
            createVNode(unref(RecordGuideImage), { class: "ml-[-20px] mr-[-40px] mt-[-20px]" })
          ])
        ]),
        action: withCtx(() => [
          createVNode(_sfc_main$k, {
            action: __props.action,
            "left-icon": unref(d2),
            "right-label": unref(t)("runs.slideshow.controls.view")
          }, null, 8, ["action", "left-icon", "right-label"])
        ]),
        _: 1
      }, 8, ["title", "body"]);
    };
  }
});
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "RunsTour",
  props: {
    campaign: null
  },
  setup(__props) {
    const props = __props;
    const { t } = useI18n();
    const guideUrl = computed(() => {
      return getUrlWithParams({
        url: "https://on.cypress.io/recording-project-runs",
        params: {
          utm_campaign: props.campaign,
          utm_medium: RUNS_TAB_MEDIUM
        }
      });
    });
    return (_ctx, _cache) => {
      const _component_i18n_t = resolveComponent("i18n-t");
      return openBlock(), createBlock(_sfc_main$o, {
        campaign: __props.campaign,
        medium: unref(RUNS_TAB_MEDIUM)
      }, {
        header: withCtx(() => [
          createVNode(_sfc_main$m, {
            title: unref(t)("runs.empty.title")
          }, {
            description: withCtx(() => [
              createVNode(_component_i18n_t, {
                scope: "global",
                keypath: "runs.empty.description"
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$q, { href: unref(guideUrl) }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(t)("runs.empty.link")), 1)
                    ]),
                    _: 1
                  }, 8, ["href"])
                ]),
                _: 1
              })
            ]),
            content: withCtx(() => [
              createVNode(_sfc_main$r)
            ]),
            _: 1
          }, 8, ["title"])
        ]),
        cards: withCtx(({ step, goForward, reset }) => [
          step === 0 ? (openBlock(), createBlock(_sfc_main$b, {
            key: 0,
            action: goForward
          }, null, 8, ["action"])) : step === 1 ? (openBlock(), createBlock(_sfc_main$h, {
            key: 1,
            action: goForward
          }, null, 8, ["action"])) : step === 2 ? (openBlock(), createBlock(_sfc_main$g, {
            key: 2,
            action: goForward
          }, null, 8, ["action"])) : step === 3 ? (openBlock(), createBlock(_sfc_main$f, {
            key: 3,
            action: reset
          }, null, 8, ["action"])) : createCommentVNode("", true)
        ]),
        _: 1
      }, 8, ["campaign", "medium"]);
    };
  }
});
const _hoisted_1$9 = { class: "h-full flex" };
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "RunsEmpty",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$9, [
        createVNode(_sfc_main$a, {
          campaign: unref(RUNS_PROMO_CAMPAIGNS).recordRun,
          class: "m-auto"
        }, null, 8, ["campaign"])
      ]);
    };
  }
});
const _hoisted_1$8 = {
  key: 0,
  class: "inline-flex rounded-md bg-gray-50 border-gray-200 border-[1px] text-sm px-[8px] text-gray-700 items-center py-[2px]",
  "data-cy": "runTag"
};
const _hoisted_2$6 = { class: "sr-only" };
const _hoisted_3$5 = {
  class: "truncate",
  role: "none"
};
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "RunTag",
  props: {
    label: null,
    iconLabel: null,
    icon: null
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return __props.label ? (openBlock(), createElementBlock("div", _hoisted_1$8, [
        (openBlock(), createBlock(resolveDynamicComponent(__props.icon), { class: "mr-2 icon-dark-gray-600 shrink-0" })),
        createBaseVNode("span", _hoisted_2$6, toDisplayString(__props.iconLabel), 1),
        createBaseVNode("span", _hoisted_3$5, toDisplayString(__props.label), 1)
      ])) : createCommentVNode("", true);
    };
  }
});
const _hoisted_1$7 = {
  class: "flex gap-[8px] flex-col max-w-full children:flex text-gray-300",
  "data-cy": "runTagCount-tooltip"
};
const _hoisted_2$5 = {
  key: 0,
  class: "items-center overflow-hidden"
};
const _hoisted_3$4 = { class: "flex border rounded flex-row gap-[8px] items-center h-6 border-white/20 text-orange-300 text-sm px-2 gap-x-1" };
const _hoisted_4$2 = { class: "font-medium pr-1 opacity-70" };
const _hoisted_5$2 = /* @__PURE__ */ createBaseVNode("div", { class: "w-px my-[6px] h-6 border-white/20 border" }, null, -1);
const _hoisted_6$2 = { class: "font-semibold pl-1" };
const _hoisted_7$2 = {
  key: 1,
  class: "items-center overflow-hidden text-sm"
};
const _hoisted_8$1 = { class: "sr-only" };
const _hoisted_9$1 = { class: "grow-1 max-w-full overflow-hidden" };
const _hoisted_10$2 = { class: "max-w-full break-words whitespace-normal" };
const _hoisted_11$1 = /* @__PURE__ */ createBaseVNode("div", null, null, -1);
const _hoisted_12$1 = {
  key: 2,
  class: "flex-col items-start max-w-full text-sm gap-[8px]"
};
const _hoisted_13$1 = /* @__PURE__ */ createBaseVNode("span", { class: "font-medium" }, "Tags", -1);
const _hoisted_14 = { class: "flex flex-col gap-[8px] children:flex children:items-center w-full" };
const _hoisted_15 = {
  "aria-hidden": "true",
  class: "shrink-0 pr-[8px]"
};
const _hoisted_16 = { class: "grow-1 max-w-full overflow-hidden" };
const _hoisted_17 = { class: "max-w-full break-words whitespace-normal" };
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "RunTagCount",
  props: {
    value: null,
    tooltipData: null
  },
  setup(__props) {
    const props = __props;
    const { t } = useI18n();
    const ariaLabel = computed(() => {
      let labelArray = [];
      if (props.tooltipData.flaky) {
        labelArray.push(`${props.tooltipData.flaky}`, t("specPage.flaky.badgeLabel"));
      }
      if (props.tooltipData.branchName) {
        labelArray.push(t("runs.card.branchName"), props.tooltipData.branchName);
      }
      if (props.tooltipData.tags) {
        labelArray = labelArray.concat(props.tooltipData.tags);
      }
      return labelArray.join(" ");
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$s, {
        "tab-index": "0",
        placement: "bottom"
      }, createSlots({
        default: withCtx(() => [
          createVNode(_sfc_main$8, {
            "aria-label": unref(ariaLabel),
            title: `+${__props.value}`,
            label: `+${__props.value}`,
            "data-cy": "runTagCount"
          }, null, 8, ["aria-label", "title", "label"])
        ]),
        _: 2
      }, [
        __props.tooltipData ? {
          name: "popper",
          fn: withCtx(() => {
            var _a;
            return [
              createBaseVNode("ul", _hoisted_1$7, [
                __props.tooltipData.flaky || 0 > 0 ? (openBlock(), createElementBlock("li", _hoisted_2$5, [
                  createBaseVNode("div", _hoisted_3$4, [
                    createBaseVNode("span", _hoisted_4$2, toDisplayString(__props.tooltipData.flaky), 1),
                    _hoisted_5$2,
                    createBaseVNode("span", _hoisted_6$2, toDisplayString(unref(t)("specPage.flaky.badgeLabel")), 1)
                  ])
                ])) : createCommentVNode("", true),
                __props.tooltipData.branchName ? (openBlock(), createElementBlock("li", _hoisted_7$2, [
                  createVNode(unref(oo), {
                    "aria-hidden": "true",
                    class: "shrink-0 mr-2 icon-dark-gray-500"
                  }),
                  createBaseVNode("span", _hoisted_8$1, toDisplayString(unref(t)("runs.card.branchName")), 1),
                  createBaseVNode("div", _hoisted_9$1, [
                    createBaseVNode("div", _hoisted_10$2, toDisplayString(__props.tooltipData.branchName), 1),
                    _hoisted_11$1
                  ])
                ])) : createCommentVNode("", true),
                __props.tooltipData.tags && ((_a = __props.tooltipData.tags) == null ? void 0 : _a.length) > 0 ? (openBlock(), createElementBlock("li", _hoisted_12$1, [
                  _hoisted_13$1,
                  createBaseVNode("ul", _hoisted_14, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(__props.tooltipData.tags, (tag) => {
                      return openBlock(), createElementBlock("li", {
                        key: tag,
                        class: "relative overflow-hidden max-w-full"
                      }, [
                        createBaseVNode("div", _hoisted_15, [
                          createVNode(unref(l0), { class: "icon-dark-gray-500 icon-light-gray-500" })
                        ]),
                        createBaseVNode("div", _hoisted_16, [
                          createBaseVNode("div", _hoisted_17, toDisplayString(tag), 1)
                        ])
                      ]);
                    }), 128))
                  ])
                ])) : createCommentVNode("", true)
              ])
            ];
          }),
          key: "0"
        } : void 0
      ]), 1024);
    };
  }
});
const _hoisted_1$6 = ["data-cy"];
const _hoisted_2$4 = ["data-cy"];
const _hoisted_3$3 = { class: "flex items-center gap-[8px] min-w-0" };
const _hoisted_4$1 = { class: "flex gap-[8px] min-w-0" };
const _hoisted_5$1 = { class: "flex gap-[16px] items-center" };
const _hoisted_6$1 = { class: "flex gap-2 2xl:gap-4 w-[80px] lg:w-auto lg:max-w-[160px] 2xl:max-w-none justify-end text-sm text-gray-700 items-center whitespace-nowrap children:flex children:items-center" };
const _hoisted_7$1 = ["title"];
const _hoisted_8 = { class: "sr-only" };
const _hoisted_9 = {
  class: "hidden 2xl:block truncate",
  role: "none"
};
const _hoisted_10$1 = ["title"];
const _hoisted_11 = { class: "sr-only" };
const _hoisted_12 = {
  class: "truncate",
  role: "none"
};
const _hoisted_13 = { class: "max-w-full break-words whitespace-normal" };
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "RunCard",
  props: {
    gql: null,
    showDebug: { type: Boolean },
    debugEnabled: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const { t } = useI18n();
    gql`
fragment RunCard on CloudRun {
	id
	createdAt
	status
  totalDuration
  url
  runNumber
  tags {
    id
    name
  }
	...RunResults
	commitInfo {
		authorName
		authorEmail
		summary
		branch
		sha
	}
}
`;
    gql`
subscription RunCard_Change($id: ID!) {
  relevantRunSpecChange(runId: $id) {
    id
    ...RunCard
  }
}
`;
    gql`
mutation RunCard_showDebugForCloudRun($runNumber: Int!) {
  showDebugForCloudRun(runNumber: $runNumber)
}
`;
    const run = computed(() => props.gql);
    const subscriptionVariables = computed(() => {
      return {
        id: run.value.id
      };
    });
    const shouldPauseSubscription = computed(() => {
      return run.value.status !== "RUNNING";
    });
    useSubscription({ query: RunCard_ChangeDocument, variables: subscriptionVariables, pause: shouldPauseSubscription });
    const runUrl = computed(() => {
      return getUrlWithParams({
        url: run.value.url || "#",
        params: {
          utm_medium: "Runs Tab",
          utm_campaign: "Cloud Run"
        }
      });
    });
    const { relativeCreatedAt, totalDuration } = useRunDateTimeInterval(run);
    const showDebugForCloudRun = useMutation(RunCard_ShowDebugForCloudRunDocument);
    async function showDebugForRun() {
      if (run.value.runNumber) {
        await showDebugForCloudRun.executeMutation({ runNumber: run.value.runNumber });
      }
    }
    const tagData = computed(() => {
      var _a, _b;
      const tempTags = (props.gql.tags ?? []).map((tag) => tag == null ? void 0 : tag.name).filter(Boolean);
      const baseCount = 1;
      const branchCount = ((_a = run.value.commitInfo) == null ? void 0 : _a.branch) ? 1 : 0;
      const flakyCount = (run.value.totalFlakyTests || 0) > 0 ? 1 : 0;
      const tagCount = tempTags.length > 0 ? 1 : 0;
      const initialCount = tempTags.length > 0 ? tempTags.length - baseCount : 0;
      const secondCount = initialCount + tagCount;
      const thirdCount = initialCount + tagCount + branchCount + flakyCount;
      const tagCounts = [];
      if (initialCount > 0) {
        tagCounts.push({
          value: initialCount,
          tags: tempTags.slice(baseCount, tempTags.length),
          class: "hidden 2xl:inline-flex"
        });
      }
      if (secondCount > 0) {
        tagCounts.push({
          value: initialCount + tagCount,
          tags: tempTags,
          class: "hidden xl:inline-flex 2xl:hidden"
        });
      }
      if (thirdCount > 0) {
        tagCounts.push({
          value: thirdCount,
          branchName: ((_b = run.value.commitInfo) == null ? void 0 : _b.branch) ?? void 0,
          flaky: run.value.totalFlakyTests ?? void 0,
          tags: tempTags,
          class: "inline-flex xl:hidden"
        });
      }
      return { tags: tempTags.slice(0, baseCount), tagCounts };
    });
    const onDebugClick = (event) => {
      event.preventDefault();
      event.stopPropagation();
      showDebugForRun();
    };
    return (_ctx, _cache) => {
      var _a, _b, _c, _d, _e, _f, _g;
      return openBlock(), createElementBlock("div", {
        "data-cy": `runCard-${unref(run).id}`
      }, [
        createBaseVNode("div", {
          class: "flex justify-between p-[16px] gap-[8px] text-sm text-gray-700 items-center",
          "data-cy": `runCard-status-${unref(run).status}`
        }, [
          createBaseVNode("div", _hoisted_3$3, [
            createBaseVNode("div", null, [
              createVNode(_sfc_main$q, {
                "data-cy": `runNumberLink-${unref(run).id}`,
                class: "group focus-visible:outline-none hover:underline-transparent",
                href: unref(runUrl),
                "use-default-hocus": false
              }, {
                default: withCtx(() => [
                  props.gql.status && props.gql.runNumber ? (openBlock(), createBlock(_sfc_main$t, {
                    key: 0,
                    status: props.gql.status,
                    value: props.gql.runNumber,
                    "is-actionable": true
                  }, null, 8, ["status", "value"])) : createCommentVNode("", true)
                ]),
                _: 1
              }, 8, ["data-cy", "href"])
            ]),
            createBaseVNode("div", _hoisted_4$1, [
              createVNode(_sfc_main$u, {
                gql: props.gql,
                "use-breakpoint-display": true
              }, null, 8, ["gql"]),
              ((_a = unref(run).commitInfo) == null ? void 0 : _a.branch) ? (openBlock(), createBlock(_sfc_main$8, {
                key: 0,
                label: (_b = unref(run).commitInfo) == null ? void 0 : _b.branch,
                title: (_c = unref(run).commitInfo) == null ? void 0 : _c.branch,
                icon: unref(oo),
                "icon-label": unref(t)("runs.card.branchName"),
                class: "hidden xl:inline-flex min-w-0",
                "data-cy": "runCard-branchName"
              }, null, 8, ["label", "title", "icon", "icon-label"])) : createCommentVNode("", true),
              (openBlock(true), createElementBlock(Fragment, null, renderList((_d = unref(tagData)) == null ? void 0 : _d.tags, (tag) => {
                return openBlock(), createBlock(_sfc_main$8, {
                  key: tag,
                  label: tag,
                  title: tag,
                  class: "hidden 2xl:inline-flex max-w-[100px]"
                }, null, 8, ["label", "title"]);
              }), 128)),
              (openBlock(true), createElementBlock(Fragment, null, renderList((_e = unref(tagData)) == null ? void 0 : _e.tagCounts, (tagCount) => {
                return openBlock(), createBlock(_sfc_main$7, {
                  key: tagCount.value,
                  value: tagCount.value,
                  class: normalizeClass(tagCount.class),
                  "tooltip-data": {
                    flaky: tagCount.flaky,
                    branchName: tagCount.branchName,
                    tags: tagCount.tags
                  }
                }, null, 8, ["value", "class", "tooltip-data"]);
              }), 128))
            ])
          ]),
          createBaseVNode("div", _hoisted_5$1, [
            createBaseVNode("ul", _hoisted_6$1, [
              ((_f = unref(run).commitInfo) == null ? void 0 : _f.authorName) ? (openBlock(), createElementBlock("li", {
                key: 0,
                "data-cy": "runCard-author",
                class: "gap-2 shrink-0 xl:max-w-[160px] overflow-hidden",
                title: unref(run).commitInfo.authorName
              }, [
                createVNode(_sfc_main$v, {
                  "aria-hidden": "true",
                  "data-cy": "runCard-avatar",
                  class: "h-[16px] w-[16px] shrink-0 icon-dark-gray-500 icon-light-gray-100 icon-secondary-light-gray-200",
                  email: (_g = unref(run).commitInfo) == null ? void 0 : _g.authorEmail
                }, null, 8, ["email"]),
                createBaseVNode("span", _hoisted_8, toDisplayString(unref(t)("runs.card.commitAuthor")), 1),
                createBaseVNode("div", _hoisted_9, toDisplayString(unref(run).commitInfo.authorName), 1)
              ], 8, _hoisted_7$1)) : createCommentVNode("", true),
              unref(run).createdAt ? (openBlock(), createElementBlock("li", {
                key: 1,
                "data-cy": "runCard-createdAt",
                class: "gap-2 2xl:w-[200px] overflow-hidden",
                title: `${unref(totalDuration)} ${unref(relativeCreatedAt)}`
              }, [
                createVNode(unref(Ao), {
                  size: "16",
                  class: "hidden 2xl:inline-block shrink-0",
                  "stroke-color": "gray-500",
                  "fill-color": "gray-50",
                  "aria-hidden": "true"
                }),
                createBaseVNode("span", _hoisted_11, toDisplayString(unref(t)("runs.card.totalDuration")), 1),
                createBaseVNode("div", _hoisted_12, toDisplayString(unref(totalDuration)) + " (" + toDisplayString(unref(relativeCreatedAt)) + ") ", 1)
              ], 8, _hoisted_10$1)) : createCommentVNode("", true)
            ]),
            props.showDebug && unref(run).runNumber ? (openBlock(), createBlock(_sfc_main$s, {
              key: 0,
              "tab-index": "0",
              disabled: props.debugEnabled,
              placement: "bottom"
            }, {
              popper: withCtx(() => [
                createBaseVNode("div", _hoisted_13, toDisplayString(unref(t)("runs.card.noDebugAvailable")), 1)
              ]),
              default: withCtx(() => [
                createVNode(unref(j), {
                  "data-cy": "open-debug",
                  variant: "outline-light",
                  disabled: !props.debugEnabled,
                  size: "24",
                  "aria-label": unref(t)(props.debugEnabled ? "runs.card.debugDescription" : "runs.card.noDebugAvailable", { runNumber: unref(run).runNumber }),
                  onClick: onDebugClick
                }, {
                  default: withCtx(() => [
                    createVNode(unref(po), {
                      "aria-hidden": "true",
                      class: "h-[16px] w-[16px] mr-2 shrink-0"
                    }),
                    createTextVNode(" " + toDisplayString(unref(t)("runs.card.debugLabel")), 1)
                  ]),
                  _: 1
                }, 8, ["disabled", "aria-label"])
              ]),
              _: 1
            }, 8, ["disabled"])) : createCommentVNode("", true)
          ])
        ], 8, _hoisted_2$4)
      ], 8, _hoisted_1$6);
    };
  }
});
const _hoisted_1$5 = {
  key: 0,
  class: "flex flex-col gap-[24px]"
};
const _hoisted_2$3 = {
  "data-cy": "runsLayout-git",
  class: "flex flex-col gap-[16px] relative before:content-[''] before:absolute before:top-[20px] before:bottom-[10px] before:w-[2px] before:border-2 before:border-dashed before:border-l-0 before:border-y-0 before:border-r-gray-100 before:left-[7px]"
};
const _hoisted_3$2 = ["data-cy"];
const _hoisted_4 = ["title"];
const _hoisted_5 = {
  key: 0,
  "data-cy": "tag-checked-out",
  class: "inline-flex items-center shrink-0 font-medium text-purple-400 align-middle border border-gray-100 rounded border-1 h-[16px] ml-[8px] px-[4px] text-[12px] leading-[16px]"
};
const _hoisted_6 = {
  key: 0,
  class: "relative bg-white border border-gray-100 rounded border-1 overflow-hidden"
};
const _hoisted_7 = {
  key: 1,
  "data-cy": "runsLayout-no-git",
  class: "relative bg-white border border-gray-100 rounded border-1 overflow-hidden"
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "RunsLayout",
  props: {
    runs: null,
    allRunIds: null,
    isUsingGit: { type: Boolean },
    latestRunUrl: null,
    currentCommitInfo: null
  },
  setup(__props) {
    const props = __props;
    const { t } = useI18n();
    const openLatest = useExternalLink(props.latestRunUrl);
    const Dot = () => {
      return h("span", { ariaHidden: "true", class: "px-[8px] text-gray-300" }, "•");
    };
    const LightText = (_props, { slots }) => {
      var _a;
      return h("span", { class: "text-sm text-gray-700" }, (_a = slots == null ? void 0 : slots.default) == null ? void 0 : _a.call(slots));
    };
    const enableDebugging = (runId) => {
      const allRunIds = props.allRunIds;
      if (!allRunIds) {
        return false;
      }
      return allRunIds.some((allRunId) => runId === allRunId);
    };
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
    return (_ctx, _cache) => {
      return __props.isUsingGit ? (openBlock(), createElementBlock("div", _hoisted_1$5, [
        createBaseVNode("ul", _hoisted_2$3, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(Object.keys(unref(groupByCommit)), (sha, index) => {
            var _a;
            return openBlock(), createElementBlock("li", {
              key: sha,
              "data-cy": `commit-${sha}`,
              class: normalizeClass({ "mb-[-24px]": !unref(groupByCommit)[sha].runs })
            }, [
              createBaseVNode("div", {
                class: normalizeClass(["flex items-center my-[10px] [&>*:last-child]:mr-[8px]", { "mt-0": index === 0 }])
              }, [
                createVNode(DebugCommitIcon, {
                  "aria-hidden": "true",
                  class: "h-[16px] w-[16px] relative"
                }),
                createVNode(LightText, { class: "shrink-0 truncate ml-[8px]" }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(sha.slice(0, 7)), 1)
                  ]),
                  _: 2
                }, 1024),
                createVNode(Dot),
                createBaseVNode("span", {
                  class: "text-sm font-medium text-gray-800 truncate",
                  title: unref(groupByCommit)[sha].message,
                  role: "none"
                }, toDisplayString(unref(groupByCommit)[sha].message), 9, _hoisted_4),
                sha === ((_a = __props.currentCommitInfo) == null ? void 0 : _a.sha) ? (openBlock(), createElementBlock("span", _hoisted_5, toDisplayString(unref(t)("runs.layout.checkedOut")), 1)) : createCommentVNode("", true)
              ], 2),
              unref(groupByCommit)[sha].runs ? (openBlock(), createElementBlock("ul", _hoisted_6, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(unref(groupByCommit)[sha].runs, (run) => {
                  return openBlock(), createElementBlock("li", {
                    key: run.id,
                    class: "border-gray-100 [&:not(:last-child)]:border-b w-full block overflow-auto"
                  }, [
                    createVNode(_sfc_main$6, {
                      gql: run,
                      "show-debug": true,
                      "debug-enabled": enableDebugging(run.id)
                    }, null, 8, ["gql", "debug-enabled"])
                  ]);
                }), 128))
              ])) : createCommentVNode("", true)
            ], 10, _hoisted_3$2);
          }), 128))
        ]),
        props.latestRunUrl ? (openBlock(), createBlock(unref(j), {
          key: 0,
          "data-cy": "open-cloud-latest",
          variant: "outline-indigo",
          size: "32",
          class: "self-start",
          onClick: unref(openLatest)
        }, {
          default: withCtx(() => [
            createVNode(unref(co), { class: "h-[16px] w-[16px] mr-[8px]" }),
            createTextVNode(" " + toDisplayString(unref(t)("runs.layout.viewCloudRuns")), 1)
          ]),
          _: 1
        }, 8, ["onClick"])) : createCommentVNode("", true)
      ])) : (openBlock(), createElementBlock("ul", _hoisted_7, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(__props.runs, (run) => {
          return openBlock(), createElementBlock("li", {
            key: run.id,
            class: "border-gray-100 [&:not(:last-child)]:border-b w-full block overflow-auto"
          }, [
            createVNode(_sfc_main$6, { gql: run }, null, 8, ["gql"])
          ]);
        }), 128))
      ]));
    };
  }
});
const _hoisted_1$4 = ["innerHTML"];
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "Warning",
  props: {
    title: null,
    message: null,
    details: { default: void 0 },
    modelValue: { type: Boolean, default: true },
    dismissible: { type: Boolean, default: true },
    retryable: { type: Boolean, default: false }
  },
  emits: ["update:modelValue", "retry"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const { t } = useI18n();
    const { modelValue: show } = useVModels(props, emits);
    const markdownTarget = ref();
    let message = computed(() => {
      if (props.details) {
        return [props.message, `        ${props.details}`].join("\n\n");
      }
      return props.message;
    });
    const { markdown } = useMarkdown(markdownTarget, message.value, { classes: { code: ["bg-warning-200"] } });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$p, {
        modelValue: unref(show),
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => isRef(show) ? show.value = $event : null),
        dismissible: __props.dismissible,
        status: "warning",
        "data-cy": "warning-alert",
        "icon-classes": "icon-dark-orange-400 h-[16px] w-[16px]",
        title: __props.title,
        icon: unref(ErrorOutlineIcon)
      }, {
        default: withCtx(() => [
          createBaseVNode("div", {
            ref_key: "markdownTarget",
            ref: markdownTarget,
            class: "warning-markdown",
            innerHTML: unref(markdown)
          }, null, 8, _hoisted_1$4),
          __props.retryable ? (openBlock(), createBlock(_sfc_main$w, {
            key: 0,
            size: "md",
            "prefix-icon": unref(RefreshIcon),
            "prefix-icon-class": "icon-dark-white",
            onClick: _cache[0] || (_cache[0] = ($event) => emits("retry"))
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(t)("warnings.retry")), 1)
            ]),
            _: 1
          }, 8, ["prefix-icon"])) : createCommentVNode("", true)
        ]),
        _: 1
      }, 8, ["modelValue", "dismissible", "title", "icon"]);
    };
  }
});
const _hoisted_1$3 = {
  style: { "min-width": "48px", "min-height": "48px" },
  width: "48",
  height: "48",
  viewBox: "0 0 48 48",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$2 = /* @__PURE__ */ createStaticVNode('<path fill-rule="evenodd" clip-rule="evenodd" d="M8 8C6.34315 8 5 9.34315 5 11V16H43V11C43 9.34315 41.6569 8 40 8H8Z" fill="#D0D2E0" class="icon-light"></path><path d="M19 30L14 28L9 31V36H38C38.5523 36 39 35.5523 39 35V23L34 24L29 27L24 25L19 30Z" fill="#D0D2E0" class="icon-light"></path><path d="M5 16H4C4 16.5523 4.44772 17 5 17V16ZM43 16V17C43.5523 17 44 16.5523 44 16H43ZM19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13V11ZM39 13C39.5523 13 40 12.5523 40 12C40 11.4477 39.5523 11 39 11V13ZM14 28L14.3714 27.0715C14.0812 26.9555 13.7535 26.9817 13.4855 27.1425L14 28ZM19 30L18.6286 30.9285C19 31.077 19.4242 30.99 19.7071 30.7071L19 30ZM24 25L24.3714 24.0715C24 23.923 23.5758 24.01 23.2929 24.2929L24 25ZM29 27L28.6286 27.9285C28.9188 28.0445 29.2465 28.0183 29.5145 27.8575L29 27ZM9 31L8.4855 30.1425C8.1843 30.3232 8 30.6487 8 31H9ZM34 24L33.8039 23.0194C33.6915 23.0419 33.5838 23.0835 33.4855 23.1425L34 24ZM9 36H8C8 36.5523 8.44772 37 9 37V36ZM8 9H40V7H8V9ZM42 11V37H44V11H42ZM6 37V11H4V37H6ZM5 17H43V15H5V17ZM19 13H39V11H19V13ZM8 39C6.89543 39 6 38.1046 6 37H4C4 39.2091 5.79086 41 8 41V39ZM42 37C42 38.1046 41.1046 39 40 39V41C42.2091 41 44 39.2091 44 37H42ZM40 9C41.1046 9 42 9.89543 42 11H44C44 8.79086 42.2091 7 40 7V9ZM8 7C5.79086 7 4 8.79086 4 11H6C6 9.89543 6.89543 9 8 9V7ZM4 11V16H6V11H4ZM44 16V11H42V16H44ZM38 19H10V21H38V19ZM13.6286 28.9285L18.6286 30.9285L19.3714 29.0715L14.3714 27.0715L13.6286 28.9285ZM19.7071 30.7071L24.7071 25.7071L23.2929 24.2929L18.2929 29.2929L19.7071 30.7071ZM23.6286 25.9285L28.6286 27.9285L29.3714 26.0715L24.3714 24.0715L23.6286 25.9285ZM40 35V23H38V35H40ZM40 23V21H38V23H40ZM40 39H24V41H40V39ZM24 39H16V41H24V39ZM16 39H8V41H16V39ZM9.5145 31.8575L14.5145 28.8575L13.4855 27.1425L8.4855 30.1425L9.5145 31.8575ZM29.5145 27.8575L34.5145 24.8575L33.4855 23.1425L28.4855 26.1425L29.5145 27.8575ZM34.1961 24.9806L39.1961 23.9806L38.8039 22.0194L33.8039 23.0194L34.1961 24.9806ZM38 35H9V37H38V35ZM10 36V21H8V36H10ZM8 31V36H10V31H8ZM38 21H40C40 19.8954 39.1046 19 38 19V21ZM38 35V37C39.1046 37 40 36.1046 40 35H38ZM10 19C8.89543 19 8 19.8954 8 21H10H10V19Z" fill="#1B1E2E" class="icon-dark"></path><path d="M10 12C10 12.5523 9.55228 13 9 13C8.44772 13 8 12.5523 8 12C8 11.4477 8.44772 11 9 11C9.55228 11 10 11.4477 10 12Z" fill="#1B1E2E" class="icon-dark"></path><path d="M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12Z" fill="#1B1E2E" class="icon-dark"></path><path d="M16 12C16 12.5523 15.5523 13 15 13C14.4477 13 14 12.5523 14 12C14 11.4477 14.4477 11 15 11C15.5523 11 16 11.4477 16 12Z" fill="#1B1E2E" class="icon-dark"></path><path d="M35.2426 41.2426C32.8995 43.5858 29.1005 43.5858 26.7574 41.2426C24.4142 38.8995 24.4142 35.1005 26.7574 32.7574C29.1005 30.4142 32.8995 30.4142 35.2426 32.7574C37.5858 35.1005 37.5858 38.8995 35.2426 41.2426Z" fill="#F8C4CD" class="icon-light-secondary"></path><path d="M32.5 35.5L29.5 38.5M32.5 38.5L29.5 35.5M35.2426 41.2426C32.8995 43.5858 29.1005 43.5858 26.7574 41.2426C24.4142 38.8995 24.4142 35.1005 26.7574 32.7574C29.1005 30.4142 32.8995 30.4142 35.2426 32.7574C37.5858 35.1005 37.5858 38.8995 35.2426 41.2426Z" stroke="#C62B49" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon-dark-secondary"></path>', 8);
const _hoisted_10 = [
  _hoisted_2$2
];
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3, _hoisted_10);
}
const __unplugin_components_1 = { name: "cy-dashboard-fail_x48", render };
const _hoisted_1$2 = { class: "flex flex-col h-full text-center justify-center items-center" };
const _hoisted_2$1 = { class: "mt-[24px] mb-[4px] text-gray-900 text-[18px] leading-[24px] w-[640px]" };
const _hoisted_3$1 = { class: "mb-[24px] text-gray-600 text-[16px] leading-[24px] w-[672px]" };
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "RunsError",
  props: {
    icon: null,
    message: null,
    buttonText: null,
    buttonIcon: null,
    buttonDisabled: { type: Boolean }
  },
  emits: ["button-click"],
  setup(__props, { emit }) {
    return (_ctx, _cache) => {
      const _component_i_cy_locked_project_x48 = LockedProject;
      const _component_i_cy_dashboard_fail_x48 = __unplugin_components_1;
      return openBlock(), createElementBlock("div", _hoisted_1$2, [
        __props.icon === "access" ? (openBlock(), createBlock(_component_i_cy_locked_project_x48, {
          key: 0,
          class: "h-[48px] w-[48px] icon-dark-gray-500 icon-light-gray-100 icon-dark-secondary-jade-400 icon-light-secondary-jade-200"
        })) : createCommentVNode("", true),
        __props.icon === "error" ? (openBlock(), createBlock(_component_i_cy_dashboard_fail_x48, {
          key: 1,
          class: "h-[48px] w-[48px] icon-dark-gray-500 icon-light-gray-100 icon-dark-secondary-red-500 icon-light-secondary-red-300"
        })) : createCommentVNode("", true),
        createBaseVNode("h2", _hoisted_2$1, toDisplayString(__props.message), 1),
        createBaseVNode("p", _hoisted_3$1, [
          renderSlot(_ctx.$slots, "default")
        ]),
        createVNode(_sfc_main$w, {
          "prefix-icon": __props.buttonIcon,
          "prefix-icon-class": "icon-dark-white icon-light-transparent",
          disabled: __props.buttonDisabled,
          onClick: _cache[0] || (_cache[0] = ($event) => emit("button-click"))
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(__props.buttonText), 1)
          ]),
          _: 1
        }, 8, ["prefix-icon", "disabled"])
      ]);
    };
  }
});
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "RunsErrorRenderer",
  props: {
    gql: null
  },
  emits: ["reExecuteRunsQuery"],
  setup(__props, { emit }) {
    const props = __props;
    const { openLoginConnectModal } = useUserProjectStatusStore();
    const { t } = useI18n();
    gql`
fragment RunsErrorRenderer on Query {
  currentProject {  
    id
    projectId
    cloudProject {
      __typename
      ... on CloudProjectNotFound {
        message
      }
      ... on CloudProjectUnauthorized {
        message
        hasRequestedAccess
      }
    }
  }
}
`;
    const currentProject = computed(() => props.gql.currentProject);
    gql`
mutation RunsErrorRenderer_RequestAccess( $projectId: String! ) {
  cloudProjectRequestAccess(projectSlug: $projectId) {
    __typename
    ... on CloudProjectUnauthorized {
      message
      hasRequestedAccess
    }
  }
}
`;
    const hasRequestedAccess = ref(false);
    onMounted(() => {
      var _a, _b;
      if (((_b = (_a = props.gql.currentProject) == null ? void 0 : _a.cloudProject) == null ? void 0 : _b.__typename) === "CloudProjectUnauthorized") {
        hasRequestedAccess.value = props.gql.currentProject.cloudProject.hasRequestedAccess ?? false;
      }
    });
    const requestAccessMutation = useMutation(RunsErrorRenderer_RequestAccessDocument);
    async function requestAccess() {
      var _a, _b, _c;
      const projectId = (_a = props.gql.currentProject) == null ? void 0 : _a.projectId;
      if (projectId) {
        const result = await requestAccessMutation.executeMutation({ projectId });
        if (((_c = (_b = result.data) == null ? void 0 : _b.cloudProjectRequestAccess) == null ? void 0 : _c.__typename) === "CloudProjectUnauthorized") {
          hasRequestedAccess.value = result.data.cloudProjectRequestAccess.hasRequestedAccess ?? false;
        } else {
          hasRequestedAccess.value = false;
        }
      }
    }
    return (_ctx, _cache) => {
      var _a, _b, _c, _d, _e;
      const _component_i18n_t = resolveComponent("i18n-t");
      return !((_a = unref(currentProject)) == null ? void 0 : _a.cloudProject) ? (openBlock(), createBlock(_sfc_main$3, {
        key: 0,
        icon: "error",
        "button-text": unref(t)("runs.errors.connectionFailed.button"),
        "button-icon": unref(ConnectIcon),
        message: unref(t)("runs.errors.connectionFailed.title"),
        onButtonClick: _cache[0] || (_cache[0] = ($event) => emit("reExecuteRunsQuery"))
      }, {
        default: withCtx(() => [
          createVNode(_component_i18n_t, {
            scope: "global",
            keypath: "runs.errors.connectionFailed.description"
          }, {
            default: withCtx(() => [
              createVNode(_sfc_main$q, { href: "https://www.cypressstatus.com/" }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(t)("runs.errors.connectionFailed.link")), 1)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["button-text", "button-icon", "message"])) : ((_c = (_b = unref(currentProject)) == null ? void 0 : _b.cloudProject) == null ? void 0 : _c.__typename) === "CloudProjectNotFound" ? (openBlock(), createBlock(_sfc_main$3, {
        key: 1,
        icon: "error",
        "button-text": unref(t)("runs.errors.notFound.button"),
        "button-icon": unref(ConnectIcon),
        message: unref(t)("runs.errors.notFound.title"),
        onButtonClick: _cache[1] || (_cache[1] = ($event) => unref(openLoginConnectModal)({ utmMedium: "Runs Tab" }))
      }, {
        default: withCtx(() => [
          createVNode(_component_i18n_t, {
            scope: "global",
            keypath: "runs.errors.notFound.description"
          }, {
            default: withCtx(() => [
              createVNode(_sfc_main$x, {
                bg: "",
                class: "bg-purple-50 text-purple-500"
              }, {
                default: withCtx(() => {
                  var _a2;
                  return [
                    createTextVNode(' projectId: "' + toDisplayString((_a2 = unref(currentProject)) == null ? void 0 : _a2.projectId) + '" ', 1)
                  ];
                }),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["button-text", "button-icon", "message"])) : ((_e = (_d = unref(currentProject)) == null ? void 0 : _d.cloudProject) == null ? void 0 : _e.__typename) === "CloudProjectUnauthorized" ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [
        hasRequestedAccess.value ? (openBlock(), createBlock(_sfc_main$3, {
          key: 0,
          icon: "access",
          "button-text": unref(t)("runs.errors.unauthorizedRequested.button"),
          "button-icon": unref(SendIcon),
          message: unref(t)("runs.errors.unauthorizedRequested.title"),
          "button-disabled": ""
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(unref(t)("runs.errors.unauthorizedRequested.description")), 1)
          ]),
          _: 1
        }, 8, ["button-text", "button-icon", "message"])) : (openBlock(), createBlock(_sfc_main$3, {
          key: 1,
          icon: "access",
          "button-text": unref(t)("runs.errors.unauthorized.button"),
          "button-icon": unref(SendIcon),
          message: unref(t)("runs.errors.unauthorized.title"),
          onButtonClick: requestAccess
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(unref(t)("runs.errors.unauthorized.description")), 1)
          ]),
          _: 1
        }, 8, ["button-text", "button-icon", "message"]))
      ], 64)) : createCommentVNode("", true);
    };
  }
});
const _hoisted_1$1 = { class: "h-full" };
const _hoisted_2 = {
  key: 5,
  "data-cy": "runs",
  class: "flex flex-col pb-[24px] gap-[16px]"
};
const _hoisted_3 = ["innerHTML"];
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "RunsContainer",
  props: {
    gql: null,
    runs: null,
    online: { type: Boolean },
    allRunIds: null,
    currentCommitInfo: null
  },
  emits: ["reExecuteRunsQuery"],
  setup(__props, { emit }) {
    const props = __props;
    const { t } = useI18n();
    const markdownTarget = ref();
    const { ACI_052023_GIT_NOT_DETECTED, ACI_052023_NO_RUNS_FOUND_FOR_BRANCH } = BannerIds;
    const currentProject = computed(() => props.gql.currentProject);
    const showConnectSuccessAlert = ref(false);
    const connectionFailed = computed(() => {
      var _a;
      return !((_a = props.gql.currentProject) == null ? void 0 : _a.cloudProject) && props.online;
    });
    const latestRunUrl = computed(() => {
      var _a, _b, _c, _d;
      if (((_b = (_a = props.gql.currentProject) == null ? void 0 : _a.cloudProject) == null ? void 0 : _b.__typename) !== "CloudProject") {
        return "#";
      }
      return getUrlWithParams({
        url: (_d = (_c = props.gql.currentProject) == null ? void 0 : _c.cloudProject) == null ? void 0 : _d.cloudProjectUrl,
        params: {
          utm_source: getUtmSource(),
          utm_medium: RUNS_TAB_MEDIUM,
          utm_campaign: "View runs in Cypress Cloud"
        }
      });
    });
    const noRunsForBranchMessage = computed(() => {
      const learnMoreLink = getUrlWithParams({
        url: "https://on.cypress.io/git-info",
        params: {
          utm_source: getUtmSource(),
          utm_medium: RUNS_TAB_MEDIUM,
          utm_campaign: "No Runs Found"
        }
      });
      const message = t("runs.empty.noRunsForBranchMessage");
      const link = `[${t("links.learnMoreButton")}](${learnMoreLink})`;
      return `${message} ${link}`;
    });
    const { markdown } = useMarkdown(markdownTarget, noRunsForBranchMessage.value, { classes: { code: ["bg-warning-200"] } });
    const userProjectStatusStore = useUserProjectStatusStore();
    watch(() => userProjectStatusStore.project.isProjectConnected, (newVal, oldVal) => {
      if (newVal && oldVal === false) {
        showConnectSuccessAlert.value = true;
      } else {
        showConnectSuccessAlert.value = false;
      }
    });
    return (_ctx, _cache) => {
      var _a, _b, _c, _d, _e, _f, _g;
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        !__props.online ? (openBlock(), createBlock(_sfc_main$y, { key: 0 }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(unref(t)("launchpadErrors.noInternet.connectProject")), 1)
          ]),
          _: 1
        })) : createCommentVNode("", true),
        unref(currentProject) && showConnectSuccessAlert.value ? (openBlock(), createBlock(_sfc_main$c, {
          key: 1,
          gql: unref(currentProject),
          class: normalizeClass({ "absolute left-[24px] right-[24px] top-[24px]": ((_b = (_a = unref(currentProject)) == null ? void 0 : _a.cloudProject) == null ? void 0 : _b.__typename) === "CloudProject" && !((_c = __props.runs) == null ? void 0 : _c.length) })
        }, null, 8, ["gql", "class"])) : createCommentVNode("", true),
        !unref(userProjectStatusStore).user.isLoggedIn || !((_d = unref(currentProject)) == null ? void 0 : _d.projectId) ? (openBlock(), createBlock(_sfc_main$d, {
          key: 2,
          campaign: !unref(userProjectStatusStore).user.isLoggedIn ? unref(RUNS_PROMO_CAMPAIGNS).login : unref(RUNS_PROMO_CAMPAIGNS).connectProject
        }, null, 8, ["campaign"])) : ((_f = (_e = unref(currentProject)) == null ? void 0 : _e.cloudProject) == null ? void 0 : _f.__typename) !== "CloudProject" || unref(connectionFailed) ? (openBlock(), createBlock(_sfc_main$2, {
          key: 3,
          gql: props.gql,
          onReExecuteRunsQuery: _cache[0] || (_cache[0] = ($event) => emit("reExecuteRunsQuery"))
        }, null, 8, ["gql"])) : !((_g = __props.runs) == null ? void 0 : _g.length) ? (openBlock(), createBlock(_sfc_main$9, { key: 4 })) : (openBlock(), createElementBlock("div", _hoisted_2, [
          unref(userProjectStatusStore).cloudStatusMatches("needsRecordedRun") && unref(userProjectStatusStore).project.isUsingGit ? (openBlock(), createBlock(_sfc_main$z, {
            key: 0,
            title: unref(t)("runs.empty.noRunsFoundForBranch"),
            "banner-id": unref(ACI_052023_NO_RUNS_FOUND_FOR_BRANCH),
            dismissible: "",
            status: "warning",
            "has-banner-been-shown": false,
            "event-data": void 0
          }, {
            default: withCtx(() => [
              createBaseVNode("div", {
                ref_key: "markdownTarget",
                ref: markdownTarget,
                class: "warning-markdown",
                innerHTML: unref(markdown)
              }, null, 8, _hoisted_3)
            ]),
            _: 1
          }, 8, ["title", "banner-id"])) : createCommentVNode("", true),
          !__props.online ? (openBlock(), createBlock(_sfc_main$4, {
            key: 1,
            title: unref(t)("launchpadErrors.noInternet.header"),
            message: unref(t)("launchpadErrors.noInternet.message"),
            dismissible: false,
            class: "mx-auto mb-[24px]"
          }, null, 8, ["title", "message"])) : createCommentVNode("", true),
          !unref(userProjectStatusStore).project.isUsingGit ? (openBlock(), createBlock(_sfc_main$z, {
            key: 2,
            title: unref(t)("runs.empty.gitRepositoryNotDetected"),
            "banner-id": unref(ACI_052023_GIT_NOT_DETECTED),
            "has-banner-been-shown": false,
            status: "warning",
            dismissible: "",
            "event-data": void 0
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(t)("runs.empty.ensureGitSetupCorrectly")), 1)
            ]),
            _: 1
          }, 8, ["title", "banner-id"])) : createCommentVNode("", true),
          createVNode(_sfc_main$5, {
            runs: __props.runs,
            "all-run-ids": __props.allRunIds,
            "is-using-git": unref(userProjectStatusStore).project.isUsingGit,
            "latest-run-url": unref(latestRunUrl),
            "current-commit-info": props.currentCommitInfo
          }, null, 8, ["runs", "all-run-ids", "is-using-git", "latest-run-url", "current-commit-info"])
        ]))
      ]);
    };
  }
});
const RunsContainer = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-e98baa47"]]);
gql`
query Runs {
  ...RunsContainer
}`;
gql`
fragment RunsContainer_RunsConnection on CloudRunConnection {
  nodes {
    id
    ...RunCard
  }
  pageInfo {
    startCursor
  }
}
`;
gql`
fragment RunsContainer on Query {
  ...RunsErrorRenderer
  currentProject {
    id
    projectId
    ...RunsConnectSuccessAlert
    cloudProject {
      __typename
      ... on CloudProject {
        id
        cloudProjectUrl
        runs(first: 10) {
          ...RunsContainer_RunsConnection
        }
      }
    }
  }
}`;
gql`
mutation RunsContainer_FetchNewerRuns(
  $cloudProjectNodeId: ID!, 
  $beforeCursor: String, 
  $hasBeforeCursor: Boolean!,
) {
  refetchRemote {
    cloudNode(id: $cloudProjectNodeId) {
      id
      __typename
      ... on CloudProject {
        runs(first: 10) @skip(if: $hasBeforeCursor) {
          ...RunsContainer_RunsConnection
        }
        newerRuns: runs(last: 10, before: $beforeCursor) @include(if: $hasBeforeCursor) {
          ...RunsContainer_RunsConnection
        }
      }
    }
  }
}
`;
const useProjectRuns = (online) => {
  const query = useQuery({ query: RunsDocument, requestPolicy: "network-only" });
  const currentProject = computed(() => {
    var _a;
    return (_a = query.data.value) == null ? void 0 : _a.currentProject;
  });
  const runs = computed(() => {
    var _a, _b, _c, _d, _e, _f, _g;
    return ((_c = (_b = (_a = query.data.value) == null ? void 0 : _a.currentProject) == null ? void 0 : _b.cloudProject) == null ? void 0 : _c.__typename) === "CloudProject" ? (_g = (_f = (_e = (_d = query.data.value) == null ? void 0 : _d.currentProject) == null ? void 0 : _e.cloudProject) == null ? void 0 : _f.runs) == null ? void 0 : _g.nodes : [];
  });
  const variables = computed(() => {
    var _a, _b, _c, _d, _e, _f, _g;
    if (((_b = (_a = currentProject.value) == null ? void 0 : _a.cloudProject) == null ? void 0 : _b.__typename) === "CloudProject") {
      return {
        cloudProjectNodeId: (_c = currentProject.value) == null ? void 0 : _c.cloudProject.id,
        beforeCursor: (_e = (_d = currentProject.value) == null ? void 0 : _d.cloudProject.runs) == null ? void 0 : _e.pageInfo.startCursor,
        hasBeforeCursor: Boolean((_g = (_f = currentProject.value) == null ? void 0 : _f.cloudProject.runs) == null ? void 0 : _g.pageInfo.startCursor)
      };
    }
    return void 0;
  });
  const refetcher = useMutation(RunsContainer_FetchNewerRunsDocument);
  const POLL_FOR_LATEST = 1e3 * 15;
  let timeout = null;
  function startPolling() {
    timeout = window.setTimeout(function fetchNewerRuns() {
      if (variables.value && online.value) {
        refetcher.executeMutation(variables.value).then(() => {
          startPolling();
        });
      } else {
        startPolling();
      }
    }, POLL_FOR_LATEST);
  }
  onMounted(() => {
    if (online.value && !refetcher.fetching) {
      refetcher.executeMutation(variables.value);
    }
    startPolling();
  });
  onUnmounted(() => {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = null;
  });
  function reExecuteRunsQuery() {
    query.executeQuery();
  }
  return {
    runs,
    reExecuteRunsQuery,
    query
  };
};
gql`
  query RunsGitTree($runIds: [ID!]!) {
    ...RunsGitTreeProject
  }
`;
gql`
fragment RunsGitTreeProject on Query {
  ...RunsErrorRenderer
  currentProject {
    id
    projectId
    ...RunsConnectSuccessAlert
    cloudProject {
      __typename
      ... on CloudProject {
        id
        cloudProjectUrl
      }
    }
  }
  cloudNodesByIds(ids: $runIds) {
    id
    ...RunCard
  }
}
`;
const useGitTreeRuns = (online) => {
  const relevantRuns = useRelevantRun("RUNS");
  const variables = computed(() => {
    var _a;
    return {
      runIds: ((_a = relevantRuns == null ? void 0 : relevantRuns.value.latest) == null ? void 0 : _a.map((run) => run.runId)) || []
    };
  });
  const shouldPauseQuery = computed(() => {
    return !variables.value.runIds;
  });
  const query = useQuery({ query: RunsGitTreeDocument, variables, pause: shouldPauseQuery, requestPolicy: "network-only" });
  const runs = computed(() => {
    var _a, _b;
    const nodes = (_b = (_a = query.data.value) == null ? void 0 : _a.cloudNodesByIds) == null ? void 0 : _b.filter((val) => (val == null ? void 0 : val.__typename) === "CloudRun");
    return nodes;
  });
  const allRunIds = computed(() => {
    var _a;
    return ((_a = relevantRuns == null ? void 0 : relevantRuns.value.all) == null ? void 0 : _a.map((run) => run.runId)) || [];
  });
  const currentCommitInfo = computed(() => {
    return relevantRuns == null ? void 0 : relevantRuns.value.currentCommitInfo;
  });
  function reExecuteRunsQuery() {
    query.executeQuery();
  }
  return {
    runs,
    reExecuteRunsQuery,
    query,
    allRunIds,
    currentCommitInfo
  };
};
const _hoisted_1 = { class: "h-full p-[24px] relative" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Runs",
  setup(__props) {
    const isOnlineRef = ref(true);
    const online = useOnline();
    const isUsingGit = useUserProjectStatusStore().project.isUsingGit;
    let runComposable;
    if (isUsingGit) {
      runComposable = useGitTreeRuns;
    } else {
      runComposable = useProjectRuns;
    }
    const { runs, reExecuteRunsQuery, query, allRunIds, currentCommitInfo } = runComposable(isOnlineRef);
    watchEffect(() => {
      if (!online.value && isOnlineRef.value) {
        isOnlineRef.value = false;
      }
      if (online.value && !isOnlineRef.value) {
        isOnlineRef.value = true;
        reExecuteRunsQuery();
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(TransitionQuickFade, { mode: "out-in" }, {
          default: withCtx(() => [
            unref(query).fetching.value || !unref(query).data.value ? (openBlock(), createBlock(_sfc_main$i, {
              key: 0,
              "is-using-git": unref(isUsingGit)
            }, null, 8, ["is-using-git"])) : (openBlock(), createBlock(RunsContainer, {
              key: 1,
              gql: unref(query).data.value,
              runs: unref(runs),
              online: isOnlineRef.value,
              "data-cy": "runs-container",
              "all-run-ids": unref(allRunIds),
              "current-commit-info": unref(currentCommitInfo),
              onReExecuteRunsQuery: unref(reExecuteRunsQuery)
            }, null, 8, ["gql", "runs", "online", "all-run-ids", "current-commit-info", "onReExecuteRunsQuery"]))
          ]),
          _: 1
        })
      ]);
    };
  }
});
export {
  _sfc_main as default
};
