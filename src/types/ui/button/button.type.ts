export interface ButtonProps {
    text: string;
    onClick?: () => void;
    icon?: React.ReactNode;
    iconPosition?: "left" | "right";
    color: "primary" | "white";
}