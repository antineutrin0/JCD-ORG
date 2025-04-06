import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import VideoCard from "./VideoCard";
import videoData from "./videos.json";
import SectionTitle from "../SectionTitle";

const VideoList = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    setVideos(videoData.videos);
  }, []);

  return (
    <div className="bg-white max-w-7xl mx-auto min-h-screen p-8">
      <SectionTitle title="Recent Video" />

      {/* Video Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.slice(0, 6).map((video) => (
          <VideoCard key={video.id} video={video} onClick={setSelectedVideo} />
        ))}
      </div>

      {/* Link to All Videos Page */}
      <div className="flex justify-center mt-6">
        <Link
          to="/videos"
          className="text-green bg-green-700 text-white px-3 py-2 text-md rounded-lg shadow-md hover:bg-green-800 transition"
        >
          View All
        </Link>
      </div>

      {/* Modal for Video Player */}
      {selectedVideo && (
        <div
          className="fixed inset-0 h-screen z-50 bg-white bg-opacity-75 flex items-center justify-center p-4 rounded-2xl"
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
