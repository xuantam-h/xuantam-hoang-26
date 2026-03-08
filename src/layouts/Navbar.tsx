import { Globe, House, Send } from "lucide-react"
import { socialLinks } from "../data/nav"
import { DynamicIcon } from 'lucide-react/dynamic';
import i18n from "../i18n";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export const Navbar = () => {
    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    const { t, i18n } = useTranslation();
    
    return (
        <motion.nav
        initial={{ opacity: 0, y: -10, filter: "blur(5px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
        className="fixed-navbar flex gap-6 md:gap-8 items-center max-w-max px-4 py-2">
            <a href="#hero">
                <House />
            </a>
            {socialLinks.map((link) => (
                <a key={link.name} href={link.href} target="_blank">
                    <DynamicIcon name={link.name} />
                </a>
            ))}
            <button onClick={() => changeLanguage("en")} className="font-bold cursor-pointer text-lg">EN</button>
            <button onClick={() => changeLanguage("fr")} className="font-bold cursor-pointer text-lg">FR</button>
            <a href="#" className='btn btn-primary border-black text-white gap-3' target='_blank'>
                <span className="hidden md:block">{t('btn_contact')}</span>
                <Send size={16} strokeWidth={2} />
            </a>
        </motion.nav>
    )
}