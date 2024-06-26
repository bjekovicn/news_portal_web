import { FaRegClock } from "react-icons/fa";
import CategoryPill from "../../../common/components/category_pill";
import { ReducedCategoryType } from "../../../schemas/category-schema";
import { format, parseISO } from "date-fns";

const PostInfo: React.FC<{
  categories: ReducedCategoryType[];
  createdAt: string | undefined;
}> = ({ categories, createdAt }) => {
  return (
    <div className="flex flex-row justify-between">
      <div className="flex">
        {categories.map((category) => {
          return (
            <CategoryPill
              key={category.id}
              id={category.id}
              name={category.name}
            />
          );
        })}
      </div>
      <div className="flex flex-row  ">
        <div className="flex flex-row items-center bg-[#24252f] text-gray-200 px-3 py-1 text-xs md:text-sm font-semibold  shadow-lg">
          <FaRegClock className="mr-1" />
          {format(parseISO(createdAt || ""), "dd.MM.yyyy HH:mm")}
        </div>
      </div>
    </div>
  );
};
export default PostInfo;
