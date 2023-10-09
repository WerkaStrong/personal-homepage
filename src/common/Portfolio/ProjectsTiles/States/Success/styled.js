import styled from "styled-components";

export const PortfolioGrid = styled.div`
    display: grid;
    grid-gap: 16px;

    @media (min-width: 768px) {
        grid-template-columns: repeat(auto-fit, minmax(592px, 1fr));
        grid-gap: 32px;
    }
`;

export const ProjectTiles = styled.article`
    background: ${({ theme }) => theme.tileDefault};
    color: ${({ theme }) => theme.describe};
    border: 6px solid #d1d5da4d;
    padding: 24px;
    min-width: 100%;

    &:hover {
        border: 6px solid ${({ theme }) => theme.borderHover};
    }

    @media (min-width: 768px) {
        padding: 56px;
    }
`;
export const Title = styled.header`
    color: ${({ theme }) => theme.tileTitle};
    font-size: 16px;
    font-weight: 700;

    @media (min-width: 768px) {
        font-size: 24px;
    }
`;
export const Description = styled.article`
    margin-top: 16px;
    font-size: 14px;

    @media (min-width: 768px) {
        margin-top: 24px;
        font-size: 18px;
    }
`;

export const Links = styled.div`
    display: grid;
    grid-template-columns: 47px 1fr;
    grid-gap: 8px;
    margin-top: 16px;
    font-size: 14px;

    @media (min-width: 768px) {
        margin-top: 24px;
        grid-template-columns: 60px 1fr;
    }
`;

export const Text = styled.div`
    display: flex;
    flex-direction: row;

    @media (min-width: 768px) {
        font-size: 18px;
    }
`;
export const StyledLink = styled.a`
    color: ${({ theme }) => theme.button};
    margin-left: 8px;
    text-decoration: none;
    min-width: 100%;
    word-break: break-all;

    &:hover {
        color: ${({ theme }) => theme.linkHover};
    }
`;
