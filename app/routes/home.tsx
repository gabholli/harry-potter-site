import { Link } from "react-router";
import type { Route } from "./+types/home";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Harry Potter Site - Home" },
    {
      name: "A website showing information about the Harry Potter universe",
      content: "Find the latest about Harry Potter!"
    },
  ];
}

export default function Home() {
  return <main className="flex flex-col justify-center items-center min-h-dvh">
    <Link
      className="hover:underline md:text-2xl text-shadow-xs"
      to="choices">
      Welcome to the Harry Potter Universe
    </Link>
  </main>
}
