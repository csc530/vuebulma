import { _ as _export_sfc, N as resolveComponent, p as openBlock, q as createElementBlock, S as createBaseVNode, v as createTextVNode, O as createVNode, W as withCtx, a2 as createStaticVNode } from "./framework-58335e88.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "bulmaselect",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#bulmaselect",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" BulmaSelect")
], -1);
const _hoisted_2 = {
  href: "https://bulma.io/documentation/form/select/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("a", { href: "../../src/components/form/BulmaSelect.vue" }, "Source code", -1);
const _hoisted_4 = /* @__PURE__ */ createStaticVNode('<p>An input select</p><h2 id="slots" tabindex="-1"><a class="header-anchor" href="#slots" aria-hidden="true">#</a> Slots</h2><h3 id="default" tabindex="-1"><a class="header-anchor" href="#default" aria-hidden="true">#</a> default</h3><p>The <code>option</code>s and <code>optgroup</code>s for the select element.</p><h2 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h2>', 5);
const _hoisted_9 = {
  id: "tag",
  tabindex: "-1"
};
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("a", {
  class: "header-anchor",
  href: "#tag",
  "aria-hidden": "true"
}, "#", -1);
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("Type: "),
  /* @__PURE__ */ createBaseVNode("code", null, "string"),
  /* @__PURE__ */ createTextVNode(" | "),
  /* @__PURE__ */ createBaseVNode("code", null, "undefined")
], -1);
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "color",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#color",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" color")
], -1);
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("code", null, "BulmaColours", -1);
const _hoisted_14 = /* @__PURE__ */ createBaseVNode("code", null, "undefined", -1);
const _hoisted_15 = /* @__PURE__ */ createBaseVNode("h3", {
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
const _hoisted_16 = /* @__PURE__ */ createBaseVNode("code", null, "BulmaSizes", -1);
const _hoisted_17 = /* @__PURE__ */ createBaseVNode("code", null, "undefined", -1);
const _hoisted_18 = /* @__PURE__ */ createStaticVNode('<p>The size of the select and options</p><h3 id="isloading" tabindex="-1"><a class="header-anchor" href="#isloading" aria-hidden="true">#</a> isLoading</h3><p>Type: <code>boolean</code> | <code>undefined</code></p><p>When <code>true</code>, the select is in a loading state and shows a spinner.</p><h3 id="isrounded" tabindex="-1"><a class="header-anchor" href="#isrounded" aria-hidden="true">#</a> isRounded</h3><p>Type: <code>boolean</code>| <code>undefined</code></p><p>When <code>true</code>, the select is rounded.</p><h3 id="isstatic" tabindex="-1"><a class="header-anchor" href="#isstatic" aria-hidden="true">#</a> isStatic</h3><p>Type: <code>boolean</code> | <code>undefined</code></p><p>When <code>true</code>, the select is styled statically; like a label, un-editable</p><h3 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> options</h3><p>Type: <code>{ text: string, value: any }[]</code> | <code>string[]</code> | <code>undefined</code></p><p>The options for the select element.</p><p>If the options are strings, the value will be the same as the text. If the options are objects, the value will be the <code>value</code> property of the object and the text will be the <code>text</code> property of the object.</p><p>Any slot content will override this prop.</p><h3 id="modelvalue" tabindex="-1"><a class="header-anchor" href="#modelvalue" aria-hidden="true">#</a> modelValue</h3><p>Type: <code>any</code></p><h3 id="isfullwidth" tabindex="-1"><a class="header-anchor" href="#isfullwidth" aria-hidden="true">#</a> isFullWidth</h3>', 18);
const _hoisted_36 = /* @__PURE__ */ createBaseVNode("code", null, "BulmaFormControl", -1);
const _hoisted_37 = /* @__PURE__ */ createBaseVNode("code", null, "isExpanded", -1);
const _hoisted_38 = /* @__PURE__ */ createBaseVNode("code", null, "boolean", -1);
const _hoisted_39 = /* @__PURE__ */ createBaseVNode("code", null, "undefined", -1);
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
      })
    ]),
    _hoisted_11,
    _hoisted_12,
    createBaseVNode("p", null, [
      createTextVNode("Type: "),
      createVNode(_component_RouterLink, { to: "/types/common_types.html#bulmacolours" }, {
        default: withCtx(() => [
          _hoisted_13
        ]),
        _: 1
      }),
      createTextVNode(" | "),
      _hoisted_14
    ]),
    _hoisted_15,
    createBaseVNode("p", null, [
      createTextVNode("Type: "),
      createVNode(_component_RouterLink, { to: "/types/common_types.html#bulmasizes" }, {
        default: withCtx(() => [
          _hoisted_16
        ]),
        _: 1
      }),
      createTextVNode(" | "),
      _hoisted_17
    ]),
    _hoisted_18,
    createBaseVNode("p", null, [
      createBaseVNode("strong", null, [
        createTextVNode("Requires Must pair with "),
        createVNode(_component_RouterLink, { to: "/components/BulmaFormInputs.html#bulmaformcontrol" }, {
          default: withCtx(() => [
            _hoisted_36
          ]),
          _: 1
        }),
        createTextVNode(" with "),
        createVNode(_component_RouterLink, { to: "/components/BulmaFormInputs.html#isexpanded" }, {
          default: withCtx(() => [
            _hoisted_37,
            createTextVNode(" prop")
          ]),
          _: 1
        }),
        createTextVNode(" to work; makes select expand to fill its parent")
      ]),
      createTextVNode(" Type: "),
      _hoisted_38,
      createTextVNode(" | "),
      _hoisted_39
    ])
  ]);
}
const BulmaSelect_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "BulmaSelect.html.vue"]]);
export {
  BulmaSelect_html as default
};
