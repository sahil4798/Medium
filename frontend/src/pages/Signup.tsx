import Quote from "../components/AuthComponent/Quote";
import { Signup as SignupComponent } from "../components/AuthComponent/Signup";

const Signup = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 ">
      <div>
        <SignupComponent />
      </div>
      <div className="hidden md:block">
        <Quote />
      </div>
    </div>
  );
};

export default Signup;
