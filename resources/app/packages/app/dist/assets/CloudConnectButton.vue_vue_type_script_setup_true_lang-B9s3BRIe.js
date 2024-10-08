import { d as defineComponent, aE as useUserProjectStatusStore, g as useI18n, o as openBlock, c as createBlock, w as withCtx, V as createTextVNode, t as toDisplayString, b as unref, n as normalizeClass, aF as ConnectIcon, Y as _sfc_main$1 } from "./index-BVZ6TAOi.js";
import { _ as __unplugin_components_0 } from "./cypress-logo_x16-reWlL6cm.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CloudConnectButton",
  props: {
    class: null,
    utmMedium: null,
    utmContent: null
  },
  setup(__props) {
    const props = __props;
    const { openLoginConnectModal, user } = useUserProjectStatusStore();
    const { t } = useI18n();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$1, {
        class: normalizeClass(props.class),
        "prefix-icon": unref(user).isLoggedIn ? unref(ConnectIcon) : unref(__unplugin_components_0),
        "prefix-icon-class": "icon-dark-white icon-light-transparent",
        onClick: _cache[0] || (_cache[0] = ($event) => unref(openLoginConnectModal)({ utmMedium: __props.utmMedium, utmContent: __props.utmContent }))
      }, {
        default: withCtx(() => [
          createTextVNode(toDisplayString(unref(user).isLoggedIn ? unref(t)("runs.connect.buttonProject") : unref(t)("runs.connect.buttonUser")), 1)
        ]),
        _: 1
      }, 8, ["class", "prefix-icon"]);
    };
  }
});
export {
  _sfc_main as _
};
