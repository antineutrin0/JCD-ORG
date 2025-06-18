import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import blogData from "./blogData.json"; 
import SectionTitle from "../SectionTitle";
import BlogCard from "./BlogCard";
import NewsPagination from "../news_activity/NewsPagination";

const BlogSlider = () => {
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
        prevIndex >= blogData.blogs.length - slidesToShow ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [slidesToShow]);

  return (
    <div className="my-20 mx-auto max-w-7xl">
    <div className="rounded-lg overflow-hidden">
      <SectionTitle title="Recent Blogs"></SectionTitle>
      <div className=" relative w-full overflow-hidden">
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${(index *(1/slidesToShow)*100 ) }%)` }}
        >
          {blogData.blogs.map((blog) => (
            <div key={blog.id} className={`w-1/${slidesToShow} flex-shrink-0`}>
             <Link to={`/blog/${blog.id}`}>
                <BlogCard blog={blog} />
              </Link>
            </div>
          ))}
        </div>
      </div>
      
      <NewsPagination currentIndex={index} total={blogData.blogs.length - slidesToShow + 1} goToSlide={setIndex} />
    </div>
    </div>
  );
};

export default BlogSlider;
