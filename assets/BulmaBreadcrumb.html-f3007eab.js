import { _ as _export_sfc, N as resolveComponent, p as openBlock, q as createElementBlock, S as createBaseVNode, v as createTextVNode, O as createVNode, W as withCtx, a2 as createStaticVNode } from "./framework-da6c0ff9.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "h1",
  {
    id: "bulmabreadcrumb",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#bulmabreadcrumb",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" BulmaBreadcrumb")
  ],
  -1
  /* HOISTED */
);
const _hoisted_2 = {
  href: "https://bulma.io/documentation/components/breadcrumb/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_3 = /* @__PURE__ */ createBaseVNode(
  "a",
  { href: "../../src/components/BulmaBreadcrumb.vue" },
  "Component source",
  -1
  /* HOISTED */
);
const _hoisted_4 = /* @__PURE__ */ createStaticVNode('<h2 id="slots" tabindex="-1"><a class="header-anchor" href="#slots" aria-hidden="true">#</a> Slots</h2><h3 id="default" tabindex="-1"><a class="header-anchor" href="#default" aria-hidden="true">#</a> default</h3><p>Template formatting of the breadcrumb items.</p><p>The default is an <code>a</code> tag with the <code>href</code> attribute set to the <code>href</code> property of the item and text set to the <code>text</code> property of the item or the item itself.</p><h2 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h2>', 5);
const _hoisted_9 = {
  id: "tag",
  tabindex: "-1"
};
const _hoisted_10 = /* @__PURE__ */ createBaseVNode(
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
const _hoisted_11 = /* @__PURE__ */ createStaticVNode('<p>Type: <code>string</code> | <code>undefined</code></p><p>Default: <code>nav</code></p><p>the tag to render as the breadcrumb&#39;s <code>ul</code> parent</p><h3 id="lastcrumbisactive" tabindex="-1"><a class="header-anchor" href="#lastcrumbisactive" aria-hidden="true">#</a> lastCrumbIsActive</h3><p>Type: <code>boolean</code> | <code>undefined</code></p><p>Default: <code>true</code></p><p>Whether the last breadcrumb item should be active</p><h3 id="list" tabindex="-1"><a class="header-anchor" href="#list" aria-hidden="true">#</a> list</h3><p>Type: <code>any[]</code></p><p>List of items to render in the breadcrumb</p><h3 id="alignment" tabindex="-1"><a class="header-anchor" href="#alignment" aria-hidden="true">#</a> alignment</h3>', 11);
const _hoisted_22 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "BulmaAlignments",
  -1
  /* HOISTED */
);
const _hoisted_23 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "undefined",
  -1
  /* HOISTED */
);
const _hoisted_24 = /* @__PURE__ */ createStaticVNode('<p>Default: <code>left</code></p><p>The alignment of the breadcrumbs within its container</p><h3 id="separator" tabindex="-1"><a class="header-anchor" href="#separator" aria-hidden="true">#</a> separator</h3><p>Type: <code>arrow</code> | <code>bullet</code> | <code>dot</code> | <code>succeeds</code> | <code>slash</code> | <code>undefined</code></p><p>Default: <code>slash</code></p><p>The separator to use between breadcrumbs;</p><h3 id="size" tabindex="-1"><a class="header-anchor" href="#size" aria-hidden="true">#</a> size</h3>', 7);
const _hoisted_31 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "BulmaSize",
  -1
  /* HOISTED */
);
const _hoisted_32 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "undefined",
  -1
  /* HOISTED */
);
const _hoisted_33 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("Default: "),
    /* @__PURE__ */ createBaseVNode("code", null, "default")
  ],
  -1
  /* HOISTED */
);
const _hoisted_34 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "The size of the breadcrumbs",
  -1
  /* HOISTED */
);
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
    createBaseVNode("h3", _hoisted_9, [
      _hoisted_10,
      createTextVNode(),
      createVNode(_component_RouterLink, { to: "/types/common_types.html#tag" }, {
        default: withCtx(() => [
          createTextVNode("tag")
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _hoisted_11,
    createBaseVNode("p", null, [
      createTextVNode("Type: "),
      createVNode(_component_RouterLink, { to: "/types/common_types.html#bulmaalignments" }, {
        default: withCtx(() => [
          _hoisted_22
        ]),
        _: 1
        /* STABLE */
      }),
      createTextVNode(" | "),
      _hoisted_23
    ]),
    _hoisted_24,
    createBaseVNode("p", null, [
      createTextVNode("Type: "),
      createVNode(_component_RouterLink, { to: "/types/common_types.html#bulmasize" }, {
        default: withCtx(() => [
          _hoisted_31
        ]),
        _: 1
        /* STABLE */
      }),
      createTextVNode(" | "),
      _hoisted_32
    ]),
    _hoisted_33,
    _hoisted_34
  ]);
}
const BulmaBreadcrumb_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "BulmaBreadcrumb.html.vue"]]);
export {
  BulmaBreadcrumb_html as default
};
