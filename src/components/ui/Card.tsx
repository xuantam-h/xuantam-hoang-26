import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface CardProps {
    img: string;
    title: string;
    url: string;
}

export const Card = ({img, title, url} : CardProps) => {
    const [showOverlay, setShowOverlay] = useState(false);

    return (
            <motion.div
            onHoverStart={() => { setShowOverlay(true)}}
            onHoverEnd={() => { setShowOverlay(false)}} 
            key={title}
            className="inline-block mr-4 cursor-pointer">
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
                    <img src="https://placehold.co/600x400" alt={title} className="w-full h-full object-cover" />
                </div>
            </motion.div>
    )
}