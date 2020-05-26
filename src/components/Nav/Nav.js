import React from 'react';
import SocialMedia from './SocialMedia/SocialMedia';
import '../css/Nav.min.css';

class Nav extends React.Component {
  render() {
    return (
      <nav>
        <ul>
          <div id="nav-links">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </div>
          <div id="nav-icons">
            <SocialMedia />
          </div>
        </ul>
      </nav>
    );
  }
}

export default Nav;
