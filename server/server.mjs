import express, { application } from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import multer from 'multer';
import crypto from 'crypto';
import bycrypt from 'bcrypt'
import cookieParser from "cookie-parser";
import cookie from 'cookie-parser';
import jwt from "jsonwebtoken";
import postroutes from './routes/posts.js';
import test from './routes/posts.js';
// import firstpage from "./controllers/posts.js";
import contact from './routes/posts.js'
import friends from './models/friends.js'
import images from './models/image.js'
import users from './models/user.js'
import * as fs from 'fs';
import download from 'download';
import nodemailer from 'nodemailer';
import AWS from 'aws-sdk';
import { env } from "process";
import handlebars from 'handlebars'

dotenv.config();

const app = express();
app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({limit:"30mb",extended    :true}));
app.use(cookieParser())
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


app.get('/verify-email',async function(req,res)
{
    try
    {
        const token = req.query.token
        const user = await users.findOne({emailToken:token})
        if (user)
        {
            user.emailToken = null
            user.isVerified = true
            await user.save()
            res.redirect("http://localhost:3000/research")
        }
    }
    catch(error)
    {
        res.sendStatus(404).json({message:error.message});
    }
})
app.post('/register_jwt',async (req,res)=>
{
    try 
    {
        const {name,email,password} = req.body;
        const user = new users({
            name,
            email,
            password,
            emailToken:crypto.randomBytes(64).toString('hex'),
            isVerified:false,
        })
        const salt = await bycrypt.genSalt(10);
        const hashpassword = await bycrypt.hash(user.password,salt)
        user.password = hashpassword
        const newUser = await user.save()

        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD 
            }
        });

        const sourc = fs.readFileSync('../src/verify_email.html', 'utf-8').toString();
        const templat = handlebars.compile(sourc);
        const replacement = {username:user.name,emailToken:user.emailToken}
        const htmlse = templat(replacement)

        console.log(user.emailToken)

        let mailOptions = {
            from: 'rphatan@g.clemson.edu', 
            to: user.email, 
            subject: 'Verify your email address',
            html: '<a href="http://localhost:3001/verify-email?token=' + user.emailToken + '">Verify</a>'
        };
        
        transporter.sendMail(mailOptions, (err, data) => {
            if (err) 
            {
                console.log(err.message);
            }
            if (!err)
            {
                res.send("Verification email is sent to your email address !")
            }
        });

    } 
    catch (error) 
    {
        res.sendStatus(404).json({message:error.message});
    }
});


const createtoken =(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET)
}

const login_required = async(req,res,next)=>
{
    const token = req.cookies['access-token']
    if (token)
    {
        const validtoken = await jwt.verify(token,process.env.JWT_SECRET)
        if (validtoken)
        {
            res.user = validtoken.id
            next()
        }
        else
        {
            console.log("token expired")
        }
    }
    else
    {
        console.log("token not found")
    }
}

app.post('/login_jwt',async function(req,res)
{
    try 
    {
        const {email,password} = req.body;
        const finduser = await users.findOne({email:email})
        if (finduser)
        {
            const match = await bycrypt.compare(password,finduser.password)
            if (match)
            {
                token = createtoken(finduser.id);
                res.cookie('access-token',token)
            }
            else
            {
                res.send("Invalid password")
            }
        }
        else
        {
            res.send("User is not registered")
        }
       
    } 
    catch (error) 
    {
        res.sendStatus(404).json({message:error.message});
    }
});


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

// const s3 = new AWS.S3({
//     accessKeyId: process.env.ACCESS_ID_AWS,
//     secretAccessKey: process.env.ACCESS_KEY_AWS
// });

// const params = {
//     Bucket: process.env.AWS_BUCKET_NAME,
    
// };

// s3.createBucket(params, function(err, data) {
//     if (err) console.log(err, err.stack);
//     else console.log('Bucket Created Successfully', data.Location);
// });

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

app.post('/send_email',(req,res) =>
{
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

        const source = fs.readFileSync('../src/template.html', 'utf-8').toString();
        const template = handlebars.compile(source);
        const replacements = {username:username}
        const htmlsend = template(replacements)
        
        let mailOptions = {
            from: 'rphatan@g.clemson.edu', 
            to: email, 
            subject: 'Successful Contact submission',
            html: htmlsend
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

app.listen(3001,function (){
    console.log("Server is running !!!!");  
});


