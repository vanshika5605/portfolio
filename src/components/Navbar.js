import {
  BookOpen,
  Briefcase,
  FolderDot,
  Lightbulb,
  Mail,
  MessageCircleHeart,
} from "lucide-react";
import NavButtons from "./NavButtons";

const Navbar = ({
  activeSection,
  isLargeScreen,
  skillsRef,
  educationRef,
  experienceRef,
  projectsRef,
  interestsRef,
  contactRef,
  setTheme,
  theme,
  handleDownloadResume,
}) => {
  const scrollToSection = (ref) => {
    if (ref.current) {
      const yOffset = -100;
      const element = ref.current;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const mobileNavItems = [
    {
      ref: interestsRef,
      icon: MessageCircleHeart,
      label: "Interests",
      section: "interests",
    },
    {
      ref: educationRef,
      icon: BookOpen,
      label: "Education",
      section: "education",
    },
    { ref: skillsRef, icon: Lightbulb, label: "Skills", section: "skills" },
    {
      ref: experienceRef,
      icon: Briefcase,
      label: "Experience",
      section: "experience",
    },
    {
      ref: projectsRef,
      icon: FolderDot,
      label: "Projects",
      section: "projects",
    },
    { ref: contactRef, icon: Mail, label: "Contact", section: "contact" },
  ];

  return (
    <nav
      className={`
      ${
        isLargeScreen
          ? "fixed top-8 left-0 right-0 z-50 theme-transition"
          : "fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 theme-transition shadow-lg"
      }
      theme-transition
    `}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-end items-center h-16">
          {/* Mobile Navigation */}
          <div className="flex md:hidden justify-around w-full py-2">
            {mobileNavItems.map(({ ref, icon: Icon, label, section }) => (
              <button
                key={section}
                onClick={() => scrollToSection(ref)}
                className={`
                  p-2 flex flex-col items-center space-y-1 relative
                  ${
                    activeSection === section
                      ? "text-purple-700 dark:text-purple-300"
                      : ""
                  }
                `}
              >
                <Icon className="w-6 h-6" />
                <span className="text-xs">{label}</span>
                {activeSection === section && (
                  <svg
                    className="absolute -bottom-1 w-full h-2 text-purple-700 dark:text-purple-300"
                    viewBox="0 0 100 20"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0 20 C25 0, 75 0, 100 20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                    />
                  </svg>
                )}
              </button>
            ))}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-end w-full gap-4">
            <div className="flex items-center space-x-8">
              {mobileNavItems.map(({ ref, label, section }) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(ref)}
                  className={`hover:font-bold transition-colors duration-200 ${
                    activeSection === section ? "font-bold" : ""
                  }`}
                >
                  {label.toLowerCase()}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <NavButtons theme={theme} setTheme={setTheme} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
