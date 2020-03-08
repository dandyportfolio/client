import React from "react";

class Skills extends React.Component {
  render() {
    return (
      <React.Fragment>
        <ul>
          Front End
          <li>HTML5</li>
          <li>CSS3</li>
          <li>Javascript</li>
          <li>React</li>
        </ul>
        <ul>
          Design
          <li>Graphic Designer</li>
          <li>UX/UI</li>
          <li>Photoshop</li>
          <li>illustrator</li>
          <li>Adobe XD</li>
          <li>Sketch</li>
        </ul>
        <ul>
          Back End
          <li>Node.js</li>
          <li>Express.js</li>
          <li>SQL</li>
          <li>PostgreSQL</li>
          <li>AWS S3</li>
        </ul>
        <ul>
          Useful Skills
          <li>Git</li>
          <li>Agile Scrum</li>
          <li>Agile Kanban</li>
          <li>Bash</li>
          <li>Linux CLI</li>
        </ul>
      </React.Fragment>
    );
  }
}

export default Skills;
