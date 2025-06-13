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
        <S.Button $color={color} onClick={onClick}>
            {icon && iconPosition === "left" && icon}
            <S.ButtonText $color={color}>{text}</S.ButtonText>
            {icon && iconPosition === "right" && icon}
        </S.Button>
    );
};

export default Button;