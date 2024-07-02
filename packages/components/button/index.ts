import type { App } from "vue";
import BirdButton from "./src/index.vue";
import "../../styles/button/index.less";

export default {
    install(app: App) {
        app.component(BirdButton.name!, BirdButton);
    }
}

export {
    BirdButton
}