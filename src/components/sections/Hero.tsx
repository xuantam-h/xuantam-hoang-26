import { ArrowRight, Download } from 'lucide-react'
import { motion } from 'framer-motion'
import { Trans, useTranslation } from 'react-i18next';
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
                    className="text-4xl md:text-5xl lg:text-7xl font-serif text-black">
                        <Trans i18nKey="welcome">
                            Ready to craft your <strong>digital experience</strong>
                        </Trans>
                    </motion.h1>
                    <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
                        <a href={cvFile} className='btn btn-primary gap-3' target='_blank'>
                            {t('btn_resume')}
                            <Download size={16} strokeWidth={2} />
                        </a>
                        <a href="#about" className='btn'>{t('btn_learn')}</a>
                    </div>
                </div>
            </section>
        )
}