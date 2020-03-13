import React from "react";

class SocialMedia extends React.Component {
  render() {
    return (
      <React.Fragment>
        <li>
          <img src="/images/github-icon.png" alt="I am github" />
        </li>
        <li>
          <img src="/images/linkedin-icon.png" alt="I am LinkedIn" />
        </li>
        <li>
          <img src="/images/email-icon.png" alt="I am your mail" />
        </li>
      </React.Fragment>
    );
  }
}

export default SocialMedia;
