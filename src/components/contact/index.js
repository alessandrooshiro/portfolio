import React, { Component } from 'react'
import './contact.css'

class Contact extends Component {

    render() {

        return (
            <div className="contact-container">
                <button className="logo" onClick={() => window.scrollTo(0, 0)}>
                    Alessandro<br />
                – Oshiro
                </button>
                <div className="contact-items">
                    <div className="contact-info">
                        alessandro.oshiro@usp.br
                    </div>
                    <div className="contact-info">
                        +55 11 97248-2324
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact