import { _ as _export_sfc, N as resolveComponent, p as openBlock, q as createElementBlock, S as createBaseVNode, v as createTextVNode, O as createVNode, W as withCtx, a2 as createStaticVNode } from "./framework-58335e88.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="bulmamenu" tabindex="-1"><a class="header-anchor" href="#bulmamenu" aria-hidden="true">#</a> BulmaMenu</h1><p>A menu item</p><h2 id="values" tabindex="-1"><a class="header-anchor" href="#values" aria-hidden="true">#</a> Values</h2><p><strong>object</strong></p><ul><li><code>label</code>: <code>string</code></li><li><code>items</code>: <code>BulmaSubMenu</code></li></ul><h2 id="bulmasubmenu" tabindex="-1"><a class="header-anchor" href="#bulmasubmenu" aria-hidden="true">#</a> BulmaSubMenu</h2><p>A submenu item</p><h3 id="values-1" tabindex="-1"><a class="header-anchor" href="#values-1" aria-hidden="true">#</a> Values</h3><p><strong>object</strong></p><ul><li><code>label</code>: <code>string</code></li><li>items: <code>any[]</code></li></ul>', 10);
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("code", null, "BulmaMenu", -1);
const _hoisted_12 = {
  href: "https://bulma.io/documentation/components/menu/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("strong", null, "1", -1);
const _hoisted_14 = /* @__PURE__ */ createBaseVNode("em", null, "sub menu", -1);
function _sfc_render(_ctx, _cache) {
  const _component_RouterLink = resolveComponent("RouterLink");
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createBaseVNode("p", null, [
      createTextVNode("This type is to be used with the "),
      createVNode(_component_RouterLink, { to: "/components/BulmaMenu.html" }, {
        default: withCtx(() => [
          _hoisted_11,
          createTextVNode(" component")
        ]),
        _: 1
      }),
      createTextVNode(". As the "),
      createBaseVNode("a", _hoisted_12, [
        createTextVNode("Bulma menu"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(" can only have "),
      _hoisted_13,
      createTextVNode(" submenu, to access and render any properties in the "),
      _hoisted_14,
      createTextVNode(" use the "),
      createVNode(_component_RouterLink, { to: "/components/BulmaMenu.html#slots" }, {
        default: withCtx(() => [
          createTextVNode("slot")
        ]),
        _: 1
      }),
      createTextVNode(" to properly display them.")
    ])
  ]);
}
const BulmaMenu_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "BulmaMenu.html.vue"]]);
export {
  BulmaMenu_html as default
};
