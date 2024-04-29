import { z } from "zod";
import { CoverMediaSchema } from "./cover-media-schema";

export const PostDetailsSchema = z.object({
  id: z.number(),
  attributes: z.object({
    title: z.string(),
    shortSummary: z.string(),
    createdAt: z.string(),
    updatedAt: z.string(),
    content: z.any(),
    categories: z.object({
      data: z.array(
        z.object({
          id: z.number(),
          attributes: z.object({
            name: z.string(),
            createdAt: z.string(),
            updatedAt: z.string(),
            locale: z.string(),
          }),
        })
      ),
    }),
    coverMedia: z.object({
      data: z.object({ attributes: CoverMediaSchema.nullable() }).nullable(),
    }),
  }),
});
