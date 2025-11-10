import { Outlet } from "react-router"
import NavMenu from "~/components/NavMenu"

const siteLayout = () => {
    return (
        <div className="grid grid-cols-1 grid-rows-[75px_1fr] min-h-svh">
            <NavMenu />
            <Outlet />
        </div>
    )
}

export default siteLayout