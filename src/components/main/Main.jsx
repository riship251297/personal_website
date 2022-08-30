import React from "react";
import '../main/Main.css';
import Box from "../Box/Box";
import Navbar from "../Navbar/Navbar";
import Photo from "../Photo/Photo";

function Main() {
    return(
        <>
        <div className="main">
        <Navbar/>
        <Photo/>
        <Box/>
        
        </div>
        </>

    );
}

export default Main;
