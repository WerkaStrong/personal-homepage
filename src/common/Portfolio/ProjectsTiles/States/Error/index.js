import { Icon, Info, Warrning, Wrapper, Button } from "./styled";
import danger from "../../../../image/Danger.svg";

export const Error = () => (
    <Wrapper>
        <Icon src={danger} alt="" />
        <Warrning>Ooops! Something went wrong...</Warrning>
        <Info>
            Sorry, failed to load Github projects. You can check them directly
            on Github.
        </Info>
        <Button to="https://github.com/WerkaStrong">Go to Github</Button>
    </Wrapper>
);
