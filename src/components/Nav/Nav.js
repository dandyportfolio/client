import React from 'react';
import SocialMedia from './SocialMedia/SocialMedia';
import '../css/Nav.min.css';

class Nav extends React.Component {
  render() {
    return (
      <nav>
        <ul>
          <div>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Skills</a>
            </li>
            <li>
              <a href="/">Projects</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
            <div id="nav-icons">
              <SocialMedia />
            </div>
          </div>
        </ul>
      </nav>
    );
  }
}

export default Nav;
