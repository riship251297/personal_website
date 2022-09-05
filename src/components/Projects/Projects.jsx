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


import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image="/static/images/cards/paella.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
            large plate and set aside, leaving chicken and chorizo in the pan. Add
            pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
            stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is absorbed,
            15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
            mussels, tucking them down into the rice, and cook again without
            stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don&apos;t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
