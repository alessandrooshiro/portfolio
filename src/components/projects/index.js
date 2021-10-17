import React, { Component } from 'react'
import './projects.css'
import { Link } from "react-router-dom";
import { Parallax } from 'react-scroll-parallax'

import nrf1 from '../../images/renderfarm1@2x.png'
import nrf2 from '../../images/renderfarm2@2x.png'
import nrf3 from '../../images/renderfarm3@2x.png'
import ellux1 from '../../images/ellux.png'
import ellux2 from '../../images/ellux-2.png'
import ellux3 from '../../images/ellux-4.png'
import reviewer2u1 from '../../images/reviewer2u.png'
import reviewer2u2 from '../../images/reviewer2u2.png'
import reviewer2u3 from '../../images/reviewer2u3.png'

const projects = [
    {
        title: "R2U | Product Revision Console",
        description: "Desktop web application designed with the purpose of being a intuitive, easy to use and time-savig way for clients to review the 3D Models devloped by the R2U modeling team.",
        participation: "In this project, I conducted a primary research fase with customers and 3D Artists to understand both ends of the whole process. Afterwords, I have designed multiple wireframes, making use of various grids, layouts and propotions. The images present the final design elected.",
        live: "Know more",
        link: "/reviewer2u",
        image1: reviewer2u1,
        alt1: "reviewer2u-main-screen",
        image2: reviewer2u2,
        alt2: "reviewer2u-confirmation-screen",
        image3: reviewer2u3,
        alt3: "reviewer2u-comment-creation",
        parallaxXA: ['0px', '0px'],
        parallaxXB: ['200px', '-200px']
    },
    {
        title: "Electrolux – Self-service product return",
        description: "Self-service system designed to help Electrolux's clients to solicitate the return of a damaged or defective product on the company's e-commerce.",
        participation: "I was responsible for this product's research, ideation, wireframing and prototyping phases. Conducted user surveys and analysed user data, created the user journey and product concepts and draw the wireframes and high fidelity prototypes.",
        live: "Know more",
        link: "/ellux-return",
        image1: ellux1,
        alt1: "ellux-troca-selecionar-pedido",
        image2: ellux2,
        alt2: "ellux-troca-selecionar-problema",
        image3: ellux3,
        alt3: "ellux-troca-selecionar-produto",
        parallaxXA: ['0px', '0px'],
        parallaxXB: ['-200px', '200px']
    },
    {
        title: "(NOT) Render Farm",
        description: "(NOT) Render Farm is a web plataform for cloud rendering of 3D scenes, created by R2U. The website consists of a one-pager, explaining the concept of the company and it's product and also a Console for the creation and managment of computer based images.",
        participation: "In this project I participated both in the concept and development stages. Participated in the product creation, wireframing, user testing and final layout adjustments.",
        image1: nrf1,
        alt1: "notrenderfarm-landingpage",
        image2: nrf2,
        alt2: "notrenderfarm-jobs",
        image3: nrf3,
        alt3: "notrenderfarm-projects",
        parallaxXA: ['0px', '0px'],
        parallaxXB: ['200px', '-200px']
    }
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
                                            <Link onClick={() => window.scrollTo(0, 0)} className="projects-link" to={project.link}>{project.live}</Link>
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
                                </div>
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
                                    <div className="projects-image2">
                                        <img
                                            src={project.image3}
                                            alt="render-farm1"
                                            style={{ width: '100%', height: '100%' }} />
                                    </div >
                                </div>
                                <Link onClick={() => window.scrollTo(0, 0)} className="projects-link" to={project.link}>{project.live}</Link>
                            </>
                        ))}
                    </div>
                </div>
            </>
        )
    }
}

export default Projects