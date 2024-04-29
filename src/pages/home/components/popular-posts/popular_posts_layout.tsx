import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
import axios from "../../../../config/axios";
import PopularPostsCard from "./popular_posts.card";

import { useState } from "react";
import { useQuery } from "react-query";
import { RecentPostSchema } from "../../../../schemas/recent-post/recent-post";
import SectionTitle from "../../../../common/components/section_title";

const retrievePostReports = async () => {
  const response = await axios.get(`posts-report/recent`);

  const posts = RecentPostSchema.array().parse(response);
  return posts;
};
type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const PopularPostsLayout = () => {
  const [value] = useState<Value>(new Date());
  const { data, error, isLoading } = useQuery(`postReports/recent}`, () =>
    retrievePostReports()
  );

  if (isLoading) return <div>Fetching posts...</div>;
  if (error || !data) return <div>An error occurred</div>;

  return (
    <div className="w-96 flex-1">
      <SectionTitle title={"Popular Posts"} />
      {data.map((post) => {
        return <PopularPostsCard key={post.id} {...post} />;
      })}
      <SectionTitle title={"Calendar"} />
      <div className="flex justify-center pt-4">
        <Calendar value={value} locale="sr-BA" className="p-2" />
      </div>
    </div>
  );
};

export default PopularPostsLayout;
