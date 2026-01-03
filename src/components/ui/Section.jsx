import { motion } from "framer-motion";

const Section = ({ id, children, className = "", delay = 0, variants }) => {
    return (
        <section id={id} className={`py-20 md:py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto ${className}`}>
            <motion.div
                variants={variants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.1 }}
            >
                {children}
            </motion.div>
        </section>
    );
};

export default Section;
