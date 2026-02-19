import { Menu, X } from "lucide-react"
import { socialLinks } from "../data/nav"
import { DynamicIcon } from 'lucide-react/dynamic';
import { useState } from "react";

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    return (
        <header className="flex fixed p-10 top-0 right-0 z-10 w-full ">
            <nav className="flex justify-between">
                {isMenuOpen ? 
                <X onClick={() => setIsMenuOpen(false)} size={40} strokeWidth={1} /> : 
                <Menu onClick={() => setIsMenuOpen(true)} size={40} strokeWidth={1} />}
            </nav>
        </header>
    )
}