import { Camera, CircleAlert } from "lucide-react";

const QueryError = ({ error }) => {
  return (
    <div className="mx-auto my-20 px-4 w-full text-center flex flex-col items-center">
      <CircleAlert className="w-16 h-16 text-red-500 mb-2" size={32}/>
      <h2 className="text-3xl font-bold mb-1 text-red-800">Error</h2>
      <p className="text-red-500">
        {error.message || "An unexpected error occurred."}
      </p>
    </div>
  );
};

export default QueryError;
