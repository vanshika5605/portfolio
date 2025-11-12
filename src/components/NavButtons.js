import { Download, Moon, Sun } from "lucide-react"; // Add this import

const NavButtons = ({ setTheme, theme, class1, class2 }) => {
  const handleDownloadResume = () => {
    // Replace with your actual resume file path
    const resumeUrl = "Vanshika_Agrawal - Resume.pdf";
    window.open(resumeUrl, "_blank");
  };

  return (
    <>
      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className={[
          class1,
          "p-2 rounded-full bg-purple-300 dark:bg-purple-900 shadow-lg hover:bg-purple-700 dark:hover:bg-purple-500 transition-colors duration-200",
        ].join(" ")}
        aria-label="Toggle theme"
      >
        {theme === "light" ? (
          <Moon className="w-6 h-6" />
        ) : (
          <Sun className="w-6 h-6" />
        )}
      </button>
      <button
        onClick={handleDownloadResume}
        className={[
          class2,
          "p-2 rounded-full bg-purple-300 dark:bg-purple-900 shadow-lg hover:bg-purple-700 dark:hover:bg-purple-500 transition-colors duration-200 flex items-center gap-2",
        ].join(" ")}
      >
        <Download className="w-6 h-6" />
        <span className="hidden md:inline">Resume</span>
      </button>
    </>
  );
};

export default NavButtons;
