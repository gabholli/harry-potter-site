import type { CharacterDetailInterface, HouseDetailInterface } from "~/types/types"
import type { Route } from "./+types/houseDetail"

export const meta = ({ }: Route.MetaArgs) => {
    return [
        { title: "Harry Potter Site - House Detail" },
        {
            name: "A website showing information about the Harry Potter universe",
            content: "Find the latest about Harry Potter!"
        },
    ]
}

export const clientLoader = async ({ params }: Route.ClientLoaderArgs) => {
    const houseIndex = params.index
    const res = await fetch(`https://potterapi-fedeperin.vercel.app/en/houses?index=${houseIndex}`)
    const product = await res.json()
    console.log(product)
    return product
}

export const HydrateFallback = () => {
    return <h1 className="flex justify-center items-center text-white">Loading...</h1>
}

const houseDetail = ({
    loaderData,
}: Route.ComponentProps) => {

    const {
        animal,
        colors,
        emoji,
        founder,
        house
    }: HouseDetailInterface = loaderData

    const houseColors = colors?.map((color: string) => {
        return (
            <h1>{color}</h1>
        )
    })

    return (
        <main className="flex flex-col justify-center items-center h-full text-white gap-y-4">
            <h1><span className="font-bold">House Name: </span>{house}</h1>
            <h1><span className="font-bold">House Animal: </span>{animal}</h1>

            <h1><span className="font-bold">House Founder: </span>{founder}</h1>


        </main>
    )
}

export default houseDetail