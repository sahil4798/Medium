import { Link, useNavigate } from "react-router-dom";
import { Avtar } from "./Blogs/BlogCard";
import { useEffect, useState } from "react";

export const AppBar = () => {
  const [isSignedIn, setISSignedIn] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    setISSignedIn(!!token);
  }, []);

  return (
    <div className="flex justify-between px-16 py-4  border-b border-gray-800  ">
      <div className="flex flex-col justify-center cursor-pointer font-medium text-3xl ">
        <Link to={"/"}>Medium</Link>
      </div>

      <div className=" flex ">
        <div className=" flex flex-col justify-center text-sm cursor-pointer mr-6">
          <Link to={isSignedIn ? "/publish" : "signin"}>write</Link>
        </div>
        {!isSignedIn && (
          <div className=" flex flex-col justify-center text-sm cursor-pointer mr-6">
            <Link to={"/signin"}>Signin</Link>
          </div>
        )}
        {isSignedIn && (
          <div className="flex flex-col justify-center  mr-6">
            <button
              onClick={() => {
                localStorage.removeItem("token");
                navigate("/");
              }}
              type="button"
              className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300  rounded-full text-sm px-5 py-2.5 font-normal "
            >
              Logout
            </button>
          </div>
        )}
        {isSignedIn && (
          <div className="flex flex-col justify-center">
            <Avtar name={"Jack"} size={"large"} text={"xs"} />
          </div>
        )}
        {!isSignedIn && (
          <div className="flex flex-col justify-center ">
            <button
              onClick={() => {
                localStorage.removeItem("token");
                navigate("/signin");
              }}
              type="button"
              className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300  rounded-full text-sm px-5 py-2.5  font-normal "
            >
              Get started
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
