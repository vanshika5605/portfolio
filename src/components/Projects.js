import React, { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProjectModal from "./ProjectModal";
import projects from "../data/projects.json";
import SectionHeading from "./SectionHeading";

const Projects = ({ projectsRef }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const scrollContainerRef = useRef(null);

  // Generate random rotation between -20 and 20 degrees
  const getRandomRotation = () => Math.random() * 40 - 20;

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollAmount = 300; // Adjust this value to control scroll distance
    const targetScroll = container.scrollLeft + (direction === 'right' ? scrollAmount : -scrollAmount);
    
    container.scrollTo({
      left: targetScroll,
      behavior: 'smooth'
    });
  };

  return (
    <section
      ref={projectsRef}
      className="bg-lightPrimaryColor text-lightText dark:bg-darkPrimaryColor dark:text-darkText theme-transition py-20"
    >
      <div className="flex flex-col items-center">
        <SectionHeading text="My Work"></SectionHeading>
      </div>

      {/* Main Container with Navigation */}
      <div className="relative max-w-[90vw] mx-auto">
        {/* Thread Line */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gray-300">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 opacity-50"></div>
        </div>

        {/* Navigation Buttons */}
        <button 
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors duration-300"
          aria-label="Previous projects"
        >
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </button>

        <button 
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors duration-300"
          aria-label="Next projects"
        >
          <ChevronRight className="w-6 h-6 text-gray-600" />
        </button>

        {/* Scrollable Container */}
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-hidden pb-8 pt-8 gap-8 snap-x snap-mandatory scrollbar-hide"
        >
          {projects.map((project, index) => {
            const rotation = getRandomRotation();
            return (
              <div
                key={index}
                className="flex-none snap-center"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="relative group">
                  {/* Thread Connection */}
                  <div className="absolute top-[-2rem] left-1/2 w-px h-8 bg-gray-400 transform -translate-x-1/2">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-gray-800 rounded-full"></div>
                  </div>

                  {/* Wooden Clip */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-6 h-12 z-10">
                    <div className="w-full h-full bg-amber-800 rounded-t-lg shadow-md transition-colors duration-300 group-hover:bg-amber-700" />
                    <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-4 h-2 bg-amber-900 rounded" />
                  </div>

                  {/* Polaroid Card */}
                  <div
                    className="w-60 bg-white p-3 shadow-lg cursor-pointer transition-all duration-500 ease-in-out"
                    style={{
                      transform: `rotate(${rotation}deg)`,
                      ...(hoveredIndex === index
                        ? {
                            transform: "rotate(0deg) translateY(-8px)",
                            boxShadow:
                              "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                            zIndex: 20,
                          }
                        : {}),
                    }}
                    onClick={() => setSelectedProject(project)}
                  >
                    {/* Project Image */}
                    <div className="relative h-50 bg-gray-100 mb-3 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>

                    {/* Project Info */}
                    <div className="space-y-2">
                      <h3 className="font-medium text-base text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-xs text-gray-600">
                        {project.description}
                      </p>

                      {/* Tech Stack Preview */}
                      <div className="flex flex-wrap gap-1 pt-1">
                        {project.tech.slice(0, 3).map((tech, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 bg-gray-100 text-xs text-gray-600 rounded transition-colors duration-300 group-hover:bg-blue-50 group-hover:text-blue-600"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.tech.length > 3 && (
                          <span className="px-2 py-0.5 bg-gray-100 text-xs text-gray-600 rounded">
                            +{project.tech.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;