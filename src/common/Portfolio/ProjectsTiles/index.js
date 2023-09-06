import { Description, Link, ProjectTiles, Title, Text, Links } from "./styled";

export const ProjectsTiles = () => {
    return (
        <ProjectTiles>
            <Title>Movie Browser</Title>
            <Description>
                Project description, e.g. website where you can search for
                favourite movies and people. Project description, e.g. website
                where you can search.
            </Description>
            <Links>
                <Text>
                    Demo:
                    <Link>https://link.demo.com</Link>
                </Text>
                <Text>
                    Code:
                    <Link>https://link.code.com</Link>
                </Text>
            </Links>
        </ProjectTiles>
    );
};
