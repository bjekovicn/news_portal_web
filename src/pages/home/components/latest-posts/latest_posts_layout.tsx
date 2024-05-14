import LatestPostsCard from "./latest_posts_card";
import axios from "../../../../config/axios";

import { useQuery } from "react-query";
import { LatestPostSchema } from "../../../../schemas/latest-post/latest-post";
import { BeatLoader } from "react-spinners";

const retrievePostReports = async () => {
  const response = await axios.get(`posts-report`);

  const posts = LatestPostSchema.array().parse(response);
  return posts;
};

const LatestPostsLayout = () => {
  const { data, error, isLoading } = useQuery(`postReports}`, () =>
    retrievePostReports()
  );

  if (isLoading || error || !data)
    return (
      <div className="flex justify-center my-10">
        <BeatLoader />
      </div>
    );

  return (
    <div className="flex flex-col md:flex-row p-1 mt-2">
      <div className="w-full md:w-1/2 flex flex-col">
        {data.length > 0 && <LatestPostsCard key={data[0].id} {...data[0]} />}
      </div>

      <div className="w-full md:w-1/2 flex flex-col">
        {data.length > 1 && (
          <div className="h-1/2">
            <LatestPostsCard key={data[1].id} {...data[1]} />
          </div>
        )}

        {data.length > 2 && (
          <div className="h-1/2 flex">
            {data.length > 2 && (
              <div className="w-1/2">
                <LatestPostsCard key={data[2].id} {...data[2]} />
              </div>
            )}
            {data.length > 3 && (
              <div className="w-1/2">
                <LatestPostsCard key={data[3].id} {...data[3]} />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default LatestPostsLayout;
