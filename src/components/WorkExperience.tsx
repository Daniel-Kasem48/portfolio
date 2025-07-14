import  {FC} from "react";

export interface IWorkExperience {
    title: string
    date: string
    company: string
    location: string
    description: string[]
    highlights?: string[]
    color?: string
    gradient?: string
}

const WorkExperience: FC<{ workExperience: IWorkExperience }> = ({ workExperience }) => {
  const { title, company, date, description } = workExperience;
  
  return (
    <div className="group flex flex-col rounded-2xl bg-white/10 backdrop-blur-xl border-2 border-cyan-400/20 shadow-2xl hover:shadow-cyan-400/40 hover:border-cyan-400/60 transition-all duration-500 p-6 text-white relative overflow-hidden hover:scale-[1.03] my-6">
      {/* Accent Bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 opacity-80 rounded-t-2xl" />
      <div className="flex flex-col md:flex-row md:justify-between w-full md:items-center gap-1 md:gap-0 mb-2">
        <div>
          <p className="font-bold leading-tight text-lg flex items-center gap-2">
            <span className="inline-block align-middle">
              <svg className="w-5 h-5 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="13" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>
            </span>
            {company}
          </p>
          <p className="text-sm text-cyan-100 leading-tight font-semibold">{title}</p>
        </div>
        <div className="mt-1 md:mt-0 md:ml-auto text-xs text-gray-400 whitespace-nowrap font-mono">{date}</div>
      </div>
      {description && (
        <ul className="mt-4 space-y-3 pl-2">
          {description.map((desc, index) => (
            <li key={index} className="text-sm text-cyan-50 flex items-start gap-2">
              <span className="mt-1 text-cyan-300">•</span>
              <span>{desc}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default WorkExperience;
