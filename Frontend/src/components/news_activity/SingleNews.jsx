import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
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
import { useSinglePressReleaseQuery } from "../../hooks/useSignlePressRelease";
import Loader from "../Loader";
import useScrollToTop from "../../hooks/useScrollToTop";
import { useProfile } from "../../hooks/useProfile";

// {
//     "id": "9FLMQ0t9F8mOau8C8DDM",
//     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/jcd-blogs.firebasestorage.app/o/blogs%2FN1zXgwIWg5bVHlaGWgh9jxzhQyJ3%2F1750533160577_ChatGPT%20Image%20May%2011%2C%202025%2C%2002_40_43%20AM%20(1).png?alt=media&token=e83a4a9c-1148-4c1c-a97f-373dd0826b77",
//     "createdAt": {
//         "seconds": 1750533164,
//         "nanoseconds": 884000000
//     },
//     "updatedAt": {
//         "seconds": 1750533164,
//         "nanoseconds": 884000000
//     },
//     "published": true,
//     "title": "Test Press Release",
//     "userId": "N1zXgwIWg5bVHlaGWgh9jxzhQyJ3",
//     "content": "<p><strong>This is a test press release</strong></p><p><strong><em>This will be deleted very soon. Do not worry about this.</em></strong></p>"
// }

// {
//     "id": "Kz5tQ1Ca9QVwpSI85xNq05TAsAw2",
//     "committeeType": "University Unit",
//     "committeeName": "শাবিপ্রবি ছাত্রদল - SUST Chatrodol ",
//     "instituteName": "Shahjalal University of Science and Technology",
//     "updatedAt": {
//         "seconds": 1750622178,
//         "nanoseconds": 972000000
//     },
//     "district": "Sylhet",
//     "createdAt": {
//         "seconds": 1750622179,
//         "nanoseconds": 596000000
//     },
//     "userId": "Kz5tQ1Ca9QVwpSI85xNq05TAsAw2",
//     "committeeFormationNoticeUrl": ""
// }
const SingleNews = () => {
  const shareUrl = window.location.href; // Current page URL for sharing
  const title =
    "Check out the latest update from Bangladesh Jatiotabadi Chatro Dal!";

  const { id } = useParams(); // Get the news ID from the URL parameters
  useScrollToTop();
  const newsQuery = useSinglePressReleaseQuery(id);
  const profileQuery = useProfile(newsQuery?.data?.userId);

  const news = newsQuery.data;

  if (newsQuery.isLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  if (!news) {
    return (
      <div className="h-screen flex items-center justify-center text-gray-500">
        News not found
      </div>
    );
  }

  return (
    <div className="w-full bg-gray-100 min-h-screen py-10">
      <div className="max-w-3xl mx-auto bg-white text-gray-900 rounded-lg shadow-lg overflow-hidden p-6">
        {/* Breadcrumb */}
        <div className="flex items-center  w-full justify-between gap-2 mb-4">
          <label>
            {new Date(news.createdAt.seconds * 1000).toDateString()}
          </label>

          <div className="flex items-center gap-2">
            <FacebookShareButton url={shareUrl} quote={title}>
              <FacebookIcon size={25} round />
            </FacebookShareButton>

            <TwitterShareButton url={shareUrl} title={title}>
              <TwitterIcon size={25} round />
            </TwitterShareButton>

            <WhatsappShareButton url={shareUrl} title={title} separator=" - ">
              <WhatsappIcon size={25} round />
            </WhatsappShareButton>

            <LinkedinShareButton url={shareUrl} title={title}>
              <LinkedinIcon size={25} round />
            </LinkedinShareButton>
          </div>
        </div>

        {/* Title & Social Media */}

        <div className="w-full mb-4">
          <h2 className="text-2xl font-bold mb-2">{news.title}</h2>
          <p className="text-gray-500 text-sm flex items-center">
            <label>
              Posted by{" "}
              <span className="font-semibold">
                {profileQuery.data?.committeeName || ""}{" "}
                {profileQuery.data?.district
                  ? ", " + profileQuery.data?.district
                  : ""}
              </span>
            </label>
          </p>
        </div>

        {/* Image */}
        <div className="relative mb-4">
          <img
            src={news.imageUrl}
            alt={news.title}
            className="w-full rounded-lg"
          />
        </div>

        {/* Description */}
        <p
          className="text-gray-700"
          dangerouslySetInnerHTML={{ __html: news.content }}
        ></p>
      </div>
    </div>
  );
};

export default SingleNews;
