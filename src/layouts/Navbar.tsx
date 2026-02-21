import { Menu, X } from "lucide-react"
import { socialLinks } from "../data/nav"
import { DynamicIcon } from 'lucide-react/dynamic';
import { useState } from "react";
import i18n from "../i18n";

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };
    
    return (
        <header className="flex fixed p-10 top-0 right-0 z-10 w-full justify-between items-center">
            <nav className="flex justify-between">
                {isMenuOpen ? 
                <X onClick={() => setIsMenuOpen(false)} size={40} strokeWidth={1} className="cursor-pointer"/> : 
                <Menu onClick={() => setIsMenuOpen(true)} size={40} strokeWidth={1} className="cursor-pointer"/>}
            </nav>
            <div className="language-switch">
                <button onClick={() => changeLanguage("en")}>EN</button>
                <button onClick={() => changeLanguage("fr")}>FR</button>
            </div>
        </header>
    )
}