import { Navbar } from "./Navbar"

export const Header = () => {
    return (
        <header className="fixed top-[20px] flex justify-center w-full z-10">
            <Navbar />
        </header>
    )
}