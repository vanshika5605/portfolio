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
      ref: projectsRef,
      icon: FolderDot,
      label: "Projects",
      section: "projects",
    },
    {
      ref: experienceRef,
      icon: Briefcase,
      label: "Experience",
      section: "experience",
    },
    { ref: skillsRef, icon: Lightbulb, label: "Skills", section: "skills" },
    {
      ref: educationRef,
      icon: BookOpen,
      label: "Education",
      section: "education",
    },
    { ref: contactRef, icon: Mail, label: "Contact", section: "contact" },
  ];

  return (
    <nav
      className={`
      ${
        isLargeScreen
          ? "fixed top-0 left-0 right-0 z-50 theme-transition bg-lightBg/80 dark:bg-darkBg/80 backdrop-blur-md shadow-sm"
          : "fixed bottom-0 left-0 right-0 z-50 bg-lightPrimaryColor dark:bg-darkPrimaryColor theme-transition shadow-lg border-t border-[#b08968] dark:border-[#a07840]"
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
                      ? "text-[#9a6040] dark:text-[#d4a878]"
                      : ""
                  }
                `}
              >
                <Icon className="w-6 h-6" />
                <span className="text-xs">{label}</span>
                {activeSection === section && (
                  <svg
                    className="absolute -bottom-1 w-full h-2 text-[#9a6040] dark:text-[#d4a878]"
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
              <NavButtons />
            </div>
          </div>
        </div>
      </div>

      {/* Wavy bottom edge — desktop only, sits just below the nav bar */}
      {isLargeScreen && (
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            lineHeight: 0,
            pointerEvents: "none",
            height: "20px",
          }}
        >
          <svg
            viewBox="0 0 1440 20"
            preserveAspectRatio="none"
            style={{ display: "block", width: "100%", height: "20px" }}
          >
            <path
              d="M0,0 L1440,0 L1440,10 C1260,5 1080,20 720,10 C360,0 180,15 0,10 Z"
              style={{ fill: "var(--nav-bg)" }}
            />
          </svg>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
