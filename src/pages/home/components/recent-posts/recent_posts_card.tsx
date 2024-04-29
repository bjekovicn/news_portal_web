import React from "react";
import logo from "../../../../assets/logo.png";

import { RecentPostType } from "../../../../schemas/recent-post/recent-post";
import { format, parseISO } from "date-fns";
import { FaClock, FaComment, FaHeart } from "react-icons/fa";
import CategoryPill from "../../../../common/components/category_pill";
import { useNavigate } from "react-router-dom";

const RecentPostsCard: React.FC<RecentPostType> = (post) => {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-row m-2 h-40 md:h-48 lg:h-56 cursor-pointer"
      onClick={() => navigate(`/posts/${post.id}`)}
    >
      <div
        className="w-40 md:w-80 lg:w-80 shadow-sm"
        style={{
          backgroundImage: `url('${post.coverMedia?.url || logo}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          border: "1px solid #efefef",
        }}
      />
      <div className="flex flex-col flex-1 px-5">
        <p className=" md:text-xl lg:text-2xl font-semibold mb-2 line-clamp-2">
          {post.title}
        </p>

        <div className="flex">
          {post.categories.map((category) => {
            return <CategoryPill key={category.id} {...category} />;
          })}
        </div>
        <div className="flex flex-col flex-grow mb-1">
          <p className="text-gray-500 text-sm font-medium flex-1 line-clamp-2 md:line-clamp-3 lg:line-clamp-4">
            {post.shortSummary}
          </p>
          <div className="flex mb-2">
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

export default RecentPostsCard;
