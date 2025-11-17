import { Link } from "react-router"
import type { Route } from "./+types/choices";

export const meta = ({ }: Route.MetaArgs) => {
    return [
        { title: "Harry Potter Site - Choices" },
        {
            name: "A website showing information about the Harry Potter universe",
            content: "Find the latest about Harry Potter!"
        },
    ]
}

const Choices = () => {
    return (
        <main>
            <div className="flex justify-center items-center h-full text-white font-bold">
                <h1>Choose an option</h1>
            </div>
        </main>

    )
}

export default Choices