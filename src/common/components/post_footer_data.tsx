import { format, parseISO } from "date-fns";
import { FaClockRotateLeft } from "react-icons/fa6";
import { FaRegComment, FaRegHeart } from "react-icons/fa";
import { PostFooterDataType } from "../../schemas/post-footer-data";

const PostFooterData: React.FC<PostFooterDataType> = ({
  createdAt,
  likes,
  comments,
}) => {
  return (
    <div className="flex mb-2">
      <div className="flex gap-1 items-center">
        <FaClockRotateLeft size={18} />
        <p className="text-gray-800 text-sm font-semibold">
          {format(parseISO(createdAt), "dd.MM.yyyy")}
        </p>
      </div>

      <div className="w-full"></div>

      <div className="flex gap-1 items-center ml-3">
        <FaRegHeart size={18} className="text-red-600" />
        <p className="text-gray-800 text-sm font-bold">{likes || 0}</p>
      </div>
      <div className="flex gap-1 items-center ml-3 mr-2">
        <FaRegComment size={18} />
        <p className="text-gray-800 text-sm font-bold">{comments || 0}</p>
      </div>
    </div>
  );
};
export default PostFooterData;
