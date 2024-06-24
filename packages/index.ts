import type { App, Plugin } from "vue";
import ScrollbarPlugin from "./components/scrollbar";
import AnchorPlugin from "./components/anchor";
import IconPlugin from "./components/icon";
import RowPlugin from "./components/row";
import ColPlugin from "./components/col";
import DividerPlugin from "./components/divider";
import BirdMessage from "./components/message";
import { BirdScrollbar } from "./components/scrollbar";
import { BirdAnchor } from "./components/anchor";
import { BirdSvgIcon } from "./components/icon";
import { BirdRow } from "./components/row";
import { BirdCol } from "./components/col";
import { BirdDivider } from "./components/divider";

const plugins: Plugin[] = [
    ScrollbarPlugin,
    AnchorPlugin,
    IconPlugin,
    RowPlugin,
    ColPlugin,
    DividerPlugin
]

// 全局注册
export default {
    install(app: App) {
        plugins.forEach((plugin: Plugin) => {
            app.use(plugin);
        });

        app.config.globalProperties.$message = BirdMessage;
    }
};

export {
    BirdScrollbar,
    BirdAnchor,
    BirdSvgIcon,
    BirdRow,
    BirdCol,
    BirdDivider,
    BirdMessage
}