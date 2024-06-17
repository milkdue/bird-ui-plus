export type AnchorOption = {
    title: string;
    href: string;
    children?: AnchorOption[];
};

export type AnchorListProps = {
    options: AnchorOption[];
    active: string;
    root?: boolean;
};

export type AnchorProps = {
    options: AnchorOption[];
    showMarker?: boolean;
    scrollEl?: () => HTMLElement | Window;
    offset?: number;
    ms?: number;
    scrollbar?: boolean;
}