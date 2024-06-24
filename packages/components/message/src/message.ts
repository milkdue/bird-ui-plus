import type { RenderContent } from "../../../utils/types";
export type IconType = {
    icon: string;
    fill: string;
};

export type MessageProps = {
    message: RenderContent;
    type?: string;
    duration?: number;
    offset?: number;
    zIndex?: number;

    onClose?: () => void;
    onDestroy?: () => void;
};

export interface MessageOptions extends MessageProps {
    id?: number | string;
    appendTo?: HTMLElement | string | Element;
};

export type MessageGroupProps = {
    messages: MessageOptions[];
};
