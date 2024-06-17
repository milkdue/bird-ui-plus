import type { App } from "vue";
import "./icon";
import BirdSvgIcon from "./src/index.vue";
import "../../styles/icon/index.less";

export default {
    install(app: App) {
        app.component(BirdSvgIcon.name!, BirdSvgIcon);
    }
}

export {
    BirdSvgIcon
}