import React from "react";
import "../main/Main.css";
import Box from "../Box/Box";
import Photo from "../Photo/Photo";
import Topbar from "../Topbar/Topbar";
function Main() {
  return (
    <>
      <Topbar />
      <br></br>
      <div className="social_wrapper">
      <div className="aws">
        <img
        src={"images/aws.png"}
        className="img-circled"
        width="210px"
        height="210px"
        // marginTop="-75px"
        alt=""
      />
        </div>
      
        <div>
          <h4>
            <a
              href="https://personalwebsite9.s3.amazonaws.com/updated_resume.pdf"
              download="Rishikesh_resume"
            >
              <button type="button" className="btn btn-success">
                Resume
              </button>
            </a>
          </h4>
        </div>
        <br></br>
        <div>
          <h4>
            <a href="https://github.com/riship251297">
              <button type="button" className="btn btn-dark">
                Github
              </button>
            </a>
          </h4>
        </div>
        <div>
        <h4>
          <a
            href="https://www.linkedin.com/in/rishi251297/"
            download="Rishikesh_resume"
          >
            <button type="button" className="btn btn-primary">
              LinkedIn
            </button>
          </a>
        </h4>
        </div>
        
      </div>
      <div className="main_wrapper">
        <div className="photo_wrapper">
          <Photo />
        </div>
        <div className="box_wrapper">
          <Box />
        </div>
      </div>
    </>
  );
}

export default Main;
