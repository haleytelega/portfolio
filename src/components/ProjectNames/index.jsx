import React from 'react';

const ProjectNames = ({ img, i, category, repo }) => {
    
    return (
        <>
        <div className="portfolio_container">
            <div className="portfolio_container-info">
                <p className="portfolio_container-name">{img.name}</p>
                <a href={repo} target="_blank" rel="noreferrer">{repo}</a>
            </div>
            <img
                src={require(`../../assets/${category}/${i}.jpg`).default}
                alt={img.name}
                className="portfolio_container-image"
            />
        </div>
            </>
    )
}

export default ProjectNames;