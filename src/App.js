import './App.css';
import { Contact } from './common/Contact';
import { Container } from './common/Container';
import { About } from './common/Hero-about/index';
import { Portfolio } from './common/Portfolio';
import { Skills } from './common/Skills/index';

function App() {
  const skillsTitle = "My skillset includes";
  const futureSkillsTitle = "What I want to learn next";
  return (
    <>
      <Container>
        <About />
        <Skills title={skillsTitle}/>
        <Skills title={futureSkillsTitle}/>
        <Portfolio />
        <Contact />
      </Container>
    </>
  );
}

export default App;
