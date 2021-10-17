import React, { Component } from 'react'
import './projectpage.css'

import { Link } from 'react-router-dom'

class ProjectPage extends Component {

    componentDidUpdate(prevProps) {
        window.scrollTo(0, 0)
    }

    state = {
        isClickedA: false,
        isClickedB: false
    }

    render() {

        return (
            <>
                <div className="desktop">
                    <div className="projects-container">
                        <div style={{ width: '80vw', position: 'relative', left: '50%', transform: 'translate(-50%)' }}>
                            <div style={{ width: '100%', position: 'relative', left: '0', display: 'flex', flexDirection: "row", justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                <div className="projects-title" >
                                    <span style={{ textAlign: 'left', fontSize: '24px' }}>{this.props.project.title}</span><br />
                                    <div style={{ width: '100%', position: 'relative', left: '0', margin: '45px 0 0 0', display: 'flex', flexDirection: "column", justifyContent: 'space-between' }}>
                                        <div style={{ marginTop: '0px', width: '50%' }}>
                                            <span style={{ textAlign: 'left', fontSize: '18px', color: 'black', fontStyle: 'normal' }}>• Project description:</span>
                                            <div style={{ textAlign: 'left', fontSize: '16px', color: '#363636', marginTop: '5px', fontStyle: 'normal' }}>
                                                <span>{this.props.project.description}</span>
                                            </div>
                                        </div>
                                        <div style={{ marginTop: '20px', width: '50%' }}>
                                            <span style={{ textAlign: 'left', fontSize: '18px', color: 'black', fontStyle: 'normal' }}>• Responsabilites:</span>
                                            <div style={{ textAlign: 'left', fontSize: '16px', color: '#363636', marginTop: '5px', fontStyle: 'normal' }}>
                                                <span>{this.props.project.participation}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Link onClick={() => window.scrollTo(0, 0)} className="projects-link" to="/">Back</Link>
                            </div>
                            <div style={{ width: '100%', position: 'relative', left: '0', margin: '45px 0 0 0', display: 'flex', flexDirection: "column", justifyContent: 'space-between' }}>
                                <span style={{ width: '100%', margin: '0px 0 10px 0', fontSize: '16px', textAlign: 'left', color: '#000', fontStyle: 'normal' }}>{this.props.project.alt1}</span>
                                <img alt={this.props.project.alt1} src={this.props.project.image1} style={{ width: '100%' }} />

                            </div>
                            <div style={{ width: '100%', position: 'relative', left: '0', margin: '60px 0 0 0', display: 'flex', flexDirection: "column", justifyContent: 'space-between' }}>
                                <span style={{ width: '100%', margin: '0px 0 10px 0', fontSize: '16px', textAlign: 'left', color: '#000', fontStyle: 'normal' }}>{this.props.project.alt2}</span>
                                <img alt={this.props.project.alt2} src={this.props.project.image2} style={{ width: '100%' }} />

                            </div>
                            <div style={{ width: '100%', position: 'relative', left: '0', margin: '60px 0 0 0', display: 'flex', flexDirection: "row", justifyContent: 'space-between' }}>
                                <div style={{ width: 'calc(50% - 15px)', position: 'relative', left: '0', display: 'flex', flexDirection: "column", justifyContent: 'space-between' }}>
                                    <span style={{ width: '100%', margin: '0px 0 10px 0', fontSize: '16px', textAlign: 'left', color: '#000', fontStyle: 'normal' }}>{this.props.project.alt3}</span>
                                    <img alt={this.props.project.alt3} src={this.props.project.image3} style={{ width: '100%' }} />

                                </div>
                                <div style={{ width: 'calc(50% - 15px)', position: 'relative', left: '0', display: 'flex', flexDirection: "column", justifyContent: 'space-between' }}>
                                    <span style={{ width: '100%', margin: '0px 0 10px 0', fontSize: '16px', textAlign: 'left', color: '#000', fontStyle: 'normal' }}>{this.props.project.alt4}</span>
                                    <img alt={this.props.project.alt4} src={this.props.project.image4} style={{ width: '100%' }} />

                                </div>
                            </div>
                            <div style={{ width: '100%', position: 'relative', left: '0', margin: '60px 0 0 0', display: 'flex', flexDirection: "row", justifyContent: 'space-between' }}>
                                <div style={{ width: 'calc(50% - 15px)', position: 'relative', left: '0', display: 'flex', flexDirection: "column", justifyContent: 'space-between' }}>
                                    <span style={{ width: '100%', margin: '0px 0 10px 0', fontSize: '16px', textAlign: 'left', color: '#000', fontStyle: 'normal' }}>{this.props.project.alt5}</span>
                                    <img alt={this.props.project.alt5} src={this.props.project.image5} style={{ width: '100%' }} />

                                </div>
                                <div style={{ width: 'calc(50% - 15px)', position: 'relative', left: '0', display: 'flex', flexDirection: "column", justifyContent: 'space-between' }}>
                                    <span style={{ width: '100%', margin: '0px 0 10px 0', fontSize: '16px', textAlign: 'left', color: '#000', fontStyle: 'normal' }}>{this.props.project.alt6}</span>
                                    <img alt={this.props.project.alt6} src={this.props.project.image6} style={{ width: '100%' }} />

                                </div>
                            </div>
                            <div style={{ width: '100%', position: 'relative', left: '0', margin: '60px 0 0 0', display: 'flex', flexDirection: "column", justifyContent: 'space-between' }}>
                                <span style={{ width: '100%', margin: '0px 0 10px 0', fontSize: '16px', textAlign: 'left', color: '#000', fontStyle: 'normal' }}>{this.props.project.alt7}</span>
                                <img alt={this.props.project.alt7} src={this.props.project.image7} style={{ width: '100%' }} />

                            </div>
                        </div>
                    </div>
                </div>

                {/* MOBILE VERSION BELLOW
                MOBILE VERSION BELLOW
                MOBILE VERSION BELLOW
                MOBILE VERSION BELLOW
                MOBILE VERSION BELLOW */}

                <div className="mobile">
                    <div className="projects-container">
                        <div className="projects-container">
                            <div style={{ width: '80vw', position: 'relative', left: '50%', transform: 'translate(-50%)' }}>
                                <div style={{ marginTop: '30px', width: '100%', position: 'relative', left: '0', display: 'flex', flexDirection: "column" }}>
                                    <br />
                                    <Link onClick={() => window.scrollTo(0, 0)} className="projects-link" to="/">Back</Link>
                                </div>
                                <div style={{ width: '100%', position: 'relative', left: '0', margin: '30px 0 0 0', display: 'flex', flexDirection: "column", justifyContent: 'space-between' }}>
                                    {this.props.project.title}
                                    <br />
                                    <br />
                                    {this.props.project.description}
                                    <br />
                                    <br />
                                    {this.props.project.participation}
                                </div>
                                <div style={{ width: '100%', position: 'relative', left: '0', margin: '30px 0 0 0', display: 'flex', flexDirection: "column", justifyContent: 'space-between' }}>
                                    <img alt={this.props.project.alt1} src={this.props.project.image1} style={{ width: '100%' }} />
                                </div>
                                <div style={{ width: '100%', position: 'relative', left: '0', margin: '15px 0 0 0', display: 'flex', flexDirection: "column", justifyContent: 'space-between' }}>
                                    <img alt={this.props.project.alt2} src={this.props.project.image2} style={{ width: '100%' }} />
                                </div>
                                <div style={{ width: '100%', position: 'relative', left: '0', margin: '15px 0 0 0', display: 'flex', flexDirection: "column", justifyContent: 'space-between' }}>
                                    <img alt={this.props.project.alt3} src={this.props.project.image3} style={{ width: '100%' }} />
                                </div>
                                <div style={{ width: '100%', position: 'relative', left: '0', margin: '15px 0 0 0', display: 'flex', flexDirection: "column", justifyContent: 'space-between' }}>
                                    <img alt={this.props.project.alt4} src={this.props.project.image4} style={{ width: '100%' }} />
                                </div>
                                <div style={{ width: '100%', position: 'relative', left: '0', margin: '15px 0 0 0', display: 'flex', flexDirection: "column", justifyContent: 'space-between' }}>
                                    <img alt={this.props.project.alt5} src={this.props.project.image5} style={{ width: '100%' }} />
                                </div>
                                <div style={{ width: '100%', position: 'relative', left: '0', margin: '15px 0 0 0', display: 'flex', flexDirection: "column", justifyContent: 'space-between' }}>
                                    <img alt={this.props.project.alt6} src={this.props.project.image6} style={{ width: '100%' }} />
                                </div>
                                <div style={{ width: '100%', position: 'relative', left: '0', margin: '15px 0 0 0', display: 'flex', flexDirection: "column", justifyContent: 'space-between' }}>
                                    <img alt={this.props.project.alt7} src={this.props.project.image7} style={{ width: '100%' }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default ProjectPage