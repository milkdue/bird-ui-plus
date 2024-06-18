import type { App } from "vue";
import BirdCol from "./src";
import "../../styles/col/index.less";

export default {
    install(app: App) {
        app.component(BirdCol.name!, BirdCol);
    }
}

export {
    BirdCol
}