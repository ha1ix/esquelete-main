import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_DElCx1DZ.mjs';
import { manifest } from './manifest_B9Pd4VlN.mjs';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/what/works1.astro.mjs');
const _page2 = () => import('./pages/what/works2.astro.mjs');
const _page3 = () => import('./pages/what/works3.astro.mjs');
const _page4 = () => import('./pages/what/works4.astro.mjs');
const _page5 = () => import('./pages/what/works5.astro.mjs');
const _page6 = () => import('./pages/where/email.astro.mjs');
const _page7 = () => import('./pages/where/gitgud.astro.mjs');
const _page8 = () => import('./pages/where/signal.astro.mjs');
const _page9 = () => import('./pages/where/verify.astro.mjs');
const _page10 = () => import('./pages/where/xmpp.astro.mjs');
const _page11 = () => import('./pages/who/who.astro.mjs');
const _page12 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/what/works1.md", _page1],
    ["src/pages/what/works2.md", _page2],
    ["src/pages/what/works3.md", _page3],
    ["src/pages/what/works4.md", _page4],
    ["src/pages/what/works5.md", _page5],
    ["src/pages/where/email.md", _page6],
    ["src/pages/where/gitgud.md", _page7],
    ["src/pages/where/signal.md", _page8],
    ["src/pages/where/verify.md", _page9],
    ["src/pages/where/xmpp.md", _page10],
    ["src/pages/who/who.md", _page11],
    ["src/pages/index.astro", _page12]
]);
const serverIslandMap = new Map();

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "6a4657eb-9005-4886-8d74-ce1d7382950f",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
