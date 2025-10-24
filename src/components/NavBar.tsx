import  { FC, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const NavBar: FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showExploreGlow, setShowExploreGlow] = useState(false);
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

    // Show explore glow after 4 seconds
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowExploreGlow(true);
        }, 4000);
        
        return () => clearTimeout(timer);
    }, []);

    const navItems = [
        { href: "/", label: "About Me", desc: "Professional background & contact", icon: "👨‍💻" },
        { href: "/skills", label: "Skills", desc: "Technical expertise & tools", icon: "⚡" },
        { href: "/projects", label: "Projects", desc: "Recent work & portfolio", icon: "🚀" },
        { href: "/opensource", label: "OpenSource", desc: "Community contributions", icon: "🌟" },
        { href: "/work-experiences", label: "Work Experience", desc: "Professional journey", icon: "💼" },
        { href: "/educations", label: "Education", desc: "Academic background", icon: "🎓" },
        { href: "/certificates", label: "Certificates", desc: "Achievements & certifications", icon: "📜" },
        { href: "/languages", label: "Languages", desc: "Language proficiencies", icon: "🌐" },
        { href: "/challenges", label: "Challenges", desc: "Problem-solving examples", icon: "🧩" },
    ];

    return (
        <div className="z-[90] h-[80px] shadow-xl fixed top-0 w-full bg-gray-900 bg-opacity-100 border-b border-gray-700 backdrop-blur-none" style={{backgroundColor: '#111827'}}>
            <div className="flex justify-between h-full items-center container mx-auto px-4 sm:px-6">
                {/* Logo / Name */}
                <div className="items-center flex h-full justify-center">
                    <Link to="/" className="flex items-center space-x-2">
                        <span className="text-2xl sm:text-3xl font-bold text-cyan-400">Daniel</span>
                        <span className="text-cyan-400 text-2xl sm:text-3xl">.</span>
                    </Link>
                </div>

                {/* Hamburger Menu for Mobile */}
                <div className={`md:hidden flex items-center gap-3 transition-all duration-1000 ${showExploreGlow ? 'transform scale-105' : ''}`}>
                    <div className={`flex flex-col items-end relative ${showExploreGlow ? 'animate-bounce' : ''}`}>
                        <span className={`text-white text-sm font-bold transition-all duration-1000 ${showExploreGlow ? 'text-transparent bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text animate-pulse' : ''}`}>
                            Explore
                        </span>
                        <span className={`text-cyan-400 text-xs font-medium transition-all duration-1000 ${showExploreGlow ? 'text-yellow-300 animate-pulse' : ''}`}>
                            9 sections
                        </span>
                        {showExploreGlow && (
                            <>
                                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-lg blur-sm animate-pulse"></div>
                                <div className="absolute top-0 right-0 w-1 h-1 bg-yellow-400 rounded-full animate-ping"></div>
                            </>
                        )}
                    </div>
                    <button
                        className={`text-white focus:outline-none p-3 rounded-xl hover:bg-gray-800 transition-all duration-1000 relative group overflow-hidden ${
                            showExploreGlow 
                                ? 'bg-gradient-to-r from-cyan-500/30 via-blue-500/30 to-purple-500/30 shadow-2xl shadow-cyan-500/50 animate-pulse border border-cyan-400/50' 
                                : ''
                        }`}
                        onClick={() => {setIsOpen(!isOpen); setShowExploreGlow(false);}}
                        aria-label="Toggle menu"
                        aria-expanded={isOpen}
                    >
                    {/* Enhanced notification dots */}
                    <div className={`absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full transition-all duration-1000 ${
                        showExploreGlow ? 'animate-ping scale-150 shadow-lg shadow-cyan-400/60' : 'animate-ping'
                    }`}></div>
                    <div className={`absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full transition-all duration-1000 ${
                        showExploreGlow ? 'scale-150 animate-bounce' : ''
                    }`}></div>
                    
                    {/* Multiple glow layers */}
                    <div className={`absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-1000 ${
                        showExploreGlow ? 'opacity-80' : ''
                    }`}></div>
                    
                    {showExploreGlow && (
                        <>
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/40 via-blue-500/40 to-purple-500/40 rounded-xl animate-pulse"></div>
                            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent rounded-xl animate-ping"></div>
                            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/30 via-blue-500/30 to-purple-500/30 rounded-xl blur-md animate-pulse"></div>
                        </>
                    )}
                    
                    {/* Flame and Sparkle effects */}
                    {showExploreGlow && (
                        <>
                            {/* Flame effects */}
                            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
                                <div className="w-3 h-4 bg-gradient-to-t from-red-600 via-orange-500 to-yellow-400 rounded-full animate-pulse shadow-lg shadow-orange-500/50" style={{animationDelay: '0s'}}></div>
                                <div className="absolute top-0 left-1 w-1.5 h-3 bg-gradient-to-t from-orange-500 to-yellow-300 rounded-full animate-bounce" style={{animationDelay: '0.3s'}}></div>
                                <div className="absolute top-0 -left-0.5 w-1.5 h-3 bg-gradient-to-t from-red-500 to-orange-400 rounded-full animate-bounce" style={{animationDelay: '0.6s'}}></div>
                            </div>
                            
                            {/* Side flames */}
                            <div className="absolute -top-1 -left-2 z-20">
                                <div className="w-2 h-3 bg-gradient-to-t from-red-500 to-yellow-400 rounded-full animate-pulse shadow-md shadow-red-400/50" style={{animationDelay: '0.2s'}}></div>
                            </div>
                            <div className="absolute -top-1 -right-2 z-20">
                                <div className="w-2 h-3 bg-gradient-to-t from-orange-600 to-yellow-300 rounded-full animate-pulse shadow-md shadow-orange-400/50" style={{animationDelay: '0.8s'}}></div>
                            </div>
                            
                            {/* Large flame behind */}
                            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                                <div className="w-4 h-5 bg-gradient-to-t from-red-700 via-orange-600 to-yellow-500 rounded-full animate-pulse opacity-70 blur-sm"></div>
                            </div>
                            
                            {/* Sparkle effects */}
                            <div className="absolute top-1 left-1 w-1 h-1 bg-white rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
                            <div className="absolute bottom-1 right-1 w-1 h-1 bg-yellow-300 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
                            <div className="absolute top-1 right-2 w-0.5 h-0.5 bg-cyan-300 rounded-full animate-ping" style={{animationDelay: '1.5s'}}></div>
                            
                            {/* Fire particles */}
                            <div className="absolute -top-1 left-2 w-0.5 h-0.5 bg-orange-300 rounded-full animate-ping opacity-70" style={{animationDelay: '0.7s'}}></div>
                            <div className="absolute -top-1 right-2 w-0.5 h-0.5 bg-red-300 rounded-full animate-ping opacity-70" style={{animationDelay: '1.2s'}}></div>
                        </>
                    )}
                    
                    <div className="relative flex flex-col justify-center items-center w-6 h-6 z-10">
                        <span className={`h-0.5 w-6 rounded-full transition-all duration-300 ease-out ${
                            isOpen ? 'rotate-45 translate-y-1.5' : ''
                        } ${
                            showExploreGlow ? 'bg-gradient-to-r from-white via-cyan-200 to-blue-200' : 'bg-white'
                        }`}></span>
                        <span className={`h-0.5 w-6 rounded-full transition-all duration-300 ease-out my-1 ${
                            isOpen ? 'opacity-0' : ''
                        } ${
                            showExploreGlow ? 'bg-gradient-to-r from-white via-cyan-200 to-blue-200' : 'bg-white'
                        }`}></span>
                        <span className={`h-0.5 w-6 rounded-full transition-all duration-300 ease-out ${
                            isOpen ? '-rotate-45 -translate-y-2.5' : ''
                        } ${
                            showExploreGlow ? 'bg-gradient-to-r from-white via-cyan-200 to-blue-200' : 'bg-white'
                        }`}></span>
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
                <div className="flex flex-col py-4 px-4 space-y-2 max-h-[calc(100vh-80px)] overflow-y-auto">
                        <a
                            href="/cv.pdf"
                            download="Daniel-CV.pdf"
                            className="text-white text-base font-medium bg-cyan-600 hover:bg-cyan-700 px-4 py-3 rounded-lg transition-all duration-200 inline-flex items-center justify-center w-full mb-2"
                            onClick={() => setIsOpen(false)}
                        >
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <span>Download CV</span>
                        </a>
                        <div className="border-t border-gray-800 mb-2"></div>
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                to={item.href}
                                className={`text-white px-4 py-4 rounded-lg hover:bg-gray-700 hover:text-cyan-400 transition-all duration-200 flex items-center justify-between group border border-transparent hover:border-cyan-500/30 ${
                                    location.pathname === item.href ? 'bg-gray-700 text-cyan-400 border-cyan-500/50' : ''
                                }`}
                                onClick={() => setIsOpen(false)}
                            >
                                <div className="flex items-center gap-3">
                                    <span className="text-xl">{item.icon}</span>
                                    <div className="flex flex-col">
                                        <span className="font-medium text-base">{item.label}</span>
                                        <span className="text-gray-400 text-xs mt-0.5">{item.desc}</span>
                                    </div>
                                </div>
                                <svg className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        ))}
                    </div>
                </div>
        </div>
    );
};

export default NavBar;