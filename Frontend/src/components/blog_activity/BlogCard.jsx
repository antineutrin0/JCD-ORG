import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";

const BlogCard = ({ blog }) => {
  const descriptionLimit = 60;

  return (
    <Link to={`/blogs/${blog.id}`}>
      <motion.div
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.3 }}
        className="mx-4 rounded-xl shadow-md overflow-hidden bg-green-900 hover:bg-green-800 transition duration-300"
      >
        {/* Card Header */}
        <div className="flex items-center justify-between p-4 border-b border-green-700">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-red-500 text-white flex items-center justify-center rounded-full font-bold">
              {blog.author.charAt(0)}
            </div>
            <div className="ml-3">
              <h3 className="text-lg text-white font-semibold">{blog.title}</h3>
              <p className="text-sm text-gray-300">{blog.date}</p>
            </div>
          </div>
        </div>

        {/* Card Image */}
        <div className="relative w-full h-60 lg:h-80 overflow-hidden">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover transform transition-transform duration-300 ease-in-out"
          />
        </div>

        {/* Card Content */}
        <div className="p-4">
          <p className="text-gray-100">
            {blog.description.length > descriptionLimit
              ? `${blog.description.slice(0, descriptionLimit)}...`
              : blog.description}
          </p>

          
            <span className="mt-2 inline-block text-blue-300 hover:text-blue-400 font-medium">
              Read More →
            </span>
       
        </div>

        {/* Card Actions */}
      </motion.div>
    </Link>
  );
};

export default BlogCard;
