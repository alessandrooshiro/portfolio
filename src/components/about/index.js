import React, { Component } from 'react'
import styles from './about.module.css'
import "animate.css/animate.min.css"
import Fade from 'react-reveal/Fade'

class About extends Component {

    render() {
        return (
            <div className={styles.detailSection}>
                <div className={styles.detailDiv}>
                    <span className={styles.detailQuestion}>
                        <Fade bottom>
                            What's my background?
                                </Fade>
                    </span>
                    <div className={styles.lineBreak} />
                    <span className={styles.detailAnswer}>
                        <Fade bottom>
                            My studies as an Architect and my training as a Front-End Developer made me capable to create web applications on my own, combining the fields of design and development. Focusing, primarily, on development of webapps with React.js.
                                <br />I'm an undergrad architecture student at University of São Paulo, in Brazil, althought currently, due to acquiring a scholarship, I'm studying at Universitat Politècnica de Catalunya, in Barcelona.
                                </Fade>
                    </span>
                </div>
                <div className={styles.detailDiv}>
                    <span className={styles.detailQuestion}>
                        <Fade bottom>
                            What am I doing right now?
                                </Fade>
                    </span>
                    <span className={styles.detailAnswer}>
                        <Fade bottom>
                            I am currently working remotely as a UI/UX design and front-end development intern at Real2U, a startup company focused in Augmented Reality experiences.
                                <br /> My experiences on the field varies from UX researching, designing and prototyping UI's and the Front-End development of web and mobile applications.
                                </Fade>
                    </span>
                </div>
                <div className={styles.detailDiv}>
                    <span className={styles.detailQuestion}>
                        <Fade bottom>
                            Skills:
                                </Fade>
                    </span>
                    <span className={styles.detailAnswer}>
                        <Fade bottom>
                            Photoshop • Illustrator • inDesign • Autocad • Sketchup • Vray • Twinmotion • Sketch • InVision • Figma <br/> HTML • CSS • JavaScript • React
                                </Fade>
                    </span>
                </div>
            </div>
        )
    }
}

export default About


