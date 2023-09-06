import styled from "styled-components";

export const Heading = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 768px) {
    }
`;
export const IconImage = styled.img`
    width: 32px;
    height: 31.21px;

    @media (min-width: 768px) {
        width: 40px;
        height: 40px;
    }
`;
export const Title = styled.div`
    font-size: 18px;
    font-weight: 900;
    margin-top: 12px;

    @media (min-width: 768px) {
        font-size: 30px;
        margin-top: 12px;
    }
`;
export const SubTitle = styled.div`
    font-size: 17px;
    font-weight: 400;
    margin: 16px 0 24px 0;

    @media (min-width: 768px) {
        font-size: 20px;
        margin: 18px 0 24px 0;
    }
`;

