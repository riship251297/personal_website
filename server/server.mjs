import express, { application } from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import multer from 'multer';

import postroutes from './routes/posts.js';
import test from './routes/posts.js';
// import firstpage from "./controllers/posts.js";

import contact from './routes/posts.js'
import friends from './models/friends.js'
import images from './models/image.js'
import * as fs from 'fs';

import download from 'download';

import nodemailer from 'nodemailer';

import AWS from 'aws-sdk';
import { env } from "process";



dotenv.config();


const app = express();
app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({limit:"30mb",extended    :true}));

// var urlencodedParser = bodyParser.urlencoded({ extended: true })


app.use(cors());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri).then(function (){
    console.log("Mongoose connected successfully");
})


app.get('/',(req,res)=>{
    res.send("can you see me !");
});

app.post('/tests',(req,res)=>
{
    try 
    {
        const username = req.body.username;
        res.send("The username is "+username);
    } 
    catch (error) 
    {
        res.sendStatus(404).json({message:error.message});
    }
});

// import CryptoJS from 'crypto-js';
// app.post("/contact",async (req,res)=>{
//     const newfriend = new friends({
//         username:req.body.username,
//         email:req.body.email,
//         password:CryptoJS.AES.encrypt(req.body.password,process.env.SECRET_KEY).toString(),
//     });
//     try
//     {
//         const savedfriend = await newfriend.save();
//         res.sendStatus(200).json(savedfriend);
//     }
//     catch(error)
//     {
//         res.sendStatus(500).json({message:error.message});
//     }
// });



const Storage = multer.diskStorage({
    destination:'uploads',
    filename:(req,file,cb) =>{
        cb(null,file.originalname);
    },
});


const upload = multer({
    storage:Storage
}).single('testImage')

app.post('/upload',(req,res)=>
{
    console.log(req.body.name)
    console.log(req.body.testImage)
    upload(req,res,(err)=>
    {
        if (err)
        {
            console.log(err)
        }
        else
        {
            const newimage = new images({
                name:req.body.name,
                image :
                {
                    data:req.body.testImage,
                    contentType:'image/png'
                }
            })
            newimage.save()
            .then(()=>res.send("successfully uploaded")).catch(err=>console.log(err))
        }
    })
})

const s3 = new AWS.S3({
    accessKeyId: process.env.ACCESS_ID_AWS,
    secretAccessKey: process.env.ACCESS_KEY_AWS
});


const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    
};

s3.createBucket(params, function(err, data) {
    if (err) console.log(err, err.stack);
    else console.log('Bucket Created Successfully', data.Location);
});

app.post('/send',function(req,res)
{
    const filename = req.body.name
    const image = req.body.testImage
   
    const fileContent = fs.readFileSync('/Users/rishikesh/Desktop/personal_website/public/images/FullSizeRender.png');
    const params = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: 'op.png', 
        Body: fileContent
    };

    s3.upload(params, function(err, data) 
    {
        if (err) 
        {
            console.log(err);
        }
        else
        {
            res.send("uploaded successfully ")
            console.log(`File uploaded successfully. ${data.Location}`);
        }
    });
})


app.get('getimages_aws',function(req,res)
{

})


app.get('/data',function(req,res){

    res.json({
        number: 1,
        name: 'John',
        gender: 'male'
      });
    
})


app.get('/images_sharing',function(req,res){
    res.json({
        image_path:'images/brain.png',
    })
})

  


app.get('/getimages', async function(req,res)
{
    try 
    {
        const postimages = await images.find();
        console.log(postimages)
        res.status(200).json(postimages);
    } 
    catch (error)
    {
        res.status(404).json({message:error.message});
    }
})



// app.get('/download',async function(req,res)
// {
//     res.send("rishikesh")
//     const file = '/rishi_0.2.png'
//     const path = '/Users/rishikesh/Desktop/project/public/images/';
//     download(file,path)
// .then(() => {
//     console.log('Download Completed');
// })
// })


app.get('/dat',async function(req,res)
{
    let data = {"name":"rishikesh",
            "email":"rphatan@clemson.edu",
            "ID ":"251297"
        }
        res.json(data)
})

app.get('/send_data',async function(req,res)
    {
        console.log(req.body.username)
    })



app.post('/send_email',(req,res) =>
{
    try 
    {
        const username = req.body.username;
        const email = req.body.email;
        console.log(email)

        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD 
            }
        });
        
        let mailOptions = {
            from: 'rphatan@g.clemson.edu', 
            to: email, 
            subject: 'Successful Contact submission',
            text: 'Thanks for your contact information !!!. I will contact you soon .. '
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
        res.sendStatus(404).json({message:error.message});
    }
     
});







app.listen(3001,function (){
    console.log("Server is running !!!!");  
});


