import Section from "./ui/Section";
import { Database, Server, Layout, PenTool, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";

const SkillGroup = ({ title, icon: Icon, skills, index }) => (
    <motion.div
        variants={fadeIn("up", "spring", index * 0.1, 0.75)}
        whileHover={{ y: -5 }}
        className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all"
    >
        <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-50 text-accent rounded-lg">
                <Icon className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900">{title}</h3>
        </div>
        <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
                <span key={skill} className="px-3 py-1 bg-slate-50 text-slate-600 text-sm font-medium rounded-md border border-slate-100 hover:border-accent/30 hover:text-accent transition-colors cursor-default">
                    {skill}
                </span>
            ))}
        </div>
    </motion.div>
);

export default function Skills() {
    const skillData = [
        {
            title: "Backend",
            icon: Server,
            skills: ["PHP", "Laravel", "Node.js", "Express", "REST APIs", "MVC"]
        },
        {
            title: "Frontend",
            icon: Layout,
            skills: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Tailwind", "JQuery"]
        },
        {
            title: "Databases",
            icon: Database,
            skills: ["MySQL", "MongoDB", "Redis", "Schema Design", "Optimization"]
        },
        {
            title: "Tools & DevOps",
            icon: PenTool,
            skills: ["Git", "Postman", "VS Code", "cPanel", "Composer", "NPM"]
        },
        {
            title: "Learning",
            icon: BookOpen,
            skills: ["React.js", "NestJS", "Microservices", "Docker", "Advanced Queues"]
        }
    ];

    return (
        <Section id="skills" className="bg-slate-50">
            <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }}>
                <motion.div variants={fadeIn("down", "tween", 0.1, 1)} className="text-center mb-16 max-w-2xl mx-auto">
                    <h2 className="text-3xl font-bold mb-4 text-slate-900">Technical Arsenal</h2>
                    <p className="text-slate-600">
                        A comprehensive toolkit tailored for building scalable, high-performance web applications.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillData.map((group, index) => (
                        <SkillGroup key={index} {...group} index={index} />
                    ))}
                </div>
            </motion.div>
        </Section>
    );
}
