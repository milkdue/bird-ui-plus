import HomeView from "../views/HomeView.vue";
import Modules from "../views/Modules.vue";
import navs from "./config/components.json";
import generalRoutes from "./modules/general";

const compModelRoute = {
    path: "/module",
    name: "module",
    redirect: "/module/layout",
    component: Modules,
    children: [...generalRoutes],
    meta: {
        navs
    }
};

const routes = [
    {
        path: "/",
        name: "home",
        component: HomeView
    },
    {
        path: "/develop",
        name: "develop",
        component: () => import("../views/Development.vue")
    },
    compModelRoute
];

export default routes;
