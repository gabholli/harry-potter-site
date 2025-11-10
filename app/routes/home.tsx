import { Link } from "react-router";
import type { Route } from "./+types/home";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Harry Potter Site" },
    {
      name: "A website showing information about the Harry Potter universe",
      content: "Find the latest about Harry Potter!"
    },
  ];
}

export default function Home() {
  return <main className="flex flex-col justify-center items-center self-center">
    <Link to="choices">
      Welcome to Harry Potter Universe
    </Link>
    <h1>Test</h1>
  </main>
}
