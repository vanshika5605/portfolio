import React, { useState } from 'react';
import { Calendar, Code } from 'lucide-react';

const Skills = ({ isLargeScreen, skillsRef }) => {
  const [activeBook, setActiveBook] = useState(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Detect touch device on mount
  React.useEffect(() => {
    setIsTouchDevice('ontouchstart' in window);
  }, []);

  const skillShelves = [
    {
      name: "Languages & Core",
      color: "#2563eb",
      skills: [
        { name: "Java", proficiency: 90, years: "5 years", projects: 12 },
        { name: "Python", proficiency: 85, years: "4 years", projects: 8 },
        { name: "C++", proficiency: 80, years: "3 years", projects: 6 },
        { name: "JavaScript", proficiency: 85, years: "4 years", projects: 15 },
        { name: "HTML/CSS", proficiency: 90, years: "5 years", projects: 20 }
      ]
    },
    {
      name: "Frameworks",
      color: "#059669",
      skills: [
        { name: "Spring", proficiency: 85, years: "4 years", projects: 10 },
        { name: "Django", proficiency: 80, years: "3 years", projects: 7 },
        { name: "React", proficiency: 85, years: "3 years", projects: 12 },
        { name: "Bootstrap", proficiency: 90, years: "4 years", projects: 15 }
      ]
    },
    {
      name: "DB & Tools",
      color: "#7c3aed",
      skills: [
        { name: "Oracle", proficiency: 85, years: "4 years", projects: 8 },
        { name: "MongoDB", proficiency: 80, years: "3 years", projects: 6 },
        { name: "Git", proficiency: 90, years: "5 years", projects: 25 },
        { name: "Neo4j", proficiency: 75, years: "2 years", projects: 4 }
      ]
    }
  ];

  const handleBookInteraction = (shelfName, skillName) => {
    if (isTouchDevice) {
      setActiveBook(activeBook === shelfName + skillName ? null : shelfName + skillName);
    } else {
      setActiveBook(shelfName + skillName);
    }
  };

  const Bookshelf = () => (
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
                    onClick={() => handleBookInteraction(shelf.name, skill.name)}
                    onMouseEnter={() => !isTouchDevice && setActiveBook(shelf.name + skill.name)}
                    onMouseLeave={() => !isTouchDevice && setActiveBook(null)}
                  >
                    <div
                      className={`h-[70px] md:h-[90px] w-[20px] md:w-[28px] transition-all duration-300 
                        ${isTouchDevice ? 'active:scale-95' : 'cursor-pointer'}
                        ${activeBook === shelf.name + skill.name ? 'transform -translate-y-2' : ''}`}
                    >
                      <div
                        className="h-full w-full rounded-sm flex items-center justify-center relative"
                        style={{ 
                          backgroundColor: shelf.color,
                          boxShadow: 'inset -2px 0 4px rgba(0,0,0,0.3)'
                        }}
                      >
                        <div
                          className="absolute text-white text-[8px] md:text-[9px] font-medium whitespace-nowrap"
                          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
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

  return (
    <section className="bg-lightTertiaryColor text-lightText dark:bg-darkTertiaryColor dark:text-darkText theme-transition py-12 md:py-20" ref={skillsRef}>
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center hover:scale-105 hover:text-blue-500 transition-transform duration-300">
          My Technology Library
          <div className="h-1 w-20 bg-blue-500 mx-auto mt-2"></div>
        </h2>
        
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6">
          {/* Description section - Always visible but responsive */}
          <div className="w-full md:w-1/3 text-center md:text-left">
            <h3 className="text-lg font-semibold mb-3">Technical Expertise</h3>
            <p className="text-sm text-gray-600 mb-3">
              Welcome to my technology library, where each book represents a skill I've mastered throughout my journey as a software developer. The height of each book reflects years of hands-on experience, while its color indicates the technology category.
            </p>
            <p className="text-sm text-gray-600 mb-6 md:mb-0">
              {isTouchDevice ? "Tap" : "Hover over"} any book to discover my proficiency level, years of experience, and the number of projects I've completed using that technology.
            </p>
          </div>
          
          {/* Bookshelf section */}
          <div className="w-full md:w-2/3 flex justify-center md:justify-end">
            <Bookshelf />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;