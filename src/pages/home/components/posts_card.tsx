import React from "react";

interface PostsCardProps {
  category: string;
  title: string;
  author: string;
  createdAt: string;
  backgroundImage: string;
}

const PostsCard: React.FC<PostsCardProps> = ({
  title,
  category,
  author,
  createdAt,
  backgroundImage,
}) => {
  return (
    <div
      className="m-1 h-56 flex-grow shadow-lg flex flex-col justify-end" // Adjusted for vertical alignment
      style={{
        backgroundImage: `url('${backgroundImage}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="p-4">
        <div className="flex">
          <div className="inline-block bg-red-600 px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
            #{category}
          </div>
        </div>
        <div className="font-bold text-white text-left text-xl mb-2">
          {title}
        </div>
        <div className="flex flex-row">
          <div className="text-white text-base">{author}</div>
          <div className="text-white w-4"> - </div>
          <div className="text-white text-base">{createdAt}</div>
        </div>
      </div>
    </div>
  );
};

export default PostsCard;
