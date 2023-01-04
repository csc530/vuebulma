import { _ as _export_sfc, N as resolveComponent, p as openBlock, q as createElementBlock, S as createBaseVNode, v as createTextVNode, O as createVNode, W as withCtx } from "./framework-58335e88.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "bulmacolouredicon",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#bulmacolouredicon",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" BulmaColouredIcon")
], -1);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("p", null, "Represents an icon class with a colour", -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("strong", null, "object")
], -1);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "properties",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#properties",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" Properties")
], -1);
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("code", null, "icon", -1);
const _hoisted_6 = {
  href: "https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("code", null, "string", -1);
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("ul", null, [
  /* @__PURE__ */ createBaseVNode("li", null, "The icon class")
], -1);
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("code", null, "colour", -1);
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("code", null, "BulmaColourHelper", -1);
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("code", null, "BulmaColour", -1);
const _hoisted_12 = {
  href: "https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/undefined",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("code", null, "undefined", -1);
const _hoisted_14 = /* @__PURE__ */ createBaseVNode("ul", null, [
  /* @__PURE__ */ createBaseVNode("li", null, "The colour of the icon")
], -1);
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  const _component_RouterLink = resolveComponent("RouterLink");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    _hoisted_2,
    _hoisted_3,
    _hoisted_4,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        _hoisted_5,
        createTextVNode(": "),
        createBaseVNode("a", _hoisted_6, [
          _hoisted_7,
          createVNode(_component_ExternalLinkIcon)
        ]),
        _hoisted_8
      ]),
      createBaseVNode("li", null, [
        _hoisted_9,
        createTextVNode(),
        createVNode(_component_RouterLink, { to: "/types/common_types.html#bulmacolourhelper" }, {
          default: withCtx(() => [
            _hoisted_10
          ]),
          _: 1
        }),
        createTextVNode(" | "),
        createVNode(_component_RouterLink, { to: "/types/common_types.html#bulmacolour" }, {
          default: withCtx(() => [
            _hoisted_11
          ]),
          _: 1
        }),
        createTextVNode(" | "),
        createBaseVNode("a", _hoisted_12, [
          _hoisted_13,
          createVNode(_component_ExternalLinkIcon)
        ]),
        _hoisted_14
      ])
    ])
  ]);
}
const BulmaColouredIcon_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "BulmaColouredIcon.html.vue"]]);
export {
  BulmaColouredIcon_html as default
};
