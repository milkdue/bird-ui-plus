import { h, defineComponent, computed, CSSProperties, provide, reactive, renderSlot } from "vue";

type RowContext = {
    gutter: number | undefined
};

export default defineComponent({
    name: "BirdRow",
    props: {
        tag: {
            type: String,
            default: "div"
        },
        gutter: Number,
        flex: {
            type: Boolean,
            default: false
        },
        justify: {
            type: String,
            default: "start",
            validator(value: string) {
                return [
                    "start",
                    "end",
                    "center",
                    "space-around",
                    "space-between",
                    "space-evenly"
                ].includes(value);
            }
        },
        align: {
            type: String,
            default: "top",
            validator(value: string) {
                return ["top", "middle", "bottom"].includes(value);
            }
        }
    },
    setup(props, context) {
        provide<RowContext>("gutter", reactive({
            gutter: props.gutter
        }));
        const style = computed<CSSProperties>(() => {
            const style: CSSProperties = {};

            if (props.gutter) {
                style.marginLeft = `-${props.gutter / 2}px`;
                style.marginRight = style.marginLeft;
            }

            return style;
        });

        return () => h(
            props.tag,
            {
                class: [
                    "bird-row",
                    {
                        "bird-row--flex": props.flex
                    },
                    props.justify !== "start" && props.flex ? `is-justify-${props.justify}` : "",
                    props.align !== "top" && props.flex ? `is-align-${props.align}` : ""
                ],
                style: style.value
            },
            [
                renderSlot(context.slots, "default")
            ]
        )
    }
});
