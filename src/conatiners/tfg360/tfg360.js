import React, { Component } from 'react'
import NavBar from '../../components/NavBar'
import ProjectPage from '../../components/ProjectPage'
import Contact from '../../components/Contact'
import Form from '../../components/Form'

import image1 from '../../images/PAE – Monitoramento de Aluno.png'
import image2 from '../../images/blueprint-ilustrado-final.jpg'
import image3 from '../../images/personas.png'
import image4 from '../../images/personas2.png'
import image5 from '../../images/Plataforma mobile.png'
import image6 from '../../images/plataforma mobile 3.png'
import image7 from '../../images/PAE – Registro Atividade Aula.png'

const tfg =
{
    title: "360 – School permanence service",
    description: "360 ia a service designed to fight evasion in Brazilian public schools. The service is based on a digital platform that centers the student's educational data throughout the years, helping teachers analyze their performance, pain points and shape a more personalized education for the students.",
    participation: "This project was conceived as a personal Service Design Graduation Thesis for the School of Architecture and Urbanism of the University of São Paulo. In it I conduct user research through interviews, designed personas, customer journeys, idealized the entire service and created all the wireframes and prototypes.",
    image1: image1,
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
                <ProjectPage project={tfg} />
                <Form />
                <Contact />
            </div >
        )
    }
}

export default tfg360