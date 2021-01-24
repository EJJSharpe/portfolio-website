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
        <a href="https://www.linkedin.com/in/elliotsharpe/"><i className='bx bxl-linkedin-square' aria-label='linked in'></i></a>
        <a href="https://github.com/ejjsharpe"><i className='bx bxl-github' aria-label='github'></i></a>
        <a href="https://twitter.com/elliotsharpe"><i className='bx bxl-twitter' aria-label='twitter'></i></a>
      </div>

    </div>
  </header>
)

export default Header
