import React from 'react';

function GroupProject({ details }) {
  return (
    <div className="group-project">
      <img src={details.imageUrl} alt={details.title} className="project-image" />
      <div className="project-details">
        <h3>{details.title}</h3>
        {/* Add additional group project information here */}
        <p>{details.description}</p>
        <div className="project-links">
          <a href={details.liveLink} target="_blank" rel="noopener noreferrer">View Live</a>
          <a href={details.repoLink} target="_blank" rel="noopener noreferrer">
            {/* Assume there's a GitHub icon here */}
            <i className="fa fa-github"></i> GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default GroupProject;
