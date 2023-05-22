
  const ExperienceCard =  ({ title, desc, year, company, companyLink }: any) => {
     return (
        <div className="relative experience-card border p-4 rounded-md shadow-xl bg-white  dark:bg-[#0e0d0d] z-10 mx-4">
     
          <div className="flex flex-row justify-between">
            <h1 className="font-semibold text-xl">{title}</h1>
            <h1 className="font-thin text-l ">{year}</h1>
          </div>
          <a href={companyLink} className="text-gray-500">
            {company}
          </a>
          <p className="text-gray-600 dark:text-gray-400 my-2">{desc}</p>
        </div>
      );
  }
  
  export default ExperienceCard