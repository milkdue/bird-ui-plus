import type { App } from "vue";
import BirdSpace from "./src/index.vue";
import "../../styles/space/index.less";

export default {
    install(app: App) {
        app.component(BirdSpace.name!, BirdSpace);
    }
}

export {
    BirdSpace
}