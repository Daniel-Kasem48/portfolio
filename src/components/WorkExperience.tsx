import  {FC, useEffect, useRef} from "react";
import Work from "../assets/icons/Work";
import { usePostHogEvent } from '../hooks/usePostHogEvent';

export interface IWorkExperience {
    title: string
    date:string
    company:string
    location:string
    description:string[]
}

const WorkExperience: FC<{ workExperience: IWorkExperience }> = ({ workExperience }) => {
  const { title, company, date, description } = workExperience;
  
  return (
    <div className='my-2 flex rounded-md hover:bg-[#6881cb] transition-all duration-1000 flex-col py-3 px-2 text-white'>

      <div className="flex">
      <div className="mr-2">
        <Work/>
      </div>

      <div className="flex justify-between w-full">
        <div>
          <p className="font-bold">{company}</p>
          <p>{title}</p>
        </div>
        <div className="ml-auto">{date}</div>
      </div>

      
    </div>
    <div>
      {description && (
        <ul className="mt-4 list-disc pl-5">
          {description.map((desc, index) => (
            <li key={index} className="text-sm">
              {desc}
            </li>
          ))}
        </ul>
      )}
      </div>
    </div>
  );
};

const WorkExperienceSection: FC = () => {
    const workRef = useRef(null);
    const track = usePostHogEvent();
    useEffect(() => {
        const ref = workRef.current;
        if (!ref) return;
        let hasTracked = false;
        const observer = new window.IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasTracked) {
                    track('section_viewed', { section: 'Work Experience' });
                    hasTracked = true;
                }
            },
            { threshold: 0.3 }
        );
        observer.observe(ref);
        return () => observer.disconnect();
    }, [track]);

    return (
        <section id="work-experience" ref={workRef} className="...">
            {/* Rest of the component code */}
        </section>
    );
};

export default WorkExperience;
