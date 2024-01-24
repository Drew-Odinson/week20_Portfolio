import React from 'react';
import Project from '../components/Projects';
import './Portfolio.css'; // Make sure you have this CSS file


const projects = [

  {
    title: "Project One",
    imageUrl: "link_to_image",
    liveLink: "link_to_live_project",
    repoLink: "link_to_repository"
  },
  {
    title: "Project Two",
    imageUrl: "link_to_image",
    liveLink: "link_to_live_project",
    repoLink: "link_to_repository"
  },
  {
    title: "Project Three",
    imageUrl: "link_to_image",
    liveLink: "link_to_live_project",
    repoLink: "link_to_repository"
  },

];

function Portfolio() {
  return (
    <section>
      <h2>My Portfolio</h2>
      <h3>Group Projects</h3>
      <div className="project-container">
        {groupProjects.map((project, index) => (
          <Project key={`group-${index}`} details={project} />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
