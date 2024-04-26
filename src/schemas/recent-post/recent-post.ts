import { z } from "zod";
import { CoverMediaSchema } from "../cover-media-schema";
import { CategorySchema } from "../category-schema";

const RecentPostSchema = z.object({
  id: z.number(),
  title: z.string(),
  shortSummary: z.string().nullable(),
  createdAt: z.string(),
  coverMedia: CoverMediaSchema.nullable(),
  categories: z.array(CategorySchema),
  likes: z.number().nullable(),
  comments: z.number().nullable(),
});

export type RecentPostType = z.infer<typeof RecentPostSchema>;

export { RecentPostSchema };
