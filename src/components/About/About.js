import React from 'react';
import '../css/About.min.css';
import { TimelineMax } from 'gsap';
import ScrollMagic from 'scrollmagic';
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';
import '../../plugins/debug.addIndicators';

class About extends React.Component {
  componentDidMount() {
    //! START ANIMATION
    const tl = new TimelineMax({ onUpdate: updatePercentage });
    const controller = new ScrollMagic.Controller();

    tl.from('.background-text', 2, { x: 500 });

    //? Scroll Magic START
    const scene = new ScrollMagic.Scene({
      triggerElement: '.about-container',
      triggerHook: 'onLeave',
      duration: '50%',
    })
      .setTween(tl)
      .addIndicators({ indent: 20 })
      .setPin('.about-container')
      .addTo(controller);
    //? Scroll Magic END

    function updatePercentage() {
      tl.progress();
    }
  }

  render() {
    return (
      <div id="about" className="about-container">
        <div className="my-portfolio-image-wrapper">
          <img
            className="my-portfolio-image"
            src="/images/reyes_dandy_headshot.png"
            alt="Portrait of myself"
            width="100px"
          />
        </div>
        <div className="about-me-wrapper">
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
        <h1 className="background-text">ABOUT</h1>
      </div>
    );
  }
}

export default About;
