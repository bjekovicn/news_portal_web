import "react-calendar/dist/Calendar.css";
import axios from "../../../../config/axios";
import PopularPostsCard from "./popular_posts.card";
import SectionTitle from "../../../../common/components/section_title";

import { useQuery } from "react-query";
import { RecentPostPayloadSchema } from "../../../../schemas/recent-post/recent-posts-payload";

const retrievePostReports = async () => {
  const response = await axios.get(`posts-report/recent`);

  const posts = RecentPostPayloadSchema.parse(response);
  return posts;
};

const PopularPostsLayout = () => {
  const { data, error, isLoading } = useQuery(`postReports/recent}`, () =>
    retrievePostReports()
  );

  if (isLoading) return <div>Fetching posts...</div>;
  if (error || !data) return <div>An error occurred</div>;

  return (
    <>
      <SectionTitle title={"Popular Posts"} />
      {data.posts.map((post) => {
        return <PopularPostsCard key={post.id} {...post} />;
      })}
    </>
  );
};

export default PopularPostsLayout;
