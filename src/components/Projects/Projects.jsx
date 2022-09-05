import React from 'react'
import Navbar from '../Navbar/Navbar'
import '../Projects/Projects.css';
import ppovideo from '../Videos/PPO.mp4'
import dqnvideo from '../Videos/DQN.mp4'
// src/Video/DQN.mp4
const Projects = () => {
  return (
      <>
      <Navbar/>
      <div className='Deep'>
        <div className='Rl'>
          <div className='Rl_left1'>
            <ul>
              <ul><b>DEEP REINFORCEMENT LEARNING BASED PROJECTS : </b></ul>
              <ol>
                <ul><b>Proximal Policy Optimization</b> - 2021</ul>
                <ul><mark>Stack :| Deep Learning | Python | Tensorflow | Open-AI Gym | PyTorch </mark></ul>
              </ol>
              <ol>
                <li>Implemented Proximal Policy Optimization algorithm, one of the recent advancements in the 
                  field of Reinforcement Learning.&nbsp;Proximal Policy Optimization is a policy gradient method
                  for Reinforcement Learning.
                </li>
                <li>The whole idea of this algorithm in this environment in layman terms is to train the agent to make the maximum use of trajectories to learn hopping on the tiles.
                  It uses Actor-Critic Neural Network and is used in environments with either discrete or continuous 
                  action spaces.&nbsp;This algorithm is trained for many epochs until the environment is solved.
                </li>
                <li>
                  Initially the agent takes 100 to 150 trajectories to take one proper hop on the tile, but after almost 500 iterations the agent takes only 
                  six to seven trajectories for a sequence of successful hops.
                  This algorithm is implemented from scratch and tested on the Hopper Bullet Environment (MUJUCO)
                  using Generalized Advantage Estimator with a capacity of batch size of 5000 samples 
                  of trajectories.
                </li>
              </ol>
            </ul>
          </div>
          <div className='Rl_right1'>
            <video width="550" height="350" autoPlay loop muted >
              <source src={ppovideo}  type="video/mp4"/>
            </video>
          </div>
        </div>

        <div className='Rl2'>
          <div className='Rl_left2'>
            <ul>
              <ol>
                <ul><b>Deep Q Networks</b> - 2021</ul>
                <ul><mark>Stack :| Deep Learning | Python | Tensorflow | Open-AI Gym | PyTorch </mark></ul>
            </ol>
            <ol>
              <li>Implemented Proximal Policy Optimization algorithm, one of the recent advancements in the 
                field of Reinforcement Learning.&nbsp;Proximal Policy Optimization is a policy gradient method
                for Reinforcement Learning.
              </li>
              <li>The whole idea of this algorithm in this environment in layman terms is to train the agent to make the maximum use of trajectories to learn hopping on the tiles.
                It uses Actor-Critic Neural Network and is used in environments with either discrete or continuous 
                action spaces.&nbsp;This algorithm is trained for many epochs until the environment is solved.
              </li>
              <li>
                Initially the agent takes 100 to 150 trajectories to take one proper hop on the tile, but after almost 500 iterations the agent takes only 
                six to seven trajectories for a sequence of successful hops.
                This algorithm is implemented from scratch and tested on the Hopper Bullet Environment (MUJUCO)
                using Generalized Advantage Estimator with a capacity of batch size of 5000 samples 
                of trajectories.
              </li>
            </ol>
            </ul>
          </div>
          <div className='Rl_right2'>
            <video width="550" height="350" autoPlay loop muted >
              <source src={dqnvideo}  type="video/mp4"/>
            </video>
          </div>
        </div>
        <hr></hr>
             
        <div className='Ds'>
          <div className='Ds_left'>
            <ul>
              <ul><b>MACHINE LEARNING BASED PROJECTS : </b></ul>
              <ol>
                <ul><b>Acceleration Prediction of Cars</b></ul>
                <ul><mark>Stack :| Machine Learning | Python | Pandas | Matplotlib </mark></ul>
              </ol>
              <ol>
                <li>The primary focus of this project is to predict the Acceleration performance of a vehicle using the predictors 
                  available to the car manufacturer at the vehicle development or target definition stage.
                </li>
                <li>The project aims to determine key performance parameter of the vehicle using data science models at a stage 
                  where the intrinsic vehicle parameters are being finalized and can be altered to get the understanding and visualize the difference without much additional 
                  cost when the vehicle development is in its initial phase.
                </li>
                <li>
                This is an important task, as it determines the performance based on the estimates for the vehicle parameters at the earliest stage when the cost to change these parameters is minimal, 
                and increases exponentially as we move to larger stages.
                </li>
                <li>
                  The intent to use all these seven models is to ensure an application driven understanding of the entire regression arsenal developed in the course.
                </li>
              </ol>
            </ul>
          </div>
          <div className='Ds_right'>
            <img src={"images/table.png"} width="450px"height="350px"alt=''/>
          </div>
        </div>
        <div className='speed'>
          <div className='speed-left'>
            <ul>
                <ol>
                  <ul><b>Speed Detection using Kalman Filtering </b></ul>
                  <ul><mark>Stack :| Machine Learning | Python | Pandas | Matplotlib | Open-CV </mark></ul>
                </ol>
                <ol>
                  <li>The primary focus of this project is to capture over-speeding of vehicles in accident prone areas
                    available to the car manufacturer at the vehicle development or target definition stage.
                  </li>
                  <li>The project aims to determine key performance parameter of the vehicle using data science models at a stage 
                    where the intrinsic vehicle parameters are being finalizede and can be altered to get the understanding and visualize the difference without much additional 
                    cost when the vehicle development is in its initial phase.
                  </li>
                  <li>
                  This is an important task, as it determines the performance based on the estimates for the vehicle parameters at the earliest stage when the cost to change these parameters is minimal, 
                  and increases exponentially as we move to larger stages.
                  </li>
                  <li>
                    The intent to use all these seven models is to ensure an application driven understanding of the entire regression arsenal developed in the course.
                  </li>
                </ol>
            </ul>
          </div>
          <div className='speed-right'>
            <img src={"images/car.png"} width="450px"height="350px"alt=''/>
          </div>
        </div>
      </div>
      <div className='footer'>
      
      </div>
      </>
  );
}

export default Projects;


