import axios from "../../../config/axios";
import SectionTitle from "../../../common/components/section_title";
import CategoryPill from "../../../common/components/category_pill";

import { useQuery } from "react-query";
import { CategorySchema } from "../../../schemas/category-schema";

const retrieveCategories = async () => {
  const response = await axios.get(`categories`);

  const categories = CategorySchema.array().parse(response.data);
  return categories;
};

const CategoriesSection = () => {
  const { data, error, isLoading } = useQuery(`categories}`, () =>
    retrieveCategories()
  );

  if (isLoading) return;
  if (error || !data) return <div>An error occurred</div>;
  return (
    <>
      <SectionTitle title={"Categories"} />
      <div className="flex flex-wrap gap-1 items-center justify-center">
        {data.map((category) => {
          return (
            <CategoryPill
              key={category.id}
              id={category.id}
              name={category.attributes.name}
            />
          );
        })}
      </div>
    </>
  );
};

export default CategoriesSection;
