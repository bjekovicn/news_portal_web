import "./App.css";
import Header from "./common/components/header";

import HomePage from "./pages/home/home";
import PostPage from "./pages/post/post";
import { Route, BrowserRouter, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/posts/:id" element={<PostPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
