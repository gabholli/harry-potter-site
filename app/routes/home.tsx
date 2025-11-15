import { Link } from "react-router";
import type { Route } from "./+types/home";

export const meta = ({ }: Route.MetaArgs) => {
  return [
    { title: "Harry Potter Site - Home" },
    {
      name: "A website showing information about the Harry Potter universe",
      content: "Find the latest about Harry Potter!"
    },
  ]
}

export default function Home() {
  return <main className="flex flex-col justify-center items-center min-h-dvh
  bg-[url(/black-background.jpg)] bg-center bg-no-repeat bg-cover bg-black/50 bg-blend-overlay">
    <Link
      className="hover:underline md:text-xl xl:text-2xl 3xl:text-6xl text-white"
      to="choices">
      Welcome to the Harry Potter Universe
    </Link>
  </main>
}
