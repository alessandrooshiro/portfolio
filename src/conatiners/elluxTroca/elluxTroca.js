import React, { Component } from 'react'
import NavBar from '../../components/NavBar'
import ProjectPage from '../../components/ProjectPage'
import Contact from '../../components/Contact'
import Form from '../../components/Form'

import image1 from '../../images/ellux.png'
import image2 from '../../images/ellux-9.png'
import image3 from '../../images/ellux-1.png'
import image4 from '../../images/ellux-2.png'
import image5 from '../../images/ellux-3.png'
import image6 from '../../images/ellux-4.png'
import image7 from '../../images/ellux-5.png'


const ellux =
{
    title: "Electrolux – Self-service product return",
    description: "Self-service system designed to help Electrolux's clients to request the return of a damaged or defective product on the company's e-commerce.",
    participation: "I was responsible for this product's research, ideation, wireframing and prototyping phases. Conducted user surveys and analyzed user data, created the user journey and product concepts and draw the wireframes and high fidelity prototypes.",
    image1: image1,
    image2: image2,
    image3: image3,
    image4: image4,
    image5: image5,
    image6: image6,
    image7: image7,
}

class elluxTroca extends Component {

    render() {
        return (
            <div>
                <NavBar />
                <ProjectPage project={ellux} />
                <Form />
                <Contact />
            </div >
        )
    }
}

export default elluxTroca