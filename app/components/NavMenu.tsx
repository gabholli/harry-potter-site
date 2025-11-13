import { NavLink } from "react-router"

const NavMenu = () => {
    return (
        <nav className="py-6 border-b-2 lg:border-r-2 border-black flex justify-center items-center">
            <ul className="flex lg:flex-col justify-center gap-4 md:gap-12
                px-12 lg:h-full">

                <NavLink to="/">
                    <li className="text-center">
                        Return to home screen
                    </li>
                </NavLink>

                <NavLink to="/booksList">
                    {({ isActive }) => (
                        <li className={isActive ? "bg-red-800 text-white text-center rounded-xl" : "text-center"}>
                            Books
                        </li>
                    )}
                </NavLink>

                <NavLink to="/tasks">
                    {({ isActive }) => (
                        <li className={isActive ? "bg-red-800 text-white text-center rounded-xl" : "text-center"}>Link 2</li>
                    )}
                </NavLink>

                <NavLink to="/tasks">
                    {({ isActive }) => (
                        <li className={isActive ? "bg-red-800 text-white text-center rounded-xl" : "text-center"}>Link 3</li>
                    )}
                </NavLink>

            </ul>
        </nav >
    )
}

export default NavMenu