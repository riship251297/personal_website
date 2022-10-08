import React from "react";
import Navbar from "../Navbar/Navbar";
import "../Projects/Projects.css";
import Topbar from "../Topbar/Topbar";
const Projects = () => {
  return (
    <>
      <Topbar />
      <div className="Deep">
        <div className="Rl">
          <div className="Rl_left1">
            <ul>
              <ul
                className="opl"
                style={{ marginBottom: "10px", marginLeft: "-40px" }}
              >
                <b>SOFTWARE ENGINEERING BASED PROJECTS : </b>
              </ul>
              <ol>
                <ul
                  className="pollo"
                  style={{ marginLeft: "-50px", marginBottom: "10px" }}
                >
                  <b>Portfolio Website</b> - Current{" "}
                  <a
                    href="www.rphatan.info"
                    style={{ fontSize: "20px", fontStyle: "arial" }}
                  >
                    Portfolio Website{" "}
                  </a>
                </ul>
                <ul
                  className="pollo"
                  style={{ marginLeft: "-50px", marginBottom: "10px" }}
                >
                  <mark>
                    Stack : | HTML | CSS | React | Amplify | Lambda | DynamoDB |
                    NodeJS | S3 | Route 53
                  </mark>
                </ul>
              </ol>
              <ol>
                <li>
                  <p>
                    This website itself is the portfolio project. It was
                    Designed and Developed using Bootstrap that includes
                    briefing regarding all projects and research activities,
                    with a photo gallery utility that lets users like, dis-like,
                    download image with previous user activity counts.
                  </p>
                </li>
                <li>
                  <p>
                    Extensively used React fundamentals and Web Hooks to promote
                    better component lifecycle practices with react-router to
                    navigate through various react components, with API calls
                    made using Axios HTTP client utility.Hosted website using
                    AWS amplify service with AWS Route 53 for Domain management
                    and S3 for storage purposes.
                  </p>
                </li>
                <li>
                  <p>
                    Performed email verification using nodemailer with API
                    creation and testing using Postman platform including
                    backend API servicing using AWS lambda alongwith database
                    interaction using AWS DynamoDB, with Git version control.
                  </p>
                </li>
              </ol>
            </ul>
          </div>
          <div className="Rl_right1">
            <img src={"images/popl.png"} width="450px" height="530px" alt="" />
          </div>
        </div>
      </div>

      <div className="Deep">
        <div className="Rl">
          <div className="Rl_left1">
            <ul>
              <ul
                className="opl"
                style={{ marginBottom: "10px", marginLeft: "-40px" }}
              >
                <b>DEEP REINFORCEMENT LEARNING BASED PROJECTS : </b>
              </ul>
              <ol>
                <ul
                  className="pollo"
                  style={{ marginLeft: "-50px", marginBottom: "10px" }}
                >
                  <b>Proximal Policy Optimization</b> - 2021
                </ul>
                <ul
                  className="pollo"
                  style={{ marginLeft: "-50px", marginBottom: "10px" }}
                >
                  <mark>
                    Stack : | Deep Learning | Python | Tensorflow | Open-AI Gym
                    | PyTorch{" "}
                  </mark>
                </ul>
              </ol>
              <ol>
                <li>
                  <p>
                    Implemented Proximal Policy Optimization algorithm, one of
                    the recent advancements in the field of Reinforcement
                    Learning.&nbsp;Proximal Policy Optimization is a policy
                    gradient method for Reinforcement Learning.
                  </p>
                </li>
                <li>
                  <p>
                    The whole idea of this algorithm in this environment in
                    layman terms is to train the agent to make the maximum use
                    of trajectories to learn hopping on the tiles. It uses
                    Actor-Critic Neural Network and is used in environments with
                    either discrete or continuous action spaces.&nbsp;This
                    algorithm is trained for many epochs until the environment
                    is solved.
                  </p>
                </li>
                <li>
                  <p>
                    Initially the agent takes 100 to 150 trajectories to take
                    one proper hop on the tile, but after almost 500 iterations
                    the agent takes only six to seven trajectories for a
                    sequence of successful hops. This algorithm is implemented
                    from scratch and tested on the Hopper Bullet Environment
                    (MUJUCO) using Generalized Advantage Estimator with a
                    capacity of batch size of 5000 samples of trajectories.
                  </p>
                </li>
              </ol>
            </ul>
          </div>
          <div className="Rl_right1">
            <video width="470" height="260" autoPlay loop muted>
              <source
                src={"https://personalwebsite9.s3.amazonaws.com/PPO.mp4"}
                type="video/mp4"
              />
            </video>
          </div>
        </div>
        <br></br>
        <div className="Rl2">
          <div className="Rl_left2">
            <ul>
              <ol>
                <ul
                  className="pollo"
                  style={{ marginLeft: "-50px", marginBottom: "10px" }}
                >
                  <b>Deep Q Networks</b> - 2021
                </ul>
                <ul
                  className="pollo"
                  style={{ marginLeft: "-50px", marginBottom: "10px" }}
                >
                  <mark>
                    Stack :| Deep Learning | Python | Tensorflow | Open-AI Gym |
                    PyTorch{" "}
                  </mark>
                </ul>
              </ol>
              <ol>
                <li>
                  <p>
                    Implemented Proximal Policy Optimization algorithm, one of
                    the recent advancements in the field of Reinforcement
                    Learning.&nbsp;Proximal Policy Optimization is a policy
                    gradient method for Reinforcement Learning.
                  </p>
                </li>
                <li>
                  <p>
                    The whole idea of this algorithm in this environment in
                    layman terms is to train the agent to make the maximum use
                    of trajectories to learn hopping on the tiles. It uses
                    Actor-Critic Neural Network and is used in environments with
                    either discrete or continuous action spaces.&nbsp;This
                    algorithm is trained for many epochs until the environment
                    is solved.
                  </p>
                </li>
                <li>
                  <p>
                    Initially the agent takes 100 to 150 trajectories to take
                    one proper hop on the tile, but after almost 500 iterations
                    the agent takes only six to seven trajectories for a
                    sequence of successful hops. This algorithm is implemented
                    from scratch and tested on the Hopper Bullet Environment
                    (MUJUCO) using Generalized Advantage Estimator with a
                    capacity of batch size of 5000 samples of trajectories.
                  </p>
                </li>
              </ol>
            </ul>
          </div>
          <div className="Rl_right2">
            <video width="470" height="350" autoPlay loop muted>
              <source
                src={"https://personalwebsite9.s3.amazonaws.com/DQN.mp4"}
                type="video/mp4"
              />
            </video>
          </div>
        </div>

        <br></br>
        <div className="Ds">
          <div className="Ds_left">
            <ul>
              <ul
                className="opl"
                style={{ marginBottom: "10px", marginLeft: "-15px" }}
              >
                <b>MACHINE LEARNING BASED PROJECTS : </b>
              </ul>
              <ol>
                <ul
                  className="pollo"
                  style={{ marginLeft: "-50px", marginBottom: "10px" }}
                >
                  <b>Acceleration Prediction of Cars</b>
                </ul>
                <ul
                  className="pollo"
                  style={{ marginLeft: "-50px", marginBottom: "10px" }}
                >
                  <mark>
                    Stack :| Machine Learning | Python | Pandas | Matplotlib{" "}
                  </mark>
                </ul>
              </ol>
              <ol>
                <li>
                  <p>
                    The primary focus of this project is to predict the
                    Acceleration performance of a vehicle using the predictors
                    available to the car manufacturer at the vehicle development
                    or target definition stage.
                  </p>
                </li>
                <li>
                  <p>
                    The project aims to determine key performance parameter of
                    the vehicle using data science models at a stage where the
                    intrinsic vehicle parameters are being finalized and can be
                    altered to get the understanding and visualize the
                    difference without much additional cost when the vehicle
                    development is in its initial phase.
                  </p>
                </li>
                <li>
                  <p>
                    This is an important task, as it determines the performance
                    based on the estimates for the vehicle parameters at the
                    earliest stage when the cost to change these parameters is
                    minimal, and increases exponentially as we move to larger
                    stages.
                  </p>
                </li>
                <li>
                  <p>
                    The intent to use all these seven models is to ensure an
                    application driven understanding of the entire regression
                    arsenal developed in the course.
                  </p>
                </li>
              </ol>
            </ul>
          </div>
          <div className="Ds_right">
            <img src={"images/table.png"} width="450px" height="350px" alt="" />
          </div>
        </div>
        <br></br>
        <div className="speed">
          <div className="speed-left">
            <ul>
              <ol>
                <ul
                  className="pollo"
                  style={{ marginLeft: "-50px", marginBottom: "10px" }}
                >
                  <b>Speed Detection using Kalman Filtering </b>
                </ul>
                <ul
                  className="pollo"
                  style={{ marginLeft: "-50px", marginBottom: "10px" }}
                >
                  <mark>
                    Stack :| Machine Learning | Python | Pandas | Matplotlib |
                    Open-CV{" "}
                  </mark>
                </ul>
              </ol>
              <ol>
                <li>
                  <p>
                    The primary focus of this project is to capture
                    over-speeding of vehicles in accident prone areas available
                    to the car manufacturer at the vehicle development or target
                    definition stage.
                  </p>
                </li>
                <li>
                  <p>
                    The project aims to determine key performance parameter of
                    the vehicle using data science models at a stage where the
                    intrinsic vehicle parameters are being finalizede and can be
                    altered to get the understanding and visualize the
                    difference without much additional cost when the vehicle
                    development is in its initial phase.
                  </p>
                </li>
                <li>
                  <p>
                    This is an important task, as it determines the performance
                    based on the estimates for the vehicle parameters at the
                    earliest stage when the cost to change these parameters is
                    minimal, and increases exponentially as we move to larger
                    stages.
                  </p>
                </li>
              </ol>
            </ul>
          </div>
          <div className="speed-right">
            <img src={"images/car.png"} width="450px" height="350px" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
