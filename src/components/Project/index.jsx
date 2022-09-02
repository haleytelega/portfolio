
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
            <Carousel.Caption className="project1">
                <p className="projects">Website where you can check for your daily and weekly weather.</p> 
                <p className="projects"> Languages: HTML, CSS, Third-party API </p>
                <a className="githubproject" href="https://github.com/haleytelega/Weather-Dashboard" target="_blank" rel="noreferrer">GitHub</a>
                <a className="deployedprojects" href="https://haleytelega.github.io/Weather-Dashboard/" target="_blank" rel="noreferrer">Deployed Link</a>
            </Carousel.Caption>
        </Carousel.Item>



        <Carousel.Item>
            <img
                className="d-block w-100"
                src={WorkdayScheduler}
                alt="Workday Scheduler"
            />

            <Carousel.Caption className="project1">
                <p className="projects">Website where you can schedule your workday by hour</p> 
                <p className="projects"> Languages: jQuery and Moment.js </p>
                <a className="githubproject" href="https://github.com/haleytelega/Work-Day-Scheduler-" target="_blank" rel="noreferrer">GitHub</a>
                <a className="deployedprojects" href="https://haleytelega.github.io/Work-Day-Scheduler-/" target="_blank" rel="noreferrer">Deployed Link</a>
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
            <img
                className="d-block w-100"
                src={PasswordGenerator}
                alt="Password Generator"
            />

            <Carousel.Caption className="project1">
                <p className="projects">Website for a password generator</p> 
                <p className="projects"> Languages: JavaScript </p>
                <a className="githubproject" href="https://github.com/haleytelega/Password-Generator" target="_blank" rel="noreferrer">GitHub</a>
                <a className="deployedprojects" href="https://haleytelega.github.io/Password-Generator/" target="_blank" rel="noreferrer">Deployed Link</a>
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
            <img
                className="d-block w-100"
                src={NoteTaker}
                alt="Note Taker"
            />

            <Carousel.Caption className="project1">
                <p className="projects">Website to take notes and save them for a later day</p> 
                <p className="projects"> Languages: Express.js and JSON </p>
                <a className="githubproject" href="https://github.com/haleytelega/Note-Taker" target="_blank" rel="noreferrer">GitHub</a>
                <a className="deployedprojects" href="https://ht-note-taker.herokuapp.com/" target="_blank" rel="noreferrer">Deployed Link</a>
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
            <img
                className="d-block w-100"
                src={EmployeeTracker}
                alt="Employee Tracker"
            />

            <Carousel.Caption className="project1">
                <p className="projects">Website to create a team profile</p> 
                <p className="projects"> Languages/Frameworks: Node.js, OOP, TDD, Inquirer, Jest</p>
                <a className="githubproject" href="https://github.com/haleytelega/Object-Oriented-Programming-Challenge-Team-Profile-Generator" target="_blank" rel="noreferrer">GitHub</a>
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
            <img
                className="d-block w-100"
                src={TechBlog}
                alt="Tech Blog"
            />

            <Carousel.Caption className="project1">
                <p className="projects">Tech Blog for developers to post blogs and comment on others</p> 
                <p className="projects"> Languages/Frameworks: Handlebars, Sequelize and Express.js </p>
                <a className="githubproject" href="https://github.com/haleytelega/Tech-Blog" target="_blank" rel="noreferrer">GitHub</a>
                <a className="deployedprojects" href="https://haleys-tech-blog.herokuapp.com/" target="_blank" rel="noreferrer">Deployed Link</a>
            </Carousel.Caption>
        </Carousel.Item>

    </Carousel>
    );
}

export default Projects;