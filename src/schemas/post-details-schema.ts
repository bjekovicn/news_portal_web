import { z } from "zod";
import { CoverMediaSchema } from "./cover-media-schema";
import { CategorySchema } from "./category-schema";

export const PostDetailsSchema = z.object({
  id: z.number(),
  attributes: z.object({
    title: z.string(),
    shortSummary: z.string(),
    createdAt: z.string(),
    updatedAt: z.string(),
    content: z.any(),
    categories: z.object({
      data: z.array(CategorySchema),
    }),
    coverMedia: z.object({
      data: z.object({ attributes: CoverMediaSchema.nullable() }).nullable(),
    }),
  }),
});
