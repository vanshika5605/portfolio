const Interests = ({aboutRef}) => {
    return (
<section
        ref={aboutRef}
        className="min-h-screen bg-lightTertiaryColor text-lightText dark:bg-darkTertiaryColor dark:text-darkText theme-transition py-20"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-8 hover:scale-105 hover:text-blue-500 transition-transform duration-300">
            About Us
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold hover:scale-105 hover:text-blue-500 transition-transform duration-300">
                Our Mission
              </h3>
              <p className="text-lg">
                We strive to create innovative digital solutions that make a
                real difference in people's lives. Our approach combines
                creativity with technical excellence.
              </p>
            </div>
          </div>
        </div>
      </section>
    )
};

export default Interests;