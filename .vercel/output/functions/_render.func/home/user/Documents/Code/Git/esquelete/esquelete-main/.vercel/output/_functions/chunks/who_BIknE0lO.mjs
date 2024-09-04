/* empty css                         */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_BnKmpnn0.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"pronounced-nonce-ultralight-low-waste-minimaximalist-jungles-surround-walled-gardens\">Pronounced nonce. Ultralight low-waste minimaximalist. Jungles surround walled gardens.</h2>\n<ul>\n<li><a href=\"https://optimism.easscan.org/address/0x0783f5A4A65247cC1a49E4e7064C2339C7226c4b\">Humanity:</a></li><a href=\"https://optimism.easscan.org/address/0x0783f5A4A65247cC1a49E4e7064C2339C7226c4b\">\n</a></ul><a href=\"https://optimism.easscan.org/address/0x0783f5A4A65247cC1a49E4e7064C2339C7226c4b\">\n</a><p><a href=\"https://optimism.easscan.org/address/0x0783f5A4A65247cC1a49E4e7064C2339C7226c4b\">74.7%</a></p>";

				const frontmatter = {"title":"who","name":"RIS0 N0NX","designation":"solarpunk cypherpunk","location":"strange loop/land","pronouns":"b0y.eu","website":"https://b0y.eu"};
				const file = "/home/user/Documents/Code/Git/esquelete/esquelete-main/src/pages/who/who.md";
				const url = "/who/who";
				function rawContent() {
					return "\nPronounced nonce. Ultralight low-waste minimaximalist. Jungles surround walled gardens. \n- \n- <a href=\"https://optimism.easscan.org/address/0x0783f5A4A65247cC1a49E4e7064C2339C7226c4b\">Humanity:\n\n74.7%</a>";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"pronounced-nonce-ultralight-low-waste-minimaximalist-jungles-surround-walled-gardens","text":"Pronounced nonce. Ultralight low-waste minimaximalist. Jungles surround walled gardens."}];
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

export { _page as _, compiledContent as c, frontmatter as f };
