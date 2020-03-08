import React from "react";
import Nav from "./Nav/Nav";
import Name from "./Name/Name";
import Title from "./Title/Title";
import About from "./About/About";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import MailForm from "./MailForm/MailForm";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Nav />
        <Name />
        <Title />
        <About />
        <Skills />
        <Projects />
        <MailForm />
      </React.Fragment>
    );
  }
}

export default App;
