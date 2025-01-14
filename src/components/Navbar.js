import React, { useEffect, useRef, useState } from "react";
import { BookOpen, Briefcase, Mail, Moon, Sun, User } from "lucide-react";

const Navbar = ({activeSection, isLargeScreen, skillsRef, educationRef, experienceRef, projectsRef, interestsRef, contactRef, theme, setTheme}) => {

    const scrollToSection = (ref) => {
        if (ref.current) {
          const yOffset = -80; // Adjust this value based on your navbar height
          const element = ref.current;
          const y =
            element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    
          window.scrollTo({
            top: y,
            behavior: "smooth",
          });
        }
      };
    
      const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
      };

    return (
        <><nav
        className={`
  ${
    isLargeScreen
      ? "fixed top-0 left-0 right-0 z-50 theme-transition"
      : "fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 theme-transition shadow-lg"
  }
  theme-transition
`}
      >
        <div className="flex justify-end items-center h-16">
          <div className="flex md:hidden justify-around w-full">
            <button
              onClick={() => scrollToSection(interestsRef)}
              className={`p-2 transition-colors duration-200 ${
                activeSection === "about" ? "text-blue-500" : ""
              }`}
            >
              <User className="w-6 h-6" />
            </button>
            <button
              onClick={() => scrollToSection(experienceRef)}
              className={`p-2 transition-colors duration-200 ${
                activeSection === "experience" ? "text-blue-500" : ""
              }`}
            >
              <Briefcase className="w-6 h-6" />
            </button>
            <button
              onClick={() => scrollToSection(educationRef)}
              className={`p-2 transition-colors duration-200 ${
                activeSection === "education" ? "text-blue-500" : ""
              }`}
            >
              <BookOpen className="w-6 h-6" />
            </button>
            <button
              onClick={() => scrollToSection(contactRef)}
              className={`p-2 transition-colors duration-200 ${
                activeSection === "contact" ? "text-blue-500" : ""
              }`}
            >
              <Mail className="w-6 h-6" />
            </button>
            <button onClick={toggleTheme} className="p-2">
              {theme === "light" ? (
                <Moon className="w-6 h-6" />
              ) : (
                <Sun className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection(interestsRef)}
              className={`hover:text-blue-500 transition-colors duration-200 ${
                activeSection === "about" ? "text-blue-500" : ""
              }`}
            >
              interests
            </button>
            <button
              onClick={() => scrollToSection(skillsRef)}
              className={`hover:text-blue-500 transition-colors duration-200 ${
                activeSection === "about" ? "text-blue-500" : ""
              }`}
            >
              skills
            </button>
            <button
              onClick={() => scrollToSection(experienceRef)}
              className={`hover:text-blue-500 transition-colors duration-200 ${
                activeSection === "experience" ? "text-blue-500" : ""
              }`}
            >
              experience
            </button>
            <button
              onClick={() => scrollToSection(educationRef)}
              className={`hover:text-blue-500 transition-colors duration-200 ${
                activeSection === "education" ? "text-blue-500" : ""
              }`}
            >
              education
            </button>
            <button
              onClick={() => scrollToSection(contactRef)}
              className={`hover:text-blue-500 transition-colors duration-200 ${
                activeSection === "contact" ? "text-blue-500" : ""
              }`}
            >
              contact
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
            >
              {theme === "light" ? (
                <Moon className="w-6 h-6" />
              ) : (
                <Sun className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav></>
    )
};

export default Navbar;