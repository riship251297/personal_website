import React from 'react'
import axios from 'axios'
import {useState,useEffect} from 'react'
import Navbar from '../Navbar/Navbar'
import '../Contact/Contact.css'
import { margin } from '@mui/system'

function Contact() 
{

  const [name,SetName] = useState("");
  const [email,SetEmail] = useState("");

  async function handle(event)
    {
      event.preventDefault();
      
      const data = {'username':name,'email':email}

      const response = await axios
      .post("http://localhost:3001/send_email", data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
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

      

      // await axios({
      //   method: 'post',
      //   url: 'http://localhost:3501/send_email',
      //   data: contact_form,
      //   header: {
      //             // 'Accept': 'application/json',
      //             // 'Content-Type': 'multipart/form-data',
      //             'Content-Type': 'contact_form.getHeaders()'

      //           },
      //           transformRequest:contact_form => contact_form,

      //     })
      
       
      

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
            <div className="area">
              <textarea id="w3review" name="w3review" rows="5" cols="40"> 
              </textarea>
  

            </div>
            <div className="submit_section">
              <input type="submit"
              value="Submit" />
             </div>
          </form>
        </div>
      </div>
    </div>
    <div className='footer'>
      
    </div>
    </>
  )
}

export default Contact


  




