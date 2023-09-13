import { useDispatch, useSelector } from "react-redux";
import { Bg, Button, Image, Text, Toggle, ToggleMode } from "./styled";
import { toggle } from "../themeSlice";
import sun from "../../common/image/Group.svg"

export const DarkModeButton = () => {
    const dispatch = useDispatch();
    const theme = useSelector((state) => state.theme.value);

    return (
        <ToggleMode>
            <Text>Dark mode {theme === "dark" ? "on" : "off"}</Text>
            <Button onClick={() => dispatch(toggle())}>
                <Bg>
                    <Toggle>
                        <Image src={sun} />
                    </Toggle>
                </Bg>
            </Button>
        </ToggleMode>
    );
};
