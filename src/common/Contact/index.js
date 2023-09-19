import {
    Content,
    Description,
    Icon,
    SocialFrame,
    Subtitle,
    Title,
} from "./styled";
import GitHubLogo from "../image/Github_black.svg";
import LinkedInLogo from "../image/LinkedIN.svg";
import LinkedInLogoWhite from "../image/LinkedINWhite.svg";
import GitHubLogoWhite from "../image/GithubWhite.svg";
import { useSelector } from "react-redux";

export const Contact = () => {
    const theme = useSelector((state) => state.theme.value);

    return (
        <Content>
            <Subtitle>Let's Talk!</Subtitle>
            <Title>weronika.chmielewska00@gmail.com</Title>
            <Description>
                I’m always open to new projects whenever I have the time. If you
                have a website, dashboard or mobile app in mind and need some
                help to make your ideas come to life, feel free to conatct me
            </Description>
            <SocialFrame>
                <Icon src={theme === "dark" ? GitHubLogoWhite : GitHubLogo} />
                <Icon
                    src={theme === "dark" ? LinkedInLogoWhite : LinkedInLogo}
                />
            </SocialFrame>
        </Content>
    );
};
