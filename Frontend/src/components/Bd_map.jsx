import { useEffect, useState } from "react";
import "../../src/index.css"; // make sure you have Tailwind set up properly

function Bd_map() {
  const [mapSvg, setMapSvg] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState(null);

  useEffect(() => {
    fetch("/bd-map.svg") // Ensure the SVG file is in the public folder
      .then((response) => response.text())
      .then((data) => setMapSvg(data))
      .catch((error) => console.error("Error loading SVG:", error));
  }, []);

  const handleClick = (event) => {
    let target = event.target;
    while (target && target.tagName !== "a") {
      target = target.parentElement;
    }

    if (target && target.tagName === "a" && target.id) {
      setSelectedDistrict(target.id);
    }
  };

  return (
    <div className="relative min-h-screen flex items-stretch justify-center">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/bg.jpeg')" }}
      />
      <div className="absolute inset-0 bg-[#006a4dde]  z-0" />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col md:flex-row w-full">
        {/* Left Section */}
        <div className="flex-1 flex flex-col items-center justify-center p-4 md:p-8 text-white">
          <h1 className="text-center text-2xl md:text-3xl lg:text-6xl font-bold mb-4">
            OUR FOOTPRINTS IN BANGLADESH
          </h1>
          <p className="text-center text-lg md:text-xl mb-4">
            Click on a district to see our contribution on that district.
          </p>
          <p className="text-center text-xl md:text-2xl lg:text-4xl border-b">
            Explore Bangladesh
          </p>
        </div>

        {/* Right Section (Map) */}
        <div className="flex-1 flex items-center justify-center p-4 md:p-8">
          <div
            className="w-full flex items-center justify-center"
            dangerouslySetInnerHTML={{ __html: mapSvg }}
            onClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
}

export default Bd_map;
