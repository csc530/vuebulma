import { _ as _export_sfc, N as resolveComponent, p as openBlock, q as createElementBlock, S as createBaseVNode, v as createTextVNode, O as createVNode, W as withCtx, a2 as createStaticVNode } from "./framework-58335e88.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "bulmamenu",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#bulmamenu",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" BulmaMenu")
], -1);
const _hoisted_2 = {
  href: "https://bulma.io/documentation/components/menu/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("a", { href: "../../src/components/containers/BulmaMenu.vue" }, "Component source", -1);
const _hoisted_4 = /* @__PURE__ */ createStaticVNode('<h2 id="slots" tabindex="-1"><a class="header-anchor" href="#slots" aria-hidden="true">#</a> Slots</h2><h3 id="default" tabindex="-1"><a class="header-anchor" href="#default" aria-hidden="true">#</a> default</h3><p>The default slot is used to render the menu items.</p><h2 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h2>', 4);
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
  /* @__PURE__ */ createTextVNode(";")
], -1);
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("Default: "),
  /* @__PURE__ */ createBaseVNode("code", null, "aside"),
  /* @__PURE__ */ createTextVNode(";")
], -1);
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "menu",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#menu",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" menu")
], -1);
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("code", null, "Menu", -1);
const _hoisted_14 = /* @__PURE__ */ createBaseVNode("p", null, "The items to render in the menu.", -1);
const _hoisted_15 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "labeltag",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#labeltag",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" labelTag")
], -1);
const _hoisted_16 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("Type: "),
  /* @__PURE__ */ createBaseVNode("code", null, "string")
], -1);
const _hoisted_17 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("Default: "),
  /* @__PURE__ */ createBaseVNode("code", null, "p")
], -1);
const _hoisted_18 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "additional-information",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#additional-information",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" Additional information")
], -1);
const _hoisted_19 = {
  href: "https://bulma.io%5Cdocumentation/components/menu/#submenu",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_20 = /* @__PURE__ */ createBaseVNode("code", null, "items", -1);
const _hoisted_21 = /* @__PURE__ */ createBaseVNode("code", null, "menu", -1);
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
    _hoisted_4,
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
    _hoisted_12,
    createBaseVNode("p", null, [
      createTextVNode("Type: "),
      createVNode(_component_RouterLink, { to: "/types/BulmaMenu.html" }, {
        default: withCtx(() => [
          _hoisted_13
        ]),
        _: 1
      }),
      createTextVNode(";")
    ]),
    _hoisted_14,
    _hoisted_15,
    _hoisted_16,
    _hoisted_17,
    _hoisted_18,
    createBaseVNode("p", null, [
      createTextVNode("To display a "),
      createBaseVNode("a", _hoisted_19, [
        createTextVNode("sub menu"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(" use the "),
      createVNode(_component_RouterLink, { to: "/types/BulmaMenu.html" }, {
        default: withCtx(() => [
          createTextVNode("BulmaMenu")
        ]),
        _: 1
      }),
      createTextVNode(" type and "),
      _hoisted_20,
      createTextVNode(" property of a "),
      createVNode(_component_RouterLink, { to: "/types/BulmaMenu.html#bulmasubmenu" }, {
        default: withCtx(() => [
          createTextVNode("BulmaSubMenu")
        ]),
        _: 1
      }),
      createTextVNode(" in the "),
      _hoisted_21,
      createTextVNode(" prop.")
    ])
  ]);
}
const BulmaMenu_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "BulmaMenu.html.vue"]]);
export {
  BulmaMenu_html as default
};
