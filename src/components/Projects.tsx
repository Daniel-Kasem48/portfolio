"use client";

import {FC, useEffect, useState, useMemo, useCallback} from "react";
// import {
//     AndroidPlain, DotnetcorePlain,
//     FlutterPlain, GraphqlPlain,
//     LaravelLine,
//     NestjsLine, NodejsLine,
//     SwiftPlain
// } from "devicons-react";
// import {SiSocketDotIo} from "@react-icons/all-files/si/SiSocketDotIo";
// import {SiReact} from "@react-icons/all-files/si/SiReact";

import Project, {IProject} from "./Project";
import { usePostHogEvent } from '../hooks/usePostHogEvent';
import { motion, AnimatePresence } from "framer-motion";
import SectionShell from "./SectionShell";

// import {REPO_PREFIX} from "../../vite.config.ts";

export function getImage(path: string) {
    return path
}

// Add categories to projects
export const projectsDataWithCategories: IProject[] = [
    {
        title: "Kyoto Mobile",
        link: "https://www.kyotomobile.com/",
        images: [],
        stack: ["Next.js", "React", "Node.js", "eSIM", "Payments"],
        description: "A Japan eSIM provider letting travelers buy and activate digital SIMs online before arriving. Delivers fast 5G/4G data nationwide over the KDDI network — no airport queues, contracts, or roaming fees. Flexible data plans aimed at tourists and digital nomads.",
        category: "Travel",
        priority: 1
    },
    {
        title: "ReRoam",
        link: "https://www.reroam.io/en/",
        images: [],
        stack: ["Next.js", "React", "Node.js", "eSIM", "Payments"],
        description: "A global eSIM service offering instant connectivity across 190+ countries with no physical SIM or roaming fees. Features instant QR-code activation, plans starting at $3, 24/7 support, and 99.9% uptime.",
        category: "Travel",
        priority: 1
    },
    {
        title: "DIVPOS",
        link: "https://divpos.com",
        images: [],
        stack: ["Node.js", "React", "Flutter", "SaaS", "Multi-tenancy", "Payments"],
        description: "An all-in-one cloud POS and restaurant management platform for quick-service to fine dining. Combines multi-branch POS, branded ordering apps, loyalty/rewards, kitchen display systems, and delivery integrations (DoorDash, Uber) — with real-time analytics, multi-language/currency, and granular staff roles.",
        category: "Retail",
        priority: 1
    },
    {
        title: "Ordro",
        link: "https://play.google.com/store/apps/details?id=com.ordro.retailapp&hl=en",
        images: [
            getImage("ordro/1.png"),
            getImage("ordro/2.png"),
            getImage("ordro/3.png"),
            getImage("ordro/4.png"),
            getImage("ordro/5.png"),
            getImage("ordro/6.png"),
            getImage("ordro/7.png"),
            getImage("ordro/8.png"),
            getImage("ordro/9.png"),
            "https://play-lh.googleusercontent.com/6geqlIS9GSHvaPaHQEHuenDUsuSEM1aS22CXOZbSWiZwMaxKi-VjLadmxWTGrQNka1CV=w526-h296-rw",
        ],
        stack: ["express", "react", "flutter","meilisearch"],
        description: "a comprehensive solution\nencompassing promotions, shipping, and stock management functionalities. The platform is designed to\nstreamline business-to-business transactions, providing a seamless experience for users involved in buying and\nselling products.",
        category: "E-commerce"
    },
    {
        title: "Spantrek",
        link: "https://cloud.spantrek.com",
        images: [
            getImage("spantrek/19.png"),
            getImage("spantrek/1.png"),
            getImage("spantrek/2.png"),
            getImage("spantrek/3.png"),
            getImage("spantrek/4.png"),
            getImage("spantrek/5.png"),
            getImage("spantrek/6.png"),
            getImage("spantrek/7.png"),
            getImage("spantrek/8.png"),
            getImage("spantrek/8.png"),
            getImage("spantrek/9.png"),
            getImage("spantrek/10.png"),
            getImage("spantrek/11.png"),
            getImage("spantrek/12.png"),
            getImage("spantrek/13.png"),
            getImage("spantrek/14.png"),
            getImage("spantrek/15.png"),
            getImage("spantrek/16.png"),
            getImage("spantrek/17.png"),
            getImage("spantrek/18.png"),
            getImage("spantrek/20.png"),
        ],
        stack: ["nest", "graphql", "flutter", "react", "socketio"],
        description: "The platform boasted a rich set of features, including immersive 3D and 2D maps, real-\ntime reservation boards, visitor management, and dynamic digital signage.",
        category: "Web Platform",
        priority: 1
    },
    {
        title: "Number5 | AI Calls & Texts",
        link: "https://apps.apple.com/us/app/number5-ai-calls-texts/id6737720979",
        images: [
            "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/14/3f/03/143f03b8-a3e9-3a1e-6778-7ce418c9bdc1/1.2.jpg/600x0w.jpg",
            "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/49/d3/e9/49d3e935-357e-a25c-5c0c-1632e4d81b1a/1.4.jpg/600x0w.jpg",
            "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/4d/fc/a7/4dfca73b-d966-3a8a-dc33-2d89b9ead579/1.5.jpg/600x0w.jpg",
            "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/4d/d8/ca/4dd8cad2-296b-4684-2b6b-d52502483527/1.3.jpg/600x0w.jpg",
            "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/b4/0a/3a/b40a3a6c-6b11-d58b-4492-bbc6b89c7e23/1.1.jpg/600x0w.jpg",
            "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/c3/29/5c/c3295c7b-1714-cfb0-723b-fded0c08d1d8/1.6.jpg/600x0w.jpg"
        ],
        stack: ["iOS", "AI", "VoIP", "NLP", "Privacy", "Virtual Numbers"],
        description: `Take control of your communication with NUMBERS - Mobile Privacy Application. Easily add, manage, and toggle multiple virtual phone numbers on a single device. Enjoy free unlimited talk and text in the U.S., AI-powered call assistant, spam call elimination, customizable voicemail, and enhanced privacy. Features include:
- Multiple virtual phone numbers
- AutoBot AI Personal Assistant for calls
- Call routing and management
- SMS/MMS capabilities
- Customizable UI (Dark/Light mode)
- Instant activation and scalable solutions for business and personal use.`,
        category: "Mobile App",
        priority: 1
    },
    {
        images: [getImage("number5/1.jpg"), getImage("number5/2.jpg")],
        title: "Number5.ai",
        stack: ["Node.js", "python", "zapier", "Automation Flows"],
        link: "",
        description: `Built intelligent automation flows for lead engagement at Number5.ai, an AI business assistant platform. 
Designed sequences combining calls, SMS, and scheduled delays (e.g., Call ➔ SMS ➔ Wait ➔ Call again) to boost lead conversion rates. 
Integrated multi-channel communication APIs and optimized flow reliability and scalability.`,
        category: "AI Platform"
    },
    {
        title: "Vitastir",
        link: "https://thevitatest.com",
        stack: ["laravel", "react", "next", "nest", 'socketio'],
        description: "a comprehensive health e-commerce platform facilitating the seamless purchase of medical products. Key features include a user-friendly interface, secure transactions, prescription management, personalized recommendations, and a health information hub.",
        images: [
            getImage("vita/1.png"),
            getImage("vita/2.png"),
            getImage("vita/3.png"),
            getImage("vita/4.png"),
            getImage("vita/5.png"),
            getImage("vita/6.png"),
            getImage("vita/7.png"),
            getImage("vita/8.png"),
            getImage("vita/9.png"),
            getImage("vita/9.png"),
            getImage("vita/9.png"),
            getImage("vita/9.png"),
            getImage("vita/10.png"),
            getImage("vita/11.png"),
            getImage("vita/12.png"),
            getImage("vita/13.png"),
            getImage("vita/14.png"),
            getImage("vita/15.png"),
            getImage("vita/16.png"),
            getImage("vita/17.png"),
            getImage("vita/18.png"),
        ],
        category: "E-commerce"
    },
    {
        title: "Citizen Meds",
        link: "https://citizenmeds.com",
        images: [
            getImage("citizen-meds/1.png"),
            getImage("citizen-meds/2.png"),
        ],
        stack: ["react", "node", "express"],
        description: "A telehealth platform providing physician-approved injection home kits for weight management and men's health. Features include seamless ordering, overnight shipping, and a comprehensive solution for GLP-1 weight loss treatments like Semaglutide and Tirzepatide.",
        category: "Healthcare"
    },
    {
        title: "Talkalize",
        link: "https://www.talkalize.com/en",
        images: [],
        stack: ["laravel", "react"],
        description: "Talkalize is an AI-powered automated response system that enhances customer engagement on WhatsApp. It enables instant replies, seamless bookings, and personalized interactions. Businesses can improve brand awareness, drive sales, and foster customer loyalty by streamlining communication and re-engaging with prospects effectively.",
        category: "AI Platform"
    },
    {
        title: "MemoNas Chat App",
        images: [
            getImage("memo/1.png"),
            getImage("memo/1.png"),
        ],
        stack: ["node", "socketio", "express", "android", "swift"],
        link: "https://play.google.com/store/apps/details?id=com.yawar.memo&hl=en&gl=US",
        description: "a dynamic platform enabling one-to-one and\ngroup chats, calls, video calls, and channels. Leveraged Node.js (Express), Socket.io, and Redis for real-time\ncommunication.",
        category: "Mobile App"
    },
    {
        title: "Ismail Furniture",
        link: "https://www.ismailfurniture.com",
        images: [
            getImage("ismailfurniture/1.png"),
            getImage("ismailfurniture/2.png"),
        ],
        stack: ["Next.js", "React", "E-commerce", "Laravel","Elasticsearch"],
        description: `Developed a modern, responsive furniture e-commerce platform for Ismail Furniture. The site features product galleries, category browsing, blog integration, and a seamless shopping experience. Implemented best practices for SEO and performance, ensuring a fast and discoverable site.`,
        category: "E-commerce"
    },
    {
        title: "Qahwah",
        images: [
            getImage("qahwah/1.webp"),
            getImage("qahwah/2.webp"),
            getImage("qahwah/3.webp"),
            getImage("qahwah/4.webp"),
        ],
        stack: ["laravel", "flutter"],
        link: "https://play.google.com/store/apps/details?id=com.divcodes.qahwahhouse&hl=en",
        description: "Qahwah House, an eCommerce platform dedicated to providing an exceptional coffee experience with premium organic coffee grown in Yemen.• Implemented features to enhance user experience and strea",
        category: "E-commerce"
    },
    {
        title: "Albustan Store",
        link: "https://play.google.com/store/apps/details?id=com.cleancody.albustan&hl=en",
        images: [
            getImage("albustan/1.png"),
            getImage("albustan/2.png"),
            getImage("albustan/3.png"),
        ],
        stack: ["express", "flutter"],
        description: "A modern e-commerce platform for mobile phones, electronics, and accessories, offering secure payments, real-time inventory, and personalized shopping with advanced search, order tracking, and multi-vendor support.",
        category: "E-commerce"
    },
    {
        title: "StayOn",
        images: [
            "https://play-lh.googleusercontent.com/_E0qHMzDJD6z-69KXxUoALv2sLjgK_TgVxrG9FCDY-2nDewaWCyUU4wMorgBU6m4mgId=w2560-h1440-rw",
            "https://play-lh.googleusercontent.com/Olk5mDPQqetRsK5IGR8qpQVLCGSBjn2z5mDuRwoy1Ka7zLoE6N9Ovig47GYS1tUSISwj=w2560-h1440-rw",
            "https://play-lh.googleusercontent.com/bjd5LYx5bNSqDynvVkUrq7l1KFDfQE6eghtMLZcTNosfDsxVFjGvdVMFBr39TNG-R90M=w2560-h1440-rw"
        ],
        link: "https://play.google.com/store/apps/details?id=co.flexsol.stayon&hl=en_US&gl=US",
        stack: ["laravel", "flutter"],
        description: "The Stay On application is an application of electronic courses in an academic and high-level manner, for\n professors and lecturers known in their field.",
        category: "Education"
    },
    {
        title: "Ha55a Exchange",
        images: [
            getImage("ha55aExchange/1.png"),
            getImage("ha55aExchange/2.png"),
            getImage("ha55aExchange/3.png"),
            getImage("ha55aExchange/4.png"),
            getImage("ha55aExchange/5.png"),
        ],
        link: "https://ha55a.exchange",
        stack: ["laravel"],
        description: "Spearheaded the development of a secure and efficient Iraqi money\n exchange website using Laravel PHP. This project enabled users to conveniently exchange currency while\n      ensuring the utmost security.",
        category: "Finance"
    },
    {
        title: "LPCenter",
        images: [
            getImage("lpc/1.png"),
            getImage("lpc/2.png"),
        ],
        link: "https://www.lpcentre.com",
        description: "London Premier Centre is a UK leading training provider based in London and specialises in international short courses.\"",
        stack: ["laravel"],
        category: "Education"
    },
    {
        title: "Ha55a Store",
        link: "https://www.ha55a.com",
        stack: ["netcore"],
        description: "Digital Services Store allow merchants to sell their services",
        images: [
            getImage("ha55a/1.png"),
            getImage("ha55a/2.png"),
        ],
        category: "E-commerce"
    },
    {
        title: "Oneshop (Medusa-based E-commerce)",
        link: "",
        images: [],
        stack: [
            "Medusa.js", "Node.js", "React", "E-commerce","expressjs","NoSql"
        ],
        description: `Developed a feature-rich e-commerce platform using Medusa.js as the backend. Integrated multiple plugins to enhance functionality, including:
- Localization for multi-language support
- Low Stock Alert for inventory management
- Documents for order and product documentation
- Notifications for real-time updates
- AI Content Generation for automated product descriptions
- Storefront Content Plugin for dynamic content management

The platform offers a modern, scalable, and extensible solution for online retail businesses.`,
        category: "E-commerce"
    },
    {
        title: "Ordro Point Of Sale System",
        link: "",
        images: [],
        stack: ["express", "react", "flutter"],
        description: "A Point of Sale system designed for retailers, seamlessly integrated with the Ordro ecosystem. It features real-time inventory tracking, multi-store management, sales analytics, and seamless payment processing to enhance retail operations.",
        category: "Retail"
    },
]

