import { _ as _export_sfc, N as resolveComponent, p as openBlock, q as createElementBlock, S as createBaseVNode, v as createTextVNode, O as createVNode, W as withCtx, a2 as createStaticVNode } from "./framework-58335e88.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "bulmaimage",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#bulmaimage",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" BulmaImage")
], -1);
const _hoisted_2 = {
  href: "https://bulma.io/documentation/elements/image/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("a", { href: "../../src/components/BulmaImage.vue" }, "Component source", -1);
const _hoisted_4 = /* @__PURE__ */ createStaticVNode('<p>An element to display an image with Bulma classes; An img with a container to hold it&#39;s size allowing for no page jumping when it&#39;s loaded.</p><h2 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h2><h3 id="dimension" tabindex="-1"><a class="header-anchor" href="#dimension" aria-hidden="true">#</a> dimension</h3><p>Type: <a href="../types/bulmadimensions"><code>BulmaDimensions</code></a> | <code>undefined</code></p><p>Standard dimension for the image container to be from 16 to 128</p><h3 id="isrounded" tabindex="-1"><a class="header-anchor" href="#isrounded" aria-hidden="true">#</a> isRounded</h3><p>Type: <code>boolean</code> | <code>undefined</code></p><p>If the container should be rounder; clipping whatever does not fit into the image</p><h3 id="aspectratio" tabindex="-1"><a class="header-anchor" href="#aspectratio" aria-hidden="true">#</a> aspectRatio</h3>', 9);
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("code", null, "BulmaAspectRatios", -1);
const _hoisted_14 = /* @__PURE__ */ createBaseVNode("code", null, "undefined", -1);
const _hoisted_15 = /* @__PURE__ */ createStaticVNode('<p><em>Requires <strong>width</strong> attribute to be set</em> Sets the height based on given width and aspect ratio.</p><h3 id="src" tabindex="-1"><a class="header-anchor" href="#src" aria-hidden="true">#</a> src</h3><p>Type: <code>string</code> | <code>undefined</code></p><p>Src attribute for the img element</p><h3 id="alt" tabindex="-1"><a class="header-anchor" href="#alt" aria-hidden="true">#</a> alt</h3><p><em>Use recommended</em></p><p>Type: <code>string</code> | <code>undefined</code></p><p>Alt attribute for the img element;</p><h3 id="caption" tabindex="-1"><a class="header-anchor" href="#caption" aria-hidden="true">#</a> caption</h3><p>Type: <code>string</code> | <code>undefined</code></p><p>Optional caption text to display in figcaption</p><h2 id="additional-information" tabindex="-1"><a class="header-anchor" href="#additional-information" aria-hidden="true">#</a> Additional information</h2><p>The <code>src</code> and <code>alt</code> will be used if there is no present slot content.</p>', 13);
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
          _hoisted_13
        ]),
        _: 1
      }),
      createTextVNode(" | "),
      _hoisted_14
    ]),
    _hoisted_15
  ]);
}
const BulmaImage_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "BulmaImage.html.vue"]]);
export {
  BulmaImage_html as default
};
