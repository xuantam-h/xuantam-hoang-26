import { motion } from "framer-motion"
import { useTranslation } from "react-i18next";

export const About = () => {
    const { t, i18n } = useTranslation();
    
    return (
        <section id="about" className="scene flex items-center justify-center min-h-screen px-10">
            <motion.div 
                initial={{ opacity: 0, y: -10, filter: "blur(5px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                className="md:w-1/2 text-center">
                <p className="mt-6 text-xl md:text-3xl">{t("about")}</p>
            </motion.div>
        </section>
    )
}