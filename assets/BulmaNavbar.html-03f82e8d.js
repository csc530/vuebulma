import { _ as _export_sfc, N as resolveComponent, p as openBlock, q as createElementBlock, S as createBaseVNode, v as createTextVNode, O as createVNode, W as withCtx, a2 as createStaticVNode } from "./framework-da6c0ff9.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "h1",
  {
    id: "bulmanavbar",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#bulmanavbar",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" BulmaNavbar")
  ],
  -1
  /* HOISTED */
);
const _hoisted_2 = {
  href: "https://bulma.io/documentation/components/navbar/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_3 = /* @__PURE__ */ createBaseVNode(
  "a",
  { href: "../../src/components/containers/navbar/BulmaNavbar.vue" },
  "Component source",
  -1
  /* HOISTED */
);
const _hoisted_4 = /* @__PURE__ */ createStaticVNode('<p>The Navbar component with native click handler to open and close hamburger menus.</p><h2 id="slots" tabindex="-1"><a class="header-anchor" href="#slots" aria-hidden="true">#</a> Slots</h2><ul><li>start-items</li><li>middle-items</li><li>end-items</li></ul><p>Each of these slots are optional and are meant to format their related items within the navbar. the item themselves are bound to <code>data</code> in the slot.</p><p>Example:</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BulmaNavbar</span> <span class="token attr-name">:start-items</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>items<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#start-items</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ data }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>{{ data.title }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>\n			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pre</span><span class="token punctuation">&gt;</span></span>{{ data.important }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>pre</span><span class="token punctuation">&gt;</span></span>\n		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>BulmaNavbar</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n	<span class="token keyword">import</span> <span class="token punctuation">{</span>ref<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>\n	<span class="token keyword">import</span> <span class="token punctuation">{</span>BulmaNavbar<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@csc530/vuebulma&#39;</span>\n\n	<span class="token keyword">const</span> items <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">[</span>\n		<span class="token punctuation">{</span><span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;Hello&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">important</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n		<span class="token punctuation">{</span><span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;World&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">important</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">}</span>\n	<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h2><h3 id="colour" tabindex="-1"><a class="header-anchor" href="#colour" aria-hidden="true">#</a> colour</h3>', 8);
const _hoisted_12 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "BulmaColour",
  -1
  /* HOISTED */
);
const _hoisted_13 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "undefined",
  -1
  /* HOISTED */
);
const _hoisted_14 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "The colour of the navbar.",
  -1
  /* HOISTED */
);
const _hoisted_15 = {
  id: "startitems",
  tabindex: "-1"
};
const _hoisted_16 = /* @__PURE__ */ createBaseVNode(
  "a",
  {
    class: "header-anchor",
    href: "#startitems",
    "aria-hidden": "true"
  },
  "#",
  -1
  /* HOISTED */
);
const _hoisted_17 = {
  href: "https://bulma.io/documentation/components/navbar/#navbar-brand",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_18 = /* @__PURE__ */ createStaticVNode('<p>Type: <code>any[]</code></p><p>Items which are always visible shown on the left hand side (start/brand) of the navbar. Corresponds to the <code>navbar-brand</code>.</p><h3 id="startitemtag" tabindex="-1"><a class="header-anchor" href="#startitemtag" aria-hidden="true">#</a> startItemTag</h3><p>Type: <code>div</code> | <code>a</code></p><p>Default: <code>a</code></p><p>Tag to wrap brand items in</p><h3 id="middleitems" tabindex="-1"><a class="header-anchor" href="#middleitems" aria-hidden="true">#</a> middleItems</h3><p>Type: <code>any[]</code></p>', 8);
const _hoisted_26 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "navbar-start",
  -1
  /* HOISTED */
);
const _hoisted_27 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "navbar-menu",
  -1
  /* HOISTED */
);
const _hoisted_28 = {
  href: "https://bulma.io/documentation/components/navbar/#navbar-start-and-navbar-end",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_29 = /* @__PURE__ */ createBaseVNode(
  "h3",
  {
    id: "enditems",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#enditems",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" endItems")
  ],
  -1
  /* HOISTED */
);
const _hoisted_30 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("Type: "),
    /* @__PURE__ */ createBaseVNode("code", null, "any[]")
  ],
  -1
  /* HOISTED */
);
const _hoisted_31 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "navbar-end",
  -1
  /* HOISTED */
);
const _hoisted_32 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "navbar-menu",
  -1
  /* HOISTED */
);
const _hoisted_33 = {
  href: "https://bulma.io/documentation/components/navbar/#navbar-start-and-navbar-end",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_34 = /* @__PURE__ */ createStaticVNode('<h3 id="middleitemtag" tabindex="-1"><a class="header-anchor" href="#middleitemtag" aria-hidden="true">#</a> middleItemTag</h3><p>Type: <code>div</code> | <code>a</code></p><p>Default: <code>a</code></p><p>The tag to be used for the middle items. Defaults to <code>a</code>.</p><h3 id="enditemtag" tabindex="-1"><a class="header-anchor" href="#enditemtag" aria-hidden="true">#</a> endItemTag</h3><p>Type: <code>div</code> | <code>a</code></p><p>Default: <code>a</code></p><p>The tag to be used for the end items.</p>', 8);
const _hoisted_42 = {
  id: "istransparent",
  tabindex: "-1"
};
const _hoisted_43 = /* @__PURE__ */ createBaseVNode(
  "a",
  {
    class: "header-anchor",
    href: "#istransparent",
    "aria-hidden": "true"
  },
  "#",
  -1
  /* HOISTED */
);
const _hoisted_44 = {
  href: "https://bulma.io/documentation/components/navbar/#transparent-navbar",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_45 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("Type: "),
    /* @__PURE__ */ createBaseVNode("code", null, "boolean"),
    /* @__PURE__ */ createTextVNode(" | "),
    /* @__PURE__ */ createBaseVNode("code", null, "undefined")
  ],
  -1
  /* HOISTED */
);
const _hoisted_46 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  [
    /* @__PURE__ */ createTextVNode("Default: "),
    /* @__PURE__ */ createBaseVNode("code", null, "false")
  ],
  -1
  /* HOISTED */
);
const _hoisted_47 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Whether the navbar should have a transparent background (colour).",
  -1
  /* HOISTED */
);
const _hoisted_48 = {
  id: "isspaced",
  tabindex: "-1"
};
const _hoisted_49 = /* @__PURE__ */ createBaseVNode(
  "a",
  {
    class: "header-anchor",
    href: "#isspaced",
    "aria-hidden": "true"
  },
  "#",
  -1
  /* HOISTED */
);
const _hoisted_50 = {
  href: "https://bulma.io/documentation/components/navbar/#navbar-helper-classes",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_51 = /* @__PURE__ */ createStaticVNode('<p>Type: <code>boolean</code> | <code>undefined</code></p><p>Default: <code>false</code></p><p>Whether the navbar should have an increased spacing between the items.</p><h3 id="istab" tabindex="-1"><a class="header-anchor" href="#istab" aria-hidden="true">#</a> isTab</h3><p>Type: <code>boolean</code> | <code>menu</code> | <code>start</code> | <code>end</code> | <code>brand</code> | <code>brand&amp;end</code> | <code>all</code></p><p>Default: <code>false</code></p><p>Determines if the navbar items will have a tabbed style. If true all items will be tabbed and if false all items will not be tabbed. If a string is passed, the navbar items will be tabbed according to the string.</p><p>If the string is <code>menu</code> string will tab the <code>navbar-menu</code> items and the <code>start</code> string will tab the <code>navbar-start</code> items and so on and so forth.</p>', 8);
const _hoisted_59 = {
  id: "isfixed",
  tabindex: "-1"
};
const _hoisted_60 = /* @__PURE__ */ createBaseVNode(
  "a",
  {
    class: "header-anchor",
    href: "#isfixed",
    "aria-hidden": "true"
  },
  "#",
  -1
  /* HOISTED */
);
const _hoisted_61 = {
  href: "https://bulma.io/documentation/components/navbar/#fixed-navbar",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_62 = /* @__PURE__ */ createStaticVNode('<p>Type: <code>top</code> | <code>bottom</code> | <code>false</code>,</p><p>Default: <code>false</code></p><p>Determines if the navbar should be fixed to the top or bottom of the page. If <code>false</code> the navbar will not be fixed. This will also add the <code>is-fixed-top</code> or <code>is-fixed-bottom</code> class to the document&#39;s <code>html</code> element.</p><h3 id="activateonclick" tabindex="-1"><a class="header-anchor" href="#activateonclick" aria-hidden="true">#</a> activateOnClick</h3><p>Type: <code>boolean</code> | <code>singly</code></p><p>Default: <code>false</code></p><p>Whether to activate the navbar items on click. If <code>singly</code> is passed, only one item will be active at a time.</p><h2 id="additional-information" tabindex="-1"><a class="header-anchor" href="#additional-information" aria-hidden="true">#</a> Additional information</h2><p>When working with the <code>BulmaNavbar</code> component, you can use the <code>BulmaNavbarItem</code> helper type when passing in items. This type has the isComponent property to render passed in Vue components as is to the navbar.</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BulmaNavbar</span> <span class="token attr-name">:items</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>items<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n	<span class="token keyword">import</span> <span class="token punctuation">{</span>BulmaNavBarItem<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@csc530/vuebulma/types&#39;</span>\n	<span class="token comment">//If you are going to dynamically render component from component definitions, it must be explicitly imported</span>\n	<span class="token keyword">import</span> <span class="token punctuation">{</span>BulmaImage<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@csc530/vuebulma&quot;</span><span class="token punctuation">;</span>\n	<span class="token keyword">import</span> myCustomComponent <span class="token keyword">from</span> <span class="token string">&quot;./MyCustomComponent.vue&quot;</span><span class="token punctuation">;</span>\n\n	<span class="token keyword">const</span> customComponent <span class="token operator">=</span> <span class="token punctuation">{</span>\n		<span class="token literal-property property">component</span><span class="token operator">:</span> <span class="token string">&#39;myCustomComponent&#39;</span><span class="token punctuation">,</span>\n		<span class="token comment">// to apply component props/attributes, use the props property</span>\n		<span class="token literal-property property">isComponent</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n		<span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n			<span class="token literal-property property">customProp</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n			<span class="token literal-property property">cutomProp2</span><span class="token operator">:</span> <span class="token string">&#39;hello&#39;</span>\n		<span class="token punctuation">}</span>\n	<span class="token punctuation">}</span><span class="token punctuation">;</span>\n	<span class="token keyword">const</span> bulmaImg <span class="token operator">=</span> <span class="token punctuation">{</span>\n		<span class="token literal-property property">component</span><span class="token operator">:</span> BulmaImage<span class="token punctuation">,</span>\n		<span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">src</span><span class="token operator">:</span> <span class="token string">&#39;https://bulma.io/images/bulma-logo.png&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n		<span class="token literal-property property">isComponent</span><span class="token operator">:</span> <span class="token boolean">true</span>\n	<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n	<span class="token keyword">const</span> <span class="token literal-property property">items</span><span class="token operator">:</span> BulmaNavBarItem<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>customComponent<span class="token punctuation">,</span> bulmaImg<span class="token punctuation">]</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Or, you can create HTMLElements and render them as such.</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BulmaNavbar</span> <span class="token attr-name">:start-items</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>items<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n	<span class="token keyword">import</span> <span class="token punctuation">{</span>BulmaNavBarItem<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@csc530/vuebulma/types&#39;</span><span class="token punctuation">;</span>\n\n	<span class="token keyword">const</span> fancyButton <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;button&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n	fancyButton<span class="token punctuation">.</span>innerText <span class="token operator">=</span> <span class="token string">&#39;Fancy Button&#39;</span><span class="token punctuation">;</span>\n	fancyButton<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&#39;button&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;is-primary&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n	fancyButton<span class="token punctuation">.</span>style<span class="token punctuation">.</span>border <span class="token operator">=</span> <span class="token string">&#39;thick #ccad46 ridge&#39;</span><span class="token punctuation">;</span>\n\n	<span class="token comment">// Navbar will test if it&#39;s an HTMLElement</span>\n	<span class="token comment">// if so render it as is</span>\n	<span class="token keyword">const</span> <span class="token literal-property property">items</span><span class="token operator">:</span> BulmaNavBarItem<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>\n		document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n		fancyButton\n	<span class="token punctuation">]</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This is <strong>not <em>highly</em> recommended</strong> as the HTML is <a href="../.././src/components/containers/navbar/BulmaNavbarItem.vue#L39">basically injected into the DOM</a>.</p>', 13);
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  const _component_RouterLink = resolveComponent("RouterLink");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_2, [
        createTextVNode("Bulma Documentation"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      _hoisted_3
    ]),
    _hoisted_4,
    createBaseVNode("p", null, [
      createTextVNode("Type: "),
      createVNode(_component_RouterLink, { to: "/types/common_types.html#BulmaColour" }, {
        default: withCtx(() => [
          _hoisted_12
        ]),
        _: 1
        /* STABLE */
      }),
      createTextVNode(" | "),
      _hoisted_13
    ]),
    _hoisted_14,
    createBaseVNode("h3", _hoisted_15, [
      _hoisted_16,
      createTextVNode(),
      createBaseVNode("a", _hoisted_17, [
        createTextVNode("startItems"),
        createVNode(_component_ExternalLinkIcon)
      ])
    ]),
    _hoisted_18,
    createBaseVNode("p", null, [
      createTextVNode("The items to be displayed in the middle of the navbar. This refers to the "),
      _hoisted_26,
      createTextVNode(" items in the "),
      _hoisted_27,
      createTextVNode(" according to the "),
      createBaseVNode("a", _hoisted_28, [
        createTextVNode("Bulma documentation"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(".")
    ]),
    _hoisted_29,
    _hoisted_30,
    createBaseVNode("p", null, [
      createTextVNode("The items to be displayed in the end of the navbar. This refers to the "),
      _hoisted_31,
      createTextVNode(" items in the "),
      _hoisted_32,
      createTextVNode(" according to the "),
      createBaseVNode("a", _hoisted_33, [
        createTextVNode("Bulma documentation"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(".")
    ]),
    _hoisted_34,
    createBaseVNode("h3", _hoisted_42, [
      _hoisted_43,
      createTextVNode(),
      createBaseVNode("a", _hoisted_44, [
        createTextVNode("isTransparent"),
        createVNode(_component_ExternalLinkIcon)
      ])
    ]),
    _hoisted_45,
    _hoisted_46,
    _hoisted_47,
    createBaseVNode("h3", _hoisted_48, [
      _hoisted_49,
      createTextVNode(),
      createBaseVNode("a", _hoisted_50, [
        createTextVNode("isSpaced"),
        createVNode(_component_ExternalLinkIcon)
      ])
    ]),
    _hoisted_51,
    createBaseVNode("h3", _hoisted_59, [
      _hoisted_60,
      createTextVNode(),
      createBaseVNode("a", _hoisted_61, [
        createTextVNode("isFixed"),
        createVNode(_component_ExternalLinkIcon)
      ])
    ]),
    _hoisted_62
  ]);
}
const BulmaNavbar_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "BulmaNavbar.html.vue"]]);
export {
  BulmaNavbar_html as default
};
