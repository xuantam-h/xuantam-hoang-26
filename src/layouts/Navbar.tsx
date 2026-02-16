export const Navbar = () => {
    return (
        <nav className="flex justify-between text-white py-4 fixed top-0 z-10 w-full px-8">
            <p>Xuan-Tam H.</p>
            <ul className="flex justify-end space-x-8">
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#experiences">Experiences</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    )
}