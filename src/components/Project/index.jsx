
import React, { useState } from 'react';
import ProjectNames from '../ProjectNames';

const ProjectList = ({ category, link }) => {
    const [photos] = useState([
    {
        name: 'Weather Dashboard',
        category: 'portfolio',
        link: 'https://haleytelega.github.io/Weather-Dashboard/'
    },
    {
        name: 'Workday Scheduler',
        category: 'portfolio'
        // link:'https://haleytelega.github.io/Work-Day-Scheduler-/'
    },
    {
        name: 'Password Generator',
        category: 'portfolio'
        // link: 'https://haleytelega.github.io/Password-Generator/'
    },
    {
        name: 'Note Taker',
        category: 'portfolio'
        // link: 'https://ht-note-taker.herokuapp.com/'
    },
    {
        name: 'Employee Tracker',
        category: 'portfolio'
        // link:'https://github.com/haleytelega/Employee-Tracker'
    },
    {
        name: 'Tech Blog',
        category: 'portfolio'
        // link:'https://haleys-tech-blog.herokuapp.com/'
    }
    ]);

    const currentPhotos = photos.filter(photo => photo.category === category && photo.link === link);

    return (
        <div>
            <div className="flex-row">
                {currentPhotos.map((image, i ) => (
                    <ProjectNames key={image.name} 
                    img={image} i={i} category={category} link={photos[i].link}  / >
            ))}
            </div>
        </div>
    );
};

export default ProjectList;