import type { HouseInterface } from "~/types/types"
import type { Route } from "./+types/housesList"
import { Link } from "react-router"

export const meta = ({ }: Route.MetaArgs) => {
    return [
        { title: "Harry Potter Site - Houses" },
        {
            name: "A website showing information about the Harry Potter universe",
            content: "Find the latest about Harry Potter!"
        },
    ]
}

export const clientLoader = async ({
    params,
}: Route.ClientLoaderArgs) => {
    const res = await fetch("https://potterapi-fedeperin.vercel.app/en/houses")
    const product = await res.json()
    return product
}

export const HydrateFallback = () => {
    // return <h1 className="flex justify-center items-center">Loading...</h1>
    return (
        <div className="flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path
                fill="currentColor" d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z">
                <animateTransform attributeName="transform" dur="0.75s" repeatCount="indefinite"
                    type="rotate" values="0 12 12;360 12 12" /></path></svg>
        </div>
    )
}

export const housesList = ({
    loaderData,
}: Route.ComponentProps) => {

    const houses = loaderData?.map((item: HouseInterface) => {
        return (
            <div key={item.index}>
                <Link to={`${item.index}`}>
                    <h1 className="hover:underline lg:py-4 font-bold">{item.house}</h1>
                </Link>
            </div>
        )

    })


    return (
        <main className="flex flex-col items-center md:justify-center text-white">
            <div className="flex flex-col items-center justify-center gap-y-4 mt-4 mb-4">
                {houses}
            </div>
        </main>
    )
}

export default housesList