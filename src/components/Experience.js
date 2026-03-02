import { ChevronLeft, ChevronRight, ChevronDown, MapPin } from "lucide-react";
import { useState, useRef, useEffect, useCallback } from "react";
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

const TEXT  = "#3d2010";
const ACCENT = "var(--border-color)";

const Experience = ({ experienceRef }) => {
  const chapters = [...experiences].reverse();

  const [current,   setCurrent]   = useState(chapters.length - 1);
  const [animPhase, setAnimPhase] = useState("idle");

  const scrollRef       = useRef(null);
  const mobileScrollRef = useRef(null);
  const [showNudge,       setShowNudge]       = useState(false);
  const [showMobileNudge, setShowMobileNudge] = useState(false);

  // ── Navigation ────────────────────────────────────────────────────────────
  const navigate = (next) => {
    if (next === current || next < 0 || next >= chapters.length || animPhase !== "idle") return;
    const dir = next > current ? "next" : "prev";
    setAnimPhase(`exit-${dir}`);
    setTimeout(() => {
      setCurrent(next);
      setAnimPhase(`enter-${dir}`);
      setTimeout(() => setAnimPhase("idle"), 230);
    }, 230);
  };

  // ── Scroll-overflow detection ─────────────────────────────────────────────
  const checkNudge = useCallback((el, setter) => {
    if (!el) return;
    const overflows = el.scrollHeight > el.clientHeight + 4;
    const atBottom  = el.scrollHeight - el.scrollTop <= el.clientHeight + 4;
    setter(overflows && !atBottom);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTop = 0;
    const handler = () => checkNudge(el, setShowNudge);
    const t = setTimeout(handler, 60);
    el.addEventListener("scroll", handler);
    return () => { clearTimeout(t); el.removeEventListener("scroll", handler); };
  }, [current, checkNudge]);

  useEffect(() => {
    const el = mobileScrollRef.current;
    if (!el) return;
    el.scrollTop = 0;
    const handler = () => checkNudge(el, setShowMobileNudge);
    const t = setTimeout(handler, 60);
    el.addEventListener("scroll", handler);
    return () => { clearTimeout(t); el.removeEventListener("scroll", handler); };
  }, [current, checkNudge]);

  // ── Derived animation classes ─────────────────────────────────────────────
  const exp = chapters[current];

  const pageFlipClass =
    animPhase === "exit-next"  ? "page-flip-out-next" :
    animPhase === "enter-next" ? "page-flip-in-next"  :
    animPhase === "exit-prev"  ? "page-flip-out-prev" :
    animPhase === "enter-prev" ? "page-flip-in-prev"  : "";

  const leftFadeClass  = animPhase.startsWith("exit") ? "opacity-0" : "opacity-100";
  const mobileFadeClass = animPhase.startsWith("exit") ? "opacity-0" : "opacity-100";

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
          <SectionHeading text="The Study" subtitle="professional experiences" />

          {/* ─── DESKTOP: Two-page book spread ─── */}
          <div className="hidden md:block mt-10">
            <div className="relative mx-auto" style={{ maxWidth: "780px" }}>
              {/* Book shadow */}
              <div className="absolute inset-0 translate-x-3 translate-y-3 bg-black/30 rounded-sm pointer-events-none" />

              <div className="relative flex" style={{ height: "420px" }}>

                {/* ── Left page: chapter opener ── */}
                <div
                  className={`flex-1 flex flex-col items-center justify-center p-8 text-center border rounded-l-sm overflow-hidden transition-opacity duration-[230ms] ${leftFadeClass}`}
                  style={{ backgroundColor: "#f0e0d0", borderColor: ACCENT }}
                >
                  <span className="absolute top-4 left-5 text-xs opacity-30" style={{ color: ACCENT }}>
                    {(current + 1) * 2 - 1}
                  </span>

                  <div className="text-8xl font-serif font-bold opacity-[0.08] mb-2 select-none" style={{ color: ACCENT }}>
                    {toRoman(current + 1)}
                  </div>

                  <div className="flex items-center gap-2 w-full mb-6">
                    <div className="flex-1 h-px opacity-30" style={{ backgroundColor: ACCENT }} />
                    <div className="w-1.5 h-1.5 rotate-45 opacity-40" style={{ backgroundColor: ACCENT }} />
                    <div className="flex-1 h-px opacity-30" style={{ backgroundColor: ACCENT }} />
                  </div>

                  <div>
                    <div className="text-xs uppercase tracking-[0.2em] mb-2 opacity-50" style={{ color: TEXT }}>
                      Chapter {toRoman(current + 1)}
                    </div>
                    <h2 className="text-xl font-bold leading-tight mb-2" style={{ color: TEXT }}>
                      {exp.company}
                    </h2>
                    <p className="text-sm italic mb-4 opacity-75" style={{ color: TEXT }}>
                      {exp.role}
                    </p>
                    <div className="flex items-center justify-center gap-1 text-xs opacity-55" style={{ color: TEXT }}>
                      <MapPin size={10} />
                      <span>{exp.location}</span>
                    </div>
                    <div className="text-xs mt-1 opacity-50" style={{ color: TEXT }}>
                      {exp.year}
                    </div>
                  </div>

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
                    style={{ color: "#f5e8de", writingMode: "vertical-rl", transform: "rotate(180deg)" }}
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

                  {/* Chapter tabs — right edge, always on top */}
                  <div className="absolute right-0 top-0 bottom-0 flex flex-col" style={{ width: "18px", zIndex: 5 }}>
                    {chapters.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => navigate(i)}
                        className="flex-1 flex items-center justify-center transition-colors duration-200"
                        title={chapters[i].company}
                        style={{
                          backgroundColor: i === current ? ACCENT : "rgba(176,137,104,0.2)",
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

                  {/* Page number */}
                  <span className="absolute top-4 right-7 text-xs opacity-30 z-10" style={{ color: ACCENT }}>
                    {(current + 1) * 2}
                  </span>

                  {/* Flippable content — flex column so sections can be fixed/scrollable */}
                  <div className={`absolute inset-0 right-[18px] flex flex-col ${pageFlipClass}`}>

                    {/* Fixed: description */}
                    {exp.description && (
                      <div className="px-6 pt-8 pb-2 flex-shrink-0">
                        <p className="text-xs italic leading-relaxed opacity-80 text-justify" style={{ color: TEXT }}>
                          {exp.description}
                        </p>
                        <div className="mt-2 h-px opacity-20" style={{ backgroundColor: ACCENT }} />
                      </div>
                    )}

                    {/* Scrollable: achievements only */}
                    <div className="flex-1 relative overflow-hidden">
                      <div
                        ref={scrollRef}
                        className={`absolute inset-0 overflow-y-auto px-6 ${exp.description ? "pt-2" : "pt-8"}`}
                        style={{ scrollbarWidth: "none" }}
                      >
                        {exp.achievements?.length > 0 ? (
                          <ul className="space-y-2">
                            {exp.achievements.map((item, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-1.5 text-[11px] leading-relaxed"
                                style={{ color: TEXT }}
                              >
                                <span className="mt-1 flex-shrink-0 opacity-40 text-[8px]" style={{ color: ACCENT }}>◆</span>
                                <span className="opacity-85 text-justify">{item}</span>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-[11px] italic opacity-40" style={{ color: TEXT }}>
                            More details coming soon.
                          </p>
                        )}
                        <div className="h-8" />
                      </div>

                      {/* Scroll fade — scoped to achievements area */}
                      <div
                        className={`absolute bottom-0 left-0 right-0 h-12 pointer-events-none z-10 transition-opacity duration-300 ${showNudge ? "opacity-100" : "opacity-0"}`}
                        style={{ background: "linear-gradient(to bottom, transparent, #f5e8de)" }}
                      />
                      <div
                        className={`absolute bottom-1.5 left-0 right-0 flex justify-center z-20 pointer-events-none transition-opacity duration-300 ${showNudge ? "opacity-100 animate-nudge-bounce" : "opacity-0"}`}
                      >
                        <ChevronDown size={13} style={{ color: ACCENT }} />
                      </div>
                    </div>

                    {/* Fixed: technologies */}
                    {exp.technologies?.length > 0 && (
                      <div className="px-6 py-2.5 flex-shrink-0" style={{ borderTop: `1px solid ${ACCENT}` }}>
                        <div className="flex flex-wrap gap-1.5">
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
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* ── Reader hint ── */}
            <p
              className="text-center text-[11px] font-bold tracking-wide mt-5 mb-1 select-none"
              style={{ color: "var(--text-color)", opacity: 0.45 }}
            >
              ✦&nbsp;&nbsp;flip through the chapters using the arrows or tabs&nbsp;&nbsp;✦
            </p>

            {/* ── Navigation with dot indicators ── */}
            <div className="flex items-center justify-center gap-8 mt-3">
              <button
                onClick={() => navigate(current - 1)}
                disabled={current === 0}
                className="flex items-center gap-1 text-xs uppercase tracking-widest font-bold transition-opacity disabled:opacity-25 hover:opacity-60"
                style={{ color: "var(--text-color)" }}
              >
                <ChevronLeft size={14} /> Prev
              </button>

              {/* Dot indicators */}
              <div className="flex items-center gap-2">
                {chapters.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => navigate(i)}
                    title={chapters[i].company}
                    className="transition-all duration-300 hover:opacity-80"
                    style={{
                      height: "8px",
                      width: i === current ? "22px" : "8px",
                      borderRadius: i === current ? "4px" : "50%",
                      backgroundColor:
                        i === current ? "var(--border-color)" : "rgba(176,137,104,0.35)",
                    }}
                  />
                ))}
              </div>

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
            <div
              className={`rounded-sm border overflow-hidden shadow-md transition-opacity duration-[230ms] ${mobileFadeClass}`}
              style={{ borderColor: ACCENT, backgroundColor: "#f5e8de" }}
            >
              {/* Card header */}
              <div
                className="flex items-center justify-between px-4 py-3"
                style={{ backgroundColor: "#f0e0d0", borderBottom: `1px solid ${ACCENT}` }}
              >
                <div>
                  <div className="text-[10px] uppercase tracking-widest opacity-50 mb-0.5" style={{ color: TEXT }}>
                    Chapter {toRoman(current + 1)}
                  </div>
                  <div className="text-sm font-bold" style={{ color: TEXT }}>{exp.company}</div>
                  <div className="text-xs italic opacity-70" style={{ color: TEXT }}>{exp.role}</div>
                </div>
                <div className="text-right text-xs opacity-55" style={{ color: TEXT }}>
                  <div>{exp.year}</div>
                  <div className="flex items-center justify-end gap-0.5 mt-0.5">
                    <MapPin size={9} />{exp.location}
                  </div>
                </div>
              </div>

              {/* Fixed: description */}
              {exp.description && (
                <div className="px-4 pt-3 pb-2 flex-shrink-0" style={{ borderBottom: `1px solid ${ACCENT}` }}>
                  <p className="text-xs italic leading-relaxed opacity-80 text-justify" style={{ color: TEXT }}>
                    {exp.description}
                  </p>
                </div>
              )}

              {/* Scrollable: achievements */}
              <div className="relative" style={{ maxHeight: "220px" }}>
                <div
                  ref={mobileScrollRef}
                  className="overflow-y-auto p-4"
                  style={{ scrollbarWidth: "none" }}
                >
                  {exp.achievements?.length > 0 ? (
                    <ul className="space-y-2">
                      {exp.achievements.map((item, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-1.5 text-xs leading-relaxed"
                          style={{ color: TEXT }}
                        >
                          <span className="mt-1 flex-shrink-0 opacity-40 text-[8px]" style={{ color: ACCENT }}>◆</span>
                          <span className="opacity-85 text-justify">{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-xs italic opacity-40" style={{ color: TEXT }}>More details coming soon.</p>
                  )}
                  <div className="h-6" />
                </div>

                {/* Mobile scroll fade */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-10 pointer-events-none transition-opacity duration-300 ${showMobileNudge ? "opacity-100" : "opacity-0"}`}
                  style={{ background: "linear-gradient(to bottom, transparent, #f5e8de)" }}
                />
                <div
                  className={`absolute bottom-1.5 left-0 right-0 flex justify-center pointer-events-none transition-opacity duration-300 ${showMobileNudge ? "opacity-100 animate-nudge-bounce" : "opacity-0"}`}
                >
                  <ChevronDown size={12} style={{ color: ACCENT }} />
                </div>
              </div>

              {/* Fixed: technologies */}
              {exp.technologies?.length > 0 && (
                <div className="px-4 py-2.5 flex-shrink-0" style={{ borderTop: `1px solid ${ACCENT}` }}>
                  <div className="flex flex-wrap gap-1.5">
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
                </div>
              )}
            </div>

            {/* Mobile reader hint */}
            <p
              className="text-center text-[10px] font-bold tracking-wide mt-4 mb-1 select-none"
              style={{ color: "var(--text-color)", opacity: 0.45 }}
            >
              ✦&nbsp;&nbsp;tap the arrows to flip through chapters&nbsp;&nbsp;✦
            </p>

            {/* Mobile navigation with dots */}
            <div className="flex items-center justify-center gap-6 mt-2">
              <button
                onClick={() => navigate(current - 1)}
                disabled={current === 0}
                className="flex items-center gap-1 text-xs uppercase tracking-widest font-bold transition-opacity disabled:opacity-25"
                style={{ color: "var(--text-color)" }}
              >
                <ChevronLeft size={14} /> Prev
              </button>

              <div className="flex items-center gap-1.5">
                {chapters.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => navigate(i)}
                    className="transition-all duration-300"
                    style={{
                      height: "6px",
                      width: i === current ? "16px" : "6px",
                      borderRadius: i === current ? "3px" : "50%",
                      backgroundColor:
                        i === current ? "var(--border-color)" : "rgba(176,137,104,0.35)",
                    }}
                  />
                ))}
              </div>

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
