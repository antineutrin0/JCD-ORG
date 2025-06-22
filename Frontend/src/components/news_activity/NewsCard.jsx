import React from "react";
import { Link } from "react-router-dom"; // Ensure you have react-router-dom installed

// [
//   {
//     id: "9FLMQ0t9F8mOau8C8DDM",
//     title: "Test Press Release",
//     userId: "N1zXgwIWg5bVHlaGWgh9jxzhQyJ3",
//     createdAt: {
//       seconds: 1750533164,
//       nanoseconds: 884000000,
//     },
//     published: true,
//     imageUrl:
//       "https://firebasestorage.googleapis.com/v0/b/jcd-blogs.firebasestorage.app/o/blogs%2FN1zXgwIWg5bVHlaGWgh9jxzhQyJ3%2F1750533160577_ChatGPT%20Image%20May%2011%2C%202025%2C%2002_40_43%20AM%20(1).png?alt=media&token=e83a4a9c-1148-4c1c-a97f-373dd0826b77",
//     updatedAt: {
//       seconds: 1750533164,
//       nanoseconds: 884000000,
//     },
//     content:
//       "<p><strong>This is a test press release</strong></p><p><strong><em>This will be deleted very soon. Do not worry about this.</em></strong></p>",
//   },
// ];

const NewsCard = ({ news }) => (
  <div className="w-full p-2">
    <Link to={`/press-release/${news?.id}`}>
      <div className="bg-green-700 flex flex-col shadow-lg border border-green-500 shadow-lg rounded-lg overflow-hidden relative hover:shadow-xl transition-shadow duration-300 relative">
        <img
          src={news.imageUrl}
          alt={news.title}
          className="w-full h-44 md:h-64 lg:h-72  object-cover"
        />

        <img
          src="logo.png"
          alt="Logo"
          className="absolute top-2 left-2 w-10 h-10"
        />
        <div className="p-4 h-28 flex flex-col">
          <p className="text-sm text-gray-200 font-bold">{new Date(news.createdAt.seconds * 1000).toLocaleDateString()}</p>
          <h3 className="text-lg font-semibold text-white line-clamp-3">
            {news.title}
          </h3>
        </div>
      </div>
    </Link>
  </div>
);

export default NewsCard;
