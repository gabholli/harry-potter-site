import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    layout("./routes/siteLayout.tsx", [
        index("routes/home.tsx"),
        route("choices", "routes/choices.tsx")
    ])

] satisfies RouteConfig;
