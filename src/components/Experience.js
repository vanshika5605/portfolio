import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { useState } from "react";
import experiences from "../data/experiences.json";
import SectionHeading from "./SectionHeading";
import WaveDivider from "./WaveDivider";

const toRoman = (n) => {
  const vals = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
  const syms = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
  let r = "";
  vals.forEach((v, i) => { while (n >= v) { r += syms[i]; n -= v; } });
  return r;
};

// Book pages are always cream, so ink is always a fixed dark warm brown
// (never white — white text on cream paper is unreadable in dark mode)
const TEXT = "#3d2010";
// Accent / decorative colour — warm tan, used for borders, ornaments, spine
const ACCENT = "var(--border-color)";

const Experience = ({ experienceRef }) => {
  // Reverse so Chapter I = oldest role, last chapter = most recent
  const chapters = [...experiences].reverse();

  const [current, setCurrent]   = useState(chapters.length - 1);
  const [visible, setVisible]   = useState(true);
  const [slideDir, setSlideDir] = useState("");

  const navigate = (next) => {
    if (next === current || next < 0 || next >= chapters.length) return;
    const dir = next > current ? "next" : "prev";
    setSlideDir(dir);
    setVisible(false);
    setTimeout(() => {
      setCurrent(next);
      setVisible(true);
      setSlideDir("");
    }, 280);
  };

  const exp = chapters[current];

  const pageAnim = visible
    ? "opacity-100 translate-x-0"
    : slideDir === "next"
    ? "opacity-0 translate-x-5"
    : "opacity-0 -translate-x-5";

  const leftPageAnim = visible
    ? "opacity-100 translate-x-0"
    : slideDir === "next"
    ? "opacity-0 -translate-x-5"
    : "opacity-0 translate-x-5";

  return (
    <section
      className="relative bg-lightTertiaryColor text-lightText dark:bg-darkTertiaryColor dark:text-darkText theme-transition pb-14"
      ref={experienceRef}
    >
      {/* Brick wall backdrop */}
      <div className="relative bg-[#e8d1c0] dark:bg-[#3d2b1f] p-6 md:p-12 rounded-lg shadow-inner">
        <div
          className="absolute inset-0 rounded-lg opacity-90 dark:opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(335deg, var(--brick-pattern-color) 23px, transparent 23px),
              linear-gradient(155deg, var(--brick-pattern-color) 23px, transparent 23px),
              linear-gradient(335deg, var(--brick-pattern-color) 23px, transparent 23px),
              linear-gradient(155deg, var(--brick-pattern-color) 23px, transparent 23px)
            `,
            backgroundSize: "58px 58px",
            backgroundPosition: "0px 2px, 4px 35px, 29px 31px, 34px 6px",
            backgroundColor: "var(--brick-bg-color)",
          }}
        />
        <div
          className="absolute inset-0 rounded-lg opacity-20 dark:opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(#0004 1px, transparent 1px), linear-gradient(90deg, #0004 1px, transparent 1px)",
            backgroundSize: "29px 15px",
          }}
        />

        <div className="relative" style={{ zIndex: 3 }}>
          <SectionHeading text="The Study" subtitle="Professional Experience" />

          {/* ─── DESKTOP: Two-page book spread ─── */}
          <div className="hidden md:block mt-10">
            <div className="relative mx-auto" style={{ maxWidth: "780px" }}>
              {/* Book shadow */}
              <div className="absolute inset-0 translate-x-3 translate-y-3 bg-black/30 rounded-sm pointer-events-none" />

              <div className="relative flex" style={{ height: "420px" }}>

                {/* ── Left page: chapter opener ── */}
                <div
                  className="flex-1 flex flex-col items-center justify-center p-8 text-center border rounded-l-sm overflow-hidden"
                  style={{ backgroundColor: "#f0e0d0", borderColor: ACCENT }}
                >
                  {/* Page number — decorative, stays accent */}
                  <span
                    className="absolute top-4 left-5 text-xs opacity-30"
                    style={{ color: ACCENT }}
                  >
                    {(current + 1) * 2 - 1}
                  </span>

                  {/* Roman numeral watermark — decorative */}
                  <div
                    className="text-8xl font-serif font-bold opacity-[0.08] mb-2 select-none"
                    style={{ color: ACCENT }}
                  >
                    {toRoman(current + 1)}
                  </div>

                  {/* Ornamental rule */}
                  <div className="flex items-center gap-2 w-full mb-6">
                    <div className="flex-1 h-px opacity-30" style={{ backgroundColor: ACCENT }} />
                    <div className="w-1.5 h-1.5 rotate-45 opacity-40" style={{ backgroundColor: ACCENT }} />
                    <div className="flex-1 h-px opacity-30" style={{ backgroundColor: ACCENT }} />
                  </div>

                  {/* Animated company info */}
                  <div className={`transition-all duration-280 ${leftPageAnim}`}>
                    <div
                      className="text-xs uppercase tracking-[0.2em] mb-2 opacity-50"
                      style={{ color: TEXT }}
                    >
                      Chapter {toRoman(current + 1)}
                    </div>
                    <h2
                      className="text-xl font-bold leading-tight mb-2"
                      style={{ color: TEXT }}
                    >
                      {exp.company}
                    </h2>
                    <p
                      className="text-sm italic mb-4 opacity-75"
                      style={{ color: TEXT }}
                    >
                      {exp.role}
                    </p>
                    <div
                      className="flex items-center justify-center gap-1 text-xs opacity-55"
                      style={{ color: TEXT }}
                    >
                      <MapPin size={10} />
                      <span>{exp.location}</span>
                    </div>
                    <div
                      className="text-xs mt-1 opacity-50"
                      style={{ color: TEXT }}
                    >
                      {exp.year}
                    </div>
                  </div>

                  {/* Bottom ornament */}
                  <div className="flex items-center gap-2 w-full mt-6">
                    <div className="flex-1 h-px opacity-30" style={{ backgroundColor: ACCENT }} />
                    <div className="w-1.5 h-1.5 rotate-45 opacity-40" style={{ backgroundColor: ACCENT }} />
                    <div className="flex-1 h-px opacity-30" style={{ backgroundColor: ACCENT }} />
                  </div>
                </div>

                {/* ── Spine ── */}
                <div
                  className="w-5 flex-shrink-0 flex items-center justify-center"
                  style={{ backgroundColor: ACCENT }}
                >
                  <span
                    className="text-[7px] uppercase tracking-[0.18em] whitespace-nowrap font-bold select-none"
                    style={{
                      color: "#f5e8de",
                      writingMode: "vertical-rl",
                      transform: "rotate(180deg)",
                    }}
                  >
                    Professional Experience
                  </span>
                </div>

                {/* ── Right page: content ── */}
                <div
                  className="flex-[1.3] relative border rounded-r-sm overflow-hidden"
                  style={{ backgroundColor: "#f5e8de", borderColor: ACCENT }}
                >
                  {/* Ruled lines */}
                  <div
                    className="absolute inset-0 pointer-events-none opacity-[0.07]"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(transparent, transparent 27px, #8b5a3a 27px, #8b5a3a 28px)",
                      backgroundSize: "100% 28px",
                      backgroundPosition: "0 36px",
                    }}
                  />

                  {/* Chapter tabs — right edge */}
                  <div
                    className="absolute right-0 top-0 bottom-0 flex flex-col"
                    style={{ width: "18px", zIndex: 5 }}
                  >
                    {chapters.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => navigate(i)}
                        className="flex-1 flex items-center justify-center transition-colors duration-200"
                        title={chapters[i].company}
                        style={{
                          backgroundColor:
                            i === current ? ACCENT : "rgba(176,137,104,0.2)",
                          borderLeft: `1px solid ${ACCENT}`,
                        }}
                      >
                        <span
                          className="text-[6px] font-bold leading-none select-none"
                          style={{
                            color: i === current ? "#f5e8de" : ACCENT,
                            writingMode: "vertical-rl",
                            transform: "rotate(180deg)",
                          }}
                        >
                          {toRoman(i + 1)}
                        </span>
                      </button>
                    ))}
                  </div>

                  {/* Page number — decorative */}
                  <span
                    className="absolute top-4 right-7 text-xs opacity-30 z-10"
                    style={{ color: ACCENT }}
                  >
                    {(current + 1) * 2}
                  </span>

                  {/* Scrollable content */}
                  <div
                    className={`absolute inset-0 right-[18px] p-6 pt-8 overflow-y-auto transition-all duration-280 ${pageAnim}`}
                    style={{ scrollbarWidth: "none" }}
                  >
                    {exp.description && (
                      <p
                        className="text-xs italic leading-relaxed mb-4 opacity-80"
                        style={{ color: TEXT }}
                      >
                        {exp.description}
                      </p>
                    )}

                    {exp.achievements?.length > 0 && (
                      <ul className="space-y-2 mb-4">
                        {exp.achievements.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-1.5 text-[11px] leading-relaxed"
                            style={{ color: TEXT }}
                          >
                            <span
                              className="mt-1 flex-shrink-0 opacity-40 text-[8px]"
                              style={{ color: ACCENT }}
                            >
                              ◆
                            </span>
                            <span className="opacity-85">{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {exp.technologies?.length > 0 && (
                      <div
                        className="flex flex-wrap gap-1.5 pt-3"
                        style={{ borderTop: `1px solid ${ACCENT}` }}
                      >
                        {exp.technologies.map((t, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 text-[10px] border rounded-full"
                            style={{ borderColor: ACCENT, color: TEXT }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation — outside the book, follows site theme */}
            <div className="flex items-center justify-center gap-8 mt-6">
              <button
                onClick={() => navigate(current - 1)}
                disabled={current === 0}
                className="flex items-center gap-1 text-xs uppercase tracking-widest font-bold transition-opacity disabled:opacity-25 hover:opacity-60"
                style={{ color: "var(--text-color)" }}
              >
                <ChevronLeft size={14} /> Prev
              </button>

              <span
                className="text-xs tracking-widest uppercase opacity-50"
                style={{ color: "var(--text-color)" }}
              >
                Chapter {current + 1} of {chapters.length}
              </span>

              <button
                onClick={() => navigate(current + 1)}
                disabled={current === chapters.length - 1}
                className="flex items-center gap-1 text-xs uppercase tracking-widest font-bold transition-opacity disabled:opacity-25 hover:opacity-60"
                style={{ color: "var(--text-color)" }}
              >
                Next <ChevronRight size={14} />
              </button>
            </div>
          </div>

          {/* ─── MOBILE: Single chapter, navigable ─── */}
          <div className="md:hidden mt-8">
            {/* Chapter card */}
            <div
              className={`rounded-sm border overflow-hidden shadow-md transition-all duration-280 ${pageAnim}`}
              style={{ borderColor: ACCENT, backgroundColor: "#f5e8de" }}
            >
              {/* Card header */}
              <div
                className="flex items-center justify-between px-4 py-3"
                style={{
                  backgroundColor: "#f0e0d0",
                  borderBottom: `1px solid ${ACCENT}`,
                }}
              >
                <div>
                  <div
                    className="text-[10px] uppercase tracking-widest opacity-50 mb-0.5"
                    style={{ color: TEXT }}
                  >
                    Chapter {toRoman(current + 1)}
                  </div>
                  <div className="text-sm font-bold" style={{ color: TEXT }}>
                    {exp.company}
                  </div>
                  <div className="text-xs italic opacity-70" style={{ color: TEXT }}>
                    {exp.role}
                  </div>
                </div>
                <div className="text-right text-xs opacity-55" style={{ color: TEXT }}>
                  <div>{exp.year}</div>
                  <div className="flex items-center justify-end gap-0.5 mt-0.5">
                    <MapPin size={9} />{exp.location}
                  </div>
                </div>
              </div>

              {/* Card body */}
              <div className="p-4">
                {exp.description && (
                  <p className="text-xs italic leading-relaxed mb-3 opacity-80" style={{ color: TEXT }}>
                    {exp.description}
                  </p>
                )}
                {exp.achievements?.length > 0 && (
                  <ul className="space-y-2 mb-3">
                    {exp.achievements.map((item, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-1.5 text-xs leading-relaxed"
                        style={{ color: TEXT }}
                      >
                        <span className="mt-1 flex-shrink-0 opacity-40 text-[8px]" style={{ color: ACCENT }}>◆</span>
                        <span className="opacity-85">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {exp.technologies?.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-2" style={{ borderTop: `1px solid ${ACCENT}` }}>
                    {exp.technologies.map((t, j) => (
                      <span
                        key={j}
                        className="px-2 py-0.5 text-[10px] border rounded-full"
                        style={{ borderColor: ACCENT, color: TEXT }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Mobile navigation */}
            <div className="flex items-center justify-center gap-8 mt-5">
              <button
                onClick={() => navigate(current - 1)}
                disabled={current === 0}
                className="flex items-center gap-1 text-xs uppercase tracking-widest font-bold transition-opacity disabled:opacity-25"
                style={{ color: "var(--text-color)" }}
              >
                <ChevronLeft size={14} /> Prev
              </button>
              <span className="text-xs tracking-widest uppercase opacity-50" style={{ color: "var(--text-color)" }}>
                {current + 1} / {chapters.length}
              </span>
              <button
                onClick={() => navigate(current + 1)}
                disabled={current === chapters.length - 1}
                className="flex items-center gap-1 text-xs uppercase tracking-widest font-bold transition-opacity disabled:opacity-25"
                style={{ color: "var(--text-color)" }}
              >
                Next <ChevronRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <WaveDivider fillVar="--section-primary" variant="c" />
    </section>
  );
};

export default Experience;
