import {FC} from "react";
import Email from "../assets/icons/Email";
import Phone from "../assets/icons/Phone";
import WhatsApp from "../assets/icons/WhatsApp";
import LinkedIn from "../assets/icons/LinkedIn";
import Location from "../assets/icons/Location";
import Date from "../assets/icons/Date";
import Stackoverflow from "../assets/icons/StackOverFlow";
import Typewriter from "typewriter-effect";
import GitHub from "../assets/icons/Github.tsx";

export const bioText = `
        I am a seasoned web developer with a strong focus on backend technologies. My expertise spans PHP with the Laravel framework, Node.js using Express and Nest.js. Recently, I've expanded my skill set to include Golang, where I've been able to harness its power for efficient and scalable backend solutions. I am proficient in working with both MySQL and PostgreSQL databases, always prioritizing project success and delivering high-quality results. My commitment to continuous learning ensures that I stay aligned with the latest industry trends and best practices.
    `;


const Bio: FC = () => {

    const contactItems = [
        {
            icon: <Email/>,
            text: "daniel.f.kasem@gmail.com",
            href: "mailto:daniel.f.kasem@gmail.com",
        },
        {
            icon: <Phone/>,
            text: "+963 931 869 085",
            href: "tel:+963931869085",
        },
        {
            icon: <WhatsApp/>,
            text: "+963 931 869 085",
            href: "https://wa.me/+963931869085",
            target: "_blank",
        },
        {
            icon: <Location/>,
            text: (
                <>
                    <a
                        href="https://www.google.com/maps/place/Latakia,+Syria"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                    >
                        Syria, Latakia
                    </a>
                    <span className="text-cyan-400 text-sm italic ml-2">(Willing To Relocate)</span>
                </>
            ),
        },
        {
            icon: <Date/>,
            text: "March 22th, 1999",
        },
        {
            icon: <LinkedIn/>,
            text: "/in/daniel-kasem",
            href: "https://www.linkedin.com/in/daniel-kasem-70bba9a4/",
            target: "_blank",
        },
        {
            icon: <GitHub/>,
            text: "daniel-kasem",
            href: "https://github.com/specture48",
            target: "_blank",
        },
        {
            icon: <Stackoverflow/>,
            text: "daniel-kasem",
            href: "https://stackoverflow.com/users/21441411/daniel-kasem",
            target: "_blank",
        },
    ];

    return (
        <section id="aboutme" className="py-20 bg-gradient-to-b from-gray-900 to-black text-white">
            <div className="container mx-auto px-4">
                
                {/* Section Title */}
                <div className="container mx-auto">
                    <p
                        className="
          text-4xl md:text-6xl lg:text-8xl
    w-full
    mt-6
    text-center
    font-extrabold
    mb-6
    text-navy-blue
    bg-black
    border-b-4
    border-navy-blue
    tracking-tight
    shadow-lg
  "
                    >
                        About Me
                    </p>
                </div>
                <div className="flex flex-col lg:flex-row gap-12 mt-8">
                    {/* Contact Info */}
                    <div className="lg:w-1/3 flex flex-col items-center">
                        <div className="bg-gray-800 bg-opacity-80 backdrop-blur-md p-6 rounded-xl md:border border-cyan-700 shadow-lg w-full max-w-xs">
                            {/* Profile Image Placeholder */}
                            <div className="flex justify-center mb-6">
                                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-cyan-400 to-blue-700 flex items-center justify-center text-4xl font-bold text-white shadow-lg border-4 border-cyan-700">
                                    DK
                                </div>
                            </div>
                            <h3 className="text-2xl font-semibold text-cyan-400 mb-6 text-center">Contact</h3>
                            <div className="space-y-4">
                                {contactItems.map((item, index) => (
                                    <div key={index} className="flex items-center gap-4 group">
                                        <span className="text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                                            {item.icon}
                                        </span>
                                        {item.href ? (
                                            <a
                                                href={item.href}
                                                target={item.target || "_self"}
                                                rel={item.target ? "noopener noreferrer" : undefined}
                                                className="text-gray-300 group-hover:text-white transition-colors duration-300"
                                            >
                                                {item.text}
                                            </a>
                                        ) : (
                                            <span className="text-gray-300">{item.text}</span>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* Divider for mobile */}
                    <div className="block lg:hidden my-8">
                        <div className="h-1 w-2/3 mx-auto bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full opacity-60"></div>
                    </div>
                    {/* Bio Text */}
                    <div className="lg:w-2/3 flex flex-col justify-center items-center">
                        <div className="bg-gradient-to-br from-gray-800 to-gray-900 bg-opacity-90 p-8 rounded-2xl border-l-8 border-cyan-500 shadow-2xl w-full max-w-2xl relative">
                            {/* Bio Text with Typewriter */}
                            <div className="hidden md:block">
                                <Typewriter
                                    options={{
                                        cursor: "_",
                                        delay: 20, // Faster typing speed
                                        deleteSpeed: 30,
                                    }}
                                    onInit={(typewriter) => {
                                        typewriter
                                            .typeString(
                                                `<blockquote class=\"text-lg md:text-2xl leading-relaxed text-gray-400 font-light pl-6 rounded-bl-2xl\">${bioText}</blockquote>`
                                            )
                                            .start();
                                    }}
                                />
                            </div>
                            <blockquote className="block md:hidden text-lg leading-relaxed text-gray-400 font-light pl-6 rounded-bl-2xl">
                                {bioText}
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Bio;