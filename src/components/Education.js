import { Award, BookOpen, Calendar, GraduationCap, MapPin } from "lucide-react";
import React, { useState } from "react";
import education from "../data/education.json";
import SectionHeading from "./SectionHeading";

const Education = ({ educationRef, isLargeScreen }) => {
  const [activeFrame, setActiveFrame] = useState(null);

  return (
    <section
      ref={educationRef}
      className="relative bg-lightPrimaryColor text-lightText dark:bg-darkPrimaryColor dark:text-darkText theme-transition"
      style={{ zIndex: 0 }}
    >
      <div>
        <div className="relative bg-[#e8d1c0] dark:bg-[#3d2b1f] p-12 rounded-lg shadow-inner text-lightText dark:text-darkText">
          <div
            className="absolute inset-0 rounded-lg opacity-90"
            style={{
              backgroundImage: `
                linear-gradient(335deg, var(--pattern-color) 23px, transparent 23px),
                linear-gradient(155deg, var(--pattern-color) 23px, transparent 23px),
                linear-gradient(335deg, var(--pattern-color) 23px, transparent 23px),
                linear-gradient(155deg, var(--pattern-color) 23px, transparent 23px)
              `,
              backgroundSize: "58px 58px",
              backgroundPosition: "0px 2px, 4px 35px, 29px 31px, 34px 6px",
              backgroundColor: "var(--bg-color)",
              "--pattern-color": "var(--tw-prose-pre-bg, #b8997a)",
              "--bg-color": "var(--tw-prose-pre-bg, #d4b595)",
              zIndex: 1,
            }}
          />

          <div
            className="absolute inset-0 rounded-lg opacity-20 dark:opacity-30"
            style={{
              backgroundImage: `
                linear-gradient(var(--grid-color) 1px, transparent 1px),
                linear-gradient(90deg, var(--grid-color) 1px, transparent 1px)
              `,
              backgroundSize: "29px 15px",
              "--grid-color": "var(--tw-prose-pre-bg, #000)",
              zIndex: 2,
            }}
          />

          <div className="relative" style={{ zIndex: 3 }}>
            <SectionHeading text="Academic Journey"></SectionHeading>
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8 relative"
            style={{ zIndex: 3 }}
          >
            {education.map((edu, index) => (
              <div
                key={edu.id}
                className="relative group min-h-[320px]"
                style={{ zIndex: 4 }}
              >
                <div
                  className="absolute inset-0 bg-black opacity-20 blur-md transform translate-y-2 translate-x-2"
                  style={{ zIndex: 5 }}
                />

                <div
                  className={`relative bg-[#f5e6d3] dark:bg-[#2a1f1a] p-4 rounded-lg transition-all duration-500
                    ${activeFrame === edu.id ? "scale-105" : "hover:scale-102"}
                    cursor-pointer shadow-xl border-8 border-[#8B4513] dark:border-[#523124]
                    before:content-[''] before:absolute before:top-0 before:left-2 before:right-2 before:h-2 
                    before:bg-[#d4b595] dark:before:bg-[#3d2b1f] before:rounded-t-lg
                    after:content-[''] after:absolute after:bottom-0 after:left-2 after:right-2 after:h-2 
                    after:bg-[#d4b595] dark:after:bg-[#3d2b1f] after:rounded-b-lg`}
                  onClick={() =>
                    setActiveFrame(activeFrame === edu.id ? null : edu.id)
                  }
                  style={{
                    boxShadow: "inset 0 0 20px rgba(0,0,0,0.2)",
                    minHeight: "320px",
                    transform: `rotate${
                      activeFrame === edu.id ? "X(0deg)" : "X(5deg)"
                    }`,
                    transformOrigin: "top",
                    zIndex: 6,
                  }}
                >
                  {/* Rest of the component stays the same */}
                  {/* ... Existing card content ... */}
                  <div className="absolute top-2 left-2 w-6 h-6 border-t-4 border-l-4 border-[#A0522D] dark:border-[#614434] rounded-tl-lg" />
                  <div className="absolute top-2 right-2 w-6 h-6 border-t-4 border-r-4 border-[#A0522D] dark:border-[#614434] rounded-tr-lg" />
                  <div className="absolute bottom-2 left-2 w-6 h-6 border-b-4 border-l-4 border-[#A0522D] dark:border-[#614434] rounded-bl-lg" />
                  <div className="absolute bottom-2 right-2 w-6 h-6 border-b-4 border-r-4 border-[#A0522D] dark:border-[#614434] rounded-br-lg" />

                  <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-transparent dark:from-gray-800 opacity-30 rounded-lg pointer-events-none" />

                  <div className="relative" style={{ zIndex: 7 }}>
                    <div className="text-center mb-2">
                      <div className="flex justify-center mb-2">
                        <GraduationCap className="w-8 h-8 text-[#8B4513] dark:text-[#b8997a]" />
                      </div>
                      <span className="text-xs font-medium text-[#8B4513] dark:text-[#b8997a]">
                        {edu.type}
                      </span>

                      <div className="relative mt-1 mb-2 py-2 px-4">
                        <h3 className="text-lg font-serif text-[#654321] dark:text-[#b8997a]">
                          {edu.degree}
                        </h3>
                      </div>

                      <p className="text-[#8B4513] dark:text-[#b8997a] font-semibold text-sm">
                        {edu.institution}
                      </p>
                      <div className="flex items-center justify-center gap-1 text-[#654321] dark:text-[#b8997a] mt-2 text-xs">
                        <Calendar className="w-3 h-3" />
                        <span>{edu.date}</span>
                      </div>
                      <div className="flex items-center justify-center gap-1 text-[#654321] dark:text-[#b8997a] mt-1 text-xs">
                        <MapPin className="w-3 h-3" />
                        <span>{edu.location}</span>
                      </div>
                    </div>

                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out transform
                        ${
                          activeFrame === edu.id
                            ? "max-h-96 opacity-100 scale-y-100"
                            : "max-h-0 opacity-0 scale-y-0"
                        }`}
                      style={{ transformOrigin: "top" }}
                    >
                      <div className="mt-4 space-y-4">
                        {edu.achievements && (
                          <div>
                            <h4 className="font-serif text-sm mb-2 flex items-center gap-1 text-[#654321] dark:text-[#b8997a]">
                              <Award className="w-3 h-3" />
                              Achievements
                            </h4>
                            <ul className="list-disc list-inside text-[#654321] dark:text-[#b8997a] text-xs">
                              {edu.achievements.map((achievement, idx) => (
                                <li key={idx}>{achievement}</li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {edu.courses && (
                          <div>
                            <h4 className="font-serif text-sm mb-2 flex items-center gap-1 text-[#654321] dark:text-[#b8997a]">
                              <BookOpen className="w-3 h-3" />
                              Key Courses
                            </h4>
                            <div className="flex flex-wrap gap-1">
                              {edu.courses.map((course, idx) => (
                                <span
                                  key={idx}
                                  className="px-2 py-0.5 bg-[#f5e6d3] dark:bg-[#3d2b1f] rounded-full text-xs text-[#8B4513] dark:text-[#b8997a]"
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
