import { useState, ChangeEvent } from "react";
import { AppBar } from "../components/AppBar";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { CreateBlogInput } from "@aahil07/medium-common";
import { useNavigate } from "react-router-dom";

export const Publish = () => {
  const [createBlogInput, setCreateBlogInput] = useState<CreateBlogInput>({
    title: "",
    content: "",
  });

  const navigate = useNavigate();

  function buttonClickHandler() {
    axios
      .post(
        `${BACKEND_URL}api/v1/blog`,
        {
          title: createBlogInput.title,
          content: createBlogInput.content,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => {
        // console.log(res.data);
        navigate(`/blog/${res.data.id}`);
      })
      .catch((err: Error) => {
        alert(err);
      });
  }

  return (
    <div>
      <AppBar />
      <div className="flex justify-center pt-8">
        <div className="w-full  max-w-screen-lg ">
          <div>
            <input
              onChange={(e) => {
                setCreateBlogInput({
                  ...createBlogInput,
                  title: e.target.value,
                });
              }}
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="Title"
            />

            <div className="mt-2">
              <Textbar
                onChange={(e) => {
                  setCreateBlogInput({
                    ...createBlogInput,
                    content: e.target.value,
                  });
                }}
              />
            </div>

            <div className="mt-3 ">
              <button
                onClick={buttonClickHandler}
                type="button"
                className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 w-full "
              >
                Post
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface type1 {
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

function Textbar({ onChange }: type1) {
  return (
    <textarea
      onChange={onChange}
      id="message"
      rows={6}
      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="Write your thoughts here..."
    ></textarea>
  );
}
