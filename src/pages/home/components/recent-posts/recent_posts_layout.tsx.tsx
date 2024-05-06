import axios from "../../../../config/axios";

import { useQuery } from "react-query";
import { RecentPostSchema } from "../../../../schemas/recent-post/recent-post";
import RecentPostsCard from "./recent_posts_card";
import SectionTitle from "../../../../common/components/section_title";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const retrievePostReports = async () => {
  const response = await axios.get(`posts-report/recent`);

  const posts = RecentPostSchema.array().parse(response);
  return posts;
};

const RecentPostsLayout = () => {
  const { data, error, isLoading } = useQuery(`recent}`, () =>
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
      <div className="flex flex-row gap-10 m-1 mt-6 h-10">
        <div className="bg-gray-300  flex-1 justify-center items-center flex font-semibold text-gray-600 cursor-pointer">
          <FaChevronLeft className="mr-2" />
          Prethodna
        </div>
        <div className="bg-pink-600  flex-1 justify-center items-center flex font-semibold text-white cursor-pointer">
          Sljedeća
          <FaChevronRight className="ml-2" />
        </div>
      </div>
    </div>
  );
};

export default RecentPostsLayout;
