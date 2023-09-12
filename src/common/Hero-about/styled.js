import styled from "styled-components";

export const Tile = styled.div`
    margin-top: 34px;
    max-width: 1089px;

    @media (min-width: 768px) {
        margin-top: 119px;
        display: grid;
        grid-template-columns: auto 1fr;
        max-height: 384px;
    }
`;
export const PictureBox = styled.div`
    background: ${({ theme }) => theme.webBackground};
    width: 132.67px;
    height: 132.67px;
    margin-bottom: 16px;

    @media (min-width: 768px) {
        width: 384px;
        height: 384px;
        margin-right: 72px;
    }
`;
export const Picture = styled.img`
   
	width: 132.67px;
    height: 132.67px;
    @media (min-width: 768px) {
        width: 384px;
        height: 384px;
    }
`;
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (min-width: 768px) {
    }
`;
export const Subtitle = styled.div`
    color: ${({ theme }) => theme.describe};
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 700;

    @media (min-width: 768px) {
    }
`;
export const Title = styled.header`
    font-size: 22px;
    font-weight: 900;
    margin: 8px 0 16px 0;

    @media (min-width: 768px) {
        font-size: 38px;
        margin: 12px 0 35px 0;
    }
`;
export const Description = styled.article`
    color: ${({ theme }) => theme.describe};
    font-size: 17px;
    font-weight: 400;
    margin-bottom: 24px;
    line-height: 23.8px;

    @media (min-width: 768px) {
        font-size: 20px;
        margin-bottom: 32px;
        line-height: 28px;
    }
`;
