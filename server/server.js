const express=require("express")
const app=express();



const PORT=process.env.PORT || 5000;
app.use(express.json());

//server PORT
app.listen(PORT,()=>{
    console.log(`Server running at PORT ${PORT}`);
});

//get request
app.get("/",(req,res)=>{
    res.json({msg:"This is server"})
})