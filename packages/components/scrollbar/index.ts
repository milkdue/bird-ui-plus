import type { App } from "vue";
import BirdScrollbar from "./src/index.vue";
import "../../styles/scrollbar/index.less";

export default {
    install(app: App) {
        app.component(BirdScrollbar.name!, BirdScrollbar);
    }
}

export {
    BirdScrollbar
}