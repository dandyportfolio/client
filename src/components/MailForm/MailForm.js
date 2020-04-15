import React from 'react';
import './MailForm.css';

class MailForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      body: '',
    };
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: [event.target.value],
    });
    console.log(this.state);
  }

  // handleSubmit(event) {
  //   event.preventDefault();
  //   this.setState({
  //     myUserData:
  //   });
  //   let myUserData = new FormData(document.getElementsById('myData'));
  //   console.log(myUserData);
  // }
  render() {
    return (
      <React.Fragment>
        <form id="myData" onSubmit={this.handleSubmit}>
          <h2 id="ending-title">
            Let's <b id="ending-title-outline">BUILD</b> Something!
          </h2>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <input
            type="text"
            placeholder="What can I help you with?"
            name="bodyText"
            value={this.state.bodyText}
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
        </form>
        <ul>
          <li>dandyjreyes@gmail.com</li>
          <li>+1 (323) 251-8132</li>
        </ul>
      </React.Fragment>
    );
  }
}

export default MailForm;
