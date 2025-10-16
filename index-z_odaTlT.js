import { onMounted, ref } from "vue";
(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
const _imports_0 = "/vite.svg";
const _imports_1 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20aria-hidden='true'%20role='img'%20class='iconify%20iconify--logos'%20width='37.07'%20height='36'%20preserveAspectRatio='xMidYMid%20meet'%20viewBox='0%200%20256%20198'%3e%3cpath%20fill='%2341B883'%20d='M204.8%200H256L128%20220.8L0%200h97.92L128%2051.2L157.44%200h47.36Z'%3e%3c/path%3e%3cpath%20fill='%2341B883'%20d='m0%200l128%20220.8L256%200h-51.2L128%20132.48L50.56%200H0Z'%3e%3c/path%3e%3cpath%20fill='%2335495E'%20d='M50.56%200L128%20133.12L204.8%200h-47.36L128%2051.2L97.92%200H50.56Z'%3e%3c/path%3e%3c/svg%3e";
const _hoisted_1 = { class: "card" };
const _sfc_main$1 = /* @__PURE__ */ Vue.defineComponent({
  __name: "HelloWorld",
  props: {
    msg: {}
  },
  setup(__props) {
    onMounted(() => {
      count.value = 1e3;
      console.log("onMounted called");
    });
    const count = ref(0);
    return (_ctx, _cache) => {
      return Vue.openBlock(), Vue.createElementBlock(Vue.Fragment, null, [
        Vue.createElementVNode("h1", null, Vue.toDisplayString(__props.msg), 1),
        Vue.createElementVNode("div", _hoisted_1, [
          Vue.createElementVNode("button", {
            type: "button",
            onClick: _cache[0] || (_cache[0] = ($event) => count.value++)
          }, "count is " + Vue.toDisplayString(Vue.unref(count)), 1)
        ])
      ], 64);
    };
  }
});
const _sfc_main = /* @__PURE__ */ Vue.defineComponent({
  __name: "App",
  setup(__props) {
    return (_ctx, _cache) => {
      return Vue.openBlock(), Vue.createElementBlock(Vue.Fragment, null, [
        _cache[0] || (_cache[0] = Vue.createElementVNode("div", null, [
          Vue.createElementVNode("a", {
            href: "https://vite.dev",
            target: "_blank"
          }, [
            Vue.createElementVNode("img", {
              src: _imports_0,
              class: "logo",
              alt: "Vite logo"
            })
          ]),
          Vue.createElementVNode("a", {
            href: "https://vuejs.org/",
            target: "_blank"
          }, [
            Vue.createElementVNode("img", {
              src: _imports_1,
              class: "logo vue",
              alt: "Vue logo"
            })
          ])
        ], -1)),
        Vue.createVNode(_sfc_main$1, { msg: "Vite + Vue" })
      ], 64);
    };
  }
});
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-48d00746"]]);
Vue.createApp(App).mount("#app");
//# sourceMappingURL=index-z_odaTlT.js.map
