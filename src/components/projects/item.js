import React, { Component } from 'react'
import styles from './projects.module.css'
import Fade from 'react-reveal/Fade'

import linkIcon from '../../images/linkIcon.png'

class Item extends Component {

    componentWillMount() {
        document.addEventListener('mousedown', this.handleClick, false)
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClick, false)
    }

    handleClick = (e) => {
        if (this.node.contains(e.target)) {
            return
        }
        this.setState({ isProjectOpen: false })
    }

    state = {
        isProjectOpen: false
    }

    render() {

        return (
            <li
                className={this.state.isProjectOpen === true ? styles.projectContainerExtended : styles.projectContainer}
                ref={node => this.node = node}
            >
                <div
                    className={this.state.isProjectOpen === true ? styles.projectTitleExtended : styles.projectTitle}
                >
                    <Fade bottom>
                        <a href={this.props.project.link} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}
                            onMouseEnter={this.props.onHover}
                            onMouseLeave={this.props.onHover}>
                            {this.props.project.name}
                        </a>
                    </Fade>
                    <Fade bottom>
                        <button className={styles.linkButton}>
                            <a href={this.props.project.link} target="_blank" rel="noopener noreferrer"
                                onMouseEnter={this.props.onHover}
                                onMouseLeave={this.props.onHover}>
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
                    className={this.state.isProjectOpen === true ? styles.projectDescriptionExtended : styles.projectDescription}
                >
                    <Fade bottom>
                        {this.props.project.smallDescription}
                    </Fade>
                </div>
                <div
                    className={this.state.isProjectOpen === true ? styles.imageContainerExtended : styles.imageContainer} >
                    <Fade bottom>
                        <img
                            src={this.props.project.photoA}
                            className={this.state.isProjectOpen === true ? styles.projectImage1Extended : styles.projectImage1}
                            alt='project A'
                            onClick={() => this.setState({ isProjectOpen: !this.state.isProjectOpen })}
                            onMouseEnter={this.props.onHover}
                            onMouseLeave={this.props.onHover}
                        />
                        <img
                            src={this.props.project.photoB}
                            className={this.state.isProjectOpen === true ? styles.projectImage2Extended : styles.projectImage2}
                            alt='project B'
                            onClick={() => this.setState({ isProjectOpen: !this.state.isProjectOpen })}
                            onMouseEnter={this.props.onHover}
                            onMouseLeave={this.props.onHover}
                        />
                        {
                            this.state.isProjectOpen === true
                                ? (
                                    <div>
                                        <Fade bottom>
                                            <img
                                                src={this.props.project.photoC}
                                                className={styles.projectImage3}
                                                alt='project C'
                                                onClick={() => this.setState({ isProjectOpen: !this.state.isProjectOpen })}
                                                onMouseEnter={this.props.onHover}
                                                onMouseLeave={this.props.onHover}
                                            />
                                            <img
                                                src={this.props.project.photoD}
                                                className={styles.projectImage4}
                                                alt='project D'
                                                onClick={() => this.setState({ isProjectOpen: !this.state.isProjectOpen })}
                                                onMouseEnter={this.props.onHover}
                                                onMouseLeave={this.props.onHover}
                                            />

                                        </Fade>
                                    </div>
                                ) : (
                                    <div />
                                )
                        }
                    </Fade>
                </div>
            </li>
        )
    }
}

export default Item