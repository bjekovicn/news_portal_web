import PostsCard from "./posts_card";

const PostsLayout = () => {
  return (
    <div className="flex">
      <div className="w-1/2  flex flex-col">
        <PostsCard
          id={1}
          backgroundImage="https://t3.ftcdn.net/jpg/03/27/55/60/360_F_327556002_99c7QmZmwocLwF7ywQ68ChZaBry1DbtD.jpg"
          category="Politics"
          title="Lorem ipsum is"
          author="Nikola.B."
          createdAt="21.04.2024"
        />
      </div>
      <div className="w-1/2 flex flex-col">
        <div className="h-1/2 ">
          <PostsCard
            id={2}
            backgroundImage="https://t3.ftcdn.net/jpg/03/27/55/60/360_F_327556002_99c7QmZmwocLwF7ywQ68ChZaBry1DbtD.jpg"
            category="Politics"
            title="Lorem ipsum is"
            author="Nikola.B."
            createdAt="21.04.2024"
          />
        </div>
        <div className="h-1/2 flex">
          <div className="w-1/2 ">
            <PostsCard
              id={3}
              backgroundImage="https://t3.ftcdn.net/jpg/03/27/55/60/360_F_327556002_99c7QmZmwocLwF7ywQ68ChZaBry1DbtD.jpg"
              category="Politics"
              title="Lorem ipsum is"
              author="Nikola.B."
              createdAt="21.04.2024"
            />
          </div>
          <div className="w-1/2 ">
            <PostsCard
              id={4}
              backgroundImage="https://t3.ftcdn.net/jpg/03/27/55/60/360_F_327556002_99c7QmZmwocLwF7ywQ68ChZaBry1DbtD.jpg"
              category="Politics"
              title="Lorem ipsum is"
              author="Nikola.B."
              createdAt="21.04.2024"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostsLayout;
