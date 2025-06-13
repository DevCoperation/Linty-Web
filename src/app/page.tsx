"use client"

import styled from "styled-components";

const Wrapper = styled.p`
    ${({theme}) => theme.typography.title2_bold};
    color: ${({theme}) => theme.sementic.primary.normal};
`;

const Main = () => {
    return (
        <Wrapper>Test</Wrapper>
    );
};

export default Main;