import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
const Contact = ({ contactRef }) => {
  return (
    <section
      className="text-lightText dark:text-darkText theme-transition"
      ref={contactRef}
    >
      <div className="min-h-[400px] bg-lightTertiaryColor text-lightText dark:bg-darkTertiaryColor dark:text-darkText p-20 relative overflow-hidden">
        <div className="container mx-auto max-w-8xl flex flex-col md:flex-row items-center justify-between">
          {/* Text Content */}
          <div className="w-full md:w-1/2 space-y-6 z-10">
            <h1 className="text-6xl font-bold mb-8">Leave a Note</h1>

            <p className="text-2xl font-light">I'm always up for a chat.</p>

            <div className="space-y-2">
              <p className="text-xl">
                Pop me an email{" "}
                <Mail className="inline-block w-5 h-5 align-middle ml-1" /> at{" "}
                <a
                  href="mailto:vanagrawal@umass.edu"
                  className="text-[#9a6040] dark:text-[#d4a878] hover:opacity-75 transition-opacity underline"
                >
                  vanagrawal@umass.edu
                </a>
              </p>
              <p className="text-xl">or give me a shout on social media.</p>
            </div>

            {/* Connect with me buttons */}
            <div className="inline-flex flex-wrap gap-3 mt-4">
              <a
                href="https://www.linkedin.com/in/vanshika-agrawal56/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-lightPrimaryColor text-lightText dark:bg-darkPrimaryColor dark:text-darkText hover:opacity-90 font-medium rounded-lg transition-colors theme-transition"
              >
                <Linkedin className="w-5 h-5" />
                <span>Connect with me</span>
              </a>
              <a
                href="https://github.com/vanshika5605"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-lightPrimaryColor text-lightText dark:bg-darkPrimaryColor dark:text-darkText hover:opacity-90 font-medium rounded-lg transition-colors theme-transition"
              >
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* Decorative Circle with Avatar */}
          <div className="relative w-full md:w-1/2 h-[300px] md:h-[400px] mt-8 md:mt-0">
            <div className="absolute right-0 top-1/2 -translate-y-1/2">
              <div className="w-[300px] h-[300px] bg-lightPrimaryColor dark:bg-darkPrimaryColor rounded-full flex items-center justify-center">
                {/* You can replace this with your own avatar image */}
                <div className="w-48 h-48 bg-lightTertiaryColor dark:bg-darkTertiaryColor rounded-full flex items-center justify-center">
                  <span className="text-6xl">👋</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-2/3 h-full">
          <div className="absolute inset-0 bg-lightPrimaryColor dark:bg-darkPrimaryColor opacity-60 rounded-l-full transform translate-x-1/4"></div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
