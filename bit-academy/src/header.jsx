import React from 'react'
import Logo from './img/bit-logo.png'
function Header() {
    return (
        <>
            <nav>
                <div className="navBar">
                    <div className="navbar-logo">
                        <img src={Logo} alt="" />
                    </div>
                    <div className="nav-bar-list" id='navbar'>
                     <div className="nav-list">
                     <ul>
                            <a href="index.html">
                                <li>Home</li>
                            </a>

                            <a href="index.html">
                                <li>Program</li>
                            </a>

                            <a href="index.html">
                                <li>Contact</li>
                            </a>
                        </ul>
                     </div>
                     <div className="navbar-btn">
                        <button>Get Started</button>
                     </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header
