import { Button } from "./Button"
import { Picture, Tile, Title, Description, Subtitle, PictureBox, Content } from "./styled"

export const About = () => {

    return (
            <Tile>
                <PictureBox>
                    <Picture>
                    </Picture>
                </PictureBox>
                <Content>
                    <Subtitle>This is</Subtitle>
                    <Title>Weronika Chmielewska</Title>
                    <Description>
                        👨🏻‍💻  Im a passionate Frontend Developer in love with React,currently looking for new job opportunities.
                    </Description>
                    <Button />
                </Content>
            </Tile>
    )
}