import { z } from "zod";

export const PostSchema = z.object({
  id: z.number(),
  attributes: z.object({
    title: z.string(),
    shortSummary: z.string(),
    createdAt: z.string(),
    updatedAt: z.string(),
    content: z.any(),
  }),
});
