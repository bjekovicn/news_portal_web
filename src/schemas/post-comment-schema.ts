import { z } from "zod";

const PostCommentSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Ime je obavezno polje!" })
    .max(20, { message: "Maksimalna dužina imena je 20 karaktera!" }),
  content: z
    .string()
    .min(1, { message: "Komentar je obavezno polje!" })
    .max(400, { message: "Maksimalna dužina komentara je 400 karaktera!" }),
});

export type PostCommentSchemaType = z.infer<typeof PostCommentSchema>;
export { PostCommentSchema };
