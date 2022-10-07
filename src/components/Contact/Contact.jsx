import React from 'react'
import axios from 'axios'
import Navbar from '../Navbar/Navbar'
import '../Contact/Contact.css'
// import {EmailShareButton,WhatsappShareButton,FacebookShareButton,LinkedinShareButton, LinkedinIcon} from 'react-share'
// import {FacebookIcon} from 'react-share'
import { Link } from 'react-router-dom'
import  {API} from 'aws-amplify'
import {Container,Button,Form} from 'react-bootstrap';
import Topbar from '../Topbar/Topbar'
import Swal from 'sweetalert2'


const formState = { username: '', email: '', message: '' };
  
  function updateFormState(key, value) {
    formState[key] = value;
  }

function Contact() 
{

  function addContact() {
    const data = {
      body: {
        username: formState.username,
        email: formState.email,
        message: formState.message
      }
    };
  
    API.post('rphatan', '/sendemail', data);
    // Swal.fire({
    //   'Thanks for providing your details !!!',
    //   'I really appreciate it !!',
    //   'success'})

      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      })

    // setTimeout(function () {
    //   window.location.href = '/'

       
    // }, 5000);
  
    
    window.location.href = '/'
    // console.log({ apiData });
    // alert('Mail sent');

  //   Swal.fire(
  //     'Thanks for !!!',
  //     'I really appreciate it !!',
  //     'success')
  // }
  }

  return (
    <>
    {/* <Navbar/> */}
    <Topbar/>
            <Container>

    <div className="heading">
      <div className="text">
        <h3 className="popl">Let's Talk ....  ?</h3>
        <h3 className="lop">I would love to hear from you. Get in touch with me by providing<br></br> your details and I will reach out to you at the earliest.</h3>
      </div>
      <div className="group">
        <h3 className='middle'>DROP ME A MESSAGE !</h3>

          <Form>

          <Form.Group>
            <Form.Label>Name:</Form.Label>
            <Form.Control
                placeholder="Enter your Name"
                onChange={e=>  updateFormState('username', e.target.value)} /> 
          </Form.Group>
          <br></br>

          <Form.Group>
            <Form.Label>Email:</Form.Label>
            <Form.Control
                placeholder="Enter your Email"
                onChange={e=>  updateFormState('email', e.target.value)} /> 
          </Form.Group>
          <br></br>
          <Form.Group>
            <Form.Label>Message:</Form.Label>
            <Form.Control as="textarea" rows={7}
                placeholder="Enter your message"
                onChange={e=>  updateFormState('message', e.target.value)} /> 
          </Form.Group>
          <br></br>
          <br></br>
          <Button style={{marginLeft:95}} onClick={addContact}>Send me a message</Button>
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


  




