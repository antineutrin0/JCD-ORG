import React from "react";

const NewsPagination = ({ currentIndex, total, goToSlide }) => (
  <div className="flex justify-center space-x-2 mt-4">
    {Array.from({ length: total }).map((_, index) => (
      <span
        key={index}
        className={`w-3 h-3 rounded-full cursor-pointer ${
          index === currentIndex ? "bg-blue-500" : "bg-gray-300"
        }`}
        onClick={() => goToSlide(index)}
      ></span>
    ))}
  </div>
);

export default NewsPagination;