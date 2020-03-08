import React, { Component, useDebugValue } from 'react'
import styles from './projects.module.css'
import Fade from 'react-reveal/Fade'

import linkIcon from '../../images/linkIcon.png'

class Item extends Component {

    render() {

        return (
            <li
                className={this.props.isProjectOpen == true ? styles.projectContainerExtended : styles.projectContainer}
            >
                <div
                    onMouseEnter={this.props.onHover}
                    onMouseLeave={this.props.onHover}
                    onClick={this.props.openProject}
                >

                    {/* <Fade bottom big>
                        <div className={styles.detailsContainer}> */}
                            <div
                                className={this.props.isProjectOpen == true ? styles.projectTitleExtended : styles.projectTitle}
                            >
                                <Fade bottom>
                                    {this.props.project.name}
                                </Fade>
                                <Fade bottom>
                                    <button className={styles.linkButton}>
                                        <a href={this.props.project.link} target="_blank" rel="noopener noreferrer">
                                            {
                                                this.props.project.link
                                                    ? (<img src={linkIcon} className={styles.linkIcon} alt='link icon' />)
                                                    : (null)
                                            }
                                        </a>
                                    </button>
                                </Fade>
                            </div>
                            <div
                                className={this.props.isProjectOpen == true ? styles.projectDescriptionExtended : styles.projectDescription}
                            >
                                <Fade bottom>
                                    {this.props.project.smallDescription}
                                </Fade>
                            </div>
                        {/* </div>
                    </Fade> */}
                    <div
                        className={this.props.isProjectOpen == true ? styles.imageContainerExtended : styles.imageContainer} >
                        <Fade bottom big>
                            <img
                                src={this.props.project.photoA}
                                className={this.props.isProjectOpen == true ? styles.projectImage1Extended : styles.projectImage1}
                                alt='project A'
                            />
                            <img
                                src={this.props.project.photoB}
                                className={this.props.isProjectOpen == true ? styles.projectImage2Extended : styles.projectImage2}
                                alt='project B'
                            />
                            {
                                this.props.isProjectOpen == true
                                    ? (
                                        <div>
                                            <img
                                                src={this.props.project.photoB}
                                                className={styles.projectImage3}
                                                alt='project B'
                                            />
                                            <img
                                                src={this.props.project.photoA}
                                                className={styles.projectImage4}
                                                alt='project A'
                                            />
                                        </div>
                                    ) : (
                                        <div />
                                    )
                            }
                        </Fade>
                    </div>
                </div>

            </li>
        )
    }
}

export default Item