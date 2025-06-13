"use client";

import * as S from "./style";
import { ButtonProps } from "src/types/ui/button/button.type";

const Button = ({
                    text,
                    icon,
                    iconPosition = "left",
                    color = "primary",
                    onClick,
                }: ButtonProps) => {
    return (
        <S.Button $color={color} $icon={!!icon} onClick={onClick}>
            {iconPosition === "left"
                ? (icon ?? <div style={{ width: 24 }} />)
                : <div style={{ width: 24 }} />}
            <S.ButtonText $color={color} $icon={!!icon}>{text}</S.ButtonText>
            {iconPosition === "right"
                ? (icon ?? <div style={{ width: 24 }} />)
                : <div style={{ width: 24 }} />}
        </S.Button>
    );
};

export default Button;