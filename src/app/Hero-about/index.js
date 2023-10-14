import { Button } from "./Button";
import {
    Picture,
    Tile,
    Title,
    Description,
    Subtitle,
    PictureBox,
    Content,
} from "./styled";
import profile from "../image/linkedIn.jpg";

export const About = () => (
    <Tile>
        <PictureBox>
            <Picture src={profile} />
        </PictureBox>
        <Content>
            <Subtitle>This is</Subtitle>
            <Title>Weronika Chmielewska</Title>
            <Description>
                👩‍💻 I'm a passionate front-end developer, deeply fascinated by
                React. I am actively seeking new and exciting job opportunities
                to continue my web development journey.
            </Description>
            <Button />
        </Content>
    </Tile>
);
