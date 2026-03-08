import { Download } from 'lucide-react'
import { Trans, useTranslation } from 'react-i18next';
import cvFile from '/pdf/cv-xuantam-hoang-dev.pdf?url';
import { Button } from '../ui/Button';
import { Container } from '../../layouts/Container';


export const Hero = () => {
    const { t, i18n } = useTranslation();

        return (
            <section id="hero" className="scene flex items-center justify-center min-h-screen">
                <Container>
                    <div className="hero-content md:w-1/2 text-center mx-auto">
                        <h1 
                        className="text-4xl md:text-5xl lg:text-7xl font-serif text-black">
                            <Trans i18nKey="welcome">
                                Ready to craft your <strong>digital experience</strong>
                            </Trans>
                        </h1>
                        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
                            <Button href={cvFile} style="primary" size="md" target='_blank'>
                                {t('btn_resume')}
                                <Download size={16} strokeWidth={2} />
                            </Button>
                            <Button href="#about" style="secondary" size="md">
                                {t('btn_learn')}
                            </Button>
                        </div>
                    </div>
                </Container>
            </section>
        )
}