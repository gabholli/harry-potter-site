import type { Route } from "./+types/spellList";

export const meta = ({ }: Route.MetaArgs) => {
    return [
        { title: "Harry Potter Site - Spells" },
        {
            name: "A website showing information about the Harry Potter universe",
            content: "Find the latest about Harry Potter!"
        },
    ]
}

const spellList = () => {
    return (
        <div>spellList</div>
    )
}

export default spellList