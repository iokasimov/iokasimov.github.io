import { c as createComponent, b as createAstro, r as renderComponent, a as renderTemplate, m as maybeRenderHead, f as addAttribute, e as renderSlot } from './astro/server_wiwprr1S.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Line } from './Line_CQMfCjH7.mjs';

const $$Astro = createAstro();
const $$KyxklInfixSlot = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$KyxklInfixSlot;
  const { co, contra, from, into, tt, ti_, a, t_i, ttt, o } = Astro2.props;
  const v = contra ? "a" : "o";
  const from_liga = (co || void 0 ? "A" : "") + (from == "Arrow" ? "R" : "T") + (contra || void 0 ? "A" : "");
  const into_liga = (into == "Arrow" ? "AR" : "AT") + "______";
  return renderTemplate`${renderComponent($$result, "Line", $$Line, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<a class="text">></a> <a class="expr"${addAttribute(`/Ya/Operators/ky${v}kl`, "href")}>\`ky${ti_ && "i"}${v}${t_i && "i"}kl\`</a> <a class="text">:</a> ${renderSlot($$result2, $$slots["default"])} <a class="text"> ${ti_ && ti_}</a> ${a || void 0 ? renderTemplate`<a class="type"${addAttribute(`/Ya/Primitives/${a}`, "href")}>${a}</a>` : renderTemplate`<a class="expr">a</a>`}<a class="text"> ${t_i && t_i}</a> <a class="type" href="/Ya/Primitives/AR">\`AR_____\`</a> ${tt || void 0 ? renderTemplate`<a class="type"${addAttribute(`/Ya/Primitives/${tt}`, "href")}>${tt}</a>` : renderTemplate`<a class="expr"> tt </a>`}${a || void 0 ? renderTemplate`<a class="type"${addAttribute(`/Ya/Primitives/${a}`, "href")}>${a}</a>` : renderTemplate`<a class="expr"> a </a>`}<a class="type"${addAttribute(`/Ya/Primitives/${from_liga}`, "href")}> \`${from_liga}\`</a> ${ttt || void 0 ? renderTemplate`<a class="type"${addAttribute(`/Ya/Primitives/${ttt}`, "href")}>${ttt}</a>` : renderTemplate`<a class="expr"> ttt </a>`}${o || void 0 ? renderTemplate`<a class="type"${addAttribute(`/Ya/Primitives/${o}`, "href")}>${o}</a>` : renderTemplate`<a class="expr"> o </a>`}<a class="type"${addAttribute(`/Ya/Primitives/${into_liga}`, "href")}>\`${into_liga}\`</a> ${ttt || void 0 ? renderTemplate`<a class="type"${addAttribute(`/Ya/Primitives/${ttt}`, "href")}>${ttt}</a>` : renderTemplate`<a class="expr"> ttt </a>`}<a class="text">(</a> ${renderSlot($$result2, $$slots["default"])} <a class="text"> ${ti_ && ti_}</a> ${o || void 0 ? renderTemplate`<a class="type"${addAttribute(`/Ya/Primitives/${o}`, "href")}>${o}</a>` : renderTemplate`<a class="expr">o</a>`}<a class="text"> ${t_i && t_i}</a> <a class="text">)</a> ` })}`;
}, "/Users/iokasimov/Documents/code/personal/site/src/blocks/Operators/Declarations/kyxkl-infix-slot.astro", void 0);

export { $$KyxklInfixSlot as $ };
