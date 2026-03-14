import { motion } from "framer-motion"
import { Trans, useTranslation } from "react-i18next";
import { Container } from "../../layouts/Container";
import { Skills } from "./Skills";
import { Subtitle } from "../ui/Subtitle";
import { Title } from "../ui/Title";

export const About = () => {
    const { t, ready } = useTranslation();
    if (!ready) return null;

    return (
        <section id="about" className="my-40">
            <Container>
                <div className="md:flex items-center gap-10">
                    <div className="content flex-1">
                        <Title subtitle="Who I am" title="Hi, I'm Xuan-Tam." />
                        <p className="text-lg md:text-xl">
                            <Trans i18nKey="about">
                                I'm a dedicated <strong>Front-End React Developer</strong> based in Montreal, Canada. I have 4 years of expertise in building responsive, high-performance web applications using React. I like minimalist and aesthetic interfaces.
                            </Trans>
                        </p>
                    </div>
                    <Skills />
                </div>
            </Container>
        </section>
    )
}