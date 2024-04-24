import { useEffect } from "react";
import { useParams } from "react-router-dom";

const PostPage = () => {
  const { id } = useParams();
  const fetchData = () => {
    //
  };
  useEffect(() => {
    fetchData();
  }, []);

  return <>Post Page</>;
};

export default PostPage;
