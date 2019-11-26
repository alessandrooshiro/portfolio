import React, { Component } from 'react'
import styles from './navbar.module.css'

class NavBar extends Component {

    render() {
        return (
            <div className={styles.mainContainer}>
                <div className={styles.bar} />
                <div className={styles.logoContainer}>
                    <ul style={{ listStyleType: 'none' }}>
                        <li className={styles.menuItem}>
                            <a href={'https://github.com/alessandrooshiro'} target="_blank" rel="noopener noreferrer" className={styles.link}>
                                Github
                            </a>
                        </li>
                        <li className={styles.menuItem}>
                            <a href={'https://www.linkedin.com/in/alessandro-oshiro-39226b172/'} target="_blank" rel="noopener noreferrer" className={styles.link}>
                                Linkedin
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={styles.menuContainer}>
                    <ul style={{ listStyleType: 'none' }}>
                        <li
                            className={styles.menuItem}
                            onClick={() => window.scrollTo(0, 0)}
                        >
                            Top
                        </li>
                        <li
                            className={styles.menuItem}
                            onClick={() => window.scrollTo(0, 900)}
                        >
                            About
                        </li>
                        <li
                            className={styles.menuItem}
                            onClick={() => window.scrollTo(0, 2500)}
                        >
                            Projects
                        </li>
                        <li
                            className={styles.menuItem}
                            onClick={() => window.scrollTo(0, 7400)}
                        >
                            Contact
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default NavBar