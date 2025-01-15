const Contact = ({ contactRef }) => {
  return (
    <section
      ref={contactRef}
      className="bg-lightTertiaryColor text-lightText dark:bg-darkTertiaryColor dark:text-darkText theme-transition py-12 md:py-20"
    >
      <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-12 text-center hover:scale-105 hover:text-blue-500 transition-transform duration-300">
          Contact Me
          <div className="h-1 w-20 bg-blue-500 mx-auto mt-2"></div>
        </h2>
        <div
          className="max-w-2xl mx-auto bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-lg animate-fadeInUp"
          style={{
            animation: "fadeInUp 1s ease-out",
          }}
        >
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                className="w-full p-3 rounded-lg bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                className="w-full p-3 rounded-lg bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                rows={4}
                className="w-full p-3 rounded-lg bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
              />
            </div>
            <button
              type="submit"
              className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
