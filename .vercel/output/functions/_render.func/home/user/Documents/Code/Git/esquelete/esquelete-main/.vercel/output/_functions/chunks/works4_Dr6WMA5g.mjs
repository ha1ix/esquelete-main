/* empty css                         */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_BnKmpnn0.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>International mapping contributions.</p>";

				const frontmatter = {"title":"editor","date":"2016 - Present","url":"https://www.openstreetmap.org/","location":"Earth","org":"OSM","tags":["open source","maps"]};
				const file = "/home/user/Documents/Code/Git/esquelete/esquelete-main/src/pages/what/works4.md";
				const url = "/what/works4";
				function rawContent() {
					return "\nInternational mapping contributions.";
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
