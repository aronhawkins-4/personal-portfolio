export const EducationSection = () => {
  return (
    <div className="w-full max-w-7xl m-auto flex flex-col gap-4 items-start pb-16 self-start px-8 md:px-16">
      <h2 className="text-6xl font-bold bg-gradient-to-r from-blue-500 via-red-400 to-rose-500 bg-clip-text text-transparent">
        Education
      </h2>
      <div className="py-8 border-b border-white w-full flex justify-between items-end card-hover">
        <div className="flex flex-col gap-2">
          <h3 className="text-3xl uppercase font-semibold">
            Arizona State University
          </h3>
          <p className="text-lg text-gray-300">
            Bachelor&apos;s Degree – Computer Science
          </p>
        </div>
        <p className="text-lg text-gray-300">2020 - 2022</p>
      </div>
    </div>
  );
};
