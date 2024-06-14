import type { App } from "vue";
import Scrollbar from "./src/index.vue";
import "../../styles/scrollbar/index.less";

export default {
    install(app: App) {
        app.component(Scrollbar.name!, Scrollbar);
    }
}

export {
    Scrollbar
}