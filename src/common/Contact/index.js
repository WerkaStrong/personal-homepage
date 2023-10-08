import { Content, Description, Mail, Subtitle } from "./styled";
import LogoComponent from "./Icon";

export const Contact = () => {
    return (
        <Content>
            <Subtitle>Let's Talk!</Subtitle>
            <Mail to="mailto:weronika.chmielewska.it@gmail.com">
                weronika.chmielewska.it@gmail.com
            </Mail>
            <Description>
                Aspiring frontend developer eager to gain experience and grow.
                Ready to take on projects and learn together. Let's start this
                journey and create something special! If you have a website,
                dashboard or mobile app in mind and need some help to make your
                ideas come to life, feel free to contact me 👌
            </Description>
            <LogoComponent />
        </Content>
    );
};
