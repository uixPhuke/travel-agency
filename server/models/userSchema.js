const mongoose=require('mongoose')
const Schema=mongoose.Schema

//define user schema
const userSchema=new Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        minlength:3
    },
    password:{
        type:String,
        required:true,
        minlength:6
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

module.exports=mongoose.model("User",userSchema)