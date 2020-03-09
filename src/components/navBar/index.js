import React, { Component } from 'react'
import styles from './navbar.module.css'

class NavBar extends Component {

    render() {
        return (
            <div className={styles.mainContainer}>
                <div className={styles.bar} />
                <div className={styles.logoContainer}>
                    <ul style={{ listStyleType: 'none' }}>
                        <li
                            onMouseEnter={this.props.onHover}
                            onMouseLeave={this.props.onHover}
                            className={styles.menuItem}
                        >
                            <a href={'https://github.com/alessandrooshiro'} target="_blank" rel="noopener noreferrer" className={styles.link}>
                                Github
                            </a>
                        </li>
                        <li
                            onMouseEnter={this.props.onHover}
                            onMouseLeave={this.props.onHover}
                            className={styles.menuItem}
                        >
                            <a href={'https://www.linkedin.com/in/alessandro-oshiro-39226b172/'} target="_blank" rel="noopener noreferrer" className={styles.link}>
                                Linkedin
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={styles.menuContainer}>
                    <ul style={{ listStyleType: 'none' }} onClick={this.props.closeProject}>
                        <li
                            onMouseEnter={this.props.onHover}
                            onMouseLeave={this.props.onHover}
                            className={styles.menuItem}
                            onClick={() => window.scrollTo(0, 0)}
                        >
                            Top
                        </li>
                        <li
                            onMouseEnter={this.props.onHover}
                            onMouseLeave={this.props.onHover}
                            className={styles.menuItem}
                            onClick={() => window.scrollTo(0, 1000)}
                        >
                            About
                        </li>
                        <li
                            onMouseEnter={this.props.onHover}
                            onMouseLeave={this.props.onHover}
                            className={styles.menuItem}
                            onClick={() => window.scrollTo(0, 2250)}
                        >
                            Projects
                        </li>
                        <li
                            onMouseEnter={this.props.onHover}
                            onMouseLeave={this.props.onHover}
                            className={styles.menuItem}
                            onClick={() => window.scrollTo({ left: 0, top: 90000 })}
                        >
                            Contact
                        </li>
                    </ul>
                </div>
            </div >
        )
    }
}

export default NavBar