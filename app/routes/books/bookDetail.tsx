import type { BookDetailInterface } from "~/types/types"
import type { Route } from "./+types/bookDetail"

export const clientLoader = async ({ params }: Route.ClientLoaderArgs) => {
    const bookIndex = params.index
    const res = await fetch(`https://potterapi-fedeperin.vercel.app/en/books?index=${bookIndex}`)
    const product = await res.json()
    console.log(product)
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
            <h1 className="lg:mb-10 font-bold">{title}</h1>
            <div className="flex flex-col justify-center items-center gap-y-4">
                <div className="flex flex-col justify-center items-center gap-y-4 
                    lg:flex-row lg:w-3xl">
                    <img className="lg:float-left lg:pr-20" src={cover} alt="Book cover" />
                    <p className="text-left indent-10">{description}</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-y-4
                    lg:flex-row gap-x-10 mt-10">
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