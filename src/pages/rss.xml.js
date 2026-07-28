import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: 'Les mots du Grammar Oisif',
    description: "Des textes, des histoires, de la méthodo et d'autres choses à raconter",
    site: context.site,
    items: await pagesGlobToRssItems(
      import.meta.glob('./posts/*.{md,mdx}'),
    ),
  });
}