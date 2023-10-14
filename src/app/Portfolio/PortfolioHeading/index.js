import { Heading, IconImage, SubTitle, Title } from "./styled";
import github from "../../image/mark-github.svg";

export const PortfolioHeading = () => (
    <Heading>
        <IconImage src={github} alt="" />
        <Title>Portfolio</Title>
        <SubTitle>My recent projects</SubTitle>
    </Heading>
);
