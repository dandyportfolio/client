import React from 'react';
import '../css/Projects.min.css';
import projectData from './projects.json';

export default function Projects() {
  const makeProjectTemplate = ({
    id,
    link,
    imagePath,
    className,
    alt,
    width,
  }) => {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" key={id}>
        <img
          src={imagePath}
          alt={alt}
          className={className}
          rel="noopener noreferrer"
          width={width}
        />
      </a>
    );
  };
  return (
    <div
      id="projects"
      className="project-container x mandatory-scroll-snapping"
      dir="ltr"
    >
      {projectData.map(({ desktop, mobile }) => {
        return (
          <div>
            {makeProjectTemplate(desktop)}
            {mobile.link ? makeProjectTemplate(mobile) : ''}
          </div>
        );
      })}
    </div>
  );
}
