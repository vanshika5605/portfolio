import React from "react";
import experiences from "../data/experiences.json";
import SectionHeading from "./SectionHeading";
import TimelineItem from "./TimelineItem";

const Experience = ({ experienceRef }) => {
  return (
    <section
      className="bg-lightTertiaryColor text-lightText dark:bg-darkTertiaryColor dark:text-darkText theme-transition"
      ref={experienceRef}
    >
      <div className="relative bg-[#e8d1c0] dark:bg-[#3d2b1f] p-4 md:p-12 rounded-lg shadow-inner text-lightText dark:text-darkText">
        {/* Background patterns remain the same */}
        <div
          className="absolute inset-0 rounded-lg opacity-90"
          style={{
            backgroundImage: `
              linear-gradient(335deg, var(--pattern-color) 23px, transparent 23px),
              linear-gradient(155deg, var(--pattern-color) 23px, transparent 23px),
              linear-gradient(335deg, var(--pattern-color) 23px, transparent 23px),
              linear-gradient(155deg, var(--pattern-color) 23px, transparent 23px)
            `,
            backgroundSize: "58px 58px",
            backgroundPosition: "0px 2px, 4px 35px, 29px 31px, 34px 6px",
            backgroundColor: "var(--bg-color)",
            "--pattern-color": "var(--tw-prose-pre-bg, #b8997a)",
            "--bg-color": "var(--tw-prose-pre-bg, #d4b595)",
          }}
        />

        <div
          className="absolute inset-0 rounded-lg opacity-20 dark:opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(var(--grid-color) 1px, transparent 1px),
              linear-gradient(90deg, var(--grid-color) 1px, transparent 1px)
            `,
            backgroundSize: "29px 15px",
            "--grid-color": "var(--tw-prose-pre-bg, #000)",
          }}
        />

        <div className="relative" style={{ zIndex: 3 }}>
          <SectionHeading text="Professional Experience"></SectionHeading>
        </div>

        <div className="max-w-8xl mx-auto p-4 md:p-8">
          <div className="relative">
            {/* Responsive ladder rails */}
            <div className="hidden md:block absolute left-1/2 -ml-20 w-3 h-full bg-gradient-to-r from-amber-700 to-amber-800 rounded-full dark:from-amber-900 dark:to-amber-950" />
            <div className="hidden md:block absolute left-1/2 ml-20 w-3 h-full bg-gradient-to-r from-amber-700 to-amber-800 rounded-full dark:from-amber-900 dark:to-amber-950" />

            {/* Mobile vertical rail */}
            <div className="md:hidden absolute left-1/2 -ml-1.5 w-3 h-full bg-gradient-to-b from-amber-700 to-amber-800 rounded-full dark:from-amber-900 dark:to-amber-950" />

            {/* Timeline items */}
            <div className="relative space-y-8">
              {experiences.map((exp, index) => (
                <TimelineItem
                  key={index}
                  experience={exp}
                  isEven={index % 2 === 0}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
