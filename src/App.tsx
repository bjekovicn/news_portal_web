import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";

import Footer from "./common/components/footer";
import Header from "./common/components/header";
import HomePage from "./pages/home/home";
import PostPage from "./pages/post/post";
import PostsPage from "./pages/posts/posts";
import AboutUsPage from "./pages/about/about";
import ContactUsPage from "./pages/contact/contact";
import { ToastContainer } from "react-toastify";

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
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
