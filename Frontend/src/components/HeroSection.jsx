import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function HeroSection() {
  return (
    <div className="mt-5">
      <Carousel
        showArrows={true} // Enables navigation arrows
        showIndicators={true} // Enables pagination dots
        infiniteLoop={true} // Infinite scroll
        autoPlay={true} // Auto-play functionality
        interval={3000} // Auto-play interval
        swipeable={true} // Enables swipe navigation on mobile
        emulateTouch={true} // Allows touch gestures
        dynamicHeight={true} 
        showThumbs={false}
        // Dynamically adjusts the height based on content
        axis="horizontal"// Ensure horizontal direction
      >
        <div>
          <img src="slide1.jpg" alt="Slide 1" />
       
        </div>
        <div>
          <img src="slide2.jpg" alt="Slide 2" />
        
        </div>
      
      </Carousel>
    </div>
  );
}
