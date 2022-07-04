import React from 'react';
import haley from '../../assets/cover/haley.jpg'

function About() {
    return (
    <section className="my-5">
        <img src={haley} className="my-2" style={{ width: "20%" }} alt="cover" />
        <h1 id="about">Haley Telega</h1>
        <div className="my-2">
        <p>
        Full Stack web developer with a Certificate in Full Stack Web Development from Carleton University. 
        Skilled as a front-end web developer in HTML, CSS, JavaScript and React as well as backend with Node.js, 
        Server-Side APIs, SQL, ORM and NoSQL. I have strengths in meeting deadlines, teamwork and troubleshooting. I have a passion for working in a group to 
        debug a challenge from all angels. Excited to help develop responsive websites and provide a different perspective on how end 
        users interact with websites as well as working with others ideas. Positioned to help refactor the code in a more minimalist 
        way to make the code easier to read.
        </p>
        </div>
    </section>
    );
}

export default About;
