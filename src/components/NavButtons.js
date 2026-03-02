import { Download } from "lucide-react";

const NavButtons = ({ className }) => {
  const handleDownloadResume = () => {
    const resumeUrl = "Vanshika_Agrawal - Resume.pdf";
    window.open(resumeUrl, "_blank");
  };

  return (
    <button
      onClick={handleDownloadResume}
      className={[
        className,
        "p-2 rounded-full bg-purple-300 dark:bg-purple-900 shadow-lg hover:bg-purple-700 dark:hover:bg-purple-500 transition-colors duration-200 flex items-center gap-2",
      ].join(" ")}
    >
      <Download className="w-6 h-6" />
      <span className="hidden md:inline">Resume</span>
    </button>
  );
};

export default NavButtons;
