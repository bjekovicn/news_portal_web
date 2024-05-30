import { ReducedCategoryType } from "../../schemas/category-schema";

const onClickHandler = () => {
  //
};

const CategoryPill: React.FC<ReducedCategoryType> = (category) => {
  return (
    <div
      onClick={onClickHandler}
      className="inline-block bg-red-600 px-3 py-1 text-xs md:text-sm font-semibold text-white  shadow-lg cursor-pointer"
    >
      #{category.name}
    </div>
  );
};

export default CategoryPill;
