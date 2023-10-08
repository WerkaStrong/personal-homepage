import styled from "styled-components";

export const PortfolioGrid = styled.div`
    display: grid;
    grid-gap: 16px;

    @media (min-width: 768px) {
        grid-template-columns: repeat(auto-fit, minmax(592px, 1fr));
        grid-gap: 32px;
    }
`;
