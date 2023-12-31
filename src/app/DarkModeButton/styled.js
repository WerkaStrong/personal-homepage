import styled from "styled-components";

export const ToggleMode = styled.div`
    display: flex;
    align-self: flex-end;
    justify-content: flex-start;
    height: 26px;
    position: absolute;
    top: 21px;

    @media (min-width: 768px) {
        top: 119px;
    }
`;
export const Text = styled.div`
    color: ${({ theme }) => theme.describe};
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 700;
    align-self: center;
    margin-right: 12px;
    display: none;

    @media (min-width: 820px) {
        display: inline;
    }
`;
export const Button = styled.div`
    align-self: center;
    width: 48px;
    height: 26px;
`;
export const Bg = styled.div`
    background: ${({ theme }) => theme.buttonBg};
    width: 48px;
    height: 26px;
    border: 1px solid ${({ theme }) => theme.describe};
    border-radius: 20px;
    display: flex;
`;
export const Toggle = styled.div.withConfig({
    shouldForwardProp: (prop) => prop !== "animate",
})`
    background: ${({ theme }) => theme.describe};
    clip-path: circle();
    width: 20px;
    height: 20px;
    align-self: center;
    margin-left: ${(props) => (props.animate ? "24px" : "2px")};
    display: flex;
    justify-content: center;
    align-items: center;
    transition: margin-left 0.25s linear;
`;

export const Image = styled.img`
    width: 14px;
    height: 14px;
`;
