import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import React, { useEffect, useRef, useState } from "react";
import Contact from "./Contact";
import Education from "./Education";
import Experience from "./Experience";
import Interests from "./Interests";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Skills from "./Skills";

const LandingPage = () => {
  const [theme, setTheme] = useState("light");
  const [isLargeScreen, setIsLargeScreen] = useState(true);
  const [activeSection, setActiveSection] = useState("");

  // Refs for sections
  const interestsRef = useRef(null);
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);
  const educationRef = useRef(null);
  const projectsRef = useRef(null);
  const positionsOfResponsibilityRef = useRef(null);
  const certificationsRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      const sections = {
        interests: interestsRef.current?.offsetTop,
        education: educationRef.current?.offsetTop,
        skills: skillsRef.current?.offsetTop,
        experience: experienceRef.current?.offsetTop,
        projects: projectsRef.current?.offsetTop,
        contact: contactRef.current?.offsetTop,
      };

      let currentSection = "";
      Object.entries(sections).forEach(([key, value]) => {
        if (value && scrollPosition >= value) {
          currentSection = key;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen theme-transition bg-lightBg text-lightText dark:bg-darkBg dark:text-darkText custom-scrollbar font-body">
      {/* Hero Section */}
      <section className="relative min-h-screen pt-16">
        {/* Split Background - Only visible on large screens */}
        <div className="absolute inset-0 hidden md:flex">
          <div className="w-1/3 bg-lightBg text-lightText dark:bg-darkBg dark:text-darkText theme-transition" />
          <div className="w-2/3 bg-lightPrimaryColor text-lightText dark:bg-darkPrimaryColor dark:text-darkText theme-transition" />
        </div>

        {/* Mobile Background */}
        <div className="absolute inset-0 md:hidden">
          <div className="w-full h-full bg-lightBg text-lightText dark:bg-darkBg dark:text-darkText theme-transition" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 container mx-auto px-4 py-2">
          {/* Animation - Only visible on large screens */}
          {isLargeScreen && (
            <div className="absolute left-1/4 transform -translate-x-1/2 top-1/4 w-80 h-80">
              <DotLottieReact
                src="https://lottie.host/d06ccf19-96dd-411a-aad0-f12d2d683e06/10sJ6f4hbw.lottie"
                loop
                autoplay
              />
            </div>
          )}

          <div className="md:w-2/3 md:ml-auto">
            <Navbar
              isLargeScreen={isLargeScreen}
              activeSection={activeSection}
              interestsRef={interestsRef}
              skillsRef={skillsRef}
              experienceRef={experienceRef}
              educationRef={educationRef}
              projectsRef={projectsRef}
              contactRef={contactRef}
              theme={theme}
              setTheme={setTheme}
            />

            {/* Text Content */}
            <div className="grid md:grid-cols-4 items-center min-h-[calc(100vh-8rem)]">
              <div className="md:col-span-1"></div>
              <div className="md:col-span-3 text-center md:text-left fade-in space-y-6">
                {/* Optional Profile Picture */}
                <div className="mb-6 flex justify-center md:justify-start">
                  <img
                    src="profile-2.jpg"
                    alt="Vanshika Agrawal"
                    className="rounded-full w-32 h-32 object-cover shadow-lg hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <h1 className="text-2xl md:text-3xl font-heading font-bold mb-4 hover:text-blue-500 transition-colors duration-300">
                  Hi, I'm Vanshika Agrawal
                </h1>

                <p className="text-sm md:text-base leading-relaxed">
                  As a Full Stack Developer with two years of industry
                  experience, I specialize in creating scalable, user-focused
                  applications using modern technologies like React.js, Java,
                  and SQL. My expertise spans frontend development, backend
                  systems, and database optimization, complemented by my pursuit
                  of an M.S. in Computer Science at UMass Amherst, where I
                  deepen my skills in system design and data-driven
                  problem-solving.
                </p>

                <p className="text-sm md:text-base leading-relaxed">
                  Passionate about addressing real-world challenges, I aspire to
                  work on impactful projects that extend beyond traditional
                  corporate settings. With a focus on innovation and growth, I
                  aim to create meaningful, sustainable solutions.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Interests interestsRef={interestsRef} isLargeScreen={isLargeScreen} />
      <Education educationRef={educationRef} />
      <Skills skillsRef={skillsRef} isLargeScreen={isLargeScreen} />
      <Experience experienceRef={experienceRef} />
      <Projects projectsRef={projectsRef}></Projects>
      <Contact contactRef={contactRef} />
    </div>
  );
};

export default LandingPage;
