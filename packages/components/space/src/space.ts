type OverFlow = "visible" | "hidden" | "clip" | "scroll" | "auto";

export type SpaceProps = {
    inline?: boolean,
    dir?: "vertical" | "horizontal" | "vertical-reverse" | "horizontal-reverse",
    size?: "xs" | "sm" | "md" | "lg" | "xl",
    justify?: "start" | "center" | "end" | "space-between" | "space-around" | "space-evenly",
    align?: "start" | "center" | "end" | "baseline" | "stretch",
    overflow?: OverFlow | OverFlow[],
    wrap?: boolean | "wrap-reverse"
};