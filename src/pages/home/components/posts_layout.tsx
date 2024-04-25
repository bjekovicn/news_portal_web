import PostsCard from "./posts_card";
import axios from "../../../config/axios";

import { useQuery } from "react-query";
import { PostReportSchema } from "../../../schemas/post-report";

const retrievePostReports = async () => {
  const response = await axios.get(`posts-report`);

  const posts = PostReportSchema.array().parse(response);
  return posts;
};

const PostsLayout = () => {
  const { data, error, isLoading } = useQuery(`postReports}`, () =>
    retrievePostReports()
  );

  if (isLoading) return <div>Fetching posts...</div>;
  if (error || !data) return <div>An error occurred</div>;

  return (
    <div className="flex">
      <div className="w-1/2 flex flex-col">
        {data.length > 0 && <PostsCard key={data[0].id} {...data[0]} />}
      </div>

      <div className="w-1/2 flex flex-col">
        {data.length > 1 && (
          <div className="h-1/2">
            <PostsCard key={data[1].id} {...data[1]} />
          </div>
        )}

        {data.length > 2 && (
          <div className="h-1/2 flex">
            {data.length > 2 && (
              <div className="w-1/2">
                <PostsCard key={data[2].id} {...data[2]} />
              </div>
            )}
            {data.length > 3 && (
              <div className="w-1/2">
                <PostsCard key={data[3].id} {...data[3]} />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default PostsLayout;
