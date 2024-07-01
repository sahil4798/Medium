import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Blogs from "./pages/Blogs";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import Publish from "./pages/Publish";
import { RecoilRoot } from "recoil";

const App = () => {
  return (
    <div>
      <RecoilRoot>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blog/:id" element={<Blog />} />
            <Route path="/publish" element={<Publish />} />
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </div>
  );
};

export default App;
