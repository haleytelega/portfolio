import React from 'react';

const ProjectNames = ({ img, i, category, link }) => {
    
    return (
        <>
        <div className="portfolio_container">
            <div className="portfolio_container-info">
                <a className="portfolio_container-name" href={link} target="_blank" rel="noreferrer">{img.name}</a>
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