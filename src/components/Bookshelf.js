import { Calendar, Code } from "lucide-react";
import React, { useState } from "react";

const Bookshelf = ({ isTouchDevice, setIsTouchDevice }) => {
  const [activeBook, setActiveBook] = useState(null);

  // Detect touch device on mount
  React.useEffect(() => {
    setIsTouchDevice("ontouchstart" in window);
  }, []);

  const skillShelves = [
    {
      name: "Languages & Core",
      color: "#2563eb",
      skills: [
        { name: "Java", proficiency: 90, years: "5 years", projects: 12 },
        { name: "JavaScript", proficiency: 85, years: "4 years", projects: 15 },
        { name: "C++", proficiency: 80, years: "3 years", projects: 6 },
        { name: "Python", proficiency: 85, years: "4 years", projects: 8 },
        { name: "HTML", proficiency: 90, years: "5 years", projects: 20 },
        { name: "CSS/SASS", proficiency: 90, years: "5 years", projects: 20 },
        { name: "JavaScript", proficiency: 90, years: "5 years", projects: 20 },
        { name: "SQL", proficiency: 90, years: "5 years", projects: 20 },
      ],
    },
    {
      name: "Frameworks/Technologies",
      color: "#059669",
      skills: [
        { name: "SpringBoot", proficiency: 85, years: "4 years", projects: 10 },
        { name: "React.js", proficiency: 85, years: "3 years", projects: 12 },
        { name: "Django", proficiency: 80, years: "3 years", projects: 7 },
        { name: "Bootstrap", proficiency: 90, years: "4 years", projects: 15 },
        { name: "WebSocket", proficiency: 85, years: "3 years", projects: 12 },
        { name: "ActiveMQ", proficiency: 85, years: "3 years", projects: 12 },
        { name: "Apache Spark", proficiency: 85, years: "3 years", projects: 12 },
        { name: "Wijmo", proficiency: 85, years: "3 years", projects: 12 },
      ],
    },
    {
      name: "DB & Tools",
      color: "#7c3aed",
      skills: [
        { name: "Oracle", proficiency: 85, years: "4 years", projects: 8 },
        { name: "MongoDB", proficiency: 80, years: "3 years", projects: 6 },
        { name: "Neo4j", proficiency: 75, years: "2 years", projects: 4 },
        { name: "Git", proficiency: 90, years: "5 years", projects: 25 },
        { name: "GitHub", proficiency: 90, years: "5 years", projects: 25 },
        { name: "Bitbucket", proficiency: 90, years: "5 years", projects: 25 },
        { name: "Jira", proficiency: 90, years: "5 years", projects: 25 },
        { name: "JUnit", proficiency: 90, years: "5 years", projects: 25 },
        { name: "Jest", proficiency: 90, years: "5 years", projects: 25 },
      ],
    },
    {
      name: "Concepts",
      color: "pink",
      skills: [
        { name: "Microservices", proficiency: 85, years: "4 years", projects: 8 },
        { name: "SDLC", proficiency: 80, years: "3 years", projects: 6 },
        { name: "Agile Methods", proficiency: 75, years: "2 years", projects: 4 },
        { name: "UI Design", proficiency: 90, years: "5 years", projects: 25 },
     ],
    },
  ];

  const handleBookInteraction = (shelfName, skillName) => {
    if (isTouchDevice) {
      setActiveBook(
        activeBook === shelfName + skillName ? null : shelfName + skillName
      );
    } else {
      setActiveBook(shelfName + skillName);
    }
  };

  return (
    <div className="relative w-full max-w-sm md:max-w-md bg-gray-100 p-4 rounded-lg mx-auto">
      <div className="absolute inset-0 bg-[#5C2A0D] rounded-lg transform -skew-x-1 scale-[1.02] translate-y-1" />
      <div className="relative space-y-4">
        {skillShelves.map((shelf) => (
          <div key={shelf.name} className="relative">
            <div className="absolute -top-4 left-2 text-xs font-medium text-gray-500">
              {shelf.name}
            </div>

            <div className="relative bg-[#8B4513] p-2 min-h-[80px] md:min-h-[100px] rounded-sm shadow-inner">
              <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-black/10" />
              <div className="relative flex flex-wrap gap-0.5 justify-center md:justify-start">
                {shelf.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="relative"
                    onClick={() =>
                      handleBookInteraction(shelf.name, skill.name)
                    }
                    onMouseEnter={() =>
                      !isTouchDevice && setActiveBook(shelf.name + skill.name)
                    }
                    onMouseLeave={() => !isTouchDevice && setActiveBook(null)}
                  >
                    <div
                      className={`h-[70px] md:h-[90px] w-[20px] md:w-[28px] transition-all duration-300 
                        ${isTouchDevice ? "active:scale-95" : "cursor-pointer"}
                        ${
                          activeBook === shelf.name + skill.name
                            ? "transform -translate-y-2"
                            : ""
                        }`}
                    >
                      <div
                        className="h-full w-full rounded-sm flex items-center justify-center relative"
                        style={{
                          backgroundColor: shelf.color,
                          boxShadow: "inset -2px 0 4px rgba(0,0,0,0.3)",
                        }}
                      >
                        <div
                          className="absolute text-white text-[8px] md:text-[9px] font-medium whitespace-nowrap"
                          style={{
                            writingMode: "vertical-rl",
                            transform: "rotate(180deg)",
                          }}
                        >
                          {skill.name}
                        </div>
                      </div>
                    </div>

                    {activeBook === shelf.name + skill.name && (
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 z-10 w-48 md:w-40 bg-white p-2 rounded-lg shadow-xl">
                        <h4 className="font-bold text-xs mb-2">{skill.name}</h4>
                        <div className="space-y-2">
                          <div className="w-full bg-gray-200 rounded-full h-1.5">
                            <div
                              className="bg-blue-600 rounded-full h-1.5 transition-all duration-500"
                              style={{ width: `${skill.proficiency}%` }}
                            />
                          </div>
                          <div className="text-[10px] text-gray-600">
                            {skill.proficiency}% Proficiency
                          </div>
                          <div className="flex justify-between text-[10px] text-gray-600 mt-1">
                            <div className="flex items-center gap-1">
                              <Calendar size={10} />
                              {skill.years}
                            </div>
                            <div className="flex items-center gap-1">
                              <Code size={10} />
                              {skill.projects} projects
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="h-2 bg-[#5C2A0D] rounded-b-sm shadow-md" />
          </div>
        ))}

        <div className="absolute -left-2 -right-2 bottom-0 h-3 bg-[#3E1A08] rounded-b-lg shadow-lg" />
      </div>
    </div>
  );
};

export default Bookshelf;
