import { _ as _export_sfc, N as resolveComponent, p as openBlock, q as createElementBlock, S as createBaseVNode, v as createTextVNode, O as createVNode, W as withCtx, a2 as createStaticVNode } from "./framework-58335e88.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "bulmadropdown",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#bulmadropdown",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" BulmaDropdown")
], -1);
const _hoisted_2 = {
  href: "https://bulma.io/documentation/components/dropdown/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("a", { href: "../../src/components/containers/BulmaDropdown.vue" }, "Component source", -1);
const _hoisted_4 = /* @__PURE__ */ createStaticVNode('<p>A dropdown menu.</p><h2 id="slots" tabindex="-1"><a class="header-anchor" href="#slots" aria-hidden="true">#</a> Slots</h2><h3 id="default" tabindex="-1"><a class="header-anchor" href="#default" aria-hidden="true">#</a> default</h3><p>The default slot is the content to display as the dropdown&#39;s <em>trigger</em>; it is the element that will be clicked to open the dropdown.</p><h3 id="dropdown-item" tabindex="-1"><a class="header-anchor" href="#dropdown-item" aria-hidden="true">#</a> dropdown-item</h3><p>This slot is to be used to template the layout of the <a href="#content">dropdown&#39;s items</a>. The dropdown item is bound to the <code>data</code> property.</p><h2 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h2><h3 id="alignment" tabindex="-1"><a class="header-anchor" href="#alignment" aria-hidden="true">#</a> alignment</h3><p>Type: <code>string</code> | <code>undefined</code></p><h3 id="content" tabindex="-1"><a class="header-anchor" href="#content" aria-hidden="true">#</a> content</h3><p><strong>Required</strong></p><p>Type: <code>any[]</code></p><p>Default: <code>[]</code></p><p>The content of the dropdown; <code>null</code>, <code>undefined</code>, <code>NaN</code> will render a dropdown divider</p>', 14);
const _hoisted_18 = {
  id: "tag",
  tabindex: "-1"
};
const _hoisted_19 = /* @__PURE__ */ createBaseVNode("a", {
  class: "header-anchor",
  href: "#tag",
  "aria-hidden": "true"
}, "#", -1);
const _hoisted_20 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("Type: "),
  /* @__PURE__ */ createBaseVNode("code", null, "string")
], -1);
const _hoisted_21 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("Default: "),
  /* @__PURE__ */ createBaseVNode("code", null, "div")
], -1);
const _hoisted_22 = /* @__PURE__ */ createBaseVNode("p", null, "The tag to hold all the dropdown items", -1);
const _hoisted_23 = {
  id: "itemtag",
  tabindex: "-1"
};
const _hoisted_24 = /* @__PURE__ */ createBaseVNode("a", {
  class: "header-anchor",
  href: "#itemtag",
  "aria-hidden": "true"
}, "#", -1);
const _hoisted_25 = /* @__PURE__ */ createStaticVNode('<p>Type: <code>string</code></p><p>Default: <code>p</code></p><p>The tag to wrap each dropdown item in.</p><h3 id="onclick" tabindex="-1"><a class="header-anchor" href="#onclick" aria-hidden="true">#</a> onClick</h3><p>Type: <code>boolean</code>,</p><p>Default: <code>true</code></p><p>Whether to toggle the dropdown when it&#39;s (trigger is) clicked</p><h3 id="is-hoverable" tabindex="-1"><a class="header-anchor" href="#is-hoverable" aria-hidden="true">#</a> is-hoverable</h3><p>Type: <code>boolean</code></p><p>Default: <code>false</code></p><p>Whether the dropdown toggle when the mouse hovers over it</p><h3 id="is-dropup" tabindex="-1"><a class="header-anchor" href="#is-dropup" aria-hidden="true">#</a> is-dropup</h3><p>Type: <code>boolean</code></p><p>Default: <code>false</code></p><p>Whether the dropdown is a dropup; opens upwards</p><h2 id="emits" tabindex="-1"><a class="header-anchor" href="#emits" aria-hidden="true">#</a> Emits</h2><h3 id="itemclick" tabindex="-1"><a class="header-anchor" href="#itemclick" aria-hidden="true">#</a> itemClick</h3><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">itemClick</span><span class="token punctuation">(</span>item<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> event<span class="token operator">:</span> Event<span class="token punctuation">,</span> element<span class="token operator">:</span> HTMLElement<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n</code></pre></div><p>Emitted when a dropdown item is clicked</p><ul><li><code>item</code> - the item value of the clicked dropdown item</li><li><code>event</code> - the click event</li><li><code>element</code> - the clicked dropdown item element</li></ul>', 20);
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
    createBaseVNode("h3", _hoisted_18, [
      _hoisted_19,
      createTextVNode(),
      createVNode(_component_RouterLink, { to: "/types/common_types.html#tag" }, {
        default: withCtx(() => [
          createTextVNode("tag")
        ]),
        _: 1
      })
    ]),
    _hoisted_20,
    _hoisted_21,
    _hoisted_22,
    createBaseVNode("h3", _hoisted_23, [
      _hoisted_24,
      createTextVNode(),
      createVNode(_component_RouterLink, { to: "/types/common_types.html#tag" }, {
        default: withCtx(() => [
          createTextVNode("itemTag")
        ]),
        _: 1
      })
    ]),
    _hoisted_25
  ]);
}
const BulmaDropdown_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "BulmaDropdown.html.vue"]]);
export {
  BulmaDropdown_html as default
};
