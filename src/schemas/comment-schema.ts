import { z } from "zod";

const CommentSchema = z.object({
  id: z.number(),
  author: z.string(),
  content: z.string(),
  createdAt: z.string(),
  replies: z
    .array(
      z.object({
        id: z.number(),
        author: z.string(),
        content: z.string(),
        createdAt: z.string(),
      })
    )
    .optional(),
});

export type CommentType = z.infer<typeof CommentSchema>;

export { CommentSchema };
