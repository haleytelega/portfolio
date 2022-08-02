
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import WeatherDashboard from '../../assets/portfolio/0.jpg';
import WorkdayScheduler from '../../assets/portfolio/1.jpg';
import PasswordGenerator from '../../assets/portfolio/2.jpg';
import NoteTaker from '../../assets/portfolio/3.jpg';
import EmployeeTracker from '../../assets/portfolio/4.jpg';
import TechBlog from '../../assets/portfolio/5.jpg';


function Projects () {
    return (
        <Carousel>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={WeatherDashboard}
                alt="Weather Dashboard"
            />
            <Carousel.Caption>
                <h3>Weather Dashboard</h3>
                <a href="https://github.com/haleytelega/Weather-Dashboard" target="_blank" rel="noreferrer">GitHub Weather Dashboard</a>
                <a href="https://haleytelega.github.io/Weather-Dashboard/" target="_blank" rel="noreferrer">Deployed Link Weather Dashboard</a>
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
            <img
                className="d-block w-100"
                src={WorkdayScheduler}
                alt="Workday Scheduler"
            />

            <Carousel.Caption>
                <h3>Workday Scheduler</h3>
                <a href="https://github.com/haleytelega/Work-Day-Scheduler-" target="_blank" rel="noreferrer">GitHub Workday Scheduler</a>
                <a href="https://haleytelega.github.io/Work-Day-Scheduler-/" target="_blank" rel="noreferrer">Deployed Link Workday Scheduler</a>
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
            <img
                className="d-block w-100"
                src={PasswordGenerator}
                alt="Password Generator"
            />

            <Carousel.Caption>
                <h3>Password Generator</h3>
                <a href="https://github.com/haleytelega/Password-Generator" target="_blank" rel="noreferrer">GitHub Password Generator</a>
                <a href="https://haleytelega.github.io/Password-Generator/" target="_blank" rel="noreferrer">Deployed Link Password Generator</a>
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
            <img
                className="d-block w-100"
                src={NoteTaker}
                alt="Note Taker"
            />

            <Carousel.Caption>
                <h3>Note Taker</h3>
                <a href="https://github.com/haleytelega/Note-Taker" target="_blank" rel="noreferrer">GitHub Note Taker</a>
                <a href="https://ht-note-taker.herokuapp.com/" target="_blank" rel="noreferrer">Deployed Link Note Taker</a>
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
            <img
                className="d-block w-100"
                src={EmployeeTracker}
                alt="Employee Tracker"
            />

            <Carousel.Caption>
                <h3>Employee Tracker</h3>
                <a href="https://github.com/haleytelega/Employee-Tracker" target="_blank" rel="noreferrer">GitHub Employee Tracker</a>
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
            <img
                className="d-block w-100"
                src={TechBlog}
                alt="Tech Blog"
            />

            <Carousel.Caption>
                <h3>Tech Blog</h3>
                <a href="https://github.com/haleytelega/Tech-Blog" target="_blank" rel="noreferrer">GitHub Tech Blog</a>
                <a href="https://github.com/haleytelega/Tech-Blog" target="_blank" rel="noreferrer">Deployed Link Tech Blog</a>
            </Carousel.Caption>
        </Carousel.Item>

    </Carousel>
    );
}

export default Projects;