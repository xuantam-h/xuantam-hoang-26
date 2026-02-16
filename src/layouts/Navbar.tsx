import { navLinks } from "../data/nav"

export const Navbar = () => {
    return (
        <nav className="flex justify-between text-white py-4 fixed top-0 z-10 w-full px-8">
            <p>Xuan-Tam H.</p>
            <ul className="flex justify-end space-x-8">
                {navLinks.map(link => (
                    <li key={link.name}>
                        <a href={link.href}>{link.name}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}