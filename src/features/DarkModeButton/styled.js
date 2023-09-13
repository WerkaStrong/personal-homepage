import styled from "styled-components";
import { keyframes } from "styled-components";

const roll = keyframes`
from {
    transform: translateX(0);
}
to {
    transform: translateX(20px);
}
`;

export const ToggleMode = styled.div`
    display: flex;
    align-self: flex-end;
    justify-content: flex-start;
    height: 26px;
    position: absolute;
    top: 119px;

    @media (min-width: 768px) {
    }
`;
export const Text = styled.div`
    color: ${({ theme }) => theme.textcolor};
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 700;
    align-self: center;
    margin-right: 12px;

    @media (min-width: 768px) {
    }
`;
export const Button = styled.div`
    align-self: center;
    width: 48px;
    height: 26px;

    @media (min-width: 768px) {
    }
`;
export const Bg = styled.div`
    background: #e5e5e5;
    width: 47.06px;
    height: 25.07px;
    border: 1px solid #6e7e91;
    border-radius: 20px;
    display: flex;

    @media (min-width: 768px) {
    }
`;
export const Toggle = styled.div`
    background: #6e7e91;
    clip-path: circle();
    width: 20px;
    height: 20px;
    align-self: center;
    margin-left: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (min-width: 768px) {
    }
`;

export const Image = styled.img`
    @media (min-width: 768px) {
    }
`;
