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

    @media (min-width: 768px) {
        font-size: 12px;
    }
`;
export const Title = styled.header`
    font-size: 18px;
    font-weight: 900;
    margin: 8px 0 16px 0;

    &:hover {
        color: ${({ theme }) => theme.button};
    }

    @media (min-width: 768px) {
        font-size: 32px;
        margin: 24px 0 24px 0;
    }
`;
export const Description = styled.article`
    color: ${({ theme }) => theme.describe};
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 24px;
    line-height: 23.8px;

    @media (min-width: 768px) {
        font-size: 18px;
        margin-bottom: 32px;
    }
`;
export const SocialFrame = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(32px, 1fr));
    gap: 16px;
    @media (min-width: 768px) {
        grid-template-columns: repeat(auto-fill, minmax(48px, 1fr));
        gap: 24px;
    }
`;
export const Icon = styled.img`
    width: 32px;
    height: 32px;

    @media (min-width: 768px) {
        width: 48px;
        height: 48px;
    }
`;
