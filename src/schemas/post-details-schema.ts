import { z } from "zod";

export const PostDetailsSchema = z.object({
  id: z.number(),
  attributes: z.object({
    title: z.string(),
    shortSummary: z.string(),
    createdAt: z.string(),
    updatedAt: z.string(),
    content: z.any(),
  }),
});
