
import { projects } from "../../data/projects"
import { Tag } from "./Tag"

export const HorizontalSlider = () => {
    return (
        <div className="slider">
            {projects.map((project) => (
                <div key={project.id} className="inline-block w-64 h-40 bg-gray-200 mr-4">
                    <img src="https://placehold.co/600x400" alt={project.title} className="w-full h-full object-cover rounded-lg" />
                    <ul className="flex flex-wrap gap-2 items-start mt-4">
                        {project.tags.map((projectItem) => (
                            <Tag skillItem={projectItem} />
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    )
}