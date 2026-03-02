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
          {/* Brick pattern */}
          <div
            className="absolute inset-0 rounded-lg opacity-90 dark:opacity-20"
            style={{
              backgroundImage: `
                linear-gradient(335deg, var(--brick-pattern-color) 23px, transparent 23px),
                linear-gradient(155deg, var(--brick-pattern-color) 23px, transparent 23px),
                linear-gradient(335deg, var(--brick-pattern-color) 23px, transparent 23px),
                linear-gradient(155deg, var(--brick-pattern-color) 23px, transparent 23px)
              `,
              backgroundSize: "58px 58px",
              backgroundPosition: "0px 2px, 4px 35px, 29px 31px, 34px 6px",
              backgroundColor: "var(--brick-bg-color)",
              zIndex: 1,
            }}
          />

          {/* Grid overlay */}
          <div
            className="absolute inset-0 rounded-lg opacity-20 dark:opacity-30"
            style={{
              backgroundImage: `
                linear-gradient(#0004 1px, transparent 1px),
                linear-gradient(90deg, #0004 1px, transparent 1px)
              `,
              backgroundSize: "29px 15px",
              zIndex: 2,
            }}
          />

          <div className="relative" style={{ zIndex: 3 }}>
            <SectionHeading text="On the Wall" subtitle="Education" />
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8 relative"
            style={{ zIndex: 3 }}
          >
            {education.map((edu) => (
              <div
                key={edu.id}
                className="relative group min-h-[320px]"
                style={{ zIndex: 4 }}
              >
                {/* Drop shadow */}
                <div
                  className="absolute inset-0 bg-black opacity-20 blur-md transform translate-y-2 translate-x-2"
                  style={{ zIndex: 5 }}
                />

                {/* Frame card */}
                <div
                  className={`relative p-4 rounded-lg transition-all duration-500 cursor-pointer shadow-xl
                    ${activeFrame === edu.id ? "scale-105" : "hover:scale-102"}`}
                  onClick={() =>
                    setActiveFrame(activeFrame === edu.id ? null : edu.id)
                  }
                  style={{
                    backgroundColor: "var(--primary-color)",
                    border: "8px solid var(--border-color)",
                    boxShadow: "inset 0 0 20px rgba(0,0,0,0.15)",
                    minHeight: "320px",
                    transform: `rotateX(${activeFrame === edu.id ? "0deg" : "5deg"})`,
                    transformOrigin: "top",
                    zIndex: 6,
                  }}
                >
                  {/* Frame top/bottom inner accent strips */}
                  <div
                    className="absolute top-0 left-2 right-2 h-2 rounded-t-lg"
                    style={{ backgroundColor: "var(--secondary-color)" }}
                  />
                  <div
                    className="absolute bottom-0 left-2 right-2 h-2 rounded-b-lg"
                    style={{ backgroundColor: "var(--secondary-color)" }}
                  />

                  {/* Corner decorations */}
                  <div
                    className="absolute top-2 left-2 w-6 h-6 border-t-4 border-l-4 rounded-tl-lg"
                    style={{ borderColor: "var(--border-color)" }}
                  />
                  <div
                    className="absolute top-2 right-2 w-6 h-6 border-t-4 border-r-4 rounded-tr-lg"
                    style={{ borderColor: "var(--border-color)" }}
                  />
                  <div
                    className="absolute bottom-2 left-2 w-6 h-6 border-b-4 border-l-4 rounded-bl-lg"
                    style={{ borderColor: "var(--border-color)" }}
                  />
                  <div
                    className="absolute bottom-2 right-2 w-6 h-6 border-b-4 border-r-4 rounded-br-lg"
                    style={{ borderColor: "var(--border-color)" }}
                  />


                  {/* Content */}
                  <div className="relative" style={{ zIndex: 7 }}>
                    <div className="text-center mb-2">
                      <div className="flex justify-center mb-2">
                        <GraduationCap
                          className="w-8 h-8"
                          style={{ color: "var(--border-color)" }}
                        />
                      </div>

                      <span
                        className="text-xs font-medium"
                        style={{ color: "var(--border-color)" }}
                      >
                        {edu.type}
                      </span>

                      <div className="relative mt-1 mb-2 py-2 px-4">
                        <h3
                          className="text-lg font-heading"
                          style={{ color: "var(--text-color)" }}
                        >
                          {edu.degree}
                        </h3>
                      </div>

                      <p
                        className="font-semibold text-sm"
                        style={{ color: "var(--text-color)" }}
                      >
                        {edu.institution}
                      </p>

                      <div
                        className="flex items-center justify-center gap-1 mt-2 text-xs opacity-70"
                        style={{ color: "var(--text-color)" }}
                      >
                        <Calendar className="w-3 h-3" />
                        <span>{edu.date}</span>
                      </div>

                      <div
                        className="flex items-center justify-center gap-1 mt-1 text-xs opacity-70"
                        style={{ color: "var(--text-color)" }}
                      >
                        <MapPin className="w-3 h-3" />
                        <span>{edu.location}</span>
                      </div>
                    </div>

                    {/* Expandable details */}
                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out transform
                        ${activeFrame === edu.id
                          ? "max-h-96 opacity-100 scale-y-100"
                          : "max-h-0 opacity-0 scale-y-0"
                        }`}
                      style={{ transformOrigin: "top" }}
                    >
                      <div className="mt-4 space-y-4">
                        {edu.achievements && (
                          <div>
                            <h4
                              className="font-heading text-sm mb-2 flex items-center gap-1"
                              style={{ color: "var(--border-color)" }}
                            >
                              <Award className="w-3 h-3" />
                              Achievements
                            </h4>
                            <ul
                              className="list-disc list-inside text-xs space-y-1"
                              style={{ color: "var(--text-color)", opacity: 0.85 }}
                            >
                              {edu.achievements.map((achievement, idx) => (
                                <li key={idx}>{achievement}</li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {edu.courses && (
                          <div>
                            <h4
                              className="font-heading text-sm mb-2 flex items-center gap-1"
                              style={{ color: "var(--border-color)" }}
                            >
                              <BookOpen className="w-3 h-3" />
                              Key Courses
                            </h4>
                            <div className="flex flex-wrap gap-1">
                              {edu.courses.map((course, idx) => (
                                <span
                                  key={idx}
                                  className="px-2 py-0.5 rounded-full text-xs border"
                                  style={{
                                    backgroundColor: "var(--secondary-color)",
                                    color: "var(--text-color)",
                                    borderColor: "var(--border-color)",
                                  }}
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
