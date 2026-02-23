import { HorizontalSlider } from "../ui/HorizontalSlider"
import { Trans } from "react-i18next";

export const Projects = () => {
    return (
        <section id="projects" className="flex items-center min-h-screen px-10">
            <div className="">
                <div className="md:w-1/2">
                    <p className="text-xl md:text-3xl">
                        <Trans i18nKey="skills">I rely on the following <strong>technical skills</strong> to build responsive, high-performance web applications.</Trans>
                    </p>
                </div>
                <div className="projects-list flex flex-col md:flex-row gap-8 mt-10">
                    <HorizontalSlider></HorizontalSlider>
                </div>
            </div>
        </section>
    )
}