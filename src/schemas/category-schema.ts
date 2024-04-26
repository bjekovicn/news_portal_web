import { z } from "zod";

const CategorySchema = z.object({
  id: z.number(),
  name: z.string(),
});

export type CategoryType = z.infer<typeof CategorySchema>;

export { CategorySchema };
