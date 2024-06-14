declare module "*.vue" {
    // import Vue from "vue";
    // export default Vue;

    import { defineComponent } from "vue";
	const Component: ReturnType<typeof defineComponent>;
	export default Component;

    export interface GlobalComponents {
        RouterLink: typeof import("vue-router")["RouterLink"];
        RouterView: typeof import("vue-router")["RouterView"];
        TopBar: typeof import("./src/components/TopBar.vue")["default"];
        HomeView: typeof import("./src/views/HomeView.vue")["default"];
        Development: typeof import("./src/views/Development.vue")["default"];
    }
};
