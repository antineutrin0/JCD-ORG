import React from 'react';
import committee from './committee.json'; // Ensure this path is correct
import { useParams } from 'react-router-dom'; // Corrected import

export default function SingleCommittee() {
  const { committeename } = useParams();

  // Normalize for URL safety
  const formattedName = decodeURIComponent(committeename).toLowerCase();
  const singlecommittee = committee.find(
    item => item.name.toLowerCase() === formattedName
  );

  if (!singlecommittee) {
    return (
      <div className="text-center text-red-500 mt-10 text-lg font-semibold">
        Committee not found
      </div>
    );
  }

  const isPdf = true;
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center my-6 text-green-700">
        {singlecommittee.name}
      </h1>
      <p className="text-center text-gray-600 mb-8">
        <span className="font-semibold">Category:</span> {singlecommittee.category} |{' '}
        <span className="font-semibold">Location:</span> {singlecommittee.location} |{' '}
        <span className="font-semibold">Institution:</span> {singlecommittee.institution_name}
      </p>

      {/* Committee PDF/Image Display */}
      {singlecommittee.pdflink && (
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-green-800 mb-2 text-center">
            Committee PDF/Image Copy
          </h2>
          <div className="flex justify-center">
            {isPdf ? (
              <iframe
                src={singlecommittee.pdflink}
                title="Committee PDF"
                className="w-full h-[500px] rounded-md shadow-md"
              ></iframe>
            ) : (
              <img
                src={singlecommittee.pdflink}
                alt="Committee Document"
                className="max-w-full h-auto rounded-lg shadow-md"
              />
            )}
          </div>
          <p className="text-center mt-2">
            <a
              href={singlecommittee.pdflink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              View/Download Document
            </a>
          </p>
        </div>
      )}

      {/* Members Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {singlecommittee.members.map((member, index) => {
          const isImportant =
            member.designation.toLowerCase().includes('president') ||
            member.designation.toLowerCase().includes('secretary');

          return (
            <div
              key={index}
              className={`bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition duration-300 ${
                isImportant ? 'border-4 border-green-500' : ''
              }`}
            >
              <img
                src={member.photo_url}
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h2
                className={`text-xl font-bold text-center ${
                  isImportant ? 'text-green-900' : 'text-green-800'
                }`}
              >
                {member.name}
              </h2>
              <p
                className={`text-center ${
                  isImportant ? 'text-red-600 font-semibold' : 'text-gray-700'
                }`}
              >
                {member.designation}
              </p>
              <div className="mt-4 text-sm text-gray-600">
                <p><span className="font-medium">Email:</span> {member.email}</p>
                <p><span className="font-medium">Phone:</span> {member.contact}</p>
                <p><span className="font-medium">Address:</span> {member.address}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
