import React from 'react'
// import axios from 'axios'
import Navbar from '../Navbar/Navbar'
import '../Contact/Contact.css'
// import {EmailShareButton,WhatsappShareButton,FacebookShareButton,LinkedinShareButton, LinkedinIcon} from 'react-share'
// import {FacebookIcon} from 'react-share'
// import { Link } from 'react-router-dom'
import  {API} from 'aws-amplify'
import {Container,Button,Form} from 'react-bootstrap';


const formState = { username: '', email: '', message: '' };
  
  function updateFormState(key, value) {
    formState[key] = value;
  }

function Contact() 
{

  async function addContact() {
    const data = {
      body: {
        username: formState.username,
        email: formState.email,
        message: formState.message
      }
    };
  
    console.log(data);
    const apiData = await API.post('rphatan', '/sendemail', data);
    console.log({ apiData });
    alert('Mail sent');
  }

  return (
    <>
    <Navbar/>
            <Container>

    <div className="heading">
      <div className="text">
        <h3>You plan to contact me ....  ?</h3>
        <h3>I would love to hear from you ... Here is how you can reach out to me ...</h3>
      </div>
      <div className="group">
        <h2 className='middle'>DROP ME A MESSAGE !</h2>

          <Form>

          <Form.Group>
            <Form.Label>Name:</Form.Label>
            <Form.Control
                placeholder="Enter your name"
                onChange={e=>  updateFormState('username', e.target.value)} /> 
          </Form.Group>

          <Form.Group>
            <Form.Label>Email:</Form.Label>
            <Form.Control
                placeholder="Enter your name"
                onChange={e=>  updateFormState('email', e.target.value)} /> 
          </Form.Group>

          <Form.Group>
            <Form.Label>Message:</Form.Label>
            <Form.Control
                placeholder="Enter your name"
                onChange={e=>  updateFormState('message', e.target.value)} /> 
          </Form.Group>

          <Button onClick={addContact}>Send a message</Button>



      
            
        
          </Form>



            
        </div>
      </div>
      {/* <FacebookShareButton
          url = "https://www.facebook.com">
          <FacebookIcon logoFillColor="white" round={true}></FacebookIcon>
        </FacebookShareButton>
        <LinkedinShareButton
        url="https://www.linkedin.com/in/rishi251297/">
          <LinkedinIcon round={true}></LinkedinIcon>

        </LinkedinShareButton> */}
    
    <div className='footer'>
      
    </div> 
    </Container>
    </>
  )
}

export default Contact


  




