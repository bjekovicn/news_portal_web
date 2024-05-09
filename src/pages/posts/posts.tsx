import CalendarSection from "../home/components/calendar-section.tsx";
import CategoriesSection from "../home/components/categories-section.tsx";
import PopularPostsLayout from "../home/components/popular-posts/popular_posts_layout";
import RecentPostsLayout from "../home/components/recent-posts/recent_posts_layout.tsx";

const PostsPage = () => {
  return (
    <div className="container flex flex-col">
      <div className="flex flex-col mt-10">
        <div className="flex flex-col md:flex-row lg:flex-row  md:gap-20 m-2">
          <RecentPostsLayout paginationAvailable={true} />
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

export default PostsPage;