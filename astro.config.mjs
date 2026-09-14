// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import markdoc from '@astrojs/markdoc';
// import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
        integrations: [markdoc({ allowHTML: true })]
});