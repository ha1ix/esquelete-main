/* empty css                         */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_BnKmpnn0.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>N0nx pronounced like nonce. Ultralight long distance backpacker and bikepacker. Low-waste minimaximalism. Open source is the jungle outside the walled garden. I have a <a href=\"https://optimism.easscan.org/address/0x0783f5A4A65247cC1a49E4e7064C2339C7226c4b\">Gitcoin Passport</a> score of 74.7 and multiple soul-bound national passport verifications. See my <a href=\"https://app.ens.domains/b0y.eu\">ENS Profile</a>. This domain is a functioning Ethereum address, try to send me something.</p>";

				const frontmatter = {"title":"who","name":"RIS0 N0NX","designation":"solarpunk cypherpunk","location":"Earth","pronouns":"b0y.eu","website":"https://b0y.eu"};
				const file = "/home/user/Documents/Code/Git/esquelete/esquelete-main/src/pages/who/who.md";
				const url = "/who/who";
				function rawContent() {
					return "\nN0nx pronounced like nonce. Ultralight long distance backpacker and bikepacker. Low-waste minimaximalism. Open source is the jungle outside the walled garden. I have a <a href=\"https://optimism.easscan.org/address/0x0783f5A4A65247cC1a49E4e7064C2339C7226c4b\">Gitcoin Passport</a> score of 74.7 and multiple soul-bound national passport verifications. See my <a href=\"https://app.ens.domains/b0y.eu\">ENS Profile</a>. This domain is a functioning Ethereum address, try to send me something.";
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

export { _page as _, compiledContent as c, frontmatter as f };
