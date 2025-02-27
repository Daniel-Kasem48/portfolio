import { FC, useState } from "react";

const NavBar: FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { href: "#aboutme", label: "About me" },
        { href: "#skills", label: "Skills" },
        { href: "#projects", label: "Projects" },
        { href: "#work-experiences", label: "Work Experience" },
        { href: "#educations", label: "Education" },
        { href: "#certificates", label: "Certificates" },
        { href: "#challenges", label: "Challenges" },
    ];

    return (
        <div className="z-30 h-[80px] shadow-xl fixed top-0 w-full bg-black">
            <div className="flex justify-between h-full items-center container mx-auto px-5">
                {/* Logo / Name */}
                {/*<div className="items-center flex h-full justify-center">*/}
                {/*    <span className="text-4xl font-bold text-[#6881cb]">Daniel</span>*/}
                {/*    <span className="text-[#6881cb] text-4xl">.</span>*/}
                {/*</div>*/}

                {/* Hamburger Menu for Mobile */}
                <button
                    className="md:hidden text-white focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                        />
                    </svg>
                </button>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-5">
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="text-white hover:text-[#6881cb] transition-all duration-300"
                        >
                            {item.label}
                        </a>
                    ))}
                    <a
                        href="cv.pdf"
                        download="Daniel-CV.pdf"
                        className="border border-white text-white px-4 py-2 rounded-lg hover:bg-white hover:text-black transition-all duration-300 inline-flex items-center"
                    >
                        <span>Download CV</span>
                    </a>
                </div>
            </div>

            {/* Mobile Dropdown */}
            {isOpen && (
                <div className="md:hidden bg-black w-full absolute top-[60px] left-[0] shadow-xl">
                    <div className="flex flex-col items-center py-4 space-y-4">
                        {navItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="text-white hover:text-[#6881cb] transition-all duration-300"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.label}
                            </a>
                        ))}
                        <a
                            href="cv.pdf"
                            download="Daniel-CV.pdf"
                            className="border border-white text-white px-4 py-2 rounded-lg hover:bg-white hover:text-black transition-all duration-300 inline-flex items-center"
                            onClick={() => setIsOpen(false)}
                        >
                            <span>Download CV</span>
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
};

export default NavBar;