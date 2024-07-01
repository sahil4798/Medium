import { Link } from "react-router-dom";

export function AuthHeader({ type }: { type: string }) {
  return (
    <>
      <div className="text-3xl font-extrabold text-center">
        {type === "Sign Up" ? "Create an account" : "Sign In"}
      </div>
      <div className="text-slate-300 text-center ">
        {type === "Sign Up"
          ? "Already have an account "
          : "Don't have an acount "}
        <Link
          className="underline"
          to={type === "Sign Up" ? "/signin" : "/signup"}
        >
          {type === "Sign Up" ? "Sign In" : "Sign Up"}
        </Link>
      </div>
    </>
  );
}
