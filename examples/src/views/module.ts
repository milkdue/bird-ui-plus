import { InjectionKey } from "vue";

export const wrapperKey: InjectionKey<() => HTMLDivElement> = Symbol("ScrollWrapper");