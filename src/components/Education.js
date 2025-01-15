import React, { useState } from "react";
import {
  Award,
  Calendar,
  MapPin,
  BookOpen,
  GraduationCap,
  Clock,
  Coffee,
  Image,
} from "lucide-react";
import education from "../data/education.json";

const Education = ({ educationRef, isLargeScreen }) => {
  const [activeFrame, setActiveFrame] = useState(null);

  const getRandomPosition = (index) => {
    const positions = [
      { top: "15%", left: "5%" },
      { top: "25%", right: "5%" },
      { top: "45%", left: "7%" },
      { top: "65%", right: "7%" },
      { top: "75%", left: "5%" },
    ];
    return positions[index % positions.length];
  };

  const decorElements = [
    { icon: Clock, size: "w-12 h-12" },
    { icon: Coffee, size: "w-10 h-10" },
    { icon: Image, size: "w-14 h-14" },
    { icon: Clock, size: "w-10 h-10" },
    { icon: Coffee, size: "w-12 h-12" },
  ];

  return (
    <section
      ref={educationRef}
      className="bg-lightPrimaryColor text-lightText dark:bg-darkPrimaryColor dark:text-darkText theme-transition"
    >
      <div>
        <div className="relative bg-[#e8d1c0] p-12 rounded-lg shadow-inner text-lightText dark:text-darkText">
          <div
            className="absolute inset-0 rounded-lg opacity-90"
            style={{
              backgroundImage: `
                linear-gradient(335deg, #b8997a 23px, transparent 23px),
                linear-gradient(155deg, #b8997a 23px, transparent 23px),
                linear-gradient(335deg, #b8997a 23px, transparent 23px),
                linear-gradient(155deg, #b8997a 23px, transparent 23px)
              `,
              backgroundSize: "58px 58px",
              backgroundPosition: "0px 2px, 4px 35px, 29px 31px, 34px 6px",
              backgroundColor: "#d4b595",
            }}
          />

          <div
            className="absolute inset-0 rounded-lg opacity-20"
            style={{
              backgroundImage: `
                linear-gradient(#000 1px, transparent 1px),
                linear-gradient(90deg, #000 1px, transparent 1px)
              `,
              backgroundSize: "29px 15px",
            }}
          />
          <h2 className="text-3xl font-bold mb-12 text-center hover:scale-105 hover:text-blue-500 transition-transform duration-300">
            Academic Journey
            <div className="h-1 w-20 bg-blue-500 mx-auto mt-2"></div>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {education.map((edu, index) => (
              <div key={edu.id} className="relative group min-h-[320px]">
                <div className="absolute inset-0 bg-black opacity-20 blur-md transform translate-y-2 translate-x-2" />

                <div className="absolute left-1/2 -top-6 w-px h-6 bg-gray-400" />
                <div className="absolute left-1/2 -top-6 w-3 h-1 bg-gray-600 -translate-x-1/2" />

                <div
                  className={`relative bg-[#f5e6d3] p-4 rounded-lg transition-all duration-300
                  ${
                    activeFrame === edu.id
                      ? "scale-102 z-20"
                      : "hover:scale-101"
                  }
                  cursor-pointer shadow-xl border-8 border-[#8B4513]`}
                  onClick={() =>
                    setActiveFrame(activeFrame === edu.id ? null : edu.id)
                  }
                  style={{
                    boxShadow: "inset 0 0 20px rgba(0,0,0,0.2)",
                    minHeight: "320px",
                  }}
                >
                  <div className="absolute top-2 left-2 w-6 h-6 border-t-4 border-l-4 border-[#A0522D] rounded-tl-lg" />
                  <div className="absolute top-2 right-2 w-6 h-6 border-t-4 border-r-4 border-[#A0522D] rounded-tr-lg" />
                  <div className="absolute bottom-2 left-2 w-6 h-6 border-b-4 border-l-4 border-[#A0522D] rounded-bl-lg" />
                  <div className="absolute bottom-2 right-2 w-6 h-6 border-b-4 border-r-4 border-[#A0522D] rounded-br-lg" />

                  <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-transparent opacity-30 rounded-lg pointer-events-none" />

                  <div className="relative">
                    <div className="text-center mb-2">
                      <div className="flex justify-center mb-2">
                        <GraduationCap className="w-8 h-8 text-[#8B4513]" />
                      </div>
                      <span className="text-xs font-medium text-[#8B4513]">
                        {edu.type}
                      </span>

                      {/* Scroll-like degree section with hover animation */}
                      <div
                        className="relative mt-1 mb-2 py-2 px-4 bg-[#f8ece0] rounded-lg group cursor-pointer
                                    before:content-[''] before:absolute before:top-0 before:left-2 before:right-2 before:h-2 before:bg-[#d4b595] before:rounded-t-lg
                                    after:content-[''] after:absolute after:bottom-0 after:left-2 after:right-2 after:h-2 after:bg-[#d4b595] after:rounded-b-lg
                                    hover:shadow-md transition-all duration-300"
                      >
                        <div className="absolute left-0 top-1/2 w-2 h-8 bg-[#d4b595] -translate-y-1/2 rounded-r-lg" />
                        <div className="absolute right-0 top-1/2 w-2 h-8 bg-[#d4b595] -translate-y-1/2 rounded-l-lg" />

                        <h3
                          className="text-lg font-serif text-[#654321] relative
                                     group-hover:scale-105 transition-transform duration-300"
                        >
                          {edu.degree}
                          <div className="absolute -right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="animate-bounce">
                              <BookOpen className="w-4 h-4 text-[#8B4513]" />
                            </div>
                          </div>
                        </h3>
                      </div>

                      <p className="text-[#8B4513] font-semibold text-sm">
                        {edu.institution}
                      </p>
                      <div className="flex items-center justify-center gap-1 text-[#654321] mt-2 text-xs">
                        <Calendar className="w-3 h-3" />
                        <span>{edu.date}</span>
                      </div>
                      <div className="flex items-center justify-center gap-1 text-[#654321] mt-1 text-xs">
                        <MapPin className="w-3 h-3" />
                        <span>{edu.location}</span>
                      </div>
                    </div>

                    {/* Expandable content with slide-down animation */}
                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        activeFrame === edu.id
                          ? "max-h-96 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="mt-4 space-y-4">
                        {edu.achievements && (
                          <div>
                            <h4 className="font-serif text-sm mb-2 flex items-center gap-1 text-[#654321]">
                              <Award className="w-3 h-3" />
                              Achievements
                            </h4>
                            <ul className="list-disc list-inside text-[#654321] text-xs">
                              {edu.achievements.map((achievement, idx) => (
                                <li key={idx}>{achievement}</li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {edu.courses && (
                          <div>
                            <h4 className="font-serif text-sm mb-2 flex items-center gap-1 text-[#654321]">
                              <BookOpen className="w-3 h-3" />
                              Key Courses
                            </h4>
                            <div className="flex flex-wrap gap-1">
                              {edu.courses.map((course, idx) => (
                                <span
                                  key={idx}
                                  className="px-2 py-0.5 bg-[#f5e6d3] rounded-full text-xs text-[#8B4513]"
                                >
                                  {course}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
