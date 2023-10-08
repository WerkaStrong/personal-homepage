import { Icons, StyledGithubLogo, StyledLinkedInLogo } from "./styled";
import { Link } from "react-router-dom";

const LogoComponent = () => {
    return (
        <Icons>
            <Link to="https://github.com/WerkaStrong">
                <StyledGithubLogo />
            </Link>
            <Link to="https://www.linkedin.com/in/weronika-chmielewska-8a371b1b7/">
                <StyledLinkedInLogo />
            </Link>
        </Icons>
    );
};

export default LogoComponent;