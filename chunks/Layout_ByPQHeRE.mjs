import { c as createComponent, b as createAstro, d as renderHead, e as renderSlot, a as renderTemplate } from './astro/server_wiwprr1S.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                      */

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><!-- <BaseHead title={title}/> -->${renderHead()}</head> <body> <div class="h-screen flex max-w-7xl grid grid-cols-14" style="padding-top:15px;"> <div class="col-span-3" style="padding-left:15px;"> <h1 class="text-2xl font-bold"><a href="/">Murat Kasimov</a></h1> <h1 class="text-2lg font-bold"><a href="/Me">More about me</a></h1> <h1 class="text-2lg font-bold"><a href="/Ya">Я language (β)</a></h1> </div> <div class="overflow-y-scroll col-span-11" style="padding-right:15px;"> <!-- <Breadcrumbs /> --> <h1 class="text-2xl font-bold" style="padding-bottom: 10px;"> ${Astro2.url.pathname.replace("Ya", "\u042F language (\u03B2)").replace("-", " ")} </h1> ${renderSlot($$result, $$slots["default"])} </div> </div>  </body></html>`;
}, "/Users/iokasimov/Documents/code/personal/site/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
