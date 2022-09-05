import React from "react";
import {Link} from 'react-router-dom';

import '../Navbar/Navbar.css';
function Navbar(){
    return (
        <React.Fragment>
            <div className="upperboard">
                <div className="names"><a href="/">RISHIKESH</a></div>
                <nav>
                    <Link to ="/projects" >PROJECTS</Link>
                    <Link to ="/gallery" >GALLERY</Link>
                    <Link to ="/research" >RESEARCH</Link>
                    <Link to ="/about" >ABOUT</Link>
                    <Link to ="/contact">CONTACT</Link>
                </nav>
            </div>
        </React.Fragment>
    );
}

export default Navbar;