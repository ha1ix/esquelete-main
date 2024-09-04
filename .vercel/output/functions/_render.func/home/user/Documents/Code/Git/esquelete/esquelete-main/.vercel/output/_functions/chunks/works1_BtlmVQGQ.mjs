/* empty css                         */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_BnKmpnn0.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Network state infrastructure project to provide alternative nation state benefits. Architecture phase. Initial implementation will include passport-style documentation, easy-onboarding crypto, DID-verification, instant messaging, email accounts and possibly phone.</p>";

				const frontmatter = {"title":"Plenipotentiary","date":"2022 - Present","url":"https://guild.xyz/altstadt","url_name":"guild.xyz","org":"Codename 'Altstadt'","tags":["network state","sovereignity","seeking collaborators","passport","supranational"]};
				const file = "/home/user/Documents/Code/Git/esquelete/esquelete-main/src/pages/what/works1.md";
				const url = "/what/works1";
				function rawContent() {
					return "Network state infrastructure project to provide alternative nation state benefits. Architecture phase. Initial implementation will include passport-style documentation, easy-onboarding crypto, DID-verification, instant messaging, email accounts and possibly phone.";
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
