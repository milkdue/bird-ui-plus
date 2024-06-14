const generalRoutes = [
    {
        path: "layout",
        component: () => import("@/demos/layout/doc.md")
    },
    {
        path: "divider",
        component: () => import("@/demos/divider/doc.md")
    },
    {
        path: "color",
        component: () => import("@/demos/color/doc.md")
    },
    {
        path: "icon",
        component: () => import("@/demos/icon/doc.md")
    },
    {
        path: "button",
        component: () => import("@/demos/button/doc.md")
    },
    {
        path: "link",
        component: () => import("@/demos/link/doc.md")
    }
];

export default generalRoutes;