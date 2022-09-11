import mongoose from "mongoose";

const userschema = mongoose.Schema({
    name : {type:String,required:true},
    email : {type:String,required:true,unique:true},
    password : {type:String,required:true},
    emailToken : {type:String},
    isVerified : {type:Boolean},
    date : {type:Date,default:Date.now()},

},{timestamp:true});

const users = mongoose.model("users",userschema)

export default users;