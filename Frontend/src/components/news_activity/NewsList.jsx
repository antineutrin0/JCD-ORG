import React, { useState, useEffect } from "react";
import newsData from "./newsData.json"; // Assuming you have a JSON file with blog data
import NewsCard from "./NewsCard";
const NewsList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [newsPerPage, setNewsPerPage] = useState(9);

  useEffect(() => {
    const updateNewsPerPage = () => {
      if (window.innerWidth < 640) {
        setNewsPerPage(3);
      } else if (window.innerWidth < 1024) {
        setNewsPerPage(6);
      } else {
        setNewsPerPage(9);
      }
    };

    updateNewsPerPage();
    window.addEventListener("resize", updateNewsPerPage);
    return () => window.removeEventListener("resize", updateNewsPerPage);
  }, []);

  const indexOfLastNews = currentPage * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;
  const currentNews = newsData.news.slice(indexOfFirstNews, indexOfLastNews);
  const totalPages = Math.ceil(newsData.news.length / newsPerPage);

  return (
    <div className="w-full mx-auto p-4 mt-4">
      <h1 className="text-3xl font-bold text-center text-green-800 mb-6">Latest News</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-4">
        {currentNews.map((news) => (
          <NewsCard key={news.id} news={news}/>
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

export default NewsList;
