import React from 'react';
import coverImage from '../../assets/cover/cover-image.jpg';

function About() {
    return (
        <section className="my-5">
            <h1 id="about">Who am I?</h1>
            <img
                src={coverImage}
                className="my-2"
                style={{ width: '100%' }}
                alt="cover"
            ></img>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Accusantium harum culpa non reprehenderit vel nam, asperiores
                alias molestiae praesentium. Repudiandae voluptas earum tempora
                nobis velit numquam cumque, nulla accusantium sint.
            </p>
        </section>
    );
}

export default About;
