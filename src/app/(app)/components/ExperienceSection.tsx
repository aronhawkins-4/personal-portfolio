export const ExperienceSection = () => {
  return (
    <div className='w-full max-w-7xl flex flex-col gap-4 items-start pb-16  px-8 md:px-16' id='experience'>
      <h2 className='text-5xl sm:text-6xl font-bold bg-gradient-to-r from-blue-500 via-red-400 to-rose-500 bg-clip-text text-transparent'>Experience</h2>
      <div className='py-8 border-b border-white w-full flex flex-col sm:flex-row justify-between sm:items-end card-hover'>
        <div className='flex flex-col gap-2'>
          <h3 className='text-2xl sm:text-3xl uppercase font-semibold'>Higgins AI</h3>
          <p className='text-lg text-gray-300'>Head of Technology</p>
        </div>
        <p className='text-lg text-gray-300'>2023 - Present</p>
      </div>
      <div className='py-8 border-b border-white w-full flex flex-col sm:flex-row justify-between sm:items-end card-hover'>
        <div className='flex flex-col gap-2'>
          <h3 className='text-2xl sm:text-3xl uppercase font-semibold'>Sidekick Creative Agency</h3>
          <p className='text-lg text-gray-300'>Web Specialist</p>
        </div>
        <p className='text-lg text-gray-300'>2022 - Present</p>
      </div>
      <div className='py-8 border-b border-white w-full flex flex-col sm:flex-row justify-between sm:items-end card-hover'>
        <div className='flex flex-col gap-2'>
          <h3 className='text-2xl sm:text-3xl uppercase font-semibold'>Freelance Developer</h3>
        </div>
        <p className='text-lg text-gray-300'>2022 - Present</p>
      </div>
    </div>
  );
};
