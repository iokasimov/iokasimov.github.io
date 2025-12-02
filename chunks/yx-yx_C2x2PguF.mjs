import { c as createComponent, b as createAstro, m as maybeRenderHead, f as addAttribute, a as renderTemplate, r as renderComponent } from './astro/server_wiwprr1S.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { $ as $$Line } from './Line_CQMfCjH7.mjs';

const $$Astro$1 = createAstro();
const $$TTT = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$TTT;
  const { t, ti_, t_i, tt, tti_, tt_i, i } = Astro2.props;
  return renderTemplate`${t || void 0 ? renderTemplate`${maybeRenderHead()}<a class="type"${addAttribute(`/Ya/Primitives/${t.replace(" ", "-")}`, "href")}>${t}</a>` : renderTemplate`<a class="expr">t </a>`}${ti_ && renderTemplate`<a class="text"${addAttribute(`/Ya/Primitives/${ti_}`, "href")}>${ti_}</a>`}<a class="text"> ( </a> ${tt || void 0 ? renderTemplate`<a class="type"${addAttribute(`/Ya/Primitives/${tt.replace(" ", "-")}`, "href")}>${tt}</a>` : renderTemplate`<a class="expr">tt </a>`} ${tti_ && renderTemplate`<a class="text"${addAttribute(`/Ya/Primitives/${tti_}`, "href")}>${tti_}</a>`} ${i == "o" ? renderTemplate`<a class="expr">o</a>` : i == "a" ? renderTemplate`<a class="expr">a</a>` : renderTemplate`<a class="type"${addAttribute(`/Ya/Primitives/${i}`, "href")}>${i}</a>`} ${tt_i && renderTemplate`<a class="text"${addAttribute(`/Ya/Primitives/${tt_i}`, "href")}>${tt_i}</a>`} <a class="text"> ) </a> ${t_i && renderTemplate`<a class="text"${addAttribute(`/Ya/Primitives/${t_i}`, "href")}>${t_i}</a>`}`;
}, "/Users/iokasimov/Documents/code/personal/site/src/blocks/Operators/T_TT.astro", void 0);

const $$Astro = createAstro();
const $$YxYx = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$YxYx;
  const { source, target, t, ti_, ti, t_i, tt, tti_, tti, tt_i } = Astro2.props;
  const full_operator_name = "y" + (ti_ || void 0 ? "i" : "") + ti + (t_i || void 0 ? "i" : "") + "'y" + (tti_ || void 0 ? "i" : "") + tti + (tt_i || void 0 ? "i" : "");
  const operator_name_focused = "y" + ti + "'y" + tti;
  const computed_variance = ti === "o" && tti === "o" || ti === "a" && tti === "a" ? "o" : "a";
  return renderTemplate`${renderComponent($$result, "Line", $$Line, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<a class="expr"${addAttribute(`/Ya/Operators/${operator_name_focused}`, "href")}>\`${full_operator_name}\`</a> <a class="text">:</a> ${renderComponent($$result2, "T_TT", $$TTT, { "t": t, "ti_": ti_, "t_i": t_i, "tt": tt, "tti_": tti_, "tt_i": tt_i, "i": "a", "}": true })} <a class="type" href="/Ya/Primitives/AR">\`AR__\`</a> ${target || void 0 ? renderTemplate`<a class="type"${addAttribute(`/Ya/Primitives/${target}`, "href")}>${target}</a>` : renderTemplate`<a class="expr">target </a>`}<a class="text">(</a> ${tti === "u" ? renderTemplate`<a class="expr"> u </a>` : computed_variance === "o" ? renderTemplate`<a class="expr"> source </a><a class="expr"> a </a><a class="expr"> o </a>` : renderTemplate`<a class="expr"> source </a><a class="expr"> o </a><a class="expr"> a </a>`}<a class="text">) (</a> ${renderComponent($$result2, "T_TT", $$TTT, { "t": t, "ti_": ti_, "t_i": t_i, "tt": tt, "tti_": tti_, "tt_i": tt_i, "i": "o" })} <a class="text">)</a> ` })}`;
}, "/Users/iokasimov/Documents/code/personal/site/src/blocks/Operators/Declarations/yx-yx.astro", void 0);

export { $$YxYx as $ };
