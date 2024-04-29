import LatestPostsLayout from "./components/latest-posts/latest_posts_layout.tsx";
import PopularPostsLayout from "./components/popular-posts/popular_posts_layout.tsx";
import RecentPostsLayout from "./components/recent-posts/recent_posts_layout.tsx.tsx";
import Trending from "./components/trending";

const HomePage = () => {
  return (
    <div className="container flex flex-col">
      <Trending />
      <LatestPostsLayout />
      <div className="flex flex-col mt-10">
        <div className="flex flex-row gap-20">
          <RecentPostsLayout />
          <PopularPostsLayout />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
