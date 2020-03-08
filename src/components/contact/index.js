import React, { Component } from 'react'
import styles from './contact.module.css'
import Fade from 'react-reveal/Fade'
import pic from '../../images/profile-pic.jpg'

class Projects extends Component {

    state = {
        isHoveredImage: false
    }

    render() {
        return (
            <div className={this.props.isProjectOpen ? styles.projectsSectionExtended : styles.projectsSection}>
                <span className={styles.sectionTitle}>
                    <Fade bottom>
                        Contact:
                            </Fade>
                </span>

                <Fade bottom>
                    <img src={pic} className={styles.profilePic} alt='profile pic'/>
                </Fade>
                <div className={styles.detailSection}>
                    <div className={styles.detailDiv}>
                        <span className={styles.detailQuestion}>
                            <Fade bottom>
                                <strong>Email:</strong>
                            </Fade>
                        </span>
                        <span className={styles.detailAnswer}>
                            <Fade bottom>
                                alessandro.oshiro@usp.br
                                </Fade>
                        </span>
                        <span className={styles.detailQuestion}>
                            <Fade bottom>
                                <strong>Phone:</strong>
                            </Fade>
                        </span>
                        <span className={styles.detailAnswer}>
                            <Fade bottom>
                                +55 11 97248-2324
                                </Fade>
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects