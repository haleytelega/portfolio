import React, { useState } from 'react';

const ProjectNames = ({ img, i, category }) => {

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
                <div className="exmaple2">
                <p className="text">{img.name}</p>
                </div>}
            </>
    )
}

export default ProjectNames;