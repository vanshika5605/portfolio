import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import React, { useEffect, useRef, useState } from "react";
import Contact from "./Contact";
import Education from "./Education";
import Experience from "./Experience";
import Interests from "./Interests";
import Navbar from "./Navbar";

const LandingPage = () => {
  const [theme, setTheme] = useState("light");
  const [isLargeScreen, setIsLargeScreen] = useState(true);
  const [activeSection, setActiveSection] = useState(""); // Changed to empty string initially

  // Refs for sections
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const educationRef = useRef(null);
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

  // Separate useEffect for scroll handling
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      const sections = {
        about: aboutRef.current?.offsetTop,
        experience: experienceRef.current?.offsetTop,
        education: educationRef.current?.offsetTop,
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
        <div className="relative z-10 container mx-auto px-4 py-16">
          {/* Animation positioned on top of the split */}
          <div className="absolute left-1/4 transform -translate-x-1/2 top-1/4 w-64 h-64">
            {isLargeScreen && (
              <DotLottieReact
                src="https://lottie.host/d06ccf19-96dd-411a-aad0-f12d2d683e06/10sJ6f4hbw.lottie"
                loop
                autoplay
              />
            )}
          </div>
          <div className="md:w-2/3 md:ml-auto">
            <Navbar
              isLargeScreen={isLargeScreen}
              activeSection={activeSection}
              aboutRef={aboutRef}
              experienceRef={experienceRef}
              educationRef={educationRef}
              contactRef={contactRef}
              theme={theme}
              setTheme={setTheme}
            ></Navbar>
            {/* Text Content */}

            <div className="grid md:grid-cols-2 gap-8 items-center min-h-[calc(100vh-8rem)]">
              <div className="md:col-start-2 text-center md:text-left fade-in">
                <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4 hover:scale-105 hover:text-blue-500 transition-transform duration-300">
                  Welcome
                </h1>
                <p className="text-xl md:text-2xl">
                  Bringing ideas to life through code
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Interests aboutRef={aboutRef}></Interests>
      <Experience experienceRef={experienceRef}></Experience>
      <Education educationRef={educationRef}></Education>
      <Contact contactRef={contactRef}></Contact>
    </div>
  );
};

export default LandingPage;
