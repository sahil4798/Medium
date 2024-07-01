import { useRecoilValueLoadable } from "recoil";
import { SingleBlog } from "../components/Blogs/SingleBlog";
import { useParams } from "react-router-dom";
import { blogAtomFamily } from "../recoil/atoms/Blog";
import { AppBar } from "../components/AppBar";
import { SingleBlogSkeeleton } from "../components/Blogs/SiglebolgSkeleton";

const Blog = () => {
  const { id } = useParams();
  const defaultBlog = {
    id: 0,
    title: "Untitled",
    content: "No content available",
    author: { name: "Unknown author" },
    createdAt: new Date(),
  };

  const blog = useRecoilValueLoadable(blogAtomFamily(id || ""));

  if (blog.state === "loading") {
    return (
      <div>
        <AppBar />
        <SingleBlogSkeeleton />
      </div>
    );
  }

  return (
    <div>
      <SingleBlog blog={blog.contents || defaultBlog} />
    </div>
  );
};

export default Blog;
