import { StyledButton, RectangleImage } from "./styled";
import rectangle from "../../image/Message.svg";

export const Button = () => {
    return (
        <StyledButton to="mailto:weronika.chmielewska.it@gmail.com">
            <RectangleImage src={rectangle} alt="" />
            Hire me
        </StyledButton>
    );
};
