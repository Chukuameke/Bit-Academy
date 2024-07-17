import React from 'react'
import Logo from './img/bit-logo.png';
function footer() {
    return (
        <div>
            <div className="footer-container">
                <div className="footer-background">
                    <div className="footer-left">
                        <div>
                            <img src={Logo} alt="img" />
                        </div>
                        <div className="footer-list">
                            <h2>Let’s Get In Touch</h2>
                            <ul>
                                <a href="https://www.google.com"><li>Home</li></a>
                                <a href="https://www.google.com"><li>Programs/Course</li></a>
                                <a href="https://www.google.com"><li>Participant Info</li></a>
                            </ul>
                        </div>
                    </div>

                    <div className="footer-right">
                       <div>
                       <p>2021 Prepnepal All rights reserved.</p>
                       </div>
                        <div>
                            <p>Privacy Policy</p>
                            <p>Terms & Condition</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default footer
