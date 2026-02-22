import { ArrowDownToLine } from 'lucide-react'
import { Button } from '../ui/Button'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next';


export const Hero = () => {
        return (
            <section id="hero" className="scene flex items-center justify-center min-h-screen px-10">
                <motion.div 
                initial={{ opacity: 0, y: -10, filter: "blur(5px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
                className="hero-content md:w-1/2 text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif text-black">Ready to craft your <strong>digital experience</strong></h1>
                    <div className="flex flex-row justify-center gap-4 mt-8">
                        <a href="#" className='btn bg-black text-white'>
                            View resume
                            <ArrowDownToLine className='ml-2' size={16} strokeWidth={2}/>
                        </a>
                        <a href="#about" className='btn'>Learn more</a>
                    </div>
                </motion.div>
            </section>
        )
}