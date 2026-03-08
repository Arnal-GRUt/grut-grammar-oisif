// date: z
//     .date()
//     .transform((str) => new Date(str))
//     .optional(),
// style: z.enum(['Numérique', 'Trad', 'Mix']),
// import { image } from 'astro:content';
import { defineCollection } from 'astro:content';
import { file } from 'astro/loaders'; // Non disponible avec l'API héritée
import { z } from 'astro/zod';
import { number } from 'astro:schema';

const artwork = defineCollection({
    // loader: glob({ pattern: ['*.{jpg,jpeg,JPG,png,webp}'], base: 'src/artwork' }),
    loader: file("grutArt.json"),
    // schema: z.object({
    schema: ({ image }) => z.object({
        id: z.number(),
        image: z.object({
            img_path: z.string(),
            img_alt: z.string(),
            format: z.string()
        }),
        date: z.string(),
        auteur: z.string(),
        style: z.string(),
    }),
});

export const grutCollection = { grutW: artwork };