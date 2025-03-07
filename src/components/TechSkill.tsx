const techSkills = [
    {
        category: "Databases",
        skills: ["MongoDB", "PostgreSQL", "MySQL","RDS","REDIS"],
    },
    {
        category: "Languages",
        skills: ["JavaScript", "TypeScript","Node.js", "Go", "Python",  "PHP"],
    },
    {
        category: "Frameworks & Libraries",
        skills: [
            "NestJS",
            "ExpressJS",
            "Laravel",
            "Django"
        ],
    },
    {
        category: "ORMS",
        skills: [
            "TypeORM",
            "MikroORM",
            "DjangoORM",
            "Mongoose",
            "Eloquent",
            "SQLC"
        ]
    },

    {
        category: "Integrations",
        skills: [
            "IOT Integrations: Airthings, Webex, Cisco, Salto Lockers",
            "Calendar Integrations: Google Calendar, Office365 Calendar, MsExchange",
            "Payment Gateways: Stripe,PerfectMoney, Tasdid, Switch, ZainCash,Paypal"
        ]
    },
    {
        category: "RealTime And Push Notifications",
        skills: [
            "SocketIo",
            "Firebase"
        ]
    },
    // {
    //     category: "Tools & Platforms",
    //     skills: ["Docker", "Kubernetes", "AWS", "Git"],
    // },
];


const TechSkillsSection = () => {
    return (
        <section id="skills">
        <div className="pt-[80px]  container mx-auto ">
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
    border-navy-blue
    tracking-tight
    shadow-lg
  "
            >
                Tech Skills
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {techSkills.map((category, index) => (
                    <div
                        key={index}
                        className=" shadow-md rounded-lg p-6 hover:shadow-lg transition-all duration-300"
                    >
                        <h3 className="text-xl font-semibold mb-4 bg-white opacity-70 text-[#6881cb] text-center h-[50px] rounded-md shadow-md flex items-center justify-center">
                            {category.category}
                        </h3>

                        <ul className="list-disc pl-6 space-y-2">
                            {category.skills.map((skill, idx) => (
                                <li key={idx} className="">
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
        </section>
    );
};

export default TechSkillsSection;
