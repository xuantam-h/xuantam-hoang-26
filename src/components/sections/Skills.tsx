import { motion } from "framer-motion"
import { skills } from "../../data/skills"
import { useTranslation } from "react-i18next";

export const Skills = () => {
    const { t, i18n } = useTranslation();

    return (
        <section id="skills" className="flex items-center min-h-screen px-10">
            <div>
                <div className="text-left flex-1 md:w-1/2">
                    <p className="text-xl md:text-3xl">
                        {t("skills")}
                    </p>
                </div>
                <div className="skills-list flex-2 flex gap-15 mt-10">
                    {skills.map((skill) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, y: 10, filter: "blur(5px)" }}
                            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                            className="skill-item">
                            <h3 className="text-xl font-bold mb-2">{skill.name}</h3>
                            <ul className="flex gap-2 items-start">
                                {skill.skills.map((skillItem) => (
                                    <li key={skillItem} className="badge inline-flex text-sm py-1 px-3 bg-black text-white font-bold">
                                        {skillItem}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}