import React from 'react';

class SocialMedia extends React.Component {
  render() {
    return (
      <React.Fragment>
        <li>
          <a href="https://www.github.com/dandyreyes" target="_blank">
            <img src="/images/github-icon.png" alt="I am github" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/dandy-reyes" target="_blank">
            <img src="/images/linkedin-icon.png" alt="I am LinkedIn" />
          </a>
        </li>
        <li>
          <a href="#contact">
            <img src="/images/email-icon.png" alt="I am your mail" />
          </a>
        </li>
      </React.Fragment>
    );
  }
}

export default SocialMedia;
