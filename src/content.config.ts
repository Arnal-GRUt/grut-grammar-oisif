// style: z.enum(['Numérique', 'Trad', 'Mix']),
// import { image } from 'astro:content';
import { defineCollection } from 'astro:content';
import { file } from 'astro/loaders'; // Non disponible avec l'API héritée
import { z } from 'astro/zod';

const artworks = defineCollection({
    // `loader` peut accepter un tableau de plusieurs modèles ainsi que des modèles de chaîne de caractères
    // Chargez tous les fichiers Markdown dans le répertoire space-probes, à l'exception de ceux qui commencent par « voyager- »
    // loader: glob({ pattern: ['*.{jpg,jpeg,JPG,png,webp}'], base: 'src/artwork' }),
    loader: file("src/data/grutArt.json"),
    schema: ({ image }) => z.object({        
        image: z.object({
            img_path: z.string(),
            img_alt: z.string(),
            format: z.string()
        }),
        date: z.date(),
        auteur: z.string(),
        style: z.string(),       
    }),
});
  
export const artCollection = { artworks };