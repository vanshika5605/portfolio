const SectionHeading = ({text}) => {
    return (
        <h2 className="text-3xl font-bold mb-12 text-center hover:scale-105 hover:text-purple-700 dark:hover:text-purple-300 transition-transform duration-300">
          {text}
          <div className="h-1 w-20 bg-purple-700 dark:bg-purple-300 mx-auto mt-2"></div>
        </h2>
    );
}

export default SectionHeading;