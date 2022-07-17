
import React, { useState } from 'react';
import ProjectNames from '../ProjectNames';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const ProjectList = ({ category, link }) => {
    const [photos] = useState([
    {
        name: 'Weather Dashboard',
        category: 'portfolio',
        link: 'https://haleytelega.github.io/Weather-Dashboard/'
    },
    {
        name: 'Workday Scheduler',
        category: 'portfolio',
        link:'https://haleytelega.github.io/Work-Day-Scheduler-/'
    },
    {
        name: 'Password Generator',
        category: 'portfolio',
        link: 'https://haleytelega.github.io/Password-Generator/'
    },
    {
        name: 'Note Taker',
        category: 'portfolio',
        link: 'https://ht-note-taker.herokuapp.com/'
    },
    {
        name: 'Employee Tracker',
        category: 'portfolio',
        link:'https://github.com/haleytelega/Employee-Tracker'
    },
    {
        name: 'Tech Blog',
        category: 'portfolio',
        link:'https://haleys-tech-blog.herokuapp.com/'
    }
    ]);

    return (
        <div>
            <Container>
            <div className="flex-row">
                <Row>
                {photos.map((image, i ) => (
                    <ProjectNames key={image.name} 
                    img={image} i={i} category="portfolio" link={photos[i].link}  / >
            ))}
            </Row>
            </div>
            </Container>
        </div>
    );
};

export default ProjectList;