import {FC, useRef} from "react";

import Education, {IEducation} from "./Education.tsx";



const educations: IEducation[] = [
    {
        institution: "Syrian Virtual University",
        title: "Master's in Web Science",
        date: "Oct 2022 - Present",
    },
    {
        institution: "Tishreen University",
        title: "Bachelor of Informatics Engineering",
        date: "Sep 2016 - Dec 2021",
    },

];


const Educations: FC = () => {
    const educationsRef = useRef<HTMLDivElement>(null);
    // const isVisible = useIntersectionObserver(educationsRef, {threshold: 0.1});

    return (
        <section id="educations" ref={educationsRef}>
            <div>
                <div className="container mx-auto">

                    <p
                        className="
    text-8xl
    w-full
    mt-10
    text-center
    font-extrabold
    mb-10
    text-navy-blue
    bg-black
    border-b-4
    border-navy-blue
    tracking-tight
    shadow-lg
  "
                    >
                        Education
                    </p>
                </div>
                <div
                    className="
            w-full
            mx-auto
            container
          "
                >
                    {educations.map((p, index) => (
                        <Education key={index} education={p}/>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Educations;