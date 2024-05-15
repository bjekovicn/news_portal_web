import React from "react";
import { format, parseISO } from "date-fns";
import { useNavigate } from "react-router-dom";
import { LatestPostType } from "../../../../schemas/latest-post/latest-post";
import CategoryPill from "../../../../common/components/category_pill";

const LatestPostsCard: React.FC<LatestPostType> = (post) => {
  const navigate = useNavigate();

  return (
    <div
      className="m-1 h-56 flex-grow shadow-lg flex flex-col justify-end cursor-pointer"
      style={{
        backgroundImage: `url('${post.coverMedia?.url}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      onClick={() => {
        navigate(`/posts/${post.slug}`, { state: { id: post.id } });
      }}
    >
      <div className="p-4">
        <div className="flex">
          {post.categories.length > 0 && (
            <CategoryPill key={post.categories[0].id} {...post.categories[0]} />
          )}
        </div>
        <div className="font-bold text-gray-100 text-left text-sm md:text-lg lg:text-xl  md:mb-2 drop-shadow-[0_1.6px_1.6px_rgba(0,0,0,0.5)] line-clamp-3">
          {post.title}
        </div>
        <div className="flex flex-row">
          {post.author && (
            <div className="text-white text-xs md:text-sm lg:text-base font-semibold drop-shadow-[0_1.6px_1.6px_rgba(0,0,0,0.4)]">
              {post.author?.username || ""}
            </div>
          )}
          {post.author && (
            <div className="text-white text-xs md:text-sm lg:text-base w-4 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.4)]">
              {" "}
              -{" "}
            </div>
          )}

          <div className="text-white text-xs md:text-sm lg:text-base font-semibold drop-shadow-[0_1.6px_1.6px_rgba(0,0,0,0.4)]">
            {format(parseISO(post.createdAt), "dd.MM.yyyy")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestPostsCard;
