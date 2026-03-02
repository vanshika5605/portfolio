import { useState } from "react";

const LampToggle = ({ theme, setTheme }) => {
  const [swinging, setSwinging] = useState(false);
  const isOn = theme === "light";

  const handleClick = () => {
    if (swinging) return;
    setSwinging(true);
    setTheme(isOn ? "dark" : "light");
    setTimeout(() => setSwinging(false), 900);
  };

  return (
    <div
      className="fixed top-0 right-14 z-50 flex flex-col items-center"
      role="button"
      aria-label={isOn ? "Switch to dark mode" : "Switch to light mode"}
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    >
      {/* Ceiling mount */}
      <div className="w-5 h-2 rounded-b-sm bg-gray-500 dark:bg-gray-400" />

      {/* Cord + Bulb — swings as one unit from the top */}
      <div
        className={swinging ? "animate-lamp-swing" : ""}
        style={{
          transformOrigin: "top center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Cord */}
        <div className="w-px bg-gray-400 dark:bg-gray-500" style={{ height: "56px" }} />

        {/* Bulb */}
        <svg
          width="34"
          height="48"
          viewBox="0 0 34 48"
          style={{
            filter: isOn
              ? "drop-shadow(0 0 6px rgba(253,224,71,1)) drop-shadow(0 0 16px rgba(251,191,36,0.75))"
              : "none",
            transition: "filter 0.4s ease",
          }}
        >
          {/* Pear-shaped glass globe */}
          <path
            d="M17,2 C10,2 4,8 4,15 C4,20 6,24 10,27 L10,35 L24,35 L24,27 C28,24 30,20 30,15 C30,8 24,2 17,2 Z"
            fill={isOn ? "#FDE047" : "#6B7280"}
            style={{ transition: "fill 0.4s ease" }}
          />

          {/* Specular highlight */}
          {isOn && (
            <ellipse cx="12" cy="11" rx="3.5" ry="5" fill="rgba(255,255,255,0.38)" />
          )}

          {/* Socket ridges */}
          <rect x="10" y="35" width="14" height="3" rx="1" fill="#9CA3AF" />
          <rect x="11" y="38" width="12" height="3" rx="1" fill="#6B7280" />
          <rect x="12" y="41" width="10" height="2.5" rx="1" fill="#4B5563" />

          {/* Base cap */}
          <ellipse cx="17" cy="43.5" rx="4.5" ry="1.5" fill="#374151" />

          {/* Filament (visible when on) */}
          {isOn && (
            <path
              d="M13 33 Q13 26 17 23 Q21 26 21 33"
              stroke="#F59E0B"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
            />
          )}
        </svg>
      </div>
    </div>
  );
};

export default LampToggle;
