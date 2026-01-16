import { Zap } from "lucide-react";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <section className="flex flex-1 items-center justify-center">
      {/* Login Card */}
      <div className="flex flex-col gap-6 items-center border w-sm border-gray-300/75 rounded-xl p-8">
        <Zap size={50} className="fill-(--color-primary)" />
        <p className="text-2xl md:text-3xl font-bold">Login</p>
        <input
          type="email"
          placeholder="Email"
          className="w-full border px-4 py-2 rounded-xl border-gray-300/75 focus:outline-2 outline-(--color-primary) outline-offset-0"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border px-4 py-2 rounded-xl border-gray-300/75 focus:outline-2 outline-(--color-primary) outline-offset-0"
        />
        <div className="w-full flex justify-between items-center text-sm">
          <span>
            New here?{" "}
            <Link to={"/signup"} className="font-bold">
              Sign Up
            </Link>
          </span>
          <Link to={"/forgot-password"} className="font-bold">
            Forgot Password
          </Link>
        </div>
        <button className="bg-(--color-primary)/80 hover:bg-(--color-primary)/50 w-full font-bold text-xl py-2 rounded-xl transition-transform duration-300">
          Login
        </button>
      </div>
    </section>
  );
};
