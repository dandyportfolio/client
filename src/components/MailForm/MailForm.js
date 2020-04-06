import React from "react";
import "./MailForm.css";

class MailForm extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h2 id="ending-title">
          Let's <b id="ending-title-outline">BUILD</b> Something!
        </h2>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="What can I help you with?" />
        <button>Submit</button>
        <ul>
          <li>dandyjreyes@gmail.com</li>
          <li>+1 (323) 251-8132</li>
        </ul>
      </React.Fragment>
    );
  }
}

export default MailForm;
