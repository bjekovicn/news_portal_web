import { z } from "zod";

const MediaFormatSchema = z.object({
  name: z.string(),
  hash: z.string(),
  ext: z.string(),
  mime: z.string(),
  path: z.null().optional(),
  width: z.number(),
  height: z.number(),
  size: z.number(),
  sizeInBytes: z.number(),
  url: z.string(),
});
export type MediaFormatType = z.infer<typeof MediaFormatSchema>;

export { MediaFormatSchema };
