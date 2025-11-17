import type { CharacterInterface } from "~/types/types"
import type { Route } from "./+types/characterList"
import { Link } from "react-router"

export const meta = ({ }: Route.MetaArgs) => {
    return [
        { title: "Harry Potter Site - Characters" },
        {
            name: "A website showing information about the Harry Potter universe",
            content: "Find the latest about Harry Potter!"
        },
    ]
}

export const clientLoader = async ({
    params,
}: Route.ClientLoaderArgs) => {
    const res = await fetch("https://potterapi-fedeperin.vercel.app/en/characters")
    const product = await res.json()
    console.log(product)
    return product
}

export const HydrateFallback = () => {
    return <h1 className="flex justify-center items-center text-white">Loading...</h1>
}


export const characterList = ({
    loaderData,
}: Route.ComponentProps) => {

    const characters = loaderData?.map((character: CharacterInterface) => {
        return (
            <div
                key={character.index}>
                <Link to={`${character.index}`}>
                    <h1 className="hover:underline lg:py-4 font-bold">{character.fullName}</h1>
                </Link>
            </div>
        )

    })

    return (
        <main className="flex flex-col items-center md:justify-center text-white">
            <div className="flex flex-col items-center justify-center gap-10 mt-4 mb-4
                lg:grid lg:grid-cols-3 lg:mx-24 lg:my-0 lg:gap-y-2 3xl:flex">
                {characters}
            </div>
        </main>
    )
}
export default characterList