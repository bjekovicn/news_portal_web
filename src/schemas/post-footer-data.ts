import { z } from "zod";

const PostFooterDataSchema = z.object({
  createdAt: z.string(),
  likes: z.number().nullable(),
  comments: z.number().nullable(),
});

export type PostFooterDataType = z.infer<typeof PostFooterDataSchema>;

export { PostFooterDataSchema };
