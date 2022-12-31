import { _ as _export_sfc, N as resolveComponent, p as openBlock, q as createElementBlock, S as createBaseVNode, v as createTextVNode, O as createVNode, W as withCtx, a2 as createStaticVNode } from "./framework-58335e88.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "bulmabutton",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#bulmabutton",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" BulmaButton")
], -1);
const _hoisted_2 = {
  href: "https://bulma.io/documentation/elements/button/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("a", { href: "../../src/components/button/BulmaButton.vue" }, "Source code", -1);
const _hoisted_4 = /* @__PURE__ */ createStaticVNode('<h2 id="slots" tabindex="-1"><a class="header-anchor" href="#slots" aria-hidden="true">#</a> Slots</h2><h3 id="default" tabindex="-1"><a class="header-anchor" href="#default" aria-hidden="true">#</a> default</h3><p>The content of the button</p><h2 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h2>', 4);
const _hoisted_8 = {
  id: "tag",
  tabindex: "-1"
};
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("a", {
  class: "header-anchor",
  href: "#tag",
  "aria-hidden": "true"
}, "#", -1);
const _hoisted_10 = /* @__PURE__ */ createStaticVNode('<p>Type: <code>button</code> | <code>a</code> | <code>undefined</code></p><p>Default: <code>button</code></p><p>The element to style as a button</p><h3 id="label" tabindex="-1"><a class="header-anchor" href="#label" aria-hidden="true">#</a> label</h3><p>Type: <code>string</code> | <code>undefined</code></p><p>Text to display in the button instead of <a href="#default">slot</a> content</p><h3 id="colour" tabindex="-1"><a class="header-anchor" href="#colour" aria-hidden="true">#</a> colour</h3>', 7);
const _hoisted_17 = /* @__PURE__ */ createBaseVNode("code", null, "ButtonColours", -1);
const _hoisted_18 = /* @__PURE__ */ createBaseVNode("code", null, "undefined", -1);
const _hoisted_19 = /* @__PURE__ */ createStaticVNode('<p>Button colour</p><h3 id="islight" tabindex="-1"><a class="header-anchor" href="#islight" aria-hidden="true">#</a> isLight</h3><p><em>Requires <a href="#colour">colour</a> prop</em></p><p>Type: <code>boolean</code> | <code>undefined</code></p><p>Modifies the colour of the button to be lighter</p><h3 id="size" tabindex="-1"><a class="header-anchor" href="#size" aria-hidden="true">#</a> size</h3>', 6);
const _hoisted_25 = /* @__PURE__ */ createBaseVNode("code", null, "BulmaSizes", -1);
const _hoisted_26 = /* @__PURE__ */ createBaseVNode("code", null, "undefined", -1);
const _hoisted_27 = /* @__PURE__ */ createStaticVNode('<p>Button size</p><h3 id="isnormal" tabindex="-1"><a class="header-anchor" href="#isnormal" aria-hidden="true">#</a> isNormal</h3><p>Type: <code>boolean</code> | <code>undefined</code></p><p>When true, the button will be normal size</p><h3 id="isresponsive" tabindex="-1"><a class="header-anchor" href="#isresponsive" aria-hidden="true">#</a> isResponsive</h3><p>Type: ``boolean<code>|</code>undefined`</p><p>When true, the button will be responsive; having a more appropriate relate size based on the screen size</p><h3 id="isfullwidth" tabindex="-1"><a class="header-anchor" href="#isfullwidth" aria-hidden="true">#</a> isFullWidth</h3><p>Type: <code>boolean</code> | <code>undefined</code></p><p>When true, the button will be the full width of its container</p><h3 id="isoutlined" tabindex="-1"><a class="header-anchor" href="#isoutlined" aria-hidden="true">#</a> isOutlined</h3><p>Type: <code>boolean</code> | <code>undefined</code></p><p>When true, the button will have a transparent (default) background and a coloured text and border</p><h3 id="isinverted" tabindex="-1"><a class="header-anchor" href="#isinverted" aria-hidden="true">#</a> isInverted</h3><p>Type: <code>boolean</code> | <code>undefined</code></p><p>When true, the button will be invertedl where the text color becomes the background color, and vice-versa</p><h3 id="isrounded" tabindex="-1"><a class="header-anchor" href="#isrounded" aria-hidden="true">#</a> isRounded</h3><p>Type: <code>boolean</code> | <code>undefined</code></p><p>When true, the button will have rounded corners</p><h3 id="isloading" tabindex="-1"><a class="header-anchor" href="#isloading" aria-hidden="true">#</a> isLoading</h3><p>Type: <code>boolean</code> | <code>undefined</code></p><p>When true, the button will have a loading spinner</p>', 22);
const _hoisted_49 = /* @__PURE__ */ createBaseVNode("p", null, "You can very easily turn a button into its loading version by appending the is-loading modifier. You don't even need to remove the inner text, which allows the button to maintain its original size between its default and loading states.", -1);
const _hoisted_50 = {
  href: "https://bulma.io/documentation/elements/button/#states",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_51 = /* @__PURE__ */ createStaticVNode('<h3 id="isstatic" tabindex="-1"><a class="header-anchor" href="#isstatic" aria-hidden="true">#</a> isStatic</h3><p>Type: <code>boolean</code> | <code>undefined</code></p><p>When true, the button will look non-interactive</p><h3 id="isactive" tabindex="-1"><a class="header-anchor" href="#isactive" aria-hidden="true">#</a> isActive</h3><p>Type: <code>boolean</code> | <code>undefined</code></p><p>When true, the button will look active, as if it&#39;s curently being clicked</p><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="isselected" tabindex="-1"><a class="header-anchor" href="#isselected" aria-hidden="true">#</a> isSelected</h3><p>Type: <code>boolean</code></p><p>Controls the <code>is-selected</code> class which will increase the button&#39;s z-index</p>', 10);
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
    createBaseVNode("h3", _hoisted_8, [
      _hoisted_9,
      createTextVNode(),
      createVNode(_component_RouterLink, { to: "/types/common_types.html#tag" }, {
        default: withCtx(() => [
          createTextVNode("tag")
        ]),
        _: 1
      })
    ]),
    _hoisted_10,
    createBaseVNode("p", null, [
      createTextVNode("Type: "),
      createVNode(_component_RouterLink, { to: "/types/BulmaButtonColours.html" }, {
        default: withCtx(() => [
          _hoisted_17
        ]),
        _: 1
      }),
      createTextVNode(" | "),
      _hoisted_18
    ]),
    _hoisted_19,
    createBaseVNode("p", null, [
      createTextVNode("Type: "),
      createVNode(_component_RouterLink, { to: "/types/common_types.html#bulmasizes" }, {
        default: withCtx(() => [
          _hoisted_25
        ]),
        _: 1
      }),
      createTextVNode(" | "),
      _hoisted_26
    ]),
    _hoisted_27,
    createBaseVNode("blockquote", null, [
      _hoisted_49,
      createBaseVNode("p", null, [
        createBaseVNode("a", _hoisted_50, [
          createTextVNode("Bulma docs"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode(":")
      ])
    ]),
    _hoisted_51
  ]);
}
const BulmaButton_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "BulmaButton.html.vue"]]);
export {
  BulmaButton_html as default
};
