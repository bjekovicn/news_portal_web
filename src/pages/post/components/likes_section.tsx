import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import axios from "../../../config/axios";

const LikesSection: React.FC<{
  likes: number;
  postId: number;
}> = ({ likes, postId }) => {
  const { t } = useTranslation();
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(likes);

  useEffect(() => {
    const likesListJSON = localStorage.getItem("lks");
    const likesList: number[] = JSON.parse(likesListJSON || "[]");
    setIsLiked(likesList.includes(postId));
  }, [postId]);

  useEffect(() => {
    setLikesCount(likes);
  }, [likes]);

  const getLikesList = () => {
    const likes = localStorage.getItem("lks");
    const likesList: number[] = JSON.parse(likes || "[]");
    return likesList;
  };

  const setLikesList = (list: number[]) => {
    localStorage.setItem("lks", JSON.stringify(list));
  };

  const likePost = async () => {
    const likesList = getLikesList();
    if (likesList.includes(postId)) return;

    await axios.post(`posts-report/${postId}/like`).then(() => {
      const updatedList = [...likesList, postId];
      setLikesList(updatedList);
      setLikesCount((prev) => prev + 1);
      setIsLiked(true);
    });
  };

  const unlikePost = async () => {
    const likesList = getLikesList();
    if (!likesList.includes(postId)) return;

    axios.post(`posts-report/${postId}/unlike`).then(() => {
      const updatedLikesList = likesList.filter((el) => el !== postId);
      setLikesList(updatedLikesList);
      setLikesCount((prev) => prev - 1);
      setIsLiked(false);
    });
  };

  return (
    <div className="flex items-center mt-8 mb-2">
      {isLiked ? (
        <FaHeart
          size={30}
          className="text-red-600 cursor-pointer ml-1"
          onClick={unlikePost}
        />
      ) : (
        <FaRegHeart
          size={30}
          className="text-red-600 cursor-pointer ml-1"
          onClick={likePost}
        />
      )}
      <p className="text-gray-800 text-lg font-semibold ml-2">
        {likesCount} {t("likes")}
      </p>
    </div>
  );
};

export default LikesSection;
