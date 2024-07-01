import { useNavigate } from "react-router-dom";
import { AppBar } from "../components/AppBar";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen bg-orange-50">
      <AppBar />
      <div className="mx-20 my-16  ">
        <div className="text-9xl mb-14">
          <div className="leading-">Human </div>
          <div>stories & ideas</div>
        </div>
        <div className="text-2xl mb-14">
          A place to read, write, and deepen your understanding
        </div>
        <div>
          <button
            onClick={() => {
              navigate("/signin");
            }}
            type="button"
            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-light rounded-full text-lg  px-10 py-2.5 me-2 mb-2 "
          >
            Start reading
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
