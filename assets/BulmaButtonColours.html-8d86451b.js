import { _ as _export_sfc, N as resolveComponent, p as openBlock, q as createElementBlock, S as createBaseVNode, v as createTextVNode, O as createVNode, W as withCtx, a2 as createStaticVNode } from "./framework-58335e88.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="bulmabuttoncolours" tabindex="-1"><a class="header-anchor" href="#bulmabuttoncolours" aria-hidden="true">#</a> BulmaButtonColours</h1><p>Available colours for Bulma buttons</p><h2 id="values" tabindex="-1"><a class="header-anchor" href="#values" aria-hidden="true">#</a> Values</h2><p><strong>string</strong></p><ul><li><code>ghost</code></li><li><code>text</code></li></ul>', 5);
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("code", null, "|", -1);
function _sfc_render(_ctx, _cache) {
  const _component_RouterLink = resolveComponent("RouterLink");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createBaseVNode("p", null, [
      createTextVNode("Union ("),
      _hoisted_6,
      createTextVNode(") "),
      createVNode(_component_RouterLink, { to: "/types/common_types.html#bulmacolour" }, {
        default: withCtx(() => [
          createTextVNode("BulmaColour")
        ]),
        _: 1
      })
    ])
  ]);
}
const BulmaButtonColours_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "BulmaButtonColours.html.vue"]]);
export {
  BulmaButtonColours_html as default
};
