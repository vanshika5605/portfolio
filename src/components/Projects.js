import React, { useState } from "react";
import ProjectModal from "./ProjectModal";

const Projects = ({ projectsRef }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack online shopping platform",
      fullDescription:
        "A comprehensive e-commerce solution built with the MERN stack, featuring real-time inventory management, secure payment processing, and advanced search capabilities.",
      image: "/api/placeholder/300/200",
      tech: ["React", "Node.js", "MongoDB", "Express", "Redux", "Stripe"],
      features: [
        "User authentication and authorization",
        "Real-time inventory tracking",
        "Secure payment processing with Stripe",
        "Advanced product search and filtering",
        "Order management system",
        "Admin dashboard with analytics",
      ],
      link: "https://project-link.com",
    },
    {
      title: "Task Management App",
      description: "Real-time task collaboration tool",
      fullDescription:
        "A collaborative task management application that enables teams to organize, track, and complete projects efficiently with real-time updates and notifications.",
      image: "/api/placeholder/300/200",
      tech: ["Vue.js", "Firebase", "Tailwind", "WebSocket", "Cloud Functions"],
      features: [
        "Real-time collaboration",
        "Task dependencies tracking",
        "Team chat and comments",
        "File attachments",
        "Progress tracking",
        "Due date notifications",
      ],
      link: "https://project-link.com",
    },
    {
      title: "Weather Dashboard",
      description: "Live weather tracking dashboard",
      fullDescription:
        "An interactive weather monitoring dashboard that provides real-time weather data, historical trends, and forecast predictions using multiple weather APIs.",
      image: "/api/placeholder/300/200",
      tech: [
        "React",
        "D3.js",
        "OpenWeather API",
        "Chart.js",
        "GeoLocation API",
      ],
      features: [
        "Real-time weather updates",
        "Interactive weather maps",
        "7-day forecast",
        "Historical weather data",
        "Location-based alerts",
        "Customizable dashboard",
      ],
      link: "https://project-link.com",
    },
    {
      title: "Social Media Analytics",
      description: "Social metrics dashboard",
      fullDescription:
        "A comprehensive analytics platform for tracking and analyzing social media performance across multiple platforms with customizable reporting features.",
      image: "/api/placeholder/300/200",
      tech: ["Angular", "Python", "PostgreSQL", "Redis", "Docker"],
      features: [
        "Multi-platform integration",
        "Automated report generation",
        "Sentiment analysis",
        "Engagement tracking",
        "Competitor analysis",
        "Custom metric creation",
      ],
      link: "https://project-link.com",
    },
  ];

  // Generate random rotation between -20 and 20 degrees
  const getRandomRotation = () => Math.random() * 40 - 20;

  return (
    <section
      ref={projectsRef}
      className="bg-lightPrimaryColor text-lightText dark:bg-darkPrimaryColor dark:text-darkText theme-transition py-20"
    >
      <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-16 text-center">
        My Projects
        <div className="h-1 w-20 bg-blue-500 mx-auto mt-2"></div>
      </h2>

      {/* Thread Line */}
      <div className="relative max-w-[90vw] mx-auto">
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gray-300">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 opacity-50"></div>
        </div>

        {/* Scrollable Container */}
        <div className="flex overflow-x-auto pb-8 pt-8 gap-8 snap-x snap-mandatory scrollbar-hide">
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
                    <div className="relative h-40 bg-gray-100 mb-3 overflow-hidden">
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
        ></ProjectModal>
      )}
    </section>
  );
};

export default Projects;
