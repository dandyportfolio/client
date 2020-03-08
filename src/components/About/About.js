import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <div id="my-portfolio-image-wrapper">
          <img
            id="my-portfolio-image"
            src="/images/reyes_dandy_headshot.jpg"
            alt="Portrait image of myself"
            width="100px"
          />
        </div>
        <div id="about-me-wrapper">
          <p>
            Hola, my name is <i>Dandy</i>. I am a
            <b> Latino Software Engineer</b> and <b>UI/UX Designer</b>. I love
            coding, creating and helping people get to the next level in their
            career path as developers. I advocate for foster youth and love to
            mentor young developers.
            <br />
            <br />
            Some of my crazy hobbies are building robots from the ground up,
            biking, knitting, and throwing get togethers. I’m a people person!
          </p>
        </div>
      </React.Fragment>
    );
  }
}

export default About;
