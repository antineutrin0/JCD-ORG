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
        <div className="flex p-4 border-b border-green-700 h-26">
          <img src="logo.png" className="w-10 h-10" />
          <div className="ml-3 flex-1">
            {/* wrap to eliipses */}
            <h3 className="text-lg text-white font-semibold line-clamp-2">
              {blog.title}
            </h3>
            <p className="text-sm text-gray-300">{new Date(blog.createdAt.seconds*1000).toDateString()}</p>
          </div>
        </div>

        {/* Card Image */}
        <div className="relative w-full h-60 lg:h-80 overflow-hidden">
          <img
            src={blog.imageUrl}
            alt={blog.title}
            className="w-full h-full object-cover transform transition-transform duration-300 ease-in-out"
          />
        </div>

        {/* Card Content */}
        <div className="p-4">
          <p className="text-gray-100 line-clamp-2" dangerouslySetInnerHTML={{__html:blog.content}}></p>
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
