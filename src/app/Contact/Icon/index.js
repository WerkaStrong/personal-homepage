import { Icons, StyledGithubLogo, StyledLinkedInLogo } from "./styled";
import { Link } from "react-router-dom";

const LogoComponent = () => (
    <Icons>
        <Link to="https://github.com/WerkaStrong">
            <StyledGithubLogo />
        </Link>
        <Link to="https://www.linkedin.com/in/weronika-chmielewska-it/">
            <StyledLinkedInLogo />
        </Link>
    </Icons>
);

export default LogoComponent;
