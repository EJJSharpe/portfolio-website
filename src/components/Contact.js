import React from 'react';
import styles from '../styles/contact.module.scss'

const Contact = () => {
    return (
        <section className={styles.contactSection} id="contact">
            <div className={styles.header}>
                <h2>Contact</h2>
                <p>Get in touch with me!</p>
            </div>

            <div className={styles.infoContainer}>
                <div className={styles.email}>
                    <div className={styles.subheader}>
                        <i className='bx bx-mail-send'></i>
                        <p>Email</p>
                    </div>
                    <p className={styles.info}>ejjsharpe@gmail.com</p>
                </div>
                <div className={styles.location}>
                    <div className={styles.subheader}>
                        <i className='bx bx-building-house'></i>
                        <p>Location</p>
                    </div>
                    <p className={styles.donInfo}>Doncaster</p>

                </div>
            </div>

        </section >
    );
};

export default Contact;