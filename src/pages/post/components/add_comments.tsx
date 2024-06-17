import axios from "../../../config/axios";

import {
  PostCommentSchema,
  PostCommentSchemaType,
} from "../../../schemas/post-comment-schema";
import { useTranslation } from "react-i18next";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";

const AddComment: React.FC<{
  onSubmitCallback: () => void;
  postId: number;
  commentId: number | null;
}> = ({ onSubmitCallback, postId, commentId }) => {
  const onSubmit: SubmitHandler<PostCommentSchemaType> = async (data) => {
    await axios.post(`comments-report/${postId}/post-comment`, {
      ...data,
      parentComment: commentId,
    });
    onSubmitCallback();
    //
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PostCommentSchemaType>({
    resolver: zodResolver(PostCommentSchema),
  });

  const { t } = useTranslation();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="border-gray-100 border-solid border-2 p-2 gap-2 flex flex-col items-center">
        <textarea
          rows={6}
          placeholder={t("addComment.writeComment")}
          className="border border-gray-200 border-solid px-4 py-2 w-full resize-none"
          {...register("content")}
        />
        {errors.content && <span>{errors.content.message}</span>}
        <p className="text-gray-500 text-sm">
          {t("addComment.commentWarning")}
        </p>
        <button
          type="submit"
          className="text-white px-4 bg-pink-600 py-2 mt-8 w-full"
        >
          {t("addComment.sendComment")}
        </button>
      </div>
    </form>
  );
};

export default AddComment;
