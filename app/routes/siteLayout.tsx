import { Outlet } from "react-router"
import NavMenu from "~/components/NavMenu"

const siteLayout = () => {
    return (
        <>
            <NavMenu />
            <Outlet />
        </>
    )
}

export default siteLayout