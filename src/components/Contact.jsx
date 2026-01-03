import { useState, useRef } from "react";
import Section from "./ui/Section";
import { Mail, Phone, Linkedin, Github, Coffee, Loader2, Send, CheckCircle2, AlertCircle } from "lucide-react";
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState({ type: null, message: "" });
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ type: null, message: "" });

        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        if (!serviceId || !templateId || !publicKey) {
            setStatus({
                type: "error",
                message: "Email service is not configured. Please check environemnt variables."
            });
            setLoading(false);
            return;
        }

        try {
            await emailjs.send(
                serviceId,
                templateId,
                {
                    from_name: formState.name,
                    to_name: "Krishna Bansode",
                    from_email: formState.email,
                    to_email: "krishnab1803@gmail.com",
                    message: formState.message,
                },
                publicKey
            );

            setStatus({
                type: "success",
                message: "Message sent! I'll get back to you soon."
            });
            setFormState({ name: "", email: "", message: "" });

            // Auto dismiss success message
            setTimeout(() => setStatus({ type: null, message: "" }), 5000);

        } catch (error) {
            console.error("EmailJS Error:", error);
            setStatus({
                type: "error",
                message: "Something went wrong. Please try again later."
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <footer id="contact" className="bg-slate-900 py-16 text-slate-300">
            <div className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                    <div>
                        <h2 className="text-3xl font-bold text-white mb-6">Let's Build Something Scalable</h2>
                        <p className="text-slate-400 text-lg mb-8 max-w-md">
                            Always open to discussing backend architecture, Laravel performance, or new opportunities.
                        </p>
                        <div className="flex flex-col gap-4">
                            <a href="mailto:krishnab1803@gmail.com" rel="noopener noreferrer" className="flex items-center gap-3 text-white hover:text-accent transition-colors">
                                <div className="p-3 bg-slate-800 rounded-lg">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <span className="font-medium">krishnab1803@gmail.com</span>
                            </a>
                            <a href="tel:+918329412838" className="flex items-center gap-3 text-white hover:text-accent transition-colors">
                                <div className="p-3 bg-slate-800 rounded-lg">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <span className="font-medium">+91 8329412838</span>
                            </a>
                            <a href="https://linkedin.com/in/krishna-bansode" target="_blank" className="flex items-center gap-3 text-white hover:text-accent transition-colors">
                                <div className="p-3 bg-slate-800 rounded-lg">
                                    <Linkedin className="w-5 h-5" />
                                </div>
                                <span className="font-medium">linkedin.com/in/krishna-bansode</span>
                            </a>
                        </div>
                    </div>

                    <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 relative overflow-hidden">
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <div>
                                <label className="block text-sm font-medium mb-2 text-slate-400" htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formState.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:border-accent text-white placeholder-slate-600 focus:ring-1 focus:ring-accent transition-all"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2 text-slate-400" htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formState.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:border-accent text-white placeholder-slate-600 focus:ring-1 focus:ring-accent transition-all"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2 text-slate-400" htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    value={formState.message}
                                    onChange={handleChange}
                                    required
                                    minLength={10}
                                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:border-accent text-white placeholder-slate-600 focus:ring-1 focus:ring-accent transition-all resize-none"
                                    placeholder="I'm looking for a scalable backend solution..."
                                ></textarea>
                            </div>

                            <AnimatePresence>
                                {status.message && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className={`p - 3 rounded - lg text - sm flex items - center gap - 2 ${status.type === 'success' ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'
                                            } `}
                                    >
                                        {status.type === 'success' ? <CheckCircle2 className="w-4 h-4" /> : <AlertCircle className="w-4 h-4" />}
                                        {status.message}
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full py-3 bg-accent hover:bg-blue-600 disabled:bg-slate-700 disabled:cursor-not-allowed text-white font-bold rounded-lg transition-all flex items-center justify-center gap-2 group"
                            >
                                {loading ? (
                                    <>
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        Send Message
                                        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
                    <p>© {new Date().getFullYear()} Krishna Bansode. All rights reserved.</p>
                    <div className="flex items-center gap-6">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors flex items-center gap-2 font-mono text-xs">
                            // Built with React, Tailwind & Laravel mindset
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
