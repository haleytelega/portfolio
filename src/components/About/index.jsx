import React from 'react';
import haley from '../../assets/cover/haley.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function About() {
    return (
    <Container>
    <section className="my-5">
        <Row>
            <Col>
                <img src={haley} className="my-2 Haley" style={{ width: "70%" }} alt="cover" />
            </Col>
            <Col>
                <h1 id="about">Haley Telega</h1>
                <p>
        Full Stack web developer with a Certificate in Full Stack Web Development from Carleton University. 
        Skilled as a front-end web developer in HTML, CSS, JavaScript and React as well as backend with Node.js, 
        Server-Side APIs, SQL, ORM and NoSQL. I have strengths in meeting deadlines, teamwork and troubleshooting. I have a passion for working in a group to 
        debug a challenge from all angels. Excited to help develop responsive websites and provide a different perspective on how end 
        users interact with websites as well as working with others ideas. Positioned to help refactor the code in a more minimalist 
        way to make the code easier to read.
                </p>
            </Col>
        </Row>
    </section>
    </Container>
    );
}

export default About;
