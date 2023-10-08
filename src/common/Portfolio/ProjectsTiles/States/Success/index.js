import { useSelector } from "react-redux";
import { selectRepos } from "../../../../../portfolioSlice";
import { Title } from "../../styled";
import {
    Description,
    StyledLink,
    Links,
    PortfolioGrid,
    ProjectTiles,
    Text,
} from "./styled";

export const Success = () => {
    const repos = useSelector(selectRepos);
    return (
        <PortfolioGrid>
            {repos.map((repo) => (
                <ProjectTiles key={repo.id}>
                    <Title>{repo.name}</Title>
                    <Description>{repo.description}</Description>
                    <Links>
                        <Text>
                            Demo:
                            <StyledLink href={repo.homepage}>
                                {repo.homepage || "No home page"}
                            </StyledLink>
                        </Text>
                        <Text>
                            Code:
                            <StyledLink href={repo.html_url}>
                                {repo.html_url}
                            </StyledLink>
                        </Text>
                    </Links>
                </ProjectTiles>
            ))}
        </PortfolioGrid>
    );
};
