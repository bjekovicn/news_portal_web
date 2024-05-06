import { z } from "zod";

const ReducedCategorySchema = z.object({
  id: z.number(),
  name: z.string(),
});
const CategorySchema = z.object({
  id: z.number(),
  attributes: z.object({
    name: z.string(),
    createdAt: z.string(),
    updatedAt: z.string(),
    locale: z.string(),
  }),
});

export type ReducedCategoryType = z.infer<typeof ReducedCategorySchema>;
export type CategoryType = z.infer<typeof CategorySchema>;
export { ReducedCategorySchema, CategorySchema };
