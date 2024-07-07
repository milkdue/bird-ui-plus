export type LinkProps = {
    type?: "primary" | "success" | "warning" | "danger"
    href: string,
    disabled?: boolean,
    underline?: boolean,
    newTab?: boolean
};