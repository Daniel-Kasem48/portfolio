import {FC} from "react";
import ChallengeAndOptimizationItem, {IChallengeAndOptimizationItem} from "./ChallengesAndOptimizationItem.tsx";

const challengesAndOptimizations: IChallengeAndOptimizationItem[] = [
    {
        title: "PDF Catalog Generation Performance",
        context: "PDF generator using WeasyPrint for product catalogs with variants, migrated from AWS Lambda to Fargate.",
        problem: "Sequential image processing caused Lambda timeouts for catalogs with 500+ products and variants. Generation took 5+ minutes.",
        investigationAndApproach: "Identified bottlenecks: sequential downloads, large image sizes, no caching. Migrated to AWS Fargate for better resource control.",
        solution: "Implemented ThreadPoolExecutor (15 workers), image caching, automatic image size optimization, and migrated to Fargate for longer execution times.",
        results: "Generation time reduced to <30 seconds • 90% fewer failures • Handled 10x larger catalogs • Eliminated Lambda timeout constraints"
    },
    {
        title: "Route Optimization in a Large B2B System",
        context:
            "B2B logistics system managing fleet vehicles for shipment pickups and deliveries.",
        problem:
            "Manual route planning led to 40% longer delivery times and higher fuel costs. Needed automated optimization for 100+ vehicles and 1000+ daily shipments.",
        investigationAndApproach:
            "Integrated Google's Optimization AI for Vehicle Routing Problems (VRP) with constraints: vehicle capacity, time windows, and real-time updates.",
        solution:
            "Built automated route planning API that processes shipment data and returns optimized routes, integrated with fleet management dashboard.",
        results:
            "30% reduction in delivery times • 25% lower fuel costs • Scaled from 100 to 500 daily shipments without additional resources"
    },
    {
        title: "Dynamic Template Serving for Digital Signage",
        context:
            "Digital signage platform requiring dynamic serving of SPA templates via custom URLs.",
        problem:
            "Static file serving couldn't handle 1000+ dynamic templates. Traditional CDN approach was inflexible for template/:id URL structure.",
        investigationAndApproach:
            "Designed S3 proxy middleware in NestJS to intercept template requests and fetch from cloud storage.",
        solution:
            "Built middleware that maps template URLs to S3 objects, with caching and error handling.",
        results:
            "Handled 10K+ concurrent requests • 99.9% uptime • Reduced server storage costs by 80%"
    },
    {
        title: "Query Performance Optimization in B2B eCommerce",
        context: "Large B2B eCommerce platform with 1M+ products using TypeORM.",
        problem: "Product search queries taking up to 2 minutes due to inefficient JOINs and missing indexes.",
        investigationAndApproach: "Profiled queries to identify N+1 problems and inefficient relational data fetching.",
        solution:
            "Split complex queries into optimized steps: filter first, then fetch relations. Added strategic database indexes.",
        results: "Response time reduced from 2 minutes to 400ms • 300x performance improvement • Zero downtime migration"
    }
];


const ChallengesAndOptimizations: FC = () => {
    return (
        <section id="challenges" className="relative pt-24 pb-20 sm:pt-28 sm:pb-20 md:pt-32 md:pb-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden">
            {/* Enhanced Background Effects - Matching Skills Section */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(236,72,153,0.1),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(6,182,212,0.1),transparent_50%)]"></div>
            
            {/* Floating Particles with Skills Color Scheme */}
            <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className={`absolute w-2 h-2 rounded-full animate-pulse ${
                            i % 3 === 0 ? 'bg-cyan-400/30' :
                            i % 3 === 1 ? 'bg-blue-500/30' :
                            'bg-purple-600/30'
                        }`}
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDuration: `${Math.random() * 4 + 4}s`,
                            animationDelay: `${Math.random() * 2}s`,
                        }}
                    />
                ))}
            </div>
            
            {/* Gradient Orbs - Matching Skills Colors */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
            
            <div className="container mx-auto px-4 relative z-10">
                {/* Enhanced Heading - Matching Skills Section */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 tracking-tight drop-shadow-2xl animate-fadeInUp">
                        <span className="inline-block align-middle mr-3 animate-bounce">🚀</span>
                        <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient-x">
                            Top Challenges & Optimizations
                        </span>
                </h2>

                    {/* Gradient Underline - Matching Skills */}
                    <div className="w-48 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full animate-pulse"></div>
                    
                    <p className="text-center text-lg text-gray-400 mt-6 animate-fadeInUp" style={{animationDelay:'0.2s', animationFillMode:'both'}}>
                        Real-world problems, creative solutions, and measurable results from my engineering journey.
                    </p>
                </div>
                
                {/* Enhanced Challenges Grid with Skills Color Scheme */}
                <div className="my-5 w-full mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {challengesAndOptimizations.map((p, index) => (
                        <div key={index} className="relative group">
                            {/* Gradient Border Animation - Matching Skills */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-gradient-x"></div>
                            
                            {/* Card Content */}
                            <div className="relative">
                        <ChallengeAndOptimizationItem
                            challengeAndOptimizationItem={p}
                        />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ChallengesAndOptimizations;