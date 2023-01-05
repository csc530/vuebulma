import { _ as _export_sfc, N as resolveComponent, p as openBlock, q as createElementBlock, S as createBaseVNode, v as createTextVNode, O as createVNode } from "./framework-da6c0ff9.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "h1",
  {
    id: "common-attributes",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#common-attributes",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Common attributes")
  ],
  -1
  /* HOISTED */
);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "script setup",
  -1
  /* HOISTED */
);
const _hoisted_3 = {
  href: "https://vuejs.org/api/sfc-script-setup.html#defineexpose",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_4 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "The following attributes are common to all components:",
  -1
  /* HOISTED */
);
const _hoisted_5 = /* @__PURE__ */ createBaseVNode(
  "h2",
  {
    id: "slots",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#slots",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Slots")
  ],
  -1
  /* HOISTED */
);
const _hoisted_6 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("When a component has a slot any related item will be bound to "),
    /* @__PURE__ */ createBaseVNode("code", null, "data"),
    /* @__PURE__ */ createTextVNode(" on the slot.")
  ],
  -1
  /* HOISTED */
);
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createBaseVNode("p", null, [
      createTextVNode("As of right now all components are built using the composition API using the "),
      _hoisted_2,
      createTextVNode(" syntax with TypeScript. Because of this, component props and data are all private and cannot be "),
      createBaseVNode("a", _hoisted_3, [
        createTextVNode("accessed from component"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(" ref.")
    ]),
    _hoisted_4,
    _hoisted_5,
    _hoisted_6
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
export {
  index_html as default
};
