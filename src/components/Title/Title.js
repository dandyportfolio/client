import React from 'react';
import '../css/Title.min.css';

class Title extends React.Component {
  render() {
    return (
      <div className="title-container">
        <h1 className="name">Dandy</h1>;
        <h2 className="landing-page-blue-text">Web</h2>
        <h3 id="web-border">
          Designer <br /> Developer
        </h3>
      </div>
    );
  }
}

export default Title;
