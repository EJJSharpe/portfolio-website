import React from 'react';
import styles from '../styles/about.module.scss'
import mainImage from '../images/main-image.jpeg'
const About = () => {
    return (
        <section className={styles.aboutSection} id="about">
            <h2>About</h2>
            <div className={styles.aboutContainer}>
                <div className={styles.aboutImg}>
                    <img src={mainImage} alt="profile picture of Elliot Sharpe" />
                </div>
                <div className={styles.textContainer}>
                    <p>I spent most of my early adult years chasing rock stardom and a career in the
                    music industry. Whilst I did have some success: playing at venues around the UK with my 80's
                    inspired pop/rock band, working as club DJ, and hosting nightlife events
                    across Manchester. I became burnt out by the unsociable hours and lack of stability in this
                        area.<br /><br />

                                After a 6 month break travelling throughout southeast Asia, I decided to turn my focus to
                        another of my passions and began pursuing a career in the tech industry.<br /><br />


                        In order to kickstart this career, I decided to study at a full stack, Javascript boot camp
                        called Northcoders. As of January I am now a Northcoders graduate! It was a challenging experience
                        but immensely enjoyable and it has left me with no doubt that I made the right decision to pursue a career in tech.
                        I am excited to find employment in which I can continue my learning.
                    </p>
                </div >
            </div>
        </section >
    );
};

export default About;