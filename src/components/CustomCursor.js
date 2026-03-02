import { useEffect, useRef } from "react";

const TRAIL_COUNT = 10;

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const trailRefs = useRef([]);
  const mouse = useRef({ x: -200, y: -200 });
  const trail = useRef(
    Array.from({ length: TRAIL_COUNT }, () => ({ x: -200, y: -200 }))
  );
  const raf = useRef(null);

  useEffect(() => {
    // Only activate on devices with a real mouse pointer
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const onMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };

    const tick = () => {
      // Shift trail: prepend latest mouse pos, drop oldest
      trail.current = [
        { ...mouse.current },
        ...trail.current.slice(0, TRAIL_COUNT - 1),
      ];

      // Move pencil cursor so its tip (bottom-left of SVG) is at mouse pos
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${mouse.current.x}px, ${mouse.current.y}px)`;
      }

      // Update each trail dot
      trailRefs.current.forEach((dot, i) => {
        if (!dot) return;
        const { x, y } = trail.current[i];
        const size = Math.max(2, 7 - i * 0.55);
        const opacity = ((TRAIL_COUNT - i) / TRAIL_COUNT) * 0.45;
        dot.style.width = `${size}px`;
        dot.style.height = `${size}px`;
        dot.style.opacity = opacity;
        dot.style.transform = `translate(${x - size / 2}px, ${y - size / 2}px)`;
      });

      raf.current = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove);
    raf.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <>
      {/* Pencil cursor — tip of pencil aligns to mouse hotspot */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        style={{ willChange: "transform" }}
      >
        {/*
          The pencil SVG points to the bottom-left.
          Tip in 24x24 viewBox is near (2, 22).
          At 20px render size, scale = 20/24 → tip ≈ (1.7, 18.3).
          We translate the SVG by (-1.7, -18.3) so the tip lands at the
          cursor element's origin, which is placed at (mouseX, mouseY).
        */}
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          style={{
            transform: "translate(-2px, -18px)",
            willChange: "transform",
          }}
        >
          <path
            d="M17 3a2.83 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"
            fill="var(--border-color)"
            stroke="var(--border-color)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Fading dot trail */}
      {Array.from({ length: TRAIL_COUNT }).map((_, i) => (
        <div
          key={i}
          ref={(el) => (trailRefs.current[i] = el)}
          className="fixed top-0 left-0 z-[9998] pointer-events-none rounded-full"
          style={{
            backgroundColor: "var(--border-color)",
            willChange: "transform, opacity, width, height",
          }}
        />
      ))}
    </>
  );
};

export default CustomCursor;
