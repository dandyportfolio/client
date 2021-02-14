import React from 'react';

export default function SocialMedia() {
  return (
    <React.Fragment>
      <li>
        <a
          href="https://www.github.com/dandyreyes"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/images/github-white.png" alt="github" />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/dandy-reyes"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/images/linkedin-white.ico" alt="LinkedIn" />
        </a>
      </li>
      <li>
        <a href="#contact">
          <img src="/images/email-white.ico" alt="send me a mail" />
        </a>
      </li>
    </React.Fragment>
  );
}
