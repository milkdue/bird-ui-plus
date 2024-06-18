import { h, defineComponent, computed, CSSProperties, inject, toRef, renderSlot } from "vue";

type RowContext = {
    gutter: number | undefined
};

export default defineComponent({
    name: "BirdCol",
    props: {
        tag: {
            type: String,
            default: "div"
        },
        span: {
            type: Number,
            default: 24
        },
        offset: Number,
        xs: [Number, Object],
        sm: [Number, Object],
        md: [Number, Object],
        lg: [Number, Object],
        xl: [Number, Object]
    },
    setup(props, context) {
        const rowContext = inject<RowContext>("gutter");
        if (!rowContext) throw new Error("can not inject row context!");

        const style = computed<CSSProperties>(() => {
            const style: CSSProperties = {};

            const gutter = toRef(rowContext, "gutter")
            if (gutter.value) {
                let padding: number = gutter.value ? gutter.value / 2 : 0
                style.paddingLeft = `${padding}px`;
                style.paddingRight = `${padding}px`;
            }

            return style;
        });

        const classList = computed<string[]>(() => {
            const classList: string[] = [];

            if (props.offset) {
                classList.push(`bird-col-offset-${props.offset}`);
            }
            ["xs", "sm", "md", "lg", "xl"].forEach(size => {
                if (typeof props[size] === "number") {
                    classList.push(`bird-col-${size}-${props[size]}`);
                } else if (typeof props[size] === "object") {
                    const property = props[size];
                    Object.keys(property).forEach(prop => {
                        classList.push(
                            prop !== "span"
                                ? `bird-col-${size}-${prop}-${property[prop]}`
                                : `bird-col-${size}-${property[prop]}`
                        );
                    });
                }
            });

            return classList;
        })

        return () => h(
            props.tag,
            {
                class: ["bird-col", `bird-col-${props.span}`].concat(classList.value),
                style: style.value
            },
            [
                renderSlot(context.slots, "default")
            ]
        )
    }
});
