

// MissionsPage.jsx
import React from 'react';
import MissionCard from './MissionCard';
import missionsData from './missions.json';

const MissionsPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-10 text-green-800">৩১ দফা ঘোষণা</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {missionsData["31point"].map((mission) => (
            <MissionCard key={mission.id} mission={mission} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MissionsPage;
