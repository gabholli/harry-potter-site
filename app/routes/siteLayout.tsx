import { Outlet } from "react-router"
import NavMenu from "~/components/NavMenu"

const siteLayout = () => {
    return (
        <div className="grid grid-cols-1 grid-rows-[125px_1fr] min-h-dvh
            lg:grid-cols-[200px_1fr] lg:grid-rows-1 3xl:grid-cols-[400px_1fr]
            bg-[url(/black-background.jpg)] bg-center bg-no-repeat bg-cover
            ">
            <NavMenu />
            <Outlet />
        </div>
    )
}

export default siteLayout