import React, { useState } from 'react';

const ProjectList = ({ category }) => {
    const [photos] = useState([
    {
        name: 'Weather Dashboard',
        category: 'portfolio',
        description: 'Weather Dashboard'
    },
    {
        name: 'Workday Scheduler',
        category: 'portfolio'
    },
    {
        name: 'Password Generator',
        category: 'portfolio'
    },
    {
        name: 'Note Taker',
        category: 'portfolio'
    },
    {
        name: 'Employee Tracker',
        category: 'portfolio'
    },
    {
        name: 'Tech Blog',
        category: 'portfolio'
    }
    ]);

    const currentPhotos = photos.filter(photo => photo.category === category);


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
        <div>
            <div className="flex-row example">
            {hover && <p className={hover}>hovered</p>}
                {currentPhotos.map((image, i) => (
                <img style={{ width: "20%" }}
                src={require(`../../assets/${category}/${i}.jpg`).default}
                onMouseEnter={(e) => onHover(e)}
                onMouseLeave={(e) => onHoverOver(e)}
                alt={image.name}
                className="img-thumbnail mx-1"
                key={image.name}
                />
            ))}
            </div>
        </div>
    );
};

export default ProjectList;