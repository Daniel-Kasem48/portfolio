import  {FC} from "react";
import Work from "../assets/icons/Work";

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

export default WorkExperience;
