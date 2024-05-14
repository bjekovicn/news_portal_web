import React from "react";
import logo from "../../../../assets/logo-post.png";
import CategoryPill from "../../../../common/components/category_pill";

import { format, parseISO } from "date-fns";
import { useNavigate } from "react-router-dom";
import { FaClock, FaComment, FaHeart } from "react-icons/fa";
import { RecentPostType } from "../../../../schemas/recent-post/recent-post";

const PopularPostsCard: React.FC<RecentPostType> = (post) => {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-row m-1 h-36 cursor-pointer"
      onClick={() =>
        navigate(`/posts/${post.slug}`, { state: { id: post.id } })
      }
    >
      <div
        className="w-28 h-28 min-w-28 min-h-28 md:min-w-32 md:min-h-32 lg:min-w-36 lg:min-h-36 shadow-sm"
        style={{
          backgroundImage: `url('${post.coverMedia?.url || logo}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          border: "1px solid #efefef",
        }}
      />
      <div className="flex flex-col flex-1 pl-5">
        <p className=" md:text-lg lg:text-xl font-semibold mb-2 line-clamp-2">
          {post.title}
        </p>

        <div className="flex">
          {post.categories.slice(0, 2).map((category) => {
            return <CategoryPill key={category.id} {...category} />;
          })}
        </div>
        <div className="flex flex-col flex-grow justify-end mb-4">
          <div className="flex">
            <div className="flex gap-1 items-center">
              <FaClock></FaClock>
              <p className="text-gray-500 text-sm font-semibold">
                {format(parseISO(post.createdAt), "dd.MM.yyyy")}
              </p>
            </div>
            <div className="w-4"></div>
            <div className="flex gap-1 items-center">
              <FaHeart></FaHeart>
              <p className="text-gray-500 text-sm font-semibold">
                {post.likes || 0}
              </p>
            </div>
            <div className="w-4"></div>
            <div className="flex gap-1 items-center">
              <FaComment> </FaComment>
              <p className="text-gray-500 text-sm font-semibold">
                {post.comments || 0}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularPostsCard;
