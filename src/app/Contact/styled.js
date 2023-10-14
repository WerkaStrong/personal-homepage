import { Link } from "react-router-dom";
import styled from "styled-components";

export const Content = styled.div`
    align-self: self-start;
    margin: 48px 0 31px 0;
    width: 100%;

    @media (min-width: 768px) {
        max-width: 691px;
        margin: 120px 0 109px 0;
    }
`;
export const Subtitle = styled.div`
    color: ${({ theme }) => theme.textcolor};
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 700;
    margin-bottom: 12px;

    @media (min-width: 768px) {
        font-size: 12px;
        margin-bottom: 24px;
    }
`;
export const Mail = styled(Link)`
    color: ${({ theme }) => theme.textcolor};
    transition: color 0.25s ease, color 0.25s ease;
    text-decoration: none;
    font-size: 18px;
    font-weight: 900;

    &:hover {
        color: ${({ theme }) => theme.linkHover};
    }

    @media (min-width: 768px) {
        font-size: 32px;
    }
`;

export const Description = styled.article`
    color: ${({ theme }) => theme.describe};
    font-size: 14px;
    font-weight: 400;
    margin: 12px 0 40px 0;
    line-height: 23.8px;

    @media (min-width: 768px) {
        font-size: 18px;
        margin: 24px 0 56px 0;
    }
`;