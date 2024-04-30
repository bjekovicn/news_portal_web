import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { PostDetailsSchema } from "../../schemas/post-details-schema";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import axios from "../../config/axios";
import CategoryPill from "../../common/components/category_pill";
import { format, parseISO } from "date-fns";
import { FaRegClock } from "react-icons/fa";
import CommentsSection from "./components/comments_section";

const retrievePostData = async (id: string | undefined) => {
  if (!id) return null;
  const response = await axios.get(`posts/${id}?populate=*`);
  return PostDetailsSchema.parse(response.data);
};

const PostPage = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useQuery(`pd${id}`, () =>
    retrievePostData(id)
  );

  if (isLoading) return <div>Fetching posts...</div>;
  if (error) return <div>An error occurred</div>;
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
      <div className="flex flex-row mb-2 mt-1">
        <div className="p-1 px-2 bg-gray-200 flex flex-row items-center shadow-md">
          <FaRegClock className="mr-2" />
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
      <CommentsSection></CommentsSection>
    </div>
  );
};

export default PostPage;
