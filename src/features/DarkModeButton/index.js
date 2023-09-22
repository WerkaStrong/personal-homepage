import { useDispatch, useSelector } from "react-redux";
import { Bg, Button, Image, Text, Toggle, ToggleMode } from "./styled";
import { toggle } from "../themeSlice";
import sun from "../../common/image/Group.svg";
import blackSun from "../../common/image/Group_dark.svg";
import { useState } from "react";

export const DarkModeButton = () => {
    const dispatch = useDispatch();
    const theme = useSelector((state) => state.theme.value);
    const [isToggled, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!isToggled);
    };

    return (
        <ToggleMode>
            <Text>Dark mode {theme === "dark" ? "on" : "off"}</Text>
            <Button
                onClick={() => {
                    dispatch(toggle());
                    handleToggle();
                }}
            >
                <Bg>
                    <Toggle animate={isToggled}>
                        <Image src={theme === "dark" ? blackSun : sun} />
                    </Toggle>
                </Bg>
            </Button>
        </ToggleMode>
    );
};
