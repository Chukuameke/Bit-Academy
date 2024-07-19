import React, { Component } from 'react';
import Logo from './img/bit-logo.png';

class Header extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState(prevState => ({
      clicked: !prevState.clicked
    }));
  };

  render() {
    return (
      <>
        <nav>
          <div className="navBar">
            <div className="navbar-logo">
              <img src={Logo} alt="Logo" />
            </div>
            <div className={this.state.clicked ? "#navbar active" : "#navbar"} id='navbar'>
              <div className="nav-list">
                <ul>
                  <a href="index.html">
                    <li>Home</li>
                  </a>
                  <a href="home" id='home'>
                    <li>Program</li>
                  </a>
                  <a href="index.html">
                    <li>Contact</li>
                  </a>
                </ul>
              </div>
              <div className="navbar-btn">
               <a href="https://t.me/+YPLaVF9SkSU5MThk"> <button>Get Started</button></a>
              </div>
            </div>
          </div>
          <div id='mobile' onClick={this.handleClick}>
            <i id='bar' className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </nav>
      </>
    );
  }
}

export default Header;

