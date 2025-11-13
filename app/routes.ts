import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    layout("./routes/siteLayout.tsx", [
        route("choices", "routes/choices.tsx"),
        route("booksList", "routes/books/booksList.tsx"),
        route("charactersList", "routes/characters/characterList.tsx"),
        route("housesList", "routes/houses/housesList.tsx"),
        route("spellList", "routes/spells/spellList.tsx")
    ])

] satisfies RouteConfig;
