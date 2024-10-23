const bcrypt=require('bcryptjs')
const jwt=require("jsonwebtoken")
const User=require('../models/userSchema')



const userCtrl={
    //register a user
    register:async(req,res)=>{
        try {
            const {username,email,password}=req.body;

            //check if the username or email already exists?
            const existingUser= (await User.findOne({username})) || (await User.findOne({email})) 

            if(existingUser){
                return res.status(400).json({message: "Username or email already exists"});
            }
            if(password.length<6) return res.status(400).json({message: "Password must be 6 character"})

            //hashing
            const hashedPassword=await bcrypt.hash(password,12);
            
            
            //create a new user
            const newUser=new User({
                username,
                password:hashedPassword,
                email
            })

            //save the user
            await newUser.save();
            
        } catch (error) {
            
        }
    }
}

