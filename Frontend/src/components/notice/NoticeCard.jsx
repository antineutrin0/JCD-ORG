import React from "react";
import {
  Download,
  FileText,
  Image,
  File,
  Calendar,
  Paperclip,
} from "lucide-react";
import { motion } from "framer-motion";
// const notice = {
//   userId: "N1zXgwIWg5bVHlaGWgh9jxzhQyJ3",
//   title: "testing",
//   date: {
//     seconds: 1750550400,
//     nanoseconds: 0,
//   },
//   attachments: [
//     {
//       url: "https://firebasestorage.googleapis.com/v0/b/jcd-blogs.firebasestorage.app/o/circulars%2FN1zXgwIWg5bVHlaGWgh9jxzhQyJ3%2F1750531747271_carbon.png?alt=media&token=1f1804a1-b390-4e8f-a7cd-29b6edc251c9",
//       name: "carbon.png",
//       type: "image/png",
//       size: 169332,
//     },
//   ],
//   description: "This is a test notice",
// };

const NoticeCard = ({ notice }) => {
  const formatDate = (timestamp) => {
    const date = new Date(timestamp.seconds * 1000);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",

      year: "numeric",
    });
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return "0 B";
    const k = 1024;
    const sizes = ["B", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i)) + " " + sizes[i];
  };

  const getFileIcon = (type) => {
    if (type.startsWith("image/")) return Image;
    if (type.includes("text") || type.includes("document")) return FileText;
    return File;
  };

  const handleDownload = async (file) => {
    try {
      const response = await fetch(file.url);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = file.name;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Download failed:", error);
    }
  };

  return (
    <motion.div div className="w-[400px] mx-auto p-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="bg-white rounded-xl shadow-lg border-l-2 border-green-200 p-4">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <h1 className="text-xl font-semibold text-gray-900 flex-1">
            {notice.title}
          </h1>
          <div className="flex items-center gap-1 text-sm text-gray-500 ml-4">
            <Calendar className="w-4 h-4" />
            <span>{formatDate(notice.date)}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-700 text-sm mb-4 leading-relaxed">
          {notice.description}
        </p>

        {/* Attachments */}
        {notice.attachments && notice.attachments.length > 0 && (
          <div>
            <div className="flex items-center gap-1 mb-2">
              <Paperclip className="w-4 h-4 text-gray-500" />
              <span className="text-sm font-medium text-gray-700">
                {notice.attachments.length} file
                {notice.attachments.length > 1 ? "s" : ""}
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              {notice.attachments.map((file, index) => {
                const IconComponent = getFileIcon(file.type);

                return (
                  <button
                    key={index}
                    onClick={() => handleDownload(file)}
                    className="flex items-center gap-2 bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-blue-300 rounded-md px-3 py-2 text-sm transition-all duration-200 group"
                  >
                    <IconComponent className="w-4 h-4 text-gray-600 group-hover:text-blue-600" />
                    <span className="font-medium text-gray-900 group-hover:text-blue-900">
                      {file.name}
                    </span>
                    <span className="text-gray-500 text-xs">
                      ({formatFileSize(file.size)})
                    </span>
                    <Download className="w-3 h-3 text-gray-400 group-hover:text-blue-500" />
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default NoticeCard;
