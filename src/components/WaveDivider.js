// Organic wave paths — all use viewBox="0 0 1440 50"
// The filled region covers y=path-edge down to y=50 (bottom),
// so the fill color is the bg of the NEXT section.
const WAVES = {
  // Gentle two-cycle sine — smooth and flowing
  a: "M0,25 C360,50 720,0 1080,25 C1260,37 1380,12 1440,20 L1440,50 L0,50 Z",
  // Three irregular bumps — more organic feel
  b: "M0,40 C180,10 340,48 520,28 C700,8 860,45 1040,22 C1220,0 1360,38 1440,18 L1440,50 L0,50 Z",
  // Asymmetric single swell — relaxed
  c: "M0,20 C200,50 500,5 720,35 C940,50 1200,10 1440,30 L1440,50 L0,50 Z",
  // Four varied bumps — lively and uneven
  d: "M0,35 C160,15 360,48 560,25 C760,2 960,45 1160,20 C1300,5 1400,35 1440,25 L1440,50 L0,50 Z",
};

/**
 * WaveDivider — place inside a `position: relative` section, anchors to its bottom.
 *
 * fillVar   — CSS variable name (e.g. "--section-primary") for the next section's bg color
 * variant   — wave shape: "a" | "b" | "c" | "d"
 * flip      — mirror horizontally for variety
 * height    — wave height in px (default 50)
 */
const WaveDivider = ({ fillVar, variant = "a", flip = false, height = 50 }) => (
  <div
    aria-hidden="true"
    style={{
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      lineHeight: 0,
      overflow: "hidden",
    }}
  >
    <svg
      viewBox={`0 0 1440 ${height}`}
      preserveAspectRatio="none"
      style={{
        display: "block",
        width: "100%",
        height: `${height}px`,
        transform: flip ? "scaleX(-1)" : undefined,
      }}
    >
      <path d={WAVES[variant]} style={{ fill: `var(${fillVar})` }} />
    </svg>
  </div>
);

export default WaveDivider;
