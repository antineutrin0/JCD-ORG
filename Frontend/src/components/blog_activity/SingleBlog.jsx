import React from "react";
import { FaFacebookF, FaTwitter, FaGooglePlusG, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

const SingleBlog = () => {
  const blog = {
    id: 10,
    title: "YUVA NYAY",
    author: "D",
    date: "06 APR 2024",
    image:
      "https://images.pexels.com/photos/26738322/pexels-photo-26738322/free-photo-of-angler-by-river-in-mountains.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    description:
      "YUVA NYAY, a comprehensive initiative, stands as a beacon of hope for the youth of India, promising to address crucial issues plaguing their aspirations and livelihoods Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, reprehenderit quia accusantium nihil reiciendis ab sapiente nisi rem expedita mollitia fuga consectetur omnis eveniet dolorum ea neque ipsa nesciunt quae impedit, nobis, magni voluptas eius corrupti. Nobis, quia unde! Earum, ratione doloribus rerum facere voluptatem quasi deleniti consequatur alias cum aperiam omnis inventore exercitationem commodi, quibusdam quae iste odio minima? Provident cum similique incidunt cupiditate ea adipisci est sed rerum ratione! Distinctio ex magni nulla, quos impedit amet odit consequatur, in quo aut, atque eum! Ipsa omnis placeat doloremque magni, laudantium non voluptates modi porro excepturi eaque tempore minima animi!"
  };

  return (
    <div className="max-w-3xl mx-auto bg-white text-gray-900 rounded-lg shadow-lg overflow-hidden p-6">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-2">
        <span className="text-blue-600">Home</span> &gt; <span className="text-blue-600">In Focus</span> &gt;{" "}
        <span className="text-gray-900 font-semibold">{blog.title}</span>
      </div>

      {/* Title */}
     <div className="flex items-center justify-between mb-4 h-16">
     <div className="w-2/3 md:w-3/4 lg:w-4/5 ">
      <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
      <p className="text-gray-500 text-sm">{blog.date}</p>
      </div>
      {/* Social Media Icons */}
      <div className="flex space-x-3 my-3 w-1/3 md:w-1/4 lg:w-1/5 justify-end ">
        <FaFacebookF className="text-blue-600 hover:text-blue-800 cursor-pointer" />
        <FaTwitter className="text-blue-400 hover:text-blue-600 cursor-pointer" />
        <FaGooglePlusG className="text-red-500 hover:text-red-700 cursor-pointer" />
        <FaLinkedinIn className="text-blue-700 hover:text-blue-900 cursor-pointer" />
        <FaWhatsapp className="text-green-500 hover:text-green-700 cursor-pointer" />
      </div>
     </div>

      {/* Image */}
      <div className="relative mb-4">
        <img src={blog.image} alt={blog.title} className="w-full rounded-lg" />
       
      </div>

      {/* Description */}
      <p className="text-gray-700">{blog.description}</p>
    </div>
  );
};

export default SingleBlog;
