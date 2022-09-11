import React from 'react'
import axios from 'axios'
import {useState,useEffect} from 'react'
import Navbar from '../Navbar/Navbar'
import '../Contact/Contact.css'
import {EmailShareButton,WhatsappShareButton,FacebookShareButton,LinkedinShareButton, LinkedinIcon} from 'react-share'
import {FacebookIcon} from 'react-share'
import { Link } from 'react-router-dom'

function Contact() 
{

  const [name,SetName] = useState("");
  const [email,SetEmail] = useState("");
  const [message,SetMessage] = useState("");





  async function handle(event)
    {
      event.preventDefault();
      const data = {'username':name,'email':email,'message':message}
      const response = await axios
      .post("http://localhost:3001/send_email", data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

      window.location = '/research';



    }
  

    // async function handle(event)
    // {
    //   event.preventDefault();
    //   const contact_form = new FormData();
    //   contact_form.append("username",name)
    //   contact_form.append("email",email)

    //   fetch('http://localhost:3001/send_email', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: contact_form
    // });

      // const url = localhost:4000/api/users/register;

      // let sendData = () => {
      // axios.post(url, reactData)
      //   .then(res => console.log('Data send'))
      //   .catch(err => console.log(err.data))
      // }

      // axios.put("http://localhost:3001/send_email", contact_form)
      // .then(res=>console.log(res))
      // .then(err=>console.log(err))


      // await axios.post("http://localhost:3501/send_email/", contact_form).then((res)=>{
      //   console.log(res)

      


      
       
      

      // axios
      // .post("http://localhost:3501/send_email", form_d, {
      //   headers: {
      //     "Content-Type": "multipart/form-data",
      //   },
      // })
      // .then((res) => {
      //   console.log(res);
      // })
      // .catch((err) => {
      //   console.log(err);
      // });

      
    
  return (
    <>
    <Navbar/>
    <div className="heading">
      <div className="text">
        <h3>You plan to contact me ....  ?</h3>
        <h3>I would love to hear from you ... Here is how you can reach out to me ...</h3>
      </div>
      <div className="group">
        <h2 className='middle'>DROP ME A MESSAGE !</h2>
        <div className="form"id="formdata">
          <form action="/send_email"onSubmit={handle}>

            <div className="f_section">
              <label>Name:
                <input type="text" 
                value={name} 
                placeholder={"Enter your name"}
                onChange={(e)=> SetName(e.target.value)} />         
              </label>
            </div>

            <div className="s_section">
              <label>Email :
                <input type="email" 
                value={email} 
                placeholder={"Enter your email"}
                onChange={(e)=> SetEmail(e.target.value)}/>
              </label>
            </div>

            <br></br>
            <div className="area">
              <label className='aream'>Message :
                <textarea id="w3review"
                 name="w3review" 
                 rows="6" 
                 cols="35"               
                placeholder={"Enter your message !!"}
                onChange={(e)=> SetMessage(e.target.value)} 
                > 
               </textarea>
              </label>
  

            </div>

            <div className="submit_section">
              <input type="submit"
              value="Submit" />
             </div>
          </form>
        </div>
      </div>
      <FacebookShareButton
          url = "https://www.facebook.com">
          <FacebookIcon logoFillColor="white" round={true}></FacebookIcon>
        </FacebookShareButton>
        <LinkedinShareButton
        url="https://www.linkedin.com/in/rishi251297/">
          <LinkedinIcon round={true}></LinkedinIcon>

        </LinkedinShareButton>
    </div>
    <div className='footer'>
      
    </div>
    </>
  )
}

export default Contact


  




