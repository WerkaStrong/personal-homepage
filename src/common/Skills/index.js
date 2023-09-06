import { Divider, DotImage, Emoji, List, Skill, SkillsTile, Title } from "./styled"
import dot from "../image/Ellipse 31.svg";
import tools from "../image/tools.svg";

export const Skills = ({title}) => {

    return (
        <SkillsTile>
            <Title>{title} <Emoji src={tools} alt=""/></Title>
            <Divider/>
            <List>
                <Skill> <DotImage src={dot} alt="" />Semantic & accessible HTML</Skill>
                <Skill> <DotImage src={dot} alt="" />Semantic & accessible HTML</Skill>
                <Skill> <DotImage src={dot} alt="" />Semantic & accessible HTML</Skill>
                <Skill> <DotImage src={dot} alt="" />Semantic & accessible HTML</Skill>
                <Skill> <DotImage src={dot} alt="" />Semantic & accessible HTML</Skill>
                <Skill> <DotImage src={dot} alt="" />Semantic & accessible HTML</Skill>
                <Skill> <DotImage src={dot} alt="" />Semantic & accessible HTML</Skill>
                <Skill> <DotImage src={dot} alt="" />Semantic & accessible HTML</Skill>
                <Skill> <DotImage src={dot} alt="" />Semantic & accessible HTML</Skill>
                <Skill> <DotImage src={dot} alt="" />Semantic & accessible HTML</Skill>
                <Skill> <DotImage src={dot} alt="" />Semantic & accessible HTML</Skill>
                <Skill> <DotImage src={dot} alt="" />Semantic & accessible HTML</Skill>
                <Skill> <DotImage src={dot} alt="" />Semantic & accessible HTML</Skill>
                <Skill> <DotImage src={dot} alt="" />Semantic & accessible HTML</Skill>
                <Skill> <DotImage src={dot} alt="" />Semantic & accessible HTML</Skill>
                <Skill> <DotImage src={dot} alt="" />Semantic & accessible HTML</Skill>
                <Skill> <DotImage src={dot} alt="" />Semantic & accessible HTML</Skill>
                <Skill> <DotImage src={dot} alt="" />Semantic & accessible HTML</Skill>   
            </List>
        </SkillsTile>
    )
}