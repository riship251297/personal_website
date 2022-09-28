import React from "react";
import {Link} from 'react-router-dom';
import Media from 'react-media';

import '../Navbar/Navbar.css';
function Navbar(){
    return (
        <React.Fragment>
            {/* <Media query="(min-width:400px,max-width:1670px)"> */}


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
            {/* </Media> */}
        </React.Fragment>
    );
}

export default Navbar;