import React, { Component } from 'react'
import styles from './projects.module.css'
import Fade from 'react-reveal/Fade'
import params from './projects'
import Item from './item'

class Projects extends Component {
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
                            <Item
                                project={project}
                                onHover={this.props.onHover}
                                openProject={this.props.openProject}
                                isProjectOpen={this.props.isProjectOpen}
                            />
                        ))
                    }
                </ul>
            </div>
        )
    }
}

export default Projects