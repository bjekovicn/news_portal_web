import axios from "../../config/axios";
import CommentsSection from "./components/comments_section";
import CategoryPill from "../../common/components/category_pill";

import { useQuery } from "react-query";
import { FaRegClock } from "react-icons/fa";
import { format, parseISO } from "date-fns";
import { useLocation } from "react-router-dom";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { PostDetailsSchema } from "../../schemas/post-details-schema";
import { BeatLoader } from "react-spinners";

const retrievePostData = async (id: string | undefined) => {
  if (!id) return null;
  const response = await axios.get(`posts/${id}?populate=*`);
  return PostDetailsSchema.parse(response.data);
};

const PostPage = () => {
  const { state } = useLocation();
  const { id } = state;

  const { data, error, isLoading } = useQuery(`pd${id}`, () =>
    retrievePostData(id)
  );

  if (isLoading || error) {
    return <BeatLoader className="flex flex-grow my-96" />;
  }
  const coverAttributes = data?.attributes.coverMedia?.data?.attributes;
  const coverFormats = coverAttributes?.formats;
  const url = coverAttributes?.url;

  return (
    <div className="container flex flex-col p-4">
      <p className="text-2xl font-bold mb-4 mt-6 text-start">
        {data?.attributes.title}
      </p>
      <div className="flex">
        {data?.attributes.categories.data.map((category) => {
          return (
            <CategoryPill
              key={category.id}
              id={category.id}
              name={category.attributes.name}
            />
          );
        })}
      </div>
      <div className="flex flex-row mb-2 ">
        <div className="flex flex-row items-center bg-[#24252f] text-gray-200 px-3 py-1 text-xs md:text-sm font-semibold mr-2 mb-1 shadow-lg">
          <FaRegClock className="mr-1" />
          {format(
            parseISO(data?.attributes.createdAt || ""),
            "dd.MM.yyyy HH:mm"
          )}
        </div>
      </div>
      <p className="">{data?.attributes.shortSummary}</p>
      {(coverFormats || url) && (
        <img
          className="my-6 lg:my-10"
          src={coverFormats?.large?.url ?? coverFormats?.medium?.url ?? url}
        ></img>
      )}

      <BlocksRenderer content={data?.attributes.content} />
      <CommentsSection />
    </div>
  );
};

export default PostPage;
