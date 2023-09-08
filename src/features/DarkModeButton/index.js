import { useDispatch, useSelector } from "react-redux";
import { Button, Text, ToggleMode } from "./styled";
import { toggle } from "../themeSlice";

export const DarkModeButton = () => {
    const dispatch = useDispatch();
    const theme = useSelector((state) => state.theme.value);

    return (
        <ToggleMode>
            <Text>Dark mode {theme === "dark" ? "on" : "off"}</Text>
            <Button onClick={() => dispatch(toggle())}>button</Button>
        </ToggleMode>
    );
};
