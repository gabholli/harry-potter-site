import { Link } from "react-router"

const NavMenu = () => {
    return (
        <nav className="py-6 border-r-2 border-black">
            <ul className="flex flex-col justify-center md:gap-12
                px-12 h-[10dvh] lg:h-full">
                <li className="text-center">
                    <Link to="/">
                        Return to title screen
                    </Link>
                </li>
                <li className="text-center">
                    Link 1
                </li>
                <li className="text-center">
                    Link 2
                </li>
                <li className="text-center">
                    Link 3
                </li>
            </ul>
        </nav>
    )
}

export default NavMenu