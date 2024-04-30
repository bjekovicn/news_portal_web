import CommentCard from "./comment_card";
import axios from "../../../config/axios";

import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { CommentSchema } from "../../../schemas/comment-schema";

const retrieveCommentsData = async (id: string | undefined) => {
  if (!id) return [];
  const response = await axios.get(`comments-report/${id}`);

  return CommentSchema.array().parse(response);
};

const CommentsSection = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useQuery(`comments${id}`, () =>
    retrieveCommentsData(id)
  );

  if (isLoading || error) return <div />;

  return (
    <div className="flex flex-col mt-24">
      <div className="flex justify-between items-center mb-6 border-b-2 border-gray-100 ">
        <p className="text-2xl font-semibold">Komentari</p>
        <button className="text-white px-4 bg-pink-600 py-2 mt-4 mb-2 ">
          Pošaljite komentar
        </button>
      </div>

      {data?.map((comment) => {
        return <CommentCard {...comment} isReply={false} key={comment.id} />;
      })}
    </div>
  );
};

export default CommentsSection;
