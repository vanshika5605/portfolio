import React, { useState } from "react";
import Bookshelf from "./Bookshelf";

const Skills = ({ isLargeScreen, skillsRef }) => {
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  return (
    <section
      className="bg-lightTertiaryColor text-lightText dark:bg-darkTertiaryColor dark:text-darkText theme-transition py-12 md:py-20"
      ref={skillsRef}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center hover:scale-105 hover:text-blue-500 transition-transform duration-300">
          My Technology Library
          <div className="h-1 w-20 bg-blue-500 mx-auto mt-2"></div>
        </h2>

        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6">
          {/* Description section - Always visible but responsive */}
          <div className="w-full md:w-1/3 text-center md:text-left">
            <p className="text-sm md:text-base text-lightText dark:text-darkText mb-3 ">
              Welcome to my technology library, where each book represents a
              skill I've mastered throughout my journey as a software developer.
            </p>
            <p className="text-sm text-lightText dark:text-darkText mb-6 md:mb-0">
              {isTouchDevice ? "Tap" : "Hover over"} any book to discover more details.
            </p>
          </div>

          {/* Bookshelf section */}
          <div className="w-full md:w-2/3 flex justify-center md:justify-end">
            <Bookshelf isTouchDevice={isTouchDevice} setIsTouchDevice={setIsTouchDevice}></Bookshelf>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
