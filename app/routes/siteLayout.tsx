import { Outlet } from "react-router"
import NavMenu from "~/components/NavMenu"

const siteLayout = () => {
    return (
        <div className="grid grid-cols-1 grid-rows-[75px_1fr] min-h-dvh
            lg:grid-cols-[200px_1fr] lg:grid-rows-1
        ">
            <NavMenu />
            <Outlet />
        </div>
    )
}

export default siteLayout