import React, { useEffect, useState } from "react";
import districtData from "./districtData.json";
import "../../index.css";
import { useNavigate } from "react-router-dom";
import SectionTitle from "../SectionTitle";

function Bd_map() {
  const [mapSvg, setMapSvg] = useState("");
  const [hoverInfo, setHoverInfo] = useState(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/bd-map.svg")
      .then((response) => response.text())
      .then((data) => setMapSvg(data))
      .catch((error) => console.error("Error loading SVG:", error));
  }, []);

  const handleClick = (event) => {
    let target = event.target;
    while (target && target.tagName.toLowerCase() !== "a") {
      target = target.parentElement;
    }

    if (target && target.id) {
      let id = target.id;
      id = id[0].toUpperCase() + id.slice(1).toLowerCase(); // Capitalize first letter and lowercase the rest
      navigate(`/committee?district=${id}`);
    }
  };

  const handleMouseMove = (event) => {
    setCursor({ x: event.clientX, y: event.clientY });

    let target = event.target;
    while (target && target.tagName.toLowerCase() !== "a") {
      target = target.parentElement;
    }

    if (target && target.id) {
      const id = target.id.toUpperCase();
      const district = districtData.districts.find(
        (d) => d.id.toUpperCase() === id
      );
      if (district) {
        setHoverInfo({
          id,
          content: `${district.name}\nCommittee: ${district.committee}\nTop Activity: ${district.activities[0]}`,
        });
      } else {
        setHoverInfo(null);
      }
    } else {
      setHoverInfo(null);
    }
    console.log(hoverInfo);
  };

  const handleMouseLeave = () => {
    setHoverInfo(null);
  };

  return (
  <div className="max-w-7xl mx-auto my-20">
    <SectionTitle title="Explore Through Map"></SectionTitle>
    <div
      className="flex flex-col md:flex-row bg-gradient-to-r from-green-900 via-green-600 to-green-500 items-stretch justify-center min-h-screen  rounded-lg mx-auto relative overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
          
      {/* Left Section */}
      <div className="flex-1 flex flex-col items-center justify-center p-4 md:p-8 relative">
        <h1 className="text-center text-2xl md:text-3xl lg:text-6xl font-bold mb-4 text-white">
          OUR FOOTPRINTS IN BANGLADESH
        </h1>
        <p className="text-center text-lg md:text-xl mb-4 text-gray-200">
          Click on a district to see our contribution on that district.
        </p>
        <p className="text-center text-xl md:text-2xl lg:text-4xl border-b text-white">
          Explore Bangladesh
        </p>
      </div>

      {/* Right Section - Map */}
      <div className="flex-1 flex items-center justify-center p-4 md:p-8 relative">
        <div
          className="w-full flex items-center justify-center"
          dangerouslySetInnerHTML={{ __html: mapSvg }}
          onClick={handleClick}
        />
        {/* Custom Tooltip */}
        {hoverInfo && (
          <div
            className="absolute z-50 bg-white text-black text-sm shadow-lg rounded-md px-4 py-2 pointer-events-none"
            style={{
              top: cursor.y + 10,
              left: cursor.x + 20,
              whiteSpace: "pre-line",
              maxWidth: "300px",
            }}
          >
            {hoverInfo.content}
          </div>
        )}
      </div>
    </div>
    </div>
  );
}

export default Bd_map;
