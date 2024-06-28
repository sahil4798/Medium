import { AppBar } from "./AppBar";

interface blogType {
  title: string;
  content: string;
  date: string;
  author: string;
}

type Blog = { blog: blogType; date: string };

export const SingleBlog = ({ blog, date }: Blog) => {
  return (
    <div className="">
      <AppBar />
      <div className="grid  grid-col-1 lg:grid-cols-4 bg-red-400 h-screen">
        <div className="colspan-1  lg:col-span-3  flex justify-center bg-sky-400 px-20">
          {/* <div className=" max-w-3xl"> */}
          <div className=" max-w-4xl flex flex-col mt-40 ">
            <div className="text-6xl">{blog.title}</div>
            <div className="text-slate-400">{`Posted on ${date}`}</div>
            <div className="leading-relaxed text-lg	">{blog.content}</div>
            {/* </div> */}
          </div>
        </div>
        <div className="col-span-1 bg-green-300 h-full">
          <div className="mt-40 w-full bg-blue-200">
            <div className="bg-slate-400 text-lg">Author</div>
            <div className=" flex justify-center">
              <div className="flex flex-col  max-w-sm bg-slate-50 mt-4 ">
                <div className="text-4xl font-semibold pb-3">{blog.author}</div>
                <div className="text-slate-400">
                  Master of mirth, purveyor of puns, and the fugniest person in
                  the kingdom.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      //{" "}
    </div>
  );
};
