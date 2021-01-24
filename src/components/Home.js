import React, { useEffect } from 'react';
import styles from '../styles/home.module.scss'

const Home = () => {
    useEffect(() => {

    }, [])


    return (
        <section className={styles.homeContainer}>
            <div className={styles.homeHeadlines}>

                <p data-sal="slide-left"
                    data-sal-delay="200"
                    data-sal-easing="ease">Hello, I'm...</p>
                <h1 data-sal="slide-right"
                    data-sal-delay="600"
                    data-sal-easing="ease">Elliot Sharpe</h1>
                <h2 data-sal="slide-left"
                    data-sal-delay="1000"
                    data-sal-easing="ease">Software Developer</h2>
            </div>
        </section >
    );
};

export default Home;