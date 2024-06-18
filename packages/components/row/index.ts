import type { App } from "vue";
import BirdRow from "./src";
import "../../styles/row/index.less";

export default {
    install(app: App) {
        app.component(BirdRow.name!, BirdRow);
    }
}

export {
    BirdRow
}