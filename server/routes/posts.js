import express from "express";
import CryptoJS from "crypto-js";
import {getposts,createpost,test} from '../controllers/posts.js';
const router = express.Router();

import friends from '../models/friends.js';

router.post("/contact",async (req,res)=>{
    const newfriend = new friends({
        username:req.body.username,
        email:req.body.email,
        password:Crypto.arguments.encrypt(req.body.password,process.env.SECRET_KEY)
    })
    try
    {
        console.log("inside here");
    res.send("HI thanks for being a friend");
    const savedfriend = await newfriend.save();
    res.send(200).json(savedfriend);
    }
    catch(error)
    {
        res.status(500).json({message:error.message});
    }
})



export default router;