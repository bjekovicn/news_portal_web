import { format, parseISO } from "date-fns";
import { FaRegClock, FaUser } from "react-icons/fa";
import { CommentType } from "../../../schemas/comment-schema";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import AddCommentModal from "./add_comment_modal";

interface CommentCardProps extends CommentType {
  isReply: boolean;
  postId: number;
}

const CommentCard: React.FC<CommentCardProps> = ({
  id,
  isReply,
  author,
  content,
  createdAt,
  replies,
  postId,
}) => {
  const borderStyle = isReply ? "" : "border-b-2";
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <AddCommentModal
        postId={postId}
        commentId={id}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
      <div className={`flex mb-4 border-gray-100 border-solid ${borderStyle}`}>
        <FaUser className="text-gray-400 w-8 h-8 min-w-6 min-h-6 mr-4 mt-2 ml-2" />

        <div className="flex flex-col">
          <p className="text-lg font-bold">{author}</p>
          <div className="flex flex-row items-center text-gray-600">
            <FaRegClock className="mr-2" />
            {format(parseISO(createdAt), "dd.MM.yyyy HH:mm")}
          </div>
          <p className="text-gray-600">{content}</p>
          {!isReply && (
            <div className="items-end flex mb-2 cursor-pointer">
              <p
                onClick={() => setIsOpen(true)}
                className="text-gray-400 uppercase font-base"
              >
                {t("reply")}
              </p>
            </div>
          )}
          {replies?.map((reply) => (
            <CommentCard
              key={reply.id}
              {...reply}
              isReply={true}
              postId={postId}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default CommentCard;
