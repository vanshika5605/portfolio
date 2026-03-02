const SectionHeading = ({ text, subtitle }) => {
  return (
    <div className="mb-12 text-center">
      <h2 className="text-3xl font-bold hover:scale-105 hover:text-[#9a6040] dark:hover:text-[#d4a878] transition-transform duration-300 inline-block">
        {text}
        <div className="h-1 w-20 bg-[#9a6040] dark:bg-[#d4a878] mx-auto mt-2" />
      </h2>
      {subtitle && (
        <p className="mt-2 text-xs normal-case tracking-widest opacity-50 font-body">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
