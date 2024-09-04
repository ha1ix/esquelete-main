/* empty css                         */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_BnKmpnn0.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Automated rerurring grants not limited to the following:</p>\n<ul>\n<li>Electronic Frontier Foundation</li>\n<li>Effective Ventures Foundation</li>\n<li>Free Software Foundation</li>\n<li>Givedirectly</li>\n<li>Givewell</li>\n<li>Vipassana Community Foundation</li>\n<li>Wikimedia Foundation</li>\n<li>SENS Foundation</li>\n<li>The Center for Election Science</li>\n<li>Software Freedom Conservancy</li>\n<li>Signal Technology Foundation</li>\n<li>PSFC</li>\n<li>Internet Archive</li>\n<li>Globalgiving</li>\n<li>Machine Intelligence Research Institute</li>\n<li>Multidisciplinary Association for Psychedelic Studies</li>\n<li>Center for Innovative Governance Research</li>\n<li>Radicalxchange Foundation</li>\n<li>Open Technology Fund</li>\n</ul>";

				const frontmatter = {"title":"philanthropist","date":"2023 - Present","org":"funding","tags":["open source","donation","ai","cognitive science","governance","longevity"]};
				const file = "/home/user/Documents/Code/Git/esquelete/esquelete-main/src/pages/what/works2.md";
				const url = "/what/works2";
				function rawContent() {
					return "\nAutomated rerurring grants not limited to the following:\n\n- Electronic Frontier Foundation\n- Effective Ventures Foundation\n- Free Software Foundation\n- Givedirectly\n- Givewell\n- Vipassana Community Foundation\n- Wikimedia Foundation\n- SENS Foundation\n- The Center for Election Science\n- Software Freedom Conservancy\n- Signal Technology Foundation\n- PSFC\n- Internet Archive\n- Globalgiving\n- Machine Intelligence Research Institute\n- Multidisciplinary Association for Psychedelic Studies\n- Center for Innovative Governance Research\n- Radicalxchange Foundation\n- Open Technology Fund";
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
