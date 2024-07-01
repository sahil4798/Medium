import Quote from "../components/AuthComponent/Quote";
import { Signin as SigninComponent } from "../components/AuthComponent/Signin";

const Signin = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div>
        <SigninComponent />
      </div>
      <div className="hidden md:block">
        <Quote />
      </div>
    </div>
  );
};

export default Signin;
