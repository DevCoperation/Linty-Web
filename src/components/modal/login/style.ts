import styled from 'styled-components';

export const ModalBackgroud = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

export const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${({theme}) => theme.sementic.background.normal};
    border-radius: ${({theme}) => theme.shape.large};
    padding: 30px 40px;
    gap: 20px;
`


export const CloseWrap = styled.div`
    display: flex;
    width: 100%;
    cursor: pointer;
    justify-content: flex-end;
`;

export const LogoWrap = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
`

export const InputWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
`;

export const ButtonWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const Routing = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 30px;
    gap: 10px;
    width: 100%;
`;

export const RoutingSpan = styled.span`
    width: 100%;
    cursor: pointer;
    ${({ theme }) => theme.typography.caption1_medium};
    color: ${({ theme }) => theme.sementic.label.neutral};
    text-align: center;
`;