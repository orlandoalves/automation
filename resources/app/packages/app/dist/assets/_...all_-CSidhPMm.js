import { d as defineComponent, l as computed, aC as lodashExports, x as useRouter, r as resolveComponent, o as openBlock, i as createElementBlock, a as createBaseVNode, F as Fragment, B as renderList, f as createVNode, w as withCtx, V as createTextVNode, t as toDisplayString, b as unref } from "./index-BVZ6TAOi.js";
import { b as block0 } from "./route-block-mFfs_uHM.js";
const _hoisted_1 = { class: "rounded-md mx-auto border mt-20 text-center p-[20px] w-[400px]" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("h1", { class: "text-2xl" }, " You seem to have gotten lost... ", -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("p", { class: "text-gray-600" }, " Try one of these links instead ", -1);
const _hoisted_4 = { class: "space-y-2 mt-[40px]" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[...all]",
  setup(__props) {
    const routes = computed(() => {
      return lodashExports.uniqBy(useRouter().getRoutes(), "path").filter((r) => {
        var _a, _b;
        return ((_a = r.meta) == null ? void 0 : _a.layout) !== "error" && !((_b = r.meta) == null ? void 0 : _b.error);
      });
    });
    return (_ctx, _cache) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        _hoisted_2,
        _hoisted_3,
        createBaseVNode("nav", _hoisted_4, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(routes), (route) => {
            return openBlock(), createElementBlock("li", {
              key: route.path,
              class: "text-left text-indigo-700 underline decoration-2 underline-offset-1 decoration-indigo-700 hover:text-indigo-500 hover:decoration-indigo-500"
            }, [
              createVNode(_component_RouterLink, {
                to: route.path
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(route.name), 1)
                ]),
                _: 2
              }, 1032, ["to"])
            ]);
          }), 128))
        ])
      ]);
    };
  }
});
if (typeof block0 === "function")
  block0(_sfc_main);
export {
  _sfc_main as default
};
