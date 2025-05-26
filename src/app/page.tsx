"use client"

import styled from "styled-components";

const Wrapper = styled.p`
    ${({theme}) => theme.typography.Title2_Bold};
    color: ${({theme}) => theme.sementic.Primary.Normal};
`;

const Main = () => {
    return (
        <Wrapper>Test</Wrapper>
    );
};

export default Main;