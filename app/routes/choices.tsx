import { Link } from "react-router"

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
            <Link to="/">
                Return to title screen
            </Link>
            <div className="">choices</div>
        </main>

    )
}

export default Choices