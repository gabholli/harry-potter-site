import type { Route } from "./+types/characterList"

export const meta = ({ }: Route.MetaArgs) => {
    return [
        { title: "Harry Potter Site - Characters" },
        {
            name: "A website showing information about the Harry Potter universe",
            content: "Find the latest about Harry Potter!"
        },
    ]
}

export const HydrateFallback = () => {
    return <h1 className="flex justify-center items-center">Loading...</h1>
}

const characterList = () => {
    return (
        <div>characterList</div>
    )
}

export default characterList