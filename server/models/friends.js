import mongoose from "mongoose";

export const friends_schema = mongoose.Schema({
    username: {type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    isadmin:{type:Boolean,default:false,},
    
},{timestamp:true});

const friends = mongoose.model("friends",friends_schema);

export default friends;