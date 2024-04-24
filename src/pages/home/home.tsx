import PostsLayout from "./components/posts_layout";
import Trending from "./components/trending";

const HomePage = () => {
  return (
    <div>
      <Trending />
      <PostsLayout />
    </div>
  );
};

export default HomePage;
