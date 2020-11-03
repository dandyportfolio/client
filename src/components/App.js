import React from 'react';
import Nav from './Nav/Nav';
import Title from './Title/Title';
import About from './About/About';
import Skills from './Skills/Skills';
import Projects from './Projects/Projects';
import MailForm from './MailForm/MailForm';
import ReactGA from 'react-ga';
import './css/App.min.css';

ReactGA.initialize('UA-166869445-1');
ReactGA.pageview('/homepage');

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Nav />
        <Title />
        <About />
        <Skills />
        <Projects />
        <MailForm />
      </div>
    );
  }
}

export default App;
