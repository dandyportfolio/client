import React from 'react';
import '../css/Projects.min.css';

export default function Projects() {
  return (
    <div
      id="projects"
      className="project-container x mandatory-scroll-snapping"
      dir="ltr"
    >
      <div>
        <h1>Click image to see project!</h1>
        <a
          href="https://xd.adobe.com/view/15405a5a-e7bc-4163-6fd9-6299967481b8-6371/?fullscreen"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/images/my_portfolio_web.png"
            className="desktop"
            alt="electra"
          />
        </a>
        <h1>-></h1>
      </div>
      <div>
        <a
          href="https://xd.adobe.com/view/a09a6bb2-c574-4bb1-7517-6de3f8a265c0-d6ab/?fullscreen"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/images/electra_portfolio_web.png"
            alt="electra web design"
            className="desktop"
            rel="noopener noreferrer"
          />
        </a>

        <a
          href="https://xd.adobe.com/view/fdba7ccc-9072-4245-7ac6-bc7548bf26ad-8b8b/?fullscreen"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/images/electra_portfolio_mobile.png"
            alt="electra mobile design"
            className="mobile"
            width="200px"
          />
        </a>
      </div>
      <div>
        <a
          href="https://xd.adobe.com/view/fc91325c-c8f0-4671-72d0-9ec317c07c74-8aa0/?fullscreen"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/images/couchcast_portfolio_web.png"
            className="desktop"
            alt="electra"
          />
        </a>

        <a
          href="https://xd.adobe.com/view/0a867817-4c32-418c-68f0-e26521fda571-7cb7/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/images/couchcast_portfolio_mobile.png"
            alt="couchcast mobile design"
            className="mobile"
            width="200px"
          />
        </a>
      </div>
    </div>
  );
}
