import { CategoryType } from "../../schemas/category-schema";

const CategoryPill: React.FC<CategoryType> = (category) => {
  return (
    <div className="inline-block bg-red-600 px-3 py-1 text-xs md:text-sm font-semibold text-white mr-2 mb-1">
      #{category.name}
    </div>
  );
};

export default CategoryPill;
