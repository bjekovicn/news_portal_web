import "react-toastify/dist/ReactToastify.css";

import CommentCard from "./comment_card";
import axios from "../../../config/axios";
import AddCommentModal from "./add_comment_modal";

import { useState } from "react";
import { useQuery } from "react-query";
import { BeatLoader } from "react-spinners";
import { useTranslation } from "react-i18next";
import { CommentSchema } from "../../../schemas/comment-schema";

const retrieveCommentsData = async (id: number | undefined) => {
  if (!id) return [];
  const response = await axios.get(`comments-report/${id}`);

  return CommentSchema.array().parse(response);
};

const CommentsSection: React.FC<{ id: number }> = ({ id }) => {
  const [isOpen, setIsOpen] = useState(false);

  const { data, error, isLoading } = useQuery(`comments${id}`, () =>
    retrieveCommentsData(id)
  );
  const { t } = useTranslation();

  if (isLoading || error) return <BeatLoader />;

  return (
    <>
      <div className="flex flex-col text-clip w-full">
        <div className="flex justify-between items-center mb-6 border-b-2 border-gray-100 ">
          <p className="text-2xl font-semibold"> {t("comments")}</p>
          <button
            className="text-white px-4 bg-pink-600 py-2 mt-4 mb-2"
            onClick={() => setIsOpen(true)}
          >
            {t("sendComment")}
          </button>
        </div>
        {data?.length === 0 && (
          <p className="flex pt-4 text-gray-400">{t("noCommentsOnPost")}</p>
        )}
        {data?.map((comment) => {
          return (
            <CommentCard
              {...comment}
              isReply={false}
              postId={id}
              key={comment.id}
            />
          );
        })}

        <AddCommentModal
          postId={id}
          commentId={null}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        />
      </div>
    </>
  );
};

export default CommentsSection;
