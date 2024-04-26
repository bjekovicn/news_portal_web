import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { PostDetailsSchema } from "../../schemas/post-details-schema";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import axios from "../../config/axios";

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
    <div className="container flex flex-col">
      <p className="text-2xl font-bold mb-12 mt-6">{data?.attributes.title}</p>
      <p className="">{data?.attributes.shortSummary}</p>
      {(coverFormats || url) && (
        <img
          className="mb-8 mt-8 p-12"
          src={coverFormats?.large?.url ?? coverFormats?.medium?.url ?? url}
        ></img>
      )}

      <BlocksRenderer content={data?.attributes.content}></BlocksRenderer>
    </div>
  );
};

export default PostPage;
