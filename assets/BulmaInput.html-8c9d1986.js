import { _ as _export_sfc, N as resolveComponent, p as openBlock, q as createElementBlock, S as createBaseVNode, v as createTextVNode, O as createVNode, W as withCtx, a2 as createStaticVNode } from "./framework-58335e88.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "bulmainput",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#bulmainput",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" BulmaInput")
], -1);
const _hoisted_2 = {
  href: "https://bulma.io/documentation/form/input/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("a", { href: "../../src/components/form/BulmaInput.vue" }, "Source code", -1);
const _hoisted_4 = {
  href: "https://bulma.io/documentation/form/input/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("code", null, "v-model"),
  /* @__PURE__ */ createTextVNode(" is supported.")
], -1);
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "props",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#props",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" Props")
], -1);
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("h3", {
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
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("code", null, "undefined", -1);
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "size",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#size",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" size")
], -1);
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("code", null, "undefined", -1);
const _hoisted_11 = /* @__PURE__ */ createStaticVNode('<h3 id="isrounded" tabindex="-1"><a class="header-anchor" href="#isrounded" aria-hidden="true">#</a> isRounded</h3><p>Type: <code>boolean</code> | <code>undefined</code></p><p>Wheter the input is rounded.</p><h3 id="isloading" tabindex="-1"><a class="header-anchor" href="#isloading" aria-hidden="true">#</a> isLoading</h3><p>Type: <code>boolean</code> | <code>undefined</code></p><p>Wheter the input is in a loading state and should show a spinner.</p><h3 id="isstatic" tabindex="-1"><a class="header-anchor" href="#isstatic" aria-hidden="true">#</a> isStatic</h3><p>Type: <code>boolean</code> | <code>undefined</code></p><p>When <code>true</code>, the input styled statically; like a label, uneditable</p><h3 id="modelvalue" tabindex="-1"><a class="header-anchor" href="#modelvalue" aria-hidden="true">#</a> modelValue</h3><p>Type: <code>any</code> | <code>undefined</code></p><p>The value of the input; used with <code>v-model</code>.</p><h2 id="emits" tabindex="-1"><a class="header-anchor" href="#emits" aria-hidden="true">#</a> Emits</h2><h3 id="update-modelvalue" tabindex="-1"><a class="header-anchor" href="#update-modelvalue" aria-hidden="true">#</a> update:modelValue</h3><p>Emitted when the input value changes.</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token punctuation">(</span>newValue<span class="token operator">:</span> <span class="token keyword">typeof</span> props<span class="token punctuation">.</span>modelValue<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n</code></pre></div><ul><li><code>newValue</code> - The new value of the input, which will be the same type as the <code>modelValue</code>.</li></ul>', 17);
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
    createBaseVNode("p", null, [
      createTextVNode("An input element styled with Bulma for "),
      createBaseVNode("a", _hoisted_4, [
        createTextVNode("supported types"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(".")
    ]),
    _hoisted_5,
    _hoisted_6,
    _hoisted_7,
    createBaseVNode("p", null, [
      createTextVNode("Type: "),
      createVNode(_component_RouterLink, { to: "/types/common_types.html#bulmacolours" }, {
        default: withCtx(() => [
          createTextVNode("BulmaColours")
        ]),
        _: 1
      }),
      createTextVNode(" | "),
      _hoisted_8
    ]),
    _hoisted_9,
    createBaseVNode("p", null, [
      createTextVNode("Type: "),
      createVNode(_component_RouterLink, { to: "/types/common_types.html#bulmasizes" }, {
        default: withCtx(() => [
          createTextVNode("BulmaSizes")
        ]),
        _: 1
      }),
      createTextVNode(" | "),
      _hoisted_10
    ]),
    _hoisted_11
  ]);
}
const BulmaInput_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "BulmaInput.html.vue"]]);
export {
  BulmaInput_html as default
};
