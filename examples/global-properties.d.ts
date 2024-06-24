import { ComponentCustomProperties } from "@vue/runtime-core";
import type { MessageOptions } from "@bird/components/message/src/message";

declare module '@vue/runtime-core' {
    // 根据新增加的属性 追加类型声明
    interface ComponentCustomProperties {
        $message: (options: MessageOptions) => {close: () => void}
    }
}