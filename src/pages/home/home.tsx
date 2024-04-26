import LatestPostsLayout from "./components/latest-posts/latest_posts_layout.tsx";
import RecentPostsLayout from "./components/recent-posts/recent_posts_layout.tsx.tsx";
import Trending from "./components/trending";

const HomePage = () => {
  return (
    <div className="container flex flex-col">
      <Trending />
      <LatestPostsLayout />
      <RecentPostsLayout />
    </div>
  );
};

export default HomePage;
