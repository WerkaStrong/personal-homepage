import styled from "styled-components";
import { ReactComponent as LinkedInLogo } from "../../image/LinkedIN.svg";
import { ReactComponent as GitHubLogo } from "../../image/Github.svg";

export const Icons = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(32px, 1fr));
    grid-gap: 16px;

    @media (min-width: 768px) {
        grid-template-columns: repeat(auto-fill, minmax(48px, 1fr));
        grid-gap: 24px;
    }
`;

export const StyledLinkedInLogo = styled(LinkedInLogo)`
    fill: ${({ theme }) => theme.textcolor};

    &:hover {
        fill: ${({ theme }) => theme.iconHover};
    }
    &:active {
        fill: ${({ theme }) => theme.iconActive};
    }
`;

export const StyledGithubLogo = styled(GitHubLogo)`
    fill: ${({ theme }) => theme.textcolor};

    &:hover {
        fill: ${({ theme }) => theme.iconHover};
    }
    &:active {
        fill: ${({ theme }) => theme.iconActive};
    }
`;
