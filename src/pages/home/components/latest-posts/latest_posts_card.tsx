import React from "react";
import { LatestPostType } from "../../../../schemas/latest-post/latest-post";

import { useNavigate } from "react-router-dom";
import { format, parseISO } from "date-fns";

const LatestPostsCard: React.FC<LatestPostType> = (post) => {
  const navigate = useNavigate();

  return (
    <div
      className="m-1 h-56 flex-grow shadow-lg flex flex-col justify-end"
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
        <div className="font-bold text-gray-100 text-left text-2xl mb-2 drop-shadow-[0_1.6px_1.6px_rgba(0,0,0,0.5)]">
          {post.title}
        </div>
        <div className="flex flex-row">
          {post.author && (
            <div className="text-white text-base font-semibold drop-shadow-[0_1.6px_1.6px_rgba(0,0,0,0.4)]">
              {post.author?.username || ""}
            </div>
          )}
          {post.author && (
            <div className="text-white w-4 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.4)]">
              {" "}
              -{" "}
            </div>
          )}

          <div className="text-white text-base font-semibold drop-shadow-[0_1.6px_1.6px_rgba(0,0,0,0.4)]">
            {format(parseISO(post.createdAt), "dd.MM.yyyy")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestPostsCard;
