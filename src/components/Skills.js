import React, { useState, useEffect } from "react";
import Bookshelf from "./Bookshelf";
import SectionHeading from "./SectionHeading";

const Skills = ({ skillsRef }) => {
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Detect touch device on mount
  useEffect(() => {
    const detectTouch = () => {
      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };

    detectTouch();
    window.addEventListener('touchstart', detectTouch, { once: true });

    return () => {
      window.removeEventListener('touchstart', detectTouch);
    };
  }, []);

  return (
    <section
      className="bg-lightPrimaryColor text-lightText dark:bg-darkPrimaryColor dark:text-darkText theme-transition py-20"
      ref={skillsRef}
    >
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header with improved mobile spacing */}
        <div className="flex flex-col items-center mb-8 sm:mb-12">
          <SectionHeading text="Skill Set"></SectionHeading>
        </div>

        {/* Main content with improved mobile layout */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-8 lg:gap-12">
          {/* Description section with better text sizing and spacing */}
          <div className="w-full lg:w-1/2 text-center lg:text-left space-y-3 sm:space-y-4 mb-6 lg:mb-0">
            <p className="text-sm sm:text-base lg:text-lg text-lightText dark:text-darkText px-4 sm:px-6 lg:px-0">
              Welcome to my technology library, where each book represents a
              skill I've mastered throughout my journey as a software developer.
            </p>
            <p className="text-xs sm:text-sm text-lightText dark:text-darkText opacity-80">
              {isTouchDevice ? "Tap" : "Hover over"} any book to discover more details.
            </p>
          </div>

          {/* Bookshelf section with responsive width */}
          <div className="w-full sm:w-4/5 lg:w-1/2 flex justify-center px-2 sm:px-4">
            <Bookshelf 
              isTouchDevice={isTouchDevice} 
              setIsTouchDevice={setIsTouchDevice}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;