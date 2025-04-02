import React, { useState, useEffect } from "react";
import blogData from "./blogData.json";
import BlogCard from "./BlogCard";
import { Slider, Typography, Box } from "@mui/material";
import { LuCircleArrowLeft } from "react-icons/lu";
import { LuCircleArrowRight } from "react-icons/lu";
const BlogPagination = () => {
  const [blogsPerPage,setBlogsPerPage] = useState(3); // Number of blogs per page
  const [currentPage, setCurrentPage] = useState(0);
  const [visibleBlogs, setVisibleBlogs] = useState([]);
  const [sliderValue, setSliderValue] = useState(0);
  const [expandedCards, setExpandedCards] = useState([]); // Track expanded cards by their id

  const updateBlogsPerPage = () => {
    const width = window.innerWidth;
    if (width >= 1024) {
      setBlogsPerPage(3); // Large screens (lg)
    } else if (width >= 768) {
      setBlogsPerPage(2); // Medium screens (md)
    } else {
      setBlogsPerPage(1); // Small screens (sm)
    }
  };

  // Run once when the component mounts and add a resize listener
  useEffect(() => {
    updateBlogsPerPage();
    window.addEventListener("resize", updateBlogsPerPage);
    
    return () => window.removeEventListener("resize", updateBlogsPerPage);
  }, []);

  // Update visible blogs when page changes
  useEffect(() => {
    const startIndex = currentPage * blogsPerPage;
    const endIndex = startIndex + blogsPerPage;
    setVisibleBlogs(blogData.blogs.slice(startIndex, endIndex));
  }, [currentPage]);

  // Handle the expansion/collapse of a blog card
  const handleExpand = (blogId, expanded) => {
    if (expanded) {
      setExpandedCards((prev) => [...prev, blogId]); // Add to expanded list if expanded
    } else {
      setExpandedCards((prev) => prev.filter((id) => id !== blogId)); // Remove from expanded list if collapsed
    }
  };

  // Auto-scroll logic (changes page every 3 seconds)
  useEffect(() => {
    let interval;
    if (expandedCards.length === 0) {
      interval = setInterval(() => {
        setCurrentPage((prevPage) => (prevPage + 1) % Math.floor(blogData.blogs.length / blogsPerPage));
      }, 3000); // Auto-scroll speed when no cards are expanded
    }
    return () => clearInterval(interval);
  }, [expandedCards]);

  return (
    <div>
       <div className=" ml-8 my-4 flex flex-col justify-items-start items-start">
        <p className=" text-2xl mt-4 font-semibold text-center">Recent events</p>
      </div>

    <div className=" blog-pagination-container p-4">
     
      {/* Display the current visible blogs */}
      <div className=" justify-items-center  w-full space-x-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {visibleBlogs.map((blog) => (
          <div key={blog.id} className=" w-full mx-8"> 
            <BlogCard blog={blog} onExpand={handleExpand}  />
          </div>
        ))}
      </div>
    </div>
    <div className="flex items-center justify-center space-x-4 mt-2 mb-6">
  <button
    onClick={() => setCurrentPage((prevPage) => Math.max(prevPage - 1, 0))}
    className="p-2 rounded-full text-gray-700 hover:text-green-600 transition"
  >
   <p className="w-10 border-3 rounded-full text-3xl font-extrabold">←</p>
  </button>
  <button
    onClick={() =>
      setCurrentPage((prevPage) =>
        Math.min(prevPage + 1, Math.ceil(blogData.blogs.length / blogsPerPage) - 1)
      )
    }
    className="p-2 rounded-full text-gray-700 hover:text-green-600 transition"
  >
   <p className="w-10 border-3 rounded-full text-3xl font-extrabold">→</p>
  </button>
</div>

    </div>
  );
};

export default BlogPagination; 