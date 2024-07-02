export type ButtonProps = {
    type?: "primary" | "secondary" | "plain";
    status?: "primary" | "success" | "warning" | "danger";
    size?: "sm" | "md" | "lg" | "xl";
    disabled?: boolean;
    shape?: "round" | "circle" | "square"
    loading?: boolean;
    block?: boolean;
};