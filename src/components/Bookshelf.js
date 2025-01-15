import { Calendar, Code } from "lucide-react";
import React, { useState } from "react";
import shelves from "../data/skills.json";

const Bookshelf = ({ isTouchDevice, setIsTouchDevice }) => {
  const [activeBook, setActiveBook] = useState(null);

  // Detect touch device on mount
  React.useEffect(() => {
    setIsTouchDevice("ontouchstart" in window);
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

  // Example data structure with multiple categories per shelf
  // const shelves = [
  //   {
  //     name: "Development",
  //     categories: [
  //       {
  //         name: "Frontend",
  //         color: "#4A90E2",
  //         skills: [
  //           { name: "React", proficiency: 90, years: "4 yrs", projects: 25 },
  //           { name: "Vue", proficiency: 85, years: "3 yrs", projects: 15 }
  //         ]
  //       },
  //       {
  //         name: "Backend",
  //         color: "#50C878",
  //         skills: [
  //           { name: "Node.js", proficiency: 88, years: "4 yrs", projects: 30 },
  //           { name: "Python", proficiency: 82, years: "3 yrs", projects: 20 }
  //         ]
  //       }
  //     ]
  //   },
  //   {
  //     name: "Design",
  //     categories: [
  //       {
  //         name: "UI",
  //         color: "#E24A8D",
  //         skills: [
  //           { name: "Figma", proficiency: 85, years: "2 yrs", projects: 15 },
  //           { name: "Sketch", proficiency: 75, years: "1 yr", projects: 10 }
  //         ]
  //       },
  //       {
  //         name: "Graphics",
  //         color: "#9B51E0",
  //         skills: [
  //           { name: "Photoshop", proficiency: 80, years: "3 yrs", projects: 20 },
  //           { name: "Illustrator", proficiency: 70, years: "2 yrs", projects: 12 }
  //         ]
  //       }
  //     ]
  //   }
  // ];

  return (
    <div className="relative w-full max-w-sm md:max-w-md bg-gray-100 p-4 rounded-lg mx-auto">
      <div className="absolute inset-0 bg-[#5C2A0D] rounded-lg transform -skew-x-1 scale-[1.02] translate-y-1" />
      <div className="relative space-y-4">
        {shelves.map((shelf) => (
          <div key={shelf.name} className="relative">
            <div className="absolute -top-4 left-2 text-xs font-medium text-gray-500">
              {shelf.name}
            </div>

            <div className="relative bg-[#8B4513] p-2 min-h-[80px] md:min-h-[100px] rounded-sm shadow-inner">
              <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-black/10" />
              <div className="relative flex flex-wrap gap-2">
                {shelf.categories.map((category) => (
                  <div key={category.name} className="flex-1 min-w-[100px]">
                    <div className="text-[10px] text-white mb-1 px-1">
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
                            className={`h-[70px] md:h-[90px] w-[20px] md:w-[28px] transition-all duration-300 
                              ${isTouchDevice ? "active:scale-95" : "cursor-pointer"}
                              ${
                                activeBook === `${shelf.name}-${category.name}-${skill.name}`
                                  ? "transform -translate-y-2"
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

                          {activeBook === `${shelf.name}-${category.name}-${skill.name}` && (
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