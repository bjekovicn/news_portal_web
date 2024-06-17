import axios from "../../config/axios";

import { useQuery } from "react-query";
import { BeatLoader } from "react-spinners";
import { useParams } from "react-router-dom";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { PostDetailsSchema } from "../../schemas/post-details-schema";

import PostInfo from "./components/post_info";
import LikesSection from "./components/likes_section";
import CalendarSection from "../home/components/calendar-section";
import CategoriesSection from "../home/components/categories-section";
import PopularPostsLayout from "../home/components/popular-posts/popular_posts_layout";
import CommentsSection from "./components/comments_section";

const retrievePostData = async (slug: string | undefined) => {
  if (!slug) return null;
  const response = await axios.get(`posts-report/find-by-slug/${slug}`);
  return PostDetailsSchema.parse(response);
};

const PostPage = () => {
  const { slug } = useParams();

  const { data, error, isLoading } = useQuery(`${slug}`, () =>
    retrievePostData(slug)
  );

  if (isLoading || error) {
    return <BeatLoader className="flex flex-grow my-96" />;
  }
  const coverFormats = data?.coverMedia?.formats;
  const url = data?.coverMedia?.url;

  return (
    <div className="container flex flex-col md:flex-row mt-4 lg:px-20 gap-6">
      <div className="flex flex-col p-4">
        <p className="text-2xl font-bold mb-4  text-start">{data?.title}</p>
        <PostInfo
          categories={data?.categories ?? []}
          createdAt={data?.createdAt}
        />
        <p className="mt-6">{data?.shortSummary}</p>
        {(coverFormats || url) && (
          <img
            className="my-6 lg:my-10"
            src={coverFormats?.large?.url ?? coverFormats?.medium?.url ?? url}
          ></img>
        )}

        <BlocksRenderer content={data?.content} />
        {data !== null && data?.likes !== null && (
          <LikesSection likes={data!.likes} postId={data!.id} />
        )}

        {data && <CommentsSection id={data.id} />}
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
