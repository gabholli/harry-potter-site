import type { Route } from "./+types/housesList"

export const meta = ({ }: Route.MetaArgs) => {
    return [
        { title: "Harry Potter Site - Houses" },
        {
            name: "A website showing information about the Harry Potter universe",
            content: "Find the latest about Harry Potter!"
        },
    ]
}

export const HydrateFallback = () => {
    return <div>Loading...</div>
}

const housesList = () => {
    return (
        <div>housesList</div>
    )
}

export default housesList