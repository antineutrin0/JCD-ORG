import React, { useState, useEffect } from "react";
import NewsCard from "./NewsCard";
import NewsPagination from "./NewsPagination";
import { Link } from "react-router";
import newsData from "./newsData.json"; // Assuming you have a data file with news data
import SectionTitle from "../SectionTitle";

const NewsSlider = () => {
  const [index, setIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3); // Default: Show 3 cards

  // Adjust slides based on screen width
  useEffect(() => {
    const updateSlides = () => {
        const width = window.innerWidth;
        if (width >= 1024) {
            setSlidesToShow(3); // Large screens (lg)
        } else if (width >= 768) {
            setSlidesToShow(2); // Medium screens (md)
        } else {
            setSlidesToShow(1); // Small screens (sm)
        } // 2 slides on small screens, 3 on larger screens
    };

    updateSlides(); // Initial call
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => 
        prevIndex >= newsData.news.length - slidesToShow ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [slidesToShow]);

  return (
    <div className="my-20 mx-auto max-w-7xl">
    <div className="rounded-lg overflow-hidden">
      <SectionTitle title="Recent News & Press Release"></SectionTitle>
      <div className=" relative w-full overflow-hidden">
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${(index *(1/slidesToShow)*100 ) }%)` }}
        >
          {newsData.news.map((news) => (
            <div key={news.id} className={`w-1/${slidesToShow} flex-shrink-0`}>
             <Link to={`/press-release/${news.id}`}>
                <NewsCard news={news} />
              </Link>
            </div>
          ))}
        </div>
      </div>
      
      <NewsPagination currentIndex={index} total={newsData.news.length - slidesToShow + 1} goToSlide={setIndex} />
    </div>
    </div>
  );
};

export default NewsSlider;
