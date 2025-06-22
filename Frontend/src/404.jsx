import { CloudAlert } from "lucide-react";

const PageNotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
  
        <CloudAlert className="text-red-500 w-16 h-16 mx-auto mb-4" size={64} />
        <p className="mt-4 text-lg text-gray-600">Page Not Found</p>
        <p className="mt-2 text-gray-500">
          The page you are looking for does not exist.
        </p>
      </div>
    </div>
  );
};

export default PageNotFound;

