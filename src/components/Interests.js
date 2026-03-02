import React, { useState } from "react";
import SectionHeading from "./SectionHeading";
import WaveDivider from "./WaveDivider";

const Interests = ({ isLargeScreen, interestsRef }) => {
  const [activeInterest, setActiveInterest] = useState(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Detect touch device on component mount
  React.useEffect(() => {
    setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  const handleInteraction = (interestTitle) => {
    if (isTouchDevice) {
      // Toggle on touch devices
      setActiveInterest(
        activeInterest === interestTitle ? null : interestTitle
      );
    } else {
      // Hover behavior for desktop
      setActiveInterest(interestTitle);
    }
  };

  const interests = [
    {
      title: "Full Stack Development",
      description: "Building complete digital solutions from front to back",
      emoji: "💻",
    },
    {
      title: "Cloud Computing",
      description: "Keen on leveraging cloud for smarter applications",
      emoji: "☁️",
    },
    {
      title: "Problem Solving",
      description: "Finding elegant solutions to complex challenges",
      emoji: "🧩",
    },
    {
      title: "System Architecture",
      description: "Designing scalable and resilient systems",
      emoji: "🏗️",
    },
    {
      title: "UI/UX Design",
      description: "Crafting beautiful and intuitive user experiences",
      emoji: "🎨",
    },
    {
      title: "Cooking",
      description: "Exploring creativity through culinary adventures",
      emoji: "👨‍🍳",
    },
  ];

  return (
    <section
      ref={interestsRef}
      className="relative bg-lightSecondaryColor text-lightText dark:bg-darkSecondaryColor dark:text-darkText theme-transition py-20 pb-14"
    >
      <div className="p-8">
        <SectionHeading text="What Interests Me"></SectionHeading>

        <div
          className={`flex flex-wrap gap-4 justify-center 
          ${isLargeScreen ? "max-w-8xl" : "max-w-md"} mx-auto relative`}
        >
          {interests.map((interest, index) => (
            <div
              key={index}
              className="relative"
              style={{ zIndex: activeInterest === interest.title ? 50 : 1 }}
            >
              <div
                className={`cursor-pointer transition-all duration-300
                  ${isLargeScreen ? "w-36 h-36" : "w-28 h-28"} 
                  rounded-full flex items-center justify-center
                  ${!isTouchDevice && "hover:scale-110"} hover:shadow-lg 
                  bg-gradient-to-br
                  ${
                    index % 2 === 0
                      ? "from-[#f5e8de] to-[#eddac8]"
                      : "from-[#eddac8] to-[#e8d4c0]"
                  }
                  hover:from-[#e8d4c0] hover:to-[#dfc0ac]
                  ${
                    activeInterest === interest.title && isTouchDevice
                      ? "scale-110"
                      : ""
                  }`}
                onClick={() => handleInteraction(interest.title)}
                onMouseEnter={() =>
                  !isTouchDevice && handleInteraction(interest.title)
                }
                onMouseLeave={() => !isTouchDevice && handleInteraction(null)}
              >
                <span className={`${isLargeScreen ? "text-4xl" : "text-3xl"}`}>
                  {interest.emoji}
                </span>
              </div>

              {/* Description Card */}
              <div
                className={`absolute 
                  ${isLargeScreen ? "-bottom-20" : "-bottom-16"} 
                  left-1/2 transform -translate-x-1/2 
                  w-48 bg-white rounded-lg shadow-lg p-3 text-center
                  transition-all duration-300 
                  ${
                    activeInterest === interest.title
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-2 pointer-events-none"
                  }
                  ${isTouchDevice ? "touch-card" : ""}`}
                style={{ zIndex: 100 }}
              >
                <p className="text-sm font-medium text-gray-800">
                  {interest.title}
                </p>
                <p className="text-xs text-gray-600 mt-1">
                  {interest.description}
                </p>
                {isTouchDevice && (
                  <div className="mt-2 text-xs text-[#9a6040] dark:text-[#d4a878]">
                    Tap again to close
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <WaveDivider fillVar="--section-primary" variant="c" flip />
    </section>
  );
};

export default Interests;
