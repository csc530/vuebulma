import { _ as _export_sfc, N as resolveComponent, p as openBlock, q as createElementBlock, S as createBaseVNode, v as createTextVNode, O as createVNode, a2 as createStaticVNode } from "./framework-58335e88.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="frequently-used-types-and-props" tabindex="-1"><a class="header-anchor" href="#frequently-used-types-and-props" aria-hidden="true">#</a> Frequently used types and props</h1><h2 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h2><h3 id="tag" tabindex="-1"><a class="header-anchor" href="#tag" aria-hidden="true">#</a> <code>tag</code></h3><p>Type: <code>string</code> | undefined</p><p>The <code>tag</code> prop is used to specify the HTML tag to use for the component&#39;s parent wrapper or sub-element. It is a string, and usually defaults to <code>div</code>.</p><h2 id="types" tabindex="-1"><a class="header-anchor" href="#types" aria-hidden="true">#</a> Types</h2>', 6);
const _hoisted_7 = {
  id: "bulmacolours",
  tabindex: "-1"
};
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("a", {
  class: "header-anchor",
  href: "#bulmacolours",
  "aria-hidden": "true"
}, "#", -1);
const _hoisted_9 = {
  href: "https://bulma.io/documentation/helpers/color-helpers/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("code", null, "BulmaColours", -1);
const _hoisted_11 = /* @__PURE__ */ createStaticVNode('<p><strong>string</strong></p><p>Type: <code>info</code> | <code>danger</code> | <code>warning</code> | <code>success</code> | <code>primary</code> | <code>link</code> |<code>white</code> | <code>black</code> | <code>light</code> | <code>dark</code> | <code>default</code></p><p>The <code>BulmaColours</code> type is used to specify the colour of a component. Usually changing the background and/or text colour.</p><h3 id="bulmasizes" tabindex="-1"><a class="header-anchor" href="#bulmasizes" aria-hidden="true">#</a> <code>BulmaSizes</code></h3><p><strong>string</strong></p><p>Type: <code>small</code> | <code>default</code>|<code>medium</code> | <code>large</code></p><p>The <code>BulmaSizes</code> type is used to specify the size of a component. Usually changing the font size.</p><p>For some Bulma elements an <code>is-normal</code> class is available which is represented by the <code>default</code> value.</p>', 8);
const _hoisted_19 = {
  href: "https://bulma.io/documentation/components/message/#sizes",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_20 = /* @__PURE__ */ createStaticVNode('<h3 id="colourhelper" tabindex="-1"><a class="header-anchor" href="#colourhelper" aria-hidden="true">#</a> <code>ColourHelper</code></h3><p><strong>string</strong></p><p>Type:</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">ColourHelper</span> <span class="token operator">=</span> <span class="token punctuation">{</span>\n	shade<span class="token operator">?</span><span class="token operator">:</span> <span class="token string">&#39;white&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;black&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;light&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;dark&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;default&#39;</span><span class="token punctuation">;</span>\n	colour<span class="token operator">:</span> <span class="token string">&#39;info&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;danger&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;warning&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;success&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;primary&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;link&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;default&#39;</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre></div><p>This type is used to simply specify the colour and shade, used for classes such as <code>has-text-primary-light</code> and <code>has-background-info-dark</code>.</p><h3 id="bulmaalignment" tabindex="-1"><a class="header-anchor" href="#bulmaalignment" aria-hidden="true">#</a> BulmaAlignment</h3><p><strong>string</strong></p><p>Type: <code>left</code> | <code>center</code> | <code>right</code></p>', 8);
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createBaseVNode("h3", _hoisted_7, [
      _hoisted_8,
      createTextVNode(),
      createBaseVNode("a", _hoisted_9, [
        _hoisted_10,
        createVNode(_component_ExternalLinkIcon)
      ])
    ]),
    _hoisted_11,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_19, [
        createTextVNode("Bulma documentation example"),
        createVNode(_component_ExternalLinkIcon)
      ])
    ]),
    _hoisted_20
  ]);
}
const common_types_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "common_types.html.vue"]]);
export {
  common_types_html as default
};
