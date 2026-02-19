import { motion } from "framer-motion"
import { skills } from "../../data/skills"

export const Skills = () => {
    return (
        <section id="skills" className="flex items-center justify-start min-h-screen px-10">
            <div className="flex items-center justify-between gap-10">
                <motion.div
                initial={{ opacity: 0, x: -10, filter: "blur(5px)" }}
                whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
                className="text-left flex-1">
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif text-black">Skills</h2>
                    <p className="mt-6 md:text-2xl">
                        My <strong>technical skills</strong> to build responsive, high-performance web applications.
                    </p>
                </motion.div>
                <div className="skills-list flex-2 flex gap-4 items-start">
                    {skills.map((skill) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                            className="skill-item badge inline-flex text-sm py-1 px-3 rounded-sm bg-black text-white"
                        >
                            <h3 className="text-sm font-bold uppercase">{skill.name}</h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}