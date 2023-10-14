import { styled } from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 24px;
    width: 50%;
    margin: 0 auto;
    text-align: center;
`;
export const Alert = styled.div`
    margin-top: 88px;
    width: 292px;
    font-size: 17px;

    @media (min-width: 768px) {
        margin-top: 44px;
        width: 475px;
        font-size: 20px;
    }
`;

export const Icon = styled.svg`
    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    margin-top: 120px;
    animation: spin 2s linear infinite;

    @media (min-width: 768px) {
        margin-top: 48px;
        width: 160px;
        height: 160px;
    }
`;
