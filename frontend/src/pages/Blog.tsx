import { AppBar } from "../components/AppBar";
import { SingleBlog } from "../components/SingleBlog";
import { Spinner } from "../components/Spinner";
import { useBlog } from "../hooks";
import { useParams } from "react-router-dom";

const Blog = () => {
  const { id } = useParams();
  const { blog, loading } = useBlog({ id: id || "" });
  console.log(blog);

  if (loading) {
    return (
      <div>
        <AppBar />
        <div className=" flex  justify-center   h-screen">
          <div className=" flex flex-col justify-center">
            <Spinner />
          </div>
        </div>
      </div>
    );
  }
  const defaultBlog = {
    id: 0,
    title: "Untitled",
    content: "No content available",
    author: { name: "Unknown author" },
  };

  return (
    <div>
      <SingleBlog blog={blog || defaultBlog} date={"August 24, 2023"} />
    </div>
  );
};

export default Blog;
