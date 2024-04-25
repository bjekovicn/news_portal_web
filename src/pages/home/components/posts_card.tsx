import React from "react";
import { useNavigate } from "react-router-dom";
import { PostReportSchema } from "../../../schemas/post-report";
import { z } from "zod";

const PostsCard: React.FC<z.infer<typeof PostReportSchema>> = (post) => {
  const navigate = useNavigate();

  return (
    <div
      className="m-1 h-56 flex-grow shadow-lg flex flex-col justify-end" // Adjusted for vertical alignment
      style={{
        backgroundImage: `url('${post.coverMedia?.url}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      onClick={() => {
        navigate(`/posts/${post.id}`);
      }}
    >
      <div className="p-4">
        <div className="flex">
          {post.categories.length > 0 && (
            <div className="inline-block bg-red-600 px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
              #{post.categories[0].name}
            </div>
          )}
        </div>
        <div className="font-bold text-white text-left text-xl mb-2">
          {post.title}
        </div>
        <div className="flex flex-row">
          <div className="text-white text-base">{post.author.username}</div>
          <div className="text-white w-4"> - </div>
          <div className="text-white text-base">{post.createdAt}</div>
        </div>
      </div>
    </div>
  );
};

export default PostsCard;
