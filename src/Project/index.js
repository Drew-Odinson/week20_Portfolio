function Project({ details }) {
    return (
      <div className="project">
        <img src={details.imageUrl} alt={details.title} />
        <h3>{details.title}</h3>
        <a href={details.liveLink} target="_blank" rel="noopener noreferrer">View Live</a>
        <a href={details.repoLink} target="_blank" rel="noopener noreferrer">
          <img src="github_icon_url" alt="GitHub" />
        </a>
      </div>
    );
  }
  