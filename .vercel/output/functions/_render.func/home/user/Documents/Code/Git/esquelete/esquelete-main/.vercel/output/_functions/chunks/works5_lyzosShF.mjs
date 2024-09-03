/* empty css                         */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_BnKmpnn0.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>tumbling water, dappled koi, filtered green light, humid petrichor: weather brainstorms &#x26; wetdreams in a room of glass.</p>";

				const frontmatter = {"title":"folia vitrae","date":"05/2022 - Present","url":"request_access","url_name":"request_access","org":"request access","tags":["gambol","wiki","request access","poetry","prose"]};
				const file = "/home/user/Documents/Code/Git/esquelete/esquelete-main/src/pages/what/works5.md";
				const url = "/what/works5";
				function rawContent() {
					return "\ntumbling water, dappled koi, filtered green light, humid petrichor: weather brainstorms & wetdreams in a room of glass. ";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content,
	compiledContent,
	default: Content,
	file,
	frontmatter,
	getHeadings,
	rawContent,
	url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
