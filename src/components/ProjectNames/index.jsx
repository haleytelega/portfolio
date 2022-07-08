import React from 'react';

const ProjectNames = ({ img, i, category }) => {
    
    return (
        <>
        <div className="portfolio_container">
            <div className="portfolio_container-info">
                <p className="portfolio_container-name">{img.name}</p>
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