import { Zap } from "lucide-react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="w-full bg-white border-b border-gray-300/75 sticky z-50 top-0">
      {/* Wrapper */}
      <nav className="max-w-7xl mx-auto py-5 px-4 md:px-0">
        {/* Layout */}
        <div className="flex">
          <Link to="/" className=" flex items-center gap-2">
            <Zap size={30} fill="yellow"/>
            <span className="text-2xl md:text-3xl font-bold">Kick</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};
