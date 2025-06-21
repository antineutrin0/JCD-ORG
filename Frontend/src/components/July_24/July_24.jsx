// PdfViewer.jsx
import React from 'react';
const July_24 = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-100">
      <iframe
        src="/july_24.pdf"
        width="200%"
        height="90%"
        className=" shadow-lg rounded"
        title="PDF Viewer"
      ></iframe>
    </div>
  );
};

export default July_24;
