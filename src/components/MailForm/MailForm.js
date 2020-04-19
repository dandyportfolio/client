import React from 'react';
import '../css/MailForm.min.css';

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
    console.log(this.state);
  };

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
            value={this.state.bodyText || ''}
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
