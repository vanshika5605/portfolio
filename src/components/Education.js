import React, { useState } from "react";
import { Award, Calendar, MapPin, BookOpen, GraduationCap } from "lucide-react";

const Education = ({ educationRef, isLargeScreen }) => {
  const [activeFrame, setActiveFrame] = useState(null);

  const education = [
    {
      id: "masters",
      type: "Graduate",
      degree: "Master of Science in Computer Science",
      institution: "University of Massachusetts Amherst",
      location: "Amherst, Massachusetts",
      date: "Expected: May 2026",
      status: "current",
      color: "blue",
      courses: [
        "Advanced Algorithms",
        "Systems for Data Science",
        "Theory of Software Engineering",
      ],
    },
    {
      id: "bachelors",
      type: "Undergraduate",
      degree: "Bachelor of Technology in Computer Science and Engineering",
      institution: "Maulana Azad National Institute of Technology",
      location: "Bhopal, India",
      date: "Jul 2018 – May 2022",
      color: "purple",
      achievements: ["CGPA: 9.23/10", "Rank: 2/210"],
      courses: [
        "Data Structures",
        "DBMS",
        "Operating System",
        "Machine Learning",
        "Natural Language Processing",
        "Network Security",
      ],
    },
    {
      id: "highschool",
      type: "High School",
      degree: "High School Diploma",
      institution: "Billabong High International",
      location: "India",
      color: "green",
      date: "2018",
    },
  ];

  return (
    <section
      ref={educationRef}
      className="bg-lightPrimaryColor text-lightText dark:bg-darkPrimaryColor dark:text-darkText theme-transition py-20"
    >
      <div className="max-w-3xl mx-auto p-4 sm:p-6">
        <h2 className="text-3xl font-bold mb-12 text-center hover:scale-105 hover:text-blue-500 transition-transform duration-300">
          Academic Journey
          <div className="h-1 w-20 bg-blue-500 mx-auto mt-2"></div>
        </h2>
        <div className="space-y-8">
          {education.map((edu) => (
            <div key={edu.id} className="relative group">
              <div
                className={`relative p-6 sm:p-8 rounded-lg transition-all duration-300
                ${activeFrame === edu.id ? "scale-102" : "hover:scale-101"}
                cursor-pointer shadow-lg border-8 border-amber-800`}
                onClick={() =>
                  setActiveFrame(activeFrame === edu.id ? null : edu.id)
                }
              >
                {/* Frame Corner Decorations */}
                <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-amber-600" />
                <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-amber-600" />
                <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-amber-600" />
                <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-amber-600" />

                {/* Basic Info */}
                <div className="text-center mb-4">
                  <div className="flex justify-center mb-4">
                    <GraduationCap className="w-12 h-12 text-amber-700" />
                  </div>
                  <span className="text-sm font-medium text-amber-700">
                    {edu.type}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-serif mt-2 mb-3">
                    {edu.degree}
                  </h3>
                  <p className="text-amber-800 font-semibold">
                    {edu.institution}
                  </p>
                  <div className="flex items-center justify-center gap-2 text-gray-600 mt-3">
                    <Calendar className="w-4 h-4" />
                    <span>{edu.date}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-gray-600 mt-2">
                    <MapPin className="w-4 h-4" />
                    <span>{edu.location}</span>
                  </div>
                </div>

                {/* Expanded Details */}
                {activeFrame === edu.id && (
                  <div className="mt-6 space-y-6 animate-fadeIn">
                    {edu.achievements && (
                      <div>
                        <h4 className="font-serif text-lg mb-3 flex items-center gap-2">
                          <Award className="w-4 h-4" />
                          Achievements
                        </h4>
                        <ul className="list-disc list-inside text-gray-600">
                          {edu.achievements.map((achievement, idx) => (
                            <li key={idx}>{achievement}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {edu.courses && (
                      <div>
                        <h4 className="font-serif text-lg mb-3 flex items-center gap-2">
                          <BookOpen className="w-4 h-4" />
                          Key Courses
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {edu.courses.map((course, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-amber-50 rounded-full text-sm text-amber-800"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
