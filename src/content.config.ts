// import { defineCollection } from 'astro:content';
// import { glob, file } from 'astro/loaders'; // Non disponible avec l'API héritée
// import { z } from 'astro/zod';

// const blog = defineCollection({
//     loader: glob({ pattern: "**/*.md", base: "./src/data/blog" }),
//     schema: /* ... */
// });
// const dogs = defineCollection({
//     loader: file("src/data/dogs.json"),
//     schema: /* ... */
// });

// const probes = defineCollection({
//     // `loader` peut accepter un tableau de plusieurs modèles ainsi que des modèles de chaîne de caractères
//     // Chargez tous les fichiers Markdown dans le répertoire space-probes, à l'exception de ceux qui commencent par « voyager- »
//     loader: glob({ pattern: ['*.md', '!voyager-*'], base: 'src/data/space-probes' }),
//     schema: z.object({
//         name: z.string(),
//         type: z.enum(['Space Probe', 'Mars Rover', 'Comet Lander']),
//         launch_date: z.date(),
//         status: z.enum(['Actif', 'Inactif', 'Déclassé']),
//         destination: z.string(),
//         operator: z.string(),
//         notable_discoveries: z.array(z.string()),
//     }),
// });

// export const collections = { blog, dogs, probes };