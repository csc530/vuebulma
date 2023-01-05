import { _ as _export_sfc, N as resolveComponent, p as openBlock, q as createElementBlock, S as createBaseVNode, v as createTextVNode, O as createVNode, W as withCtx, a2 as createStaticVNode } from "./framework-da6c0ff9.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "h1",
  {
    id: "bulmaimage",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#bulmaimage",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" BulmaImage")
  ],
  -1
  /* HOISTED */
);
const _hoisted_2 = {
  href: "https://bulma.io/documentation/elements/image/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_3 = /* @__PURE__ */ createBaseVNode(
  "a",
  { href: "../../src/components/BulmaImage.vue" },
  "Component source",
  -1
  /* HOISTED */
);
const _hoisted_4 = /* @__PURE__ */ createStaticVNode('<p>An img with a container to hold maintain its size allowing for no page jumping when it&#39;s loaded.</p><h2 id="slots" tabindex="-1"><a class="header-anchor" href="#slots" aria-hidden="true">#</a> Slots</h2><h3 id="default" tabindex="-1"><a class="header-anchor" href="#default" aria-hidden="true">#</a> default</h3><p>The image to display.</p><h3 id="figcaption" tabindex="-1"><a class="header-anchor" href="#figcaption" aria-hidden="true">#</a> figcaption</h3><p>The caption to display for the image.</p><h2 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h2><h3 id="dimensions" tabindex="-1"><a class="header-anchor" href="#dimensions" aria-hidden="true">#</a> dimensions</h3><p>Type: <a href="../types/BulmaDimension"><code>BulmaDimension</code></a> | <code>undefined</code></p><p>Standard dimensions for the image container to be from 16 to 128</p><h3 id="isrounded" tabindex="-1"><a class="header-anchor" href="#isrounded" aria-hidden="true">#</a> isRounded</h3><p>Type: <code>boolean</code> | <code>undefined</code></p><p>If the container should be rounder; clipping whatever does not fit into the image</p><h3 id="aspectratio" tabindex="-1"><a class="header-anchor" href="#aspectratio" aria-hidden="true">#</a> aspectRatio</h3>', 14);
const _hoisted_18 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "BulmaAspectRatio",
  -1
  /* HOISTED */
);
const _hoisted_19 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "undefined",
  -1
  /* HOISTED */
);
const _hoisted_20 = /* @__PURE__ */ createStaticVNode('<p><em>Requires <strong>width</strong> attribute to be set</em> Sets the height based on given width and aspect ratio.</p><h3 id="src" tabindex="-1"><a class="header-anchor" href="#src" aria-hidden="true">#</a> src</h3><p>Type: <code>string</code> | <code>undefined</code></p><p>Src attribute for the img element</p><h3 id="alt" tabindex="-1"><a class="header-anchor" href="#alt" aria-hidden="true">#</a> alt</h3><p><em>Use recommended</em></p><p>Type: <code>string</code> | <code>undefined</code></p><p>Alt attribute for the img element;</p><h3 id="caption" tabindex="-1"><a class="header-anchor" href="#caption" aria-hidden="true">#</a> caption</h3><p>Type: <code>string</code> | <code>undefined</code></p><p>Optional caption text to display in figcaption</p><h2 id="additional-information" tabindex="-1"><a class="header-anchor" href="#additional-information" aria-hidden="true">#</a> Additional information</h2><p>The <code>src</code> and <code>alt</code> will be used if there is no present slot content.</p>', 13);
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
      createVNode(_component_RouterLink, { to: "/types/BulmaAspectRatio.html" }, {
        default: withCtx(() => [
          _hoisted_18
        ]),
        _: 1
        /* STABLE */
      }),
      createTextVNode(" | "),
      _hoisted_19
    ]),
    _hoisted_20
  ]);
}
const BulmaImage_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "BulmaImage.html.vue"]]);
export {
  BulmaImage_html as default
};
