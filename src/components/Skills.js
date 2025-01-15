import React, { useState } from "react";
import Bookshelf from "./Bookshelf";

const Skills = ({ isLargeScreen, skillsRef }) => {
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  return (
    <section
      className="bg-lightTertiaryColor text-lightText dark:bg-darkTertiaryColor dark:text-darkText theme-transition py-16 md:py-24"
      ref={skillsRef}
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col items-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center hover:scale-105 hover:text-blue-500 transition-transform duration-300">
            My Technology Library
          </h2>
          <div className="h-1 w-20 bg-blue-500 mb-8"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          {/* Description section */}
          <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
            <p className="text-sm md:text-base text-lightText dark:text-darkText">
              Welcome to my technology library, where each book represents a
              skill I've mastered throughout my journey as a software developer.
            </p>
            <p className="text-sm text-lightText dark:text-darkText">
              {isTouchDevice ? "Tap" : "Hover over"} any book to discover more details.
            </p>
          </div>

          {/* Bookshelf section */}
          <div className="w-full md:w-1/2 flex justify-center">
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