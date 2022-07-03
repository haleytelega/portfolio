import React from 'react';
import haley from '../../assets/cover/haley.jpg'

function About() {
    return (
    <section className="my-5">
        <img src={haley} className="my-2" style={{ width: "100%" }} alt="cover" />
        <h1 id="about">Haley Telega</h1>
        <div className="my-2">
        <p>
        I am Haley Telega and I am from Windsor, Ontario.
        </p>
        </div>
    </section>
    );
}

export default About;
