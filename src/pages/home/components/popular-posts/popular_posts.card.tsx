import React from "react";
import logo from "../../../../assets/logo.png";

import { RecentPostType } from "../../../../schemas/recent-post/recent-post";
import { format, parseISO } from "date-fns";
import { FaClock, FaComment, FaHeart } from "react-icons/fa";
import CategoryPill from "../../../../common/components/category_pill";
import { useNavigate } from "react-router-dom";

const PopularPostsCard: React.FC<RecentPostType> = (post) => {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-row m-2 h-36"
      onClick={() => navigate(`/posts/${post.id}`)}
    >
      <div
        className="w-32 h-32"
        style={{
          backgroundImage: `url('${post.coverMedia?.url || logo}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          border: "1px solid #000000",
        }}
      />
      <div className="flex flex-col flex-1 px-5">
        <p className="text-xl font-semibold mb-2 line-clamp-2">{post.title}</p>

        <div className="flex">
          {post.categories.map((category) => {
            return <CategoryPill key={category.id} {...category} />;
          })}
        </div>
        <div className="flex flex-col flex-grow">
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
