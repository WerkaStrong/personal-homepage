import styled from "styled-components";

export const HireButton = styled.button`
    background: ${({ theme }) => theme.button};
    border: 1px solid #D1D5DA4D;
    border-radius: 4px;
    color: ${({ theme }) => theme.color.white};
    font-weight: 600px;
    font-size: 20.06px;
    display: flex;
    align-items: center;
    padding: 12px 16px;
    gap: 16px;
    width: 154px;

    &:hover {
        box-shadow: 2px 2px 0 #8cc2ff, -2px -2px 0 #8cc2ff, 2px -2px 0 #8cc2ff,
            -2px 2px 0 #8cc2ff;
    }

    @media (min-width: 768px) {
    }
`;
export const RectangleImage = styled.img`
    @media (min-width: 768px) {
    }
`;
