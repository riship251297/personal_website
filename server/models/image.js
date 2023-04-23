import mongoose from "mongoose";

const imageschema = mongoose.Schema({
    name : {type:String,required:true},
    image :{data:Buffer,contentType:String}

},{timestamp:true});

const images = mongoose.model("images",imageschema)

export default images;