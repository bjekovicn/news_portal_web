import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { PostSchema } from "../../schemas/post";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import axios from "../../config/axios";

const retrievePostData = async (id: string | undefined) => {
  if (!id) return null;
  const response = await axios.get(`posts/${id}`);
  return PostSchema.parse(response.data);
};

const PostPage = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useQuery(`pd${id}`, () =>
    retrievePostData(id)
  );

  if (isLoading) return <div>Fetching posts...</div>;
  if (error) return <div>An error occurred</div>;
  return (
    <>
      <p>{data?.attributes.title}</p>
      <BlocksRenderer content={data?.attributes.content}></BlocksRenderer>
    </>
  );
};

export default PostPage;
