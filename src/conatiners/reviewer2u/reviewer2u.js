import React, { Component } from 'react'
// import styles from './home.module.css'
import NavBar from '../../components/NavBar'
import ProjectPage from '../../components/ProjectPage'
import Contact from '../../components/Contact'
import Form from '../../components/Form'

import image1 from '../../images/reviewer2u.png'
import image2 from '../../images/reviewer2u7.png'
import image3 from '../../images/reviewer2u2.png'
import image4 from '../../images/reviewer2u3.png'
import image5 from '../../images/reviewer2u5.png'
import image6 from '../../images/reviewer2u6.png'
import image7 from '../../images/reviewer2u4.png'


const reviewer2u =
{
    title: "R2U | Product Revision Console",
    description: "Desktop web application designed with the purpose of being a intuitive, easy to use and time-saving way for clients to review the 3D Models developed by the R2U modeling team.",
    participation: "In this project, I conducted a primary research fase with customers and 3D Artists to understand both ends of the whole process. Afterwords, I have designed multiple wireframes, making use of various grids, layouts and proportions. The images present the final design elected.",
    image1: image1,
    image2: image2,
    image3: image3,
    image4: image4,
    image5: image5,
    image6: image6,
    image7: image7,
}

class Reviewer2u extends Component {

    render() {
        return (
            <div>
                <NavBar />
                <ProjectPage project={reviewer2u} />
                <Form />
                <Contact />
            </div >
        )
    }
}

export default Reviewer2u