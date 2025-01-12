const Education = ({educationRef}) => {
    return (
        <section
        ref={educationRef}
        className="min-h-screen bg-lightTertiaryColor text-lightText dark:bg-darkTertiaryColor dark:text-darkText theme-transition py-20"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-8 hover:scale-105 hover:text-blue-500 transition-transform duration-300">
            Education
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-2">
                  Master's in Computer Science
                </h3>
                <p className="text-blue-500 mb-2">2016 - 2018</p>
                <p className="text-lg">
                  Specialized in Software Engineering and Artificial
                  Intelligence
                </p>
              </div>
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-2">
                  Bachelor's in Computer Science
                </h3>
                <p className="text-blue-500 mb-2">2012 - 2016</p>
                <p className="text-lg">
                  Foundation in programming, algorithms, and software
                  development
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
};

export default Education;