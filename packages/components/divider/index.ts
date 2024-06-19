import type { App } from "vue";
import BirdDivider from "./src";
import "../../styles/divider/index.less";

export default {
    install(app: App) {
        app.component(BirdDivider.name!, BirdDivider);
    }
}

export {
    BirdDivider
}