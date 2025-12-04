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
        <main className="flex justify-center items-center h-full text-white">
            <div className="lg:grid grid-cols-6 grid-rows-[50px_1fr_50px] 3xl:gap-x-40
                flex flex-col justify-center items-center text-center gap-y-4 my-4">
                <div className="col-span-6 3xl:mb-29">
                    <h1 className="font-bold">{title}</h1>
                </div>
                <div className="col-span-2 col-start-2 row-start-2 lg:my-12 xl:flex xl:justify-center xl:items-center">
                    <img className="3xl:size-full" src={cover} alt="Book cover" />
                </div>
                <div className="col-span-2 col-start-4 row-start-2">
                    <p className="text-left px-4 lg:px-0 3xl:leading-18 indent-8">{description}</p>
                </div>
                <div className="col-span-6 row-start-3">
                    <div className="flex flex-col justify-center items-center gap-y-4
                     lg:flex-row gap-x-6 my-6 mx-24 3xl:mt-20">
                        <h1 className="font-bold">Original Title:</h1>
                        <p>{originalTitle}</p>
                        <h1 className="font-bold">Pages:</h1>
                        <p>{pages}</p>
                        <h1 className="font-bold">Release Date:</h1>
                        <p>{releaseDate}</p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default bookDetail