import React from 'react';
import styles from '../styles/home.module.scss'
import mainImage from '../images/main-image.jpeg'

const Home = () => {
    return (
        <section className={styles.homeContainer}>
            <div className={styles.homeHeadlines}>
                <p>Hello, I'm...</p>
                <h1>Elliot Sharpe</h1>
                <h2>Software Developer</h2>
            </div>
        </section >
    );
};

export default Home;