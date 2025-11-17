import { NavLink } from "react-router"

const NavMenu = () => {
    return (
        <nav className="border-b-2 lg:border-r-2 border-black flex justify-center items-center bg-lime-50 font-bold">
            <ul className="flex lg:flex-col justify-center gap-2 md:gap-12
                px-12 lg:h-full">

                <NavLink to="/">
                    <li className="hidden md:block text-center">
                        Home
                    </li>
                </NavLink>

                <NavLink to="/booksList">
                    {({ isActive }) => (
                        <li className={isActive ? "text-blue-900 underline text-center" : "text-center"}>
                            Books
                        </li>
                    )}
                </NavLink>

                <NavLink to="/charactersList">
                    {({ isActive }) => (
                        <li className={isActive ? "text-blue-900 underline text-center" : "text-center"}>
                            Characters
                        </li>
                    )}
                </NavLink>

                <NavLink to="/housesList">
                    {({ isActive }) => (
                        <li className={isActive ? "text-blue-900 underline text-center" : "text-center"}>
                            Houses
                        </li>
                    )}
                </NavLink>

                <NavLink to="/spellList">
                    {({ isActive }) => (
                        <li className={isActive ? "text-blue-900 underline text-center" : "text-center"}>
                            Spells
                        </li>
                    )}
                </NavLink>

            </ul>
        </nav >
    )
}

export default NavMenu