import {
  useRecentBlogsQuery,
} from "../../hooks/usePressRelease";
import Loader from "../Loader";
import BlogCard from "./BlogCard";
// Assuming you have a JSON file with blog data
const BlogList = () => {
  const { blogs, blogsQuery } = useRecentBlogsQuery();

  return (
    <div className="w-full mx-auto p-4 mt-4 max-w-7xl">
      <h1 className="text-3xl font-bold text-center text-green-800 my-6">
        Recent Blogs
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-4">
        {blogs?.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>

      {blogsQuery.isLoading ||
        (blogsQuery.isPending && (
          <div className="flex items-center justify-center h-64">
            <Loader />
          </div>
        ))}

      {blogsQuery.hasNextPage && (
        <div className="mt-6 text-center">
          <button
            disabled={!blogsQuery.hasNextPage || blogsQuery.isLoading}
            onClick={() => blogsQuery.fetchNextPage()}
            className="bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded-lg shadow"
          >
            Load More News
          </button>
        </div>
      )}

      {!blogsQuery.hasNextPage &&
        !blogsQuery.isLoading &&
        !blogsQuery.isPending && (
          <div className="mt-6 text-center">
            <p className="text-gray-500">No more news to load.</p>
          </div>
        )}

      {blogsQuery.isError && (
        <div className="text-red-500 text-center mt-4">
          Error loading news. Please try again later.
        </div>
      )}
    </div>
  );
};

export default BlogList;
