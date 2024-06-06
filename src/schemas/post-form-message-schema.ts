import { z } from "zod";

const PostFormMessageSchema = z.object({
  message: z
    .string()
    .min(1, { message: "Порука је обавезно поље!" })
    .max(1000, { message: "Максимална дужина поруке је 1000 карактера!" }),
});

export type PostFormMessageSchemaType = z.infer<typeof PostFormMessageSchema>;
export { PostFormMessageSchema };
