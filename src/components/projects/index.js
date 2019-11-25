import React, { Component } from 'react'
import styles from './projects.module.css'
import Fade from 'react-reveal/Fade'
import params from './projects'

import linkIcon from '../../images/linkIcon.png'

class Projects extends Component {

    state = {
        isHoveredImage: false
    }

    render() {
        return (

            <div className={styles.projectsSection}>
                <span className={styles.sectionTitle}>
                    <Fade bottom>
                        My projects:
                            </Fade>
                </span>
                <ul>
                    {
                        params.projects.map((project, index) => (
                            <li
                                className={styles.projectContainer}
                                key={index}
                            >
                                <div className={styles.projectTitle}>
                                    <Fade bottom>
                                        {project.name}
                                    </Fade>
                                    <Fade bottom>
                                        <button className={styles.linkButton}>
                                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                                {
                                                    project.link
                                                        ? (<img src={linkIcon} className={styles.linkIcon} />)
                                                        : (null)
                                                }
                                            </a>
                                        </button>
                                    </Fade>
                                </div>
                                <div className={styles.projectDescription}>
                                    <Fade bottom>
                                        {project.smallDescription}
                                    </Fade>
                                </div>
                                <div className={this.state.isHoveredImage ? styles.imageContainerHovered : styles.imageContainer}>
                                    <Fade bottom big>
                                        <img
                                            onMouseOver={() => this.setState({ isHoveredImage: true })}
                                            onMouseOut={() => this.setState({ isHoveredImage: false })}
                                            src={project.photoA}
                                            className={styles.projectImage1}
                                        />
                                        <img
                                            onMouseOver={() => this.setState({ isHoveredImage: true })}
                                            onMouseOut={() => this.setState({ isHoveredImage: false })}
                                            src={project.photoB}
                                            className={styles.projectImage2}
                                        />
                                    </Fade>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}

export default Projects