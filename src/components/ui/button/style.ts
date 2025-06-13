import styled from 'styled-components';
import {theme} from "src/styles/theme";

interface Color {
    $color: 'primary' | 'white';
}

export const Button = styled.button<Color>`
    cursor: pointer;
    width: 100%;
    padding: 10px;
    
    background-color: ${({$color, theme}) => $color === "primary" ? theme.sementic.primary.normal : theme.sementic.fill.normal};
    border: none;
    border-radius: ${({theme}) => theme.shape.large};
    align-items: center;
`

export const ButtonText = styled.span<Color>`
    ${({theme}) => theme.typography.label_medium};
    color: ${({$color}) => ($color === "primary" ? theme.sementic.label.disabled : theme.sementic.label.normal) };
`