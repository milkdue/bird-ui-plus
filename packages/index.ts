import type { App, Plugin } from "vue"
import ScrollbarPlugin from "./components/scrollbar"
import AnchorPlugin from "./components/anchor"
import IconPlugin from "./components/icon"
import RowPlugin from "./components/row"
import ColPlugin from "./components/col"
import DividerPlugin from "./components/divider"
import ButtonPlugin from "./components/button"
import LinkPlugin from "./components/link"
import SpacePlugin from "./components/space"
import TooltipPlugin from "./components/tooltip"

import BirdMessage from "./components/message"

import { BirdScrollbar } from "./components/scrollbar"
import { BirdAnchor } from "./components/anchor"
import { BirdSvgIcon } from "./components/icon"
import { BirdRow } from "./components/row"
import { BirdCol } from "./components/col"
import { BirdDivider } from "./components/divider"
import { BirdButton } from "./components/button"
import { BirdLink } from "./components/link"
import { BirdSpace } from "./components/space"
import { BirdTooltip } from "./components/tooltip"

import Logger from "./utils/logger"

const plugins: Plugin[] = [
    ScrollbarPlugin,
    AnchorPlugin,
    IconPlugin,
    RowPlugin,
    ColPlugin,
    DividerPlugin,
    ButtonPlugin,
    LinkPlugin,
    SpacePlugin,
    TooltipPlugin
]

// 全局注册
export default {
    install(app: App) {
        plugins.forEach((plugin: Plugin) => {
            app.use(plugin)
        })

        app.config.globalProperties.$message = BirdMessage
        app.config.globalProperties.Logger = Logger
    }
}

export {
    BirdScrollbar,
    BirdAnchor,
    BirdSvgIcon,
    BirdRow,
    BirdCol,
    BirdDivider,
    BirdButton,
    BirdMessage,
    BirdLink,
    BirdSpace,
    BirdTooltip
}

Logger.debug("This will not be logged in production")
Logger.warn("This will be logged in production")
Logger.error("Tise", new Error("wodeshijie1"))
