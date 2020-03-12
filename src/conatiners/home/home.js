import React, { Component } from 'react'
import styles from './home.module.css'
import NavBar from '../../components/navBar/index'
import About from '../../components/about/index'
import Projects from '../../components/projects/index'
import Contact from '../../components/contact/index'

class ShowResults extends Component {

    state = {
        mouseX: '100px',
        mouseY: '100px',
        isHover: false,
    }

    render() {

        let cursorStyle = {
            left: this.state.mouseX - 28,
            top: this.state.mouseY - 130
        };

        return (
            <div
                className={styles.mainContainer}
                onMouseMove={(e) => this.setState({ mouseX: e.screenX, mouseY: e.screenY })}
            >
                <div
                    className={this.state.isHover ? styles.cursorHover : styles.cursor}
                    style={cursorStyle}
                >
                    <div className={this.state.isHover ? styles.cursorChildHover : styles.cursorChild} />
                </div>
                <div className={styles.myName}>
                    <span>Alessandro</span><br />
                    <span>– Oshiro</span>
                </div>
                <NavBar
                    onHover={() => this.setState({ isHover: !this.state.isHover })}
                />
                <div className={styles.contentContainer}>
                    <span className={styles.heroText}>
                        Hello! I'm Alessandro. <br />A Brazilian Front-End Developer <br />and UX/UI Designer,<br /> currently based in São Paulo.<br />
                    </span>
                    <button
                        className={styles.scrollButton}
                        onClick={() => window.scrollTo(0, 900)}
                    >
                        <span
                            className={styles.moreInfo}
                            onMouseLeave={() => this.setState({ isHover: !this.state.isHover })}
                            onMouseEnter={() => this.setState({ isHover: !this.state.isHover })}
                        >
                            v
                    </span>
                    </button>
                    <About />
                    <Projects
                        onHover={() => this.setState({ isHover: !this.state.isHover })}
                    />
                    <Contact />
                </div>
            </div >
        )
    }
}

export default ShowResults