import { NavLink } from "react-router"

const NavMenu = () => {
    return (
        <nav className="py-6 border-b-2 lg:border-r-2 border-black flex justify-center items-center">
            <ul className="flex lg:flex-col justify-center gap-4 md:gap-12
                px-12 lg:h-full">

                <NavLink to="/">
                    <li className="hidden md:flex text-center">
                        Return to home screen
                    </li>
                </NavLink>

                <NavLink to="/booksList">
                    {({ isActive }) => (
                        <li className={isActive ? "text-blue-900 underline text-center rounded-xl" : "text-center"}>
                            Books
                        </li>
                    )}
                </NavLink>

                <NavLink to="/charactersList">
                    {({ isActive }) => (
                        <li className={isActive ? "text-blue-900 underline text-center rounded-xl" : "text-center"}>
                            Characters
                        </li>
                    )}
                </NavLink>

                <NavLink to="/">
                    {({ isActive }) => (
                        <li className={isActive ? "text-blue-900 underline text-center rounded-xl" : "text-center"}>
                            Houses
                        </li>
                    )}
                </NavLink>

                <NavLink to="/">
                    {({ isActive }) => (
                        <li className={isActive ? "bg-red-800 text-white text-center rounded-xl" : "text-center"}>
                            Spells
                        </li>
                    )}
                </NavLink>

            </ul>
        </nav >
    )
}

export default NavMenu