import { InjectionKey } from 'vue';
export type ScrollbarProps = {
    // 原生滚动条
    native?: boolean;
    // 总是显示滚动条
    always?: boolean;
};

type ScrollbarContext = {
    scrollbarEl?: HTMLDivElement;
    wrapEl?: HTMLDivElement;
};

export const scrollbarContextKey: InjectionKey<ScrollbarContext> = Symbol('scrollbarContext');