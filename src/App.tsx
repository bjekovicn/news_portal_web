import "./App.css";
import Footer from "./common/components/footer";
import Header from "./common/components/header";

import HomePage from "./pages/home/home";
import PostPage from "./pages/post/post";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import PostsPage from "./pages/posts/posts";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/posts" element={<PostsPage />}></Route>
          <Route path="/posts/:slug" element={<PostPage />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
