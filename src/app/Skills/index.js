import { Divider, DotImage, List, Skill, SkillsTile, Title } from "./styled";
import dot from "../image/Ellipse 31.svg";

export const Skills = ({ title, skills }) => (
    <SkillsTile>
        <Title>{title}</Title>
        <Divider />
        <List>
            {skills?.map((skill) => (
                <Skill key={skill.id}>
                    <DotImage src={dot} alt="dot" />
                    {skill.skill}
                </Skill>
            ))}
        </List>
    </SkillsTile>
);
