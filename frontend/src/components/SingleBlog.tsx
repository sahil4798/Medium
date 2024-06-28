import { AppBar } from "./AppBar";
import { Avtar } from "./BlogCard";

interface blogType {
  id: number;
  title: string;
  content: string;
  author: {
    name: string;
  };
}

type Blog = { blog: blogType; date: string };

export const SingleBlog = ({ blog, date }: Blog) => {
  return (
    <div className="">
      <AppBar />
      <div className="flex justify-center">
        <div className="grid  grid-cols-4 s w-full px-1 0 pt-12 max-w-screen-2xl ">
          <div className="col-span-3   ">
            <div className="text-5xl font-extrabol  ">{blog.title}</div>
            <div className="text-slate-400 pt-2">{`Posted on ${date}`}</div>
            <div className="leading-relaxed text-lg pt-2	">{blog.content}</div>
          </div>

          <div className="col-span-1  ">
            <div className="w-full ">
              <div className=" text-lg">Author</div>
              <div className="flex ">
                <div className="flex flex-col justify-center pr-2">
                  <Avtar size="large" name={blog.author.name} />
                </div>
                <div className="">
                  <div className="text-4xl font-semibold pb-3">
                    {blog.author.name}
                  </div>
                  <div className="text-slate-400">
                    Master of mirth, purveyor of puns, and the fugniest person
                    in the kingdom.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
