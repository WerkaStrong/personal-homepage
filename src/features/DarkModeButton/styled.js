import styled from "styled-components";

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
    background: ${({ theme }) => theme.buttonBg};
    width: 47.06px;
    height: 25.07px;
    border: 1px solid ${({ theme }) => theme.describe};
    border-radius: 20px;
    display: flex;

    @media (min-width: 768px) {
    }
`;
export const Toggle = styled.div`
    background: ${({ theme }) => theme.describe};
    clip-path: circle();
    width: 20px;
    height: 20px;
    align-self: center;
    margin-left: ${(props) => (props.animate ? "23px" : "3px")};
    display: flex;
    justify-content: center;
    align-items: center;
    transition: margin-left 0.25s linear;
   
    @media (min-width: 768px) {
    }
`;

export const Image = styled.img`
    @media (min-width: 768px) {
    }
`;
