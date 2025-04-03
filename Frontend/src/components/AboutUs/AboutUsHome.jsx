import React from "react";
import SectionTitle from "../SectionTitle";
import { Link } from "react-router";

const AboutUsHome = () => {
  return (
    <div className="m bg-gray-200">
    <div className="max-w-7xl mx-auto  py-20 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Text Section */}
        
        <div className="text-center md:text-left">
        <SectionTitle title="About Us" ></SectionTitle>
          <h2 className="text-3xl font-bold mb-4">About Bangladesh Chhatra Dal Lorem ipsum dolor sit amet.</h2>
          <p className="text-lg mb-4">
            JCD is committed to upholding student rights, democratic values, and contributing to Bangladesh’s socio-political development. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, maiores?
          </p>
          <Link to="/aboutus" className="bg-green-700 text-white py-2 px-4 rounded hover:bg-green-800 transition">
            Learn More
          </Link>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src="https://cloud.matopath.com/mop/2019/10/%E0%A6%AC%E0%A6%BE%E0%A6%82%E0%A6%B2%E0%A6%BE%E0%A6%A6%E0%A7%87%E0%A6%B6-%E0%A6%9C%E0%A6%BE%E0%A6%A4%E0%A7%80%E0%A7%9F%E0%A6%A4%E0%A6%BE%E0%A6%AC%E0%A6%BE%E0%A6%A6%E0%A7%80-%E0%A6%9B%E0%A6%BE%E0%A6%A4%E0%A7%8D%E0%A6%B0%E0%A6%A6%E0%A6%B2.jpg"
            alt="JCD Banner"
            className="w-full max-w-xs md:max-w-sm rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
    </div>
  );
};

export default AboutUsHome;
