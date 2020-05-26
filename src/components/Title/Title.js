import React from 'react';
import '../css/Title.min.css';

class Title extends React.Component {
  render() {
    return (
      <div id="home" className="title-container">
        <h1>Dandy</h1>
        <h2>Web</h2>
        <h3 id="designer">Designer</h3>
        <h3 id="developer">Developer</h3>
      </div>
    );
  }
}

export default Title;
