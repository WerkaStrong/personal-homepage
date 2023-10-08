import { useSelector } from "react-redux";
import { lightTheme, darkTheme } from "./theme";
import { Container } from "./common/Container";
import { About } from "./common/Hero-about/index";
import { Portfolio } from "./common/Portfolio";
import { Skills } from "./common/Skills/index";
import { DarkModeButton } from "./features/DarkModeButton";
import { Contact } from "./common/Contact";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { skills } from "./utils/skills";
import { wantToLern } from "./utils/wantToLern";


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
