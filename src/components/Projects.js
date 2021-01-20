import React from 'react';
import styles from '../styles/projects.module.scss'
import Img from "gatsby-image"
import choremasterImg from '../images/choremaster-hand.png'


const Projects = () => {
    return (
        <section className={styles.projectSection}>
            <h2>Projects</h2>
            <div className={styles.projectsContainer}>
                <div className={styles.choremasterInfo}>
                    <h3>ChoreMaster</h3>
                    <p>My final project from Northcoders boot camp. A mobile game developed in order to make doing chores a bit fun!
                    Built with React Native, Firebase Authentication and Firestore realtime database.
                        </p>
                </div>
                <div className={styles.choremasterImg}>
                    <img src={choremasterImg} />
                </div>
                <div className={styles.readditInfo}>
                    <h3>Readdit</h3>
                    <p>A full stack Reddit-style news app.
                    The backend comprises of a postgreSQL relational database and Express to create a REST API and the front end is a responsive website built with React.
                    </p>
                </div>
            </div>
        </section >
    )
};

export default Projects;