import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { FaFacebookF, FaTwitter, FaGooglePlusG, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import newsData from "./newsData.json";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  LinkedinShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  LinkedinIcon,
} from "react-share"; // Assuming you have a JSON file with news data
const SingleNews = () => {

  const shareUrl = "https://sublet-sheba-ss.web.app/about";
  const title = "Check out the official YouTube channel of Bangladesh Jatiotabadi Chatro Dal!";


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
      

      {/* Title & Social Media */}
      <div className="flex items-center justify-between mb-4 h-full">
        <div className="w-2/3 md:w-3/4 lg:w-4/5">
        <span className="text-blue-600 text-xl">Home</span> &gt; <span className="text-blue-600 text-xl">News</span> &gt;{" "}
          <h2 className="text-2xl font-bold mb-2">{news.title}</h2>
          <p className="text-gray-500 text-sm">{news.date}</p>
        </div>
        <div className="flex items-center gap-4 mt-4">
      <FacebookShareButton url={shareUrl} quote={title}>
        <FacebookIcon size={40} round />
      </FacebookShareButton>

      <TwitterShareButton url={shareUrl} title={title}>
        <TwitterIcon size={40} round />
      </TwitterShareButton>

      <WhatsappShareButton url={shareUrl} title={title} separator=" - ">
        <WhatsappIcon size={40} round />
      </WhatsappShareButton>

      <LinkedinShareButton url={shareUrl} title={title}>
        <LinkedinIcon size={40} round />
      </LinkedinShareButton>
    </div>
      </div>

      {/* Image */}
      <div className="relative mb-4">
        <img src={news.image} alt={news.title} className="w-full rounded-lg" />
      </div>

      {/* Description */}
      {/* <p className="text-gray-700">{news.description}</p> */}
    </div>
  );
};

export default SingleNews;
