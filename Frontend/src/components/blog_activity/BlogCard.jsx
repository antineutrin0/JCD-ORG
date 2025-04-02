import React, { useState } from "react";

const BlogCard = ({ blog, onExpand }) => {
  const [expanded, setExpanded] = useState(false);
  const descriptionLimit = 50;

  // Handle the expand/collapse of the card
  const handleExpand = () => {
    setExpanded(!expanded);
    onExpand(blog.id, !expanded); // Notify the parent whether the card is expanded or not
  };

  return (
    <div className="mx-4  rounded-lg shadow-lg overflow-hidden bg-green-800 hover:bg-green-700"

    >
      {/* Card Header */}
      <div className="flex items-center justify-between p-4 border-b-gray-100">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-red-500 text-white flex items-center justify-center rounded-full font-bold">
            {blog.author}
          </div>
          <div className="ml-3">
            <h3 className="text-lg text-white font-semibold">{blog.title}</h3>
            <p className="text-sm text-gray-200">{blog.date}</p>
          </div>
        </div>
        <button className="text-gray-500 hover:text-gray-700">
          &#x22EE;
        </button>
      </div>

      {/* Card Image */}
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full  h-60 lg:h-96  hover:scale-110 transition-transform duration-300 ease-in-out"
      />

      {/* Card Content */}
      <div className={` ${expanded ? "p-0":"p-4"}`}>
        <p className={`text-White ${expanded && 'hidden'}`}>
          {blog.description.length > descriptionLimit
            ? `${blog.description.slice(0, descriptionLimit)}...`
            : blog.description}
        </p>
        {blog.description.length > descriptionLimit && (
          <button
            className={`text-gray-100 hover:text-blue-600 ${expanded && 'hidden'}`}
            onClick={handleExpand}
          >
            {expanded ? "Read Less" : "Read More"}
          </button>
        )}
      </div>

      {/* Card Actions */}
      <div className="flex items-center justify-between p-4 border-t border-gray-200">
        <div className="flex space-x-3">
          <button className="text-red-500 hover:text-red-600">❤️</button>
          <button className="text-blue-500 hover:text-blue-600">🔗</button>
        </div>
        <button
          className={`transform transition-transform ${expanded ? "rotate-180" : "rotate-0"}`}
          onClick={handleExpand}
        >
          ⬇️
        </button>
      </div>

      {/* Expandable Section */}
      {expanded && (
        <div className="p-4 border-t"
         style={{backgroundColor:"#006a4d"}}
        >
          <p className="text-gray-100 text-sm">{blog.description}</p>
        </div>
      )}
    </div>
  );
};

export default BlogCard;
