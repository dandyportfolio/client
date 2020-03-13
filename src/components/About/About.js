import React from "react";
import "./About.css";
import { TimelineMax } from "gsap";
import ScrollMagic from "scrollmagic";

class About extends React.Component {
  componentDidMount() {
    //! START ANIMATION
    const tl = new TimelineMax({ onUpdate: updatePercentage });
    const controller = new ScrollMagic.Controller();

    tl.from(".backgroundText", 0.5, { x: 500, opacity: 0 });

    const scene = new ScrollMagic.Scene({
      triggerElement: ".about-me-wrapper",
      triggerHook: "onLeave",
      duration: "1%"
    })
      .setPin(".about-me-wrapper")
      .setTween(tl)
      .addTo(controller);

    function updatePercentage() {
      tl.progress();
    }
  }

  render() {
    return (
      <div className="aboutInformation">
        <div className="my-portfolio-image-wrapper">
          <img
            className="my-portfolio-image"
            src="/images/reyes_dandy_headshot.jpg"
            alt="Portrait image of myself"
            width="100px"
          />
        </div>
        <div className="about-me-wrapper">
          <h1 className="backgroundText">ABOUT</h1>

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
      </div>
    );
  }
}

export default About;
