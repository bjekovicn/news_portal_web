import { z } from "zod";
import { MediaFormatSchema } from "./media-format-schema";

const CoverMediaSchema = z.object({
  url: z.string(),
  formats: z.object({
    thumbnail: MediaFormatSchema.optional(),
    small: MediaFormatSchema.optional(),
    medium: MediaFormatSchema.optional(),
    large: MediaFormatSchema.optional(),
  }),
});

export type CoverMediaType = z.infer<typeof CoverMediaSchema>;

export { CoverMediaSchema };
