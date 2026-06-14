import { FC } from "react";
import { motion } from "framer-motion";
import SectionShell from "./SectionShell.tsx";
import ChallengeAndOptimizationItem, { IChallengeAndOptimizationItem } from "./ChallengesAndOptimizationItem.tsx";

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
        title: "Batch Embedding Processing for Vector Database Semantic Search",
        context: "AI-powered semantic search system requiring efficient processing of large document collections for vector database indexing.",
        problem: "Processing 1K+ documents for embedding generation was taking too long sequentially, causing memory overflow and API rate limit hits with OpenAI embeddings API.",
        investigationAndApproach: "Analyzed bottlenecks: sequential processing, memory leaks from large text chunks, and API rate limiting. Designed batch processing architecture with queue management.",
        solution: "Implemented chunked batch processing with Redis queue, rate limiting middleware, and memory-efficient text processing. Added retry logic and progress tracking.",
        results: "Processing time reduced by 70% • 70% memory usage reduction • Zero API timeouts • 40% cost reduction through batch optimization • Scalable to 10K+ documents • Real-time progress monitoring"
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
        <SectionShell
            id="challenges"
            track="Challenges"
            eyebrow="Problem Solving"
            title="Challenges & Optimizations"
            subtitle="Real-world problems, creative solutions, and measurable results from my engineering journey."
        >
            <div className="grid w-full gap-8 md:grid-cols-2 lg:grid-cols-3">
                {challengesAndOptimizations.map((p, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <ChallengeAndOptimizationItem challengeAndOptimizationItem={p} />
                    </motion.div>
                ))}
            </div>
        </SectionShell>
    );
};

export default ChallengesAndOptimizations;
