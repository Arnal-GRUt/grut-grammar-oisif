import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
// import { file } from 'astro/loaders'; // Non disponible avec l'API héritée
import { z } from 'astro/zod';

const artworks = defineCollection({
    // `loader` peut accepter un tableau de plusieurs modèles ainsi que des modèles de chaîne de caractères
    // Chargez tous les fichiers Markdown dans le répertoire space-probes, à l'exception de ceux qui commencent par « voyager- »
    loader: glob({ pattern: ['*.{jpg,jpeg,JPG,png,webp}'], base: 'src/artwork' }),
    schema: z.object({        
        name: z.string(),                
        artist: z.string(),
        description: z.string(),
        inte_date: z.date(),
        art_classe: z.enum(['numerique', 'trad']),        
    }),
});

export const artCollection = { artworks };