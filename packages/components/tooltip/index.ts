import type { App } from "vue"
import BirdTooltip from "./src/index.vue"
import "../../styles/tooltip/index.less"

export default {
    install(app: App) {
        app.component(BirdTooltip.name!, BirdTooltip)
    }
}

export { BirdTooltip }
