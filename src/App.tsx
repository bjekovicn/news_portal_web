import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";

import Footer from "./common/components/footer";
import Header from "./common/components/header";
import HomePage from "./pages/home/home";
import PostPage from "./pages/post/post";
import PostsPage from "./pages/posts/posts";
import AboutUsPage from "./pages/about/about";
import ContactUsPage from "./pages/contact/contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/posts" element={<PostsPage />} />
          <Route path="/posts/:slug" element={<PostPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
