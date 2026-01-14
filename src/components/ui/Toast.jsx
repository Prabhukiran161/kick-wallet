import { CircleCheck } from "lucide-react";
export const Toast = ({ message }) => {
  return (
    <div className="w-80 p-3 bg-white border border-gray-300 rounded-xl shadow-lg animate-toast">
      <div className="flex items-center gap-3">
        <span>
          <CircleCheck fill="black" stroke="white" />
        </span>
        <span className="text-sm">{message}</span>
      </div>
    </div>
  );
};
