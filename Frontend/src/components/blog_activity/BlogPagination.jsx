import React, { useState, useEffect } from "react";
import BlogCard from "./BlogCard";
import blogData from "./blogData.json"; // Assuming you have a JSON file with blog data
import { Slider, Typography, Box } from "@mui/material";
import { LuCircleArrowLeft } from "react-icons/lu";
import { LuCircleArrowRight } from "react-icons/lu";
import SectionTitle from "../SectionTitle";
import { motion } from "framer-motion"; // Import motion from framer-motion

const BlogPagination = () => {
  const [newsPerPage, setNewsPerPage] = useState(3); // Number of blogs per page
  const [currentPage, setCurrentPage] = useState(0);
  const [visibleBlogs, setVisibleBlogs] = useState([]);
  const [sliderValue, setSliderValue] = useState(0);
  const [expandedCards, setExpandedCards] = useState([]); // Track expanded cards by their id

  const updateBlogsPerPage = () => {
    const width = window.innerWidth;
    if (width >= 1024) {
      setNewsPerPage(3); // Large screens (lg)
    } else if (width >= 768) {
      setNewsPerPage(2); // Medium screens (md)
    } else {
      setNewsPerPage(1); // Small screens (sm)
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
    const startIndex = currentPage * newsPerPage;
    const endIndex = startIndex + newsPerPage;
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
        setCurrentPage((prevPage) => (prevPage + 1) % Math.floor(blogData.blogs.length / newsPerPage));
      }, 3000); // Auto-scroll speed when no cards are expanded
    }
    return () => clearInterval(interval);
  }, [expandedCards]);

  return (
    <div className=" mx-auto max-w-7xl my-20">
      <div className=" flex flex-col justify-items-start items-start">
        <SectionTitle title="Blogs"></SectionTitle>
      </div>

      <div className=" blog-pagination-container p-4">
        {/* Display the current visible blogs */}
        <motion.div
          className="justify-items-center w-full space-x-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {visibleBlogs.map((blog) => (
            <motion.div
              key={blog.id}
              className=" w-full mx-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <BlogCard blog={blog} onExpand={handleExpand} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="flex items-center justify-center space-x-4 mt-2 mb-6">
        <motion.button
          onClick={() => setCurrentPage((prevPage) => Math.max(prevPage - 1, 0))}
          className="p-2  text-gray-700 hover:text-green-600 transition"
          whileHover={{ scale: 1.1 }}
        >
          <p className="w-10 text-3xl font-extrabold">←</p>
        </motion.button>

        <motion.button
          onClick={() =>
            setCurrentPage((prevPage) =>
              Math.min(prevPage + 1, Math.ceil(blogData.blogs.length / newsPerPage) - 1)
            )
          }
          className="p-2  text-gray-700 hover:text-green-600 transition"
          whileHover={{ scale: 1.1 }}
        >
          <p className="w-10 text-3xl font-extrabold">→</p>
        </motion.button>
      </div>
    </div>
  );
};

export default BlogPagination;
