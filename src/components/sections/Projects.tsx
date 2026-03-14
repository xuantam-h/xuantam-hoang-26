import { motion } from "framer-motion"
import { Container } from "../../layouts/Container"
import { Title } from "../ui/Title"
import { projects } from "../../data/projects"
import { Card } from "../ui/Card"

export const Projects = () => {
    return (
        <section id="projects" className="my-8 text-center">
            <Container>
                <Title subtitle="Portfolio" title="Check out my projects." />
                <div className="projects-list md:grid md:grid-cols-2 gap-6 mt-20">
                    {projects.map((project) => (
                        <motion.div
                            key={project.title}
                            className="min-w-[300px] md:min-w-[450px]"
                        >
                            <Card
                                img={project.image}
                                title={project.title}
                                url={project.url}
                                tags={project.tags}
                            />
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    )
}