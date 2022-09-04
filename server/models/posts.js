import mongoose from "mongoose";

const postscehma = mongoose.Schema({
    title:String,
    message:String,
    creator:String,
    selectdFile:String,
    likecount :{
        type:Number,
        default:0
    },
    createdate : {
        type:Date,
        default: new Date()
    },
});

const posts = mongoose.model('posts',postscehma)
export default posts;