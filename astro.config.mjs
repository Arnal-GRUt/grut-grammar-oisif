// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import markdoc from '@astrojs/markdoc';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
        integrations: [markdoc({ allowHTML: true }), mdx()],
        fonts: [{
        provider: fontProviders.local(),
        name: "ChelseaMarket-Regular",
        cssVariable: "--font-chelsea-market",
        options: {
        variants: [{
                src: ['./src/fonts/ChelseaMarket-Regular.ttf'],
                weight: 'normal',
                style: 'normal'
        }]
        }
  }]
});