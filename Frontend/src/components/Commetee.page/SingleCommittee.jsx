import React from 'react';
import committee from './committee.json';
import { useParams } from 'react-router-dom';

export default function SingleCommittee() {
  const { committeename } = useParams();
  const formattedName = decodeURIComponent(committeename).toLowerCase();

  const singlecommittee = committee.find(
    (item) => item.name.toLowerCase() === formattedName
  );

  if (!singlecommittee) {
    return (
      <div className="text-center text-red-500 mt-10 text-lg font-semibold">
        Committee not found
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center my-6 text-green-700">
        {singlecommittee.name}
      </h1>
      <p className="text-center text-gray-600 mb-8 text-lg">
        {singlecommittee.district}, {singlecommittee.division}
      </p>

      {/* Display all images vertically */}
      {singlecommittee.image?.length > 0 && (
        <div className="flex flex-col items-center gap-6">
          {singlecommittee.image.map((imgUrl, index) => (
            <img
              key={index}
              src={imgUrl}
              alt={`Committee Image ${index + 1}`}
              className="w-full max-w-xl rounded-lg shadow-md"
            />
          ))}
        </div>
      )}
    </div>
  );
}
