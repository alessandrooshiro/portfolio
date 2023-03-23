import React, { Component } from 'react'
import './projects.css'
import { Link } from "react-router-dom";
import { Parallax } from 'react-scroll-parallax'

import tfg1 from '../../images/PAE – Monitoramento de Aluno.png'
import tfg2 from '../../images/Plataforma mobile.png'
import tfg3 from '../../images/PAE – Registro Atividade Aula.png'
import ellux1 from '../../images/ellux.png'
import ellux2 from '../../images/ellux-2.png'
import ellux3 from '../../images/ellux-4.png'
import reviewer2u1 from '../../images/reviewer2u.png'
import reviewer2u2 from '../../images/reviewer2u2.png'
import reviewer2u3 from '../../images/reviewer2u3.png'
import txb1 from '../../images/GSTXB_CUI-dashboard.png'
import txb2 from '../../images/GSTXB_CUI-payment_summary.png'
import txb3 from '../../images/GSTXB_CUI-account_summary.png'

const projects = [
    {
        title: "Goldman Sachs | TxB: Transaction Banking Platform",
        description: "TxB was created with the intent to disrupt traditional corporate banking. The result is an innovative platform that is nimble, secure and easy to use, capable of facilitating treasurer work on major coporations.",
        participation: "In this project, I was responsible for leading multiple design sprints that touched every part of the product. On those sprints I was responsible for breaking down  client requirements, conducting user research and interviews, desiging low and high fidelity wireframes and prototypes and leading client and stakeholder meetings.",
        live: "Know more",
        link: "/txb",
        image1: txb1,
        alt1: "txb-main-screen",
        image2: txb2,
        alt2: "reviewer2u-confirmation-screen",
        image3: txb3,
        alt3: "reviewer2u-comment-creation",
        parallaxXA: ['0px', '0px'],
        parallaxXB: ['-200px', '200px']
    },
    {
        title: "R2U | Product Revision Console",
        description: "Desktop web application designed with the purpose of being an intuitive, easy to use and time-saving way for clients to review the 3D Models developed by the R2U modeling team.",
        participation: "In this project, I conducted a primary research fase with customers and 3D Artists to understand both ends of the whole process. Afterwords, I have designed multiple wireframes, making use of various grids, layouts and proportions. The images present the final design elected.",
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
        description: "Self-service system designed to help Electrolux's clients to request the return of a damaged or defective product on the company's e-commerce.",
        participation: "I was responsible for this product's research, ideation, wireframing and prototyping phases. Conducted user surveys and analyzed user data, created the user journey and product concepts and draw the wireframes and high fidelity prototypes.",
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
        title: "360 – School permanence service",
        description: "360 ia a service designed to fight evasion in Brazilian public schools. The service is based on a digital platform that centers the student's educational data throughout the years, helping teachers analyze their performance, pain points and shape a more personalized education for the students.",
        participation: "This project was conceived as a personal Service Design Graduation Thesis for the School of Architecture and Urbanism of the University of São Paulo. In it I conduct user research through interviews, designed personas, customer journeys, idealized the entire service and created all the wireframes and prototypes.",
        live: "Know more",
        link: "/360",
        image1: tfg1,
        alt1: "notrenderfarm-landingpage",
        image2: tfg2,
        alt2: "notrenderfarm-jobs",
        image3: tfg3,
        alt3: "notrenderfarm-projects",
        parallaxXA: ['0px', '0px'],
        parallaxXB: ['-200px', '200px']
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
                                            {project.participation}<br /><br />
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