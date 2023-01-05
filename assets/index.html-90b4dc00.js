import { _ as _export_sfc, N as resolveComponent, p as openBlock, q as createElementBlock, S as createBaseVNode, v as createTextVNode, O as createVNode, W as withCtx, a2 as createStaticVNode } from "./framework-da6c0ff9.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "h1",
  {
    id: "overview",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#overview",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Overview")
  ],
  -1
  /* HOISTED */
);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "The types and helper functions found throughout are used to simplify development and types used by components. Many of the types and functions are exported for use and are recommended to use in conjunction with the components especially if building with Typescript.",
  -1
  /* HOISTED */
);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "tag",
  -1
  /* HOISTED */
);
const _hoisted_4 = {
  href: "https://developer.mozilla.org/en-US/docs/Glossary/semantics#semantics_in_html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_5 = /* @__PURE__ */ createBaseVNode(
  "em",
  null,
  "non-semantic",
  -1
  /* HOISTED */
);
const _hoisted_6 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "div",
  -1
  /* HOISTED */
);
const _hoisted_7 = /* @__PURE__ */ createStaticVNode('<h2 id="types" tabindex="-1"><a class="header-anchor" href="#types" aria-hidden="true">#</a> Types</h2><p>These are type aliases for simple class options or interfaces for more complex class lists for components.</p><h3 id="helpers" tabindex="-1"><a class="header-anchor" href="#helpers" aria-hidden="true">#</a> Helpers</h3><p>Define types/interfaces that wrap Bulma options or common classes/features of components.</p><h3 id="interfaces" tabindex="-1"><a class="header-anchor" href="#interfaces" aria-hidden="true">#</a> Interfaces</h3><p>Usually a wrapper of a simpler types used in conjunction to form a more complex series of Bulma classes</p><h2 id="functions" tabindex="-1"><a class="header-anchor" href="#functions" aria-hidden="true">#</a> Functions</h2><p>The following functions are side effects free but lack use outside the component SFC use with discretion as they are specialized for their related SFC component within the package. Use not recommended.</p><h3 id="getters" tabindex="-1"><a class="header-anchor" href="#getters" aria-hidden="true">#</a> Getters</h3><p>The getter functions help with retrieving all valid entries in a type or interface.</p><h3 id="class-transformers" tabindex="-1"><a class="header-anchor" href="#class-transformers" aria-hidden="true">#</a> Class transformers</h3><p>These functions are used to transform a type to its related Bulma class. Example. <code>ghost</code> → <code>is-ghost</code></p>', 12);
function _sfc_render(_ctx, _cache) {
  const _component_RouterLink = resolveComponent("RouterLink");
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    _hoisted_2,
    createBaseVNode("p", null, [
      createTextVNode("I highly recommend setting the "),
      createVNode(_component_RouterLink, { to: "/" }, {
        default: withCtx(() => [
          _hoisted_3,
          createTextVNode(" prop")
        ]),
        _: 1
        /* STABLE */
      }),
      createTextVNode(" whenever possible to reduce the amount of "),
      createBaseVNode("a", _hoisted_4, [
        _hoisted_5,
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(),
      _hoisted_6,
      createTextVNode(" tags in your HTML.")
    ]),
    _hoisted_7
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
export {
  index_html as default
};
