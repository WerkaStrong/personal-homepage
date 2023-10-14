import { StyledButton, RectangleImage, Text } from "./styled";
import rectangle from "../../image/Message.svg";

export const Button = () => (
    <StyledButton to="mailto:weronika.chmielewska.it@gmail.com">
        <RectangleImage src={rectangle} alt="" />
        <Text>Hire me</Text>
    </StyledButton>
);
