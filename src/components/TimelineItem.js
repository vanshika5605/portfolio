import { useState } from "react";
import { Award, Briefcase, ChevronDown, ChevronUp, MapPin } from "lucide-react";

const TimelineItem = ({ experience, isEven }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`
      flex items-start
      ${isEven ? "flex-row" : "flex-row-reverse"}
      md:flex-row md:even:flex-row-reverse
      flex-col
    `}
    >
      {/* Content section */}
      <div className="w-full md:w-1/2 flex items-start">
        <div
          className={`
          flex-1 p-4 md:p-6 my-2 md:my-4
          ${isEven ? "md:text-right md:pr-8" : "md:text-left md:pl-8"}
          cursor-pointer
          transition-all duration-300
          ${
            isExpanded
              ? "bg-[#f5e6d3] dark:bg-[#2a1f1a] rounded-lg shadow-md border-4 border-[#8B4513] dark:border-[#523124]"
              : ""
          }
        `}
        >
          {/* Content remains the same but with responsive classes */}
          <div
            className={`
            flex items-center gap-2 mb-2 
            bg-[#e8d1c0] dark:bg-[#3d2b1f] 
            p-3 rounded-lg
            transition-all duration-300
            ${isEven ? "md:flex-row-reverse" : "md:flex-row"}
            flex-row
          `}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <Briefcase
              size={20}
              className="text-[#8B4513] dark:text-[#b8997a] flex-shrink-0"
            />
            <div className="font-bold text-lg text-[#654321] dark:text-[#b8997a]">
              {experience.role}
            </div>
          </div>

          <div
            className={`
              bg-[#f5e6d3] dark:bg-[#2a1f1a]
              p-2 rounded-lg mt-2
              text-[#8B4513] dark:text-[#b8997a]
              font-semibold
              ${isEven ? "text-right" : "text-left"}
            `}
          >
            {experience.company}
          </div>

          <div className="flex gap-2 mt-2 items-center">
            <div
              className={`
                bg-[#e8d1c0] dark:bg-[#3d2b1f]
                px-3 py-1 rounded-lg
                text-sm text-[#654321] dark:text-[#b8997a]
                ${isEven ? "ml-auto" : ""}
              `}
            >
              {experience.year}
            </div>

            <div
              className={`
                bg-[#e8d1c0] dark:bg-[#3d2b1f]
                px-3 py-1 rounded-lg
                text-sm text-[#654321] dark:text-[#b8997a]
                flex items-center gap-1
              `}
            >
              <MapPin size={12} />
              {experience.location}
            </div>
          </div>

          {/* Expandable details */}
          {isExpanded && (
            <div className="animate-fadeIn mt-4 text-left">
              <div className="space-y-4">
                {/* Key Achievements */}
                {experience.achievements && (
                  <div className="bg-[#f5e6d3] dark:bg-[#2a1f1a] p-4 rounded-lg">
                    <div className="text-[#654321] dark:text-[#b8997a] font-semibold mb-1">
                      Key Achievements
                    </div>
                    <ul className="space-y-2">
                      {experience.achievements.map((achievement, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-[#8B4513] dark:text-[#b8997a]"
                        >
                          <Award size={16} className="mt-1 flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Expand/collapse button */}
              <div className={`mt-4 ${isEven ? "text-right" : "text-left"}`}>
                <button
                  onClick={() => setIsExpanded(false)}
                  className="bg-[#e8d1c0] dark:bg-[#3d2b1f] text-[#8B4513] dark:text-[#b8997a] px-3 py-1 rounded-lg hover:bg-[#d4b595] dark:hover:bg-[#523124] transition-colors flex items-center gap-1"
                >
                  <span>Show less</span>
                  <ChevronUp size={16} />
                </button>
              </div>
            </div>
          )}

          {/* Show more button */}
          {!isExpanded && (
            <div className={`mt-2 ${isEven ? "text-right" : "text-left"}`}>
              <button
                onClick={() => setIsExpanded(true)}
                className="bg-[#e8d1c0] dark:bg-[#3d2b1f] text-[#8B4513] dark:text-[#b8997a] px-3 py-1 rounded-lg hover:bg-[#d4b595] dark:hover:bg-[#523124] transition-colors flex items-center gap-1"
              >
                {!isEven && <ChevronDown size={16} />}
                <span>Show more</span>
                {isEven && <ChevronDown size={16} />}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Center ladder structure - Modified for responsiveness */}
      <div className="relative flex items-center justify-center w-full md:w-auto">
        <div className="hidden md:block w-48 h-4 bg-gradient-to-b from-[#8B4513] to-[#654321] dark:from-[#523124] dark:to-[#3d2b1f] rounded-sm shadow-md" />
        <div className="md:hidden h-16 w-4 bg-gradient-to-b from-[#8B4513] to-[#654321] dark:from-[#523124] dark:to-[#3d2b1f] rounded-sm shadow-md my-4" />
        <div className="absolute w-4 h-4 bg-[#8B4513] dark:bg-[#523124] rounded-full border-2 border-[#654321] dark:border-[#3d2b1f]" />
      </div>

      <div className="hidden md:block md:w-1/2" />
    </div>
  );
};

export default TimelineItem;
