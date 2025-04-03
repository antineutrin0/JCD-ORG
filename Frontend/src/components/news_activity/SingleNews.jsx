import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { FaFacebookF, FaTwitter, FaGooglePlusG, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import newsData from "./newsData.json"; // Assuming you have a JSON file with news data
const SingleNews = () => {
    const { id } = useParams(); // Get the news ID from the URL parameters
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchnews = () => {
         try {
           const foundnews = newsData.news.find((news) => news.id === parseInt(id));
           if (foundnews) {
             setNews(foundnews);
           } else {
             console.error("News not found");
           }
         } catch (error) {
           console.error("Error fetching news:", error);
         } finally {
           setLoading(false);
         }
       };
    fetchnews();
  }, [id]);

  if (loading) {
    return <div className="text-center text-gray-500 text-lg mt-10">Loading...</div>;
  }

  if (!news) {
    return <div className="text-center text-red-500 text-lg mt-10">News not found</div>;
  }

  return (
    <div className="max-w-3xl mx-auto bg-white text-gray-900 rounded-lg shadow-lg overflow-hidden p-6 mt-4 md:mt-6">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-2">
        <span className="text-blue-600">Home</span> &gt; <span className="text-blue-600">News</span> &gt;{" "}
        <span className="text-gray-900 font-semibold">{news.title}</span>
      </div>

      {/* Title & Social Media */}
      <div className="flex items-center justify-between mb-4 h-16">
        <div className="w-2/3 md:w-3/4 lg:w-4/5">
          <h2 className="text-2xl font-bold mb-2">{news.title}</h2>
          <p className="text-gray-500 text-sm">{news.date}</p>
        </div>
        <div className="flex space-x-3 my-3 w-1/3 md:w-1/4 lg:w-1/5 justify-end">
          <FaFacebookF className="text-blue-600 hover:text-blue-800 cursor-pointer" />
          <FaTwitter className="text-blue-400 hover:text-blue-600 cursor-pointer" />
          <FaGooglePlusG className="text-red-500 hover:text-red-700 cursor-pointer" />
          <FaLinkedinIn className="text-blue-700 hover:text-blue-900 cursor-pointer" />
          <FaWhatsapp className="text-green-500 hover:text-green-700 cursor-pointer" />
        </div>
      </div>

      {/* Image */}
      <div className="relative mb-4">
        <img src={news.image} alt={news.title} className="w-full rounded-lg" />
      </div>

      {/* Description */}
      <p className="text-gray-700">{news.description}</p>
    </div>
  );
};

export default SingleNews;
