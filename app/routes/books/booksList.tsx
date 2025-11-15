import { Link } from "react-router";
import type { Route } from "./+types/booksList";
import type { BooksInterface } from "~/types/types";

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
    return product
}

export const HydrateFallback = () => {
    // return <h1 className="flex justify-center items-center">Loading...</h1>
    return (
        <div className="flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path
                fill="currentColor" d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z">
                <animateTransform attributeName="transform" dur="0.75s" repeatCount="indefinite"
                    type="rotate" values="0 12 12;360 12 12" /></path></svg>
        </div>
    )
}

export const booksList = ({
    loaderData,
}: Route.ComponentProps) => {

    const books = loaderData?.map((book: BooksInterface) => {
        return (
            <div key={book.number}>
                <Link to={`${book.index}`}>
                    <h1 className="hover:underline lg:py-4 lg:px-12">{book.title}</h1>
                </Link>
            </div >
        )

    })

    return (
        <main className="flex flex-col items-center md:justify-center">
            <div className="flex flex-col items-center justify-center gap-y-4 mt-4
                lg:grid lg:grid-cols-2 3xl:flex">
                {books}
            </div>
        </main>
    )
}

export default booksList