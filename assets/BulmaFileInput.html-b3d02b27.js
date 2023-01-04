import { _ as _export_sfc, N as resolveComponent, p as openBlock, q as createElementBlock, S as createBaseVNode, v as createTextVNode, O as createVNode, W as withCtx, a2 as createStaticVNode } from "./framework-58335e88.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "bulmafileinput",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#bulmafileinput",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" BulmaFileInput")
], -1);
const _hoisted_2 = {
  href: "https://bulma.io/documentation/form/file/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("a", { href: "../../src/components/form/BulmaFileInput.vue" }, "Source code", -1);
const _hoisted_4 = /* @__PURE__ */ createStaticVNode('<p>A file upload input</p><h2 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h2><h3 id="label" tabindex="-1"><a class="header-anchor" href="#label" aria-hidden="true">#</a> label</h3><p>Type: <code>string</code></p><p>Text to display with the file input</p><h3 id="filename" tabindex="-1"><a class="header-anchor" href="#filename" aria-hidden="true">#</a> fileName</h3><p>Type: <code>string</code> | <code>undefined</code></p><p>The name of the [selected] file to display</p><h3 id="size" tabindex="-1"><a class="header-anchor" href="#size" aria-hidden="true">#</a> size</h3>', 9);
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("code", null, "BulmaSize", -1);
const _hoisted_14 = /* @__PURE__ */ createBaseVNode("code", null, "undefined", -1);
const _hoisted_15 = /* @__PURE__ */ createBaseVNode("p", null, "The size of the file input", -1);
const _hoisted_16 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "colour",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#colour",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" colour")
], -1);
const _hoisted_17 = /* @__PURE__ */ createBaseVNode("code", null, "BulmaColour", -1);
const _hoisted_18 = /* @__PURE__ */ createBaseVNode("code", null, "undefined", -1);
const _hoisted_19 = /* @__PURE__ */ createBaseVNode("p", null, "The colour of the file input", -1);
const _hoisted_20 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "alignment",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#alignment",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" alignment")
], -1);
const _hoisted_21 = /* @__PURE__ */ createBaseVNode("code", null, "BulmaAlignments", -1);
const _hoisted_22 = /* @__PURE__ */ createBaseVNode("code", null, "undefined", -1);
const _hoisted_23 = /* @__PURE__ */ createStaticVNode('<h3 id="isboxed" tabindex="-1"><a class="header-anchor" href="#isboxed" aria-hidden="true">#</a> isBoxed</h3><p>Type: <code>boolean</code> | <code>undefined</code></p><p>If the file input should have a boxed display; contents are displayed one on top of one another</p><h3 id="isfullwidth" tabindex="-1"><a class="header-anchor" href="#isfullwidth" aria-hidden="true">#</a> isFullwidth</h3><p><strong>Requires <a href="#isboxed">is-boxed</a> or a <a href="#filename">file name</a></strong></p><p>Type: <code>boolean</code> | <code>undefined</code></p><p>expand the name or input to fill up the available space</p>', 7);
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
    createBaseVNode("p", null, [
      createTextVNode("Type: "),
      createVNode(_component_RouterLink, { to: "/types/common_types.html#bulmasize" }, {
        default: withCtx(() => [
          _hoisted_13
        ]),
        _: 1
      }),
      createTextVNode(" | "),
      _hoisted_14
    ]),
    _hoisted_15,
    _hoisted_16,
    createBaseVNode("p", null, [
      createTextVNode("Type: "),
      createVNode(_component_RouterLink, { to: "/types/common_types.html#bulmacolour" }, {
        default: withCtx(() => [
          _hoisted_17
        ]),
        _: 1
      }),
      createTextVNode(" | "),
      _hoisted_18
    ]),
    _hoisted_19,
    _hoisted_20,
    createBaseVNode("p", null, [
      createTextVNode("Type: "),
      createVNode(_component_RouterLink, { to: "/types/common_types.html#bulmaalignments" }, {
        default: withCtx(() => [
          _hoisted_21
        ]),
        _: 1
      }),
      createTextVNode(" | "),
      _hoisted_22
    ]),
    _hoisted_23
  ]);
}
const BulmaFileInput_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "BulmaFileInput.html.vue"]]);
export {
  BulmaFileInput_html as default
};
