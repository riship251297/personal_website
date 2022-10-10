import React from "react";
import Box from "../Box/Box";
import Navbar from "../Navbar/Navbar";
import Photo from "../Photo/Photo";
import "../About/About.css";
// import { GoDesktopDownload } from "react-icons/go";
import axios from "axios";
import {
  FaGithub,
  FaLinkedin,
  FaJs,
  FaReact,
  FaTelegramPlane,
  FaTwitter,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaNode,
  MdOutgoingMail,
} from "react-icons/fa";
import { useState } from "react";
import { Container, Button, Form } from "react-bootstrap";
import Topbar from "../Topbar/Topbar";

function About() {
  const data = () => {
    axios.get("http://localhost:3001/dat").then((response) => {
      console.log(response);
    });
  };

  const [name, SetName] = useState("");
  const [email, SetEmail] = useState("");

  async function handle(event) {
    event.preventDefault();
    const form_d = new FormData();
    form_d.append("username", name);
    form_d.append("email", email);

    const response = await axios
      .put("http://localhost:3001/send_email", form_d, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    console.log(response);
  }

  return (
    <>
      <Topbar />
      <div className="main_wrapper">
        <div className="photo_wrapper">
          <Photo />
        </div>
        <div className="box_wrapper" style={{marginTop:"10%"}}>
          <Box />
        </div>
        <br></br>
        <div className="social_wrapper">
          <div>
            <h4>
              {" "}
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
              <a
                href="https://github.com/riship251297"
                download="Rishikesh_resume"
              >
                <button type="button" className="btn btn-dark">
                  Github
                </button>
              </a>
            </h4>
          </div>

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
        <br></br>
        <div className="experience_wrapper">
          <center>
            <h2>WORK EXPERIENCE</h2>
          </center>
          <br></br>
          <ul>
            <li>
              <b>
                Graduate Research Assistant | Bioinformatics Lab | Clemson
                University, US | Funded by National Institute of Health
                Sciences.
              </b>
            </li>
            <div className="left_andar">
              <ol>
                <li>
                  <p>
                    Implemented a Quality Evaluation model that assures the
                    removal of facial features from 3D Brain MRI scans by
                    mapping them into four different 2D projections. It removes
                    all the facial feaures that can be used to identify the
                    subject. This model is very handy for analysis since
                    researchers would always prefer images that are
                    deidentified.
                  </p>
                </li>
                <li>
                  <p>
                    Implemented Brain Cut model to ensure that all the brain
                    tissues in MRI image are intact and not removed as a part of
                    the deidentification process.This model can help researchers
                    evaluate the image since deskulling can remove important
                    voxels from the brain image.
                  </p>
                </li>
                <li>
                  <p>
                    Training data is generated by processing collected
                    T1-weighted images using the BET and BSE tool and surveyed
                    the data in our research group to label it for
                    classification.Pre-processing steps were done to make sure
                    the scaling and sizing of each image is same.
                  </p>
                </li>
                <li>
                  <p>
                    Predicted images that had presence of face tissue or brain
                    tissue with 92 percent of accuracy, providing researcher not
                    only an investigative insight into the MRI image but also
                    saving a lot of time going through all the images present in
                    the study without worrying the identification issues of the
                    patient.
                  </p>
                </li>
              </ol>
            </div>
            <br></br>

            <div className="left1_andar">
              <li>
                <b>
                  Graduate Research Assistant | Multimedia Lab | Clemson
                  University, US |
                </b>
              </li>
              <ol>
                <li>
                  <p>
                    Integrated Deep learning based models into the Dyslexia Data
                    Consortium, a web platform created to better understand
                    dyslexia and developmental language disorders in general, as
                    well as to provide data to aid replication and data sharing.
                  </p>
                </li>
                <li>
                  <p>
                    Various neuroimaging metrics were generated by CAT12 toolbox
                    for all T1-weighted images and were integrated into the
                    website to help the researchers understand dyslexia more
                    clearly. Integrated necessary different neuroimaging
                    fractional intensity threshold images from the FSL BET tool.
                  </p>
                </li>
                <li>
                  <p>
                    Developed a Data quality template for visual inspection of
                    the images facilitated with CRUD operations. Worked on
                    Django ORM API to create and insert data into tables and
                    access the database. Client side validation done using the
                    sweetalert, a WAI-ARIA specification to increase user
                    accessibility.
                  </p>
                </li>
                <li>
                  <p>
                    Administered everyday operations of website and made
                    necessary changes on a regular basis. Suggested
                    modifications to the researchers to enhance the usability of
                    the website. Performed periodic assessments on website
                    traffic to generate reports on traffic activities.
                  </p>
                </li>
              </ol>
            </div>
          </ul>
        </div>
        <br></br>
        <div className="coursework_wrapper">
          <center>
            <h2>MS - COURSEWORK</h2>
          </center>
          <div className="andar">
            <ul>
              <li>
                <b>Spring 2021</b>
                <ol>
                  <li>Deep Reinforcement Learning </li>
                  <li>Applied Data Science </li>
                  <li>Statistical Analysis - I </li>
                </ol>
              </li>
              <br></br>

              <li>
                <b>Fall 2021</b>
                <ol>
                  <li>Machine Learning - Implementation and Evaluation </li>
                  <li>Data Analysis</li>
                  <li>Foundations of Software Engineering</li>
                </ol>
              </li>
              <br></br>

              <li>
                <b>Spring 2022</b>
                <ol>
                  <li>Artificial Intelligence </li>
                  <li>Distributed Denial Service of attacks</li>
                  <li>Statistical Analysis - II (Regression Analysis)</li>
                </ol>
              </li>
              <br></br>

              <li>
                <b>Fall 2022</b>
                <ol>
                  <li>Cloud Computing </li>
                </ol>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
