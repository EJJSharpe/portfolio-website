import React, { useState } from 'react';
import styles from '../styles/projects.module.scss'
import choremasterImg from '../images/choremaster-hand.png'
import readditImg from '../images/Readdit-laptop.jpg'
import ModalVideo from 'react-modal-video'


const Projects = () => {
    const [isOpen, setOpen] = useState(false)

    return (
        <section className={styles.projectSection} id="projects">
            <h2>Projects</h2>
            <div className={styles.projectsContainer}>
                <div className={styles.choremasterInfo}>
                    <h3>ChoreMaster</h3>
                    <p>My final project from Northcoders boot camp. A mobile game developed in order to make doing chores a bit fun!
                    Built with React Native, Firebase Authentication and Firestore realtime database.
                        </p>
                    <a href='https://github.com/EJJSharpe/ChoreMaster'>
                        <div className={styles.codeInfo}>
                            <p>View on GitHub</p>
                            <i className='bx bxl-github'></i>
                        </div>
                    </a>
                </div>
                <div className={styles.choremasterImage}>
                    <button onClick={() => { setOpen(true) }} onKeyDown={() => { setOpen(true) }} >
                        <img src={choremasterImg} alt='choremaster mobile game' />
                        <i className='bx bx-movie-play'></i>
                    </button>
                </div>

                <div className={styles.readditInfo}>
                    <a href='https://readdit-news.netlify.app/'><h3>Readdit</h3></a>
                    <p>A full stack Reddit-style news app.
                    The backend comprises of a postgreSQL relational database and Express to create a REST API and the front end is a responsive website built with React.
                    </p>
                    <a href='https://github.com/EJJSharpe/readdit-react-app'>
                        <div className={styles.codeInfo}>
                            <p>View frontend code</p>
                            <i className='bx bxl-github'></i>
                        </div>
                    </a>
                    <a href='https://github.com/EJJSharpe/readdit-api'>
                        <div className={styles.codeInfo}>
                            <p>View backend code</p>
                            <i className='bx bxl-github'></i>
                        </div>
                    </a>

                </div>
                <div className={styles.readditImage}>
                    <a href='https://readdit-news.netlify.app/'><img src={readditImg} alt='readdit news website' />
                        <i className='bx bx-pointer'></i>
                    </a>
                </div>
            </div>

            <ModalVideo channel='youtube' autoplay={true} isOpen={isOpen} videoId="Lx4bccmx3N0" onClose={() => setOpen(false)} />

        </section>
    )
};

export default Projects;