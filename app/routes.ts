import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    layout("./routes/siteLayout.tsx", [
        route("choices", "routes/choices.tsx")
    ])

] satisfies RouteConfig;
