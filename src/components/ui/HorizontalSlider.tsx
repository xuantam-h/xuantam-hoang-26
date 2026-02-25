import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { projects } from "../../data/projects";
import { Card } from "./Card";

export const HorizontalSlider = () => {
    const [width, setWidth] = useState(0);
    const carousel = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (carousel.current) {
            setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
        }
    }, []);

    return (
        <div className="slider mt-10 overflow-hidden cursor-grab active:cursor-grabbing overflow-hidden">
            <motion.div 
                ref={carousel}
                drag="x"
                dragConstraints={{ right: 0, left: -width }}
                dragElastic={0.1}
                className="slider-container flex gap-8 overflow-hidden"
            >
                {projects.map((project) => (
                    <motion.div 
                        key={project.title} 
                        className="min-w-[300px] md:min-w-[450px] flex-shrink-0"
                    >
                        <Card 
                            img={project.img} 
                            title={project.title} 
                            url={project.url} 
                        />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};