import React from 'react';
import "./Hero.css";
import {Link} from "react-router-dom";

const Header = () => {
    return (
            <div className="header">
                <h1>Movie Freak</h1>
                <div className="header-menu">
                    <Link to='/'><button className="menu-button">Home</button></Link>
                    <Link to='/Trailers'><button className="menu-button">Trailers</button></Link>
                </div>
            </div>
    )
}

export default Header;