import React from 'react';
import haley from '../../assets/cover/haley.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function About() {
    return (
    <Container>
    <section className="my-5">
        <Row lg="auto">
            <Col>
                <img src={haley} className="my-2 Haley" style={{ width: "40%" }} alt="cover" />
            </Col>
            <Col>
                <h1 id="about">Haley Telega</h1>
                <p className="Haley_Description">
                I am a Full Stack Web Developer with extensive experience in Information Technology.
                I attended Fanshawe College where I receieved my deploma in Computer Systems Technology.
                During my time working in I.T., I realised I had a passion and enjoyment for coding.
                I signed up and completed a Certificate in Full Stack Web Development at Carleton University.
                I learned many differnt front-end and back-end languages that I can apply to designing powerful
                and user friendly websites and applications.
                </p>
            </Col>
            <Col>
                <h1 id="Haley_Tech_Skills"> Technical Skills </h1>
                <h1 className="Haley_L-F">Languages/framworks:</h1>
                <p className="Haley_Description" >- HTML, CSS, JavaScript, React, jQuery,
                    JSON, Node.js, Express.js, Jest, MySQL, Sequelize, Handlebars,
                    MongoDB, Mongoose and GraphQL.
                </p>
                <h1 className="Haley_L-F">Other Technologies:</h1>
                <p className="Haley_Description">- GitHub, Heroku, Indexed DB API and Visio Studio Code.</p>
            </Col>
        </Row>
    </section>
    </Container>
    );
}

export default About;
