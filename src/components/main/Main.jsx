import React from "react";
import '../main/Main.css';
import Box from "../Box/Box";
import Photo from "../Photo/Photo";
import Topbar from "../Topbar/Topbar";
function Main() {
    return(
        <>
        <Topbar/>
        <div className="main_wrapper">
            <div className="photo_wrapper">
                <Photo/>
            </div>
            <div className="box_wrapper">
                <Box/>
            </div>
            </div>
        </>
    );
}

export default Main;
