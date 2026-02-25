import { motion } from "framer-motion"
import { HorizontalSlider } from "../ui/HorizontalSlider"

export const Projects = () => {
    return (
        <section id="projects" className="flex items-center min-h-screen px-10 overflow-hidden">
            <div>
                <motion.div
                initial={{ opacity: 0, x: -10, filter: "blur(5px)" }}
                whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
                className="md:w-1/2 overflow-hidden">
                    <p className="text-xl md:text-3xl">
                        Here are few relevant <strong>projects</strong> I've worked on throughout my career.
                    </p>
                </motion.div>
            </div>
            <HorizontalSlider />
        </section>
    )
}