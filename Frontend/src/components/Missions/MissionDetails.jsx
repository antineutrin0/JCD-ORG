// src/pages/MissionDetails.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import missions from './missions.json'; // Adjust path as needed

const MissionDetails = () => {
  const { id } = useParams();
  const mission = missions['31point'].find((m) => m.id === id);

  if (!mission) {
    return <div className="p-8 text-red-600 font-semibold h-screen">Mission not found.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 mt-10 bg-white  h-screen flex-row justify-center items-center">
        <h1 className="text-3xl font-bold text-center mb-6 text-green-800">দফা নং- {mission.id} 
        </h1>
      <div className="mb-4 flex-row items-center justify-center gap-3 shadow-md rounded-xl p-16 bg-gray-100">
        <h1 className="text-2xl font-bold text-green-800 my-4">{mission.title}</h1>
      <p className="text-gray-800 leading-relaxed whitespace-pre-line">{mission.description}</p>
      </div>
      </div>
  );
};

export default MissionDetails;
