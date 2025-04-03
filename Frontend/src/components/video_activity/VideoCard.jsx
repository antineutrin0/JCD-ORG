import { FaYoutube } from "react-icons/fa"; // Import YouTube icon

const VideoCard = ({ video, onClick }) => {
  return (
    <div
      className="relative bg-green-900 hover:bg-green-700 rounded-lg shadow-lg overflow-hidden cursor-pointer"
      onClick={() => onClick(video.videoId)}
    >
      {/* Thumbnail Image */}
      <img
        src={video.thumbnail}
        alt={video.title}
        className="w-full h-48 object-cover"
      />

      {/* Play Icon (Always Visible) */}
      <div className="absolute -top-16 inset-0 flex items-center justify-center">
  <div className="w-16 h-16 flex items-center justify-center bg-transparent rounded-full shadow-lg">
    <FaYoutube className="text-red-600 text-2xl" />
  </div>
</div>


      {/* Video Details */}
      <div className="p-4">
        <h3 className="font-semibold text-lg">{video.title}</h3>
        <p className="text-gray-200">{video.date}</p>
      </div>
    </div>
  );
};

export default VideoCard;
