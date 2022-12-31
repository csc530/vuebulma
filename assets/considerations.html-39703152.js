import { _ as _export_sfc, N as resolveComponent, p as openBlock, q as createElementBlock, S as createBaseVNode, v as createTextVNode, O as createVNode } from "./framework-58335e88.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "hmmmm",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#hmmmm",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" hmmmm...?")
], -1);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("code", null, "is-expanded", -1);
const _hoisted_3 = {
  href: "https://bulma.io/documentation/components/navbar/#navbar-menu",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("li", null, [
  /* @__PURE__ */ createTextVNode("Add input/textarea/etc. props like placeholder/disabled/etc. to the bulma props "),
  /* @__PURE__ */ createBaseVNode("ul", null, [
    /* @__PURE__ */ createBaseVNode("li", null, "Or add disclaimer/info in the documentation that the input props are hoisted/bound to the input element")
  ])
], -1);
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createTextVNode("should I add auto "),
        _hoisted_2,
        createTextVNode(" classes to single item navbar "),
        createBaseVNode("a", _hoisted_3, [
          createTextVNode("sections"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode(" or leave it up to the user to add it themselves?")
      ]),
      _hoisted_4
    ])
  ]);
}
const considerations_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "considerations.html.vue"]]);
export {
  considerations_html as default
};
