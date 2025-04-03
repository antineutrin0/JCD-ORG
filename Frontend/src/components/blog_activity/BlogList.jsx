import React, { useState, useEffect } from "react";
import BlogCard from "./BlogCard";
import blogData from "./blogData.json";
 // Assuming you have a JSON file with blog data
const BlogList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [newsPerPage, setNewsPerPage] = useState(9);

  useEffect(() => {
    const updateBlogsPerPage = () => {
      if (window.innerWidth < 640) {
        setNewsPerPage(3);
      } else if (window.innerWidth < 1024) {
        setNewsPerPage(6);
      } else {
        setNewsPerPage(9);
      }
    };

    updateBlogsPerPage();
    window.addEventListener("resize", updateBlogsPerPage);
    return () => window.removeEventListener("resize", updateBlogsPerPage);
  }, []);

  const indexOfLastBlog = currentPage * newsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - newsPerPage;
  const currentBlogs = blogData.blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const totalPages = Math.ceil(blogData.blogs.length / newsPerPage);

  return (
    <div className="w-full mx-auto p-4">
      <h1 className="text-3xl font-bold text-center text-green-800 mb-6">Latest Blogs</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-4">
        {currentBlogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog}/>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-6 space-x-2 ">
        <button
          className={`px-4 py-2 bg-green-700 text-white rounded ${currentPage === 1 && "opacity-50 cursor-not-allowed"}`}
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            className={`px-3 py-1 rounded ${currentPage === index + 1 ? "bg-green-900 text-white" : "bg-gray-200"}`}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}

        <button
          className={`px-4 py-2 bg-green-700 text-white rounded ${currentPage === totalPages && "opacity-50 cursor-not-allowed"}`}
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default BlogList;
