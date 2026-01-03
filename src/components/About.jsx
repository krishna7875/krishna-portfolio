import Section from "./ui/Section";
import { Code2, Cpu, Wrench } from "lucide-react";

export default function About() {
    return (
        <Section id="about" className="bg-white">
            <div className="flex flex-col md:flex-row gap-16 items-start">
                <div className="flex-1">
                    <h2 className="text-3xl font-bold mb-6 text-slate-900 flex items-center gap-3">
                        <span className="w-8 h-1 bg-accent rounded-full block"></span>
                        About Me
                    </h2>
                    <p className="text-slate-600 text-lg leading-relaxed mb-6">
                        I am a results-driven <span className="font-semibold text-slate-900">Backend Architect</span> with over 4 years of hands-on experience in building high-performance web applications. My expertise lies in designing scalable APIs, optimizing database interactions, and ensuring system reliability under high loads.
                    </p>
                    <p className="text-slate-600 text-lg leading-relaxed mb-8">
                        Currently at <span className="font-medium text-slate-900">Houzeo</span>, I tackle complex challenges like upgrading legacy systems, implementing event-driven architectures, and streamlining data workflows. I prioritize <span className="font-medium text-slate-900">clean code</span> and maintainable architecture over quick fixes.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="p-4 bg-slate-50 rounded-lg border border-slate-100 hover:border-accent/30 transition-colors">
                            <Code2 className="w-8 h-8 text-accent mb-3" />
                            <h3 className="font-bold text-slate-900">Backend Systems</h3>
                            <p className="text-sm text-slate-500 mt-1">Robust logic & secure APIs</p>
                        </div>
                        <div className="p-4 bg-slate-50 rounded-lg border border-slate-100 hover:border-accent/30 transition-colors">
                            <Cpu className="w-8 h-8 text-accent mb-3" />
                            <h3 className="font-bold text-slate-900">Performance</h3>
                            <p className="text-sm text-slate-500 mt-1">Optimized queries & caching</p>
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-1/3">
                    <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-32 bg-accent/10 rounded-full translate-x-10 -translate-y-10 blur-3xl"></div>

                        <h3 className="text-xl font-bold mb-6 relative z-10">Quick Stats</h3>
                        <ul className="space-y-6 relative z-10">
                            <li>
                                <div className="text-3xl font-bold text-accent">4+</div>
                                <div className="text-slate-400 text-sm">Years Experience</div>
                            </li>
                            <li>
                                <div className="text-3xl font-bold text-accent">3</div>
                                <div className="text-slate-400 text-sm">Major Enterprise Projects</div>
                            </li>
                            <li>
                                <div className="text-3xl font-bold text-accent">100%</div>
                                <div className="text-slate-400 text-sm">Commitment to Quality</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </Section>
    );
}
