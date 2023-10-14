import { useSelector } from "react-redux";
import { lightTheme, darkTheme } from "./theme";
import { About } from "./app/Hero-about/index";
import { Portfolio } from "./app/Portfolio";
import { Skills } from "./app/Skills/index";
import { DarkModeButton } from "../src/app/DarkModeButton";
import { Contact } from "./app/Contact";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { skills } from "./utils/skills";
import { wantToLern } from "./utils/wantToLern";
import { Container } from "./app/Container";


function App() {
    const themeName = useSelector((state) => state.theme?.value);
    const theme = themeName === "light" ? lightTheme : darkTheme;
    const skillsTitle = "My skillset includes 🛠️";
    const futureSkillsTitle = "What I want to learn next 🚀";
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Container>
                <DarkModeButton />
                <About />
                <Skills title={skillsTitle} skills={skills}/>
                <Skills title={futureSkillsTitle} skills={wantToLern}/>
                <Portfolio />
                <Contact />
            </Container>
        </ThemeProvider>
    );
}

export default App;
