import { ArrowDownToLine } from 'lucide-react'
import { Button } from '../ui/Button'
import { motion } from 'framer-motion'

export const Hero = () => {
        return (
            <section id="hero" className="flex items-center justify-start min-h-screen px-10">
                <div className="hero-content md:w-2/3">
                    <motion.h1
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="text-5xl md:text-6xl lg:text-7xl font-serif text-black">
                        Hi, I'm <span className='italic'>Xuan-Tam</span>
                    </motion.h1>
                    <p className="mt-6 md:text-2xl">I'm a dedicated <strong>Front-End React Developer</strong> based in Montreal, Canada. I have 4 years of expertise in building responsive, high-performance web applications using React. I like minimalist and elegant interfaces.</p>
                    <div className="flex align-center gap-5">
                        <Button href="#about" size="lg">
                            Learn more
                        </Button>
                    </div>
                </div>
            </section>
        )
}