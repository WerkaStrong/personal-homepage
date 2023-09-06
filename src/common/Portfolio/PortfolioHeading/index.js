import { Heading, IconImage, SubTitle, Title } from "./styled";
import github from "../../image/mark-github.svg"

export const PortfolioHeading = () => {
    return (
        <Heading>
            <IconImage src={github} alt="" />
            <Title>Portfolio</Title>
            <SubTitle>My recent projects</SubTitle>
        </Heading>
    );
};
