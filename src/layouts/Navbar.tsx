import { Menu } from "lucide-react"
import { navLinks } from "../data/nav"

export const Navbar = () => {
    return (
        <header>
            <nav className="flex justify-between p-6 fixed top-0 z-10 w-full">
                <p>XT.</p>
                <Menu />
            </nav>
        </header>
    )
}