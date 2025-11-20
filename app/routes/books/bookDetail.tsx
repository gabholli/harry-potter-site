import type { BookDetailInterface } from "~/types/types"
import type { Route } from "./+types/bookDetail"

export const meta = ({ }: Route.MetaArgs) => {
    return [
        { title: "Harry Potter Site - Book Detail" },
        {
            name: "A website showing information about the Harry Potter universe",
            content: "Find the latest about Harry Potter!"
        },
    ]
}

export const clientLoader = async ({ params }: Route.ClientLoaderArgs) => {
    const bookIndex = params.index
    const res = await fetch(`https://potterapi-fedeperin.vercel.app/en/books?index=${bookIndex}`)
    const product = await res.json()
    console.log(product)
    return product
}

export const HydrateFallback = () => {
    return <h1 className="flex justify-center items-center text-white">Loading...</h1>
}

const bookDetail = ({
    loaderData,
}: Route.ComponentProps) => {

    const {
        cover,
        description,
        originalTitle,
        pages,
        releaseDate,
        title
    }: BookDetailInterface = loaderData

    return (
        <main className="text-white flex flex-col justify-center items-center gap-y-6 p-6 text-center">
            <h1 className="font-bold">{title}</h1>
            <div className="flex flex-col justify-center items-center">
                <div className="flex flex-col justify-center items-center gap-y-4
                    3xl:w-full 
                    lg:flex-row lg:w-2xl 3xl:flex-col 3xl:px-20">
                    <img className="lg:pr-20" src={cover} alt="Book cover" />
                    <p className="text-left indent-10 px-2 lg:px-0">{description}</p>
                </div>
                <div className="hidden lg:flex flex-col justify-center items-center gap-y-4
                    lg:flex-row gap-x-8 mt-6 mx-40">
                    <h1 className="font-bold">Original Title:</h1>
                    <p>{originalTitle}</p>
                    <h1 className="font-bold">Pages:</h1>
                    <p>{pages}</p>
                    <h1 className="font-bold">Release Date:</h1>
                    <p>{releaseDate}</p>
                </div>

            </div>
        </main>
    )
}

export default bookDetail