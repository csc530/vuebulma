import { _ as _export_sfc, N as resolveComponent, p as openBlock, q as createElementBlock, S as createBaseVNode, v as createTextVNode, O as createVNode, W as withCtx, a2 as createStaticVNode } from "./framework-58335e88.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "bulmaheadingsizes",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#bulmaheadingsizes",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" BulmaHeadingSizes")
], -1);
const _hoisted_2 = /* @__PURE__ */ createStaticVNode('<h2 id="values" tabindex="-1"><a class="header-anchor" href="#values" aria-hidden="true">#</a> Values</h2><p><strong>Number</strong> - integer</p><ul><li>1</li><li>2</li><li>3</li><li>4</li><li>5</li><li>6</li></ul>', 3);
function _sfc_render(_ctx, _cache) {
  const _component_RouterLink = resolveComponent("RouterLink");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createBaseVNode("p", null, [
      createTextVNode("Sizes of "),
      createVNode(_component_RouterLink, { to: "/components/BulmaHeading.html" }, {
        default: withCtx(() => [
          createTextVNode("Heading component")
        ]),
        _: 1
      }),
      createTextVNode(".")
    ]),
    _hoisted_2
  ]);
}
const BulmaHeadingSizes_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "BulmaHeadingSizes.html.vue"]]);
export {
  BulmaHeadingSizes_html as default
};
