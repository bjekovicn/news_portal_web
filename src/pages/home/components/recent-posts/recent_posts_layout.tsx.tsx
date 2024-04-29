import axios from "../../../../config/axios";

import { useQuery } from "react-query";
import { RecentPostSchema } from "../../../../schemas/recent-post/recent-post";
import RecentPostsCard from "./recent_posts_card";
import PopularPostsCard from "../popular-posts/popular_posts.card";

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
    <div className="flex flex-col mt-10">
      <div className="flex flex-row gap-20">
        <div className="flex flex-col w-3/5">
          <p className="text-2xl ml-2 font-bold">Recent Posts</p>
          <div className="h-0.5 m-2 w-full bg-red-600"></div>
          {data.map((post) => {
            return <RecentPostsCard key={post.id} {...post} />;
          })}
        </div>
        <div className="w-96 flex-1">
          <p className=" text-2xl ml-2 font-bold">Popular Posts</p>
          <div className="h-0.5 m-2 w-full bg-red-600"></div>
          {data.map((post) => {
            return <PopularPostsCard key={post.id} {...post} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default RecentPostsLayout;
