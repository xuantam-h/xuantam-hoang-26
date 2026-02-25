import { motion } from "framer-motion"
import { skills } from "../../data/skills"
import { Trans, useTranslation } from "react-i18next";
import { Tag } from "../ui/Tag";

const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.4 } }
}

const item = {
    hidden: { opacity: 0, x: -20, filter: "blur(5px)" },
    visible: { opacity: 1, x: 0, filter: "blur(0px)", transition: { duration: 0.4 } }
}

export const Skills = () => {

    const { t, i18n } = useTranslation();

    return (
        <section id="skills" className="flex items-center min-h-screen px-10">
            <div>
                <div className="text-left flex-1 md:w-1/2">
                    <p className="text-xl md:text-3xl">
                        <Trans i18nKey="skills">I rely on the following <strong>technical skills</strong> to build responsive, high-performance web applications.</Trans>
                    </p>
                </div>
                <motion.div variants={container} initial="hidden" whileInView="visible" className="skills-list flex-2 flex flex-col gap-6 md:gap-10 mt-10">
                    {skills.map((skill) => (
                        <motion.div
                            key={skill.name}
                            variants={item}
                            className="skill-item">
                            <h3 className="text-lg md:text-xl font-bold mb-2">{t(skill.translationKey)}</h3>
                            <ul className="flex flex-wrap gap-2 items-start">
                                {skill.skills.map((skillItem) => (
                                    <Tag key={skillItem} skillItem={skillItem} />
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}