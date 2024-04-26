import axios from "../../../../config/axios";

import { useQuery } from "react-query";
import { RecentPostSchema } from "../../../../schemas/recent-post/recent-post";
import RecentPostsCard from "./recent_posts_card";

const retrievePostReports = async () => {
  const response = await axios.get(`posts-report/recent`);

  const posts = RecentPostSchema.array().parse(response);
  return posts;
};

const RecentPostsLayout = () => {
  const { data, error, isLoading } = useQuery(`postReports/recent}`, () =>
    retrievePostReports()
  );

  if (isLoading) return <div>Fetching posts...</div>;
  if (error || !data) return <div>An error occurred</div>;

  return (
    <div className="flex flex-col">
      <p className="mt-10 mb-5 ml-2 text-2xl font-bold">Recent Posts</p>
      <div className="flex flex-row gap-20">
        <div className="flex flex-col flex-1">
          {data.map((post) => {
            return <RecentPostsCard key={post.id} {...post}></RecentPostsCard>;
          })}
        </div>
        <div className="w-96 bg-red-600"></div>
      </div>
    </div>
  );
};

export default RecentPostsLayout;
