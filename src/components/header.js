import React from "react"
import styles from '../styles/header.module.scss'


const Header = () => (
  <header>
    <div className={styles.navContainer}>

      <nav className={styles.navList}>
        <a href='#about' className={styles.navLink}><span>01.</span>About</a>
        <a href='#projects' className={styles.navLink}><span>02.</span>Projects</a>
        <a href='#contact' className={styles.navLink}><span>03.</span>Contact</a>
      </nav>

      <div className={styles.socialsList}>
        <a href="#"><i className='bx bxl-linkedin-square'></i></a>
        <a href="#"><i className='bx bxl-github'></i></a>
        <a href="#"><i className='bx bxl-twitter'></i></a>
      </div>

    </div>
  </header>
)

export default Header
