import styled from "styled-components";

export const SkillsTile = styled.div`
    background: ${({ theme }) => theme.skillsBg};
    box-shadow: 0px 16px 58px 0px #090a3308;
    box-shadow: 0px -2px 50px 0px #090a3305;
    border-radius: 4px;
    width: 100%;
    margin: 48px;

    @media (min-width: 768px) {
        margin-top: 73px;
    }
`;
export const Title = styled.p`
    font-size: 18px;
    font-weight: 900;
    margin: 16px 0 12px 16px;

    @media (min-width: 768px) {
        font-size: 30px;
        margin: 32px 0 16px 32px;
    }
`;
export const List = styled.ul`
    color: ${({ theme }) => theme.describe};
    padding-left: 16px;

    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        padding: 32px;
        margin: 0 0 -16px 0;
    }
`;
export const Skill = styled.li`
    list-style-type: none;
    font-size: 14px;
    font-weight: 400;
    display: flex;
    align-items: center;
    line-height: 16.94px;
    margin-bottom: 8px;

    @media (min-width: 768px) {
        font-size: 18px;
        line-height: 25.2px;
        margin-bottom: 16px;
    }
`;
export const DotImage = styled.img`
    width: 6px;
    height: 6px;
    margin-right: 8px;

    @media (min-width: 768px) {
        margin-right: 16px;
        width: 9px;
        height: 9px;
    }
`;

export const Divider = styled.hr`
    border: none;
    border-top: 1px solid #d1d5da4d;
    margin: 20px 16px;

    @media (min-width: 768px) {
        max-width: 1151px;
        margin: 0 32px 0 32px;
    }
`;
