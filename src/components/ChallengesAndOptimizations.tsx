import {FC} from "react";
import ChallengeAndOptimizationItem, {IChallengeAndOptimizationItem} from "./ChallengesAndOptimizationItem.tsx";

const challengesAndOptimizations: IChallengeAndOptimizationItem[] = [
    {
        title: "Route Optimization in a Large B2B System",
        context:
            "In a large B2B system, we managed vehicles responsible for shipment pickups and deliveries. A key requirement was to optimize the routes for these vehicles to ensure timely and cost-effective deliveries.",
        problem:
            `Challenge: With multiple vehicles and a growing number of shipment points, manually or suboptimally planned routes led to inefficiencies such as: 
           Increased delivery times.
           Higher fuel consumption.
           Suboptimal vehicle utilization.
          Requirement: Create an automated, scalable route optimization system capable of handling real-world constraints like vehicle capacities and time windows.`,
        investigationAndApproach:
            `Integration with Google Optimization AI:
            Leveraged Google's Optimization AI (Paid Service) to solve complex Vehicle Routing Problems (VRP).
            Built the system to account for constraints like:
              Vehicle capacity limits.
              Time windows for pickups and deliveries.
          Real-time dynamic updates allowed re-optimization for new shipment requests or delays.`,
        solution:
            `1. Integrated Google's Optimization AI for automated route planning.
         2. Workflow:
            - Shipment data, including pickup and delivery locations, volumes, and time windows, was sent to the Optimization AI.
            - Routes optimized based on constraints were returned and assigned to vehicles.
            - Optimized routes were visualized for operational teams.`,
        results:
            `1. Reduced delivery times by 30% on average.
         2. Decreased fuel costs through better route planning.
         3. Improved scalability and operational simplicity, handling more shipments with reduced manual intervention.`
    },
    {
        title: "Serving Dynamic Templates in a Digital Signage Application",
        context:
            "In a Digital Signage Application, we needed to dynamically serve template files (small SPA websites) via URLs structured like templates/:id/index.html. This posed a significant challenge in terms of dynamic serving and performance.",
        problem:
            "The templates needed to be served dynamically from an external storage system, and the URL structure required flexibility to fetch templates based on unique IDs.",
        investigationAndApproach:
            "We stored the template files on Amazon S3 and implemented a S3 Proxy Middleware in NestJS. This middleware intercepted requests for template URLs, fetched the appropriate file from S3, and returned it to the client. Routes in the NestJS backend mapped template requests (templates/:id/index.html) to the correct S3 object.",
        solution:
            "The S3 Proxy Middleware fetched the template files directly from S3 based on the requested ID and returned the correct HTML content, enabling dynamic template serving without managing large static content on the server.",
        results:
            "The solution allowed for scalable and efficient template serving, improving flexibility and performance while handling a large number of concurrent requests."
    },
    {
        title: "Optimizing Query Performance in a Large B2B eCommerce Project",
        context: "In a large B2B eCommerce platform, as the number of products grew significantly, we began to face performance issues with certain database queries.",
        problem: "Challenge: Some paginated and filtered queries were extremely slow, with response times reaching up to 2 minutes,Technology Stack: The project used TypeORM for database interaction.",
        investigationAndApproach: "Utilized query debugging tools to identify the root cause of the slow performance.,Analysis revealed that the queries were inefficient due to filtering and fetching relational data in a single query.",
        solution:
            "Refactored Query Logic: Separated the operations by first filtering the primary data set. Relational data was fetched in a subsequent query.,Pagination Optimization: Ensured that pagination was handled efficiently by focusing on indexed fields.",
        results: "The response time improved dramatically, reducing from 2 minutes to 400 milliseconds.The solution ensured scalable and efficient data retrieval, even as the number of products continued to grow."
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