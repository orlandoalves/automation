import { o as openBlock, i as createElementBlock, a as createBaseVNode, d as defineComponent, t as toDisplayString } from "./index-BVZ6TAOi.js";
const _hoisted_1$2 = {
  style: { "min-width": "14px", "min-height": "14px" },
  width: "14",
  height: "8",
  viewBox: "0 0 14 8",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$2 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M10 4C10 5.65685 8.65685 7 7 7C5.34315 7 4 5.65685 4 4C4 2.34315 5.34315 1 7 1C8.65685 1 10 2.34315 10 4Z",
  fill: "#E1E3ED"
}, null, -1);
const _hoisted_3$2 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M10 4C10 5.65685 8.65685 7 7 7C5.34315 7 4 5.65685 4 4M10 4C10 2.34315 8.65685 1 7 1C5.34315 1 4 2.34315 4 4M10 4H13M4 4H1",
  stroke: "#9095AD",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1);
const _hoisted_4 = [
  _hoisted_2$2,
  _hoisted_3$2
];
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2, _hoisted_4);
}
const CommitIcon = { name: "cy-commit_x14", render: render$1 };
const _hoisted_1$1 = {
  style: { "min-width": "4px", "min-height": "4px" },
  width: "4",
  height: "4",
  viewBox: "0 0 4 4",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$1 = /* @__PURE__ */ createBaseVNode("circle", {
  cx: "2",
  cy: "2",
  r: "2",
  fill: "#1FA971",
  class: "icon-light"
}, null, -1);
const _hoisted_3$1 = [
  _hoisted_2$1
];
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, _hoisted_3$1);
}
const __unplugin_components_0 = { name: "cy-dot-solid_x4", render };
const _hoisted_1 = ["title"];
const _hoisted_2 = { class: "font-semibold text-gray-800" };
const _hoisted_3 = { class: "text-gray-600" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SpecNameDisplay",
  props: {
    specFileName: null,
    specFileExtension: null
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "max-w-[15rem] truncate overflow-hidden",
        "data-cy": "spec-filename",
        title: __props.specFileName + __props.specFileExtension
      }, [
        createBaseVNode("span", _hoisted_2, toDisplayString(__props.specFileName), 1),
        createBaseVNode("span", _hoisted_3, toDisplayString(__props.specFileExtension), 1)
      ], 8, _hoisted_1);
    };
  }
});
export {
  CommitIcon as C,
  _sfc_main as _,
  __unplugin_components_0 as a
};
