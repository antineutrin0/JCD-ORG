import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import districtData from "./districtData.json";

const DistrictDetails = () => {
  const { id } = useParams();
  const [district, setDistrict] = useState(null);

  useEffect(() => {
    const selectedDistrict = districtData.districts.find(
      (d) => d.id.toUpperCase() === id.toUpperCase()
    );
    setDistrict(selectedDistrict);
  }, [id]);

  if (!district) {
    return (
      <div className="text-center mt-20 text-2xl text-red-600 font-semibold">
        DISTRICT DATA NOT FOUND
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 mt-10 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-4 text-center">
        {district.name.toUpperCase()} DISTRICT DETAILS
      </h2>

      {/* Committee Section */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2 border-b pb-1">
          COMMITTEE MEMBERS
        </h3>
        <ul className="list-disc list-inside">
          {district.members.map((member, idx) => (
            <li key={idx}>
              {member}
            </li>
          ))}
        </ul>
      </div>

      {/* Achievements Section */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2 border-b pb-1">ACHIEVEMENTS</h3>
        <ul className="list-disc list-inside">
          {district.achievements.map((item, idx) => (
            <li key={idx}>{item.toUpperCase()}</li>
          ))}
        </ul>
      </div>

      {/* Activities Section */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2 border-b pb-1">CHATRA DAL ACTIVITIES</h3>
        <ul className="list-disc list-inside">
          {district.activities.map((activity, idx) => (
            <li key={idx}>{activity.toUpperCase()}</li>
          ))}
        </ul>
      </div>

      {/* Mission and Vision Section */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2 border-b pb-1">MISSION</h3>
        <p>{district.mission.toUpperCase()}</p>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2 border-b pb-1">VISION</h3>
        <p>{district.vision.toUpperCase()}</p>
      </div>
    </div>
  );
};

export default DistrictDetails;
