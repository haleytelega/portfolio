import React, { useState, Link } from 'react';

const ProjectNames = ({ img, i, category, repo }) => {

    const [hover, setHover] = useState(false); // initial false

    const onHover = (e) => {
    e.preventDefault();
    setHover(true); // turn true
    console.log("hovered");
    };

    const onHoverOver = (e) => {
    e.preventDefault(); // turn false
    setHover(false);
    };
    
    return (
        <>
        <img style={{ width: "20%" }}
                src={require(`../../assets/${category}/${i}.jpg`).default}
                onMouseEnter={(e) => onHover(e)}
                onMouseLeave={(e) => onHoverOver(e)}
                alt={img.name}
                className="img-thumbnail mx-1"
                />
                {hover &&
                <p>{img.name}</p> &&
                <Link to={{ pathname: img.repo }} target="_blank" />}
                </>
    )
}

export default ProjectNames;