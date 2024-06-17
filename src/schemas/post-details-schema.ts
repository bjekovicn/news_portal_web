import { z } from "zod";
import { CoverMediaSchema } from "./cover-media-schema";
import { ReducedCategorySchema } from "./category-schema";

export const PostDetailsSchema = z.object({
  id: z.number(),
  title: z.string(),
  shortSummary: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
  content: z.any(),
  categories: z.array(ReducedCategorySchema),

  coverMedia: CoverMediaSchema.nullable(),
  likes: z.number().nullable(),
});
