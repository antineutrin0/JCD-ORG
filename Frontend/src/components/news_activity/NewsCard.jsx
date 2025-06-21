import React from "react";

const NewsCard = ({ news }) => (
  <div className="w-full p-2">
    <div className="bg-green-700 h-[500px] flex flex-col shadow-lg rounded-lg overflow-hidden">
      <img
        src={news.image}
        alt={news.title}
        className="w-full h-60 md:h-64 lg:h-72 object-cover"
      />
      <div className="p-4 flex flex-col flex-grow justify-between">
        <p className="text-sm text-gray-200 font-bold">{news.date}</p>
        <h3 className="text-lg font-semibold text-white line-clamp-3">
          {news.title}
        </h3>
      </div>
    </div>
  </div>
);

export default NewsCard;
