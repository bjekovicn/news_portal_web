import { z } from "zod";
import { RecentPostSchema } from "./recent-post";

const RecentPostPayloadSchema = z.object({
  posts: z.array(RecentPostSchema),
  pagination: z.object({
    page: z.number(),
    pageSize: z.number(),
    pageCount: z.number(),
    total: z.number(),
  }),
});

export type RecentPostPayloadType = z.infer<typeof RecentPostPayloadSchema>;

export { RecentPostPayloadSchema };
