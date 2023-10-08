import { styled } from "styled-components";
import { StyledButton } from "../../../../Hero-about/Button/styled";
import { ReactComponent as Danger } from "../../../../image/Danger.svg";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 50%;
    margin: 0 auto;
    text-align: center;
`;

export const Icon = styled(Danger)`
    margin-top: 95.5px;
    width: 37px;
    height: 33.34px;
    stroke: ${({ theme }) => theme.textcolor};
    @media (min-width: 768px) {
        height: 33.34px;
    }
`;
export const Warrning = styled.div`
    font-size: 24px;
    font-weight: 700;

    @media (min-width: 768px) {
        margin-top: 16px;
        width: 420px;
    }
`;

export const Info = styled.div`
    width: 288px;
    @media (min-width: 768px) {
        width: 300px;
        margin: 32px 0 32px 0;
    }
`;

export const Button = styled(StyledButton)`
    text-decoration: none;
`;
