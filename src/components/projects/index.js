import React, { Component } from 'react'
import Fade from 'react-reveal/Fade';
import './projects.css'
import { Parallax } from 'react-scroll-parallax';

import nrf1 from '../../images/renderfarm1@2x.png'
import nrf2 from '../../images/renderfarm2@2x.png'
import nrf3 from '../../images/renderfarm3@2x.png'
import real2u1 from '../../images/real2u1@2x.png'
import real2u2 from '../../images/real2u2.png'
import real2u3 from '../../images/real2u3.png'
import modelrepo1 from '../../images/modelrepo1@2x.png'
import modelrepo2 from '../../images/modelrepo2@2x.png'
import modelrepo3 from '../../images/modelrepo3@2x.png'

const projects = [
    {
        title: "Real2U – Augmented Reality and CGI",
        description: "Real2U is a Augmented Reality and CGI company. The website consists of a landing page where the companie's solutions, processes and cases are detailed to capture the attention of the user, and also separate pages for the solutions especifications.",
        participation: "In this project I have led the content creation, layout design and development. I was responsible for wirefrming, prototyping and developing the entire website. I used React.js for this project, intenting on using existing components to facilitate implementation.",
        live: "The website is live here.",
        link: "https://www.real2u.com.br/",
        image1: real2u1,
        alt1: "real2u-landingpage",
        image2: real2u2,
        alt2: "real2u-landingpage2",
        image3: real2u3,
        alt3: "real2u-product-page",
        parallaxXA: ['0px', '0px'],
        parallaxXB: ['200px', '-200px']
    },
    {
        title: "(NOT) Render Farm",
        description: "(NOT) Render Farm is a web plataform for cloud rendering of 3D scenes. The website consists of a one-pager, explaining the concept of the company and it's product and also a Console for the creation and managment of computer based images.",
        participation: "In this project I participated both in the concept and development stages. Participated in the product creation, wire-framing, user testing and final layout adjustments.",
        live: "The website is live here.",
        link: "https://notrenderfarm.com/",
        image1: nrf1,
        alt1: "notrenderfarm-landingpage",
        image2: nrf2,
        alt2: "notrenderfarm-jobs",
        image3: nrf3,
        alt3: "notrenderfarm-projects",
        parallaxXA: ['0px', '0px'],
        parallaxXB: ['-200px', '200px']
    },
    {
        title: "ModelRepo – Asset Manager",
        description: "This One Pager is a concept for a innovative Asset Manager. The idea is to use example wireframes and simple illustrations to communicate to the user the features and benefits of the application",
        participation: "I have participated in the product conceiving and led the website layout process and execution, having coded it in HTML5, CSS3 and JS all by myself.",
        live: "A mockup version of the website is avaliable here.",
        link: "https://alessandro-oshiro.github.io/one-pager-gdc/",
        image1: modelrepo1,
        alt1: "notrenderfarm-landingpage",
        image2: modelrepo2,
        alt2: "notrenderfarm-jobs",
        image3: modelrepo3,
        alt3: "notrenderfarm-projects",
        parallaxXA: ['0px', '0px'],
        parallaxXB: ['200px', '-200px']
    },
]

class Projects extends Component {

    state = {
        isClickedA: false,
        isClickedB: false
    }

    render() {

        return (
            <>
                <div className="desktop">
                    <div className="projects-container">
                        {projects.map((project) => (
                            <>
                                <Parallax x={project.parallaxXA}
                                    y={['0px', '80px']}
                                    tagOuter="figure">
                                    <div className="projects-image1">
                                        <div className="projects-title">
                                            {project.title}
                                        </div><br />
                                        <img
                                            src={project.image1}
                                            alt="render-farm1"
                                            style={{ width: '100%', height: '100%' }} />
                                    </div>
                                </Parallax>
                                <Parallax x={project.parallaxXB}
                                    y={['40px', '100px']}
                                    tagOuter="figure">
                                    <div className="projects-extra-info">
                                        <div className="projects-image2">
                                            <img
                                                src={project.image2}
                                                alt="render-farm1"
                                                style={{ width: '100%', height: '100%' }} />
                                        </div>
                                        <div className="projects-paragraph">
                                            {project.description}<br /><br />
                                            {project.participation}<br />
                                            <a className="projects-link" href={project.link} target="_blank">{project.live}</a>
                                        </div>
                                        <div className="projects-image2">
                                            <img
                                                src={project.image3}
                                                alt="render-farm1"
                                                style={{ width: '100%', height: '100%' }} />
                                        </div >
                                    </div>
                                </Parallax>

                            </>
                        ))}
                    </div>

                </div>
                <div className="mobile">
                    <div className="projects-container">
                        {projects.map((project) => (
                            <>
                                <div className="projects-title">
                                    {project.title}
                                </div><br />
                                <div className="projects-image1">
                                    <img
                                        src={project.image1}
                                        alt="render-farm1"
                                        style={{ width: '100%', height: '100%' }} />
                                </div>
                                <div className="projects-extra-info">
                                    <div className="projects-image2">
                                        <img
                                            src={project.image2}
                                            alt="render-farm1"
                                            style={{ width: '100%', height: '100%' }} />
                                    </div>
                                    {/* <a className="projects-link" href={project.link} target="_blank">{project.live}</a> */}
                                    <div className="projects-image2">
                                        <img
                                            src={project.image3}
                                            alt="render-farm1"
                                            style={{ width: '100%', height: '100%' }} />
                                    </div >
                                </div>
                            </>
                        ))}
                    </div>
                </div>
            </>
        )
    }
}

export default Projects