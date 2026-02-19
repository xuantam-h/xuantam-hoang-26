import { ArrowDownToLine } from 'lucide-react'
import { Button } from '../ui/Button'
import { motion } from 'framer-motion'

export const Hero = () => {
        return (
            <section id="hero" className="scene flex items-center justify-start min-h-screen px-10">
                <div className="hero-content">
                    <motion.h1
                        initial={{ opacity: 0, x: -10, filter: "blur(5px)" }}
                        whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                        transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
                        className="text-5xl md:text-6xl lg:text-7xl font-serif text-black">
                        Hi, I'm <span className='italic'>Xuan-Tam</span>
                    </motion.h1>
                </div>
            </section>
        )
}