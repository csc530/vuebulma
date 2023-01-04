import { _ as _export_sfc, N as resolveComponent, p as openBlock, q as createElementBlock, S as createBaseVNode, v as createTextVNode, O as createVNode, W as withCtx, a2 as createStaticVNode } from "./framework-58335e88.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "bulmamessage",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#bulmamessage",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" BulmaMessage")
], -1);
const _hoisted_2 = {
  href: "https://bulma.io/documentation/components/message/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("a", { href: "../../src/components/BulmaMessage.vue" }, "Component source", -1);
const _hoisted_4 = /* @__PURE__ */ createStaticVNode('<p>A message box component</p><h2 id="slots" tabindex="-1"><a class="header-anchor" href="#slots" aria-hidden="true">#</a> Slots</h2><h3 id="default" tabindex="-1"><a class="header-anchor" href="#default" aria-hidden="true">#</a> default</h3><p>Text or HTML content to display in the message body</p><h3 id="heading" tabindex="-1"><a class="header-anchor" href="#heading" aria-hidden="true">#</a> heading</h3><p>Text or HTML content to display in the message header</p><h2 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h2>', 7);
const _hoisted_11 = {
  id: "containertag",
  tabindex: "-1"
};
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("a", {
  class: "header-anchor",
  href: "#containertag",
  "aria-hidden": "true"
}, "#", -1);
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("Type: "),
  /* @__PURE__ */ createBaseVNode("code", null, "string"),
  /* @__PURE__ */ createTextVNode(" | "),
  /* @__PURE__ */ createBaseVNode("code", null, "undefined")
], -1);
const _hoisted_14 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("Default: "),
  /* @__PURE__ */ createBaseVNode("code", null, "article")
], -1);
const _hoisted_15 = /* @__PURE__ */ createBaseVNode("p", null, "HTML or registered component tag for the message", -1);
const _hoisted_16 = {
  id: "headingtag",
  tabindex: "-1"
};
const _hoisted_17 = /* @__PURE__ */ createBaseVNode("a", {
  class: "header-anchor",
  href: "#headingtag",
  "aria-hidden": "true"
}, "#", -1);
const _hoisted_18 = /* @__PURE__ */ createStaticVNode('<p>Type: <code>string</code> | <code>undefined</code></p><p>Default: <code>header</code></p><p>HTML or registered component tag for the message&#39;s header</p><h3 id="heading-1" tabindex="-1"><a class="header-anchor" href="#heading-1" aria-hidden="true">#</a> heading</h3><p>Type: <code>string</code> | <code>undefined</code></p><p>Display text in message title</p><h3 id="deletebtn" tabindex="-1"><a class="header-anchor" href="#deletebtn" aria-hidden="true">#</a> deleteBtn</h3><p>Type: <code>boolean</code> | <code>undefined</code></p><p>Default: <code>false</code></p><p>Display a close button in the message header</p>', 10);
const _hoisted_28 = {
  id: "bodytag",
  tabindex: "-1"
};
const _hoisted_29 = /* @__PURE__ */ createBaseVNode("a", {
  class: "header-anchor",
  href: "#bodytag",
  "aria-hidden": "true"
}, "#", -1);
const _hoisted_30 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("Type: "),
  /* @__PURE__ */ createBaseVNode("code", null, "string"),
  /* @__PURE__ */ createTextVNode(" | "),
  /* @__PURE__ */ createBaseVNode("code", null, "undefined")
], -1);
const _hoisted_31 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("Default: "),
  /* @__PURE__ */ createBaseVNode("code", null, "p")
], -1);
const _hoisted_32 = /* @__PURE__ */ createBaseVNode("p", null, "HTML or registered component tag for the message's body", -1);
const _hoisted_33 = /* @__PURE__ */ createBaseVNode("h3", {
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
const _hoisted_34 = /* @__PURE__ */ createBaseVNode("code", null, "BulmaColour", -1);
const _hoisted_35 = /* @__PURE__ */ createBaseVNode("code", null, "undefined", -1);
const _hoisted_36 = /* @__PURE__ */ createBaseVNode("p", null, "Colour of the message component", -1);
const _hoisted_37 = {
  id: "size",
  tabindex: "-1"
};
const _hoisted_38 = /* @__PURE__ */ createBaseVNode("a", {
  class: "header-anchor",
  href: "#size",
  "aria-hidden": "true"
}, "#", -1);
const _hoisted_39 = /* @__PURE__ */ createBaseVNode("code", null, "size", -1);
const _hoisted_40 = /* @__PURE__ */ createBaseVNode("code", null, "BulmaSize", -1);
const _hoisted_41 = /* @__PURE__ */ createBaseVNode("code", null, "undefined", -1);
const _hoisted_42 = /* @__PURE__ */ createStaticVNode('<p>Display size of the message component</p><h3 id="closebehaviour" tabindex="-1"><a class="header-anchor" href="#closebehaviour" aria-hidden="true">#</a> closeBehaviour</h3><p>Type: <code>boolean</code> | <code>hide</code> | <code>remove</code></p><p>Default: <code>remove</code></p><p>Behaviour of the message after close button is clicked</p><h2 id="emits" tabindex="-1"><a class="header-anchor" href="#emits" aria-hidden="true">#</a> Emits</h2><h3 id="closemsg" tabindex="-1"><a class="header-anchor" href="#closemsg" aria-hidden="true">#</a> <code>closeMsg</code></h3><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">closeMsg</span><span class="token punctuation">(</span>event<span class="token operator">:</span> Event<span class="token punctuation">,</span> msgContainer<span class="token operator">:</span> HTMLElement<span class="token punctuation">,</span> deleteBtn<span class="token operator">:</span> HTMLButtonElement<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n</code></pre></div><p>Emitted when the message is closed; when the close button is clicked.</p><ul><li><code>event</code> is the event that triggered the close;</li><li><code>msgContainer</code> is the message container element.</li><li><code>deleteBtn</code> is the close button element.</li></ul><p>If you had set the <code>closeBehaviour</code> prop to <code>hide</code>, you can use the <code>deleteBtn</code> click event to show the message again; it works as a toggle.</p>', 11);
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
    createBaseVNode("h3", _hoisted_11, [
      _hoisted_12,
      createTextVNode(),
      createVNode(_component_RouterLink, { to: "/types/common_types.html#tag" }, {
        default: withCtx(() => [
          createTextVNode("containerTag")
        ]),
        _: 1
      })
    ]),
    _hoisted_13,
    _hoisted_14,
    _hoisted_15,
    createBaseVNode("h3", _hoisted_16, [
      _hoisted_17,
      createTextVNode(),
      createVNode(_component_RouterLink, { to: "/types/common_types.html#tag" }, {
        default: withCtx(() => [
          createTextVNode("headingTag")
        ]),
        _: 1
      })
    ]),
    _hoisted_18,
    createBaseVNode("h3", _hoisted_28, [
      _hoisted_29,
      createTextVNode(),
      createVNode(_component_RouterLink, { to: "/types/common_types.html#tag" }, {
        default: withCtx(() => [
          createTextVNode("bodyTag")
        ]),
        _: 1
      })
    ]),
    _hoisted_30,
    _hoisted_31,
    _hoisted_32,
    _hoisted_33,
    createBaseVNode("p", null, [
      createTextVNode("Type: "),
      createVNode(_component_RouterLink, { to: "/types/common_types.html#bulmacolour" }, {
        default: withCtx(() => [
          _hoisted_34
        ]),
        _: 1
      }),
      createTextVNode(" | "),
      _hoisted_35
    ]),
    _hoisted_36,
    createBaseVNode("h3", _hoisted_37, [
      _hoisted_38,
      createTextVNode(),
      createVNode(_component_RouterLink, { to: "/types/common_types.html#bulmasize" }, {
        default: withCtx(() => [
          _hoisted_39
        ]),
        _: 1
      })
    ]),
    createBaseVNode("p", null, [
      createTextVNode("Type: "),
      createVNode(_component_RouterLink, { to: "/types/common_types.html#bulmasize" }, {
        default: withCtx(() => [
          _hoisted_40
        ]),
        _: 1
      }),
      createTextVNode(" | "),
      _hoisted_41
    ]),
    _hoisted_42
  ]);
}
const BulmaMessage_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "BulmaMessage.html.vue"]]);
export {
  BulmaMessage_html as default
};
