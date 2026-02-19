import { socialLinks } from '../../data/nav';
import { DynamicIcon } from 'lucide-react/dynamic';

export const Socials = () => {
    return (
        <div className="social-links hidden md:flex md:flex-col gap-4">
            {socialLinks.map((link) => (
                <a key={link.name} href={link.href} target="_blank">
                    <DynamicIcon name={link.name} />
                </a>
            ))}
        </div>
    )
}