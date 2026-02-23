import { ArrowRight, Download } from 'lucide-react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next';
import cvFile from '/pdf/cv-xuantam-hoang-dev.pdf?url';


export const Hero = () => {
    const { t, i18n } = useTranslation();

        return (
            <section id="hero" className="scene flex items-center justify-center min-h-screen px-10">
                <div className="hero-content md:w-1/2 text-center">
                    <motion.h1 
                    initial={{ opacity: 0, y: -10, filter: "blur(5px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
                    className="text-4xl md:text-5xl lg:text-7xl font-serif text-black">Ready to craft your <strong>digital experience</strong></motion.h1>
                    <div className="flex flex-row justify-center gap-4 mt-8">
                        <a href={cvFile} className='btn bg-black text-white gap-2' target='_blank'>
                            {t('btn_resume')}
                            <Download size={16} strokeWidth={2} />
                        </a>
                        <a href="#about" className='btn'>{t('btn_learn')}</a>
                    </div>
                </div>
            </section>
        )
}