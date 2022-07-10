
import React, { useState } from 'react';
import ProjectNames from '../ProjectNames';

const ProjectList = ({ category, repo }) => {
    const [photos] = useState([
    {
        name: 'Weather Dashboard',
        category: 'portfolio',
        repo: 'https://github.com/haleytelega/Weather-Dashboard',
        link: 'https://haleytelega.github.io/Weather-Dashboard/'
    },
    {
        name: 'Workday Scheduler',
        category: 'portfolio',
        repo:'https://github.com/haleytelega/Work-Day-Scheduler-'
    },
    {
        name: 'Password Generator',
        category: 'portfolio',
        repo: 'https://github.com/haleytelega/Password-Generator'
    },
    {
        name: 'Note Taker',
        category: 'portfolio',
        repo: 'https://github.com/haleytelega/Note-Taker'
    },
    {
        name: 'Employee Tracker',
        category: 'portfolio',
        repo:'https://github.com/haleytelega/Employee-Tracker'
    },
    {
        name: 'Tech Blog',
        category: 'portfolio',
        repo:'https://github.com/haleytelega/Tech-Blog'
    }
    ]);

    const currentPhotos = photos.filter(photo => photo.category === category && photo.repo === repo);
    
    return (
        <div>
            <div className="flex-row">
                {currentPhotos.map((image, i ) => (
                    <ProjectNames key={image.name} 
                    img={image} i={i} category={category} repo={photos[i].repo}  / >
            ))}
            </div>
        </div>
    );
};

export default ProjectList;