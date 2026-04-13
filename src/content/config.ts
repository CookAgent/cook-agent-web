import { defineCollection, z } from "astro:content";
import { locales } from "../i18n/ui";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string().max(90),
    lang: z.enum(locales as unknown as [string, ...string[]]),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    author: z.string().default("RecipLab"),
    heroImage: z.string().url().optional(),
    heroAlt: z.string().optional(),
    excerpt: z.string().max(220),
    categories: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    relatedSlugs: z.array(z.string()).default([]),
    keyPoints: z
      .array(
        z.object({
          point: z.string(),
          detail: z.string(),
        })
      )
      .default([]),
    faq: z
      .array(
        z.object({
          question: z.string(),
          answer: z.string(),
        })
      )
      .default([]),
  }),
});

export const collections = { blog };
