import { PortfolioHeading } from "./PortfolioHeading";
import { ProjectsTiles } from "./ProjectsTiles";
import { PortfolioGrid, StyledPortfolio } from "./styled";

export const Portfolio = () => {
    return (
        <StyledPortfolio>
            <PortfolioHeading />
            <PortfolioGrid>
                <ProjectsTiles />
                <ProjectsTiles />
                <ProjectsTiles />
                <ProjectsTiles />
            </PortfolioGrid>
        </StyledPortfolio>
    );
};
