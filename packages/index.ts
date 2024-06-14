import type { App, Plugin } from "vue";
import ScrollbarPlugin from "./components/scrollbar/index";
import { Scrollbar } from "./components/scrollbar/index";

const plugins: Plugin[] = [
    ScrollbarPlugin
]

// 全局注册
export default {
    install(app: App) {
        plugins.forEach((plugin: Plugin) => {
            app.use(plugin);
        })
    }
};

export {
    Scrollbar
}