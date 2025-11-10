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
  return <>
    <Link to="choices">
      Enter the site
    </Link>
    <h1>Test</h1>
  </>
}
