import styled from "styled-components";

export const HireButton = styled.button`
    background: ${({ theme }) => theme.color.scienceBlue};
    border: 1px solid #d1d5da4d;
    border-radius: 4px;
    color: ${({ theme }) => theme.color.white};
    font-weight: 600px;
    font-size: 20.06px;
    display: flex;
    align-items: center;
    padding: 12px 16px;
    gap: 16px;
    width: 154px;

    @media (min-width: 768px) {
    }
`;
export const RectangleImage = styled.img`
    @media (min-width: 768px) {
    }
`;
