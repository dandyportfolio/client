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
        <meta charSet="UTF-8"/>
        <meta name="description" content="Dandy Reyes is a Full Stack MERN Developer and UX/UI Designer"/>
        <meta name="keywords" content="Dandy Reyes, dandy reyes, dandyreyes"/>
        <meta name="author" content="Dandy Reyes"/>
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
