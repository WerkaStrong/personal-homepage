import { PortfolioHeading } from "./PortfolioHeading";
import { ProjectsTiles } from "./ProjectsTiles/index";
import { PortfolioGrid } from "./styled";

export const Portfolio = () => (
    <div>
        <PortfolioHeading />
        <PortfolioGrid>
            <ProjectsTiles />
        </PortfolioGrid>
    </div>
);
