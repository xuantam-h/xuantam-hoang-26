import { Menu } from "lucide-react"
import { socialLinks } from "../data/nav"
import { DynamicIcon } from 'lucide-react/dynamic';

export const Navbar = () => {
    return (
        <header className="flex fixed p-4 top-0 right-0 z-10 w-full justify-end md:w-auto md:min-h-screen ">
            <nav className="flex justify-between md:flex-col justify-between ">
                <Menu />
                <div className="social-links hidden md:flex md:flex-col gap-4">
                    {socialLinks.map((link) => (
                        <a key={link.name} href={link.href}>
                            <DynamicIcon name={link.name} />
                        </a>
                    ))}
                </div>
            </nav>
        </header>
    )
}