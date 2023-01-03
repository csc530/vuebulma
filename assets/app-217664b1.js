import { d as defineAsyncComponent, r as ref, a as readonly, b as reactive, c as defineComponent, i as isString$1, e as isArray, f as dedupeHead, g as resolveLocalePath, o as onMounted, h as computed, j as h, k as inject, l as isLinkHttp, m as removeLeadingSlash, u as useRouter, n as onBeforeUnmount, T as Transition, s as setupDevtoolsPlugin, p as openBlock, q as createElementBlock, t as renderSlot, v as createTextVNode, w as toDisplayString, x as normalizeClass, y as normalizeStyle, _ as _export_sfc, z as isRef, A as unref, B as getCurrentScope, C as onScopeDispose, D as watch, E as getCurrentInstance, F as nextTick, G as shallowRef, H as watchEffect, I as provide, J as onUnmounted, K as isFunction$1, L as isPlainObject, M as useRoute, N as resolveComponent, O as createVNode, P as Fragment, Q as renderList, R as createCommentVNode, S as createBaseVNode, U as toRefs, V as createBlock, W as withCtx, X as mergeProps, Y as isLinkMailto, Z as isLinkTel, $ as withDirectives, a0 as vShow, a1 as removeEndingSlash, a2 as createStaticVNode, a3 as withKeys, a4 as pushScopeId, a5 as popScopeId, a6 as onUpdated, a7 as createApp, a8 as createSSRApp, a9 as RouterView, aa as createRouter, ab as START_LOCATION_NORMALIZED, ac as createWebHistory } from "./framework-58335e88.js";
const scriptRel = "modulepreload";
const assetsURL = function(dep) {
  return "/vuebulma/" + dep;
};
const seen = {};
const __vitePreload = function preload(baseModule, deps, importerUrl) {
  if (!deps || deps.length === 0) {
    return baseModule();
  }
  const links = document.getElementsByTagName("link");
  return Promise.all(deps.map((dep) => {
    dep = assetsURL(dep);
    if (dep in seen)
      return;
    seen[dep] = true;
    const isCss = dep.endsWith(".css");
    const cssSelector = isCss ? '[rel="stylesheet"]' : "";
    const isBaseRelative = !!importerUrl;
    if (isBaseRelative) {
      for (let i = links.length - 1; i >= 0; i--) {
        const link2 = links[i];
        if (link2.href === dep && (!isCss || link2.rel === "stylesheet")) {
          return;
        }
      }
    } else if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
      return;
    }
    const link = document.createElement("link");
    link.rel = isCss ? "stylesheet" : scriptRel;
    if (!isCss) {
      link.as = "script";
      link.crossOrigin = "";
    }
    link.href = dep;
    document.head.appendChild(link);
    if (isCss) {
      return new Promise((res, rej) => {
        link.addEventListener("load", res);
        link.addEventListener("error", () => rej(new Error(`Unable to preload CSS for ${dep}`)));
      });
    }
  })).then(() => baseModule());
};
const pagesData$1 = {
  "v-ce159204": () => __vitePreload(() => import(
    /* webpackChunkName: "v-ce159204" */
    "./changelog.html-b360db2c.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-1b7876ee": () => __vitePreload(() => import(
    /* webpackChunkName: "v-1b7876ee" */
    "./considerations.html-201dc8e4.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-194812e8": () => __vitePreload(() => import(
    /* webpackChunkName: "v-194812e8" */
    "./getting_started.html-6fa59753.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-8daa1a0e": () => __vitePreload(() => import(
    /* webpackChunkName: "v-8daa1a0e" */
    "./index.html-4b8bb546.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-bba92d0c": () => __vitePreload(() => import(
    /* webpackChunkName: "v-bba92d0c" */
    "./todo.html-8728b2d3.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-12f2a6b9": () => __vitePreload(() => import(
    /* webpackChunkName: "v-12f2a6b9" */
    "./BulmaBlock.html-08ac9cfe.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-c785990a": () => __vitePreload(() => import(
    /* webpackChunkName: "v-c785990a" */
    "./BulmaBox.html-c3a42455.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-0450a889": () => __vitePreload(() => import(
    /* webpackChunkName: "v-0450a889" */
    "./BulmaBreadcrumb.html-2d17847d.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-2a4c8f8c": () => __vitePreload(() => import(
    /* webpackChunkName: "v-2a4c8f8c" */
    "./BulmaButton.html-fdd2d8ca.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-3a35f5f6": () => __vitePreload(() => import(
    /* webpackChunkName: "v-3a35f5f6" */
    "./BulmaButtons.html-225879a2.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-66cf740a": () => __vitePreload(() => import(
    /* webpackChunkName: "v-66cf740a" */
    "./BulmaDropdown.html-14ffc029.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-6204c9b8": () => __vitePreload(() => import(
    /* webpackChunkName: "v-6204c9b8" */
    "./BulmaFileInput.html-beaaefe1.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-70ee2eff": () => __vitePreload(() => import(
    /* webpackChunkName: "v-70ee2eff" */
    "./BulmaFormInputs.html-864b3d6b.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-4d6fa1b8": () => __vitePreload(() => import(
    /* webpackChunkName: "v-4d6fa1b8" */
    "./BulmaHeading.html-b414b6c6.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-aebcdfda": () => __vitePreload(() => import(
    /* webpackChunkName: "v-aebcdfda" */
    "./BulmaIcon.html-00647d42.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-704492ab": () => __vitePreload(() => import(
    /* webpackChunkName: "v-704492ab" */
    "./BulmaImage.html-d341e1c6.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-18ea919c": () => __vitePreload(() => import(
    /* webpackChunkName: "v-18ea919c" */
    "./BulmaInput.html-e29c901e.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-befd5226": () => __vitePreload(() => import(
    /* webpackChunkName: "v-befd5226" */
    "./BulmaMenu.html-67502f72.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-282e283f": () => __vitePreload(() => import(
    /* webpackChunkName: "v-282e283f" */
    "./BulmaMessage.html-9a423bc3.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-6675c3c8": () => __vitePreload(() => import(
    /* webpackChunkName: "v-6675c3c8" */
    "./BulmaNavbar.html-030ef8e8.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-608fb8b0": () => __vitePreload(() => import(
    /* webpackChunkName: "v-608fb8b0" */
    "./BulmaSelect.html-cfd9623c.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-fc46f75c": () => __vitePreload(() => import(
    /* webpackChunkName: "v-fc46f75c" */
    "./BulmaTextArea.html-97b64786.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-1020f180": () => __vitePreload(() => import(
    /* webpackChunkName: "v-1020f180" */
    "./index.html-a98e70ef.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-33445b78": () => __vitePreload(() => import(
    /* webpackChunkName: "v-33445b78" */
    "./BulmaAspectRatio.html-adf21bf9.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-094da602": () => __vitePreload(() => import(
    /* webpackChunkName: "v-094da602" */
    "./BulmaButtonColours.html-5c881cea.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-5c73a564": () => __vitePreload(() => import(
    /* webpackChunkName: "v-5c73a564" */
    "./BulmaDimensions.html-d42867c7.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-6afc826a": () => __vitePreload(() => import(
    /* webpackChunkName: "v-6afc826a" */
    "./BulmaHeadingSizes.html-8297a3dc.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-17734178": () => __vitePreload(() => import(
    /* webpackChunkName: "v-17734178" */
    "./BulmaHeadingTypes.html-4f5e51e4.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-950f7708": () => __vitePreload(() => import(
    /* webpackChunkName: "v-950f7708" */
    "./BulmaMenu.html-c5afd043.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-07ac7ba5": () => __vitePreload(() => import(
    /* webpackChunkName: "v-07ac7ba5" */
    "./common_types.html-9eccda95.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-d32669e2": () => __vitePreload(() => import(
    /* webpackChunkName: "v-d32669e2" */
    "./index.html-79ed4a33.js"
  ), true ? [] : void 0).then(({ data }) => data),
  "v-3706649a": () => __vitePreload(() => import(
    /* webpackChunkName: "v-3706649a" */
    "./404.html-f8cf36db.js"
  ), true ? [] : void 0).then(({ data }) => data)
};
const siteData$1 = JSON.parse('{"base":"/vuebulma/","lang":"en-CA","title":"vuebulma Docs","description":"Documentation for @csc530 vuebulma component library","head":[],"locales":{}}');
const pagesComponents = {
  "v-ce159204": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-ce159204" */
    "./changelog.html-6c73606f.js"
  ), true ? ["assets/changelog.html-6c73606f.js","assets/framework-58335e88.js"] : void 0)),
  "v-1b7876ee": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-1b7876ee" */
    "./considerations.html-39703152.js"
  ), true ? ["assets/considerations.html-39703152.js","assets/framework-58335e88.js"] : void 0)),
  "v-194812e8": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-194812e8" */
    "./getting_started.html-0084e56f.js"
  ), true ? ["assets/getting_started.html-0084e56f.js","assets/framework-58335e88.js"] : void 0)),
  "v-8daa1a0e": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-8daa1a0e" */
    "./index.html-dd9b3a3b.js"
  ), true ? ["assets/index.html-dd9b3a3b.js","assets/framework-58335e88.js"] : void 0)),
  "v-bba92d0c": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-bba92d0c" */
    "./todo.html-ce3b0326.js"
  ), true ? ["assets/todo.html-ce3b0326.js","assets/framework-58335e88.js"] : void 0)),
  "v-12f2a6b9": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-12f2a6b9" */
    "./BulmaBlock.html-27b58a3f.js"
  ), true ? ["assets/BulmaBlock.html-27b58a3f.js","assets/framework-58335e88.js"] : void 0)),
  "v-c785990a": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-c785990a" */
    "./BulmaBox.html-eb704a8c.js"
  ), true ? ["assets/BulmaBox.html-eb704a8c.js","assets/framework-58335e88.js"] : void 0)),
  "v-0450a889": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-0450a889" */
    "./BulmaBreadcrumb.html-debb7d08.js"
  ), true ? ["assets/BulmaBreadcrumb.html-debb7d08.js","assets/framework-58335e88.js"] : void 0)),
  "v-2a4c8f8c": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-2a4c8f8c" */
    "./BulmaButton.html-f8fbfcd8.js"
  ), true ? ["assets/BulmaButton.html-f8fbfcd8.js","assets/framework-58335e88.js"] : void 0)),
  "v-3a35f5f6": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-3a35f5f6" */
    "./BulmaButtons.html-f52ae6cc.js"
  ), true ? ["assets/BulmaButtons.html-f52ae6cc.js","assets/framework-58335e88.js"] : void 0)),
  "v-66cf740a": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-66cf740a" */
    "./BulmaDropdown.html-f10f8418.js"
  ), true ? ["assets/BulmaDropdown.html-f10f8418.js","assets/framework-58335e88.js"] : void 0)),
  "v-6204c9b8": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-6204c9b8" */
    "./BulmaFileInput.html-7dc508e0.js"
  ), true ? ["assets/BulmaFileInput.html-7dc508e0.js","assets/framework-58335e88.js"] : void 0)),
  "v-70ee2eff": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-70ee2eff" */
    "./BulmaFormInputs.html-cae21aa5.js"
  ), true ? ["assets/BulmaFormInputs.html-cae21aa5.js","assets/framework-58335e88.js"] : void 0)),
  "v-4d6fa1b8": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-4d6fa1b8" */
    "./BulmaHeading.html-6d8b2797.js"
  ), true ? ["assets/BulmaHeading.html-6d8b2797.js","assets/framework-58335e88.js"] : void 0)),
  "v-aebcdfda": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-aebcdfda" */
    "./BulmaIcon.html-116ebdde.js"
  ), true ? ["assets/BulmaIcon.html-116ebdde.js","assets/framework-58335e88.js"] : void 0)),
  "v-704492ab": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-704492ab" */
    "./BulmaImage.html-f4da2d81.js"
  ), true ? ["assets/BulmaImage.html-f4da2d81.js","assets/framework-58335e88.js"] : void 0)),
  "v-18ea919c": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-18ea919c" */
    "./BulmaInput.html-8c9d1986.js"
  ), true ? ["assets/BulmaInput.html-8c9d1986.js","assets/framework-58335e88.js"] : void 0)),
  "v-befd5226": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-befd5226" */
    "./BulmaMenu.html-83113f68.js"
  ), true ? ["assets/BulmaMenu.html-83113f68.js","assets/framework-58335e88.js"] : void 0)),
  "v-282e283f": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-282e283f" */
    "./BulmaMessage.html-12630fea.js"
  ), true ? ["assets/BulmaMessage.html-12630fea.js","assets/framework-58335e88.js"] : void 0)),
  "v-6675c3c8": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-6675c3c8" */
    "./BulmaNavbar.html-77530b54.js"
  ), true ? ["assets/BulmaNavbar.html-77530b54.js","assets/framework-58335e88.js"] : void 0)),
  "v-608fb8b0": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-608fb8b0" */
    "./BulmaSelect.html-eb4f4461.js"
  ), true ? ["assets/BulmaSelect.html-eb4f4461.js","assets/framework-58335e88.js"] : void 0)),
  "v-fc46f75c": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-fc46f75c" */
    "./BulmaTextArea.html-bb3b8d6d.js"
  ), true ? ["assets/BulmaTextArea.html-bb3b8d6d.js","assets/framework-58335e88.js"] : void 0)),
  "v-1020f180": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-1020f180" */
    "./index.html-e827685a.js"
  ), true ? ["assets/index.html-e827685a.js","assets/framework-58335e88.js"] : void 0)),
  "v-33445b78": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-33445b78" */
    "./BulmaAspectRatio.html-a99493dd.js"
  ), true ? ["assets/BulmaAspectRatio.html-a99493dd.js","assets/framework-58335e88.js"] : void 0)),
  "v-094da602": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-094da602" */
    "./BulmaButtonColours.html-14a9d7fc.js"
  ), true ? ["assets/BulmaButtonColours.html-14a9d7fc.js","assets/framework-58335e88.js"] : void 0)),
  "v-5c73a564": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-5c73a564" */
    "./BulmaDimensions.html-8b0e4cc6.js"
  ), true ? ["assets/BulmaDimensions.html-8b0e4cc6.js","assets/framework-58335e88.js"] : void 0)),
  "v-6afc826a": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-6afc826a" */
    "./BulmaHeadingSizes.html-3877123a.js"
  ), true ? ["assets/BulmaHeadingSizes.html-3877123a.js","assets/framework-58335e88.js"] : void 0)),
  "v-17734178": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-17734178" */
    "./BulmaHeadingTypes.html-01df166c.js"
  ), true ? ["assets/BulmaHeadingTypes.html-01df166c.js","assets/framework-58335e88.js"] : void 0)),
  "v-950f7708": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-950f7708" */
    "./BulmaMenu.html-d0353b8f.js"
  ), true ? ["assets/BulmaMenu.html-d0353b8f.js","assets/framework-58335e88.js"] : void 0)),
  "v-07ac7ba5": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-07ac7ba5" */
    "./common_types.html-c37328d7.js"
  ), true ? ["assets/common_types.html-c37328d7.js","assets/framework-58335e88.js"] : void 0)),
  "v-d32669e2": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-d32669e2" */
    "./index.html-4cb7e5bc.js"
  ), true ? ["assets/index.html-4cb7e5bc.js","assets/framework-58335e88.js"] : void 0)),
  "v-3706649a": defineAsyncComponent(() => __vitePreload(() => import(
    /* webpackChunkName: "v-3706649a" */
    "./404.html-7061fc41.js"
  ), true ? ["assets/404.html-7061fc41.js","assets/framework-58335e88.js"] : void 0))
};
var layoutsSymbol = Symbol(
  ""
);
var pagesData = ref(pagesData$1);
var pageDataEmpty = readonly({
  key: "",
  path: "",
  title: "",
  lang: "",
  frontmatter: {},
  headers: []
});
var pageData = ref(pageDataEmpty);
var usePageData = () => pageData;
var pageFrontmatterSymbol = Symbol(
  ""
);
var usePageFrontmatter = () => {
  const pageFrontmatter = inject(pageFrontmatterSymbol);
  if (!pageFrontmatter) {
    throw new Error("usePageFrontmatter() is called without provider.");
  }
  return pageFrontmatter;
};
var pageHeadSymbol = Symbol(
  ""
);
var usePageHead = () => {
  const pageHead = inject(pageHeadSymbol);
  if (!pageHead) {
    throw new Error("usePageHead() is called without provider.");
  }
  return pageHead;
};
var pageHeadTitleSymbol = Symbol(
  ""
);
var pageLangSymbol = Symbol(
  ""
);
var usePageLang = () => {
  const pageLang = inject(pageLangSymbol);
  if (!pageLang) {
    throw new Error("usePageLang() is called without provider.");
  }
  return pageLang;
};
var pageLayoutSymbol = Symbol(
  ""
);
var usePageLayout = () => {
  const pageLayout = inject(pageLayoutSymbol);
  if (!pageLayout) {
    throw new Error("usePageLayout() is called without provider.");
  }
  return pageLayout;
};
var routeLocaleSymbol = Symbol(
  ""
);
var useRouteLocale = () => {
  const routeLocale = inject(routeLocaleSymbol);
  if (!routeLocale) {
    throw new Error("useRouteLocale() is called without provider.");
  }
  return routeLocale;
};
var siteData = ref(siteData$1);
var useSiteData = () => siteData;
var siteLocaleDataSymbol = Symbol(
  ""
);
var useSiteLocaleData = () => {
  const siteLocaleData = inject(siteLocaleDataSymbol);
  if (!siteLocaleData) {
    throw new Error("useSiteLocaleData() is called without provider.");
  }
  return siteLocaleData;
};
var updateHeadSymbol = Symbol(
  ""
);
var LAYOUT_NAME_DEFAULT = "Layout";
var LAYOUT_NAME_NOT_FOUND = "NotFound";
var resolvers = reactive({
  resolveLayouts: (clientConfigs2) => clientConfigs2.reduce(
    (prev, item) => ({
      ...prev,
      ...item.layouts
    }),
    {}
  ),
  resolvePageData: async (pageKey) => {
    const pageDataResolver = pagesData.value[pageKey];
    const pageData2 = await (pageDataResolver == null ? void 0 : pageDataResolver());
    return pageData2 ?? pageDataEmpty;
  },
  resolvePageFrontmatter: (pageData2) => pageData2.frontmatter,
  resolvePageHead: (headTitle, frontmatter, siteLocale) => {
    const description = isString$1(frontmatter.description) ? frontmatter.description : siteLocale.description;
    const head = [
      ...isArray(frontmatter.head) ? frontmatter.head : [],
      ...siteLocale.head,
      ["title", {}, headTitle],
      ["meta", { name: "description", content: description }]
    ];
    return dedupeHead(head);
  },
  resolvePageHeadTitle: (page, siteLocale) => [page.title, siteLocale.title].filter((item) => !!item).join(" | "),
  resolvePageLang: (page) => page.lang || "en",
  resolvePageLayout: (page, layouts) => {
    let layoutName;
    if (page.path) {
      const frontmatterLayout = page.frontmatter.layout;
      if (isString$1(frontmatterLayout)) {
        layoutName = frontmatterLayout;
      } else {
        layoutName = LAYOUT_NAME_DEFAULT;
      }
    } else {
      layoutName = LAYOUT_NAME_NOT_FOUND;
    }
    return layouts[layoutName];
  },
  resolveRouteLocale: (locales2, routePath) => resolveLocalePath(locales2, routePath),
  resolveSiteLocaleData: (site, routeLocale) => ({
    ...site,
    ...site.locales[routeLocale]
  })
});
var ClientOnly = defineComponent({
  name: "ClientOnly",
  setup(_, ctx) {
    const isMounted = ref(false);
    onMounted(() => {
      isMounted.value = true;
    });
    return () => {
      var _a2, _b;
      return isMounted.value ? (_b = (_a2 = ctx.slots).default) == null ? void 0 : _b.call(_a2) : null;
    };
  }
});
var Content = defineComponent({
  name: "Content",
  props: {
    pageKey: {
      type: String,
      required: false,
      default: ""
    }
  },
  setup(props) {
    const page = usePageData();
    const pageComponent = computed(
      () => pagesComponents[props.pageKey || page.value.key]
    );
    return () => pageComponent.value ? h(pageComponent.value) : h(
      "div",
      "404 Not Found"
    );
  }
});
var defineClientConfig = (clientConfig = {}) => clientConfig;
var withBase = (url) => {
  if (isLinkHttp(url))
    return url;
  return `${"/vuebulma/"}${removeLeadingSlash(url)}`;
};
function r(r2, e, n) {
  var i, t, o;
  void 0 === e && (e = 50), void 0 === n && (n = {});
  var a = null != (i = n.isImmediate) && i, u = null != (t = n.callback) && t, c = n.maxWait, v = Date.now(), l = [];
  function f() {
    if (void 0 !== c) {
      var r3 = Date.now() - v;
      if (r3 + e >= c)
        return c - r3;
    }
    return e;
  }
  var d = function() {
    var e2 = [].slice.call(arguments), n2 = this;
    return new Promise(function(i2, t2) {
      var c2 = a && void 0 === o;
      if (void 0 !== o && clearTimeout(o), o = setTimeout(function() {
        if (o = void 0, v = Date.now(), !a) {
          var i3 = r2.apply(n2, e2);
          u && u(i3), l.forEach(function(r3) {
            return (0, r3.resolve)(i3);
          }), l = [];
        }
      }, f()), c2) {
        var d2 = r2.apply(n2, e2);
        return u && u(d2), i2(d2);
      }
      l.push({ resolve: i2, reject: t2 });
    });
  };
  return d.cancel = function(r3) {
    void 0 !== o && clearTimeout(o), l.forEach(function(e2) {
      return (0, e2.reject)(r3);
    }), l = [];
  }, d;
}
const useActiveHeaderLinks = ({ headerLinkSelector: headerLinkSelector2, headerAnchorSelector: headerAnchorSelector2, delay: delay2, offset: offset2 = 5 }) => {
  const router = useRouter();
  const setActiveRouteHash = () => {
    var _a2, _b;
    const scrollTop = Math.max(window.scrollY, document.documentElement.scrollTop, document.body.scrollTop);
    const isAtPageTop = Math.abs(scrollTop - 0) < offset2;
    if (isAtPageTop) {
      updateHash(router, "");
      return;
    }
    const scrollBottom = window.innerHeight + scrollTop;
    const scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
    const isAtPageBottom = Math.abs(scrollHeight - scrollBottom) < offset2;
    const headerLinks = Array.from(document.querySelectorAll(headerLinkSelector2));
    const headerAnchors = Array.from(document.querySelectorAll(headerAnchorSelector2));
    const existedHeaderAnchors = headerAnchors.filter((anchor) => headerLinks.some((link) => link.hash === anchor.hash));
    for (let i = 0; i < existedHeaderAnchors.length; i++) {
      const anchor = existedHeaderAnchors[i];
      const nextAnchor = existedHeaderAnchors[i + 1];
      const hasPassedCurrentAnchor = scrollTop >= (((_a2 = anchor.parentElement) == null ? void 0 : _a2.offsetTop) ?? 0) - offset2;
      const hasNotPassedNextAnchor = !nextAnchor || scrollTop < (((_b = nextAnchor.parentElement) == null ? void 0 : _b.offsetTop) ?? 0) - offset2;
      const isActive = hasPassedCurrentAnchor && hasNotPassedNextAnchor;
      if (!isActive)
        continue;
      const routeHash = decodeURIComponent(router.currentRoute.value.hash);
      const anchorHash = decodeURIComponent(anchor.hash);
      if (routeHash === anchorHash)
        return;
      if (isAtPageBottom) {
        for (let j = i + 1; j < existedHeaderAnchors.length; j++) {
          if (routeHash === decodeURIComponent(existedHeaderAnchors[j].hash)) {
            return;
          }
        }
      }
      updateHash(router, anchorHash);
      return;
    }
  };
  const onScroll = r(setActiveRouteHash, delay2);
  onMounted(() => {
    window.addEventListener("scroll", onScroll);
  });
  onBeforeUnmount(() => {
    window.removeEventListener("scroll", onScroll);
  });
};
const updateHash = async (router, hash) => {
  const { scrollBehavior } = router.options;
  router.options.scrollBehavior = void 0;
  await router.replace({
    query: router.currentRoute.value.query,
    hash,
    force: true
  }).finally(() => router.options.scrollBehavior = scrollBehavior);
};
const headerLinkSelector = "a.sidebar-item";
const headerAnchorSelector = ".header-anchor";
const delay$1 = 300;
const offset = 5;
const clientConfig0 = defineClientConfig({
  setup() {
    useActiveHeaderLinks({
      headerLinkSelector,
      headerAnchorSelector,
      delay: delay$1,
      offset
    });
  }
});
const getScrollTop = () => window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
const vars$3 = "";
const backToTop = "";
const BackToTop = defineComponent({
  name: "BackToTop",
  setup() {
    const scrollTop = ref(0);
    const show = computed(() => scrollTop.value > 300);
    const onScroll = r(() => {
      scrollTop.value = getScrollTop();
    }, 100);
    onMounted(() => {
      scrollTop.value = getScrollTop();
      window.addEventListener("scroll", () => onScroll());
    });
    const backToTopEl = h("div", { class: "back-to-top", onClick: scrollToTop });
    return () => h(Transition, {
      name: "back-to-top"
    }, () => show.value ? backToTopEl : null);
  }
});
const clientConfig1 = defineClientConfig({
  rootComponents: [BackToTop]
});
const vars$2 = "";
const externalLinkIcon = "";
const svg = h("svg", {
  "class": "external-link-icon",
  "xmlns": "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  "focusable": "false",
  "x": "0px",
  "y": "0px",
  "viewBox": "0 0 100 100",
  "width": "15",
  "height": "15"
}, [
  h("path", {
    fill: "currentColor",
    d: "M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"
  }),
  h("polygon", {
    fill: "currentColor",
    points: "45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"
  })
]);
const ExternalLinkIcon = defineComponent({
  name: "ExternalLinkIcon",
  props: {
    locales: {
      type: Object,
      required: false,
      default: () => ({})
    }
  },
  setup(props) {
    const routeLocale = useRouteLocale();
    const locale = computed(() => props.locales[routeLocale.value] ?? {
      openInNewWindow: "open in new window"
    });
    return () => h("span", [
      svg,
      h("span", {
        class: "external-link-icon-sr-only"
      }, locale.value.openInNewWindow)
    ]);
  }
});
const locales = { "/": { "openInNewWindow": "open in new window" } };
const clientConfig2 = defineClientConfig({
  enhance({ app }) {
    app.component("ExternalLinkIcon", h(ExternalLinkIcon, { locales }));
  }
});
/*! medium-zoom 1.0.8 | MIT License | https://github.com/francoischalifour/medium-zoom */
var _extends = Object.assign || function(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};
var isSupported = function isSupported2(node) {
  return node.tagName === "IMG";
};
var isNodeList = function isNodeList2(selector2) {
  return NodeList.prototype.isPrototypeOf(selector2);
};
var isNode = function isNode2(selector2) {
  return selector2 && selector2.nodeType === 1;
};
var isSvg = function isSvg2(image) {
  var source = image.currentSrc || image.src;
  return source.substr(-4).toLowerCase() === ".svg";
};
var getImagesFromSelector = function getImagesFromSelector2(selector2) {
  try {
    if (Array.isArray(selector2)) {
      return selector2.filter(isSupported);
    }
    if (isNodeList(selector2)) {
      return [].slice.call(selector2).filter(isSupported);
    }
    if (isNode(selector2)) {
      return [selector2].filter(isSupported);
    }
    if (typeof selector2 === "string") {
      return [].slice.call(document.querySelectorAll(selector2)).filter(isSupported);
    }
    return [];
  } catch (err) {
    throw new TypeError("The provided selector is invalid.\nExpects a CSS selector, a Node element, a NodeList or an array.\nSee: https://github.com/francoischalifour/medium-zoom");
  }
};
var createOverlay = function createOverlay2(background) {
  var overlay = document.createElement("div");
  overlay.classList.add("medium-zoom-overlay");
  overlay.style.background = background;
  return overlay;
};
var cloneTarget = function cloneTarget2(template) {
  var _template$getBounding = template.getBoundingClientRect(), top = _template$getBounding.top, left = _template$getBounding.left, width = _template$getBounding.width, height = _template$getBounding.height;
  var clone = template.cloneNode();
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
  clone.removeAttribute("id");
  clone.style.position = "absolute";
  clone.style.top = top + scrollTop + "px";
  clone.style.left = left + scrollLeft + "px";
  clone.style.width = width + "px";
  clone.style.height = height + "px";
  clone.style.transform = "";
  return clone;
};
var createCustomEvent = function createCustomEvent2(type, params) {
  var eventParams = _extends({
    bubbles: false,
    cancelable: false,
    detail: void 0
  }, params);
  if (typeof window.CustomEvent === "function") {
    return new CustomEvent(type, eventParams);
  }
  var customEvent = document.createEvent("CustomEvent");
  customEvent.initCustomEvent(type, eventParams.bubbles, eventParams.cancelable, eventParams.detail);
  return customEvent;
};
var mediumZoom$1 = function mediumZoom(selector2) {
  var options2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var Promise2 = window.Promise || function Promise3(fn) {
    function noop2() {
    }
    fn(noop2, noop2);
  };
  var _handleClick = function _handleClick2(event) {
    var target = event.target;
    if (target === overlay) {
      close();
      return;
    }
    if (images.indexOf(target) === -1) {
      return;
    }
    toggle({ target });
  };
  var _handleScroll = function _handleScroll2() {
    if (isAnimating || !active.original) {
      return;
    }
    var currentScroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (Math.abs(scrollTop - currentScroll) > zoomOptions2.scrollOffset) {
      setTimeout(close, 150);
    }
  };
  var _handleKeyUp = function _handleKeyUp2(event) {
    var key = event.key || event.keyCode;
    if (key === "Escape" || key === "Esc" || key === 27) {
      close();
    }
  };
  var update = function update2() {
    var options3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var newOptions = options3;
    if (options3.background) {
      overlay.style.background = options3.background;
    }
    if (options3.container && options3.container instanceof Object) {
      newOptions.container = _extends({}, zoomOptions2.container, options3.container);
    }
    if (options3.template) {
      var template = isNode(options3.template) ? options3.template : document.querySelector(options3.template);
      newOptions.template = template;
    }
    zoomOptions2 = _extends({}, zoomOptions2, newOptions);
    images.forEach(function(image) {
      image.dispatchEvent(createCustomEvent("medium-zoom:update", {
        detail: { zoom }
      }));
    });
    return zoom;
  };
  var clone = function clone2() {
    var options3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return mediumZoom(_extends({}, zoomOptions2, options3));
  };
  var attach = function attach2() {
    for (var _len = arguments.length, selectors = Array(_len), _key = 0; _key < _len; _key++) {
      selectors[_key] = arguments[_key];
    }
    var newImages = selectors.reduce(function(imagesAccumulator, currentSelector) {
      return [].concat(imagesAccumulator, getImagesFromSelector(currentSelector));
    }, []);
    newImages.filter(function(newImage) {
      return images.indexOf(newImage) === -1;
    }).forEach(function(newImage) {
      images.push(newImage);
      newImage.classList.add("medium-zoom-image");
    });
    eventListeners.forEach(function(_ref) {
      var type = _ref.type, listener = _ref.listener, options3 = _ref.options;
      newImages.forEach(function(image) {
        image.addEventListener(type, listener, options3);
      });
    });
    return zoom;
  };
  var detach = function detach2() {
    for (var _len2 = arguments.length, selectors = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      selectors[_key2] = arguments[_key2];
    }
    if (active.zoomed) {
      close();
    }
    var imagesToDetach = selectors.length > 0 ? selectors.reduce(function(imagesAccumulator, currentSelector) {
      return [].concat(imagesAccumulator, getImagesFromSelector(currentSelector));
    }, []) : images;
    imagesToDetach.forEach(function(image) {
      image.classList.remove("medium-zoom-image");
      image.dispatchEvent(createCustomEvent("medium-zoom:detach", {
        detail: { zoom }
      }));
    });
    images = images.filter(function(image) {
      return imagesToDetach.indexOf(image) === -1;
    });
    return zoom;
  };
  var on = function on2(type, listener) {
    var options3 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    images.forEach(function(image) {
      image.addEventListener("medium-zoom:" + type, listener, options3);
    });
    eventListeners.push({ type: "medium-zoom:" + type, listener, options: options3 });
    return zoom;
  };
  var off = function off2(type, listener) {
    var options3 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    images.forEach(function(image) {
      image.removeEventListener("medium-zoom:" + type, listener, options3);
    });
    eventListeners = eventListeners.filter(function(eventListener) {
      return !(eventListener.type === "medium-zoom:" + type && eventListener.listener.toString() === listener.toString());
    });
    return zoom;
  };
  var open = function open2() {
    var _ref2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, target = _ref2.target;
    var _animate = function _animate2() {
      var container = {
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight,
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
      };
      var viewportWidth = void 0;
      var viewportHeight = void 0;
      if (zoomOptions2.container) {
        if (zoomOptions2.container instanceof Object) {
          container = _extends({}, container, zoomOptions2.container);
          viewportWidth = container.width - container.left - container.right - zoomOptions2.margin * 2;
          viewportHeight = container.height - container.top - container.bottom - zoomOptions2.margin * 2;
        } else {
          var zoomContainer = isNode(zoomOptions2.container) ? zoomOptions2.container : document.querySelector(zoomOptions2.container);
          var _zoomContainer$getBou = zoomContainer.getBoundingClientRect(), _width = _zoomContainer$getBou.width, _height = _zoomContainer$getBou.height, _left = _zoomContainer$getBou.left, _top = _zoomContainer$getBou.top;
          container = _extends({}, container, {
            width: _width,
            height: _height,
            left: _left,
            top: _top
          });
        }
      }
      viewportWidth = viewportWidth || container.width - zoomOptions2.margin * 2;
      viewportHeight = viewportHeight || container.height - zoomOptions2.margin * 2;
      var zoomTarget = active.zoomedHd || active.original;
      var naturalWidth = isSvg(zoomTarget) ? viewportWidth : zoomTarget.naturalWidth || viewportWidth;
      var naturalHeight = isSvg(zoomTarget) ? viewportHeight : zoomTarget.naturalHeight || viewportHeight;
      var _zoomTarget$getBoundi = zoomTarget.getBoundingClientRect(), top = _zoomTarget$getBoundi.top, left = _zoomTarget$getBoundi.left, width = _zoomTarget$getBoundi.width, height = _zoomTarget$getBoundi.height;
      var scaleX = Math.min(Math.max(width, naturalWidth), viewportWidth) / width;
      var scaleY = Math.min(Math.max(height, naturalHeight), viewportHeight) / height;
      var scale = Math.min(scaleX, scaleY);
      var translateX = (-left + (viewportWidth - width) / 2 + zoomOptions2.margin + container.left) / scale;
      var translateY = (-top + (viewportHeight - height) / 2 + zoomOptions2.margin + container.top) / scale;
      var transform = "scale(" + scale + ") translate3d(" + translateX + "px, " + translateY + "px, 0)";
      active.zoomed.style.transform = transform;
      if (active.zoomedHd) {
        active.zoomedHd.style.transform = transform;
      }
    };
    return new Promise2(function(resolve) {
      if (target && images.indexOf(target) === -1) {
        resolve(zoom);
        return;
      }
      var _handleOpenEnd = function _handleOpenEnd2() {
        isAnimating = false;
        active.zoomed.removeEventListener("transitionend", _handleOpenEnd2);
        active.original.dispatchEvent(createCustomEvent("medium-zoom:opened", {
          detail: { zoom }
        }));
        resolve(zoom);
      };
      if (active.zoomed) {
        resolve(zoom);
        return;
      }
      if (target) {
        active.original = target;
      } else if (images.length > 0) {
        var _images = images;
        active.original = _images[0];
      } else {
        resolve(zoom);
        return;
      }
      active.original.dispatchEvent(createCustomEvent("medium-zoom:open", {
        detail: { zoom }
      }));
      scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      isAnimating = true;
      active.zoomed = cloneTarget(active.original);
      document.body.appendChild(overlay);
      if (zoomOptions2.template) {
        var template = isNode(zoomOptions2.template) ? zoomOptions2.template : document.querySelector(zoomOptions2.template);
        active.template = document.createElement("div");
        active.template.appendChild(template.content.cloneNode(true));
        document.body.appendChild(active.template);
      }
      if (active.original.parentElement && active.original.parentElement.tagName === "PICTURE" && active.original.currentSrc) {
        active.zoomed.src = active.original.currentSrc;
      }
      document.body.appendChild(active.zoomed);
      window.requestAnimationFrame(function() {
        document.body.classList.add("medium-zoom--opened");
      });
      active.original.classList.add("medium-zoom-image--hidden");
      active.zoomed.classList.add("medium-zoom-image--opened");
      active.zoomed.addEventListener("click", close);
      active.zoomed.addEventListener("transitionend", _handleOpenEnd);
      if (active.original.getAttribute("data-zoom-src")) {
        active.zoomedHd = active.zoomed.cloneNode();
        active.zoomedHd.removeAttribute("srcset");
        active.zoomedHd.removeAttribute("sizes");
        active.zoomedHd.removeAttribute("loading");
        active.zoomedHd.src = active.zoomed.getAttribute("data-zoom-src");
        active.zoomedHd.onerror = function() {
          clearInterval(getZoomTargetSize);
          console.warn("Unable to reach the zoom image target " + active.zoomedHd.src);
          active.zoomedHd = null;
          _animate();
        };
        var getZoomTargetSize = setInterval(function() {
          if (active.zoomedHd.complete) {
            clearInterval(getZoomTargetSize);
            active.zoomedHd.classList.add("medium-zoom-image--opened");
            active.zoomedHd.addEventListener("click", close);
            document.body.appendChild(active.zoomedHd);
            _animate();
          }
        }, 10);
      } else if (active.original.hasAttribute("srcset")) {
        active.zoomedHd = active.zoomed.cloneNode();
        active.zoomedHd.removeAttribute("sizes");
        active.zoomedHd.removeAttribute("loading");
        var loadEventListener = active.zoomedHd.addEventListener("load", function() {
          active.zoomedHd.removeEventListener("load", loadEventListener);
          active.zoomedHd.classList.add("medium-zoom-image--opened");
          active.zoomedHd.addEventListener("click", close);
          document.body.appendChild(active.zoomedHd);
          _animate();
        });
      } else {
        _animate();
      }
    });
  };
  var close = function close2() {
    return new Promise2(function(resolve) {
      if (isAnimating || !active.original) {
        resolve(zoom);
        return;
      }
      var _handleCloseEnd = function _handleCloseEnd2() {
        active.original.classList.remove("medium-zoom-image--hidden");
        document.body.removeChild(active.zoomed);
        if (active.zoomedHd) {
          document.body.removeChild(active.zoomedHd);
        }
        document.body.removeChild(overlay);
        active.zoomed.classList.remove("medium-zoom-image--opened");
        if (active.template) {
          document.body.removeChild(active.template);
        }
        isAnimating = false;
        active.zoomed.removeEventListener("transitionend", _handleCloseEnd2);
        active.original.dispatchEvent(createCustomEvent("medium-zoom:closed", {
          detail: { zoom }
        }));
        active.original = null;
        active.zoomed = null;
        active.zoomedHd = null;
        active.template = null;
        resolve(zoom);
      };
      isAnimating = true;
      document.body.classList.remove("medium-zoom--opened");
      active.zoomed.style.transform = "";
      if (active.zoomedHd) {
        active.zoomedHd.style.transform = "";
      }
      if (active.template) {
        active.template.style.transition = "opacity 150ms";
        active.template.style.opacity = 0;
      }
      active.original.dispatchEvent(createCustomEvent("medium-zoom:close", {
        detail: { zoom }
      }));
      active.zoomed.addEventListener("transitionend", _handleCloseEnd);
    });
  };
  var toggle = function toggle2() {
    var _ref3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, target = _ref3.target;
    if (active.original) {
      return close();
    }
    return open({ target });
  };
  var getOptions = function getOptions2() {
    return zoomOptions2;
  };
  var getImages = function getImages2() {
    return images;
  };
  var getZoomedImage = function getZoomedImage2() {
    return active.original;
  };
  var images = [];
  var eventListeners = [];
  var isAnimating = false;
  var scrollTop = 0;
  var zoomOptions2 = options2;
  var active = {
    original: null,
    zoomed: null,
    zoomedHd: null,
    template: null
  };
  if (Object.prototype.toString.call(selector2) === "[object Object]") {
    zoomOptions2 = selector2;
  } else if (selector2 || typeof selector2 === "string") {
    attach(selector2);
  }
  zoomOptions2 = _extends({
    margin: 0,
    background: "#fff",
    scrollOffset: 40,
    container: null,
    template: null
  }, zoomOptions2);
  var overlay = createOverlay(zoomOptions2.background);
  document.addEventListener("click", _handleClick);
  document.addEventListener("keyup", _handleKeyUp);
  document.addEventListener("scroll", _handleScroll);
  window.addEventListener("resize", close);
  var zoom = {
    open,
    close,
    toggle,
    update,
    clone,
    attach,
    detach,
    on,
    off,
    getOptions,
    getImages,
    getZoomedImage
  };
  return zoom;
};
function styleInject(css2, ref2) {
  if (ref2 === void 0)
    ref2 = {};
  var insertAt = ref2.insertAt;
  if (!css2 || typeof document === "undefined") {
    return;
  }
  var head = document.head || document.getElementsByTagName("head")[0];
  var style = document.createElement("style");
  style.type = "text/css";
  if (insertAt === "top") {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }
  if (style.styleSheet) {
    style.styleSheet.cssText = css2;
  } else {
    style.appendChild(document.createTextNode(css2));
  }
}
var css$1 = ".medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)!important}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}";
styleInject(css$1);
const mediumZoom$2 = mediumZoom$1;
const mediumZoomSymbol = Symbol("mediumZoom");
const vars$1 = "";
const mediumZoom2 = "";
const selector = ".theme-default-content > img, .theme-default-content :not(a) > img";
const zoomOptions = {};
const delay = 300;
const clientConfig3 = defineClientConfig({
  enhance({ app, router }) {
    const zoom = mediumZoom$2(zoomOptions);
    zoom.refresh = (sel = selector) => {
      zoom.detach();
      zoom.attach(sel);
    };
    app.provide(mediumZoomSymbol, zoom);
    router.afterEach(() => {
      setTimeout(() => zoom.refresh(), delay);
    });
  }
});
/**
 * NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT
 */
