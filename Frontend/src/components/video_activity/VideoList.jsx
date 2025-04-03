import React, { useState, useEffect } from "react";
import VideoCard from "./VideoCard";
import videoData from "./videos.json";

const VideoList = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, setVideos] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [visibleCount, setVisibleCount] = useState(6); // Default for large screens

  useEffect(() => {
    setVideos(videoData.videos);
    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const handleShowAll=()=>{
   setShowAll(true);

  }

  // Function to update visible videos based on screen width
  const updateVisibleCount = () => {
    if (window.innerWidth >= 1024) {
      setVisibleCount(6); // Large screens
    } else if (window.innerWidth >= 768) {
      setVisibleCount(4); // Medium screens
    } else {
      setVisibleCount(2); // Small screens
    }
  };

  return (
    <div className="bg-white min-h-screen p-8">
      <h1 className="text-3xl font-bold text-white text-center mb-6">
        Recent Press Conference
      </h1>

      {/* Video Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {(showAll ? videos : videos.slice(0, visibleCount)).map((video) => (
          <VideoCard key={video.id} video={video} onClick={setSelectedVideo} />
        ))}
      </div>

      {/* "View All" Button */}
      {!showAll && videos.length > visibleCount && (
        <div className="flex justify-center mt-6">
          <button
            className="bg-green-700 text-black  px-4 py-2 text-2xl rounded-lg shadow-md hover:bg-green-800 transition"
            onClick={() => handleShowAll(true)}
          >
            View All
          </button>
        </div>
      )}

      {/* Modal for Video Player */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-green-800 bg-opacity-75 flex items-center justify-center p-4 rounded-2xl"
          onClick={() => setSelectedVideo(null)}
        >
          <div className="bg-gray-800 rounded-lg relative max-w-3xl w-full">
            <button
              className="absolute top-2 right-2 bg-stone-800 text-white px-3 py-1 rounded"
              onClick={() => setSelectedVideo(null)}
            >
              ✖
            </button>
            <iframe
              width="100%"
              height="400"
              src={`https://www.youtube.com/embed/${selectedVideo}`}
              frameBorder="0"
              allowFullScreen
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoList;
