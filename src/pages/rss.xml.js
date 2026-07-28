import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: 'Les mots du Grammar Oisif',
    description: 'Des textes, des histoires, de la méthodo et cie',
    site: 'https://grammar-oisif.fr/',
    items: await pagesGlobToRssItems(
      import.meta.glob('./posts/*.{md,mdx}'),
    ),
  });
}