import {
  BookOpen,
  Briefcase,
  FolderDot,
  Lightbulb,
  Mail,
  MessageCircleHeart,
  Moon,
  Sun,
} from "lucide-react";
import React from "react";

const Navbar = ({
  activeSection,
  isLargeScreen,
  skillsRef,
  educationRef,
  experienceRef,
  projectsRef,
  interestsRef,
  contactRef,
  theme,
  setTheme,
}) => {
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
    <>
      <nav
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
                activeSection === "interests" ? "font-bold" : ""
              }`}
            >
              <MessageCircleHeart className="w-6 h-6" />
            </button>
            <button
              onClick={() => scrollToSection(skillsRef)}
              className={`p-2 transition-colors duration-200 ${
                activeSection === "skills" ? "font-bold" : ""
              }`}
            >
              <Lightbulb className="w-6 h-6" />
            </button>
            <button
              onClick={() => scrollToSection(educationRef)}
              className={`p-2 transition-colors duration-200 ${
                activeSection === "education" ? "font-bold" : ""
              }`}
            >
              <BookOpen className="w-6 h-6" />
            </button>
            <button
              onClick={() => scrollToSection(experienceRef)}
              className={`p-2 transition-colors duration-200 ${
                activeSection === "experience" ? "font-bold" : ""
              }`}
            >
              <Briefcase className="w-6 h-6" />
            </button>
            <button
              onClick={() => scrollToSection(projectsRef)}
              className={`p-2 transition-colors duration-200 ${
                activeSection === "projects" ? "font-bold" : ""
              }`}
            >
              <FolderDot className="w-6 h-6" />
            </button>
            <button
              onClick={() => scrollToSection(contactRef)}
              className={`p-2 transition-colors duration-200 ${
                activeSection === "contact" ? "font-bold" : ""
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
              className={`hover:font-bold transition-colors duration-200 ${
                activeSection === "interests" ? "font-bold" : ""
              }`} 
            >
              interests
            </button>
            <button
              onClick={() => scrollToSection(skillsRef)}
              className={`hover:font-bold transition-colors duration-200 ${
                activeSection === "skills" ? "font-bold" : ""
              }`}
            >
              skills
            </button>
            <button
              onClick={() => scrollToSection(educationRef)}
              className={`hover:font-bold transition-colors duration-200 ${
                activeSection === "education" ? "font-bold" : ""
              }`}
            >
              education
            </button>
            <button
              onClick={() => scrollToSection(experienceRef)}
              className={`hover:font-bold transition-colors duration-200 ${
                activeSection === "experience" ? "font-bold" : ""
              }`}
            >
              experience
            </button>
            <button
              onClick={() => scrollToSection(projectsRef)}
              className={`hover:font-bold transition-colors duration-200 ${
                activeSection === "projects" ? "font-bold" : ""
              }`}
            >
              projects
            </button>
            <button
              onClick={() => scrollToSection(contactRef)}
              className={`hover:font-bold transition-colors duration-200 ${
                activeSection === "contact" ? "font-bold" : ""
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
      </nav>
    </>
  );
};

export default Navbar;
