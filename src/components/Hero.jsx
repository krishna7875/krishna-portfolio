import { ArrowRight, Download, Server, Database, Globe, Code2, Terminal, Cpu, Cloud, Smartphone, Layers } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { textVariant, fadeIn, staggerContainer } from "../utils/motion";
import { RESUME_URL, PROFILE_IMAGE_URL } from "../config/assets";

export default function Hero() {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);

    // System Topology Definition
    // ViewBox: 0 0 1200 800
    const topology = {
        nodes: [
            { id: "client", x: 100, y: 400, icon: Smartphone, label: "Client" },
            { id: "lb", x: 300, y: 400, icon: Cloud, label: "Load Balancer" },
            { id: "api", x: 500, y: 400, icon: Server, label: "API Gateway" },
            { id: "service_a", x: 700, y: 250, icon: Cpu, label: "Auth Service" },
            { id: "service_b", x: 700, y: 550, icon: Layers, label: "Data Service" },
            { id: "cache", x: 900, y: 250, icon: Database, label: "Redis Cache" },
            { id: "db_primary", x: 900, y: 550, icon: Database, label: "Primary DB" },
            { id: "queue", x: 700, y: 700, icon: Layers, label: "Job Queue" },
        ],
        connections: [
            { from: "client", to: "lb", path: "M 130 400 L 270 400" },
            { from: "lb", to: "api", path: "M 330 400 L 470 400" },
            { from: "api", to: "service_a", path: "M 530 400 C 580 400, 600 250, 670 250" },
            { from: "api", to: "service_b", path: "M 530 400 C 580 400, 600 550, 670 550" },
            { from: "service_a", to: "cache", path: "M 730 250 L 870 250" },
            { from: "service_b", to: "db_primary", path: "M 730 550 L 870 550" },
            { from: "api", to: "queue", path: "M 530 400 C 550 400, 550 700, 670 700" },
        ]
    };

    return (
        <section className="relative pt-24 pb-12 md:pt-32 md:pb-20 px-6 overflow-hidden bg-slate-950 min-h-[90vh] flex items-center">
            {/* Animated System Background Layer */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-40 md:opacity-100">
                <svg className="w-full h-full opacity-30" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
                    <defs>
                        <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
                            <stop offset="50%" stopColor="#6366f1" stopOpacity="0.5" />
                            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
                        </linearGradient>
                    </defs>

                    {/* Connections */}
                    {topology.connections.map((conn, i) => (
                        <g key={i}>
                            {/* Base Line */}
                            <path
                                d={conn.path}
                                fill="none"
                                stroke="url(#line-gradient)"
                                strokeWidth="2"
                                className="opacity-20"
                            />
                            {/* Animated Data Packet */}
                            <circle r="3" fill="#60a5fa" className="filter blur-[1px]">
                                <animateMotion
                                    dur={`${3 + Math.random() * 4}s`}
                                    repeatCount="indefinite"
                                    path={conn.path}
                                    rotate="auto"
                                    calcMode="linear"
                                />
                            </circle>
                            {/* Secondary Packet (offset) */}
                            <circle r="2" fill="#818cf8" className="filter blur-[1px] opacity-70">
                                <animateMotion
                                    dur={`${4 + Math.random() * 4}s`}
                                    begin="1s"
                                    repeatCount="indefinite"
                                    path={conn.path}
                                    rotate="auto"
                                    calcMode="linear"
                                />
                            </circle>
                        </g>
                    ))}

                    {/* Nodes */}
                    {topology.nodes.map((node, i) => (
                        <g key={node.id} transform={`translate(${node.x}, ${node.y})`}>
                            <circle r="20" fill="#1e293b" stroke="#334155" strokeWidth="2" />
                            <foreignObject x="-12" y="-12" width="24" height="24">
                                <node.icon className="w-6 h-6 text-slate-500" />
                            </foreignObject>
                            <text
                                x="0"
                                y="40"
                                fill="#64748b"
                                fontSize="12"
                                fontFamily="monospace"
                                textAnchor="middle"
                                className="uppercase tracking-widest opacity-70"
                            >
                                {node.label}
                            </text>
                        </g>
                    ))}
                </svg>

                {/* Subtle Grid Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)] opacity-50" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto md:px-12 grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
                <motion.div
                    variants={staggerContainer(0.1, 0.2)}
                    initial="hidden"
                    animate="show"
                    style={{ y: y1 }}
                >
                    <motion.div variants={fadeIn("down", "tween", 0.1, 0.5)} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 text-blue-300 text-sm font-medium mb-4 border border-blue-800/50 select-none backdrop-blur-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        Available for new projects
                    </motion.div>

                    <motion.h1 variants={textVariant(0.3)} className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-4">
                        Building robust <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">Backend Systems</span>
                    </motion.h1>

                    <motion.p variants={fadeIn("up", "tween", 0.5, 0.5)} className="text-base md:text-lg text-slate-400 mb-8 leading-relaxed max-w-lg">
                        I'm <span className="font-semibold text-slate-200">Krishna Bansode</span>, a Laravel & Backend Developer specialized in designing scalable APIs, optimizing database performance, and architecting reliable web solutions.
                    </motion.p>

                    <motion.div variants={fadeIn("up", "tween", 0.7, 0.5)} className="flex flex-wrap gap-4">
                        <a href="#projects" className="px-7 py-3.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-500 hover:scale-105 transition-all flex items-center gap-2 shadow-lg shadow-blue-500/25 active:scale-95 border border-transparent">
                            View Projects <ArrowRight className="w-4 h-4" />
                        </a>
                        <a href={RESUME_URL} className="px-7 py-3.5 bg-slate-900/50 text-slate-300 border border-slate-700 font-medium rounded-lg hover:border-slate-500 hover:text-white hover:bg-slate-800 hover:scale-105 transition-all flex items-center gap-2 active:scale-95 backdrop-blur-sm">
                            Download Resume <Download className="w-4 h-4" />
                        </a>
                    </motion.div>

                    <motion.div variants={fadeIn("up", "tween", 0.9, 0.5)} className="mt-12 flex items-center gap-8 text-slate-500 text-sm font-medium">
                        <div className="flex items-center gap-2 group hover:text-blue-400 transition-colors cursor-default">
                            <Server className="w-5 h-5 text-slate-600 group-hover:text-blue-500 transition-colors" />
                            <span>Scalable APIs</span>
                        </div>
                        <div className="flex items-center gap-2 group hover:text-indigo-400 transition-colors cursor-default">
                            <Database className="w-5 h-5 text-slate-600 group-hover:text-indigo-500 transition-colors" />
                            <span>Complex Data</span>
                        </div>
                        <div className="flex items-center gap-2 group hover:text-purple-400 transition-colors cursor-default">
                            <Globe className="w-5 h-5 text-slate-600 group-hover:text-purple-500 transition-colors" />
                            <span>Laravel Expert</span>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Profile Photo Block */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
                    className="relative block lg:block mt-12 lg:mt-0"
                    style={{ y: y2 }}
                >
                    <div className="relative w-full max-w-[280px] md:max-w-sm mx-auto">
                        {/* Decorative Background Elements */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-[2rem] rotate-6 opacity-30 blur-2xl animate-pulse"></div>

                        {/* Main Image Container */}
                        <div className="relative rounded-[2rem] overflow-hidden border border-slate-700/50 shadow-2xl bg-slate-900/80 backdrop-blur-sm">
                            <div className="aspect-[4/5] relative">
                                <img
                                    src={PROFILE_IMAGE_URL}
                                    alt="Krishna Bansode"
                                    className="object-cover w-full h-full opacity-90 hover:opacity-100 transition-opacity duration-500"
                                />
                                {/* Overlay Gradient */}
                                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent"></div>

                                {/* Code Badge Overlay */}
                                <div className="absolute bottom-4 left-4 right-4 p-4 bg-slate-900/90 backdrop-blur-md rounded-xl border border-slate-700/50">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="p-1.5 bg-blue-500/20 rounded-md">
                                            <Terminal className="w-4 h-4 text-blue-400" />
                                        </div>
                                        <div className="text-xs font-mono text-slate-400">Current Status</div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                        <span className="text-sm font-medium text-slate-200">Building Scalable Systems</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Experience Badge */}
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                            className="absolute -top-6 -right-6 p-4 bg-slate-800 rounded-xl shadow-xl border border-slate-700 flex items-center gap-3 shadow-black/20 select-none z-10"
                        >
                            <div className="bg-blue-500/20 p-2 rounded-lg text-blue-400">
                                <Code2 className="w-6 h-6" />
                            </div>
                            <div>
                                <div className="text-xs text-slate-400 font-medium">Experience</div>
                                <div className="text-lg font-bold text-slate-100">4.5+ Years</div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
