import axios from "../../../../config/axios";

import { useQuery } from "react-query";
import { RecentPostSchema } from "../../../../schemas/recent-post/recent-post";
import RecentPostsCard from "./recent_posts_card";
import SectionTitle from "../../../../common/components/section_title";

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
    <div className="flex flex-col w-full md:w-3/5 lg:w-3/5">
      <SectionTitle title={"Recent Posts"} />
      {data.map((post) => {
        return <RecentPostsCard key={post.id} {...post} />;
      })}
    </div>
  );
};

export default RecentPostsLayout;
