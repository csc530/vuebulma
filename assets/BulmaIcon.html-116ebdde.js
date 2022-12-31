import { _ as _export_sfc, N as resolveComponent, p as openBlock, q as createElementBlock, S as createBaseVNode, v as createTextVNode, O as createVNode, W as withCtx, a2 as createStaticVNode } from "./framework-58335e88.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "bulmaicon",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#bulmaicon",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" BulmaIcon")
], -1);
const _hoisted_2 = {
  href: "https://bulma.io/documentation/elements/icon/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("a", { href: "../../src/components/BulmaIcon.vue" }, "Component source", -1);
const _hoisted_4 = /* @__PURE__ */ createStaticVNode('<p>An icon component only compatible with fontawesome</p><h2 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h2><h3 id="icon" tabindex="-1"><a class="header-anchor" href="#icon" aria-hidden="true">#</a> icon</h3><p><strong>Required</strong></p><p>Type: <code>string</code> | <code>string[]</code> | <a href=""><code>ColourIcon[]</code></a></p><p>The icon class name with style prefix</p><p>Example:</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token string">&#39;fa-solid fa-shield-cat&#39;</span>\n<span class="token punctuation">[</span><span class="token string">&#39;fa-solid&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;fa-shield-cat&#39;</span><span class="token punctuation">]</span>\n</code></pre></div><h3 id="flex" tabindex="-1"><a class="header-anchor" href="#flex" aria-hidden="true">#</a> flex</h3><p>Type: <code>boolean</code> | <code>undefined</code></p><p>Default: <code>false</code></p><p>Determines if the icon should be a flex box; changing the parent tag to a <code>div</code></p><h3 id="colour" tabindex="-1"><a class="header-anchor" href="#colour" aria-hidden="true">#</a> colour</h3>', 13);
const _hoisted_17 = /* @__PURE__ */ createBaseVNode("code", null, "undefined", -1);
const _hoisted_18 = /* @__PURE__ */ createBaseVNode("p", null, "Colour of the icon", -1);
const _hoisted_19 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "bgcolour",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#bgcolour",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" bgColour")
], -1);
const _hoisted_20 = /* @__PURE__ */ createBaseVNode("code", null, "ColourHelper", -1);
const _hoisted_21 = /* @__PURE__ */ createBaseVNode("code", null, "undefined", -1);
const _hoisted_22 = /* @__PURE__ */ createBaseVNode("p", null, "Background colour of the icon", -1);
const _hoisted_23 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "containersize",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#containersize",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" containerSize")
], -1);
const _hoisted_24 = /* @__PURE__ */ createBaseVNode("code", null, "undefined", -1);
const _hoisted_25 = {
  href: "https://bulma.io/documentation/elements/icon/#sizes",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_26 = /* @__PURE__ */ createStaticVNode('<h3 id="prefix" tabindex="-1"><a class="header-anchor" href="#prefix" aria-hidden="true">#</a> prefix</h3><p>Type: <code>string</code> | <code>undefined</code></p><p>Adds this prefix as a separate class entry to icon element</p><h3 id="aftertext" tabindex="-1"><a class="header-anchor" href="#aftertext" aria-hidden="true">#</a> afterText</h3><p>Type: <code>boolean</code> | <code>undefined</code></p><p>Default: <code>false</code></p><p>If the icon will be placed after the text (slot) element</p><h3 id="stacked" tabindex="-1"><a class="header-anchor" href="#stacked" aria-hidden="true">#</a> stacked</h3><p>Type: <code>boolean</code> | <code>string</code> | <code>undefined</code></p><p>If the icons will be stacked on top of each other rather than side by side</p><p>If the icon stack needs a class added to it (e.g. fa-stack) then the <code>string</code> value will be appended to the icon stack&#39;s parent tag</p><h3 id="iconmodifiers" tabindex="-1"><a class="header-anchor" href="#iconmodifiers" aria-hidden="true">#</a> iconModifiers</h3><p>Type: <code>string[]</code> | <code>string</code> | <code>undefined</code></p><p>Additional modifiers for the icon, class names will be added to the icon&#39;s i element</p>', 14);
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
      createVNode(_component_RouterLink, { to: "/types/common_types.html#colourHelper" }, {
        default: withCtx(() => [
          createTextVNode("ColourHelper")
        ]),
        _: 1
      }),
      createTextVNode(" |"),
      _hoisted_17
    ]),
    _hoisted_18,
    _hoisted_19,
    createBaseVNode("p", null, [
      createTextVNode("Type: "),
      createVNode(_component_RouterLink, { to: "/types/common_types.html#colourhelper" }, {
        default: withCtx(() => [
          _hoisted_20
        ]),
        _: 1
      }),
      createTextVNode(" | "),
      _hoisted_21
    ]),
    _hoisted_22,
    _hoisted_23,
    createBaseVNode("p", null, [
      createTextVNode("Type: "),
      createVNode(_component_RouterLink, { to: "/types/common_types.html#bulmasizes" }, {
        default: withCtx(() => [
          createTextVNode("BulmaSizes")
        ]),
        _: 1
      }),
      createTextVNode(" |"),
      _hoisted_24
    ]),
    createBaseVNode("p", null, [
      createTextVNode("Determines the size of the "),
      createBaseVNode("a", _hoisted_25, [
        createTextVNode("icon's container"),
        createVNode(_component_ExternalLinkIcon)
      ])
    ]),
    _hoisted_26
  ]);
}
const BulmaIcon_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "BulmaIcon.html.vue"]]);
export {
  BulmaIcon_html as default
};
