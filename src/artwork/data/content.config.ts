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
    loader: file('grutArt.json'),
    schema: ({ image }) => z.object({
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

export const collections = { grutArt : artwork };