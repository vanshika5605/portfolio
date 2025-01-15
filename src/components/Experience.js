const Experience = ({ experienceRef }) => {
  return (
    <section
      ref={experienceRef}
      className="bg-lightTertiaryColor text-lightText dark:bg-darkTertiaryColor dark:text-darkText theme-transition py-12 md:py-20"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center hover:scale-105 hover:text-blue-500 transition-transform duration-300">
          Experience
          <div className="h-1 w-20 bg-blue-500 mx-auto mt-2"></div>
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-2">Senior Developer</h3>
              <p className="text-blue-500 mb-2">2020 - Present</p>
              <p className="text-lg">
                Led development teams in creating innovative web applications
                using modern technologies and best practices.
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-2">
                Full Stack Developer
              </h3>
              <p className="text-blue-500 mb-2">2018 - 2020</p>
              <p className="text-lg">
                Developed and maintained multiple web applications using React
                and Node.js.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
