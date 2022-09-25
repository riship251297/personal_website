/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/
import mongoose from "mongoose";
import cors from "cors";
import dotenv from 'dotenv';
import multer from 'multer';
import crypto from 'crypto';
import bycrypt from 'bcrypt'
import cookieParser from "cookie-parser";
import cookie from 'cookie-parser';
import jwt from "jsonwebtoken";

import download from 'download';
import nodemailer from 'nodemailer';
import AWS from 'aws-sdk';
import { env } from "process";
import handlebars from 'handlebars'



const express = require('express')
const bodyParser = require('body-parser')
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')

// declare a new express app
const app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())
app.use(cors())

// Enable CORS for all methods
// app.use(function(req, res, next) {
//   res.header("Access-Cont
// rol-Allow-Origin", "*")
//   res.header("Access-Control-Allow-Headers", "*")
//   next()
// });


/**********************
 * Example get method *
 **********************/

// app.get('/sendemail', function(req, res) {
//   // Add your code here
//   res.json({success: 'get call succeed!', url: req.url});
// });

// app.get('/sendemail/*', function(req, res) {
//   // Add your code here
//   res.json({success: 'get call succeed!', url: req.url});
// });

/****************************
* Example post method *
****************************/
app.post('/sendemail',(req,res) =>
{
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Max-Age", "1800");
  res.setHeader("Access-Control-Allow-Headers", "content-type");
  res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 
      try 
    {
        const username = req.body.username;
        const email = req.body.email;
        const message = req.body.message

        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD 
            }
        });

        // const source = fs.readFileSync('../src/template.html', 'utf-8').toString();
        // const template = handlebars.compile(source);
        // const replacements = {username:username}
        // const htmlsend = template(replacements)
        
        let mailOptions = {
            from: 'rphatan@g.clemson.edu', 
            to: email, 
            subject: 'Successful Contact submission',
            html: '<h2>Rishikesh</h2>'
        };
        
        transporter.sendMail(mailOptions, (err, data) => {
            if (err) {
                console.log(err.message);
    
            }
            if (!err)
            {
                res.send("Email sent !")
            }
        });

    }
    catch (error) 
    {
        console.log(error)
        res.sendStatus(404).json({message:error.message});
    } 
});

// app.post('/sendemail', function(req, res) {
//   // Add your code here
//   res.json({success: 'post call succeed!', url: req.url, body: req.body})
// });

// app.post('/sendemail/*', function(req, res) {
//   // Add your code here
//   res.json({success: 'post call succeed!', url: req.url, body: req.body})
// });

// /****************************
// * Example put method *
// ****************************/

// app.put('/sendemail', function(req, res) {
//   // Add your code here
//   res.json({success: 'put call succeed!', url: req.url, body: req.body})
// });

// app.put('/sendemail/*', function(req, res) {
//   // Add your code here
//   res.json({success: 'put call succeed!', url: req.url, body: req.body})
// });

/****************************
* Example delete method *
****************************/

app.delete('/sendemail', function(req, res) {
  // Add your code here
  res.json({success: 'delete call succeed!', url: req.url});
});

app.delete('/sendemail/*', function(req, res) {
  // Add your code here
  res.json({success: 'delete call succeed!', url: req.url});
});

app.listen(3000, function() {
    console.log("App started")
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app
