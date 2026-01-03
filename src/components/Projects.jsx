import Section from "./ui/Section";
import { Link, Bell, Building2, Zap, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn, zoomIn } from "../utils/motion";

const ProjectCard = ({ title, description, tags, icon: Icon, highlight = false, index }) => (
    <motion.div
        variants={fadeIn("up", "spring", index * 0.2, 0.75)}
        whileHover={{ y: -10 }}
        className={`group relative p-8 rounded-2xl border transition-all duration-300 flex flex-col h-full ${highlight ? 'bg-slate-900 text-white border-slate-800' : 'bg-white text-slate-900 border-slate-200 hover:border-accent/40 shadow-sm hover:shadow-lg'}`}
    >

        <div className="flex justify-between items-start mb-6">
            <div className={`p-3 rounded-lg ${highlight ? 'bg-white/10 text-accent' : 'bg-blue-50 text-accent'}`}>
                <Icon className="w-6 h-6" />
            </div>
            {highlight && <span className="text-xs font-bold px-2 py-1 bg-accent text-white rounded">FEATURED</span>}
        </div>

        <h3 className={`text-xl font-bold mb-3 group-hover:text-accent transition-colors ${highlight ? 'text-white' : 'text-dark'}`}>{title}</h3>

        <p className={`text-sm mb-6 flex-grow leading-relaxed ${highlight ? 'text-slate-400' : 'text-dark'}`}>
            {description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
            {tags.map((tag) => (
                <span key={tag} className={`text-xs font-medium px-2.5 py-1 rounded-md ${highlight ? 'bg-white/10 text-slate-300' : 'bg-slate-100 text-slate-600'}`}>
                    {tag}
                </span>
            ))}
        </div>
    </motion.div>
);

export default function Projects() {
    const projects = [
        {
            title: "Dynamic Linking System",
            description: "A custom-built replacement for Firebase Dynamic Links, enabling deep linking capabilities for mobile and web apps without external dependencies.",
            tags: ["Laravel", "Redis", "Deep Linking"],
            icon: Link,
            highlight: true
        },
        {
            title: "Notification Engine",
            description: "An event-driven notification service handling emails, SMS, and push notifications via queues, ensuring high deliverability and zero blocking.",
            tags: ["Queues", "Jobs", "Event-Driven"],
            icon: Bell,
            highlight: false
        },
        {
            title: "Digital Banking FD Platform",
            description: "End-to-end fixed deposit management system for banks integration EKYC, Video KYC, and secure UPI payment gateways.",
            tags: ["FinTech", "Security", "Payments"],
            icon: Building2,
            highlight: false
        },
        {
            title: "Real-time API Systems",
            description: "Architected high-throughput APIs for real-estate and banking domains, optimizing response times and handling concurrent requests.",
            tags: ["API Design", "Optimization", "Scalability"],
            icon: Zap,
            highlight: false
        }
    ];

    return (
        <Section id="projects" className="bg-slate-50" variants={fadeIn("up", "tween", 0.2, 1)}>
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                <div>
                    <h2 className="text-3xl font-bold mb-4 text-slate-900">Key Highlights</h2>
                    <p className="text-slate-600 max-w-xl">
                        Solving complex backend challenges with innovative solutions. Here are a few impactful systems I've built.
                    </p>
                </div>
                {/* <a href="#" className="flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all">
          View All Projects <ArrowUpRight className="w-4 h-4" />
        </a> */}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} index={index} />
                ))}
            </div>
        </Section>
    );
}
