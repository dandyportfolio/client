import React from 'react';
import '../css/MailForm.min.css';
import axios from 'axios';

class MailForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      bodyText: '',
    };
  }

  handleChange = (event) => {
    const { target } = event;
    const { value } = target;
    const { name } = target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, email, bodyText } = this.state;
    axios
      .post('https://dandyportfolio.herokuapp.com/send', {
        name,
        email,
        bodyText,
      })
      .then(() => {
        alert('message sent');
      })
      .catch((err) => {
        alert('Message was not able to send');
        console.log(err.message);
      });
  };

  render() {
    const { name, email, bodyText } = this.state;
    return (
      <React.Fragment>
        <form id="myData" onSubmit={this.handleSubmit} autoComplete="off">
          <h2 id="ending-title">
            Let's <b id="ending-title-outline">BUILD</b> Something!
          </h2>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={this.handleChange}
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
          <input
            type="text"
            placeholder="What can I help you with?"
            name="bodyText"
            value={bodyText || ''}
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
        </form>
        <ul id="contact-info">
          <li>dandyjreyes@gmail.com</li>
          <li>+1 (323) 251-8132</li>
        </ul>
      </React.Fragment>
    );
  }
}

export default MailForm;
