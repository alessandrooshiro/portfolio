import React, { Component } from 'react'
import NavBar from '../../components/NavBar'
import ProjectPage from '../../components/ProjectPage'
// import Contact from '../../components/Contact'
import Form from '../../components/Form'

import image1 from '../../images/GSTXB_CUI-dashboard.png'
import image2 from '../../images/txb-collage.png'
import image4 from '../../images/GSTXB_CUI-localization.png'
import image6 from '../../images/GSTXB_CSP-DL-Notif..png'
import image3 from '../../images/GSTXB_CUI-account_summary.png'
import image5 from '../../images/GSTXB_pymt_errors.png'
import image7 from '../../images/GSTXB_CSP-dashboard.png'


const txb =
{
    title: "Goldman Sachs | Transaction Banking Platform (TxB)",
    description: "TxB was designed with the goal to disrupt the traditional banking system. It is a secure, nimble and easy to use platform for minor and major corporations to create, manage and analize their transactions.",
    participation: "In this project, I have lead many innitiatives from start to finish, on which I had the opportunity to work on all phases of a design process on multiple occasions. That includes the conduction and consolidation user research, the design of low and high fidelity wireframes and prototypes, the preparation of development handoff and design documentation and the presentation of multiple features and results to clients.",
    image1: image1,
    alt1: "Client Facing Dashboard",
    image2: image2,
    image3: image3,
    image4: image4,
    image5: image5,
    image6: image6,
    image7: image7,
}

class tfg360 extends Component {

    render() {
        return (
            <div>
                <NavBar />
                <ProjectPage project={txb} />
                <Form />
                {/* <Contact /> */}
            </div >
        )
    }
}

export default tfg360