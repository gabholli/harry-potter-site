import type { CharacterDetailInterface } from "~/types/types"
import type { Route } from "./+types/characterDetail"

export const meta = ({ }: Route.MetaArgs) => {
    return [
        { title: "Harry Potter Site - Character Detail" },
        {
            name: "A website showing information about the Harry Potter universe",
            content: "Find the latest about Harry Potter!"
        },
    ]
}

export const clientLoader = async ({ params }: Route.ClientLoaderArgs) => {
    const characterIndex = params.index
    const res = await fetch(`https://potterapi-fedeperin.vercel.app/en/characters?index=${characterIndex}`)
    const product = await res.json()
    console.log(product)
    return product
}

export const HydrateFallback = () => {
    return <h1 className="flex justify-center items-center text-white">Loading...</h1>
}

const characterDetail = ({
    loaderData,
}: Route.ComponentProps) => {

    const {
        birthdate,
        children,
        fullName,
        hogwartsHouse,
        image,
        nickname
    }: CharacterDetailInterface = loaderData

    return (
        <main className="flex justify-center items-center h-full text-white">

            <div className="lg:grid grid-cols-4 grid-rows-[100px_1fr_1fr_1fr] gap-4
                flex flex-col justify-center items-center p-4 lg:p-0 text-center">
                <div className="col-span-4">
                    <h1 className="font-bold">{fullName}</h1>
                </div>
                <div className="col-span-2 row-span-3 row-start-2">
                    <img src={image} alt="Character" />
                </div>
                <div className="col-span-2 col-start-3 row-start-2">
                    <h1><span className="font-bold">Birthdate: </span>{birthdate}</h1>
                </div>
                <div className="col-span-2 col-start-3 row-start-3">
                    <h1><span className="font-bold">Hogwarts House: </span>{hogwartsHouse}</h1>
                </div>
                <div className="col-span-2 col-start-3 row-start-4">
                    <h1><span className="font-bold">Nickname: </span>{nickname}</h1>
                </div>
            </div>

        </main>
    )
}

export default characterDetail