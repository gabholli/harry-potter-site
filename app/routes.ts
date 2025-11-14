import { type RouteConfig, index, layout, prefix, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    layout("./routes/siteLayout.tsx", [
        route("choices", "routes/choices.tsx"),

        ...prefix("booksList", [
            index("routes/books/booksList.tsx"),
            route("/:index", "routes/books/bookDetail.tsx"),
        ]),

        ...prefix("characterList", [
            index("routes/characters/characterList.tsx"),
        ]),

        ...prefix("housesList", [
            index("routes/houses/housesList.tsx"),
        ]),

        ...prefix("spellList", [
            index("routes/spells/spellList.tsx"),
        ]),
        // route("charactersList", "routes/characters/characterList.tsx"),
        // route("housesList", "routes/houses/housesList.tsx"),
        // route("spellList", "routes/spells/spellList.tsx")
    ])

] satisfies RouteConfig;
