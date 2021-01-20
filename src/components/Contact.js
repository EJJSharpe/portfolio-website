import React from 'react';
import styles from '../styles/contact.module.scss'

const Contact = () => {
    return (
        <section className={styles.contactSection}>
            <h2>Contact</h2>
            <p>Get in touch with me!</p>

            <i className='bx bx-mail-send'></i>

        </section>
    );
};

export default Contact;