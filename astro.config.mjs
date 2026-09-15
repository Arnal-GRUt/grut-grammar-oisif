// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import markdoc from '@astrojs/markdoc';

// https://astro.build/config
export default defineConfig({
        integrations: [markdoc({ allowHTML: true })],
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
