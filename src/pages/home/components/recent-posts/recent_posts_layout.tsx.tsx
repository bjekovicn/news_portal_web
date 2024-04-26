import axios from "../../../../config/axios";

import { useQuery } from "react-query";
import { LatestPostSchema } from "../../../../schemas/latest-post/latest-post";

const retrievePostReports = async () => {
  const response = await axios.get(`posts-report/recent`);

  const posts = LatestPostSchema.array().parse(response);
  return posts;
};

const RecentPostsLayout = () => {
  const { data, error, isLoading } = useQuery(`postReports}`, () =>
    retrievePostReports()
  );

  if (isLoading) return <div>Fetching posts...</div>;
  if (error || !data) return <div>An error occurred</div>;

  return <div className="flex"></div>;
};

export default RecentPostsLayout;
