import { Github, Globe, House, Linkedin, Menu, Send, X } from "lucide-react"
import { socialLinks } from "../data/nav"
import { DynamicIcon } from 'lucide-react/dynamic';
import { useState } from "react";
import i18n from "../i18n";

export const Navbar = () => {
    const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    const openLanguageMenu = () => {
        setIsLanguageMenuOpen(!isLanguageMenuOpen);
    }
    
    return (
        <nav className="fixed-navbar fixed right-0 z-10 px-4 py-2 top-[20px] flex gap-8 items-center max-w-max">
            <a href="#hero">
                <House />
            </a>
            {socialLinks.map((link) => (
                <a key={link.name} href={link.href} target="_blank">
                    <DynamicIcon name={link.name} />
                </a>
            ))}
            <Globe onClick={openLanguageMenu} />
            {isLanguageMenuOpen && (
            <div className="language-switch bg-black flex gap-4">
                <button onClick={() => changeLanguage("en")}>EN</button>
                <button onClick={() => changeLanguage("fr")}>FR</button>
            </div>
            )}
            <a href="#" className='btn btn-primary border-black text-white gap-3' target='_blank'>
                Reach me
                <Send size={16} strokeWidth={2} />
            </a>
        </nav>
    )
}