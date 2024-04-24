import axios from "axios";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { PostSchema } from "../../schemas/post";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

const retrievePostData = async () => {
  const response = await axios.get("http://localhost:1337/api/posts/4");
  return PostSchema.parse(response.data["data"]);
};

const PostPage = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useQuery(`pd${id}`, retrievePostData);

  if (isLoading) return <div>Fetching posts...</div>;
  if (error) return <div>An error occurred: {error}</div>;
  return (
    <>
      <p>{data?.attributes.title}</p>
      <BlocksRenderer content={data?.attributes.content}></BlocksRenderer>
    </>
  );
};

export default PostPage;
