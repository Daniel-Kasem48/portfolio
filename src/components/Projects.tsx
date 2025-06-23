import {FC, useRef, useEffect} from "react";
// import {
//     AndroidPlain, DotnetcorePlain,
//     FlutterPlain, GraphqlPlain,
//     LaravelLine,
//     NestjsLine, NodejsLine,
//     SwiftPlain
// } from "devicons-react";
// import {SiSocketDotIo} from "@react-icons/all-files/si/SiSocketDotIo";
// import {SiReact} from "@react-icons/all-files/si/SiReact";

import Project, {IProject} from "./Project.tsx";
import { usePostHogEvent } from '../hooks/usePostHogEvent';

// import {REPO_PREFIX} from "../../vite.config.ts";

export function getImage(path: string) {
    return path
}

export const projectsData: IProject[] = [
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

The platform offers a modern, scalable, and extensible solution for online retail businesses.`
    },
    {
        title: "Ismail Furniture",
        link: "https://www.ismailfurniture.com",
        images: [
            getImage("ismailfurniture/1.png"), // Replace with actual image path or direct URL if available
            getImage("ismailfurniture/2.png"), // Replace with actual image path or direct URL if available
        ],
        stack: ["Next.js", "React", "E-commerce", "Laravel","Elasticsearch"],
        description: `Developed a modern, responsive furniture e-commerce platform for Ismail Furniture. The site features product galleries, category browsing, blog integration, and a seamless shopping experience. Implemented best practices for SEO and performance, ensuring a fast and discoverable site.`
    },
    {
        images: [getImage("number5/1.jpg"), getImage("number5/2.jpg")], // adjust image paths if needed
        title: "Number5.ai",
        stack: ["Node.js", "python", "zapier", "Automation Flows"], // replace/add tech you actually used
        link: "https://www.number5.ai",
        description: `Built intelligent automation flows for lead engagement at Number5.ai, an AI business assistant platform. 
Designed sequences combining calls, SMS, and scheduled delays (e.g., Call ➔ SMS ➔ Wait ➔ Call again) to boost lead conversion rates. 
Integrated multi-channel communication APIs and optimized flow reliability and scalability.`
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
    },
    {
        title: "Ordro Point Of Sale System",
        link: "",
        images: [],
        stack: ["express", "react", "flutter"],
        description: "A Point of Sale system designed for retailers, seamlessly integrated with the Ordro ecosystem. It features real-time inventory tracking, multi-store management, sales analytics, and seamless payment processing to enhance retail operations.",
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
    },
    {
        title: "Talkalize",
        link: "https://www.talkalize.com/en",
        images: [],
        stack: ["laravel", "react"],
        description: "Talkalize is an AI-powered automated response system that enhances customer engagement on WhatsApp. It enables instant replies, seamless bookings, and personalized interactions. Businesses can improve brand awareness, drive sales, and foster customer loyalty by streamlining communication and re-engaging with prospects effectively.",
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
    },
    {
        title: "LPCenter",
        images: [
            getImage("lpc/1.png"),
            getImage("lpc/2.png"),
        ],
        link: "https://www.lpcentre.com",
        description: "London Premier Centre is a UK leading training provider based in London and specialises in international short courses.\"",
        stack: ["laravel"]
    },
    {
        title: "Ha55a Store",
        link: "https://www.ha55a.com",
        stack: ["netcore"],
        description: "Digital Services Store allow merchants to sell their services",
        images: [
            getImage("ha55a/1.png"),
            getImage("ha55a/2.png"),
        ]
    },
    {
        title: "Citizen Meds",
        link: "https://citizenmeds.com",
        images: [
            getImage("citizen-meds/1.png"), // Add actual image paths if you have them
            getImage("citizen-meds/2.png"),
        ],
        stack: ["react", "node", "express"], // Adjust based on actual tech stack used
        description: "A telehealth platform providing physician-approved injection home kits for weight management and men's health. Features include seamless ordering, overnight shipping, and a comprehensive solution for GLP-1 weight loss treatments like Semaglutide and Tirzepatide.",
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
        ]
    },

    // {
    //     title: "Review System",
    //     link: "",
    //     images: [
    //         getImage("review-system/1.png"),
    //         getImage("review-system/2.png"),
    //         getImage("review-system/3.png"),
    //     ],
    //     stack: ["django", "react"],
    //     description: "",
    // },
    // {
    //     title: "Yamama Cement",
    //     link: "",
    //     stack: ["netcore"],
    //     description: "Dashboard for Yamama Cement company in ksa",
    //     images: []
    // },
    // {
    //     title: "Baraem",
    //     link: "",
    //     stack: ["laravel","vue"],
    //     description: "non profit organization",
    //     images: []
    // },
    // {
    //     title: "Prokoders CMS website",
    //     link: "https://www.prokoders.com",
    //     stack: [""],
    //     description: "",
    //     images: []
    // }
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

    const projectsRef = useRef(null);
    const track = usePostHogEvent();
    // Section view tracking
    useEffect(() => {
        const ref = projectsRef.current;
        if (!ref) return;
        let hasTracked = false;
        const observer = new window.IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasTracked) {
                    track('section_viewed', { section: 'Projects' });
                    hasTracked = true;
                }
            },
            { threshold: 0.3 }
        );
        observer.observe(ref);
        return () => observer.disconnect();
    }, [track]);

    return (
        <section id="projects" ref={projectsRef}
                 className="  pt-[80px]     container mx-auto"
        >
            <div className=" ">
                <p
                    className="
          text-4xl md:text-6xl lg:text-8xl

    w-full
    text-center
    font-extrabold
    mb-10
    text-navy-blue
    bg-black
    py-4
    border-b-4
    tracking-tight
    shadow-lg
  "
                >
                    Projects
                </p>

            </div>
            <div
                className="
          grid
          lg:grid-cols-3
          grid-cols-1
          gap-5
          w-full
          mx-auto
          container
        "
            >
                {projectsData.map((p, index) => {
                    let hoverTimeout: NodeJS.Timeout | null = null;
                    return (
                        <div
                            key={index}
                            onClick={() => track('project_clicked', { project: p.title })}
                            onMouseEnter={() => {
                                hoverTimeout = setTimeout(() => {
                                    track('project_focused', { project: p.title });
                                }, 1000);
                            }}
                            onMouseLeave={() => {
                                if (hoverTimeout) clearTimeout(hoverTimeout);
                            }}
                        >
                            <Project project={p}/>
                        </div>
                    );
                })}
            </div>
        </section>
    );

    // return (<section id="projects">
    //     <div>
    //         <p className="text-4xl  w-full
    // mx-auto
    // container  font-extrabold mb-10">Projects </p>
    //     </div>
    //     <div className="
    // grid
    // md:grid-cols-3
    // sm:grid-cols-1
    // gap-5
    // w-full
    // mx-auto
    // container
    // ">
    //         {
    //             projects.map((p, index) => {
    //                 return (<Project key={index} project={p}/>)
    //             })
    //         }
    //     </div>
    // </section>)
}
export default Projects