const SectionHeading = ({text}) => {
    return (
        <h2 className="text-3xl font-bold mb-12 text-center hover:scale-105 hover:text-[#9a6040] dark:hover:text-[#d4a878] transition-transform duration-300">
          {text}
          <div className="h-1 w-20 bg-[#9a6040] dark:bg-[#d4a878] mx-auto mt-2"></div>
        </h2>
    );
}

export default SectionHeading;