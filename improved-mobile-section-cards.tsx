{/* Enhanced Section Preview Cards - Mobile Only */}
<div className="fixed bottom-6 left-4 right-4 md:hidden z-50">
    <div className="bg-black/95 backdrop-blur-xl rounded-2xl p-5 shadow-2xl border border-cyan-400/20">
        <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse shadow-lg shadow-cyan-400/50"></div>
                <div>
                    <span className="text-white text-base font-semibold">About Me</span>
                    <div className="flex items-center gap-2 mt-1">
                        <span className="text-gray-400 text-xs">1/8</span>
                        <div className="flex gap-1">
                            {[...Array(8)].map((_, i) => (
                                <div 
                                    key={i} 
                                    className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                                        i === 0 ? 'bg-cyan-400' : 'bg-gray-600'
                                    }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                </svg>
                <span className="text-xs font-medium">Swipe to explore</span>
            </div>
        </div>
        
        {/* Enhanced Mini Preview Cards */}
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {[
                { 
                    title: "Skills", 
                    icon: "⚡", 
                    desc: "Tech Stack & Tools", 
                    href: "/skills",
                    color: "from-yellow-500/20 to-orange-500/20",
                    hoverColor: "hover:from-yellow-500/30 hover:to-orange-500/30"
                },
                { 
                    title: "Projects", 
                    icon: "🚀", 
                    desc: "Recent Work", 
                    href: "/projects",
                    color: "from-blue-500/20 to-purple-500/20",
                    hoverColor: "hover:from-blue-500/30 hover:to-purple-500/30"
                },
                { 
                    title: "Experience", 
                    icon: "💼", 
                    desc: "Work History", 
                    href: "/work-experiences",
                    color: "from-green-500/20 to-teal-500/20",
                    hoverColor: "hover:from-green-500/30 hover:to-teal-500/30"
                },
                { 
                    title: "Education", 
                    icon: "🎓", 
                    desc: "Academic Background", 
                    href: "/educations",
                    color: "from-indigo-500/20 to-blue-500/20",
                    hoverColor: "hover:from-indigo-500/30 hover:to-blue-500/30"
                },
                { 
                    title: "Certificates", 
                    icon: "📜", 
                    desc: "Certifications", 
                    href: "/certificates",
                    color: "from-red-500/20 to-pink-500/20",
                    hoverColor: "hover:from-red-500/30 hover:to-pink-500/30"
                }
            ].map((section) => (
                <Link
                    key={section.href}
                    to={section.href}
                    className={`
                        flex-shrink-0 
                        bg-gradient-to-br ${section.color} ${section.hoverColor}
                        backdrop-blur-sm
                        rounded-xl p-4 min-w-[140px] 
                        transition-all duration-300 ease-out
                        hover:scale-105 active:scale-95
                        border border-white/10 hover:border-white/20
                        shadow-lg hover:shadow-xl
                        group
                        touch-manipulation
                    `}
                    style={{
                        WebkitTapHighlightColor: 'transparent',
                        userSelect: 'none'
                    }}
                >
                    <div className="text-center">
                        <div className="text-2xl mb-2 transform group-hover:scale-110 transition-transform duration-200">
                            {section.icon}
                        </div>
                        <div className="text-white text-sm font-semibold mb-1 group-hover:text-cyan-200 transition-colors">
                            {section.title}
                        </div>
                        <div className="text-gray-400 text-xs group-hover:text-gray-300 transition-colors">
                            {section.desc}
                        </div>
                    </div>
                    
                    {/* Subtle hover indicator */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/0 to-blue-400/0 group-hover:from-cyan-400/10 group-hover:to-blue-400/10 transition-all duration-300 pointer-events-none"></div>
                </Link>
            ))}
        </div>
        
        {/* Swipe indicator dots */}
        <div className="flex justify-center mt-3 gap-1">
            {[...Array(5)].map((_, i) => (
                <div 
                    key={i} 
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        i === 0 ? 'bg-cyan-400 w-4' : 'bg-gray-600'
                    }`}
                />
            ))}
        </div>
    </div>
</div>

{/* Hide scrollbar for mobile cards */}
<style jsx>{`
    .scrollbar-hide {
        -ms-overflow-style: none;
        scrollbar-width: none;
    }
    .scrollbar-hide::-webkit-scrollbar {
        display: none;
    }
`}</style>