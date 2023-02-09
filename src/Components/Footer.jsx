import React from 'react'
import '../App.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="content">
                    <ul>
                        <li>Prompt Generator</li>
                        <li>Dweep Daily</li>
                        <li>All Contributers</li>
                        <li>Your Data on Dweep.io</li>
                        <li>Contribute to Dweep</li>
                    </ul>
                    <ul>
                        <li>Dweep.io</li>
                        <li>Made with love in India</li>
                        <li>
                            <span><i className="fa-brands fa-instagram"></i></span>
                            <span><i className="fa-brands fa-linkedin"></i></span>
                        </li>
                        <li><a href="mailto:hello@dweep.io">hello@dweep.io</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer