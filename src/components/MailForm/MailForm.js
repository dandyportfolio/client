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
      isHidden: false,
    };
    this.initialState = this.state;
  }

  handleChange = (event) => {
    const { target } = event;
    const { value } = target;
    const { name } = target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { name, email, bodyText } = this.state;
    if (!name || !email || !bodyText) {
      alert('please fill out the whole form!');
      return;
    }
    this.setState({ isHidden: true });
    // Work on this functionality
    if (name && email && bodyText) {
      return await axios
        .post('https://dandyportfolio.herokuapp.com/send', {
          name,
          email,
          bodyText,
        })
        .then(() => {
          this.setState(this.initialState);
          alert('message sent');
        })
        .catch((err) => {
          alert('Message was not able to send');
          console.log(err.message);
        });
    }
  };

  render() {
    const { name, email, bodyText, isHidden } = this.state;
    return (
      <div id="contact">
        <form id="myData" onSubmit={this.handleSubmit} autoComplete="off">
          <h2 id="ending-title">
            Let's <b id="ending-title-outline">BUILD</b> Something!
          </h2>
          {!isHidden ? (
            <>
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
            </>
          ) : (
            <div className="imgBuffer">
              <img src="https://i.gifer.com/VAyR.gif" />
            </div>
          )}
        </form>
        <ul id="contact-info">
          <li>dandyjreyes@gmail.com</li>
          <li>+1 (323) 251-8132</li>
        </ul>
      </div>
    );
  }
}

export default MailForm;
