import { motion } from "framer-motion"

export const About = () => {
    return (
        <section id="about" className="scene flex items-center justify-center min-h-screen px-10">
            <motion.div 
                initial={{ opacity: 0, y: -10, filter: "blur(5px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                className="md:w-1/2 text-center">
                <p className="mt-6 text-xl md:text-3xl">I'm a dedicated <strong>Front-End React Developer</strong> based in Montreal, Canada. I have 4 years of expertise in building responsive, high-performance web applications using React. I like minimalist and aesthetic interfaces.</p>
            </motion.div>
        </section>
    )
}