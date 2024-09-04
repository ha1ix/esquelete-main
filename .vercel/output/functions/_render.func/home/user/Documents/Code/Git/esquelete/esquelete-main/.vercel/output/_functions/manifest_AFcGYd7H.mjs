import 'cookie';
import 'kleur/colors';
import 'es-module-lexer';
import './chunks/astro-designed-error-pages_DEBKQXE6.mjs';
import { d as decodeKey } from './chunks/astro/server_BnKmpnn0.mjs';
import 'clsx';
import { compile } from 'path-to-regexp';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    const path = toPath(sanitizedParams);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///home/user/Documents/Code/Git/esquelete/esquelete-main/","adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.CMiDTZmw.css"}],"routeData":{"route":"/what/works1","isIndex":false,"type":"page","pattern":"^\\/what\\/works1\\/?$","segments":[[{"content":"what","dynamic":false,"spread":false}],[{"content":"works1","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/what/works1.md","pathname":"/what/works1","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.CMiDTZmw.css"}],"routeData":{"route":"/what/works2","isIndex":false,"type":"page","pattern":"^\\/what\\/works2\\/?$","segments":[[{"content":"what","dynamic":false,"spread":false}],[{"content":"works2","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/what/works2.md","pathname":"/what/works2","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.CMiDTZmw.css"}],"routeData":{"route":"/what/works3","isIndex":false,"type":"page","pattern":"^\\/what\\/works3\\/?$","segments":[[{"content":"what","dynamic":false,"spread":false}],[{"content":"works3","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/what/works3.md","pathname":"/what/works3","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.CMiDTZmw.css"}],"routeData":{"route":"/what/works4","isIndex":false,"type":"page","pattern":"^\\/what\\/works4\\/?$","segments":[[{"content":"what","dynamic":false,"spread":false}],[{"content":"works4","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/what/works4.md","pathname":"/what/works4","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.CMiDTZmw.css"}],"routeData":{"route":"/what/works5","isIndex":false,"type":"page","pattern":"^\\/what\\/works5\\/?$","segments":[[{"content":"what","dynamic":false,"spread":false}],[{"content":"works5","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/what/works5.md","pathname":"/what/works5","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.CMiDTZmw.css"}],"routeData":{"route":"/where/email","isIndex":false,"type":"page","pattern":"^\\/where\\/email\\/?$","segments":[[{"content":"where","dynamic":false,"spread":false}],[{"content":"email","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/where/email.md","pathname":"/where/email","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.CMiDTZmw.css"}],"routeData":{"route":"/where/gitgud","isIndex":false,"type":"page","pattern":"^\\/where\\/gitgud\\/?$","segments":[[{"content":"where","dynamic":false,"spread":false}],[{"content":"gitgud","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/where/gitgud.md","pathname":"/where/gitgud","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.CMiDTZmw.css"}],"routeData":{"route":"/where/signal","isIndex":false,"type":"page","pattern":"^\\/where\\/signal\\/?$","segments":[[{"content":"where","dynamic":false,"spread":false}],[{"content":"signal","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/where/signal.md","pathname":"/where/signal","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.CMiDTZmw.css"}],"routeData":{"route":"/where/verify","isIndex":false,"type":"page","pattern":"^\\/where\\/verify\\/?$","segments":[[{"content":"where","dynamic":false,"spread":false}],[{"content":"verify","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/where/verify.md","pathname":"/where/verify","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.CMiDTZmw.css"}],"routeData":{"route":"/where/xmpp","isIndex":false,"type":"page","pattern":"^\\/where\\/xmpp\\/?$","segments":[[{"content":"where","dynamic":false,"spread":false}],[{"content":"xmpp","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/where/xmpp.md","pathname":"/where/xmpp","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.CMiDTZmw.css"}],"routeData":{"route":"/who/who","isIndex":false,"type":"page","pattern":"^\\/who\\/who\\/?$","segments":[[{"content":"who","dynamic":false,"spread":false}],[{"content":"who","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/who/who.md","pathname":"/who/who","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"var u={exports:{}};(function(r,g){function l(){var c=document.querySelector(\"[data-toggle-theme]\"),t=c?c.getAttribute(\"data-key\"):null;(function(e=localStorage.getItem(t||\"theme\")){localStorage.getItem(t||\"theme\")&&(document.documentElement.setAttribute(\"data-theme\",e),c&&[...document.querySelectorAll(\"[data-toggle-theme]\")].forEach(a=>{a.classList.add(c.getAttribute(\"data-act-class\"))}))})(),c&&[...document.querySelectorAll(\"[data-toggle-theme]\")].forEach(e=>{e.addEventListener(\"click\",function(){var a=e.getAttribute(\"data-toggle-theme\");if(a){var o=a.split(\",\");document.documentElement.getAttribute(\"data-theme\")==o[0]?o.length==1?(document.documentElement.removeAttribute(\"data-theme\"),localStorage.removeItem(t||\"theme\")):(document.documentElement.setAttribute(\"data-theme\",o[1]),localStorage.setItem(t||\"theme\",o[1])):(document.documentElement.setAttribute(\"data-theme\",o[0]),localStorage.setItem(t||\"theme\",o[0]))}[...document.querySelectorAll(\"[data-toggle-theme]\")].forEach(s=>{s.classList.toggle(this.getAttribute(\"data-act-class\"))})})})}function m(){var c=document.querySelector(\"[data-set-theme='']\"),t=c?c.getAttribute(\"data-key\"):null;(function(e=localStorage.getItem(t||\"theme\")){if(e!=null&&e!=\"\")if(localStorage.getItem(t||\"theme\")&&localStorage.getItem(t||\"theme\")!=\"\"){document.documentElement.setAttribute(\"data-theme\",e);var a=document.querySelector(\"[data-set-theme='\"+e.toString()+\"']\");a&&([...document.querySelectorAll(\"[data-set-theme]\")].forEach(o=>{o.classList.remove(o.getAttribute(\"data-act-class\"))}),a.getAttribute(\"data-act-class\")&&a.classList.add(a.getAttribute(\"data-act-class\")))}else{var a=document.querySelector(\"[data-set-theme='']\");a.getAttribute(\"data-act-class\")&&a.classList.add(a.getAttribute(\"data-act-class\"))}})(),[...document.querySelectorAll(\"[data-set-theme]\")].forEach(e=>{e.addEventListener(\"click\",function(){document.documentElement.setAttribute(\"data-theme\",this.getAttribute(\"data-set-theme\")),localStorage.setItem(t||\"theme\",document.documentElement.getAttribute(\"data-theme\")),[...document.querySelectorAll(\"[data-set-theme]\")].forEach(a=>{a.classList.remove(a.getAttribute(\"data-act-class\"))}),e.getAttribute(\"data-act-class\")&&e.classList.add(e.getAttribute(\"data-act-class\"))})})}function d(){var c=document.querySelector(\"select[data-choose-theme]\"),t=c?c.getAttribute(\"data-key\"):null;(function(e=localStorage.getItem(t||\"theme\")){if(localStorage.getItem(t||\"theme\")){document.documentElement.setAttribute(\"data-theme\",e);var a=document.querySelector(\"select[data-choose-theme] [value='\"+e.toString()+\"']\");a&&[...document.querySelectorAll(\"select[data-choose-theme] [value='\"+e.toString()+\"']\")].forEach(o=>{o.selected=!0})}})(),c&&[...document.querySelectorAll(\"select[data-choose-theme]\")].forEach(e=>{e.addEventListener(\"change\",function(){document.documentElement.setAttribute(\"data-theme\",this.value),localStorage.setItem(t||\"theme\",document.documentElement.getAttribute(\"data-theme\")),[...document.querySelectorAll(\"select[data-choose-theme] [value='\"+localStorage.getItem(t||\"theme\")+\"']\")].forEach(a=>{a.selected=!0})})})}function n(c=!0){c===!0?document.addEventListener(\"DOMContentLoaded\",function(t){l(),d(),m()}):(l(),d(),m())}r.exports={themeChange:n}})(u);var i=u.exports;i.themeChange();\n"}],"styles":[{"type":"external","src":"/_astro/index.CMiDTZmw.css"},{"type":"inline","content":"@font-face{font-family:DM Sans Variable;font-style:normal;font-display:swap;font-weight:100 1000;src:url(/_astro/dm-sans-latin-ext-wght-normal.D1bw2c55.woff2) format(\"woff2-variations\");unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:DM Sans Variable;font-style:normal;font-display:swap;font-weight:100 1000;src:url(/_astro/dm-sans-latin-wght-normal.DeBecvsH.woff2) format(\"woff2-variations\");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@media (max-width: 768px){.flex-col[data-astro-cid-3ef6ksr2].justify-end{display:flex;flex-direction:column;justify-content:center;align-items:center}}body{font-family:DM Sans Variable,sans-serif}@media only screen and (max-width: 480px){*{font-size:12px}}.overflow-y-scroll::-webkit-scrollbar{width:3px}.overflow-y-scroll::-webkit-scrollbar-thumb{background-color:oklch(var(--s))}.overflow-y-scroll{scrollbar-width:1px}@media (max-width: 768px){.container{flex-direction:column}}@media (min-width: 768px){.container{display:flex;flex-wrap:wrap}}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/user/Documents/Code/Git/esquelete/esquelete-main/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astro-page:src/pages/what/works1@_@md":"pages/what/works1.astro.mjs","\u0000@astro-page:src/pages/what/works2@_@md":"pages/what/works2.astro.mjs","\u0000@astro-page:src/pages/what/works3@_@md":"pages/what/works3.astro.mjs","\u0000@astro-page:src/pages/what/works4@_@md":"pages/what/works4.astro.mjs","\u0000@astro-page:src/pages/what/works5@_@md":"pages/what/works5.astro.mjs","\u0000@astro-page:src/pages/where/email@_@md":"pages/where/email.astro.mjs","\u0000@astro-page:src/pages/where/gitgud@_@md":"pages/where/gitgud.astro.mjs","\u0000@astro-page:src/pages/where/signal@_@md":"pages/where/signal.astro.mjs","\u0000@astro-page:src/pages/where/verify@_@md":"pages/where/verify.astro.mjs","\u0000@astro-page:src/pages/where/xmpp@_@md":"pages/where/xmpp.astro.mjs","\u0000@astro-page:src/pages/who/who@_@md":"pages/who/who.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","/home/user/Documents/Code/Git/esquelete/esquelete-main/node_modules/astro/dist/env/setup.js":"chunks/astro/env-setup_Cr6XTFvb.mjs","\u0000@astrojs-manifest":"manifest_AFcGYd7H.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.yzwUO3MD.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/dm-sans-latin-ext-wght-normal.D1bw2c55.woff2","/_astro/dm-sans-latin-wght-normal.DeBecvsH.woff2","/_astro/index.CMiDTZmw.css","/Zen__the_Art_of_Macintosh1986.pdf","/favicon.webp","/profile.webp","/snap-md.png","/snap_project.webp"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"JKIoqxVADEGG5ibqz6/IrlfPCCsnkJyR45IoiD651uw=","experimentalEnvGetSecretEnabled":false});

export { manifest };
