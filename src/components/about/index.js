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
                    <div className="about-paragraph">I am currently working as a UX/UI Designer at <a className="external-link" href='https://acct.global/en/' target="_blank" >ACCT Global</a>, a Techonology Consultancy with offices in São Paulo, Barcelona and New York. Previously, I have worked as a UX/UI Design at <a className="external-link" href='https://r2u.io' target="_blank" >R2U.io</a> an augmented reality and CGI startup.<br /><br /></div>
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