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
    return <h1 className="flex justify-center items-center text-white">Loading...</h1>
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