//TODO mention that we use NX,SAAS Multi tenancy Structure
// export const iconMap = {
//     // "nest": <NestjsLine color="white" size="75"/>,
//     // "laravel": <LaravelLine color="white" size="75"/>,
//     // "flutter": <FlutterPlain color="white" size="75"/>,
//     // "swift": <SwiftPlain color="white" size="75"/>,
//     // "android": <AndroidPlain color="white" size="75"/>,
//     // "node": <NodejsLine color="white" size="75"/>,
//     // "graphql": <GraphqlPlain color="white" size="75"/>,
//     // "socketio": <SiSocketDotIo size="75"/>,
//     // "react": <SiReact size="75"/>,
//     // "netcore": <DotnetcorePlain color="white" size="75"/>,
// }

const Projects: FC = () => {
    const track = usePostHogEvent();
    const [selectedCategory, setSelectedCategory] = useState<string>("All");
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [sortBy, setSortBy] = useState<string>("priority");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    
    // Get unique categories
    const categories = useMemo(() => {
        const cats = ["All", ...new Set(projectsDataWithCategories.map(p => p.category).filter((cat): cat is string => Boolean(cat)))];
        return cats;
    }, []);
    
    // Debounced search query
    const [debouncedSearchQuery, setDebouncedSearchQuery] = useState<string>("");
    
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedSearchQuery(searchQuery);
        }, 300);
        
        return () => clearTimeout(timer);
    }, [searchQuery]);

    useEffect(() => {
        setIsLoading(true);
        const timer = setTimeout(() => setIsLoading(false), 100);

        return () => clearTimeout(timer);
    }, [selectedCategory, debouncedSearchQuery, sortBy]);
    
    // Filter and sort projects
    const filteredProjects = useMemo(() => {
        let filtered = [...projectsDataWithCategories];
        
        // Filter by category
        if (selectedCategory !== "All") {
            filtered = filtered.filter(p => p.category === selectedCategory);
        }
        
        // Filter by search query
        if (debouncedSearchQuery.trim()) {
            const query = debouncedSearchQuery.toLowerCase();
            filtered = filtered.filter(p => 
                p.title.toLowerCase().includes(query) ||
                p.description.toLowerCase().includes(query) ||
                p.stack.some(tech => tech.toLowerCase().includes(query))
            );
        }
        
        // Sort projects
        filtered.sort((a, b) => {
            switch (sortBy) {
                case "priority":
                    const aPriority = a.priority || 999;
                    const bPriority = b.priority || 999;
                    return aPriority - bPriority;
                case "name":
                    return a.title.localeCompare(b.title);
                case "category":
                    return (a.category || "").localeCompare(b.category || "");
                case "newest":
                    // For now, we'll use priority as a proxy for "newest"
                    // You can add a date field to projects if needed
                    return (b.priority || 999) - (a.priority || 999);
                default:
                    return 0;
            }
        });
        
        return filtered;
    }, [selectedCategory, debouncedSearchQuery, sortBy]);
    
    // Memoized event handlers
    const handleCategoryChange = useCallback((category: string) => {
        setSelectedCategory(category);
        track('project_filter_clicked', { category });
    }, [track]);
    
    const handleProjectClick = useCallback((projectTitle: string) => {
        track('project_clicked', { project: projectTitle });
    }, [track]);
    
    const handleProjectFocus = useCallback((projectTitle: string) => {
        track('project_focused', { project: projectTitle });
    }, [track]);
    
    return (
        <SectionShell
            id="projects"
            track="Projects"
            eyebrow="Portfolio"
            title="Projects"
            subtitle="Innovative work spanning mobile apps, web platforms, and AI systems — built with cutting-edge technologies and a focus on clean, scalable solutions."
            className="max-w-7xl"
        >
            <div>
                {/* Search and Sort Controls */}
                <motion.div 
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    {/* Search Bar */}
                    {/* <div className="relative w-full max-w-md">
                        <input
                            type="text"
                            placeholder="Search projects, technologies..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full px-6 py-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 
                                rounded-xl text-white placeholder-gray-400 focus:outline-none 
                                focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20
                                transition-all duration-300 pr-12"
                        />
                        <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                    </div> */}

                    {/* Sort Dropdown */}
                    {/* <div className="relative">
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="px-6 py-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 
                                rounded-xl text-white focus:outline-none focus:border-cyan-500/50 
                                focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300
                                appearance-none pr-10 cursor-pointer"
                        >
                            <option value="priority">Sort by Priority</option>
                            <option value="name">Sort by Name</option>
                            <option value="category">Sort by Category</option>
                            <option value="newest">Sort by Newest</option>
                        </select>
                        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div> */}

                    {/* Clear Filters Button */}
                    {(selectedCategory !== "All" || searchQuery.trim() || sortBy !== "priority") && (
                        <motion.button
                            onClick={() => {
                                setSelectedCategory("All");
                                setSearchQuery("");
                                setSortBy("priority");
                                track('filters_cleared');
                            }}
                            className="px-6 py-4 bg-red-600/20 backdrop-blur-sm border border-red-500/30 
                                rounded-xl text-red-300 hover:bg-red-600/30 hover:text-red-200 
                                transition-all duration-300 flex items-center gap-2"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            Clear Filters
                        </motion.button>
                    )}
                </motion.div>

                {/* Active Filters Display */}
                {(selectedCategory !== "All" || searchQuery.trim()) && (
                    <motion.div 
                        className="flex flex-wrap justify-center gap-2 mb-8"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                    >
                        {selectedCategory !== "All" && (
                            <span className="chip border-aurora-cyan/40 text-aurora-cyan">
                                Category: {selectedCategory}
                            </span>
                        )}
                        {searchQuery.trim() && (
                            <span className="chip border-aurora-violet/40 text-aurora-violet">
                                Search: "{searchQuery}"
                            </span>
                        )}
                    </motion.div>
                )}

                {/* Category Filter */}
                <motion.div 
                    className="flex flex-wrap justify-center gap-3 mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    {categories.map((category, index) => {
                        const projectCount = category === "All" 
                            ? projectsDataWithCategories.length 
                            : projectsDataWithCategories.filter(p => p.category === category).length;
                        
                        return (
                            <motion.button
                                key={category}
                                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 relative
                                    ${selectedCategory === category
                                        ? 'bg-gradient-to-r from-aurora-cyan to-aurora-violet text-ink-950 shadow-glow-cyan'
                                        : 'glass text-slate-300 hover:text-white hover:border-aurora-cyan/40'
                                    }`}
                                onClick={() => handleCategoryChange(category)}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.04 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span>{category}</span>
                                <span className={`ml-2 rounded-full px-1.5 py-0.5 text-xs font-bold
                                    ${selectedCategory === category
                                        ? 'bg-ink-950/25 text-ink-950'
                                        : 'bg-white/10 text-slate-400'
                                    }`}>
                                    {projectCount}
                                </span>
                            </motion.button>
                        );
                    })}
                </motion.div>

                {/* Project Statistics */}
                <motion.div 
                    className="flex flex-wrap justify-center gap-6 mb-8 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    <div className="glass-card rounded-2xl px-6 py-4">
                        <div className="mb-1 text-3xl font-bold text-gradient">
                            {projectsDataWithCategories.length}
                        </div>
                        <div className="text-sm text-slate-400">Total Projects</div>
                    </div>
                    <div className="glass-card rounded-2xl px-6 py-4">
                        <div className="mb-1 text-3xl font-bold text-gradient">
                            {new Set(projectsDataWithCategories.map(p => p.category).filter(Boolean)).size}
                        </div>
                        <div className="text-sm text-slate-400">Categories</div>
                    </div>
                    <div className="glass-card rounded-2xl px-6 py-4">
                        <div className="mb-1 text-3xl font-bold text-gradient">
                            {projectsDataWithCategories.filter(p => p.priority === 1).length}
                        </div>
                        <div className="text-sm text-slate-400">Featured</div>
                    </div>
                </motion.div>

                {/* Projects Grid */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedCategory}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        transition={{ duration: 0.6 }}
                    >
                        {isLoading ? (
                            <div className="col-span-full text-center py-16">
                                <div className="inline-flex items-center gap-3">
                                    <div className="w-6 h-6 border-2 border-aurora-cyan border-t-transparent rounded-full animate-spin"></div>
                                    <p className="text-xl text-slate-400">Loading projects...</p>
                                </div>
            </div>
                        ) : filteredProjects.length === 0 ? (
                            <motion.div 
                                className="col-span-full text-center py-16"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="max-w-md mx-auto">
                                    <svg className="w-16 h-16 text-gray-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33" />
                                    </svg>
                                    <p className="text-xl text-gray-400 mb-2">No projects found</p>
                                    <p className="text-sm text-gray-500">Try adjusting your search or filter criteria</p>
                                </div>
                            </motion.div>
                        ) : (
                            filteredProjects.map((p, index) => {
                    let hoverTimeout: NodeJS.Timeout | null = null;
                    return (
                                    <motion.div
                                        key={`${p.title}-${selectedCategory}`}
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                        onClick={() => handleProjectClick(p.title)}
                            onMouseEnter={() => {
                                hoverTimeout = setTimeout(() => {
                                                handleProjectFocus(p.title);
                                }, 1000);
                            }}
                            onMouseLeave={() => {
                                if (hoverTimeout) clearTimeout(hoverTimeout);
                            }}
                        >
                            <Project project={p}/>
                                    </motion.div>
                                );
                            })
                        )}
                    </motion.div>
                </AnimatePresence>

                {/* Results Count */}
                {!isLoading && filteredProjects.length > 0 && (
                    <motion.div 
                        className="text-center mt-12"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <p className="text-slate-400">
                            Showing {filteredProjects.length} of {projectsDataWithCategories.length} projects
                        </p>
                    </motion.div>
                )}

                {/* Back to Top Button */}
                <motion.button
                    onClick={() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                        track('back_to_top_clicked');
                    }}
                    aria-label="Back to top"
                    className="fixed bottom-8 right-8 z-50 p-4 bg-gradient-to-r from-aurora-cyan to-aurora-violet
                        rounded-full shadow-glow-cyan transition-all duration-300 hover:scale-110 hover:brightness-110"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <svg className="w-6 h-6 text-ink-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                </motion.button>
            </div>
        </SectionShell>
    );
}
export default Projects
