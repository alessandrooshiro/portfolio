import React, { Component } from 'react'
import './about.css'

class About extends Component {

    state = {
    }

    render() {

        return (
            <div className="about-container">
                <div className="about-left">
                    <div className="about-title">Who am I:</div>
                    <div className="about-paragraph">Hi! My name is <span className="highlight">Alessandro Oshiro</span>, a creative developer and UX/UI designer, based in São Paulo, Brazil.</div>
                </div>
                <div className="about-left">
                    <div className="about-title">Work experience:</div>
                    <div className="about-paragraph">I am currently working as a UX/UI Designer at <a className="external-link" href='https://rga.com' target="_blank" rel="noreferrer">R/GA</a>, designing a Transaction Banking platform for Goldman Sachs.<br/>Previously, I have worked at ACCT Global and R2U - Augmented Reality & CGI.<br /><br /></div>
                </div>
                <div className="about-left">
                    <div className="about-title">Education:</div>
                    <div className="about-paragraph">I have a Bachelor's Degree in Architecture and Urbanism from University of São Paulo and Universitat Politècnica de Catalunya.</div>
                </div>
            </div>
        )
    }
}

export default About