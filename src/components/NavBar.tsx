import  { FC, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const NavBar: FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    // Hide body scroll when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const navItems = [
        { href: "/", label: "About Me" },
        { href: "/skills", label: "Skills" },
        { href: "/projects", label: "Projects" },
        { href: "/opensource", label: "OpenSource" },
        { href: "/work-experiences", label: "Work Experience" },
        { href: "/educations", label: "Education" },
        { href: "/certificates", label: "Certificates" },
        { href: "/challenges", label: "Challenges" },
    ];

    return (
        <div className="z-[90] h-[80px] shadow-xl fixed top-0 w-full bg-gray-900 border-b border-gray-700">
            <div className="flex justify-between h-full items-center container mx-auto px-4 sm:px-6">
                {/* Logo / Name */}
                <div className="items-center flex h-full justify-center">
                    <Link to="/" className="flex items-center space-x-2">
                        <span className="text-2xl sm:text-3xl font-bold text-cyan-400">Daniel</span>
                        <span className="text-cyan-400 text-2xl sm:text-3xl">.</span>
                    </Link>
                </div>

                {/* Hamburger Menu for Mobile */}
                <div className="md:hidden flex items-center gap-2">
                    <span className="text-white text-sm font-medium">Menu</span>
                    <button
                        className="text-white focus:outline-none p-3 rounded-lg hover:bg-gray-800 transition-all duration-300 relative group"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                        aria-expanded={isOpen}
                    >
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-400 rounded-full animate-ping"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative flex flex-col justify-center items-center w-6 h-6">
                        <span className={`bg-white h-0.5 w-6 rounded-full transition-all duration-300 ease-out ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                        <span className={`bg-white h-0.5 w-6 rounded-full transition-all duration-300 ease-out my-1 ${isOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`bg-white h-0.5 w-6 rounded-full transition-all duration-300 ease-out ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
                    </div>
                    </button>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-6">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            to={item.href}
                            className={`text-white hover:text-cyan-400 transition-all duration-300 font-medium ${
                                location.pathname === item.href ? 'text-cyan-400 border-b-2 border-cyan-400' : ''
                            }`}
                        >
                            {item.label}
                        </Link>
                    ))}
                    <a
                        href="/cv.pdf"
                        download="Daniel-CV.pdf"
                        className="border border-cyan-400 text-cyan-400 px-4 py-2 rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 inline-flex items-center font-medium"
                    >
                        <span>Download CV</span>
                    </a>
                </div>
            </div>

            {/* Mobile Menu - Completely Solid */}
            <div className={`md:hidden fixed top-[80px] left-0 right-0 bottom-0 z-[99999] transition-all duration-300 ease-out ${
                isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
            }`} style={{backgroundColor: '#1a1a1a'}}>
                <div className="flex flex-col py-4 px-4 space-y-1 max-h-[calc(100vh-80px)] overflow-y-auto">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                to={item.href}
                                className={`text-white text-base font-medium px-4 py-3 rounded-lg hover:bg-gray-700 hover:text-cyan-400 transition-all duration-200 flex items-center justify-between group ${
                                    location.pathname === item.href ? 'bg-gray-700 text-cyan-400' : ''
                                }`}
                                onClick={() => setIsOpen(false)}
                            >
                                <span>{item.label}</span>
                                <svg className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        ))}
                        <div className="pt-3 mt-3 border-t border-gray-800">
                            <a
                                href="/cv.pdf"
                                download="Daniel-CV.pdf"
                                className="text-white text-base font-medium bg-cyan-600 hover:bg-cyan-700 px-4 py-3 rounded-lg transition-all duration-200 inline-flex items-center justify-center w-full"
                                onClick={() => setIsOpen(false)}
                            >
                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                <span>Download CV</span>
                            </a>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default NavBar;