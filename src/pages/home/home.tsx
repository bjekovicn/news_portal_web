import CalendarSection from "./components/calendar-section.tsx";
import CategoriesSection from "./components/categories-section.tsx";
import LatestPostsLayout from "./components/latest-posts/latest_posts_layout.tsx";
import PopularPostsLayout from "./components/popular-posts/popular_posts_layout.tsx";
import RecentPostsLayout from "./components/recent-posts/recent_posts_layout.tsx.tsx";
import Trending from "./components/trending";

const HomePage = () => {
  return (
    <div className="container flex flex-col">
      <Trending />
      <LatestPostsLayout />
      <div className="flex flex-col mt-2">
        <div className="flex flex-col md:flex-row lg:flex-row  md:gap-16 m-2">
          <RecentPostsLayout paginationAvailable={false} />
          <div className="flex-1 flex-col">
            <PopularPostsLayout />
            <CalendarSection />
            <CategoriesSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
