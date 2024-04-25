import { z } from "zod";

const AuthorSchema = z.object({
  id: z.number(),
  username: z.string(),
});

const CategorySchema = z.object({
  id: z.number(),
  name: z.string(),
});

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

const CoverMediaSchema = z.object({
  id: z.number(),
  name: z.string(),
  width: z.number(),
  height: z.number(),
  url: z.string(),
  formats: z.object({
    thumbnail: MediaFormatSchema.optional(),
    small: MediaFormatSchema.optional(),
    medium: MediaFormatSchema.optional(),
    large: MediaFormatSchema.optional(),
  }),
});

const PostReportSchema = z.object({
  id: z.number(),
  title: z.string(),
  createdAt: z.string(),
  author: AuthorSchema.nullable(),
  categories: z.array(CategorySchema),
  coverMedia: CoverMediaSchema.nullable(),
});

export type PostReportType = z.infer<typeof PostReportSchema>;
export type AuthorType = z.infer<typeof AuthorSchema>;
export type CategoryType = z.infer<typeof CategorySchema>;
export type MediaFormatType = z.infer<typeof MediaFormatSchema>;
export type CoverMediaType = z.infer<typeof CoverMediaSchema>;

export {
  PostReportSchema,
  AuthorSchema,
  CategorySchema,
  MediaFormatSchema,
  CoverMediaSchema,
};
