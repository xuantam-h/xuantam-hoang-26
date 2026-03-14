import { Download } from 'lucide-react'
import { Trans, useTranslation } from 'react-i18next';
import cvFile from '/pdf/cv-xuantam-hoang-dev.pdf?url';
import { Button } from '../ui/Button';
import { Container } from '../../layouts/Container';


export const Hero = () => {
    const { t, i18n } = useTranslation();

        return (
            <section id="hero" className="flex items-center justify-center min-h-screen">
                <Container>
                    <div className="hero-content text-center mx-auto">
                        <h1 
                        className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
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