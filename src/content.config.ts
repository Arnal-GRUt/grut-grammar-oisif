import { defineCollection, z } from 'astro:content';
import { file } from 'astro/loaders';
// import { z } from 'astro/zod';
// import { number } from 'astro:schema';

const artwork = defineCollection({
    loader: file("src/images/grutArt.json"),
    schema: ({ image }) => z.object({
        image: z.object({
            source: image(),
            img_alt: z.string()
        }),
        img_name: z.string(),
        img_date: z.string()
    }),
});

const webImg = defineCollection({
    loader: file("src/images/visuelsWebouille.json"),
    schema: ({ image }) => z.object({
        image: z.object({
            source: image(),
            img_alt: z.string()
        }),
        img_name: z.string(),
    }),
});

export const collections = { grutArt : artwork, visuelsWebouille : webImg };
// export const collections = { grutArt: artwork };