const nprogress$1 = {
  settings: {
    minimum: 0.08,
    easing: "ease",
    speed: 200,
    trickle: true,
    trickleRate: 0.02,
    trickleSpeed: 800,
    barSelector: '[role="bar"]',
    parent: "body",
    template: '<div class="bar" role="bar"></div>'
  },
  status: null,
  set: (n) => {
    const started = nprogress$1.isStarted();
    n = clamp(n, nprogress$1.settings.minimum, 1);
    nprogress$1.status = n === 1 ? null : n;
    const progress = nprogress$1.render(!started);
    const bar = progress.querySelector(nprogress$1.settings.barSelector);
    const speed = nprogress$1.settings.speed;
    const ease = nprogress$1.settings.easing;
    progress.offsetWidth;
    queue((next) => {
      css(bar, {
        transform: "translate3d(" + toBarPerc(n) + "%,0,0)",
        transition: "all " + speed + "ms " + ease
      });
      if (n === 1) {
        css(progress, {
          transition: "none",
          opacity: "1"
        });
        progress.offsetWidth;
        setTimeout(function() {
          css(progress, {
            transition: "all " + speed + "ms linear",
            opacity: "0"
          });
          setTimeout(function() {
            nprogress$1.remove();
            next();
          }, speed);
        }, speed);
      } else {
        setTimeout(() => next(), speed);
      }
    });
    return nprogress$1;
  },
  isStarted: () => typeof nprogress$1.status === "number",
  start: () => {
    if (!nprogress$1.status)
      nprogress$1.set(0);
    const work = () => {
      setTimeout(() => {
        if (!nprogress$1.status)
          return;
        nprogress$1.trickle();
        work();
      }, nprogress$1.settings.trickleSpeed);
    };
    if (nprogress$1.settings.trickle)
      work();
    return nprogress$1;
  },
  done: (force) => {
    if (!force && !nprogress$1.status)
      return nprogress$1;
    return nprogress$1.inc(0.3 + 0.5 * Math.random()).set(1);
  },
  inc: (amount) => {
    let n = nprogress$1.status;
    if (!n) {
      return nprogress$1.start();
    }
    if (typeof amount !== "number") {
      amount = (1 - n) * clamp(Math.random() * n, 0.1, 0.95);
    }
    n = clamp(n + amount, 0, 0.994);
    return nprogress$1.set(n);
  },
  trickle: () => nprogress$1.inc(Math.random() * nprogress$1.settings.trickleRate),
  render: (fromStart) => {
    if (nprogress$1.isRendered()) {
      return document.getElementById("nprogress");
    }
    addClass(document.documentElement, "nprogress-busy");
    const progress = document.createElement("div");
    progress.id = "nprogress";
    progress.innerHTML = nprogress$1.settings.template;
    const bar = progress.querySelector(nprogress$1.settings.barSelector);
    const perc = fromStart ? "-100" : toBarPerc(nprogress$1.status || 0);
    const parent = document.querySelector(nprogress$1.settings.parent);
    css(bar, {
      transition: "all 0 linear",
      transform: "translate3d(" + perc + "%,0,0)"
    });
    if (parent !== document.body) {
      addClass(parent, "nprogress-custom-parent");
    }
    parent == null ? void 0 : parent.appendChild(progress);
    return progress;
  },
  remove: () => {
    removeClass(document.documentElement, "nprogress-busy");
    removeClass(document.querySelector(nprogress$1.settings.parent), "nprogress-custom-parent");
    const progress = document.getElementById("nprogress");
    progress && removeElement(progress);
  },
  isRendered: () => !!document.getElementById("nprogress")
};
const clamp = (n, min, max) => {
  if (n < min)
    return min;
  if (n > max)
    return max;
  return n;
};
const toBarPerc = (n) => (-1 + n) * 100;
const queue = function() {
  const pending = [];
  function next() {
    const fn = pending.shift();
    if (fn) {
      fn(next);
    }
  }
  return function(fn) {
    pending.push(fn);
    if (pending.length === 1)
      next();
  };
}();
const css = function() {
  const cssPrefixes = ["Webkit", "O", "Moz", "ms"];
  const cssProps = {};
  function camelCase(string) {
    return string.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function(match, letter) {
      return letter.toUpperCase();
    });
  }
  function getVendorProp(name) {
    const style = document.body.style;
    if (name in style)
      return name;
    let i = cssPrefixes.length;
    const capName = name.charAt(0).toUpperCase() + name.slice(1);
    let vendorName;
    while (i--) {
      vendorName = cssPrefixes[i] + capName;
      if (vendorName in style)
        return vendorName;
    }
    return name;
  }
  function getStyleProp(name) {
    name = camelCase(name);
    return cssProps[name] || (cssProps[name] = getVendorProp(name));
  }
  function applyCss(element, prop, value) {
    prop = getStyleProp(prop);
    element.style[prop] = value;
  }
  return function(element, properties) {
    for (const prop in properties) {
      const value = properties[prop];
      if (value !== void 0 && Object.prototype.hasOwnProperty.call(properties, prop))
        applyCss(element, prop, value);
    }
  };
}();
const hasClass = (element, name) => {
  const list = typeof element === "string" ? element : classList(element);
  return list.indexOf(" " + name + " ") >= 0;
};
const addClass = (element, name) => {
  const oldList = classList(element);
  const newList = oldList + name;
  if (hasClass(oldList, name))
    return;
  element.className = newList.substring(1);
};
const removeClass = (element, name) => {
  const oldList = classList(element);
  if (!hasClass(element, name))
    return;
  const newList = oldList.replace(" " + name + " ", " ");
  element.className = newList.substring(1, newList.length - 1);
};
const classList = (element) => {
  return (" " + (element.className || "") + " ").replace(/\s+/gi, " ");
};
const removeElement = (element) => {
  element && element.parentNode && element.parentNode.removeChild(element);
};
const vars = "";
const nprogress = "";
const useNprogress = () => {
  onMounted(() => {
    const router = useRouter();
    const loadedPages = /* @__PURE__ */ new Set();
    loadedPages.add(router.currentRoute.value.path);
    router.beforeEach((to) => {
      if (!loadedPages.has(to.path)) {
        nprogress$1.start();
      }
    });
    router.afterEach((to) => {
      loadedPages.add(to.path);
      nprogress$1.done();
    });
  });
};
const clientConfig4 = defineClientConfig({
  setup() {
    useNprogress();
  }
});
const themeData$1 = JSON.parse(`{"navbar":[{"text":"Changelog","link":"/changelog.html"},{"text":"Considerations","link":"/considerations.html"},{"text":"Getting Started","link":"/getting_started.html"},{"text":"Todo","link":"/todo.html"},{"text":"Components","children":[{"text":"Overview","link":"/components/index.html"},{"text":"Block","link":"/components/BulmaBlock.html"},{"text":"Box","link":"/components/BulmaBox.html"},{"text":"Breadcrumb","link":"/components/BulmaBreadcrumb.html"},{"text":"Button","link":"/components/BulmaButton.html"},{"text":"Buttons","link":"/components/BulmaButtons.html"},{"text":"Dropdown","link":"/components/BulmaDropdown.html"},{"text":"File Input","link":"/components/BulmaFileInput.html"},{"text":"Form Inputs","link":"/components/BulmaFormInputs.html"},{"text":"Heading","link":"/components/BulmaHeading.html"},{"text":"Icon","link":"/components/BulmaIcon.html"},{"text":"Image","link":"/components/BulmaImage.html"},{"text":"Input","link":"/components/BulmaInput.html"},{"text":"Menu","link":"/components/BulmaMenu.html"},{"text":"Message","link":"/components/BulmaMessage.html"},{"text":"Navbar","link":"/components/BulmaNavbar.html"},{"text":"Select","link":"/components/BulmaSelect.html"},{"text":"Text Area","link":"/components/BulmaTextArea.html"}]},{"text":"Types","children":[{"text":"Overview","link":"/types/index.html"},{"text":"Aspect Ratio","link":"/types/BulmaAspectRatio.html"},{"text":"Button Colours","link":"/types/BulmaButtonColours.html"},{"text":"Common Types","link":"/types/common_types.html"},{"text":"Dimensions","link":"/types/BulmaDimensions.html"},{"text":"Heading Sizes","link":"/types/BulmaHeadingSizes.html"},{"text":"Heading Types","link":"/types/BulmaHeadingTypes.html"},{"text":"Menu","link":"/types/BulmaMenu.html"}]}],"sidebar":"auto","repo":"csc530/vuebulma","repoLabel":"Source","docsDir":"docs","contributors":true,"contributorsText":"Contributors","lastUpdated":true,"sidebarDepth":2,"locales":{"/":{"selectLanguageName":"English"}},"colorMode":"auto","colorModeSwitch":true,"logo":null,"selectLanguageText":"Languages","selectLanguageAriaLabel":"Select language","editLink":true,"editLinkText":"Edit this page","lastUpdatedText":"Last Updated","notFound":["There's nothing here.","How did we get here?","That's a Four-Oh-Four.","Looks like we've got some broken links."],"backToHome":"Take me home","openInNewWindow":"open in new window","toggleColorMode":"toggle color mode","toggleSidebar":"toggle sidebar"}`);
const themeData = ref(themeData$1);
const useThemeData = () => themeData;
const themeLocaleDataSymbol = Symbol("");
const useThemeLocaleData$1 = () => {
  const themeLocaleData = inject(themeLocaleDataSymbol);
  if (!themeLocaleData) {
    throw new Error("useThemeLocaleData() is called without provider.");
  }
  return themeLocaleData;
};
const resolveThemeLocaleData = (theme, routeLocale) => {
  var _a2;
  return {
    ...theme,
    ...(_a2 = theme.locales) == null ? void 0 : _a2[routeLocale]
  };
};
const clientConfig5 = defineClientConfig({
  enhance({ app }) {
    const themeData2 = useThemeData();
    const routeLocale = app._context.provides[routeLocaleSymbol];
    const themeLocaleData = computed(() => resolveThemeLocaleData(themeData2.value, routeLocale.value));
    app.provide(themeLocaleDataSymbol, themeLocaleData);
    Object.defineProperties(app.config.globalProperties, {
      $theme: {
        get() {
          return themeData2.value;
        }
      },
      $themeLocale: {
        get() {
          return themeLocaleData.value;
        }
      }
    });
    {
      setupDevtoolsPlugin({
        app,
        id: "org.vuejs.vuepress.plugin-theme-data",
        label: "VuePress Theme Data Plugin",
        packageName: "@vuepress/plugin-theme-data",
        homepage: "https://v2.vuepress.vuejs.org",
        logo: "https://v2.vuepress.vuejs.org/images/hero.png",
        componentStateTypes: ["VuePress"]
      }, (api) => {
        api.on.inspectComponent((payload) => {
          payload.instanceData.state.push({
            type: "VuePress",
            key: "themeData",
            editable: false,
            value: themeData2.value
          }, {
            type: "VuePress",
            key: "themeLocaleData",
            editable: false,
            value: themeLocaleData.value
          });
        });
      });
    }
  }
});
const _sfc_main$n = /* @__PURE__ */ defineComponent({
  __name: "Badge",
  props: {
    type: {
      type: String,
      required: false,
      default: "tip"
    },
    text: {
      type: String,
      required: false,
      default: ""
    },
    vertical: {
      type: String,
      required: false,
      default: void 0
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("span", {
        class: normalizeClass(["badge", __props.type]),
        style: normalizeStyle({
          verticalAlign: __props.vertical
        })
      }, [
        renderSlot(_ctx.$slots, "default", {}, () => [
          createTextVNode(toDisplayString(__props.text), 1)
        ])
      ], 6);
    };
  }
});
const Badge = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["__file", "Badge.vue"]]);
const CodeGroup = defineComponent({
  name: "CodeGroup",
  setup(_, { slots }) {
    const activeIndex = ref(-1);
    const tabRefs = ref([]);
    const activateNext = (i = activeIndex.value) => {
      if (i < tabRefs.value.length - 1) {
        activeIndex.value = i + 1;
      } else {
        activeIndex.value = 0;
      }
      tabRefs.value[activeIndex.value].focus();
    };
    const activatePrev = (i = activeIndex.value) => {
      if (i > 0) {
        activeIndex.value = i - 1;
      } else {
        activeIndex.value = tabRefs.value.length - 1;
      }
      tabRefs.value[activeIndex.value].focus();
    };
    const keyboardHandler = (event, i) => {
      if (event.key === " " || event.key === "Enter") {
        event.preventDefault();
        activeIndex.value = i;
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        activateNext(i);
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        activatePrev(i);
      }
    };
    return () => {
      var _a2;
      const items = (((_a2 = slots.default) == null ? void 0 : _a2.call(slots)) || []).filter((vnode) => vnode.type.name === "CodeGroupItem").map((vnode) => {
        if (vnode.props === null) {
          vnode.props = {};
        }
        return vnode;
      });
      if (items.length === 0) {
        return null;
      }
      if (activeIndex.value < 0 || activeIndex.value > items.length - 1) {
        activeIndex.value = items.findIndex((vnode) => vnode.props.active === "" || vnode.props.active === true);
        if (activeIndex.value === -1) {
          activeIndex.value = 0;
        }
      } else {
        items.forEach((vnode, i) => {
          vnode.props.active = i === activeIndex.value;
        });
      }
      return h("div", { class: "code-group" }, [
        h("div", { class: "code-group__nav" }, h("ul", { class: "code-group__ul" }, items.map((vnode, i) => {
          const isActive = i === activeIndex.value;
          return h("li", { class: "code-group__li" }, h("button", {
            ref: (element) => {
              if (element) {
                tabRefs.value[i] = element;
              }
            },
            class: {
              "code-group__nav-tab": true,
              "code-group__nav-tab-active": isActive
            },
            ariaPressed: isActive,
            ariaExpanded: isActive,
            onClick: () => activeIndex.value = i,
            onKeydown: (e) => keyboardHandler(e, i)
          }, vnode.props.title));
        }))),
        items
      ]);
    };
  }
});
const _hoisted_1$i = ["aria-selected"];
const __default__$1 = defineComponent({
  name: "CodeGroupItem"
});
const _sfc_main$m = /* @__PURE__ */ defineComponent({
  ...__default__$1,
  props: {
    title: {
      type: String,
      required: true
    },
    active: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["code-group-item", { "code-group-item__active": __props.active }]),
        "aria-selected": __props.active
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 10, _hoisted_1$i);
    };
  }
});
const CodeGroupItem = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["__file", "CodeGroupItem.vue"]]);
var _a;
const isClient = typeof window !== "undefined";
const isFunction = (val) => typeof val === "function";
const isString = (val) => typeof val === "string";
const noop = () => {
};
isClient && ((_a = window == null ? void 0 : window.navigator) == null ? void 0 : _a.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function resolveUnref(r2) {
  return typeof r2 === "function" ? r2() : unref(r2);
}
function createFilterWrapper(filter, fn) {
  function wrapper(...args) {
    return new Promise((resolve, reject) => {
      Promise.resolve(filter(() => fn.apply(this, args), { fn, thisArg: this, args })).then(resolve).catch(reject);
    });
  }
  return wrapper;
}
const bypassFilter = (invoke) => {
  return invoke();
};
function pausableFilter(extendFilter = bypassFilter) {
  const isActive = ref(true);
  function pause() {
    isActive.value = false;
  }
  function resume() {
    isActive.value = true;
  }
  const eventFilter = (...args) => {
    if (isActive.value)
      extendFilter(...args);
  };
  return { isActive, pause, resume, eventFilter };
}
function identity(arg) {
  return arg;
}
function tryOnScopeDispose(fn) {
  if (getCurrentScope()) {
    onScopeDispose(fn);
    return true;
  }
  return false;
}
function resolveRef(r2) {
  return typeof r2 === "function" ? computed(r2) : ref(r2);
}
function tryOnMounted(fn, sync = true) {
  if (getCurrentInstance())
    onMounted(fn);
  else if (sync)
    fn();
  else
    nextTick(fn);
}
function useToggle(initialValue = false, options2 = {}) {
  const {
    truthyValue = true,
    falsyValue = false
  } = options2;
  const valueIsRef = isRef(initialValue);
  const _value = ref(initialValue);
  function toggle(value) {
    if (arguments.length) {
      _value.value = value;
      return _value.value;
    } else {
      const truthy = resolveUnref(truthyValue);
      _value.value = _value.value === truthy ? resolveUnref(falsyValue) : truthy;
      return _value.value;
    }
  }
  if (valueIsRef)
    return toggle;
  else
    return [_value, toggle];
}
var __getOwnPropSymbols$6 = Object.getOwnPropertySymbols;
var __hasOwnProp$6 = Object.prototype.hasOwnProperty;
var __propIsEnum$6 = Object.prototype.propertyIsEnumerable;
var __objRest$5 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$6.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$6)
    for (var prop of __getOwnPropSymbols$6(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$6.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function watchWithFilter(source, cb, options2 = {}) {
  const _a2 = options2, {
    eventFilter = bypassFilter
  } = _a2, watchOptions = __objRest$5(_a2, [
    "eventFilter"
  ]);
  return watch(source, createFilterWrapper(eventFilter, cb), watchOptions);
}
var __defProp$2 = Object.defineProperty;
var __defProps$2 = Object.defineProperties;
var __getOwnPropDescs$2 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$2 = Object.getOwnPropertySymbols;
var __hasOwnProp$2 = Object.prototype.hasOwnProperty;
var __propIsEnum$2 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$2 = (obj, key, value) => key in obj ? __defProp$2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$2 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$2.call(b, prop))
      __defNormalProp$2(a, prop, b[prop]);
  if (__getOwnPropSymbols$2)
    for (var prop of __getOwnPropSymbols$2(b)) {
      if (__propIsEnum$2.call(b, prop))
        __defNormalProp$2(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$2 = (a, b) => __defProps$2(a, __getOwnPropDescs$2(b));
var __objRest$1 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$2.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$2)
    for (var prop of __getOwnPropSymbols$2(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$2.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function watchPausable(source, cb, options2 = {}) {
  const _a2 = options2, {
    eventFilter: filter
  } = _a2, watchOptions = __objRest$1(_a2, [
    "eventFilter"
  ]);
  const { eventFilter, pause, resume, isActive } = pausableFilter(filter);
  const stop = watchWithFilter(source, cb, __spreadProps$2(__spreadValues$2({}, watchOptions), {
    eventFilter
  }));
  return { stop, pause, resume, isActive };
}
function unrefElement(elRef) {
  var _a2;
  const plain = resolveUnref(elRef);
  return (_a2 = plain == null ? void 0 : plain.$el) != null ? _a2 : plain;
}
const defaultWindow = isClient ? window : void 0;
function useEventListener(...args) {
  let target;
  let events;
  let listeners;
  let options2;
  if (isString(args[0]) || Array.isArray(args[0])) {
    [events, listeners, options2] = args;
    target = defaultWindow;
  } else {
    [target, events, listeners, options2] = args;
  }
  if (!target)
    return noop;
  if (!Array.isArray(events))
    events = [events];
  if (!Array.isArray(listeners))
    listeners = [listeners];
  const cleanups = [];
  const cleanup = () => {
    cleanups.forEach((fn) => fn());
    cleanups.length = 0;
  };
  const register = (el, event, listener) => {
    el.addEventListener(event, listener, options2);
    return () => el.removeEventListener(event, listener, options2);
  };
  const stopWatch = watch(() => unrefElement(target), (el) => {
    cleanup();
    if (!el)
      return;
    cleanups.push(...events.flatMap((event) => {
      return listeners.map((listener) => register(el, event, listener));
    }));
  }, { immediate: true, flush: "post" });
  const stop = () => {
    stopWatch();
    cleanup();
  };
  tryOnScopeDispose(stop);
  return stop;
}
function useSupported(callback, sync = false) {
  const isSupported3 = ref();
  const update = () => isSupported3.value = Boolean(callback());
  update();
  tryOnMounted(update, sync);
  return isSupported3;
}
function useMediaQuery(query, options2 = {}) {
  const { window: window2 = defaultWindow } = options2;
  const isSupported3 = useSupported(() => window2 && "matchMedia" in window2 && typeof window2.matchMedia === "function");
  let mediaQuery;
  const matches = ref(false);
  const cleanup = () => {
    if (!mediaQuery)
      return;
    if ("removeEventListener" in mediaQuery)
      mediaQuery.removeEventListener("change", update);
    else
      mediaQuery.removeListener(update);
  };
  const update = () => {
    if (!isSupported3.value)
      return;
    cleanup();
    mediaQuery = window2.matchMedia(resolveRef(query).value);
    matches.value = mediaQuery.matches;
    if ("addEventListener" in mediaQuery)
      mediaQuery.addEventListener("change", update);
    else
      mediaQuery.addListener(update);
  };
  watchEffect(update);
  tryOnScopeDispose(() => cleanup());
  return matches;
}
const _global = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
const globalKey = "__vueuse_ssr_handlers__";
_global[globalKey] = _global[globalKey] || {};
const handlers = _global[globalKey];
function getSSRHandler(key, fallback) {
  return handlers[key] || fallback;
}
function guessSerializerType(rawInit) {
  return rawInit == null ? "any" : rawInit instanceof Set ? "set" : rawInit instanceof Map ? "map" : rawInit instanceof Date ? "date" : typeof rawInit === "boolean" ? "boolean" : typeof rawInit === "string" ? "string" : typeof rawInit === "object" ? "object" : !Number.isNaN(rawInit) ? "number" : "any";
}
var __defProp$j = Object.defineProperty;
var __getOwnPropSymbols$l = Object.getOwnPropertySymbols;
var __hasOwnProp$l = Object.prototype.hasOwnProperty;
var __propIsEnum$l = Object.prototype.propertyIsEnumerable;
var __defNormalProp$j = (obj, key, value) => key in obj ? __defProp$j(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$j = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$l.call(b, prop))
      __defNormalProp$j(a, prop, b[prop]);
  if (__getOwnPropSymbols$l)
    for (var prop of __getOwnPropSymbols$l(b)) {
      if (__propIsEnum$l.call(b, prop))
        __defNormalProp$j(a, prop, b[prop]);
    }
  return a;
};
const StorageSerializers = {
  boolean: {
    read: (v) => v === "true",
    write: (v) => String(v)
  },
  object: {
    read: (v) => JSON.parse(v),
    write: (v) => JSON.stringify(v)
  },
  number: {
    read: (v) => Number.parseFloat(v),
    write: (v) => String(v)
  },
  any: {
    read: (v) => v,
    write: (v) => String(v)
  },
  string: {
    read: (v) => v,
    write: (v) => String(v)
  },
  map: {
    read: (v) => new Map(JSON.parse(v)),
    write: (v) => JSON.stringify(Array.from(v.entries()))
  },
  set: {
    read: (v) => new Set(JSON.parse(v)),
    write: (v) => JSON.stringify(Array.from(v))
  },
  date: {
    read: (v) => new Date(v),
    write: (v) => v.toISOString()
  }
};
function useStorage(key, defaults, storage, options2 = {}) {
  var _a2;
  const {
    flush = "pre",
    deep = true,
    listenToStorageChanges = true,
    writeDefaults = true,
    mergeDefaults = false,
    shallow,
    window: window2 = defaultWindow,
    eventFilter,
    onError = (e) => {
      console.error(e);
    }
  } = options2;
  const data = (shallow ? shallowRef : ref)(defaults);
  if (!storage) {
    try {
      storage = getSSRHandler("getDefaultStorage", () => {
        var _a22;
        return (_a22 = defaultWindow) == null ? void 0 : _a22.localStorage;
      })();
    } catch (e) {
      onError(e);
    }
  }
  if (!storage)
    return data;
  const rawInit = resolveUnref(defaults);
  const type = guessSerializerType(rawInit);
  const serializer = (_a2 = options2.serializer) != null ? _a2 : StorageSerializers[type];
  const { pause: pauseWatch, resume: resumeWatch } = watchPausable(data, () => write(data.value), { flush, deep, eventFilter });
  if (window2 && listenToStorageChanges)
    useEventListener(window2, "storage", update);
  update();
  return data;
  function write(v) {
    try {
      if (v == null) {
        storage.removeItem(key);
      } else {
        const serialized = serializer.write(v);
        const oldValue = storage.getItem(key);
        if (oldValue !== serialized) {
          storage.setItem(key, serialized);
          if (window2) {
            window2 == null ? void 0 : window2.dispatchEvent(new StorageEvent("storage", {
              key,
              oldValue,
              newValue: serialized,
              storageArea: storage
            }));
          }
        }
      }
    } catch (e) {
      onError(e);
    }
  }
  function read(event) {
    const rawValue = event ? event.newValue : storage.getItem(key);
    if (rawValue == null) {
      if (writeDefaults && rawInit !== null)
        storage.setItem(key, serializer.write(rawInit));
      return rawInit;
    } else if (!event && mergeDefaults) {
      const value = serializer.read(rawValue);
      if (isFunction(mergeDefaults))
        return mergeDefaults(value, rawInit);
      else if (type === "object" && !Array.isArray(value))
        return __spreadValues$j(__spreadValues$j({}, rawInit), value);
      return value;
    } else if (typeof rawValue !== "string") {
      return rawValue;
    } else {
      return serializer.read(rawValue);
    }
  }
  function update(event) {
    if (event && event.storageArea !== storage)
      return;
    if (event && event.key == null) {
      data.value = rawInit;
      return;
    }
    if (event && event.key !== key)
      return;
    pauseWatch();
    try {
      data.value = read(event);
    } catch (e) {
      onError(e);
    } finally {
      if (event)
        nextTick(resumeWatch);
      else
        resumeWatch();
    }
  }
}
function usePreferredDark(options2) {
  return useMediaQuery("(prefers-color-scheme: dark)", options2);
}
var SwipeDirection;
(function(SwipeDirection2) {
  SwipeDirection2["UP"] = "UP";
  SwipeDirection2["RIGHT"] = "RIGHT";
  SwipeDirection2["DOWN"] = "DOWN";
  SwipeDirection2["LEFT"] = "LEFT";
  SwipeDirection2["NONE"] = "NONE";
})(SwipeDirection || (SwipeDirection = {}));
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
const _TransitionPresets = {
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6]
};
__spreadValues({
  linear: identity
}, _TransitionPresets);
const useThemeLocaleData = () => useThemeLocaleData$1();
const darkModeSymbol = Symbol("");
const useDarkMode = () => {
  const isDarkMode = inject(darkModeSymbol);
  if (!isDarkMode) {
    throw new Error("useDarkMode() is called without provider.");
  }
  return isDarkMode;
};
const setupDarkMode = () => {
  const themeLocale = useThemeLocaleData();
  const isDarkPreferred = usePreferredDark();
  const darkStorage = useStorage("vuepress-color-scheme", themeLocale.value.colorMode);
  const isDarkMode = computed({
    get() {
      if (!themeLocale.value.colorModeSwitch) {
        return themeLocale.value.colorMode === "dark";
      }
      if (darkStorage.value === "auto") {
        return isDarkPreferred.value;
      }
      return darkStorage.value === "dark";
    },
    set(val) {
      if (val === isDarkPreferred.value) {
        darkStorage.value = "auto";
      } else {
        darkStorage.value = val ? "dark" : "light";
      }
    }
  });
  provide(darkModeSymbol, isDarkMode);
  updateHtmlDarkClass(isDarkMode);
};
const updateHtmlDarkClass = (isDarkMode) => {
  const update = (value = isDarkMode.value) => {
    const htmlEl = window == null ? void 0 : window.document.querySelector("html");
    htmlEl == null ? void 0 : htmlEl.classList.toggle("dark", value);
  };
  onMounted(() => {
    watch(isDarkMode, update, { immediate: true });
  });
  onUnmounted(() => update());
};
const useResolveRouteWithRedirect = (...args) => {
  const router = useRouter();
  const route = router.resolve(...args);
  const lastMatched = route.matched[route.matched.length - 1];
  if (!(lastMatched == null ? void 0 : lastMatched.redirect)) {
    return route;
  }
  const { redirect } = lastMatched;
  const resolvedRedirect = isFunction$1(redirect) ? redirect(route) : redirect;
  const resolvedRedirectObj = isString$1(resolvedRedirect) ? { path: resolvedRedirect } : resolvedRedirect;
  return useResolveRouteWithRedirect({
    hash: route.hash,
    query: route.query,
    params: route.params,
    ...resolvedRedirectObj
  });
};
const useNavLink = (item) => {
  const resolved = useResolveRouteWithRedirect(encodeURI(item));
  return {
    text: resolved.meta.title || item,
    link: resolved.name === "404" ? item : resolved.fullPath
  };
};
let promise = null;
let promiseResolve = null;
const scrollPromise = {
  wait: () => promise,
  pending: () => {
    promise = new Promise((resolve) => promiseResolve = resolve);
  },
  resolve: () => {
    promiseResolve == null ? void 0 : promiseResolve();
    promise = null;
    promiseResolve = null;
  }
};
const useScrollPromise = () => scrollPromise;
const sidebarItemsSymbol = Symbol("sidebarItems");
const useSidebarItems = () => {
  const sidebarItems = inject(sidebarItemsSymbol);
  if (!sidebarItems) {
    throw new Error("useSidebarItems() is called without provider.");
  }
  return sidebarItems;
};
const setupSidebarItems = () => {
  const themeLocale = useThemeLocaleData();
  const frontmatter = usePageFrontmatter();
  const sidebarItems = computed(() => resolveSidebarItems(frontmatter.value, themeLocale.value));
  provide(sidebarItemsSymbol, sidebarItems);
};
const resolveSidebarItems = (frontmatter, themeLocale) => {
  const sidebarConfig = frontmatter.sidebar ?? themeLocale.sidebar ?? "auto";
  const sidebarDepth = frontmatter.sidebarDepth ?? themeLocale.sidebarDepth ?? 2;
  if (frontmatter.home || sidebarConfig === false) {
    return [];
  }
  if (sidebarConfig === "auto") {
    return resolveAutoSidebarItems(sidebarDepth);
  }
  if (isArray(sidebarConfig)) {
    return resolveArraySidebarItems(sidebarConfig, sidebarDepth);
  }
  if (isPlainObject(sidebarConfig)) {
    return resolveMultiSidebarItems(sidebarConfig, sidebarDepth);
  }
  return [];
};
const headerToSidebarItem = (header, sidebarDepth) => ({
  text: header.title,
  link: header.link,
  children: headersToSidebarItemChildren(header.children, sidebarDepth)
});
const headersToSidebarItemChildren = (headers, sidebarDepth) => sidebarDepth > 0 ? headers.map((header) => headerToSidebarItem(header, sidebarDepth - 1)) : [];
const resolveAutoSidebarItems = (sidebarDepth) => {
  const page = usePageData();
  return [
    {
      text: page.value.title,
      children: headersToSidebarItemChildren(page.value.headers, sidebarDepth)
    }
  ];
};
const resolveArraySidebarItems = (sidebarConfig, sidebarDepth) => {
  const route = useRoute();
  const page = usePageData();
  const handleChildItem = (item) => {
    var _a2;
    let childItem;
    if (isString$1(item)) {
      childItem = useNavLink(item);
    } else {
      childItem = item;
    }
    if (childItem.children) {
      return {
        ...childItem,
        children: childItem.children.map((item2) => handleChildItem(item2))
      };
    }
    if (childItem.link === route.path) {
      const headers = ((_a2 = page.value.headers[0]) == null ? void 0 : _a2.level) === 1 ? page.value.headers[0].children : page.value.headers;
      return {
        ...childItem,
        children: headersToSidebarItemChildren(headers, sidebarDepth)
      };
    }
    return childItem;
  };
  return sidebarConfig.map((item) => handleChildItem(item));
};
const resolveMultiSidebarItems = (sidebarConfig, sidebarDepth) => {
  const route = useRoute();
  const sidebarPath = resolveLocalePath(sidebarConfig, route.path);
  const matchedSidebarConfig = sidebarConfig[sidebarPath] ?? [];
  return resolveArraySidebarItems(matchedSidebarConfig, sidebarDepth);
};
const _sfc_main$l = {};
const _hoisted_1$h = { class: "theme-default-content" };
function _sfc_render(_ctx, _cache) {
  const _component_Content = resolveComponent("Content");
  return openBlock(), createElementBlock("div", _hoisted_1$h, [
    createVNode(_component_Content)
  ]);
}
const HomeContent = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["render", _sfc_render], ["__file", "HomeContent.vue"]]);
const _hoisted_1$g = {
  key: 0,
  class: "features"
};
const _sfc_main$k = /* @__PURE__ */ defineComponent({
  __name: "HomeFeatures",
  setup(__props) {
    const frontmatter = usePageFrontmatter();
    const features = computed(() => {
      if (isArray(frontmatter.value.features)) {
        return frontmatter.value.features;
      }
      return [];
    });
    return (_ctx, _cache) => {
      return unref(features).length ? (openBlock(), createElementBlock("div", _hoisted_1$g, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(features), (feature) => {
          return openBlock(), createElementBlock("div", {
            key: feature.title,
            class: "feature"
          }, [
            createBaseVNode("h2", null, toDisplayString(feature.title), 1),
            createBaseVNode("p", null, toDisplayString(feature.details), 1)
          ]);
        }), 128))
      ])) : createCommentVNode("v-if", true);
    };
  }
});
const HomeFeatures = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["__file", "HomeFeatures.vue"]]);
const _hoisted_1$f = ["innerHTML"];
const _hoisted_2$a = ["textContent"];
const _sfc_main$j = /* @__PURE__ */ defineComponent({
  __name: "HomeFooter",
  setup(__props) {
    const frontmatter = usePageFrontmatter();
    const footer = computed(() => frontmatter.value.footer);
    const footerHtml = computed(() => frontmatter.value.footerHtml);
    return (_ctx, _cache) => {
      return unref(footer) ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
        createCommentVNode(" eslint-disable-next-line vue/no-v-html "),
        unref(footerHtml) ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: "footer",
          innerHTML: unref(footer)
        }, null, 8, _hoisted_1$f)) : (openBlock(), createElementBlock("div", {
          key: 1,
          class: "footer",
          textContent: toDisplayString(unref(footer))
        }, null, 8, _hoisted_2$a))
      ], 64)) : createCommentVNode("v-if", true);
    };
  }
});
const HomeFooter = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["__file", "HomeFooter.vue"]]);
const _hoisted_1$e = ["href", "rel", "target", "aria-label"];
const __default__ = defineComponent({
  inheritAttrs: false
});
const _sfc_main$i = /* @__PURE__ */ defineComponent({
  ...__default__,
  __name: "AutoLink",
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const route = useRoute();
    const site = useSiteData();
    const { item } = toRefs(props);
    const hasHttpProtocol = computed(() => isLinkHttp(item.value.link));
    const hasNonHttpProtocol = computed(
      () => isLinkMailto(item.value.link) || isLinkTel(item.value.link)
    );
    const linkTarget = computed(() => {
      if (hasNonHttpProtocol.value)
        return void 0;
      if (item.value.target)
        return item.value.target;
      if (hasHttpProtocol.value)
        return "_blank";
      return void 0;
    });
    const isBlankTarget = computed(() => linkTarget.value === "_blank");
    const isRouterLink = computed(
      () => !hasHttpProtocol.value && !hasNonHttpProtocol.value && !isBlankTarget.value
    );
    const linkRel = computed(() => {
      if (hasNonHttpProtocol.value)
        return void 0;
      if (item.value.rel)
        return item.value.rel;
      if (isBlankTarget.value)
        return "noopener noreferrer";
      return void 0;
    });
    const linkAriaLabel = computed(() => item.value.ariaLabel || item.value.text);
    const shouldBeActiveInSubpath = computed(() => {
      const localeKeys = Object.keys(site.value.locales);
      if (localeKeys.length) {
        return !localeKeys.some((key) => key === item.value.link);
      }
      return item.value.link !== "/";
    });
    const isActiveInSubpath = computed(() => {
      if (!shouldBeActiveInSubpath.value) {
        return false;
      }
      return route.path.startsWith(item.value.link);
    });
    const isActive = computed(() => {
      if (!isRouterLink.value) {
        return false;
      }
      if (item.value.activeMatch) {
        return new RegExp(item.value.activeMatch).test(route.path);
      }
      return isActiveInSubpath.value;
    });
    return (_ctx, _cache) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      const _component_AutoLinkExternalIcon = resolveComponent("AutoLinkExternalIcon");
      return unref(isRouterLink) ? (openBlock(), createBlock(_component_RouterLink, mergeProps({
        key: 0,
        class: { "router-link-active": unref(isActive) },
        to: unref(item).link,
        "aria-label": unref(linkAriaLabel)
      }, _ctx.$attrs), {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "before"),
          createTextVNode(" " + toDisplayString(unref(item).text) + " ", 1),
          renderSlot(_ctx.$slots, "after")
        ]),
        _: 3
      }, 16, ["class", "to", "aria-label"])) : (openBlock(), createElementBlock("a", mergeProps({
        key: 1,
        class: "external-link",
        href: unref(item).link,
        rel: unref(linkRel),
        target: unref(linkTarget),
        "aria-label": unref(linkAriaLabel)
      }, _ctx.$attrs), [
        renderSlot(_ctx.$slots, "before"),
        createTextVNode(" " + toDisplayString(unref(item).text) + " ", 1),
        unref(isBlankTarget) ? (openBlock(), createBlock(_component_AutoLinkExternalIcon, { key: 0 })) : createCommentVNode("v-if", true),
        renderSlot(_ctx.$slots, "after")
      ], 16, _hoisted_1$e));
    };
  }
});
const AutoLink = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["__file", "AutoLink.vue"]]);
const _hoisted_1$d = { class: "hero" };
const _hoisted_2$9 = {
  key: 0,
  id: "main-title"
};
const _hoisted_3$7 = {
  key: 1,
  class: "description"
};
const _hoisted_4$4 = {
  key: 2,
  class: "actions"
};
const _sfc_main$h = /* @__PURE__ */ defineComponent({
  __name: "HomeHero",
  setup(__props) {
    const frontmatter = usePageFrontmatter();
    const siteLocale = useSiteLocaleData();
    const isDarkMode = useDarkMode();
    const heroImage = computed(() => {
      if (isDarkMode.value && frontmatter.value.heroImageDark !== void 0) {
        return frontmatter.value.heroImageDark;
      }
      return frontmatter.value.heroImage;
    });
    const heroAlt = computed(
      () => frontmatter.value.heroAlt || heroText.value || "hero"
    );
    const heroHeight = computed(() => frontmatter.value.heroHeight || 280);
    const heroText = computed(() => {
      if (frontmatter.value.heroText === null) {
        return null;
      }
      return frontmatter.value.heroText || siteLocale.value.title || "Hello";
    });
    const tagline = computed(() => {
      if (frontmatter.value.tagline === null) {
        return null;
      }
      return frontmatter.value.tagline || siteLocale.value.description || "Welcome to your VuePress site";
    });
    const actions = computed(() => {
      if (!isArray(frontmatter.value.actions)) {
        return [];
      }
      return frontmatter.value.actions.map(({ text, link, type = "primary" }) => ({
        text,
        link,
        type
      }));
    });
    const HomeHeroImage = () => {
      if (!heroImage.value)
        return null;
      const img = h("img", {
        src: withBase(heroImage.value),
        alt: heroAlt.value,
        height: heroHeight.value
      });
      if (frontmatter.value.heroImageDark === void 0) {
        return img;
      }
      return h(ClientOnly, () => img);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("header", _hoisted_1$d, [
        createVNode(HomeHeroImage),
        unref(heroText) ? (openBlock(), createElementBlock("h1", _hoisted_2$9, toDisplayString(unref(heroText)), 1)) : createCommentVNode("v-if", true),
        unref(tagline) ? (openBlock(), createElementBlock("p", _hoisted_3$7, toDisplayString(unref(tagline)), 1)) : createCommentVNode("v-if", true),
        unref(actions).length ? (openBlock(), createElementBlock("p", _hoisted_4$4, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(actions), (action) => {
            return openBlock(), createBlock(AutoLink, {
              key: action.text,
              class: normalizeClass(["action-button", [action.type]]),
              item: action
            }, null, 8, ["class", "item"]);
          }), 128))
        ])) : createCommentVNode("v-if", true)
      ]);
    };
  }
});
const HomeHero = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["__file", "HomeHero.vue"]]);
const _hoisted_1$c = { class: "home" };
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  __name: "Home",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("main", _hoisted_1$c, [
        createVNode(HomeHero),
        createVNode(HomeFeatures),
        createVNode(HomeContent),
        createVNode(HomeFooter)
      ]);
    };
  }
});
const Home = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["__file", "Home.vue"]]);
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "NavbarBrand",
  setup(__props) {
    const routeLocale = useRouteLocale();
    const siteLocale = useSiteLocaleData();
    const themeLocale = useThemeLocaleData();
    const isDarkMode = useDarkMode();
    const navbarBrandLink = computed(
      () => themeLocale.value.home || routeLocale.value
    );
    const navbarBrandTitle = computed(() => siteLocale.value.title);
    const navbarBrandLogo = computed(() => {
      if (isDarkMode.value && themeLocale.value.logoDark !== void 0) {
        return themeLocale.value.logoDark;
      }
      return themeLocale.value.logo;
    });
    const NavbarBrandLogo = () => {
      if (!navbarBrandLogo.value)
        return null;
      const img = h("img", {
        class: "logo",
        src: withBase(navbarBrandLogo.value),
        alt: navbarBrandTitle.value
      });
      if (themeLocale.value.logoDark === void 0) {
        return img;
      }
      return h(ClientOnly, () => img);
    };
    return (_ctx, _cache) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      return openBlock(), createBlock(_component_RouterLink, { to: unref(navbarBrandLink) }, {
        default: withCtx(() => [
          createVNode(NavbarBrandLogo),
          unref(navbarBrandTitle) ? (openBlock(), createElementBlock("span", {
            key: 0,
            class: normalizeClass(["site-name", { "can-hide": unref(navbarBrandLogo) }])
          }, toDisplayString(unref(navbarBrandTitle)), 3)) : createCommentVNode("v-if", true)
        ]),
        _: 1
      }, 8, ["to"]);
    };
  }
});
const NavbarBrand = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["__file", "NavbarBrand.vue"]]);
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "DropdownTransition",
  setup(__props) {
    const setHeight = (items) => {
      items.style.height = items.scrollHeight + "px";
    };
    const unsetHeight = (items) => {
      items.style.height = "";
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Transition, {
        name: "dropdown",
        onEnter: setHeight,
        onAfterEnter: unsetHeight,
        onBeforeLeave: setHeight
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      });
    };
  }
});
const DropdownTransition = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["__file", "DropdownTransition.vue"]]);
const _hoisted_1$b = ["aria-label"];
const _hoisted_2$8 = { class: "title" };
const _hoisted_3$6 = /* @__PURE__ */ createBaseVNode("span", { class: "arrow down" }, null, -1);
const _hoisted_4$3 = ["aria-label"];
const _hoisted_5$1 = { class: "title" };
const _hoisted_6$1 = { class: "navbar-dropdown" };
const _hoisted_7$1 = { class: "navbar-dropdown-subtitle" };
const _hoisted_8$1 = { key: 1 };
const _hoisted_9$1 = { class: "navbar-dropdown-subitem-wrapper" };
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "NavbarDropdown",
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const { item } = toRefs(props);
    const dropdownAriaLabel = computed(
      () => item.value.ariaLabel || item.value.text
    );
    const open = ref(false);
    const route = useRoute();
    watch(
      () => route.path,
      () => {
        open.value = false;
      }
    );
    const handleDropdown = (e) => {
      const isTriggerByTab = e.detail === 0;
      if (isTriggerByTab) {
        open.value = !open.value;
      } else {
        open.value = false;
      }
    };
    const isLastItemOfArray = (item2, arr) => arr[arr.length - 1] === item2;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["navbar-dropdown-wrapper", { open: open.value }])
      }, [
        createBaseVNode("button", {
          class: "navbar-dropdown-title",
          type: "button",
          "aria-label": unref(dropdownAriaLabel),
          onClick: handleDropdown
        }, [
          createBaseVNode("span", _hoisted_2$8, toDisplayString(unref(item).text), 1),
          _hoisted_3$6
        ], 8, _hoisted_1$b),
        createBaseVNode("button", {
          class: "navbar-dropdown-title-mobile",
          type: "button",
          "aria-label": unref(dropdownAriaLabel),
          onClick: _cache[0] || (_cache[0] = ($event) => open.value = !open.value)
        }, [
          createBaseVNode("span", _hoisted_5$1, toDisplayString(unref(item).text), 1),
          createBaseVNode("span", {
            class: normalizeClass(["arrow", open.value ? "down" : "right"])
          }, null, 2)
        ], 8, _hoisted_4$3),
        createVNode(DropdownTransition, null, {
          default: withCtx(() => [
            withDirectives(createBaseVNode("ul", _hoisted_6$1, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(item).children, (child) => {
                return openBlock(), createElementBlock("li", {
                  key: child.text,
                  class: "navbar-dropdown-item"
                }, [
                  child.children ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                    createBaseVNode("h4", _hoisted_7$1, [
                      child.link ? (openBlock(), createBlock(AutoLink, {
                        key: 0,
                        item: child,
                        onFocusout: ($event) => isLastItemOfArray(child, unref(item).children) && child.children.length === 0 && (open.value = false)
                      }, null, 8, ["item", "onFocusout"])) : (openBlock(), createElementBlock("span", _hoisted_8$1, toDisplayString(child.text), 1))
                    ]),
                    createBaseVNode("ul", _hoisted_9$1, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(child.children, (grandchild) => {
                        return openBlock(), createElementBlock("li", {
                          key: grandchild.link,
                          class: "navbar-dropdown-subitem"
                        }, [
                          createVNode(AutoLink, {
                            item: grandchild,
                            onFocusout: ($event) => isLastItemOfArray(grandchild, child.children) && isLastItemOfArray(child, unref(item).children) && (open.value = false)
                          }, null, 8, ["item", "onFocusout"])
                        ]);
                      }), 128))
                    ])
                  ], 64)) : (openBlock(), createBlock(AutoLink, {
                    key: 1,
                    item: child,
                    onFocusout: ($event) => isLastItemOfArray(child, unref(item).children) && (open.value = false)
                  }, null, 8, ["item", "onFocusout"]))
                ]);
              }), 128))
            ], 512), [
              [vShow, open.value]
            ])
          ]),
          _: 1
        })
      ], 2);
    };
  }
});
const NavbarDropdown = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["__file", "NavbarDropdown.vue"]]);
const normalizePath = (path) => decodeURI(path).replace(/#.*$/, "").replace(/(index)?\.(md|html)$/, "");
const isActiveLink = (link, route) => {
  if (route.hash === link) {
    return true;
  }
  const currentPath = normalizePath(route.path);
  const targetPath = normalizePath(link);
  return currentPath === targetPath;
};
const isActiveSidebarItem = (item, route) => {
  if (item.link && isActiveLink(item.link, route)) {
    return true;
  }
  if (item.children) {
    return item.children.some((child) => isActiveSidebarItem(child, route));
  }
  return false;
};
const resolveRepoType = (repo) => {
  if (!isLinkHttp(repo) || /github\.com/.test(repo))
    return "GitHub";
  if (/bitbucket\.org/.test(repo))
    return "Bitbucket";
  if (/gitlab\.com/.test(repo))
    return "GitLab";
  if (/gitee\.com/.test(repo))
    return "Gitee";
  return null;
};
const editLinkPatterns = {
  GitHub: ":repo/edit/:branch/:path",
  GitLab: ":repo/-/edit/:branch/:path",
  Gitee: ":repo/edit/:branch/:path",
  Bitbucket: ":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"
};
const resolveEditLinkPatterns = ({ docsRepo, editLinkPattern }) => {
  if (editLinkPattern) {
    return editLinkPattern;
  }
  const repoType = resolveRepoType(docsRepo);
  if (repoType !== null) {
    return editLinkPatterns[repoType];
  }
  return null;
};
const resolveEditLink = ({ docsRepo, docsBranch, docsDir, filePathRelative, editLinkPattern }) => {
  if (!filePathRelative)
    return null;
  const pattern = resolveEditLinkPatterns({ docsRepo, editLinkPattern });
  if (!pattern)
    return null;
  return pattern.replace(/:repo/, isLinkHttp(docsRepo) ? docsRepo : `https://github.com/${docsRepo}`).replace(/:branch/, docsBranch).replace(/:path/, removeLeadingSlash(`${removeEndingSlash(docsDir)}/${filePathRelative}`));
};
const _hoisted_1$a = {
  key: 0,
  class: "navbar-items"
};
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "NavbarItems",
  setup(__props) {
    const useNavbarSelectLanguage = () => {
      const router = useRouter();
      const routeLocale = useRouteLocale();
      const siteLocale = useSiteLocaleData();
      const themeLocale = useThemeLocaleData();
      return computed(() => {
        const localePaths = Object.keys(siteLocale.value.locales);
        if (localePaths.length < 2) {
          return [];
        }
        const currentPath = router.currentRoute.value.path;
        const currentFullPath = router.currentRoute.value.fullPath;
        const languageDropdown = {
          text: themeLocale.value.selectLanguageText ?? "unknown language",
          ariaLabel: themeLocale.value.selectLanguageAriaLabel ?? themeLocale.value.selectLanguageText ?? "unknown language",
          children: localePaths.map((targetLocalePath) => {
            var _a2, _b;
            const targetSiteLocale = ((_a2 = siteLocale.value.locales) == null ? void 0 : _a2[targetLocalePath]) ?? {};
            const targetThemeLocale = ((_b = themeLocale.value.locales) == null ? void 0 : _b[targetLocalePath]) ?? {};
            const targetLang = `${targetSiteLocale.lang}`;
            const text = targetThemeLocale.selectLanguageName ?? targetLang;
            let link;
            if (targetLang === siteLocale.value.lang) {
              link = currentFullPath;
            } else {
              const targetLocalePage = currentPath.replace(
                routeLocale.value,
                targetLocalePath
              );
              if (router.getRoutes().some((item) => item.path === targetLocalePage)) {
                link = currentFullPath.replace(currentPath, targetLocalePage);
              } else {
                link = targetThemeLocale.home ?? targetLocalePath;
              }
            }
            return {
              text,
              link
            };
          })
        };
        return [languageDropdown];
      });
    };
    const useNavbarRepo = () => {
      const themeLocale = useThemeLocaleData();
      const repo = computed(() => themeLocale.value.repo);
      const repoType = computed(
        () => repo.value ? resolveRepoType(repo.value) : null
      );
      const repoLink = computed(() => {
        if (repo.value && !isLinkHttp(repo.value)) {
          return `https://github.com/${repo.value}`;
        }
        return repo.value;
      });
      const repoLabel = computed(() => {
        if (!repoLink.value)
          return null;
        if (themeLocale.value.repoLabel)
          return themeLocale.value.repoLabel;
        if (repoType.value === null)
          return "Source";
        return repoType.value;
      });
      return computed(() => {
        if (!repoLink.value || !repoLabel.value) {
          return [];
        }
        return [
          {
            text: repoLabel.value,
            link: repoLink.value
          }
        ];
      });
    };
    const resolveNavbarItem = (item) => {
      if (isString$1(item)) {
        return useNavLink(item);
      }
      if (item.children) {
        return {
          ...item,
          children: item.children.map(resolveNavbarItem)
        };
      }
      return item;
    };
    const useNavbarConfig = () => {
      const themeLocale = useThemeLocaleData();
      return computed(() => (themeLocale.value.navbar || []).map(resolveNavbarItem));
    };
    const isMobile = ref(false);
    const navbarConfig = useNavbarConfig();
    const navbarSelectLanguage = useNavbarSelectLanguage();
    const navbarRepo = useNavbarRepo();
    const navbarLinks = computed(() => [
      ...navbarConfig.value,
      ...navbarSelectLanguage.value,
      ...navbarRepo.value
    ]);
    onMounted(() => {
      const MOBILE_DESKTOP_BREAKPOINT = 719;
      const handleMobile = () => {
        if (window.innerWidth < MOBILE_DESKTOP_BREAKPOINT) {
          isMobile.value = true;
        } else {
          isMobile.value = false;
        }
      };
      handleMobile();
      window.addEventListener("resize", handleMobile, false);
      window.addEventListener("orientationchange", handleMobile, false);
    });
    return (_ctx, _cache) => {
      return unref(navbarLinks).length ? (openBlock(), createElementBlock("nav", _hoisted_1$a, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(navbarLinks), (item) => {
          return openBlock(), createElementBlock("div", {
            key: item.text,
            class: "navbar-item"
          }, [
            item.children ? (openBlock(), createBlock(NavbarDropdown, {
              key: 0,
              item,
              class: normalizeClass(isMobile.value ? "mobile" : "")
            }, null, 8, ["item", "class"])) : (openBlock(), createBlock(AutoLink, {
              key: 1,
              item
            }, null, 8, ["item"]))
          ]);
        }), 128))
      ])) : createCommentVNode("v-if", true);
    };
  }
});
const NavbarItems = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__file", "NavbarItems.vue"]]);
const _hoisted_1$9 = ["title"];
const _hoisted_2$7 = {
  class: "icon",
  focusable: "false",
  viewBox: "0 0 32 32"
};
const _hoisted_3$5 = /* @__PURE__ */ createStaticVNode('<path d="M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6z" fill="currentColor"></path><path d="M5.394 6.813l1.414-1.415l3.506 3.506L8.9 10.318z" fill="currentColor"></path><path d="M2 15.005h5v2H2z" fill="currentColor"></path><path d="M5.394 25.197L8.9 21.691l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 25.005h2v5h-2z" fill="currentColor"></path><path d="M21.687 23.106l1.414-1.415l3.506 3.506l-1.414 1.414z" fill="currentColor"></path><path d="M25 15.005h5v2h-5z" fill="currentColor"></path><path d="M21.687 8.904l3.506-3.506l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 2.005h2v5h-2z" fill="currentColor"></path>', 9);
const _hoisted_12 = [
  _hoisted_3$5
];
const _hoisted_13 = {
  class: "icon",
  focusable: "false",
  viewBox: "0 0 32 32"
};
const _hoisted_14 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3z",
  fill: "currentColor"
}, null, -1);
const _hoisted_15 = [
  _hoisted_14
];
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "ToggleColorModeButton",
  setup(__props) {
    const themeLocale = useThemeLocaleData();
    const isDarkMode = useDarkMode();
    const toggleColorMode = () => {
      isDarkMode.value = !isDarkMode.value;
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        class: "toggle-color-mode-button",
        title: unref(themeLocale).toggleColorMode,
        onClick: toggleColorMode
      }, [
        withDirectives((openBlock(), createElementBlock("svg", _hoisted_2$7, _hoisted_12, 512)), [
          [vShow, !unref(isDarkMode)]
        ]),
        withDirectives((openBlock(), createElementBlock("svg", _hoisted_13, _hoisted_15, 512)), [
          [vShow, unref(isDarkMode)]
        ])
      ], 8, _hoisted_1$9);
    };
  }
});
const ToggleColorModeButton = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__file", "ToggleColorModeButton.vue"]]);
const _hoisted_1$8 = ["title"];
const _hoisted_2$6 = /* @__PURE__ */ createBaseVNode("div", {
  class: "icon",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ createBaseVNode("span"),
  /* @__PURE__ */ createBaseVNode("span"),
  /* @__PURE__ */ createBaseVNode("span")
], -1);
const _hoisted_3$4 = [
  _hoisted_2$6
];
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "ToggleSidebarButton",
  emits: ["toggle"],
  setup(__props) {
    const themeLocale = useThemeLocaleData();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "toggle-sidebar-button",
        title: unref(themeLocale).toggleSidebar,
        "aria-expanded": "false",
        role: "button",
        tabindex: "0",
        onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("toggle"))
      }, _hoisted_3$4, 8, _hoisted_1$8);
    };
  }
});
const ToggleSidebarButton = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__file", "ToggleSidebarButton.vue"]]);
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "Navbar",
  emits: ["toggle-sidebar"],
  setup(__props) {
    const themeLocale = useThemeLocaleData();
    const navbar = ref(null);
    const navbarBrand = ref(null);
    const linksWrapperMaxWidth = ref(0);
    const linksWrapperStyle = computed(() => {
      if (!linksWrapperMaxWidth.value) {
        return {};
      }
      return {
        maxWidth: linksWrapperMaxWidth.value + "px"
      };
    });
    onMounted(() => {
      const MOBILE_DESKTOP_BREAKPOINT = 719;
      const navbarHorizontalPadding = getCssValue(navbar.value, "paddingLeft") + getCssValue(navbar.value, "paddingRight");
      const handleLinksWrapWidth = () => {
        var _a2;
        if (window.innerWidth < MOBILE_DESKTOP_BREAKPOINT) {
          linksWrapperMaxWidth.value = 0;
        } else {
          linksWrapperMaxWidth.value = navbar.value.offsetWidth - navbarHorizontalPadding - (((_a2 = navbarBrand.value) == null ? void 0 : _a2.offsetWidth) || 0);
        }
      };
      handleLinksWrapWidth();
      window.addEventListener("resize", handleLinksWrapWidth, false);
      window.addEventListener("orientationchange", handleLinksWrapWidth, false);
    });
    function getCssValue(el, property) {
      var _a2, _b, _c;
      const val = (_c = (_b = (_a2 = el == null ? void 0 : el.ownerDocument) == null ? void 0 : _a2.defaultView) == null ? void 0 : _b.getComputedStyle(el, null)) == null ? void 0 : _c[property];
      const num = Number.parseInt(val, 10);
      return Number.isNaN(num) ? 0 : num;
    }
    return (_ctx, _cache) => {
      const _component_NavbarSearch = resolveComponent("NavbarSearch");
      return openBlock(), createElementBlock("header", {
        ref_key: "navbar",
        ref: navbar,
        class: "navbar"
      }, [
        createVNode(ToggleSidebarButton, {
          onToggle: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("toggle-sidebar"))
        }),
        createBaseVNode("span", {
          ref_key: "navbarBrand",
          ref: navbarBrand
        }, [
          createVNode(NavbarBrand)
        ], 512),
        createBaseVNode("div", {
          class: "navbar-items-wrapper",
          style: normalizeStyle(unref(linksWrapperStyle))
        }, [
          renderSlot(_ctx.$slots, "before"),
          createVNode(NavbarItems, { class: "can-hide" }),
          renderSlot(_ctx.$slots, "after"),
          unref(themeLocale).colorModeSwitch ? (openBlock(), createBlock(ToggleColorModeButton, { key: 0 })) : createCommentVNode("v-if", true),
          createVNode(_component_NavbarSearch)
        ], 4)
      ], 512);
    };
  }
});
const Navbar = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__file", "Navbar.vue"]]);
const _hoisted_1$7 = { class: "page-meta" };
const _hoisted_2$5 = {
  key: 0,
  class: "meta-item edit-link"
};
const _hoisted_3$3 = {
  key: 1,
  class: "meta-item last-updated"
};
const _hoisted_4$2 = { class: "meta-item-label" };
const _hoisted_5 = { class: "meta-item-info" };
const _hoisted_6 = {
  key: 2,
  class: "meta-item contributors"
};
const _hoisted_7 = { class: "meta-item-label" };
const _hoisted_8 = { class: "meta-item-info" };
const _hoisted_9 = ["title"];
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "PageMeta",
  setup(__props) {
    const useEditNavLink = () => {
      const themeLocale2 = useThemeLocaleData();
      const page = usePageData();
      const frontmatter = usePageFrontmatter();
      return computed(() => {
        const showEditLink = frontmatter.value.editLink ?? themeLocale2.value.editLink ?? true;
        if (!showEditLink) {
          return null;
        }
        const {
          repo,
          docsRepo = repo,
          docsBranch = "main",
          docsDir = "",
          editLinkText
        } = themeLocale2.value;
        if (!docsRepo)
          return null;
        const editLink = resolveEditLink({
          docsRepo,
          docsBranch,
          docsDir,
          filePathRelative: page.value.filePathRelative,
          editLinkPattern: frontmatter.value.editLinkPattern ?? themeLocale2.value.editLinkPattern
        });
        if (!editLink)
          return null;
        return {
          text: editLinkText ?? "Edit this page",
          link: editLink
        };
      });
    };
    const useLastUpdated = () => {
      const themeLocale2 = useThemeLocaleData();
      const page = usePageData();
      const frontmatter = usePageFrontmatter();
      return computed(() => {
        var _a2, _b;
        const showLastUpdated = frontmatter.value.lastUpdated ?? themeLocale2.value.lastUpdated ?? true;
        if (!showLastUpdated)
          return null;
        if (!((_a2 = page.value.git) == null ? void 0 : _a2.updatedTime))
          return null;
        const updatedDate = new Date((_b = page.value.git) == null ? void 0 : _b.updatedTime);
        return updatedDate.toLocaleString();
      });
    };
    const useContributors = () => {
      const themeLocale2 = useThemeLocaleData();
      const page = usePageData();
      const frontmatter = usePageFrontmatter();
      return computed(() => {
        var _a2;
        const showContributors = frontmatter.value.contributors ?? themeLocale2.value.contributors ?? true;
        if (!showContributors)
          return null;
        return ((_a2 = page.value.git) == null ? void 0 : _a2.contributors) ?? null;
      });
    };
    const themeLocale = useThemeLocaleData();
    const editNavLink = useEditNavLink();
    const lastUpdated = useLastUpdated();
    const contributors = useContributors();
    return (_ctx, _cache) => {
      const _component_ClientOnly = resolveComponent("ClientOnly");
      return openBlock(), createElementBlock("footer", _hoisted_1$7, [
        unref(editNavLink) ? (openBlock(), createElementBlock("div", _hoisted_2$5, [
          createVNode(AutoLink, {
            class: "meta-item-label",
            item: unref(editNavLink)
          }, null, 8, ["item"])
        ])) : createCommentVNode("v-if", true),
        unref(lastUpdated) ? (openBlock(), createElementBlock("div", _hoisted_3$3, [
          createBaseVNode("span", _hoisted_4$2, toDisplayString(unref(themeLocale).lastUpdatedText) + ": ", 1),
          createVNode(_component_ClientOnly, null, {
            default: withCtx(() => [
              createBaseVNode("span", _hoisted_5, toDisplayString(unref(lastUpdated)), 1)
            ]),
            _: 1
          })
        ])) : createCommentVNode("v-if", true),
        unref(contributors) && unref(contributors).length ? (openBlock(), createElementBlock("div", _hoisted_6, [
          createBaseVNode("span", _hoisted_7, toDisplayString(unref(themeLocale).contributorsText) + ": ", 1),
          createBaseVNode("span", _hoisted_8, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(contributors), (contributor, index2) => {
              return openBlock(), createElementBlock(Fragment, { key: index2 }, [
                createBaseVNode("span", {
                  class: "contributor",
                  title: `email: ${contributor.email}`
                }, toDisplayString(contributor.name), 9, _hoisted_9),
                index2 !== unref(contributors).length - 1 ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                  createTextVNode(", ")
                ], 64)) : createCommentVNode("v-if", true)
              ], 64);
            }), 128))
          ])
        ])) : createCommentVNode("v-if", true)
      ]);
    };
  }
});
const PageMeta = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__file", "PageMeta.vue"]]);
const _hoisted_1$6 = {
  key: 0,
  class: "page-nav"
};
const _hoisted_2$4 = { class: "inner" };
const _hoisted_3$2 = {
  key: 0,
  class: "prev"
};
const _hoisted_4$1 = {
  key: 1,
  class: "next"
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "PageNav",
  setup(__props) {
    const resolveFromFrontmatterConfig = (conf) => {
      if (conf === false) {
        return null;
      }
      if (isString$1(conf)) {
        return useNavLink(conf);
      }
      if (isPlainObject(conf)) {
        return conf;
      }
      return false;
    };
    const resolveFromSidebarItems = (sidebarItems2, currentPath, offset2) => {
      const index2 = sidebarItems2.findIndex((item) => item.link === currentPath);
      if (index2 !== -1) {
        const targetItem = sidebarItems2[index2 + offset2];
        if (!(targetItem == null ? void 0 : targetItem.link)) {
          return null;
        }
        return targetItem;
      }
      for (const item of sidebarItems2) {
        if (item.children) {
          const childResult = resolveFromSidebarItems(
            item.children,
            currentPath,
            offset2
          );
          if (childResult) {
            return childResult;
          }
        }
      }
      return null;
    };
    const frontmatter = usePageFrontmatter();
    const sidebarItems = useSidebarItems();
    const route = useRoute();
    const prevNavLink = computed(() => {
      const prevConfig = resolveFromFrontmatterConfig(frontmatter.value.prev);
      if (prevConfig !== false) {
        return prevConfig;
      }
      return resolveFromSidebarItems(sidebarItems.value, route.path, -1);
    });
    const nextNavLink = computed(() => {
      const nextConfig = resolveFromFrontmatterConfig(frontmatter.value.next);
      if (nextConfig !== false) {
        return nextConfig;
      }
      return resolveFromSidebarItems(sidebarItems.value, route.path, 1);
    });
    return (_ctx, _cache) => {
      return unref(prevNavLink) || unref(nextNavLink) ? (openBlock(), createElementBlock("nav", _hoisted_1$6, [
        createBaseVNode("p", _hoisted_2$4, [
          unref(prevNavLink) ? (openBlock(), createElementBlock("span", _hoisted_3$2, [
            createVNode(AutoLink, { item: unref(prevNavLink) }, null, 8, ["item"])
          ])) : createCommentVNode("v-if", true),
          unref(nextNavLink) ? (openBlock(), createElementBlock("span", _hoisted_4$1, [
            createVNode(AutoLink, { item: unref(nextNavLink) }, null, 8, ["item"])
          ])) : createCommentVNode("v-if", true)
        ])
      ])) : createCommentVNode("v-if", true);
    };
  }
});
const PageNav = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__file", "PageNav.vue"]]);
const _hoisted_1$5 = { class: "page" };
const _hoisted_2$3 = { class: "theme-default-content" };
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "Page",
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_Content = resolveComponent("Content");
      return openBlock(), createElementBlock("main", _hoisted_1$5, [
        renderSlot(_ctx.$slots, "top"),
        createBaseVNode("div", _hoisted_2$3, [
          renderSlot(_ctx.$slots, "content-top"),
          createVNode(_component_Content),
          renderSlot(_ctx.$slots, "content-bottom")
        ]),
        createVNode(PageMeta),
        createVNode(PageNav),
        renderSlot(_ctx.$slots, "bottom")
      ]);
    };
  }
});
const Page = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__file", "Page.vue"]]);
const _hoisted_1$4 = ["onKeydown"];
const _hoisted_2$2 = { class: "sidebar-item-children" };
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "SidebarItem",
  props: {
    item: {
      type: Object,
      required: true
    },
    depth: {
      type: Number,
      required: false,
      default: 0
    }
  },
  setup(__props) {
    const props = __props;
    const { item, depth } = toRefs(props);
    const route = useRoute();
    const router = useRouter();
    const isActive = computed(() => isActiveSidebarItem(item.value, route));
    const itemClass = computed(() => ({
      "sidebar-item": true,
      "sidebar-heading": depth.value === 0,
      "active": isActive.value,
      "collapsible": item.value.collapsible
    }));
    const isOpenDefault = computed(
      () => item.value.collapsible ? isActive.value : true
    );
    const [isOpen, toggleIsOpen] = useToggle(isOpenDefault.value);
    const onClick = (e) => {
      if (item.value.collapsible) {
        e.preventDefault();
        toggleIsOpen();
      }
    };
    const unregisterRouterHook = router.afterEach((to) => {
      nextTick(() => {
        isOpen.value = isOpenDefault.value;
      });
    });
    onBeforeUnmount(() => {
      unregisterRouterHook();
    });
    return (_ctx, _cache) => {
      var _a2;
      const _component_SidebarItem = resolveComponent("SidebarItem", true);
      return openBlock(), createElementBlock("li", null, [
        unref(item).link ? (openBlock(), createBlock(AutoLink, {
          key: 0,
          class: normalizeClass(unref(itemClass)),
          item: unref(item)
        }, null, 8, ["class", "item"])) : (openBlock(), createElementBlock("p", {
          key: 1,
          tabindex: "0",
          class: normalizeClass(unref(itemClass)),
          onClick,
          onKeydown: withKeys(onClick, ["enter"])
        }, [
          createTextVNode(toDisplayString(unref(item).text) + " ", 1),
          unref(item).collapsible ? (openBlock(), createElementBlock("span", {
            key: 0,
            class: normalizeClass(["arrow", unref(isOpen) ? "down" : "right"])
          }, null, 2)) : createCommentVNode("v-if", true)
        ], 42, _hoisted_1$4)),
        ((_a2 = unref(item).children) == null ? void 0 : _a2.length) ? (openBlock(), createBlock(DropdownTransition, { key: 2 }, {
          default: withCtx(() => [
            withDirectives(createBaseVNode("ul", _hoisted_2$2, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(item).children, (child) => {
                return openBlock(), createBlock(_component_SidebarItem, {
                  key: `${unref(depth)}${child.text}${child.link}`,
                  item: child,
                  depth: unref(depth) + 1
                }, null, 8, ["item", "depth"]);
              }), 128))
            ], 512), [
              [vShow, unref(isOpen)]
            ])
          ]),
          _: 1
        })) : createCommentVNode("v-if", true)
      ]);
    };
  }
});
const SidebarItem = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__file", "SidebarItem.vue"]]);
const _hoisted_1$3 = {
  key: 0,
  class: "sidebar-items"
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "SidebarItems",
  setup(__props) {
    const route = useRoute();
    const sidebarItems = useSidebarItems();
    onMounted(() => {
      watch(
        () => route.hash,
        (hash) => {
          const sidebar = document.querySelector(".sidebar");
          if (!sidebar)
            return;
          const activeSidebarItem = document.querySelector(
            `.sidebar a.sidebar-item[href="${route.path}${hash}"]`
          );
          if (!activeSidebarItem)
            return;
          const { top: sidebarTop, height: sidebarHeight } = sidebar.getBoundingClientRect();
          const { top: activeSidebarItemTop, height: activeSidebarItemHeight } = activeSidebarItem.getBoundingClientRect();
          if (activeSidebarItemTop < sidebarTop) {
            activeSidebarItem.scrollIntoView(true);
          } else if (activeSidebarItemTop + activeSidebarItemHeight > sidebarTop + sidebarHeight) {
            activeSidebarItem.scrollIntoView(false);
          }
        }
      );
    });
    return (_ctx, _cache) => {
      return unref(sidebarItems).length ? (openBlock(), createElementBlock("ul", _hoisted_1$3, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(sidebarItems), (item) => {
          return openBlock(), createBlock(SidebarItem, {
            key: `${item.text}${item.link}`,
            item
          }, null, 8, ["item"]);
        }), 128))
      ])) : createCommentVNode("v-if", true);
    };
  }
});
const SidebarItems = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__file", "SidebarItems.vue"]]);
const _hoisted_1$2 = { class: "sidebar" };
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Sidebar",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("aside", _hoisted_1$2, [
        createVNode(NavbarItems),
        renderSlot(_ctx.$slots, "top"),
        createVNode(SidebarItems),
        renderSlot(_ctx.$slots, "bottom")
      ]);
    };
  }
});
const Sidebar = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__file", "Sidebar.vue"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Layout",
  setup(__props) {
    const page = usePageData();
    const frontmatter = usePageFrontmatter();
    const themeLocale = useThemeLocaleData();
    const shouldShowNavbar = computed(
      () => frontmatter.value.navbar !== false && themeLocale.value.navbar !== false
    );
    const sidebarItems = useSidebarItems();
    const isSidebarOpen = ref(false);
    const toggleSidebar = (to) => {
      isSidebarOpen.value = typeof to === "boolean" ? to : !isSidebarOpen.value;
    };
    const touchStart = { x: 0, y: 0 };
    const onTouchStart = (e) => {
      touchStart.x = e.changedTouches[0].clientX;
      touchStart.y = e.changedTouches[0].clientY;
    };
    const onTouchEnd = (e) => {
      const dx = e.changedTouches[0].clientX - touchStart.x;
      const dy = e.changedTouches[0].clientY - touchStart.y;
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
        if (dx > 0 && touchStart.x <= 80) {
          toggleSidebar(true);
        } else {
          toggleSidebar(false);
        }
      }
    };
    const containerClass = computed(() => [
      {
        "no-navbar": !shouldShowNavbar.value,
        "no-sidebar": !sidebarItems.value.length,
        "sidebar-open": isSidebarOpen.value
      },
      frontmatter.value.pageClass
    ]);
    let unregisterRouterHook;
    onMounted(() => {
      const router = useRouter();
      unregisterRouterHook = router.afterEach(() => {
        toggleSidebar(false);
      });
    });
    onUnmounted(() => {
      unregisterRouterHook();
    });
    const scrollPromise2 = useScrollPromise();
    const onBeforeEnter = scrollPromise2.resolve;
    const onBeforeLeave = scrollPromise2.pending;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["theme-container", unref(containerClass)]),
        onTouchstart: onTouchStart,
        onTouchend: onTouchEnd
      }, [
        renderSlot(_ctx.$slots, "navbar", {}, () => [
          unref(shouldShowNavbar) ? (openBlock(), createBlock(Navbar, {
            key: 0,
            onToggleSidebar: toggleSidebar
          }, {
            before: withCtx(() => [
              renderSlot(_ctx.$slots, "navbar-before")
            ]),
            after: withCtx(() => [
              renderSlot(_ctx.$slots, "navbar-after")
            ]),
            _: 3
          })) : createCommentVNode("v-if", true)
        ]),
        createBaseVNode("div", {
          class: "sidebar-mask",
          onClick: _cache[0] || (_cache[0] = ($event) => toggleSidebar(false))
        }),
        renderSlot(_ctx.$slots, "sidebar", {}, () => [
          createVNode(Sidebar, null, {
            top: withCtx(() => [
              renderSlot(_ctx.$slots, "sidebar-top")
            ]),
            bottom: withCtx(() => [
              renderSlot(_ctx.$slots, "sidebar-bottom")
            ]),
            _: 3
          })
        ]),
        renderSlot(_ctx.$slots, "page", {}, () => [
          unref(frontmatter).home ? (openBlock(), createBlock(Home, { key: 0 })) : (openBlock(), createBlock(Transition, {
            key: 1,
            name: "fade-slide-y",
            mode: "out-in",
            onBeforeEnter: unref(onBeforeEnter),
            onBeforeLeave: unref(onBeforeLeave)
          }, {
            default: withCtx(() => [
              (openBlock(), createBlock(Page, {
                key: unref(page).path
              }, {
                top: withCtx(() => [
                  renderSlot(_ctx.$slots, "page-top")
                ]),
                "content-top": withCtx(() => [
                  renderSlot(_ctx.$slots, "page-content-top")
                ]),
                "content-bottom": withCtx(() => [
                  renderSlot(_ctx.$slots, "page-content-bottom")
                ]),
                bottom: withCtx(() => [
                  renderSlot(_ctx.$slots, "page-bottom")
                ]),
                _: 3
              }))
            ]),
            _: 3
          }, 8, ["onBeforeEnter", "onBeforeLeave"]))
        ])
      ], 34);
    };
  }
});
const Layout = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__file", "Layout.vue"]]);
const _hoisted_1$1 = { class: "theme-container" };
const _hoisted_2$1 = { class: "page" };
const _hoisted_3$1 = { class: "theme-default-content" };
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("h1", null, "404", -1);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "NotFound",
  setup(__props) {
    const routeLocale = useRouteLocale();
    const themeLocale = useThemeLocaleData();
    const messages = themeLocale.value.notFound ?? ["Not Found"];
    const getMsg = () => messages[Math.floor(Math.random() * messages.length)];
    const homeLink = themeLocale.value.home ?? routeLocale.value;
    const homeText = themeLocale.value.backToHome ?? "Back to home";
    return (_ctx, _cache) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createBaseVNode("main", _hoisted_2$1, [
          createBaseVNode("div", _hoisted_3$1, [
            _hoisted_4,
            createBaseVNode("blockquote", null, toDisplayString(getMsg()), 1),
            createVNode(_component_RouterLink, { to: unref(homeLink) }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(homeText)), 1)
              ]),
              _: 1
            }, 8, ["to"])
          ])
        ])
      ]);
    };
  }
});
const NotFound = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__file", "NotFound.vue"]]);
const index = "";
const clientConfig6 = defineClientConfig({
  enhance({ app, router }) {
    app.component("Badge", Badge);
    app.component("CodeGroup", CodeGroup);
    app.component("CodeGroupItem", CodeGroupItem);
    app.component("AutoLinkExternalIcon", () => {
      const ExternalLinkIcon2 = app.component("ExternalLinkIcon");
      if (ExternalLinkIcon2) {
        return h(ExternalLinkIcon2);
      }
      return null;
    });
    app.component("NavbarSearch", () => {
      const SearchComponent = app.component("Docsearch") || app.component("SearchBox");
      if (SearchComponent) {
        return h(SearchComponent);
      }
      return null;
    });
    const scrollBehavior = router.options.scrollBehavior;
    router.options.scrollBehavior = async (...args) => {
      await useScrollPromise().wait();
      return scrollBehavior(...args);
    };
  },
  setup() {
    setupDarkMode();
    setupSidebarItems();
  },
  layouts: {
    Layout,
    NotFound
  }
});
const _withScopeId = (n) => (pushScopeId("data-v-7a2f4138"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "code-copy" };
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("path", {
  fill: "none",
  d: "M0 0h24v24H0z"
}, null, -1));
const _hoisted_3 = ["fill"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CodeCopy",
  props: {
    parent: {
      type: Object,
      default: null
    },
    options: {
      type: Object,
      default: null
    },
    code: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const { code, parent, options: options2 } = toRefs(props);
    const success = ref(false);
    const originalBackground = ref(null);
    const originalTransition = ref(null);
    const successTimeout = ref(void 0);
    const genDefaultOption = (options22) => {
      return {
        staticIcon: (options22 == null ? void 0 : options22.staticIcon) === true || false,
        align: (options22 == null ? void 0 : options22.align) || "bottom",
        selector: (options22 == null ? void 0 : options22.selector) || 'div[class*="language-"]',
        delay: (options22 == null ? void 0 : options22.delay) || 400,
        color: (options22 == null ? void 0 : options22.color) || "var(--c-brand)",
        backgroundTransition: (options22 == null ? void 0 : options22.backgroundTransition) !== false || true,
        backgroundTransitionColor: (options22 == null ? void 0 : options22.backgroundTransitionColor) || "var(--code-bg-color)",
        successTextColor: (options22 == null ? void 0 : options22.successTextColor) || "var(--c-brand-light)",
        successText: (options22 == null ? void 0 : options22.successText) || "Copied!"
      };
    };
    const componentOptions = computed(
      () => options2.value === null ? genDefaultOption(null) : genDefaultOption(options2.value)
    );
    const alignClass = computed(() => componentOptions.value.align);
    const iconClass = computed(() => componentOptions.value.staticIcon ? "" : "hover");
    onMounted(() => {
      if (parent.value !== null) {
        originalBackground.value = parent.value.style.background;
        originalTransition.value = parent.value.style.transition;
      }
    });
    onBeforeUnmount(() => {
      if (parent.value !== null) {
        if (originalBackground.value !== null)
          parent.value.style.background = originalBackground.value;
        if (originalTransition.value !== null)
          parent.value.style.transition = originalTransition.value;
      }
      if (successTimeout.value !== void 0)
        window.clearTimeout(successTimeout.value);
    });
    const hexToRgb = (hex) => {
      const res = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return res ? {
        r: parseInt(res[1], 16),
        g: parseInt(res[2], 16),
        b: parseInt(res[3], 16)
      } : null;
    };
    const setSuccessTransitions = () => {
      window.clearTimeout(successTimeout.value);
      successTimeout.value = void 0;
      if (componentOptions.value.backgroundTransition && parent.value !== null) {
        parent.value.style.transition = "background 350ms";
        let transColor = componentOptions.value.backgroundTransitionColor || "";
        transColor = !transColor.includes("#") ? transColor : "#282c34";
        const color = hexToRgb(transColor);
        if (color !== null)
          parent.value.style.background = `rgba(${color.r}, ${color.g}, ${color.b}, 0.7)`;
      }
      success.value = true;
      successTimeout.value = window.setTimeout(() => {
        if (componentOptions.value.backgroundTransition && parent.value !== null) {
          parent.value.style.background = originalBackground.value;
          parent.value.style.transition = originalTransition.value;
        }
        success.value = false;
      }, 500);
    };
    const copyToClipboard = (el) => {
      if (navigator.clipboard) {
        navigator.clipboard.writeText(code.value).then(
          () => setSuccessTransitions(),
          () => null
        );
      } else {
        const copyElement = document.createElement("textarea");
        document.body.appendChild(copyElement);
        copyElement.value = code.value;
        copyElement.select();
        document.execCommand("Copy");
        copyElement.remove();
        setSuccessTransitions();
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        (openBlock(), createElementBlock("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 24 24",
          class: normalizeClass([unref(iconClass), unref(alignClass)]),
          onClick: copyToClipboard
        }, [
          _hoisted_2,
          createBaseVNode("path", {
            fill: unref(componentOptions).color,
            d: "M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4l6 6v10c0 1.1-.9 2-2 2H7.99C6.89 23 6 22.1 6 21l.01-14c0-1.1.89-2 1.99-2h7zm-1 7h5.5L14 6.5V12z"
          }, null, 8, _hoisted_3)
        ], 2)),
        createBaseVNode("span", {
          class: normalizeClass([success.value ? "success" : "", unref(alignClass)]),
          style: normalizeStyle({ color: unref(componentOptions).successTextColor })
        }, toDisplayString(unref(componentOptions).successText), 7)
      ]);
    };
  }
});
const CodeCopy_vue_vue_type_style_index_0_scoped_7a2f4138_lang = "";
const CodeCopy = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7a2f4138"], ["__file", "CodeCopy.vue"]]);
const main = "";
const options = {};
const setupCopyCode = () => {
  const router = useRoute();
  const copyBtnClassName = `code-copy-added-${(options == null ? void 0 : options.align) || "bottom"}`;
  const update = () => {
    if (router.path === "/")
      return;
    const delay2 = options.delay || 400;
    setTimeout(() => {
      document.querySelectorAll(options.selector || 'div[class*="language-"]').forEach((el) => {
        if (el.classList.contains(copyBtnClassName) || el.querySelector("pre, code[class*='pre-']") === null)
          return;
        const codeContent = el.querySelector("pre, code[class*='pre-']");
        const instance = createApp(CodeCopy, {
          parent: el,
          code: codeContent.innerText || codeContent.textContent,
          options
        });
        const childEl = document.createElement("div");
        el.appendChild(childEl);
        instance.mount(childEl);
        el.classList.add(copyBtnClassName);
      });
    }, delay2 + 100);
  };
  const clear = () => {
    document.querySelectorAll(options.selector || 'div[class*="language-"]').forEach((el) => {
      if (el.classList.contains(copyBtnClassName))
        el.classList.remove(copyBtnClassName);
    });
  };
  onMounted(() => {
    update();
    window.addEventListener("vuepress-plugin-clipboard-update-event", update);
  });
  onBeforeUnmount(() => {
    clear();
    window.removeEventListener("vuepress-plugin-clipboard-update-event", update);
  });
  onUpdated(() => {
    update();
  });
  watch(() => router.path, () => {
    clear();
    update();
  });
  return update;
};
const clientConfig7 = defineClientConfig({
  setup() {
    setupCopyCode();
  }
});
const clientConfigs = [
  clientConfig0,
  clientConfig1,
  clientConfig2,
  clientConfig3,
  clientConfig4,
  clientConfig5,
  clientConfig6,
  clientConfig7
];
const pagesRoutes = [
  ["v-ce159204", "/changelog.html", { "title": "Changelog" }, ["/changelog", "/changelog.md"]],
  ["v-1b7876ee", "/considerations.html", { "title": "hmmmm...?" }, ["/considerations", "/considerations.md"]],
  ["v-194812e8", "/getting_started.html", { "title": "Getting Started" }, ["/getting_started", "/getting_started.md"]],
  ["v-8daa1a0e", "/", { "title": "vuebulma Docs" }, ["/index.html", "/index.md"]],
  ["v-bba92d0c", "/todo.html", { "title": "My todo list" }, ["/todo", "/todo.md"]],
  ["v-12f2a6b9", "/components/BulmaBlock.html", { "title": "BulmaBlock" }, ["/components/BulmaBlock", "/components/BulmaBlock.md"]],
  ["v-c785990a", "/components/BulmaBox.html", { "title": "BulmaBox" }, ["/components/BulmaBox", "/components/BulmaBox.md"]],
  ["v-0450a889", "/components/BulmaBreadcrumb.html", { "title": "BulmaBreadcrumb" }, ["/components/BulmaBreadcrumb", "/components/BulmaBreadcrumb.md"]],
  ["v-2a4c8f8c", "/components/BulmaButton.html", { "title": "BulmaButton" }, ["/components/BulmaButton", "/components/BulmaButton.md"]],
  ["v-3a35f5f6", "/components/BulmaButtons.html", { "title": "BulmaButtons" }, ["/components/BulmaButtons", "/components/BulmaButtons.md"]],
  ["v-66cf740a", "/components/BulmaDropdown.html", { "title": "BulmaDropdown" }, ["/components/BulmaDropdown", "/components/BulmaDropdown.md"]],
  ["v-6204c9b8", "/components/BulmaFileInput.html", { "title": "BulmaFileInput" }, ["/components/BulmaFileInput", "/components/BulmaFileInput.md"]],
  ["v-70ee2eff", "/components/BulmaFormInputs.html", { "title": "Forms and fields" }, ["/components/BulmaFormInputs", "/components/BulmaFormInputs.md"]],
  ["v-4d6fa1b8", "/components/BulmaHeading.html", { "title": "Bulma Heading" }, ["/components/BulmaHeading", "/components/BulmaHeading.md"]],
  ["v-aebcdfda", "/components/BulmaIcon.html", { "title": "BulmaIcon" }, ["/components/BulmaIcon", "/components/BulmaIcon.md"]],
  ["v-704492ab", "/components/BulmaImage.html", { "title": "BulmaImage" }, ["/components/BulmaImage", "/components/BulmaImage.md"]],
  ["v-18ea919c", "/components/BulmaInput.html", { "title": "BulmaInput" }, ["/components/BulmaInput", "/components/BulmaInput.md"]],
  ["v-befd5226", "/components/BulmaMenu.html", { "title": "BulmaMenu" }, ["/components/BulmaMenu", "/components/BulmaMenu.md"]],
  ["v-282e283f", "/components/BulmaMessage.html", { "title": "BulmaMessage" }, ["/components/BulmaMessage", "/components/BulmaMessage.md"]],
  ["v-6675c3c8", "/components/BulmaNavbar.html", { "title": "BulmaNavbar" }, ["/components/BulmaNavbar", "/components/BulmaNavbar.md"]],
  ["v-608fb8b0", "/components/BulmaSelect.html", { "title": "BulmaSelect" }, ["/components/BulmaSelect", "/components/BulmaSelect.md"]],
  ["v-fc46f75c", "/components/BulmaTextArea.html", { "title": "BulmaTextArea" }, ["/components/BulmaTextArea", "/components/BulmaTextArea.md"]],
  ["v-1020f180", "/components/", { "title": "Common attributes" }, ["/components/index.html", "/components/index.md"]],
  ["v-33445b78", "/types/BulmaAspectRatio.html", { "title": "BulmaAspectRatio" }, ["/types/BulmaAspectRatio", "/types/BulmaAspectRatio.md"]],
  ["v-094da602", "/types/BulmaButtonColours.html", { "title": "BulmaButtonColours" }, ["/types/BulmaButtonColours", "/types/BulmaButtonColours.md"]],
  ["v-5c73a564", "/types/BulmaDimensions.html", { "title": "BulmaDimensions" }, ["/types/BulmaDimensions", "/types/BulmaDimensions.md"]],
  ["v-6afc826a", "/types/BulmaHeadingSizes.html", { "title": "BulmaHeadingSizes" }, ["/types/BulmaHeadingSizes", "/types/BulmaHeadingSizes.md"]],
  ["v-17734178", "/types/BulmaHeadingTypes.html", { "title": "BulmaHeadingTypes" }, ["/types/BulmaHeadingTypes", "/types/BulmaHeadingTypes.md"]],
  ["v-950f7708", "/types/BulmaMenu.html", { "title": "BulmaMenu" }, ["/types/BulmaMenu", "/types/BulmaMenu.md"]],
  ["v-07ac7ba5", "/types/common_types.html", { "title": "Frequently used types and props" }, ["/types/common_types", "/types/common_types.md"]],
  ["v-d32669e2", "/types/", { "title": "Overview" }, ["/types/index.html", "/types/index.md"]],
  ["v-3706649a", "/404.html", { "title": "" }, ["/404"]]
];
var Vuepress = defineComponent({
  name: "Vuepress",
  setup() {
    const layout = usePageLayout();
    return () => h(layout.value);
  }
});
var createRoutes = () => pagesRoutes.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path
      }))
    );
    return result;
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress
    }
  ]
);
var historyCreator = createWebHistory;
var createVueRouter = () => {
  const router = createRouter({
    history: historyCreator(removeEndingSlash("/vuebulma/")),
    routes: createRoutes(),
    scrollBehavior: (to, from, savedPosition) => {
      if (savedPosition)
        return savedPosition;
      if (to.hash)
        return { el: to.hash };
      return { top: 0 };
    }
  });
  router.beforeResolve(async (to, from) => {
    var _a2;
    if (to.path !== from.path || from === START_LOCATION_NORMALIZED) {
      [pageData.value] = await Promise.all([
        resolvers.resolvePageData(to.name),
        (_a2 = pagesComponents[to.name]) == null ? void 0 : _a2.__asyncLoader()
      ]);
    }
  });
  return router;
};
var setupGlobalComponents = (app) => {
  app.component("ClientOnly", ClientOnly);
  app.component("Content", Content);
};
var setupGlobalComputed = (app, router, clientConfigs2) => {
  const layouts = computed(() => resolvers.resolveLayouts(clientConfigs2));
  const routeLocale = computed(
    () => resolvers.resolveRouteLocale(
      siteData.value.locales,
      router.currentRoute.value.path
    )
  );
  const siteLocaleData = computed(
    () => resolvers.resolveSiteLocaleData(siteData.value, routeLocale.value)
  );
  const pageFrontmatter = computed(
    () => resolvers.resolvePageFrontmatter(pageData.value)
  );
  const pageHeadTitle = computed(
    () => resolvers.resolvePageHeadTitle(pageData.value, siteLocaleData.value)
  );
  const pageHead = computed(
    () => resolvers.resolvePageHead(
      pageHeadTitle.value,
      pageFrontmatter.value,
      siteLocaleData.value
    )
  );
  const pageLang = computed(() => resolvers.resolvePageLang(pageData.value));
  const pageLayout = computed(
    () => resolvers.resolvePageLayout(pageData.value, layouts.value)
  );
  app.provide(layoutsSymbol, layouts);
  app.provide(pageFrontmatterSymbol, pageFrontmatter);
  app.provide(pageHeadTitleSymbol, pageHeadTitle);
  app.provide(pageHeadSymbol, pageHead);
  app.provide(pageLangSymbol, pageLang);
  app.provide(pageLayoutSymbol, pageLayout);
  app.provide(routeLocaleSymbol, routeLocale);
  app.provide(siteLocaleDataSymbol, siteLocaleData);
  Object.defineProperties(app.config.globalProperties, {
    $frontmatter: { get: () => pageFrontmatter.value },
    $head: { get: () => pageHead.value },
    $headTitle: { get: () => pageHeadTitle.value },
    $lang: { get: () => pageLang.value },
    $page: { get: () => pageData.value },
    $routeLocale: { get: () => routeLocale.value },
    $site: { get: () => siteData.value },
    $siteLocale: { get: () => siteLocaleData.value },
    $withBase: { get: () => withBase }
  });
  return {
    layouts,
    pageData,
    pageFrontmatter,
    pageHead,
    pageHeadTitle,
    pageLang,
    pageLayout,
    routeLocale,
    siteData,
    siteLocaleData
  };
};
var setupUpdateHead = () => {
  const route = useRoute();
  const head = usePageHead();
  const lang = usePageLang();
  const headTags = ref([]);
  const loadHead = () => {
    head.value.forEach((item) => {
      const tag = queryHeadTag(item);
      if (tag) {
        headTags.value.push(tag);
      }
    });
  };
  const updateHead = () => {
    document.documentElement.lang = lang.value;
    headTags.value.forEach((item) => {
      if (item.parentNode === document.head) {
        document.head.removeChild(item);
      }
    });
    headTags.value.splice(0, headTags.value.length);
    head.value.forEach((item) => {
      const tag = createHeadTag(item);
      if (tag !== null) {
        document.head.appendChild(tag);
        headTags.value.push(tag);
      }
    });
  };
  provide(updateHeadSymbol, updateHead);
  onMounted(() => {
    loadHead();
    updateHead();
    watch(
      () => route.path,
      () => updateHead()
    );
  });
};
var queryHeadTag = ([
  tagName,
  attrs,
  content = ""
]) => {
  const attrsSelector = Object.entries(attrs).map(([key, value]) => {
    if (isString$1(value)) {
      return `[${key}=${JSON.stringify(value)}]`;
    }
    if (value === true) {
      return `[${key}]`;
    }
    return "";
  }).join("");
  const selector2 = `head > ${tagName}${attrsSelector}`;
  const tags = Array.from(document.querySelectorAll(selector2));
  const matchedTag = tags.find((item) => item.innerText === content);
  return matchedTag || null;
};
var createHeadTag = ([
  tagName,
  attrs,
  content
]) => {
  if (!isString$1(tagName)) {
    return null;
  }
  const tag = document.createElement(tagName);
  if (isPlainObject(attrs)) {
    Object.entries(attrs).forEach(([key, value]) => {
      if (isString$1(value)) {
        tag.setAttribute(key, value);
      } else if (value === true) {
        tag.setAttribute(key, "");
      }
    });
  }
  if (isString$1(content)) {
    tag.appendChild(document.createTextNode(content));
  }
  return tag;
};
var appCreator = createSSRApp;
var createVueApp = async () => {
  var _a2;
  const app = appCreator({
    name: "VuepressApp",
    setup() {
      var _a3;
      setupUpdateHead();
      for (const clientConfig of clientConfigs) {
        (_a3 = clientConfig.setup) == null ? void 0 : _a3.call(clientConfig);
      }
      return () => [
        h(RouterView),
        ...clientConfigs.flatMap(
          ({ rootComponents = [] }) => rootComponents.map((component) => h(component))
        )
      ];
    }
  });
  const router = createVueRouter();
  setupGlobalComponents(app);
  const globalComputed = setupGlobalComputed(app, router, clientConfigs);
  {
    const { setupDevtools } = await __vitePreload(() => import("./setupDevtools-EXVHPMXB-f1406f0d.js"), true ? ["assets/setupDevtools-EXVHPMXB-f1406f0d.js","assets/framework-58335e88.js"] : void 0);
    setupDevtools(app, globalComputed);
  }
  for (const clientConfig of clientConfigs) {
    await ((_a2 = clientConfig.enhance) == null ? void 0 : _a2.call(clientConfig, { app, router, siteData }));
  }
  app.use(router);
  return {
    app,
    router
  };
};
{
  createVueApp().then(({ app, router }) => {
    router.isReady().then(() => {
      app.mount("#app");
    });
  });
}
export {
  createVueApp
};
