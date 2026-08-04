import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  return rss({
    title: 'Les mots du Grammar Oisif',
    description: 'Des textes, des histoires, de la méthodo et cie',
    site: 'https://grammar-oisif.fr/',
    // site: 'http://localhost:4321/',
    items: await pagesGlobToRssItems(
      import.meta.glob('./posts/*.{md,mdx}'),
      ),
      stylesheet: '/pretty-feed-v3.xsl',
  });
}

export async function GET(context) {
  const blog = await getCollection('artwork');
  return rss({
    title: 'Les gribouilles du Grammar Oisif',
    description: 'Des dessins, de la peinture, des croquis et cie',
    site: context.site,
    items: artwork.map((art) => ({
      title: art.data.img_name,
      pubDate: art.data.img_date,
      link: `/artworks/${art.id}/`,
    })),
  });
}