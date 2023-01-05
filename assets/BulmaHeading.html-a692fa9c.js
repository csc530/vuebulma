import { _ as _export_sfc, N as resolveComponent, p as openBlock, q as createElementBlock, S as createBaseVNode, v as createTextVNode, O as createVNode, W as withCtx, a2 as createStaticVNode } from "./framework-da6c0ff9.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "h1",
  {
    id: "bulma-heading",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#bulma-heading",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Bulma Heading")
  ],
  -1
  /* HOISTED */
);
const _hoisted_2 = {
  href: "https://bulma.io/documentation/elements/title/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_3 = /* @__PURE__ */ createBaseVNode(
  "a",
  { href: "../../src/components/BulmaHeading.vue" },
  "Component source",
  -1
  /* HOISTED */
);
const _hoisted_4 = /* @__PURE__ */ createStaticVNode('<p>The component for the Bulma title and subtitle elements.</p><h2 id="slots" tabindex="-1"><a class="header-anchor" href="#slots" aria-hidden="true">#</a> Slots</h2><h3 id="default" tabindex="-1"><a class="header-anchor" href="#default" aria-hidden="true">#</a> default</h3><p>Text or HTML content you&#39;d like to display as the title or subtitle.</p><h2 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h2><h3 id="isspaced" tabindex="-1"><a class="header-anchor" href="#isspaced" aria-hidden="true">#</a> isSpaced</h3><p>Type: <code>boolean</code> | <code>undefined</code></p><p>Default: <code>false</code></p><p>Adds a normalized space between the title and subtitle. Only visible if both title and subtitle are present sequentially (one after another).</p>', 9);
const _hoisted_13 = {
  id: "tag",
  tabindex: "-1"
};
const _hoisted_14 = /* @__PURE__ */ createBaseVNode(
  "a",
  {
    class: "header-anchor",
    href: "#tag",
    "aria-hidden": "true"
  },
  "#",
  -1
  /* HOISTED */
);
const _hoisted_15 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("Type: "),
    /* @__PURE__ */ createBaseVNode("code", null, "string"),
    /* @__PURE__ */ createTextVNode(" | "),
    /* @__PURE__ */ createBaseVNode("code", null, "undefined")
  ],
  -1
  /* HOISTED */
);
const _hoisted_16 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("Default: "),
    /* @__PURE__ */ createBaseVNode("code", null, "p")
  ],
  -1
  /* HOISTED */
);
const _hoisted_17 = {
  id: "size",
  tabindex: "-1"
};
const _hoisted_18 = /* @__PURE__ */ createBaseVNode(
  "a",
  {
    class: "header-anchor",
    href: "#size",
    "aria-hidden": "true"
  },
  "#",
  -1
  /* HOISTED */
);
const _hoisted_19 = {
  href: "https://bulma.io/documentation/elements/title/#sizes",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_20 = /* @__PURE__ */ createStaticVNode('<p>Type: <code>1</code> | <code>2</code> | <code>3</code> | <code>4</code> | <code>5</code> | <code>6</code> | <code>undefined</code></p><p>Default: <code>1</code></p><p>The size of the header. An integer from 1 to 6.</p><h3 id="type" tabindex="-1"><a class="header-anchor" href="#type" aria-hidden="true">#</a> <code>type</code></h3><p>Type: <code>title</code> | <code>subtitle</code> | <code>undefined</code></p><p>Default: <code>title</code></p><p>The type of the header.</p>', 7);
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  const _component_RouterLink = resolveComponent("RouterLink");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_2, [
        createTextVNode("Bulma Documentation"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      _hoisted_3
    ]),
    _hoisted_4,
    createBaseVNode("h3", _hoisted_13, [
      _hoisted_14,
      createTextVNode(),
      createVNode(_component_RouterLink, { to: "/types/common_types.html#tag" }, {
        default: withCtx(() => [
          createTextVNode("tag")
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _hoisted_15,
    _hoisted_16,
    createBaseVNode("h3", _hoisted_17, [
      _hoisted_18,
      createTextVNode(),
      createBaseVNode("a", _hoisted_19, [
        createTextVNode("size"),
        createVNode(_component_ExternalLinkIcon)
      ])
    ]),
    _hoisted_20
  ]);
}
const BulmaHeading_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "BulmaHeading.html.vue"]]);
export {
  BulmaHeading_html as default
};
