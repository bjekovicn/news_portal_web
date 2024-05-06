import { useForm } from "react-hook-form";
import {
  PostCommentSchema,
  PostCommentSchemaType,
} from "../../../schemas/post-comment-schema";
import { zodResolver } from "@hookform/resolvers/zod";

const AddComment = () => {
  const onSubmit = () => {
    //
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PostCommentSchemaType>({
    resolver: zodResolver(PostCommentSchema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="border-gray-100 border-solid border-2 p-2 gap-2 flex flex-col items-center">
        <input
          placeholder="Vaše ime"
          className="text-black px-4 py-2  border border-gray-200 border-solid w-full"
          {...register("name")}
        />
        {errors.name && <span>{errors.name.message}</span>}

        <textarea
          rows={6}
          placeholder="Napišite vaš komentar ovdje"
          className="border border-gray-200 border-solid px-4 py-2 w-full resize-none"
          {...register("content")}
        />
        {errors.content && <span>{errors.content.message}</span>}

        <button
          type="submit"
          className="text-white px-4 bg-pink-600 py-2 mt-8 w-full"
        >
          Pošaljite komentar
        </button>
      </div>
    </form>
  );
};

export default AddComment;
