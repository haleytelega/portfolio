/* eslint-disable no-undef */
import React, { useState } from 'react';
import ProjectNames from '../ProjectNames';

const ProjectList = ({ category }) => {
    const [photos] = useState([
    {
        name: 'Weather Dashboard',
        category: 'portfolio',
        repo: 'https://github.com/haleytelega/Weather-Dashboard',
        link: 'https://haleytelega.github.io/Weather-Dashboard/'
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

    return (
        <div>
            <div className="flex-row example">
                {currentPhotos.map((image, i) => (
                    <ProjectNames key={image.name} 
                    img={image} i={i} category={category} / >
            ))}
            </div>
        </div>
    );
};

export default ProjectList;