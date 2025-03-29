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
    <div>
      <h2>Bangladesh Map</h2>
      <div
        dangerouslySetInnerHTML={{ __html: mapSvg }}
        onClick={handleClick}
      />
      {selectedDistrict && <p>Selected District: {selectedDistrict}</p>}
    </div>
  );
}

export default Bd_map;
