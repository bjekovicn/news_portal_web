import { z } from "zod";
import { AuthorSchema } from "../author-schema";
import { ReducedCategorySchema } from "../category-schema";
import { CoverMediaSchema } from "../cover-media-schema";

const LatestPostSchema = z.object({
  id: z.number(),
  title: z.string(),
  createdAt: z.string(),
  author: AuthorSchema.nullable(),
  categories: z.array(ReducedCategorySchema),
  coverMedia: CoverMediaSchema.nullable(),
});

export type LatestPostType = z.infer<typeof LatestPostSchema>;

export { LatestPostSchema };
