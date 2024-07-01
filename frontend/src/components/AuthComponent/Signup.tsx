import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SignupInput } from "@aahil07/medium-common";

import axios from "axios";
import { BACKEND_URL } from "../../config";
import { LabelledInput } from "../LabelledInput";
import { AuthHeader } from "./AuthHeader";

export const Signup = () => {
  const [postInput, setPostInput] = useState<SignupInput>({
    name: "",
    username: "",
    password: "",
  });
  const [clicked, setClicked] = useState(false);

  const navigate = useNavigate();

  async function submitHandler() {
    setClicked(true);
    const userData = {
      name: postInput.name,
      username: postInput.username,
      password: postInput.password,
    };

    try {
      const res = await axios.post(`${BACKEND_URL}api/v1/user/signup`, {
        ...userData,
      });
      const jwt = res.data.token;
      localStorage.setItem("token", jwt);
      navigate("/blogs");
    } catch (error) {
      alert("failed To signup");
    }
    setClicked(false);
  }

  return (
    <div className=" flex justify-center h-screen ">
      <div className=" flex flex-col justify-center    ">
        <div className="px-10 ">
          <AuthHeader type="Sign Up" />
        </div>
        <div>
          <LabelledInput
            label={"Name"}
            placeholder={"Enter your name"}
            onChange={(e) => {
              setPostInput({ ...postInput, name: e.target.value });
            }}
          />
          <LabelledInput
            label={"Username"}
            placeholder={"Enter your username"}
            onChange={(e) => {
              setPostInput({ ...postInput, username: e.target.value });
            }}
          />
          <LabelledInput
            label={"Password"}
            type={"password"}
            placeholder={"Enter your password"}
            onChange={(e) => {
              setPostInput({ ...postInput, password: e.target.value });
            }}
          />
        </div>
        <div className="mt-6">
          <button
            type="submit"
            onClick={submitHandler}
            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 w-full"
          >
            {clicked ? "Signup..." : "Signup"}
          </button>
        </div>
      </div>
    </div>
  );
};
