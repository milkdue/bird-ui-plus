import { createTextVNode, isVNode } from "vue";

export const render = (r: any, ...args: any): any => {
    if (typeof r === "function") {
        return r(...args);
    } else if (typeof r === "string") {
        return createTextVNode(r);
    } else if (typeof r === "number") {
        return createTextVNode(String(r));
    } else if (isVNode(r)) {
        return r;
    } else {
        return null;
    }
}