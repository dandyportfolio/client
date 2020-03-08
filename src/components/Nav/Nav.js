import React from "react";
import SocialMedia from "./SocialMedia/SocialMedia";

class Nav extends React.Component {
  render() {
    return (
      <nav>
        <ul>
          <div>
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Skills</a>
            </li>
            <li>
              <a>Projects</a>
            </li>
            <li>
              <a>Contact</a>
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
