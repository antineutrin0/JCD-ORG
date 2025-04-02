import { useEffect, useState } from "react";
import '../../src/index.css'

function Bd_map() {
  const [mapSvg, setMapSvg] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState(null);

  useEffect(() => {
    fetch("/bd-map.svg") // Ensure the SVG file is placed in the public folder
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
    <div className="flex flex-col md:flex-row bg-green-700 items-stretch justify-center min-h-screen">
  {/* Left Section */}
  <div className="flex-1 bg-green-900 flex flex-col items-center justify-center p-4 md:p-8 relative">
    <h1 className="text-center text-2xl md:text-3xl lg:text-6xl font-bold mb-4">OUR FOOTPRINTS IN BANGLADESH</h1>
    <p className="text-center text-lg md:text-xl mb-4">Click on a district to see our contribution on that district.</p>
    <p className="text-center text-xl md:text-2xl lg:text-4xl border-b">Explore Bangladesh</p>
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


  );
}

export default Bd_map;

