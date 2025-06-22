import React, { useState, useEffect } from "react";
import NewsCard from "./NewsCard";
import NewsPagination from "./NewsPagination";
import { Link } from "react-router";
import newsData from "./newsData.json"; // Assuming you have a data file with news data
import SectionTitle from "../SectionTitle";
import { usePressReleasesQuery } from "../../hooks/usePressRelease";
import Loader from "../Loader";
import QueryError from "../QueryError";

const NewsSlider = () => {
  const [index, setIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3); // Default: Show 3 cards
  const { pressReleases, pressReleasesQuery } = usePressReleasesQuery();

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

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) =>
        prevIndex >= pressReleases.length - slidesToShow ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [slidesToShow, pressReleases]);

  if (pressReleasesQuery.isLoading) {
    return (
      <div className="my-20 mx-auto max-w-7xl">
        <Loader />
      </div>
    );
  }

  if (pressReleasesQuery.isError) {
    return (
      <div className="my-20 mx-auto max-w-7xl">
        <QueryError error={"Failed to load news data"} />
      </div>
    );
  }

  return (
    <div className="my-20 mx-auto max-w-7xl">
      <div className="rounded-lg overflow-hidden">
        <div className="flex justify-between items-center mb-4 px-4">
          <SectionTitle title="Recent News & Press Release" />
          <div className="flex space-x-2 cursor-pointer">
            <Link to="/press-release">
              <button className="px-4 py-2 text-green-600 bg-white  rounded hover:bg-green-600 hover:text-white transition-colors">
                View All
              </button>
            </Link>
          </div>
        </div>
        <div className=" relative  overflow-hidden">
          <div
            className="flex transition-transform duration-1000 ease-in-out"
            style={{
              transform: `translateX(-${index * (1 / slidesToShow) * 100}%)`,
            }}
          >
            {pressReleases?.map((news) => (
              <div
                key={news.id}
                className={`w-1/${slidesToShow} flex-shrink-0`}
              >
                <NewsCard news={news} />
              </div>
            ))}

            {pressReleases.length === 0 && (
              <div className="w-full flex justify-center items-center h-64">
                <p className="text-gray-500">No news available</p>
              </div>
            )}
          </div>
        </div>

        <NewsPagination
          currentIndex={index}
          total={pressReleases.length - slidesToShow + 1}
          goToSlide={setIndex}
        />
      </div>
    </div>
  );
};

export default NewsSlider;
