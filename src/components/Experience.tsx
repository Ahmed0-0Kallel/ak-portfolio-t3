import userData from "../constatnts/data";
import ExperienceCard from "./ExperienceCard";
import { inter700 } from "./fonts";
import cn from "classnames";


export default function Experience() {
  return (
    <div className='flex flex-col  grow items-center justify-center'>
      
      <div className="max-w-6xl  mx-auto h-48 bg-transparent dark:bg-opacity-5 dark:bg-[#161616]">
        <div
          className={cn(
            inter700.className, '',
            " relative my-10 h-full w-fit whitespace-nowrap bg-gradient-to-br from-black via-transparent to-transparent bg-400% bg-clip-text py-3  text-4xl leading-5 text-transparent motion-safe:animate-background-pan dark:from-white dark:via-black xs:text-5xl sm:-mb-2 sm:pb-2 sm:text-6xl"
          )}
        >
          Experience
        </div>
      </div>
      <div className="bg-transparent -mt-14 animate-fadeIn ">
        <div className="grid grid-cols-1 bg-transparent  max-w-xl mx-auto pt-20">
          {/* Experience card */}
          {userData.experience.map((exp, idx) => (
            <>
              <ExperienceCard
                key={idx}
                title={exp.title}
                desc={exp.description}
                year={exp.duration}
                company={exp.company}
                companyLink={exp.companyLink}
              />
              {idx === userData.experience.length - 1 ? null : (
                <div className="divider-container flex flex-col items-center -mt-2">
                  <div className="w-4 h-4 bg-slate-100 rounded-full relative z-10">
                    <div className="w-4 h-4 bg-slate-100 rounded-full relative z-10 animate-ping"></div>
                  </div>
                  <div className="w-1 h-24 bg-gray-200 dark:bg-gray-500 rounded-full -mt-2"></div>
                </div>
              )}
            </>
          ))}
        </div>
      </div>
    </div>
  );
}