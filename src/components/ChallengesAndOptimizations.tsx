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
        <section id="challenges" className="bg-black py-20">
            <div className="container mx-auto px-4">
                {/* Heading */}
                <h2 className="
          text-4xl md:text-6xl lg:text-8xl
          text-center
          font-extrabold
          text-navy-blue
          mb-8
          border-b-4
          border-navy-blue
          py-4
          tracking-tight
          shadow-lg
        ">
                    Top Challenges And Optimizations
                </h2>

                {/* Challenges List */}
                <div className="my-5 w-full mx-auto">
                    {challengesAndOptimizations.map((p, index) => (
                        <ChallengeAndOptimizationItem
                            key={index}
                            challengeAndOptimizationItem={p}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ChallengesAndOptimizations;