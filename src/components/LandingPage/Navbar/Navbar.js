import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import Footer from "../Footer";
import './Navbar.css';
import { Link } from "react-router-dom";
import logo from "../Images/wce_logo.png";
import Maincontent from "../Maincontent";   


class Navbar extends Component{
    state = { clicked : false}

    handleClick = () => {
        this.setState({clicked : !this.state.clicked})

    }

    render() {
        return(
            <><nav className="NavbarItems">
                <div className="logo">
                    <a className="navbar-logo" href="http://www.walchandsangli.ac.in/">
                        <img src={logo} alt="logo" />
                    </a>
                </div>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link to={item.link} className={item.cName}>{item.title}</Link>
                                {/* <a className={item.cName} href={item.link}>
                                    {item.title}
                                </a> */}
                            </li>
                        );
                    })}
                </ul>
            </nav>
            <Maincontent/>
            <Footer />
            </>
        )
    }
}

export default Navbar