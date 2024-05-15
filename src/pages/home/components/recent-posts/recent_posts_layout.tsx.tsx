import axios from "../../../../config/axios";
import RecentPostsCard from "./recent_posts_card";
import SectionTitle from "../../../../common/components/section_title";
import PaginationButtons from "../../../../common/components/pagination_buttons";

import { useState } from "react";
import { useQuery } from "react-query";
import { BeatLoader } from "react-spinners";
import { RecentPostPayloadSchema } from "../../../../schemas/recent-post/recent-posts-payload";
import { useTranslation } from "react-i18next";

const retrievePostReports = async (page: number) => {
  const response = await axios.get(`posts-report/recent?page=${page}`);

  const posts = RecentPostPayloadSchema.parse(response);
  return posts;
};

const RecentPostsLayout: React.FC<{ paginationAvailable: boolean }> = ({
  paginationAvailable,
}) => {
  const [page, setPage] = useState(1);
  const { t } = useTranslation();
  const { data, error, isLoading } = useQuery(
    ["recent", page],
    () => retrievePostReports(page),
    { keepPreviousData: true }
  );

  return (
    <div className="flex flex-col w-full md:w-3/5 lg:w-3/5">
      <SectionTitle title={t("recentPosts")} />

      {isLoading || error || !data ? (
        <div className="flex justify-center">
          <BeatLoader className="my-6" />
        </div>
      ) : (
        <>
          {data.posts.map((post) => {
            return <RecentPostsCard key={post.id} {...post} />;
          })}

          {paginationAvailable && (
            <PaginationButtons
              onNextHandler={() => setPage((prev) => prev + 1)}
              onPreviousHandler={() => setPage((prev) => prev - 1)}
              currentPage={page}
              totalPages={data.pagination.pageCount}
            />
          )}
        </>
      )}
    </div>
  );
};

export default RecentPostsLayout;
