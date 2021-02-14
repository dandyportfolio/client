import React, { useEffect } from 'react';
import '../css/About.min.css';
import gsap from 'gsap';
import ScrollTrigger from 'scrollmagic';
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';

export default function About() {
  useEffect(() => {
    //! START ANIMATION
    const tl = gsap.timeline({ onUpdate: updatePercentage });
    const controller = new ScrollTrigger.Controller();

    tl.from('.background-text', 2, { x: 700 });

    //? Scroll Magic START
    new ScrollTrigger.Scene({
      triggerElement: '.about-container',
    })
      .setTween(tl)
      .addTo(controller);
    //? Scroll Magic END

    function updatePercentage() {
      tl.progress();
    }
  });

  return (
    <div id="about" className="about-container">
      <div>
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
    </div>
  );
}
