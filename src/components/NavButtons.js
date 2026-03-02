import { Download } from "lucide-react";

const NavButtons = ({ className }) => {
  const handleDownloadResume = () => {
    window.open("Vanshika_Agrawal - Resume.pdf", "_blank");
  };

  return (
    <button
      onClick={handleDownloadResume}
      aria-label="Download Resume"
      className={[
        className,
        "group flex items-center gap-2 px-3 py-1.5 rounded-lg border text-sm font-medium transition-all duration-200",
      ].join(" ")}
      style={{ borderColor: "var(--border-color)", color: "var(--text-color)" }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = "var(--primary-color)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "transparent";
      }}
    >
      <Download className="w-4 h-4 transition-transform duration-200 group-hover:translate-y-0.5" />
      <span className="hidden md:inline">Resume</span>
    </button>
  );
};

export default NavButtons;
