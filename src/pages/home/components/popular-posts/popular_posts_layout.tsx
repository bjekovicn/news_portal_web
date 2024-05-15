import "react-calendar/dist/Calendar.css";
import axios from "../../../../config/axios";
import PopularPostsCard from "./popular_posts.card";
import SectionTitle from "../../../../common/components/section_title";

import { useQuery } from "react-query";
import { RecentPostPayloadSchema } from "../../../../schemas/recent-post/recent-posts-payload";
import { BeatLoader } from "react-spinners";
import { useTranslation } from "react-i18next";

const retrievePostReports = async () => {
  const response = await axios.get(`posts-report/recent`);

  const posts = RecentPostPayloadSchema.parse(response);
  return posts;
};

const PopularPostsLayout = () => {
  const { data, error, isLoading } = useQuery(`postReports/recent}`, () =>
    retrievePostReports()
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
        data.posts.map((post) => {
          return <PopularPostsCard key={post.id} {...post} />;
        })
      )}
    </>
  );
};

export default PopularPostsLayout;
