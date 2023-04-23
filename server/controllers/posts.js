import posts from '../models/posts.js'

export const getposts = async function(req,res)
{
    try 
    {
        const postsmessage = await posts.find();
        res.status(200).json(postsmessage);
    } 
    catch (error)
    {
        res.status(404).json({message:error.message});
    }
}


export const createpost = async function(req,res){
    const body = req.body;
    const newpost = new posts(body);
    try 
    {
        await newpost.save();
        res.status(201).json(newpost);
        
    } 
    catch (error) 
    {
        res.status(409).json({message:error.message});  
    }
}


export const test = (req,res)=>{
    try {
        const username = req.body.username
        console.log("The username is : " + username);
        res.send("The username is "+username)
    }
    catch (error) 
    {
        res.send(404).json({message:error.message})
    }
    
}

// export const firstpage = function(req,res)
// {
//     try 
//     {
//         res.send("I am there to receive you !!");
//         console.logging("working");
//     } 
//     catch (error) 
//     {
//         res.send(404).json({message:error.message})
//     }
// }