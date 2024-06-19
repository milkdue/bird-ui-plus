import { defineComponent, computed, CSSProperties, h } from "vue";
export default defineComponent({
    name: "BirdDivider",
    props: {
        type: {
            type: String,
            default: "primary",
            validator(value: string) {
                return ["primary", "link", "success", "warn", "error"].includes(
                    value
                );
            }
        },
        lineType: {
            type: String,
            default: "solid",
            validator(value: string) {
                return ["solid", "dotted", "dashed", "double"].includes(value);
            }
        },
        width: Number,
        // 实线
        fillWidth: Number,
        // 虚线
        dashWidth: Number,
        color: String,
        angle: Number,
        fade: Boolean,
        content: String
    },
    setup(props) {
        const hrStyle = computed<CSSProperties>(() => {
            let style: CSSProperties = {};
            if (props.width) {
                style.borderTopWidth = props.width + "px";
            }

            if (props.color) {
                style.borderTopColor = props.color;
            }

            if (props.lineType === "dashed" && props.fillWidth && props.dashWidth) {
                let fill = props.color || `var(--${props.type}-color-light)`;

                style.borderTop = "none";
                style.paddingTop = props.width ? props.width + "px" : "1px";

                if (props.angle) {
                    style.background = `repeating-linear-gradient(${props.angle}deg, ${fill} 0, ${fill} ${props.fillWidth + "px"}, transparent ${props.fillWidth + "px"}, transparent ${props.fillWidth + props.dashWidth + "px"})`;
                } else {
                    style.background = `repeating-linear-gradient(to right, ${fill} 0 ${props.fillWidth + "px"}, transparent 0 ${props.fillWidth + props.dashWidth + "px"})`;
                }
            }

            if (props.fade) {
                // mask-image 遮照的非透明部分和元素重叠的部分才进行显示
                style.maskImage = "linear-gradient(to right, transparent, black, transparent)";
            }

            if (props.lineType === "solid" && props.content) {
                style["--divider-content-width"] = props.width ? props.width + "px" : "1px";
                style["--divider-content-color"] =
                    props.color || `var(--${props.type}-color-light)`;
            }

            return style;
        });

        return () => h(
            "hr",
            {
                class: {
                    "bird-divider": true,
                    [props.type]: true,
                    [`hr-${props.lineType}`]: true,
                    "hr-solid-content": props.lineType === "solid" && props.content
                },
                style: hrStyle.value,
                "data-content": props.content
            }
        )
    }
});
