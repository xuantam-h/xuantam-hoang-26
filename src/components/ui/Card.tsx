import { AnimatePresence, motion } from "framer-motion";
import { Tag } from "./Tag";
import { useState } from "react";
import { ExternalLink } from "lucide-react";


interface CardProps {
    img: string;
    title: string;
    url: string;
    tags?: string[];
}

export const Card = ({img, title, url, tags} : CardProps) => {
    const [showOverlay, setShowOverlay] = useState(false);


    return (
            <motion.div
            onHoverStart={() => { setShowOverlay(true)}}
            onHoverEnd={() => { setShowOverlay(false)}} 
            key={title}
            className="inline-block cursor-pointer">
                <div className="card-img relative">
                    <AnimatePresence initial={false}>
                        {showOverlay && (
                            <motion.a
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2, delay: 0.2, ease: "easeOut" }}
                            href={url}
                            target="_blank"
                            className="card-overlay absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center text-white">
                                <ExternalLink />
                            </motion.a>
                        )}
                    </AnimatePresence>
                    <img src={img} alt={title} className="w-full h-full object-cover" />
                </div>
                <div className="card-text mt-4">
                    <ul className="flex flex-wrap gap-3 items-start">
                        {tags?.map((skillItem) => (
                            <Tag key={skillItem} skillItem={skillItem} />
                        ))}
                    </ul>
                </div>
            </motion.div>
    )
}