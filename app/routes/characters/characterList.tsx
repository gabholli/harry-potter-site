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

const characterList = () => {
    return (
        <div>characterList</div>
    )
}

export default characterList