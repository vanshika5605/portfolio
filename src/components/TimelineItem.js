import { Award, Briefcase, ChevronDown, ChevronUp, Wrench } from "lucide-react";
import React, { useState } from "react";

const TimelineItem = ({ experience, isEven }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`flex items-start ${isEven ? "flex-row" : "flex-row-reverse"}`}
    >
      {/* Content section */}
      <div className="w-1/2 flex items-start">
        <div
          className={`
              flex-1 p-6 my-4
              ${isEven ? "text-right pr-8" : "text-left pl-8"}
              cursor-pointer
              transition-all duration-300
              ${isExpanded ? "bg-amber-50 rounded-lg shadow-md" : ""}
            `}
        >
          {/* Basic info always visible - keeps original alignment */}
          <div
            className="flex items-center gap-2 mb-2 hover:text-amber-800 transition-colors"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {!isEven && <Briefcase size={20} className="text-amber-700" />}
            <div className="font-bold text-lg">{experience.role}</div>
            {isEven && (
              <Briefcase size={20} className="text-amber-700 ml-auto" />
            )}
          </div>

          <div
            className={`text-amber-800 ${isEven ? "text-right" : "text-left"}`}
          >
            {experience.company}
          </div>
          <div
            className={`text-sm text-amber-700 mb-2 ${
              isEven ? "text-right" : "text-left"
            }`}
          >
            {experience.year}
          </div>

          {/* Expandable details - now always left-aligned */}
          {isExpanded && (
            <div className="animate-fadeIn mt-4 text-left">
              <div className="space-y-4">
                {/* Description */}
                <div>
                  <div className="text-amber-900 font-semibold mb-1">
                    Description
                  </div>
                  <p className="text-amber-800">{experience.description}</p>
                </div>

                {/* Key Achievements */}
                <div>
                  <div className="text-amber-900 font-semibold mb-1">
                    Key Achievements
                  </div>
                  <ul className="space-y-2">
                    {experience.achievements.map((achievement, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-amber-800"
                      >
                        <Award size={16} className="mt-1 flex-shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies - keeping flex layout but left-aligned container */}
                <div>
                  <div className="text-amber-900 font-semibold mb-1">
                    Technologies & Tools
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm flex items-center gap-1"
                      >
                        <Wrench size={12} />
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Expand/collapse button - aligned with original side */}
              <div className={`mt-4 ${isEven ? "text-right" : "text-left"}`}>
                <button
                  onClick={() => setIsExpanded(false)}
                  className="text-amber-700 hover:text-amber-900 transition-colors flex items-center gap-1"
                >
                  <span>Show less</span>
                  <ChevronUp size={16} />
                </button>
              </div>
            </div>
          )}

          {/* Show more button - aligned with original side */}
          {!isExpanded && (
            <div className={`mt-2 ${isEven ? "text-right" : "text-left"}`}>
              <button
                onClick={() => setIsExpanded(true)}
                className="text-amber-700 hover:text-amber-900 transition-colors flex items-center gap-1"
              >
                {!isEven && <ChevronDown size={16} />}
                <span>Show more</span>
                {isEven && <ChevronDown size={16} />}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Center ladder structure */}
      <div className="relative flex items-center justify-center">
        {/* Wooden rung effect */}
        <div className="w-20 h-4 bg-gradient-to-b from-amber-700 to-amber-800 rounded-sm shadow-md" />
        <div className="absolute w-4 h-4 bg-amber-600 rounded-full border-2 border-amber-800" />
      </div>

      <div className="w-1/2" />
    </div>
  );
};
export default TimelineItem;
