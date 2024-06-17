import type { App } from "vue";
import BirdAnchor from "./src/index.vue";
import "../../styles/anchor/index.less";

export default {
    install(app: App) {
        app.component(BirdAnchor.name!, BirdAnchor);
    }
}

export {
    BirdAnchor
}