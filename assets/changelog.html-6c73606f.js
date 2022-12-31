import { _ as _export_sfc, N as resolveComponent, p as openBlock, q as createElementBlock, S as createBaseVNode, v as createTextVNode, O as createVNode, a2 as createStaticVNode } from "./framework-58335e88.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "changelog",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#changelog",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" Changelog")
], -1);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("p", null, "All notable changes to this project will be documented in this file.", -1);
const _hoisted_3 = {
  href: "https://keepachangelog.com/en/1.0.0/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_4 = {
  href: "https://semver.org/spec/v2.0.0.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_5 = /* @__PURE__ */ createStaticVNode('<h2 id="_0-0-0-7-1-2022-12-14" tabindex="-1"><a class="header-anchor" href="#_0-0-0-7-1-2022-12-14" aria-hidden="true">#</a> [0.0.0-7.1] - 2022-12-14</h2><h3 id="added" tabindex="-1"><a class="header-anchor" href="#added" aria-hidden="true">#</a> Added</h3><ul><li>Option to pass slots to component items in navbar dropdowns</li></ul><h3 id="fixed" tabindex="-1"><a class="header-anchor" href="#fixed" aria-hidden="true">#</a> Fixed</h3><ul><li>Export of types in types.ts for package</li><li>Fixed navabr activation method on item click</li><li>Button prop/ButtonColour type to include all colours + text + ghost</li></ul><h2 id="_0-0-0-7-2022-12-13" tabindex="-1"><a class="header-anchor" href="#_0-0-0-7-2022-12-13" aria-hidden="true">#</a> [0.0.0-7] - 2022-12-13</h2><h3 id="added-1" tabindex="-1"><a class="header-anchor" href="#added-1" aria-hidden="true">#</a> Added</h3><ul><li>Added <code>BulmaFormField</code>, <code>BulmaFormControl</code>, and <code>BulmaFormControlGroup</code> components</li></ul><h3 id="changed" tabindex="-1"><a class="header-anchor" href="#changed" aria-hidden="true">#</a> Changed</h3><ul><li>Typescript defintions to include comments/documentation of props, types, functions, etc.</li></ul><h2 id="_0-0-0-6-1-2022-12-13" tabindex="-1"><a class="header-anchor" href="#_0-0-0-6-1-2022-12-13" aria-hidden="true">#</a> [0.0.0-6.1] - 2022-12-13</h2><h3 id="fixed-1" tabindex="-1"><a class="header-anchor" href="#fixed-1" aria-hidden="true">#</a> Fixed</h3><ul><li>Fixed exports in the <code>package.json</code>; not exporting <code>dist/vuebulma</code></li></ul><h2 id="_0-0-0-6-2022-12-13" tabindex="-1"><a class="header-anchor" href="#_0-0-0-6-2022-12-13" aria-hidden="true">#</a> [0.0.0-6] - 2022-12-13</h2><h3 id="changed-1" tabindex="-1"><a class="header-anchor" href="#changed-1" aria-hidden="true">#</a> Changed</h3><ul><li>Typescript definitions for components props, props that use custom types should now be exported as well.</li></ul>', 16);
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    _hoisted_2,
    createBaseVNode("p", null, [
      createTextVNode("The format is based on "),
      createBaseVNode("a", _hoisted_3, [
        createTextVNode("Keep a Changelog"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(", and this project adheres to "),
      createBaseVNode("a", _hoisted_4, [
        createTextVNode("Semantic Versioning"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(".")
    ]),
    _hoisted_5
  ]);
}
const changelog_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "changelog.html.vue"]]);
export {
  changelog_html as default
};
