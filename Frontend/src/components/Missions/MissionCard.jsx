import React, { useState } from 'react';
import { Link } from 'react-router';

const MissionCard = ({ mission }) => {
  const [open, setOpen] = useState(false);
  const toggleDialog = () => setOpen(!open);

  return (
    <div className="relative bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between h-80 hover:scale-105 transition-transform duration-300 hover:shadow-2xl cursor-pointer">
      
      {/* ID badge */}
      

      <div>
     <div className="absolute top-4 left-4 w-8 h-8 flex items-center justify-center rounded-full bg-red-600 text-white font-bold text-sm shadow">
        {mission.id}
      </div>
        <h2 className="text-xl font-semibold text-green-800 mt-8 mb-2 line-clamp-2">{mission.title}</h2>
      
       <p className="text-gray-600 line-clamp-3">{mission.description}</p>
      </div>

        <Link
        to={`/missions/${mission.id}`}
        className="mt-4 inline-block px-4 py-2 min-w-fit bg-green-700 text-white rounded hover:bg-green-800 transition-colors"
        >
        বিস্তারিত পড়ুন
        </Link>


      
    </div>
  );
};

export default MissionCard;
