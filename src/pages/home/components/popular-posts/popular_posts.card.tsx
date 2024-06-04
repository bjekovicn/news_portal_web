import React from "react";
import logo from "../../../../assets/logo-post.png";
import PostFooterData from "../../../../common/components/post_footer_data";

import { useNavigate } from "react-router-dom";
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
      <div className="flex flex-col pl-5">
        <p className=" font-semibold leading-tight line-clamp-2">
          {post.title}
        </p>

        <div className="flex flex-col flex-grow justify-between ">
          <p className="text-gray-500 text-sm font-normal leading-tight line-clamp-3 md:line-clamp-4 lg:line-clamp-4 my-1">
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

export default PopularPostsCard;
