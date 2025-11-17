import type { SpellInterface } from "~/types/types"
import type { Route } from "./+types/spellList"

export const meta = ({ }: Route.MetaArgs) => {
    return [
        { title: "Harry Potter Site - Spells" },
        {
            name: "A website showing information about the Harry Potter universe",
            content: "Find the latest about Harry Potter!"
        },
    ]
}

export const clientLoader = async ({
    params,
}: Route.ClientLoaderArgs) => {
    const res = await fetch("https://potterapi-fedeperin.vercel.app/en/spells?max=12")
    const product = await res.json()
    return product
}

export const HydrateFallback = () => {
    return <h1 className="flex justify-center items-center text-white">Loading...</h1>
}


export const spellList = ({
    loaderData,
}: Route.ComponentProps) => {

    const spells = loaderData?.map((item: SpellInterface) => {
        return (
            <div key={item.index}
                className="flex flex-col justify-center items-center text-center mx-4">
                <h1 className="lg:py-4 lg:px-6 underline font-bold">{item.spell}</h1>
                <p>{item.use}</p>
            </div>
        )

    })


    return (
        <main className="flex flex-col items-center md:justify-center text-white">
            <div className="flex flex-col items-center justify-center mt-4 mb-4
                lg:my-0 gap-y-4 lg:gap-y-0
                lg:grid lg:grid-cols-3 3xl:flex px-24">
                {spells}
            </div>
        </main>
    )
}

export default spellList