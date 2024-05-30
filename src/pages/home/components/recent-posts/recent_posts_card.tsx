import React from "react";
import logo from "../../../../assets/logo-post.png";
import PostFooterData from "../../../../common/components/post_footer_data";

import { useNavigate } from "react-router-dom";
import CategoryPill from "../../../../common/components/category_pill";
import { RecentPostType } from "../../../../schemas/recent-post/recent-post";

const RecentPostsCard: React.FC<RecentPostType> = (post) => {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-row m-1 h-40 md:h-48 lg:h-56 cursor-pointer"
      onClick={() =>
        navigate(`/posts/${post.slug}`, { state: { id: post.id } })
      }
    >
      <div
        className="w-36 h-36 min-w-36 min-h-36 md:min-w-48 md:min-h-48 lg:min-w-56 lg:min-h-56 shadow-sm"
        style={{
          backgroundImage: `url('${post.coverMedia?.url || logo}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          border: "1px solid #efefef",
        }}
      />

      <div className="flex flex-col flex-1 pl-5">
        <p className=" md:text-xl lg:text-2xl font-semibold line-clamp-2 mb-1">
          {post.title}
        </p>

        <div className="flex">
          {post.categories.slice(0, 2).map((category) => {
            return <CategoryPill key={category.id} {...category} />;
          })}
        </div>

        <div className="flex flex-col flex-grow ">
          <p className="text-gray-500 text-sm font-medium flex-1 line-clamp-2 md:line-clamp-3 my-2">
            {post.shortSummary}
          </p>
          <PostFooterData
            comments={post.comments}
            createdAt={post.createdAt}
            likes={post.likes}
          />
        </div>
      </div>
    </div>
  );
};

export default RecentPostsCard;
