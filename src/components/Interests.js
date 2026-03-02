import React, { useState } from "react";
import SectionHeading from "./SectionHeading";
import WaveDivider from "./WaveDivider";

const Interests = ({ isLargeScreen, interestsRef }) => {
  const [activeInterest, setActiveInterest] = useState(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  React.useEffect(() => {
    setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  const handleInteraction = (interestTitle) => {
    if (isTouchDevice) {
      setActiveInterest(activeInterest === interestTitle ? null : interestTitle);
    } else {
      setActiveInterest(interestTitle);
    }
  };

  const interests = [
    {
      title: "Full Stack Development",
      description:
        "Two years shipping production features at Deutsche Bank — React, Java, Spring Boot, and everything in between.",
      shape: "bookstack",
      accent: "#8B5E3C",
      rotation: -7,
      offsetY: 20,
    },
    {
      title: "Generative AI",
      description:
        "Currently at Honda Research building LLM + knowledge graph pipelines; used GPT-4o-mini and LLaMA across multiple projects.",
      shape: "dice",
      accent: "#A07848",
      rotation: 5,
      offsetY: 0,
    },
    {
      title: "Cloud & DevOps",
      description:
        "Automated Kubernetes security for 90+ microservices at Bose using Jenkins, Docker, and Trivy — adopted as the new SDLC standard.",
      shape: "keyring",
      accent: "#9A6840",
      rotation: -3,
      offsetY: 35,
    },
    {
      title: "Distributed Systems",
      description:
        "From fault-tolerant stock trading platforms to Apache Spark pipelines — designing systems that hold up under real load.",
      shape: "puzzle",
      accent: "#7A5230",
      rotation: 8,
      offsetY: 10,
    },
    {
      title: "UI/UX Design",
      description:
        "Building things people enjoy using matters as much as building things that work.",
      shape: "palette",
      accent: "#B08060",
      rotation: -5,
      offsetY: 28,
    },
    {
      title: "Cooking",
      description:
        "My offline debugging method — best ideas always happen in the kitchen.",
      shape: "spoon",
      accent: "#9A6040",
      rotation: 4,
      offsetY: 14,
    },
  ];

  const renderShape = (interest, isActive) => {
    const lg = isLargeScreen;
    const liftY = isActive ? "-14px" : "0px";

    switch (interest.shape) {
      // --- stack of 3 offset books ---
      case "bookstack": {
        const bookW = lg ? "80px" : "64px";
        const bookH = lg ? "22px" : "17px";
        const colors = [
          `${interest.accent}`,
          `${interest.accent}cc`,
          `${interest.accent}88`,
        ];
        const offsets = [
          { left: "0px", top: "0px" },
          { left: "5px", top: lg ? "24px" : "19px" },
          { left: "-4px", top: lg ? "48px" : "38px" },
        ];
        const totalH = lg ? "88px" : "70px";
        return (
          <div
            style={{
              width: lg ? "96px" : "78px",
              height: totalH,
              position: "relative",
              transform: `translateY(${liftY})`,
              transition: "all 0.3s ease",
              cursor: "pointer",
            }}
          >
            {colors.map((color, i) => (
              <div
                key={i}
                style={{
                  position: "absolute",
                  left: offsets[i].left,
                  top: offsets[i].top,
                  width: bookW,
                  height: bookH,
                  background: color,
                  borderRadius: "3px",
                  boxShadow: i === 0 && isActive
                    ? `0 16px 36px ${interest.accent}55`
                    : "0 2px 6px rgba(0,0,0,0.2)",
                  transition: "all 0.3s ease",
                }}
              >
                {/* spine line */}
                <div
                  style={{
                    position: "absolute",
                    left: "10px",
                    top: "4px",
                    bottom: "4px",
                    width: "1px",
                    background: "rgba(255,255,255,0.3)",
                  }}
                />
              </div>
            ))}
          </div>
        );
      }

      // --- dice showing 5 ---
      case "dice": {
        const sz = lg ? "96px" : "78px";
        const dotPositions = [
          { top: "18%", left: "18%" },
          { top: "18%", right: "18%" },
          { top: "45%", left: "45%" },
          { bottom: "18%", left: "18%" },
          { bottom: "18%", right: "18%" },
        ];
        const dotSz = lg ? "13px" : "10px";
        return (
          <div
            style={{
              width: sz,
              height: sz,
              background: "var(--object-fill)",
              borderRadius: "18px",
              position: "relative",
              transform: `translateY(${liftY})`,
              boxShadow: isActive
                ? `0 16px 36px ${interest.accent}55`
                : "0 4px 12px rgba(0,0,0,0.2)",
              transition: "all 0.3s ease",
              cursor: "pointer",
              border: `2px solid ${interest.accent}44`,
            }}
          >
            {dotPositions.map((pos, i) => (
              <div
                key={i}
                style={{
                  position: "absolute",
                  width: dotSz,
                  height: dotSz,
                  borderRadius: "50%",
                  background: "var(--object-fill-secondary)",
                  ...pos,
                }}
              />
            ))}
          </div>
        );
      }

      // --- keyring with two keys ---
      case "keyring": {
        const ringSz = lg ? "46px" : "36px";
        const keyH = lg ? "52px" : "42px";
        const keyW = lg ? "14px" : "11px";
        return (
          <div
            style={{
              width: lg ? "90px" : "72px",
              height: lg ? "110px" : "88px",
              position: "relative",
              transform: `translateY(${liftY})`,
              transition: "all 0.3s ease",
              cursor: "pointer",
            }}
          >
            {/* ring */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: "50%",
                transform: "translateX(-50%)",
                width: ringSz,
                height: ringSz,
                borderRadius: "50%",
                border: `5px solid ${interest.accent}`,
                background: "transparent",
                boxShadow: isActive
                  ? `0 8px 24px ${interest.accent}55`
                  : "0 2px 8px rgba(0,0,0,0.2)",
                transition: "all 0.3s ease",
                zIndex: 2,
              }}
            />
            {/* key 1 */}
            <div
              style={{
                position: "absolute",
                top: lg ? "32px" : "26px",
                left: lg ? "10px" : "8px",
                width: keyW,
                height: keyH,
                background: `${interest.accent}cc`,
                borderRadius: "3px 3px 2px 2px",
                transform: "rotate(-12deg)",
                transformOrigin: "top center",
                zIndex: 1,
              }}
            >
              {/* teeth */}
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  style={{
                    position: "absolute",
                    right: "-4px",
                    top: `${20 + i * 10}px`,
                    width: "5px",
                    height: "5px",
                    background: `${interest.accent}cc`,
                    borderRadius: "0 2px 2px 0",
                  }}
                />
              ))}
            </div>
            {/* key 2 */}
            <div
              style={{
                position: "absolute",
                top: lg ? "32px" : "26px",
                right: lg ? "10px" : "8px",
                width: keyW,
                height: lg ? "42px" : "34px",
                background: `${interest.accent}88`,
                borderRadius: "3px 3px 2px 2px",
                transform: "rotate(12deg)",
                transformOrigin: "top center",
                zIndex: 1,
              }}
            >
              {[0, 1].map((i) => (
                <div
                  key={i}
                  style={{
                    position: "absolute",
                    left: "-4px",
                    top: `${16 + i * 10}px`,
                    width: "5px",
                    height: "5px",
                    background: `${interest.accent}88`,
                    borderRadius: "2px 0 0 2px",
                  }}
                />
              ))}
            </div>
          </div>
        );
      }

      // --- two interlocking puzzle pieces ---
      case "puzzle": {
        const sz = lg ? "100px" : "80px";
        return (
          <div
            style={{
              width: sz,
              height: sz,
              position: "relative",
              transform: `translateY(${liftY})`,
              transition: "all 0.3s ease",
              cursor: "pointer",
            }}
          >
            {/* piece A — top-left */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: lg ? "52px" : "42px",
                height: lg ? "52px" : "42px",
                background: `${interest.accent}`,
                borderRadius: "6px 0 0 6px",
                boxShadow: isActive
                  ? `0 16px 36px ${interest.accent}55`
                  : "0 4px 12px rgba(0,0,0,0.18)",
                transition: "all 0.3s ease",
              }}
            >
              {/* bump right */}
              <div
                style={{
                  position: "absolute",
                  right: lg ? "-10px" : "-8px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: lg ? "14px" : "11px",
                  height: lg ? "14px" : "11px",
                  borderRadius: "50%",
                  background: `${interest.accent}`,
                  zIndex: 2,
                }}
              />
              {/* bump bottom */}
              <div
                style={{
                  position: "absolute",
                  bottom: lg ? "-10px" : "-8px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: lg ? "14px" : "11px",
                  height: lg ? "14px" : "11px",
                  borderRadius: "50%",
                  background: `${interest.accent}`,
                  zIndex: 2,
                }}
              />
            </div>
            {/* piece B — bottom-right */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                right: 0,
                width: lg ? "52px" : "42px",
                height: lg ? "52px" : "42px",
                background: `${interest.accent}88`,
                borderRadius: "0 6px 6px 0",
                transition: "all 0.3s ease",
              }}
            >
              {/* socket left */}
              <div
                style={{
                  position: "absolute",
                  left: lg ? "-10px" : "-8px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: lg ? "14px" : "11px",
                  height: lg ? "14px" : "11px",
                  borderRadius: "50%",
                  background: `${interest.accent}88`,
                  zIndex: 2,
                }}
              />
              {/* socket top */}
              <div
                style={{
                  position: "absolute",
                  top: lg ? "-10px" : "-8px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: lg ? "14px" : "11px",
                  height: lg ? "14px" : "11px",
                  borderRadius: "50%",
                  background: `${interest.accent}88`,
                  zIndex: 2,
                }}
              />
            </div>
          </div>
        );
      }

      case "palette":
        return (
          <div
            style={{
              width: lg ? "108px" : "88px",
              height: lg ? "108px" : "88px",
              borderRadius: "50%",
              background: "var(--object-fill)",
              border: `2px solid ${interest.accent}88`,
              transform: `translateY(${liftY})`,
              boxShadow: isActive
                ? `0 16px 36px ${interest.accent}44`
                : "0 4px 12px rgba(0,0,0,0.15)",
              transition: "all 0.3s ease",
              position: "relative",
              cursor: "pointer",
            }}
          >
            {/* paint swatch dots arranged in arc */}
            {[
              { color: "#e74c3c", top: "18px", left: "22px" },
              { color: "#f39c12", top: "12px", left: "46px" },
              { color: "#2ecc71", top: "18px", right: "22px" },
              { color: "#3498db", top: "38px", left: "14px" },
              { color: "#9b59b6", top: "38px", right: "14px" },
            ].map((dot) => (
              <div
                key={dot.color}
                style={{
                  position: "absolute",
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  background: dot.color,
                  top: dot.top,
                  left: dot.left,
                  right: dot.right,
                  opacity: 0.85,
                }}
              />
            ))}
            {/* brush handle hint */}
            <div
              style={{
                position: "absolute",
                bottom: "16px",
                left: "50%",
                transform: "translateX(-50%) rotate(-35deg)",
                width: "4px",
                height: "30px",
                background: interest.accent,
                borderRadius: "2px",
                opacity: 0.5,
              }}
            />
          </div>
        );

      // --- wooden spoon lying at an angle ---
      case "spoon": {
        const totalW = lg ? "110px" : "88px";
        const totalH = lg ? "40px" : "32px";
        const handleW = lg ? "72px" : "58px";
        const handleH = lg ? "10px" : "8px";
        const bowlW = lg ? "32px" : "26px";
        const bowlH = lg ? "24px" : "19px";
        return (
          <div
            style={{
              width: totalW,
              height: totalH,
              position: "relative",
              transform: `translateY(${liftY}) rotate(-10deg)`,
              transition: "all 0.3s ease",
              cursor: "pointer",
            }}
          >
            {/* handle */}
            <div
              style={{
                position: "absolute",
                right: 0,
                top: "50%",
                transform: "translateY(-50%)",
                width: handleW,
                height: handleH,
                background: `linear-gradient(to bottom, ${interest.accent}cc, ${interest.accent})`,
                borderRadius: "0 6px 6px 0",
                boxShadow: isActive
                  ? `0 12px 28px ${interest.accent}55`
                  : "0 3px 8px rgba(0,0,0,0.2)",
                transition: "all 0.3s ease",
              }}
            >
              {/* wood grain lines */}
              {[25, 45, 62].map((pct) => (
                <div
                  key={pct}
                  style={{
                    position: "absolute",
                    left: `${pct}%`,
                    top: "20%",
                    bottom: "20%",
                    width: "1px",
                    background: "rgba(0,0,0,0.12)",
                  }}
                />
              ))}
            </div>
            {/* bowl (oval) */}
            <div
              style={{
                position: "absolute",
                left: 0,
                top: "50%",
                transform: "translateY(-50%)",
                width: bowlW,
                height: bowlH,
                background: `linear-gradient(135deg, ${interest.accent}dd, ${interest.accent}99)`,
                borderRadius: "50%",
                boxShadow: isActive
                  ? `0 12px 28px ${interest.accent}55`
                  : "0 3px 8px rgba(0,0,0,0.2)",
                transition: "all 0.3s ease",
              }}
            >
              {/* inner bowl shadow */}
              <div
                style={{
                  position: "absolute",
                  inset: "4px 5px 2px 5px",
                  borderRadius: "50%",
                  background: "rgba(0,0,0,0.12)",
                }}
              />
            </div>
          </div>
        );
      }

      default:
        return null;
    }
  };

  return (
    <section
      ref={interestsRef}
      className="relative bg-lightSecondaryColor text-lightText dark:bg-darkSecondaryColor dark:text-darkText theme-transition py-20 pb-14"
    >
      <div className="p-8">
        <SectionHeading text="The Coffee Table" subtitle="interests" />

        <div
          className={`flex flex-wrap gap-10 justify-center items-center ${
            isLargeScreen ? "max-w-4xl" : "max-w-md"
          } mx-auto relative pt-8 pb-16`}
        >
          {interests.map((interest, index) => (
            <div
              key={index}
              className="relative"
              style={{
                zIndex: activeInterest === interest.title ? 50 : 1,
                transform: `rotate(${interest.rotation}deg) translateY(${interest.offsetY}px)`,
                transition: "transform 0.3s ease",
              }}
              onClick={() => handleInteraction(interest.title)}
              onMouseEnter={() =>
                !isTouchDevice && handleInteraction(interest.title)
              }
              onMouseLeave={() => !isTouchDevice && handleInteraction(null)}
            >
              {renderShape(interest, activeInterest === interest.title)}

              {/* Label */}
              <p
                style={{
                  marginTop: "8px",
                  textAlign: "center",
                  fontSize: "11px",
                  fontWeight: 600,
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  color: "var(--text-color)",
                  opacity: 0.55,
                  userSelect: "none",
                  maxWidth: "110px",
                  lineHeight: 1.3,
                }}
              >
                {interest.title}
              </p>

              {/* Description card */}
              <div
                className={`absolute left-1/2 -translate-x-1/2 mt-3 w-52 rounded-lg shadow-lg p-3 text-center transition-all duration-300 ${
                  activeInterest === interest.title
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-2 pointer-events-none"
                }`}
                style={{
                  top: "100%",
                  zIndex: 100,
                  background: "var(--bg-color)",
                }}
              >
                <p
                  className="text-sm font-medium"
                  style={{ color: "var(--text-color)" }}
                >
                  {interest.title}
                </p>
                <p
                  className="text-xs mt-1"
                  style={{ color: "var(--text-color)", opacity: 0.65 }}
                >
                  {interest.description}
                </p>
                {isTouchDevice && (
                  <div className="mt-2 text-xs text-[#9a6040] dark:text-[#d4a878]">
                    Tap again to close
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <WaveDivider fillVar="--section-primary" variant="c" flip />
    </section>
  );
};

export default Interests;
