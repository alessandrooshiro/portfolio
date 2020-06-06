import React, { Component } from 'react'
import './navbar.css'

const items = [
    'Contact'
]

class NavBar extends Component {

    state = {
    }

    render() {

        return (
            <div className="navbar-container">
                <button className="logo" onClick={() => window.scrollTo(0, 0)}>
                    Alessandro<br />
                    – Oshiro
                    </button>
                <div className="navbar-items">
                    {items.map((item) => (
                        <button className="navbar-button" onClick={() => window.scrollTo(0, 10000)}>
                            {item}
                        </button>
                    ))}
                </div>
            </div>
        )
    }
}

export default NavBar