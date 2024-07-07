import type { App } from "vue";
import BirdLink from "./src/index.vue";
import "../../styles/link/index.less";

export default {
    install(app: App) {
        app.component(BirdLink.name!, BirdLink);
    }
}

export {
    BirdLink
}