import React, { Component } from 'react'
import styles from './home.module.css'
import NavBar from '../../components/navBar/index'
import About from '../../components/about/index'
import Projects from '../../components/projects/index'
import Contact from '../../components/contact/index'


class ShowResults extends Component {

    render() {
        return (
            <div className={styles.mainContainer}>
                <div className={styles.myName}>
                    <span>Alessandro</span><br />
                    <span>– Oshiro</span>
                </div>
                <NavBar />
                <div className={styles.contentContainer}>
                    <span className={styles.heroText}>
                        Hello! I'm Alessandro. <br />A Brazilian Front-End Developer <br />and Graphic Desginer,<br /> currently based in Barcelona.<br />
                    </span>
                    <button
                        className={styles.scrollButton}
                        onClick={() => window.scrollTo(0, 900)}
                    >
                        <span className={styles.moreInfo}>
                            v
                    </span>
                    </button>
                    <About />
                    <Projects />
                    <Contact />
                </div>
            </div >
        )
    }
}

export default ShowResults