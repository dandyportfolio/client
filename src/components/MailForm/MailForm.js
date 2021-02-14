import React, { useState } from 'react';
import '../css/MailForm.min.css';
import axios from 'axios';

export default function MailForm() {
  const [state, setState] = useState({
    name: '',
    email: '',
    bodyText: '',
    isHidden: false,
  });

  const handleChange = event => {
    const { value, name } = event.target;

    setState(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const { name, email, bodyText } = state;
    if (!name || !email || !bodyText) {
      alert('please fill out the whole form!');
      return;
    }
    setState({ isHidden: true });
    if (name && email && bodyText) {
      return await axios
        .post('https://dandyportfolio.herokuapp.com/send', {
          name,
          email,
          bodyText,
        })
        .then(() => {
          alert('message sent');
          setState(prevState => ({ ...prevState, isHidden: false }));
        })
        .catch(err => {
          alert('Message was not able to send');
          console.log(err.message);
        });
    }
  };

  const wordCount = val => {
    return val ? `word count: ${val.length}` : `word count: 0`;
  };

  const { name, email, bodyText, isHidden } = state;
  return (
    <div id="contact">
      <form id="myData" onSubmit={handleSubmit} autoComplete="off">
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
              onChange={handleChange}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="What can I help you with?"
              name="bodyText"
              value={bodyText || ''}
              onChange={handleChange}
            />
            <div id="countWord">{wordCount(bodyText)}</div>

            <button type="submit">Submit</button>
          </>
        ) : (
          <div className="imgBuffer">
            <img alt="loading" src="https://i.gifer.com/VAyR.gif" />
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
