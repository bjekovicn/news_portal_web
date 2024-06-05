import "react-calendar/dist/Calendar.css";
import axios from "../../../../config/axios";
import PopularPostsCard from "./popular_posts.card";
import SectionTitle from "../../../../common/components/section_title";

import { useQuery } from "react-query";
import { BeatLoader } from "react-spinners";
import { useTranslation } from "react-i18next";
import { RecentPostSchema } from "../../../../schemas/recent-post/recent-post";

const retrievePopularPosts = async () => {
  const response = await axios.get(`posts-report/popular`);

  const posts = RecentPostSchema.array().parse(response);
  return posts;
};

const PopularPostsLayout = () => {
  const { data, error, isLoading } = useQuery(`postReports/popular}`, () =>
    retrievePopularPosts()
  );
  const { t } = useTranslation();

  return (
    <>
      <SectionTitle title={t("popularPosts")} />

      {isLoading || error || !data ? (
        <div className="flex items-center justify-center">
          <BeatLoader className="my-6" />
        </div>
      ) : (
        data.map((post) => {
          return <PopularPostsCard key={post.id} {...post} />;
        })
      )}
    </>
  );
};

export default PopularPostsLayout;
