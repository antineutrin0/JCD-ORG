import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import blogData from "./blogData.json";
import SectionTitle from "../SectionTitle";
import BlogCard from "./BlogCard";
import NewsPagination from "../news_activity/NewsPagination";
import { useRecentBlogsQuery } from "../../hooks/usePressRelease";
import Loader from "../Loader";
import QueryError from "../QueryError";

const BlogSlider = () => {
  const [index, setIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3); // Default: Show 3 cards

  const { blogs, blogsQuery } = useRecentBlogsQuery();

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
        prevIndex >= blogs.length - slidesToShow ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [slidesToShow, blogs]);

  if (blogsQuery.isLoading || blogsQuery.isPending) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader />
      </div>
    );
  }

  if (blogsQuery.isError) {
    return (
      <div className="flex justify-center items-center h-64">
        <QueryError error={"Failed to load blogs"} />
      </div>
    );
  }
  return (
    <div className="my-20 mx-auto max-w-7xl">
      <div className="rounded-lg overflow-hidden">
        <div className="flex justify-between items-center mb-4 px-4">
          <SectionTitle title="Recent Blogs" />
          <div className="flex space-x-2 cursor-pointer">
            <Link to="/blogs">
              <button className="px-4 py-2 text-green-600 bg-white  rounded hover:bg-green-600 hover:text-white transition-colors">
                View All
              </button>
            </Link>
          </div>
        </div>
        <div className=" relative w-[] overflow-hidden">
          <div
            className="flex transition-transform duration-1000 ease-in-out"
            style={{
              transform: `translateX(-${index * (1 / slidesToShow) * 100}%)`,
            }}
          >
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className={`w-1/${slidesToShow} flex-shrink-0 width-[400px]`}
              >
                <BlogCard blog={blog} />
              </div>
            ))}
          </div>
        </div>

        {blogs.length && (
          <NewsPagination
            currentIndex={index}
            total={blogData.blogs.length - slidesToShow + 1}
            goToSlide={setIndex}
          />
        )}

        {blogsQuery.isSuccess && blogs.length === 0 && (
          <div className="text-center text-gray-500 mt-8">
            No blogs available at the moment. Please check back later.
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogSlider;
