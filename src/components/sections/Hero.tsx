import { Button } from '../ui/Button'

export const Hero = () => {
        return (
            <section id="hero" className="min-h-screen flex items-center justify-center text-center">
                <div className="hero-content">
                    <h1 className="text-4xl font-bold text-center text-white">
                        Hi, I'm Xuan-Tam.
                    </h1>
                    <Button href="#about" size="sm">
                        Download CV
                    </Button>
                </div>
            </section>
        )
}