import { _ as _export_sfc, N as resolveComponent, p as openBlock, q as createElementBlock, S as createBaseVNode, v as createTextVNode, O as createVNode, W as withCtx, a2 as createStaticVNode } from "./framework-58335e88.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "bulmabuttons",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#bulmabuttons",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" BulmaButton"),
  /* @__PURE__ */ createBaseVNode("strong", null, "s")
], -1);
const _hoisted_2 = {
  href: "https://bulma.io/documentation/elements/button/#list-of-buttons",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("a", { href: "../../src/components/button/BulmaButtons.vue" }, "Source code", -1);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "slots",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#slots",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" Slots")
], -1);
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "default",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#default",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" default")
], -1);
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("code", null, "BulmaButton", -1);
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "props",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#props",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" Props")
], -1);
const _hoisted_8 = {
  id: "tag",
  tabindex: "-1"
};
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("a", {
  class: "header-anchor",
  href: "#tag",
  "aria-hidden": "true"
}, "#", -1);
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("Type: "),
  /* @__PURE__ */ createBaseVNode("code", null, "string"),
  /* @__PURE__ */ createTextVNode(" | "),
  /* @__PURE__ */ createBaseVNode("code", null, "undefined")
], -1);
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("Default: "),
  /* @__PURE__ */ createBaseVNode("code", null, "div")
], -1);
const _hoisted_12 = {
  id: "size",
  tabindex: "-1"
};
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("a", {
  class: "header-anchor",
  href: "#size",
  "aria-hidden": "true"
}, "#", -1);
const _hoisted_14 = /* @__PURE__ */ createBaseVNode("code", null, "BulmaSizes", -1);
const _hoisted_15 = /* @__PURE__ */ createBaseVNode("code", null, "undefined", -1);
const _hoisted_16 = /* @__PURE__ */ createStaticVNode('<p>Size of all enclosed buttons</p><h3 id="hasaddons" tabindex="-1"><a class="header-anchor" href="#hasaddons" aria-hidden="true">#</a> hasAddons</h3><p>Type: <code>boolean</code> | <code>undefined</code></p><p>When <code>true</code>, the buttons will be addon. The buttons will be placed next to one another with no spacing in between and appear as a single, joined button element.</p><h3 id="alignment" tabindex="-1"><a class="header-anchor" href="#alignment" aria-hidden="true">#</a> alignment</h3>', 5);
const _hoisted_21 = /* @__PURE__ */ createBaseVNode("code", null, "undefined", -1);
const _hoisted_22 = /* @__PURE__ */ createStaticVNode('<p>The alignment of the buttons.</p><h3 id="activateonclick" tabindex="-1"><a class="header-anchor" href="#activateonclick" aria-hidden="true">#</a> activateOnClick</h3><p><em>Reqires button children to rendered with <a href="#items">items</a> prop not passed in with <a href="#slots">slot</a></em> Type: <code>boolean</code> | `singly&#39;</p><p>When <code>true</code>, the buttons will be activated (adding <code>is-active</code> class to button) when clicked. When <code>singly</code>, only one button can be active at a time.</p><h3 id="items" tabindex="-1"><a class="header-anchor" href="#items" aria-hidden="true">#</a> items</h3><p>Type: <code>string[]</code> | <code>BulmaButton[]</code></p><p>The items to be rendered as buttons.</p>', 7);
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  const _component_RouterLink = resolveComponent("RouterLink");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_2, [
        createTextVNode("Bulma documentation"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      _hoisted_3
    ]),
    createBaseVNode("p", null, [
      createTextVNode("A container for multiple "),
      createVNode(_component_RouterLink, { to: "/components/BulmaButton.html" }, {
        default: withCtx(() => [
          createTextVNode("BulmaButton")
        ]),
        _: 1
      }),
      createTextVNode(" components.")
    ]),
    _hoisted_4,
    _hoisted_5,
    createBaseVNode("p", null, [
      createVNode(_component_RouterLink, { to: "/components/BulmaButton.html" }, {
        default: withCtx(() => [
          _hoisted_6
        ]),
        _: 1
      }),
      createTextVNode(" components.")
    ]),
    _hoisted_7,
    createBaseVNode("h3", _hoisted_8, [
      _hoisted_9,
      createTextVNode(),
      createVNode(_component_RouterLink, { to: "/types/common_types.html#tag" }, {
        default: withCtx(() => [
          createTextVNode("tag")
        ]),
        _: 1
      })
    ]),
    _hoisted_10,
    _hoisted_11,
    createBaseVNode("h3", _hoisted_12, [
      _hoisted_13,
      createTextVNode(),
      createVNode(_component_RouterLink, { to: "/types/common_types.html#bulmasizes" }, {
        default: withCtx(() => [
          createTextVNode("size")
        ]),
        _: 1
      })
    ]),
    createBaseVNode("p", null, [
      createTextVNode("Type: "),
      createVNode(_component_RouterLink, { to: "/types/common_types.html#bulmasizes" }, {
        default: withCtx(() => [
          _hoisted_14
        ]),
        _: 1
      }),
      createTextVNode(" | "),
      _hoisted_15
    ]),
    _hoisted_16,
    createBaseVNode("p", null, [
      createTextVNode("Type: "),
      createVNode(_component_RouterLink, { to: "/types/common_types.html#bulmaalignment" }, {
        default: withCtx(() => [
          createTextVNode("BulmaAlignment")
        ]),
        _: 1
      }),
      createTextVNode(" | "),
      _hoisted_21
    ]),
    _hoisted_22
  ]);
}
const BulmaButtons_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "BulmaButtons.html.vue"]]);
export {
  BulmaButtons_html as default
};
