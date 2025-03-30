import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function NoticeCarousel() {
  return (
    <div style={{ height: "400px", width: "300px", margin: "auto" }}>
      <Carousel
        axis="vertical" // Set to vertical carousel
        showArrows={true} // Only navigation arrows
        showIndicators={false} // No pagination dots
        showStatus={false} // No status info
        autoPlay={true} // No auto play
        infiniteLoop={true} // Infinite scroll
        swipeable={true} // Enable swipe navigation
        emulateTouch={true} // Allow touch gestures
        dynamicHeight={false} // Fixed height for carousel
      >
        <div>
          <div style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#f0f0f0" }}>
            <p>Notice 1</p>
          </div>
        </div>
        <div>
          <div style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#f0f0f0" }}>
            <p>Notice 2</p>
          </div>
        </div>
        <div>
          <div style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#f0f0f0" }}>
            <p>Notice 3</p>
          </div>
        </div>
      </Carousel>
    </div>
  );
}
