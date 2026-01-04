import Section from "./ui/Section";
import { Briefcase, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";

const ExperienceCard = ({ role, company, period, description, achievements, index }) => (
    <motion.div
        variants={fadeIn("left", "spring", index * 0.2, 0.75)}
        className="relative pl-8 md:pl-0"
    >
        {/* Timeline Line */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2"></div>

        <div className="md:flex items-start justify-between group">
            {/* Left (Date) */}
            <div className="hidden md:block w-1/2 pr-12 text-right pt-2">
                <span className="inline-flex items-center gap-2 text-accent font-mono text-sm font-semibold bg-blue-50 px-3 py-1 rounded-full">
                    <Calendar className="w-3 h-3" /> {period}
                </span>
            </div>

            {/* Middle Dot */}
            <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.2 }}
                className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-accent border-4 border-white shadow-sm -translate-x-[5px] md:-translate-x-1/2 mt-3 z-10 group-hover:bg-indigo-600 transition-colors"
            ></motion.div>

            {/* Right (Content) */}
            <div className="md:w-1/2 md:pl-12 pb-12">
                <div className="md:hidden mb-2">
                    <span className="inline-flex items-center gap-2 text-accent font-mono text-xs font-semibold bg-blue-50 px-3 py-1 rounded-full">
                        <Calendar className="w-3 h-3" /> {period}
                    </span>
                </div>
                <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm group-hover:shadow-md transition-all hover:border-accent/20"
                >
                    <h3 className="text-xl font-bold text-slate-900">{role}</h3>
                    <div className="text-slate-500 font-medium mb-4 flex items-center gap-2">
                        <Briefcase className="w-4 h-4" /> {company}
                    </div>
                    <p className="text-slate-600 mb-4 italic text-sm border-l-2 border-slate-200 pl-3">
                        {description}
                    </p>
                    <ul className="space-y-2">
                        {achievements.map((item, i) => (
                            <li key={i} className="text-gray-600 text-sm flex items-start gap-2">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0"></span>
                                <span className="leading-relaxed">{item}</span>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </div>
    </motion.div>
);

export default function Experience() {
    const experiences = [
        {
            role: "Laravel Developer",
            company: "Houzeo",
            period: "Aug 2024 – Present",
            description: "Working on Houzeo.com, a leading US real estate platform.",
            achievements: [
                "Architected scalable APIs serving thousands of daily users.",
                "Replaced Firebase Dynamic Links with a custom, cost-effective in-house solution.",
                "Engineered a robust notification system using queues & event-driven architecture.",
                "Optimized complex data workflows using Laravel Jobs."
            ]
        },
        {
            role: "Software Engineer",
            company: "Fermion InfoTech",
            period: "May 2022 – Aug 2024",
            description: "Led development for a Digital Fixed Deposit Platform.",
            achievements: [
                "Built a full-stack FD management system with EKYC & UPI integration.",
                "Designed a secure admin dashboard for streamlining banking operations.",
                "Integrated Video KYC and Core Banking Systems (CBS) for real-time validation.",
                "Optimized backend to handle high-volume transaction processing reliability."
            ]
        },
        {
            role: "Software Engineer",
            company: "Heatcon Systems",
            period: "June 2021 – Apr 2022",
            description: "Contributed to MarathaMilan platform optimization.",
            achievements: [
                "Enhanced backend logic for critical user flows.",
                "Optimized database queries resulting in faster page loads.",
                "Refactored legacy codebases to improve maintainability."
            ]
        }
    ];

    return (
        <Section id="experience" className="bg-white">
            <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }}>
                <motion.div variants={fadeIn("down", "spring", 0.1, 1)} className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4 text-slate-900">Professional Journey</h2>
                    <p className="text-slate-600">A timeline of my growth and contributions.</p>
                </motion.div>
                <div className="max-w-4xl mx-auto">
                    {experiences.map((exp, index) => (
                        <ExperienceCard key={index} {...exp} index={index} />
                    ))}
                </div>
            </motion.div>
        </Section>
    );
}
