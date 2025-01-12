const Experience = ({experienceRef}) => {
    return(
        <section
        ref={experienceRef}
        className="min-h-screen bg-lightPrimaryColor text-lightText dark:bg-darkPrimaryColor dark:text-darkText theme-transition py-20"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-8 hover:scale-105 hover:text-blue-500 transition-transform duration-300">
            Experience
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-2">
                  Senior Developer
                </h3>
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