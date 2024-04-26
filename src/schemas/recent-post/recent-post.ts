import { z } from "zod";
import { CoverMediaSchema } from "../cover-media-schema";

const RecentPostSchema = z.object({
  id: z.number(),
  title: z.string(),
  createdAt: z.string(),
  coverMedia: CoverMediaSchema.nullable(),
});

export type RecentPostType = z.infer<typeof RecentPostSchema>;

export { RecentPostSchema };
