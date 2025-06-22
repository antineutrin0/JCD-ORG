import { Circle, LoaderCircle } from "lucide-react";

const Loader = () => {
  return (
    <div className="w-full flex items-center justify-center relative">
      <img
        src="logo.png"
        alt="Loading..."
        className="w-10 h-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      />
      <LoaderCircle className="text-green-500 animate-spin  w-16 h-16" size={64} />
    </div>
  );
};

export default Loader;
