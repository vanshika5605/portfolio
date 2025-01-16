import { Calendar, Code } from "lucide-react";
import React, { useState, useEffect } from "react";
import shelves from "../data/skills.json";

const Bookshelf = ({ isTouchDevice, setIsTouchDevice }) => {
  const [activeBook, setActiveBook] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState('bottom');

  // Enhanced touch detection
  useEffect(() => {
    const detectTouch = () => {
      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };
    
    detectTouch();
    window.addEventListener('touchstart', detectTouch, { once: true });
    
    return () => window.removeEventListener('touchstart', detectTouch);
  }, [setIsTouchDevice]);

  // Handle tooltip position based on viewport
  useEffect(() => {
    const handleTooltipPosition = () => {
      const isMobileViewport = window.innerWidth < 768;
      setTooltipPosition(isMobileViewport ? 'right' : 'bottom');
    };

    handleTooltipPosition();
    window.addEventListener('resize', handleTooltipPosition);
    
    return () => window.removeEventListener('resize', handleTooltipPosition);
  }, []);

  const handleBookInteraction = (shelfName, categoryName, skillName) => {
    if (isTouchDevice) {
      setActiveBook(
        activeBook === `${shelfName}-${categoryName}-${skillName}` 
          ? null 
          : `${shelfName}-${categoryName}-${skillName}`
      );
    } else {
      setActiveBook(`${shelfName}-${categoryName}-${skillName}`);
    }
  };

  return (
    <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md bg-gray-100 p-3 sm:p-4 rounded-lg mx-auto">
      <div className="absolute inset-0 bg-[#5C2A0D] rounded-lg transform -skew-x-1 scale-[1.02] translate-y-1" />
      <div className="relative space-y-3 sm:space-y-4">
        {shelves.map((shelf) => (
          <div key={shelf.name} className="relative">
            <div className="absolute -top-3 sm:-top-4 left-2 text-[10px] sm:text-xs font-medium text-gray-500">
              {shelf.name}
            </div>

            <div className="relative bg-[#8B4513] p-1.5 sm:p-2 min-h-[70px] sm:min-h-[80px] md:min-h-[100px] rounded-sm shadow-inner">
              <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-black/10" />
              <div className="relative flex flex-wrap gap-1.5 sm:gap-2">
                {shelf.categories.map((category) => (
                  <div key={category.name} className="flex-1 min-w-[90px] sm:min-w-[100px]">
                    <div className="text-[9px] sm:text-[10px] text-white mb-1 px-1">
                      {category.name}
                    </div>
                    <div className="flex flex-wrap gap-0.5 justify-center md:justify-start">
                      {category.skills.map((skill) => (
                        <div
                          key={skill.name}
                          className="relative"
                          onClick={() =>
                            handleBookInteraction(shelf.name, category.name, skill.name)
                          }
                          onMouseEnter={() =>
                            !isTouchDevice && 
                            setActiveBook(`${shelf.name}-${category.name}-${skill.name}`)
                          }
                          onMouseLeave={() => !isTouchDevice && setActiveBook(null)}
                        >
                          <div
                            className={`h-[60px] sm:h-[70px] md:h-[90px] w-[16px] sm:w-[20px] md:w-[28px] 
                              transition-all duration-300 
                              ${isTouchDevice ? "active:scale-95" : "cursor-pointer hover:brightness-110"}
                              ${
                                activeBook === `${shelf.name}-${category.name}-${skill.name}`
                                  ? "transform -translate-y-1 sm:-translate-y-2"
                                  : ""
                              }`}
                          >
                            <div
                              className="h-full w-full rounded-sm flex items-center justify-center relative"
                              style={{
                                backgroundColor: category.color,
                                boxShadow: "inset -2px 0 4px rgba(0,0,0,0.3)",
                              }}
                            >
                              <div
                                className="absolute text-white text-[7px] sm:text-[8px] md:text-[9px] font-medium whitespace-nowrap"
                                style={{
                                  writingMode: "vertical-rl",
                                  transform: "rotate(180deg)",
                                }}
                              >
                                {skill.name}
                              </div>
                            </div>
                          </div>

                          {activeBook === `${shelf.name}-${category.name}-${skill.name}` && (
                            <div 
                              className={`absolute z-10 bg-white p-2 rounded-lg shadow-xl
                                ${tooltipPosition === 'bottom' 
                                  ? 'bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 w-40'
                                  : 'left-full top-0 transform translate-x-2 w-36'
                                }`}
                            >
                              <h4 className="font-bold text-[11px] sm:text-xs mb-1.5">{skill.name}</h4>
                              <div className="space-y-1.5">
                                <div className="w-full bg-gray-200 rounded-full h-1">
                                  <div
                                    className="bg-blue-600 rounded-full h-1 transition-all duration-500"
                                    style={{ width: `${skill.proficiency}%` }}
                                  />
                                </div>
                                <div className="text-[9px] sm:text-[10px] text-gray-600">
                                  {skill.proficiency}% Proficiency
                                </div>
                                {/* <div className="flex text-[9px] sm:text-[10px] text-gray-600">
                                  <div className="flex items-center gap-1">
                                    <Calendar size={9} className="sm:w-[10px] sm:h-[10px]" />
                                    {skill.years}
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <Code size={9} className="sm:w-[10px] sm:h-[10px]" />
                                    {skill.projects} projects
                                  </div>
                                </div> */}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="h-1.5 sm:h-2 bg-[#5C2A0D] rounded-b-sm shadow-md" />
          </div>
        ))}

        <div className="absolute -left-2 -right-2 bottom-0 h-2 sm:h-3 bg-[#3E1A08] rounded-b-lg shadow-lg" />
      </div>
    </div>
  );
};

export default Bookshelf;