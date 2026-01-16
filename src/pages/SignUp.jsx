import { Zap } from "lucide-react";
export const SignUp = () => {
  return (
    <section className="flex-1 flex justify-center items-center">
      <div className="flex flex-col items-center gap-6 border rounded-xl border-gray-300/75 w-sm p-8">
        <Zap size={50} className="fill-(--color-primary)" />
        <p className="text-2xl md:text-3xl font-bold">Create Account</p>
        <input
          className="border border-gray-300/75 py-2 px-4 w-full rounded-xl focus:outline-2 outline-(--color-primary) outline-offset-0"
          type="email"
          placeholder="Email"
        />
        <input
          className="w-full border px-4 py-2 rounded-xl border-gray-300/75 focus:outline-2 outline-(--color-primary) outline-offset-0"
          type="password"
          placeholder="Password"
        />
        <input
          className="w-full border px-4 py-2 rounded-xl border-gray-300/75 focus:outline-2 outline-(--color-primary) outline-offset-0"
          type="confirmpassword"
          placeholder="Confirm Password"
        />
        <div className="flex items-center gap-3">
          <input type="checkbox" className="w-6 h-6 fill-(--color-primary)" />
          <p className="text-sm">
            By signing up, I agree to the{" "}
            <span className="font-medium">User Agreement</span> and{" "}
            <span className="font-medium">Privacy Policy.</span>
          </p>
        </div>
        <button className="w-full bg-(--color-primary)/80 hover:bg-(--color-primary)/50 transition-transform duration-300 ease-out text-xl font-bold py-2 rounded-xl">
          Sign Up
        </button>
      </div>
    </section>
  );
};
