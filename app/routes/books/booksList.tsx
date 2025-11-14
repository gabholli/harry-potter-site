import { Link } from "react-router";
import type { Route } from "./+types/booksList";

export const meta = ({ }: Route.MetaArgs) => {
    return [
        { title: "Harry Potter Site - Books" },
        {
            name: "A website showing information about the Harry Potter universe",
            content: "Find the latest about Harry Potter!"
        },
    ]
}

export const clientLoader = async ({
    params,
}: Route.ClientLoaderArgs) => {
    const res = await fetch("https://potterapi-fedeperin.vercel.app/en/books")
    const product = await res.json()
    console.log(product)
    return product
}

export const HydrateFallback = () => {
    return <h1 className="flex justify-center items-center">Loading...</h1>
}

export const booksList = ({
    loaderData,
}: Route.ComponentProps) => {

    const books = loaderData?.map((book: BooksInterface) => {
        return (
            <div key={book.number}>
                <Link to={`${book.index}`}>
                    <h1 className="hover:underline lg:py-4 lg:px-6">{book.title}</h1>
                </Link>
            </div >
        )

    })

    console.log(books)

    return (
        <main className="flex flex-col items-center md:justify-center">
            <div className="flex flex-col items-center justify-center gap-y-4 mt-4
                lg:grid lg:grid-cols-2">
                {books}
            </div>
        </main>
    )
}

export default booksList