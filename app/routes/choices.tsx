import { Link } from "react-router"
import type { Route } from "./+types/choices";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Harry Potter Site - Choices" },
        {
            name: "A website showing information about the Harry Potter universe",
            content: "Find the latest about Harry Potter!"
        },
    ];
}

const Choices = () => {
    return (
        <main>
            <div className="flex justify-center items-center h-full">
                <h1 className="text-shadow-xs">Choose an option</h1>
            </div>
        </main>

    )
}

export default Choices