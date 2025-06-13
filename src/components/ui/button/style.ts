import styled from 'styled-components';
import {theme} from "src/styles/theme";

interface ButtonStyle {
    $color: 'primary' | 'white';
    $icon: boolean
}

export const Button = styled.button<ButtonStyle>`
    display: flex;
    cursor: pointer;
    width: 100%;
    padding: 10px;
    align-items: center;
    background-color: ${({$color, theme}) => $color === "primary" ? theme.sementic.primary.normal : theme.sementic.fill.normal};
    justify-content: ${({$icon}) => ($icon ? 'space-between': 'center')};
    border: none;
    border-radius: ${({theme}) => theme.shape.large};
`

export const ButtonText = styled.span<ButtonStyle>`
    ${({theme}) => theme.typography.label_medium};
    color: ${({$color}) => ($color === "primary" ? theme.sementic.label.disabled : theme.sementic.label.normal) };
`