import styled from "styled-components";

export const ProjectTiles = styled.article`
    background: ${({ theme }) => theme.color.white};
    color: ${({ theme }) => theme.color.slateGray};
    border: 6px solid #d1d5da4d;
    padding: 24px;

    &:hover {
        border: 6px solid ${({ theme }) => theme.color.cornflowerBlue};
    }

    @media (min-width: 768px) {
        padding: 56px;
    }
`;
export const Title = styled.header`
    color: ${({ theme }) => theme.color.scienceBlue};
    font-size: 16px;
    font-weight: 700;

    @media (min-width: 768px) {
        font-size: 24px;
    }
`;
export const Description = styled.article`
    margin-top: 16px;
	font-size: 14px;

    @media (min-width: 768px) {
        margin-top: 24px;
        font-size: 18px;
    }
`;

export const Links = styled.div`
    display: grid;
    grid-gap: 8px;
    margin-top: 16px;

    @media (min-width: 768px) {
        margin-top: 24px;
    }
`;

export const Text = styled.div`
    display: flex;
    flex-direction: row;
    @media (min-width: 768px) {
        font-size: 18px;
    }
`;
export const Link = styled.div`
    color: ${({ theme }) => theme.color.scienceBlue};
	margin-left: 8px;
    @media (min-width: 768px) {
       
    }
`;
