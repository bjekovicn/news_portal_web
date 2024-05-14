import axios from "../../../../config/axios";
import RecentPostsCard from "./recent_posts_card";
import SectionTitle from "../../../../common/components/section_title";
import PaginationButtons from "../../../../common/components/pagination_buttons";

import { useState } from "react";
import { useQuery } from "react-query";
import { RecentPostPayloadSchema } from "../../../../schemas/recent-post/recent-posts-payload";
import { BeatLoader } from "react-spinners";

const retrievePostReports = async (page: number) => {
  const response = await axios.get(`posts-report/recent?page=${page}`);

  const posts = RecentPostPayloadSchema.parse(response);
  return posts;
};

const RecentPostsLayout: React.FC<{ paginationAvailable: boolean }> = ({
  paginationAvailable,
}) => {
  const [page, setPage] = useState(1);
  const { data, error, isLoading } = useQuery(
    ["recent", page],
    () => retrievePostReports(page),
    { keepPreviousData: true }
  );

  return (
    <div className="flex flex-col w-full md:w-3/5 lg:w-3/5">
      <SectionTitle title={"Recent Posts"} />
      <div className="flex justify-center">
        {isLoading || error || !data ? (
          <BeatLoader className="my-6" />
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
              ></PaginationButtons>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default RecentPostsLayout;
