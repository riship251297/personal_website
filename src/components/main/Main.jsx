import React from "react";
import '../main/Main.css';
import Box from "../Box/Box";
import Navbar from "../Navbar/Navbar";
import Photo from "../Photo/Photo";
import Topbar from "../Topbar/Topbar";
function Main() {
    return(
        <>
        {/* <Navbar/> */}
        <Topbar/>
        <Photo/>
        <Box/>
        <div className='footer'>
      
      </div>
        </>

    );
}

export default Main;
