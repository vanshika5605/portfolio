import React from "react";
import experiences from "../data/experiences.json";
import TimelineItem from "./TimelineItem";

const Experience = ({ experienceRef }) => {
  return (
    <section
      className="bg-lightTertiaryColor text-lightText dark:bg-darkTertiaryColor dark:text-darkText theme-transition"
      ref={experienceRef}
    >
      <div className="relative bg-[#e8d1c0] dark:bg-[#3d2b1f] p-12 rounded-lg shadow-inner text-lightText dark:text-darkText">
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
            "--bg-color": "var(--tw-prose-pre-bg, #d4b595)"
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
            "--grid-color": "var(--tw-prose-pre-bg, #000)"
          }}
        />

        {/* Title section with proper z-index */}
        <div className="relative z-20">
          <div className="flex flex-col items-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center hover:scale-105 hover:text-blue-500 transition-all duration-300">
              Professional Experience
            </h2>
            <div className="h-1 w-20 bg-blue-500 mb-8"></div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto p-8">
          <div className="relative">
            {/* Adjusted ladder vertical rails position for w-48 rung */}
            <div className="absolute left-1/2 -ml-20 w-3 h-full bg-gradient-to-r from-amber-700 to-amber-800 rounded-full dark:from-amber-900 dark:to-amber-950" />
            <div className="absolute left-1/2 ml-20 w-3 h-full bg-gradient-to-r from-amber-700 to-amber-800 rounded-full dark:from-amber-900 dark:to-amber-950" />

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