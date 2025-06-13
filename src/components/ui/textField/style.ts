import styled from "styled-components";

export const InputWrap = styled.div`
    display: flex;
    flex-direction: column;
    width: 360px;
    gap: 5px;
`

export const Label = styled.p`
    ${({theme}) => theme.typography.label_regular};
    color: ${({ theme }) => theme.sementic.label.alternative};
`

export const Input = styled.input`
    display: flex;
    width: 100%;
    gap: 10px;
    padding: 12px 14px;
    ${({ theme }) => theme.typography.label_medium};
    color: ${({ theme }) => theme.sementic.label.strong};
    background-color: ${({theme}) => theme.sementic.fill.neutral};
    border-radius: ${({ theme }) => theme.shape.extraSmall};
    border: 0.5px solid transparent;
    &::placeholder {
        color: ${({ theme }) => theme.sementic.label.alternative};
    }
    
    &:focus {
        border: 0.5px solid ${({ theme }) => theme.sementic.primary.normal};
    }
`