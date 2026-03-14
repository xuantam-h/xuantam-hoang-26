import { motion } from "framer-motion"
import { Container } from "../../layouts/Container"
import { Title } from "../ui/Title"
import { projects } from "../../data/projects"
import { Card } from "../ui/Card"

export const Projects = () => {
    return (
        <section id="projects" className="my-8 text-center">
            <Container>
                <Title subtitle="My Projects" title="Check out some of my work." />
                <div className="projects-list md:flex gap-8 mt-10 flex-wrap justify-center">
                    {projects.map((project) => (
                        <motion.div
                            key={project.title}
                            className="min-w-[300px] md:min-w-[450px] flex-shrink-0"
                        >
                            <Card
                                img={project.image}
                                title={project.title}
                                url={project.url}
                            />
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    )
}