import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledButton = styled(Link)`
    text-decoration: none;
    background: ${({ theme }) => theme.button};
    border: 1px solid #d1d5da4d;
    border-radius: 4px;
    color: ${({ theme }) => theme.color.white};
    transition: box-shadow 0.25s ease, color 0.25s ease;
    display: flex;
    align-items: center;
    padding: 12px 16px;
    gap: 16px;
    width: 154px;
    

    &:hover {
        box-shadow: 2px 2px 0 #8cc2ff, -2px -2px 0 #8cc2ff, 2px -2px 0 #8cc2ff,
            -2px 2px 0 #8cc2ff;  
    }
`;
export const RectangleImage = styled.img`
    width: 20px;
    height: 20px;
    @media (min-width: 768px) {
        width: 24px;
        height: 24px;
    }
`;

export const Text = styled.div`
   font-weight: 600;
   font-size: 20.06px;
   
   letter-spacing: 10%;
`;
