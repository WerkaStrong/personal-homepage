import { PortfolioHeading } from "./PortfolioHeading";
import { ProjectsTiles } from "./ProjectsTiles/index";
import { PortfolioGrid } from "./styled";

export const Portfolio = () => {
    return (
        <div>
            <PortfolioHeading />
            <PortfolioGrid>
                <ProjectsTiles />
            </PortfolioGrid>
        </div>
    );
};
