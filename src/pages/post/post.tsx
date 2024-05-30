import axios from "../../config/axios";
import PostInfo from "./components/post_info";
import CommentsSection from "./components/comments_section";

import { useQuery } from "react-query";
import { BeatLoader } from "react-spinners";
import { useLocation } from "react-router-dom";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { PostDetailsSchema } from "../../schemas/post-details-schema";
import PopularPostsLayout from "../home/components/popular-posts/popular_posts_layout";
import CalendarSection from "../home/components/calendar-section";
import CategoriesSection from "../home/components/categories-section";

const retrievePostData = async (id: string | undefined) => {
  if (!id) return null;
  const response = await axios.get(`posts/${id}?populate=*`);
  return PostDetailsSchema.parse(response.data);
};

const PostPage = () => {
  const { state } = useLocation();
  const { id } = state;

  const { data, error, isLoading } = useQuery(`pd${id}`, () =>
    retrievePostData(id)
  );

  if (isLoading || error) {
    return <BeatLoader className="flex flex-grow my-96" />;
  }
  const coverAttributes = data?.attributes.coverMedia?.data?.attributes;
  const coverFormats = coverAttributes?.formats;
  const url = coverAttributes?.url;

  return (
    <div className="container flex flex-col md:flex-row mt-4 lg:px-20 gap-6">
      <div className="flex flex-col p-4">
        <p className="text-2xl font-bold mb-4  text-start">
          {data?.attributes.title}
        </p>
        <PostInfo
          categories={data?.attributes.categories.data ?? []}
          createdAt={data?.attributes.createdAt}
        />
        <p className="mt-6">{data?.attributes.shortSummary}</p>
        {(coverFormats || url) && (
          <img
            className="my-6 lg:my-10"
            src={coverFormats?.large?.url ?? coverFormats?.medium?.url ?? url}
          ></img>
        )}

        <BlocksRenderer content={data?.attributes.content} />
        <CommentsSection />
      </div>
      <div className="flex-1 flex-col">
        <PopularPostsLayout />
        <CalendarSection />
        <CategoriesSection />
      </div>
    </div>
  );
};

export default PostPage;
