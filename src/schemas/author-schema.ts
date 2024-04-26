import { z } from "zod";

const AuthorSchema = z.object({
  id: z.number(),
  username: z.string(),
});

export type AuthorType = z.infer<typeof AuthorSchema>;

export { AuthorSchema };
