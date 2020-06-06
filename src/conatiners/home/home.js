import React, { Component } from 'react'
// import styles from './home.module.css'
import NavBar from '../../components/NavBar'
import About from '../../components/About'
import Projects from '../../components/Projects'
import Contact from '../../components/Contact'

class Portfolio extends Component {

    state = {
        // mouseX: '100px',
        // mouseY: '100px',
        isHover: false
    }

    render() {

        // let cursorStyle = {
        //     left: this.state.mouseX - 28,
        //     top: this.state.mouseY - 110
        // };

        return (
            <div
            // onMouseMove={(e) => this.setState({ mouseX: e.screenX, mouseY: e.screenY })}
            >

                {/* <div
                    className={this.state.isHover ? styles.cursorHover : styles.cursor}
                    style={cursorStyle}
                >
                    <div className={this.state.isHover ? styles.cursorChildHover : styles.cursorChild} />
                </div> */}
                <NavBar />
                <About />
                <Projects />
                <Contact />
            </div >
        )
    }
}

export default Portfolio