import { _ as _export_sfc, N as resolveComponent, p as openBlock, q as createElementBlock, S as createBaseVNode, v as createTextVNode, O as createVNode, W as withCtx, a2 as createStaticVNode } from "./framework-da6c0ff9.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "h1",
  {
    id: "bulmatextarea",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#bulmatextarea",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" BulmaTextArea")
  ],
  -1
  /* HOISTED */
);
const _hoisted_2 = {
  href: "https://bulma.io/documentation/form/textarea/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_3 = /* @__PURE__ */ createBaseVNode(
  "a",
  { href: "../../src/components/form/BulmaTextArea.vue" },
  "Source code",
  -1
  /* HOISTED */
);
const _hoisted_4 = /* @__PURE__ */ createStaticVNode('<p>A multiline textarea</p><h2 id="slots" tabindex="-1"><a class="header-anchor" href="#slots" aria-hidden="true">#</a> Slots</h2><h3 id="default" tabindex="-1"><a class="header-anchor" href="#default" aria-hidden="true">#</a> default</h3><p>The default content to display within the textarea</p><h2 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h2><h3 id="colour" tabindex="-1"><a class="header-anchor" href="#colour" aria-hidden="true">#</a> colour</h3>', 6);
const _hoisted_10 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "BulmaColour",
  -1
  /* HOISTED */
);
const _hoisted_11 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "undefined",
  -1
  /* HOISTED */
);
const _hoisted_12 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Colour of the textarea border",
  -1
  /* HOISTED */
);
const _hoisted_13 = /* @__PURE__ */ createBaseVNode(
  "h3",
  {
    id: "size",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#size",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" size")
  ],
  -1
  /* HOISTED */
);
const _hoisted_14 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "BulmaSize",
  -1
  /* HOISTED */
);
const _hoisted_15 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "undefined",
  -1
  /* HOISTED */
);
const _hoisted_16 = /* @__PURE__ */ createStaticVNode('<h3 id="rows" tabindex="-1"><a class="header-anchor" href="#rows" aria-hidden="true">#</a> rows</h3><p>Type: <code>number</code> | <code>undefined</code></p><p>Number of rows to display by default</p><h3 id="hasfixedsize" tabindex="-1"><a class="header-anchor" href="#hasfixedsize" aria-hidden="true">#</a> hasFixedSize</h3><p>Type: <code>boolean</code> | <code>undefined</code></p><p>Whether the textarea has a fixed size</p>', 6);
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
      createVNode(_component_RouterLink, { to: "/types/common_types.html#bulmacolour" }, {
        default: withCtx(() => [
          _hoisted_10
        ]),
        _: 1
        /* STABLE */
      }),
      createTextVNode(" | "),
      _hoisted_11
    ]),
    _hoisted_12,
    _hoisted_13,
    createBaseVNode("p", null, [
      createVNode(_component_RouterLink, { to: "/types/common_types.html#bulmasize" }, {
        default: withCtx(() => [
          _hoisted_14
        ]),
        _: 1
        /* STABLE */
      }),
      createTextVNode(" | "),
      _hoisted_15
    ]),
    _hoisted_16
  ]);
}
const BulmaTextArea_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "BulmaTextArea.html.vue"]]);
export {
  BulmaTextArea_html as default
};
