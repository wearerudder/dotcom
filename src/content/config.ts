import { z, defineCollection } from "astro:content";

const thoughtsCollection = defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      date: z.string(),
      description: z.string(),
      author: z.string(),
      tags: z.array(z.string())
    })
  });
  
  export const collections = {
    thoughts: thoughtsCollection,
  };