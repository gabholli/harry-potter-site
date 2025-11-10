import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("choices", "routes/choices.tsx")

] satisfies RouteConfig;
