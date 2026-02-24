
import { useState } from "react";
import { projects } from "../../data/projects"
import { Tag } from "./Tag"
import { Card } from "./Card";

export const HorizontalSlider = () => {

    return (
        <div className="slider">
            <div className="slider-container">
                {projects.map((project) => (
                    <Card img={project.img} title={project.title} tags={project.tags} url={project.url} />
                ))}
            </div>
        </div>
    )
}